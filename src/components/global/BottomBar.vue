<template>
    <nav
      class="fixed bottom-0 gap-x-[47.6px] rounded-t-[25px] left-0 w-full bg-BottomNavBg text-white flex justify-around items-center px-[36px] py-[18px]"
    >
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        class="relative flex justify-center items-center"
        :class="{'svg-bottom-active': isActive(item.route)}"
      >
        <div
          v-if="item.isSpecial"
          class="absolute -top-[3.5rem] border-4 border-customLight w-[66px] h-[66px] bg-primary-color rounded-full flex justify-center items-center"
        >
          <component :is="item.icon" />
        </div>
        <div v-else>
          <component :is="item.icon" />
        </div>
      </router-link>
    </nav>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import HomeBottomIcon from "../icons/HomeBottomIcon.vue";
  import WalletIcon from "../icons/WalletIcon.vue";
  import SearchBottomIcon from "../icons/SearchBottomIcon.vue";
  import StarBottomIcon from "../icons/StarBottomIcon.vue";
  import ProfileIcon from "../icons/ProfileIcon.vue";
  
  const route = useRoute();
  
  const navItems = [
    { icon: HomeBottomIcon, route: '/dashboard', isSpecial: false },
    { icon: WalletIcon, route: '#', isSpecial: false },
    { icon: SearchBottomIcon, route: '/search', isSpecial: true },
    { icon: StarBottomIcon, route: '#', isSpecial: false },
    { icon: ProfileIcon, route: '#', isSpecial: false },
  ];
  
  const isActive = (path) => {
    return route.path === path;
  };
  </script>
  
  <style scoped>
  </style>
  