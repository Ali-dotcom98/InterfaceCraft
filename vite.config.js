import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: {
      clientPort: 443, // Ensures it works with ngrok
    },
    allowedHosts: [
      'fc90-2407-d000-8-258d-7450-ebac-507b-2f1c.ngrok-free.app',
      '.ngrok-free.app'
    ]
  }

});