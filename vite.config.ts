import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Base path for GitHub Pages
  base: '/desertsportsmed/',
  build: {
    outDir: 'dist',
    // Generate a 404.html file for GitHub Pages client-side routing
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html'
      }
    }
  }
})
