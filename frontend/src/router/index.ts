import { createRouter, createWebHashHistory, RouteRecordRaw, RouterView } from 'vue-router'
import HomePage from '@view/HomePage.vue'
import Trans from '@i18n/translation'

const routes: Array<RouteRecordRaw>  = [
  {
    path: "/:locale?",
    component: RouterView,
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        component: HomePage,
        name: 'home'
      },
      {
        path: 'about',
        component: () => import('@view/AboutPage.vue'),
        name: 'about'
      },
      {
        path: 'news',
        component: () => import('@view/NewsPage.vue'),
        name: 'news'
      },
      {
        path: 'contact',
        component: () => import('@view/ContactPage.vue'),
        name: 'contact'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
