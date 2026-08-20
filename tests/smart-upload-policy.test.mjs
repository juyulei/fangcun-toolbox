import test from "node:test";
import assert from "node:assert/strict";

const { BACKEND_UPLOAD_BYTES, DIMENSION_CANDIDATE_PX, MAX_UPLOAD_FILE_BYTES, SAFE_UPLOAD_TARGET_BYTES, classifySmartUpload } =
  await import("../src/services/imagePreprocess.ts");

test("Smart Upload keeps normal files on the direct path", () => {
  assert.equal(classifySmartUpload(5 * 1024 * 1024, 3000, 2000, "image/jpeg"), "none");
});

test("Smart Upload classifies dimension and size candidates independently", () => {
  assert.equal(classifySmartUpload(5 * 1024 * 1024, DIMENSION_CANDIDATE_PX + 1, 1000, "image/jpeg"), "dimensions");
  assert.equal(classifySmartUpload(SAFE_UPLOAD_TARGET_BYTES, 3000, 2000, "image/png"), "size");
  assert.equal(classifySmartUpload(SAFE_UPLOAD_TARGET_BYTES, DIMENSION_CANDIDATE_PX + 1, 2000, "image/jpeg"), "both");
});

test("product and backend file limits align at 50 MiB while the client target leaves room", () => {
  assert.equal(MAX_UPLOAD_FILE_BYTES, 50 * 1024 * 1024);
  assert.equal(BACKEND_UPLOAD_BYTES, 50 * 1024 * 1024);
  assert.ok(SAFE_UPLOAD_TARGET_BYTES < BACKEND_UPLOAD_BYTES);
});
