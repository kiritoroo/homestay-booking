/// <reference types="vite/client" />
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

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

declare module '@vue/runtime-core' {
  interface State {
    user: string
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
