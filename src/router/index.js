import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ComeFunziona from "@/views/ComeFunzionaView.vue";
import Partners from "@/views/PartnersView.vue";
import ChiSiamoView from "@/views/ChiSiamoView.vue";
import PerchèscegliereHykeeView from "@/views/PerchèscegliereHykeeView.vue";
import PrezziView from "@/views/PrezziView.vue";
import FaqView from "@/views/FaqView.vue";
import LoginView from "@/views/LoginView.vue";
import DefaultLayout from "@/Layout/DefaultLayout.vue";
import DashboardLayout from "@/Layout/DashboardLayout.vue";

import { useAuthStore } from "@/stores/authStore";
import DashboardView from "@/views/DashboardView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: DefaultLayout,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "/come-funziona",
          name: "comefunziona",
          component: ComeFunziona,
        },
        {
          path: "/partners",
          name: "partners",
          component: Partners,
        },
        {
          path: "/perchè-scegliere-hykee",
          name: "perchèsceglierehykee",
          component: PerchèscegliereHykeeView,
        },
        {
          path: "/chi-siamo",
          name: "chisiamo",
          component: ChiSiamoView,
        },
        {
          path: "/prezzi",
          name: "prezzi",
          component: PrezziView,
        },
        {
          path: "/faq",
          name: "faq",
          component: FaqView,
        },
      ],
    },
    {
      path: "/login",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "login",
          component: LoginView,
        },
      ],
    },
    {
      path: "/dashboard",
      component: DashboardLayout,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardView,
        },
        {
          path: "/search",
          name: "search",
          component: SearchView,
        },
      ],
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.isAuthenticated) {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.path.startsWith("/dashboard") && !authStore.isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
