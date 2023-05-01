import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"; // vite의 절대경로 맵핑 모듈
import svgr from "vite-plugin-svgr";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [react(), tsconfigPaths(), svgr(), mkcert()],
    server: {
      port: 8080,
      https: true,
      open: true, // 브라우저에서 열음
    },
  };
});
