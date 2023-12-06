import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "parens-division",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.10.60:8080/coordination",
        changeOrigin: true,
      },
    },
  },
});
