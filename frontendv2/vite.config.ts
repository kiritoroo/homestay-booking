import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: "https://gin-homestay.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          console.log(path);
          return path.replace("/^/api/", "");
        },
      },
      "/static": {
        target: "https://gin-homestay.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
