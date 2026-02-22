import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "grid-kit/styles.css",
        replacement: path.resolve(__dirname, "../src/grid-overlay.css"),
      },
      {
        find: "grid-kit",
        replacement: path.resolve(__dirname, "../src"),
      },
    ],
  },
});
