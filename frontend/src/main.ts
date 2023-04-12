import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import i18n from './i18n'
import Vuetify from '@plugin/vuetify'
import store from '@store/index'
import '@style/main.scss'

createApp(App)
  .use(store)
  .use(i18n)
  .use(Router)
  .use(Vuetify)
  .mount('#app')
