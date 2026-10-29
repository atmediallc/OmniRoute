import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("Cursor model catalog does not pull DB-backed flags into the browser", () => {
  const flagPath = path.join(root, "open-sse/utils/cursorAgentProtobuf/grok47MaxEffort.ts");
  const catalogPath = path.join(root, "src/lib/providerModels/cursorAutoCatalog.ts");
  const flagModule = readFileSync(flagPath, "utf8");
  const catalog = readFileSync(catalogPath, "utf8");

  assert.match(catalog, /from ["']@omniroute\/open-sse\/utils\/cursorAgentProtobuf\/grok47MaxEffort\.ts["']/);
  assert.match(flagModule, /from ["']@\/shared\/utils\/featureFlagResolverBridge["']/);
  assert.doesNotMatch(flagModule, /from ["']@\/shared\/utils\/featureFlags["']/);
  assert.match(flagModule, /resolveRegisteredFeatureFlag\(CURSOR_GROK_47_DROP_MAX_EFFORT_FLAG\)/);
});

test("Cursor max-effort flag uses the existing DB-aware resolver bridge", async () => {
  const { isCursorGrok47MaxEffortDropped, CURSOR_GROK_47_DROP_MAX_EFFORT_FLAG } =
    await import("../../open-sse/utils/cursorAgentProtobuf/grok47MaxEffort.ts");
  const { registerFeatureFlagResolver } =
    await import("../../src/shared/utils/featureFlagResolverBridge.ts");

  try {
    registerFeatureFlagResolver((key) => key === CURSOR_GROK_47_DROP_MAX_EFFORT_FLAG);
    assert.equal(isCursorGrok47MaxEffortDropped(), true);

    registerFeatureFlagResolver(() => false);
    assert.equal(isCursorGrok47MaxEffortDropped(), false);
  } finally {
    registerFeatureFlagResolver(null);
  }
});
