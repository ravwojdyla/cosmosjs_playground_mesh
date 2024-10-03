/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: (asset) =>
          asset.name?.includes("index") ? `[name].[ext]` : `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    react()
  ],
});
