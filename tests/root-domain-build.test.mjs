import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const dist = new URL("../dist/", import.meta.url);

test("root-domain build uses root asset paths", { skip: process.env.FANGCUN_BUILD_TARGET !== "root-domain" }, async () => {
  const html = await readFile(new URL("index.html", dist), "utf8");
  assert.match(html, /(?:src|href)="\/assets\//);
  assert.match(html, /href="\/favicon\.svg"/);
  assert.doesNotMatch(html, /\/fangcun-toolbox\//);
});

test("source resolves public tool assets from Vite base", async () => {
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  assert.match(app, /import\.meta\.env\.BASE_URL/);
  assert.doesNotMatch(app, /\/fangcun-toolbox\//);
});
