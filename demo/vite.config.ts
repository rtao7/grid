import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "tool-grid/styles.css",
        replacement: path.resolve(__dirname, "../src/grid-overlay.css"),
      },
      {
        find: "tool-grid",
        replacement: path.resolve(__dirname, "../src"),
      },
    ],
  },
});
