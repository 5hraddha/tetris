import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      "process.env": {},
    },
    server: {
      open: true,
    },
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
