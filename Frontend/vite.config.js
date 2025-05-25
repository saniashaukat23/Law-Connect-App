import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  envPrefix: "VITE_", // Should be default, but confirm

  plugins: [react()],
  extensions: [".js", ".jsx"],
});
