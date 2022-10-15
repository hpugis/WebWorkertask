import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // 配置选项
  build: {
    outDir: "./dist",
    lib: {
      entry: resolve(__dirname, "src/class/webglApp.js"),
      name: "webglApp",
      // the proper extensions will be added
      fileName: () => `webglApp.min.js`,
      formats: ["umd"],
    },
    rollupOptions: {},
  },
});