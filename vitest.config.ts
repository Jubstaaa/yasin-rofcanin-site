import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./", import.meta.url)) },
  },
  test: {
    // The build-output suite reads out/, so it runs after `next build`.
    projects: [
      {
        extends: true,
        test: { name: "unit", include: ["**/*.test.ts"], exclude: ["tests/build-output.test.ts", "node_modules/**"] },
      },
      {
        extends: true,
        test: { name: "build", include: ["tests/build-output.test.ts"] },
      },
    ],
  },
});
