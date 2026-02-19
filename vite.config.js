import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Use vite-entry.html as the source template so the root index.html
  // can remain the compiled build output served by GitHub Pages.
  // To rebuild and deploy: npm run build:deploy
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'vite-entry.html',
    },
  },
});
