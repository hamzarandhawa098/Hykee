<template>
  <div
    class="w-[204px] fixed bg-Sidebar-bg text-Sidebar-links h-screen flex flex-coloverflow-auto"
  >
    <div class="flex items-center justify-center mt-[45px]">
      <Logo />
    </div>
    <nav class="flex-1 mt-[50px]">
      <ul>
        <li
          v-for="(item, index) in navigationItems"
          :key="index"
          class="px-[28.5px] py-[17px] text-[16px] leading-5 font-poppins font-medium flex items-center border-b border-gray-700"
          :class="{ 'last:border-none': index === navigationItems.length - 1 }"
          @click="setActive(index)"
        >
          <router-link :to="item.href" class="flex items-center w-full">
            <div
              :class="{
                'bg-Sidebar-Active bg-opacity-[20%] svg-active rounded-2xl':
                  index === activeIndex,
              }"
              class="px-3 py-3"
            >
              <component :is="item.icon" />
            </div>
            <span :class="{ 'text-primary-color ml-1': index === activeIndex }">
              {{ item.label }}
            </span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="flex absolute bottom-0 mb-5 left-10   items-center justify-center">
      <router-link
        to="#"
        class="flex font-barlow font-medium text-[16px] opacity-[50%] items-center space-x-[14px] text-white"
      >
        <AssistanceIcon />
        <span>Assistance</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Logo from "@/components/icons/Logo.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import ClockIcon from "@/components/icons/ClockIcon.vue";
import PartnerIcon from "@/components/icons/PartnerIcon.vue";
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import AssistanceIcon from "@/components/icons/AssistanceIcon.vue";

const navigationItems = [
  { label: "Home", icon: HomeIcon, href: "/dashboard" },
  { label: "Ricerca", icon: SearchIcon, href: "/search" },
  { label: "Ricerche Salvate", icon: StarIcon, href: "#" },
  { label: "Cronologia di ricerca", icon: ClockIcon, href: "#" },
  { label: "Collegamenti", icon: PartnerIcon, href: "#" },
  { label: "Notifiche", icon: NotificationIcon, href: "#" },
];

const activeIndex = ref(0);
const route = useRoute();

const updateActiveIndex = () => {
  const currentPath = route.path;
  const index = navigationItems.findIndex((item) => item.href === currentPath);
  activeIndex.value = index >= 0 ? index : 0;
};

watch(route, updateActiveIndex, { immediate: true });

const setActive = (index) => {
  activeIndex.value = index;
};
</script>
