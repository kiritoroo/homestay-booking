import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@comp/*': path.resolve(__dirname, './src/components/*')
    }
  },
  plugins: [vue(), eslint()]
})
