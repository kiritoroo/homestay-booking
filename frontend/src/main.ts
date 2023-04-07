import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import i18n from './i18n'

import '@style/main.scss'

createApp(App)
  .use(i18n)
  .use(Router)
  .mount('#app')
