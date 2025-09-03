import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Ensure media files are copied with their original names
          if (assetInfo.name && assetInfo.name.includes('.')) {
            return `media/[name].[ext]`;
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
  },
  publicDir: 'public',
}));
