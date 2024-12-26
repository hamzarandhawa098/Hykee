import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ComeFunziona from '@/views/ComeFunzionaView.vue'
import Partners from '@/views/Partners.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/come-funziona',
      name: 'comefunziona',
      component: ComeFunziona,
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners,
    },
  ],
})

export default router
