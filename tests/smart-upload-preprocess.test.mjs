import test, { beforeEach } from "node:test";
import assert from "node:assert/strict";

const imageSizes = new Map();
const encodedSizes = new Map();
let closeCount = 0;

globalThis.createImageBitmap = async (file) => ({
  width: imageSizes.get(file.name)?.[0] ?? 2000,
  height: imageSizes.get(file.name)?.[1] ?? 1500,
  close() { closeCount += 1; },
});
globalThis.document = {
  createElement() {
    const canvas = {
      width: 0,
      height: 0,
      getContext() { return { imageSmoothingEnabled: true, imageSmoothingQuality: "high", fillStyle: "", fillRect() {}, drawImage() {} }; },
      toBlob(callback, type) {
        callback(new Blob([new Uint8Array(encodedSizes.get(type) ?? 1024)], { type }));
      },
    };
    return canvas;
  },
};

const { BACKEND_UPLOAD_BYTES, MAX_UPLOAD_FILE_BYTES, prepareSmartUpload } = await import("../src/services/imagePreprocess.ts");

beforeEach(() => {
  imageSizes.clear();
  encodedSizes.clear();
  closeCount = 0;
  encodedSizes.set("image/jpeg", 2 * 1024 * 1024);
  encodedSizes.set("image/png", 2 * 1024 * 1024);
  encodedSizes.set("image/webp", 2 * 1024 * 1024);
});

function file(name, type, size) {
  return new File([new Uint8Array(size)], name, { type, lastModified: 1 });
}

test("normal JPEG stays on the direct path", async () => {
  const input = file("normal.jpg", "image/jpeg", 2 * 1024 * 1024);
  imageSizes.set(input.name, [3000, 2000]);
  const result = await prepareSmartUpload(input);
  assert.equal(result.optimized, false);
  assert.equal(result.file, input);
  assert.equal(result.reason, "none");
});

test("Smart Upload reports only stages that actually occur", async () => {
  const normal = file("stages-normal.jpg", "image/jpeg", 2 * 1024 * 1024);
  imageSizes.set(normal.name, [3000, 2000]);
  const normalStages = [];
  await prepareSmartUpload(normal, (stage) => normalStages.push(stage));
  assert.deepEqual(normalStages, ["reading"]);

  const large = file("stages-large.jpg", "image/jpeg", 6 * 1024 * 1024);
  imageSizes.set(large.name, [8000, 5000]);
  const optimizedStages = [];
  await prepareSmartUpload(large, (stage) => optimizedStages.push(stage));
  assert.deepEqual(optimizedStages, ["reading", "optimizing"]);
});

test("large JPEG is resized and remains JPEG", async () => {
  const input = file("large.jpg", "image/jpeg", 6 * 1024 * 1024);
  imageSizes.set(input.name, [8000, 5000]);
  const result = await prepareSmartUpload(input);
  assert.equal(result.optimized, true);
  assert.equal(result.file.type, "image/jpeg");
  assert.deepEqual([result.processed.width, result.processed.height], [4096, 2560]);
  assert.equal(result.reason, "dimensions");
  assert.ok(closeCount >= 2);
});

test("PNG keeps its format and alpha-safe canvas path", async () => {
  const input = file("alpha.png", "image/png", 6 * 1024 * 1024);
  imageSizes.set(input.name, [6000, 4000]);
  const result = await prepareSmartUpload(input);
  assert.equal(result.optimized, true);
  assert.equal(result.file.type, "image/png");
});

test("WebP above the 50 MiB product and backend limit is rejected before decoding", async () => {
  const input = file("alpha.webp", "image/webp", BACKEND_UPLOAD_BYTES + 1);
  imageSizes.set(input.name, [6000, 4000]);
  await assert.rejects(() => prepareSmartUpload(input), /50 MB/);
});

test("near-limit JPEG triggers Smart Upload and can continue below the 50 MiB API cap", async () => {
  const input = file("near-limit.jpg", "image/jpeg", 49 * 1024 * 1024);
  imageSizes.set(input.name, [3000, 2000]);
  encodedSizes.set("image/jpeg", 20 * 1024 * 1024);
  const result = await prepareSmartUpload(input);
  assert.equal(result.optimized, true);
  assert.equal(result.reason, "size");
  assert.ok(result.file.size <= BACKEND_UPLOAD_BYTES);
});

test("files above product limit are rejected before decoding", async () => {
  const input = file("too-large.jpg", "image/jpeg", MAX_UPLOAD_FILE_BYTES + 1);
  await assert.rejects(() => prepareSmartUpload(input), /50 MB/);
  assert.equal(closeCount, 0);
});

test("optimization that cannot meet backend cap does not silently lower quality", async () => {
  const input = file("still-large.jpg", "image/jpeg", BACKEND_UPLOAD_BYTES + 1);
  imageSizes.set(input.name, [6000, 4000]);
  encodedSizes.set("image/jpeg", BACKEND_UPLOAD_BYTES + 1);
  await assert.rejects(() => prepareSmartUpload(input), /50 MB/);
});
