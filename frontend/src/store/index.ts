import { createStore, createLogger } from 'vuex'
import createpersistedstate from 'vuex-persistedstate'
import auth from './modules/auth'

export default createStore({
  modules: {
    auth
  },
  plugins: [
    createLogger(),
    createpersistedstate()
  ]
})