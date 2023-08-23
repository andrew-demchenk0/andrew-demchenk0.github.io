import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      App: 'src/App',
      components: 'src/components',
      hooks: 'src/hooks',
      icons: 'src/icons',
      images: 'src/images',
      pages: 'src/pages',
      styles: 'src/styles',
      translations: 'src/translations',
    }
  }
});
