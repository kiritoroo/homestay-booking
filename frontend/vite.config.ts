import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@comp': path.resolve(__dirname, './src/components')
    }
  },
  plugins: [
    vue(),
    eslint(),
    tsconfigPaths()
  ]
})
