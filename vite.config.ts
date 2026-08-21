import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  // The deployment target is selected at build time, never from the visitor hostname.
  base: mode === "root-domain" ? "/" : "/fangcun-toolbox/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // Vercel serves static output from the deployment root. Preserve the
    // application base path inside dist for Preview deployments.
    outDir: mode === "vercel-preview" ? "dist/fangcun-toolbox" : "dist",
    emptyOutDir: true,
  },
}));
