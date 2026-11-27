import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { isModelExcludedByConnection } from "../../../src/domain/connectionModelRules.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { applyAntigravityArgonEligibilityToPsd } =
  await import("../../../src/lib/usage/providerLimits.ts");

test("src/lib/usage/providerLimits.ts: statically exports applyAntigravityArgonEligibilityToPsd", () => {
  const providerLimitsSource = readFileSync(
    join(__dirname, "../../../src/lib/usage/providerLimits.ts"),
    "utf8"
  );
  assert.match(
    providerLimitsSource,
    /export\s+function\s+applyAntigravityArgonEligibilityToPsd\s*\(/
  );
  assert.match(
    providerLimitsSource,
    /applyAntigravityArgonEligibilityToPsd\s*\(\s*nextPsd\s*,\s*usage\.hasArgon\s*\)/
  );
});

test("applyAntigravityArgonEligibilityToPsd: when hasArgon is false on empty psd", () => {
  const psd = {};
  const result = applyAntigravityArgonEligibilityToPsd(psd, false);

  assert.equal(result.changed, true);
  assert.equal(result.nextPsd.hasArgon, false);
  assert.deepEqual(result.nextPsd.excludedModels, ["*argon*"]);
});

test("applyAntigravityArgonEligibilityToPsd: when hasArgon is false preserves existing operator exclusions", () => {
  const psd = {
    excludedModels: ["claude-3-haiku*", "gpt-4*"],
  };
  const result = applyAntigravityArgonEligibilityToPsd(psd, false);

  assert.equal(result.changed, true);
  assert.equal(result.nextPsd.hasArgon, false);
  assert.deepEqual(result.nextPsd.excludedModels, ["claude-3-haiku*", "gpt-4*", "*argon*"]);
});

test("applyAntigravityArgonEligibilityToPsd: when hasArgon is false is idempotent", () => {
  const psd = {
    hasArgon: false,
    excludedModels: ["claude-3-haiku*", "*argon*"],
  };
  const result = applyAntigravityArgonEligibilityToPsd(psd, false);

  assert.equal(result.changed, false);
  assert.equal(result.nextPsd.hasArgon, false);
  assert.deepEqual(result.nextPsd.excludedModels, ["claude-3-haiku*", "*argon*"]);
});

test("applyAntigravityArgonEligibilityToPsd: when hasArgon is true strips only Argon", () => {
  const psd = {
    hasArgon: false,
    excludedModels: ["claude-3-haiku*", "*argon*"],
  };
  const result = applyAntigravityArgonEligibilityToPsd(psd, true);

  assert.equal(result.changed, true);
  assert.equal(result.nextPsd.hasArgon, true);
  assert.deepEqual(result.nextPsd.excludedModels, ["claude-3-haiku*"]);
});

test("applyAntigravityArgonEligibilityToPsd: never writes the user-facing connectionTestModel setting", () => {
  // connectionTestModel is an operator setting read by the provider test-message route;
  // a quota sync must not silently pick it for the user.
  const unset = applyAntigravityArgonEligibilityToPsd({}, true);
  assert.equal(unset.changed, true);
  assert.equal("connectionTestModel" in unset.nextPsd, false);

  const userChosen = applyAntigravityArgonEligibilityToPsd(
    { hasArgon: true, connectionTestModel: "gemini-3.8-flash" },
    true
  );
  assert.equal(userChosen.changed, false);
  assert.equal(userChosen.nextPsd.connectionTestModel, "gemini-3.8-flash");

  const ineligible = applyAntigravityArgonEligibilityToPsd({}, false);
  assert.equal("connectionTestModel" in ineligible.nextPsd, false);
});

test("applyAntigravityArgonEligibilityToPsd: when hasArgon is true is idempotent", () => {
  const psd = {
    hasArgon: true,
    connectionTestModel: "gemini-4-argon",
    excludedModels: ["claude-3-haiku*"],
  };
  const result = applyAntigravityArgonEligibilityToPsd(psd, true);

  assert.equal(result.changed, false);
  assert.equal(result.nextPsd.hasArgon, true);
  assert.equal(result.nextPsd.connectionTestModel, "gemini-4-argon");
  assert.deepEqual(result.nextPsd.excludedModels, ["claude-3-haiku*"]);
});

test("applyAntigravityArgonEligibilityToPsd: non-boolean hasArgon does not modify psd", () => {
  const psd = { hasArgon: false, excludedModels: ["gemini-4*"] };

  for (const invalid of [undefined, null, "true", 1, {}, []]) {
    const result = applyAntigravityArgonEligibilityToPsd(psd, invalid);
    assert.equal(result.changed, false);
    assert.equal(result.nextPsd.hasArgon, false);
    assert.deepEqual(result.nextPsd.excludedModels, ["gemini-4*"]);
  }
});

test("isModelExcludedByConnection: integrates correctly with applyAntigravityArgonEligibilityToPsd", () => {
  const initialPsd = {
    excludedModels: ["claude-3-haiku*"],
  };
  const { nextPsd: ineligiblePsd } = applyAntigravityArgonEligibilityToPsd(initialPsd, false);

  assert.equal(isModelExcludedByConnection("gemini-4-argon", ineligiblePsd), true);
  assert.equal(isModelExcludedByConnection("gemini-4-argon-high", ineligiblePsd), true);
  assert.equal(
    isModelExcludedByConnection("antigravity/gemini-4-argon-medium", ineligiblePsd),
    true
  );

  for (const model of [
    "gemini-4-neon-high",
    "gemini-4-hydrogen-xhigh",
    "agy/gemini-4-hydrogen-high",
    "antigravity/gemini-4-carbon-high",
  ]) {
    assert.equal(isModelExcludedByConnection(model, ineligiblePsd), false, model);
  }

  assert.equal(isModelExcludedByConnection("gemini-3.8-flash", ineligiblePsd), false);
  assert.equal(isModelExcludedByConnection("gemini-2.5-pro", ineligiblePsd), false);

  assert.equal(isModelExcludedByConnection("claude-3-haiku-20240307", ineligiblePsd), true);

  const { nextPsd: eligiblePsd } = applyAntigravityArgonEligibilityToPsd(ineligiblePsd, true);

  assert.equal(isModelExcludedByConnection("gemini-4-argon", eligiblePsd), false);
  assert.equal(isModelExcludedByConnection("gemini-4-argon-high", eligiblePsd), false);
  assert.equal(
    isModelExcludedByConnection("antigravity/gemini-4-argon-medium", eligiblePsd),
    false
  );

  assert.equal(isModelExcludedByConnection("claude-3-haiku-20240307", eligiblePsd), true);
});

test("ambiguous Gemini 4 exclusions are preserved until the operator removes them", () => {
  for (const excludedModels of [
    ["gemini-4*", "*argon*"],
    ["*argon*", "gemini-4*"],
    ["gemini-4*", "claude-3-haiku*", "*argon*"],
  ]) {
    const psd = { hasArgon: false, excludedModels };
    const ineligible = applyAntigravityArgonEligibilityToPsd(psd, false);
    assert.equal(ineligible.changed, false);
    assert.deepEqual(ineligible.nextPsd.excludedModels, excludedModels);

    const eligible = applyAntigravityArgonEligibilityToPsd(psd, true);
    assert.equal(eligible.changed, true);
    assert.deepEqual(
      eligible.nextPsd.excludedModels,
      excludedModels.filter((pattern) => pattern !== "*argon*")
    );
    assert.equal(isModelExcludedByConnection("gemini-4-hydrogen-high", eligible.nextPsd), true);
  }
});

test("explicit legacy cleanup restores non-Argon Gemini 4 and survives quota refresh", () => {
  const psd = {
    hasArgon: false,
    excludedModels: ["claude-3-haiku*", "gemini-4*", "*argon*"],
  };
  // Simulate the operator removing the unintended broad rule in Edit Connection.
  const cleaned = {
    ...psd,
    excludedModels: psd.excludedModels.filter((pattern) => pattern !== "gemini-4*"),
  };

  let current: Record<string, unknown> = cleaned;
  for (const hasArgon of [false, false, true, false]) {
    current = applyAntigravityArgonEligibilityToPsd(current, hasArgon).nextPsd;
    for (const prefix of ["agy/", "antigravity/"]) {
      assert.equal(isModelExcludedByConnection(prefix + "gemini-4-hydrogen-high", current), false);
      assert.equal(isModelExcludedByConnection(prefix + "gemini-4-argon-high", current), !hasArgon);
    }
    assert.equal(isModelExcludedByConnection("claude-3-haiku-20240307", current), true);
  }
  assert.deepEqual(current.excludedModels, ["claude-3-haiku*", "*argon*"]);
});
