import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import stylelint from 'vite-plugin-stylelint'
import vueI18nPlugin from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => { console.log(path); return path.replace('/^\/api/', '') }
      },
      '/static': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@comp': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@layout': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@view': fileURLToPath(new URL('./src/views', import.meta.url)),
      '@asset': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@style': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@type': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
      '@plugin': fileURLToPath(new URL('./src/plugins', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@util': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  },
  plugins: [
    vue(),
    eslint(),
    tsconfigPaths(),
    stylelint(),
    vueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**')
    })
  ]
})
