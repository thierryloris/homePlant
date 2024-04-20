import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/",
      "~": "/",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "**/node_modules/**",
        "**/{components,config,pages,plugins,types}/*",
        "**/composables/queries/**",
        "**/server/api/**",
        "**/server/**/index.ts",
        "**/index.ts",
        "**/*.config.*",
        "**/*.mock.*",
        "**/types.ts",
        "**/*.interfaces.ts",
        "**/*.cjs",
        "**/.nuxt/**",
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
});
