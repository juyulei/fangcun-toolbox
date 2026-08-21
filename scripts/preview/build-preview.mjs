import { spawnSync } from "node:child_process";

const commit = spawnSync("git", ["rev-parse", "--short", "HEAD"], { encoding: "utf8" }).stdout.trim() || "uncommitted";
const mode = process.argv[2];
const result = spawnSync("npx", ["vite", "build", ...(mode ? ["--mode", mode] : [])], {
  stdio: "inherit",
  env: {
    ...process.env,
    VITE_FC_ENVIRONMENT: "preview",
    VITE_FC_BUILD_COMMIT: commit,
    VITE_FC_BUILD_TIME: new Date().toISOString(),
  },
});

process.exit(result.status ?? 1);
