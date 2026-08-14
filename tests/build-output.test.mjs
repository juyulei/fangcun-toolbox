import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const dist = new URL("../dist/", import.meta.url);

async function assetNames() {
  return readdir(new URL("assets/", dist));
}

test("build uses the GitHub Pages repository base path", async () => {
  const html = await readFile(new URL("index.html", dist), "utf8");
  assert.match(html, /(?:src|href)="\/fangcun-toolbox\//);
  assert.doesNotMatch(html, /(?:src|href)="\/assets\//);
  assert.match(html, /href="\/fangcun-toolbox\/favicon\.svg"/);
});

test("build emits the background-removal worker and WASM runtime", async () => {
  const names = await assetNames();
  assert.ok(names.some((name) => /^remove-bg\.worker-.*\.js$/.test(name)));
  assert.ok(names.some((name) => /^ort-wasm-.*\.wasm$/.test(name)));
  assert.ok(names.some((name) => /^ort\.bundle\.min-.*\.mjs$/.test(name)));
});

test("build emits the PDF runtime and all public tool assets", async () => {
  const names = await assetNames();
  assert.ok(names.some((name) => /^pdf-.*\.js$/.test(name)));
  assert.ok(names.some((name) => /^pdf\.worker\.min-.*\.mjs$/.test(name)));

  await Promise.all(
    ["split", "pdf", "compress", "remove-bg", "rename"].map((tool) =>
      access(new URL(`tool-${tool}.svg`, dist)),
    ),
  );
});

test("source retains the browser workflows and compatibility fallbacks", async () => {
  const [app, worker] = await Promise.all([
    readFile(new URL("src/App.tsx", root), "utf8"),
    readFile(new URL("src/remove-bg.worker.ts", root), "utf8"),
  ]);

  assert.match(app, /showDirectoryPicker/);
  assert.match(app, /webkitdirectory/);
  assert.match(app, /new JSZip/);
  assert.match(app, /new Worker\(new URL\("\.\/remove-bg\.worker\.ts"/);
  assert.match(app, /import\("pdfjs-dist"\)/);
  assert.match(worker, /removeBackground/);
});
