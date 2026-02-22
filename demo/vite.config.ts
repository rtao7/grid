import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "tool-grids/styles.css",
        replacement: path.resolve(__dirname, "../src/grid-overlay.css"),
      },
      {
        find: "tool-grids",
        replacement: path.resolve(__dirname, "../src"),
      },
    ],
  },
});
