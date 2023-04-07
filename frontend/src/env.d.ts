/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  VITE_DEFAULT_LOCALE: string
  VITE_FALLBACK_LOCALE: string
  VITE_SUPPORTED_LOCALES: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
