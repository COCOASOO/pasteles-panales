import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copyFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        // Otras configuraciones de salida
      }
    },
    // Hook para copiar archivos después de la construcción
    onAfterBuild: () => {
      copyFileSync('robots.txt', 'dist/robots.txt');
      copyFileSync('sitemap.xml', 'dist/sitemap.xml');
      copyFileSync('.htaccess', 'dist/.htaccess');
    }
  }
})
