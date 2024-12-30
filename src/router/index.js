import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ComeFunziona from '@/views/ComeFunzionaView.vue'
import Partners from '@/views/PartnersView.vue'
import ChiSiamoView from '@/views/ChiSiamoView.vue'
import PerchèscegliereHykeeView from '@/views/PerchèscegliereHykeeView.vue'
import PrezziView from '@/views/PrezziView.vue'
import FaqView from '@/views/FaqView.vue'

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
      component: PerchèscegliereHykeeView,
    },
    {
      path: '/chi-siamo',
      name: 'chisiamo',
      component: ChiSiamoView,
    },
    {
      path: '/prezzi',
      name: 'prezzi',
      component: PrezziView,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqView,
    },
  ],
})

export default router
