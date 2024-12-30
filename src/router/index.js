import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ComeFunziona from '@/views/ComeFunzionaView.vue'
import Partners from '@/views/PartnersView.vue'
import PerchèscegliereHykee from '@/views/PerchèscegliereHykee.vue'
import ChiSiamoView from '@/views/ChiSiamoView.vue'

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
    {
      path: '/perchè-scegliere-hykee',
      name: 'perchèsceglierehykee ',
      component: PerchèscegliereHykee,
    },
    {
      path: '/chi-siamo',
      name: 'chisiamo',
      component: ChiSiamoView,
    },
  ],
})

export default router
