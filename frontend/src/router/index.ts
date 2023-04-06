import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@view/HomePage.vue'),
    name: 'home',
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: '/about',
    component: () => import('@view/AboutPage.vue'),
    name: 'about',
    meta: {
      title: 'Home Page'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.afterEach((to, from) => {
  const _baseTitle = "Totoro Homestay"
  document.title = (to.meta.title) ? `${_baseTitle} - ${to.meta.title}` : _baseTitle;
})

export default router
