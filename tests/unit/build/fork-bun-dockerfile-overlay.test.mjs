import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { prepareBunDockerfile } from "../../../scripts/fork/prepare-bun-dockerfile.mjs";

const source = readFileSync(new URL("../../../Dockerfile.bun", import.meta.url), "utf8");

test("upstream Dockerfile remains unmodified and the publishing overlay preserves Wolfi", () => {
  assert.doesNotMatch(source, /opencode-fetch|OPENCODE_SERVER_BIN/);
  const result = prepareBunDockerfile(source);
  assert.match(result, /^FROM runtime-os AS runner-base$/m);
  assert.match(result, /^RUN apk add --no-cache git$/m);
  assert.match(result, /sha256sum -c -/);
  assert.match(result, /amd64\) asset=opencode-linux-x64-baseline\.tar\.gz; checksum=[a-f0-9]{64}/);
  assert.match(result, /arm64\) asset=opencode-linux-arm64\.tar\.gz; checksum=[a-f0-9]{64}/);
  assert.ok(result.indexOf("sha256sum -c -") < result.indexOf("tar -xzf"));
  assert.match(result, /COPY --from=opencode-fetch \/usr\/local\/bin\/opencode \/usr\/local\/bin\/opencode/);
  assert.match(result, /^ENV OPENCODE_SERVER_BIN=\/usr\/local\/bin\/opencode$/m);
  assert.match(result, /^ENV CLI_OPENCODE_BIN=\/usr\/local\/bin\/opencode$/m);
  assert.match(result, /USER bun[\s\S]*opencode --version[\s\S]*opencode serve --help/);
  assert.match(result, /COPY --from=builder --chown=bun:bun \/opt\/playwright\/node_modules\/ \.\/node_modules\//);
  assert.match(result, /bun \/opt\/playwright\/node_modules\/playwright\/cli\.js install chromium/);
  assert.match(result, /bun:sqlite runtime smoke: OK/);
  assert.doesNotMatch(result.split("FROM runtime-os AS runner-base")[1], /apt-get|libstdc\+\+6/);
});

test("unknown OS, missing anchors and duplicate overlay fail closed", () => {
  assert.throws(() => prepareBunDockerfile(source.replace("FROM runtime-os AS runner-base", "FROM other AS runner-base")));
  assert.throws(() => prepareBunDockerfile(source.replace("USER bun\n\nEXPOSE 20128", "USER root\n\nEXPOSE 20128")));
  assert.throws(() => prepareBunDockerfile(source.replace("libsecret libstdc++ ca-certificates-bundle tzdata", "libsecret tzdata")));
  assert.throws(() => prepareBunDockerfile(source.replace("COPY --from=builder /opt/playwright /opt/playwright", "# missing installer")));
  assert.throws(() => prepareBunDockerfile(prepareBunDockerfile(source)));
});
