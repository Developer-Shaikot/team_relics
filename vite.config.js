import { defineConfig } from 'vite';
import htmlPartials from './scripts/vite/html-partials.js';

export default defineConfig({
  base: './',
  // index.html is assembled from src/partials/** (see scripts/vite/html-partials.js)
  plugins: [htmlPartials({ dir: 'src/partials' })],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Libraries change rarely, so they get their own long-cached file
    // and the game code (which changes often) stays small.
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          vendor: ['canvas-confetti']
        }
      }
    }
  },
  server: {
    port: 3000
  }
});
