import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  // The deployment target is selected at build time, never from the visitor hostname.
  base: mode === "root-domain" ? "/" : "/fangcun-toolbox/",
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
