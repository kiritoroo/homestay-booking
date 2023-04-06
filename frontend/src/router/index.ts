import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@view/HomePage.vue'),
    name: 'Home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
