import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (rel) => readFileSync(new URL(`../../../${rel}`, import.meta.url), "utf8");

/** Instructions of one `FROM … AS <name>` stage, up to the next FROM, comments dropped. */
function stage(dockerfile, name) {
  const lines = dockerfile.split("\n");
  const start = lines.findIndex((line) => new RegExp(`^FROM \\S+ AS ${name}$`).test(line));
  assert.notEqual(start, -1, `stage ${name} not found`);
  const rest = lines.slice(start + 1);
  const end = rest.findIndex((line) => /^FROM /.test(line));
  return (end === -1 ? rest : rest.slice(0, end)).filter((line) => !/^\s*#/.test(line)).join("\n");
}

/** Package names of every `apt-get install` in a stage (flags and shell operators dropped). */
function aptPackages(body) {
  const packages = [];
  for (const match of body.matchAll(/apt-get install((?:[^\n]*\\\n)*[^\n]*)/g)) {
    for (const word of match[1].replace(/\\\n/g, " ").split(/\s+/)) {
      if (word === "&&") break;
      if (word && !word.startsWith("-")) packages.push(word);
    }
  }
  return packages;
}

const bunRunner = stage(read("Dockerfile.bun"), "runner-base");

test("Bun runner-base upgrades the base image packages, like the Node base stage", () => {
  // 3.8.54-bun shipped apt, libapt-pkg7.0 and zlib1g with a published trixie fix
  // because only the builder stage ran `apt-get upgrade`.
  assert.match(bunRunner, /apt-get update \\\n\s*&& apt-get upgrade -y \\/);
  assert.match(stage(read("Dockerfile"), "base"), /apt-get upgrade -y/);
});

test("Bun runner-base installs only what Bun and the fork-owned OpenCode need", () => {
  // curl (libcurl4 → Kerberos libraries) and the sqlite3 CLI were never used inside the
  // container — the healthcheck is `bun healthcheck.mjs` and the database is bun:sqlite —
  // and the Node runner ships neither. OpenCode requires git and libstdc++6.
  assert.deepEqual(aptPackages(bunRunner), ["libsecret-1-0", "ca-certificates", "git", "libstdc++6"]);
  assert.match(bunRunner, /CMD bun healthcheck\.mjs/);
  assert.doesNotMatch(bunRunner, /\bcurl\b/);
  assert.ok(!aptPackages(bunRunner).includes("sqlite3"));
});

test("Bun runner-base proves bun:sqlite works without the sqlite3 package", () => {
  assert.match(
    bunRunner,
    /RUN bun -e "import \{ Database \} from 'bun:sqlite';[^"]*SELECT 1[^"]*"/
  );
});

const dockerfile = read("Dockerfile.bun");
const opencodeFetch = stage(dockerfile, "opencode-fetch");

test("fork OpenCode is checksum-verified for both architectures and copied without curl", () => {
  assert.match(opencodeFetch, /amd64\) asset=opencode-linux-x64-baseline\.tar\.gz; checksum=[0-9a-f]{64}/);
  assert.match(opencodeFetch, /arm64\) asset=opencode-linux-arm64\.tar\.gz; checksum=[0-9a-f]{64}/);
  assert.match(opencodeFetch, /sha256sum -c -/);
  assert.ok(opencodeFetch.indexOf("sha256sum -c -") < opencodeFetch.indexOf("tar -xzf"));
  assert.match(bunRunner, /COPY --from=opencode-fetch \/usr\/local\/bin\/opencode \/usr\/local\/bin\/opencode/);
  assert.match(bunRunner, /^ENV OPENCODE_SERVER_BIN=\/usr\/local\/bin\/opencode$/m);
  assert.match(bunRunner, /^ENV CLI_OPENCODE_BIN=\/usr\/local\/bin\/opencode$/m);
  assert.match(bunRunner, /USER bun[\s\S]*opencode --version[\s\S]*opencode serve --help/);
});
