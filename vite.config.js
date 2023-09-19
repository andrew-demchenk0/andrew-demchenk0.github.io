import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      public: 'public',
      App: 'src/App',
      components: 'src/components',
      hooks: 'src/hooks',
      assets: 'src/assets',
      pages: 'src/pages',
      styles: 'src/styles',
      translations: 'src/translations',
      utils: 'src/utils',
    }
  }
});
