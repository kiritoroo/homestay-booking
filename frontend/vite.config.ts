import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import stylelint from 'vite-plugin-stylelint'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@comp': path.resolve(__dirname, './src/components'),
      '@view': path.resolve(__dirname, './src/views'),
      '@asset': path.resolve(__dirname, './src/assets'),
      '@style': path.resolve(__dirname, './src/styles')
    }
  },
  plugins: [
    vue(),
    eslint(),
    tsconfigPaths(),
    stylelint()
  ]
})
