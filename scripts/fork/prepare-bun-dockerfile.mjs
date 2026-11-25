// Fork-owned build overlay. Upstream Dockerfile.bun stays untouched in Git.
import { readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const fetchStage = "FROM base AS opencode-fetch\n# Embedded OpenCode Server: verified upstream native binary, shared by both\n# Bun runtime targets. Use the baseline x64 build for older AMD64 CPUs.\n# Keep the version and both upstream release asset checksums in sync.\nRUN set -eu; \\\n    version=1.19.6; \\\n    case \"$(dpkg --print-architecture)\" in \\\n      amd64) asset=opencode-linux-x64-baseline.tar.gz; checksum=8443113b3f3dfebf8b0fa91c4377e5519a62b9231732d9344a5df001e4a852b3 ;; \\\n      arm64) asset=opencode-linux-arm64.tar.gz; checksum=5b68c1f4c5e75b4134e664cc8f36d634d64208d4fcfe5bcf3b48bab699c2dbac ;; \\\n      *) echo \"Unsupported OpenCode architecture\" >&2; exit 1 ;; \\\n    esac; \\\n    tmp=\"$(mktemp -d)\"; \\\n    trap 'rm -rf \"$tmp\"' EXIT; \\\n    curl --fail --show-error --silent --location --retry 3 --connect-timeout 20 --max-time 300 \\\n      \"https://github.com/anomalyco/opencode/releases/download/v$version/$asset\" \\\n      --output \"$tmp/$asset\"; \\\n    printf '%s  %s\\n' \"$checksum\" \"$tmp/$asset\" | sha256sum -c -; \\\n    tar -xzf \"$tmp/$asset\" -C \"$tmp\" opencode; \\\n    install -m 0755 \"$tmp/opencode\" /usr/local/bin/opencode\n\n";
const runtimeCopy = "COPY --from=opencode-fetch /usr/local/bin/opencode /usr/local/bin/opencode\nENV OPENCODE_SERVER_BIN=/usr/local/bin/opencode\nENV CLI_OPENCODE_BIN=/usr/local/bin/opencode\n\n";
const runtimeSmoke = "# Fail the image build if the installed CLI cannot execute as the runtime user.\nRUN test \"$(command -v opencode)\" = \"$OPENCODE_SERVER_BIN\" \\\n  && opencode --version \\\n  && opencode serve --help >/dev/null\n\n";
const webPackages = "RUN rm -rf /app/node_modules/playwright /app/node_modules/playwright-core\nCOPY --from=builder --chown=bun:bun /opt/playwright/node_modules/ ./node_modules/\nRUN test -f node_modules/playwright/cli.js && bun -e 'const p = require(\"playwright/package.json\"); const c = require(\"playwright-core/package.json\"); if (p.version !== c.version) throw new Error(\"Playwright version mismatch\");'\n\n";

function replaceOnce(source, anchor, replacement) {
  if (source.split(anchor).length !== 2) {
    throw new Error("Unexpected Dockerfile layout: " + anchor.split("\n")[0]);
  }
  return source.replace(anchor, () => replacement);
}

export function prepareBunDockerfile(source) {
  // Already-embedded legacy Debian release tags keep their existing OpenCode
  // stage. The publishing workflow still applies their historical compatibility
  // patches. Unknown or partially overlaid Dockerfiles are rejected.
  if (!source.includes("FROM runtime-os AS runner-base\n")) {
    if (source.includes("FROM oven/bun:1.4.4-slim AS runner-base\n") &&
        source.includes(fetchStage) && source.includes(runtimeCopy) &&
        source.includes(runtimeSmoke) &&
        source.includes("     git \\\n     libstdc++6 \\\n") &&
        source.includes("bun node_modules/playwright/cli.js install chromium --with-deps")) {
      return source;
    }
    throw new Error("Unsupported legacy Bun Dockerfile; review before publishing");
  }
  const required = [
    /^FROM oven\/bun:\S+ AS base$/m,
    /^FROM cgr\.dev\/chainguard\/wolfi-base:\S+@sha256:[a-f0-9]{64} AS runtime-os$/m,
    /^RUN apk add --no-cache libsecret libstdc\+\+ ca-certificates-bundle tzdata \\/m,
    /^COPY --from=base \/usr\/local\/bin\/bun \/usr\/local\/bin\/bun$/m,
    /^COPY --from=builder \/opt\/playwright \/opt\/playwright$/m,
    /cp -RL node_modules\/playwright node_modules\/playwright-core \/opt\/playwright\/node_modules\//,
    /bun \/opt\/playwright\/node_modules\/playwright\/cli\.js install chromium/,
    /bun:sqlite runtime smoke: OK/,
  ];
  if (required.some((pattern) => !pattern.test(source))) {
    throw new Error("Unrecognized Wolfi/Playwright runtime contract");
  }
  if (/opencode-fetch|OPENCODE_SERVER_BIN|CLI_OPENCODE_BIN|\/usr\/local\/bin\/opencode|RUN apk add --no-cache git\n/.test(source)) {
    throw new Error("Dockerfile already contains an OpenCode overlay; refusing duplicate or mixed configuration");
  }
  let result = replaceOnce(source, "FROM base AS builder\n", fetchStage + "FROM base AS builder\n");
  // The verified binary is downloaded on Debian; Wolfi runtime already ships
  // libstdc++ and glibc. Git is the only added runtime package.
  result = replaceOnce(result, "FROM runtime-os AS runner-base\n", "FROM runtime-os AS runner-base\n\nRUN apk add --no-cache git\n");
  result = replaceOnce(result, "ENV PORT=20128\n", runtimeCopy + "ENV PORT=20128\n");
  result = replaceOnce(result, "USER bun\n\nEXPOSE 20128\n", "USER bun\n\n" + runtimeSmoke + "EXPOSE 20128\n");
  // Next standalone may omit Playwright CLI or contain package-store symlinks.
  // Keep the upstream /opt installer and materialize its exact packages in the
  // web stage only. Both paths resolve the same lockfile version.
  result = replaceOnce(result, "COPY --from=builder /opt/playwright /opt/playwright\n", "COPY --from=builder /opt/playwright /opt/playwright\n" + webPackages);
  return result;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const path = process.argv[2];
  if (!path || process.argv.length !== 3) throw new Error("Usage: prepare-bun-dockerfile.mjs Dockerfile.bun");
  const original = readFileSync(path, "utf8");
  const prepared = prepareBunDockerfile(original);
  if (prepared !== original) writeFileSync(path, prepared);
  console.log("Fork OpenCode/Playwright Dockerfile compatibility: OK");
}
