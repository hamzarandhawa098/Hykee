<template>
  <div class="xl:flex h-auto">
    <div v-if="!isLogin">
      <Sidebar class="hidden xl:block" />
    </div>
    <div
  :class="{
    'xl:w-[calc(100%-204px)] xl:ml-auto min-h-screen px-[15px] pb-10 xl:pb-0': !isLogin,
    'w-full': isLogin,
    '': isLogin || (!isLogin && isSmallScreen), 
  }"
  :style="
    isSmallScreen
      ? {
          backgroundImage: `url(${MobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : !isLogin
      ? {
          backgroundImage: `url(${DashboardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }
      : {}
  "
>
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>

  <BottomBar v-if="isSmallScreen && !isLogin"/>

</div>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import Sidebar from "@/components/global/Sidebar.vue";
import { useRoute } from "vue-router";
import DashboardBg from "@/assets/images/DashboardBg.png";
import MobileBg from "@/assets/images/MobileBg.png"
import BottomBar from "@/components/global/BottomBar.vue";

const route = useRoute();

const isLogin = computed(() => route.path === "/login");

const isSmallScreen = ref(window.innerWidth < 1240);

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 1240;
};

onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



</style>
