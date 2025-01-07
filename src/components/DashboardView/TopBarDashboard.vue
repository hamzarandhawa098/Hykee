<template>
  <header
    class="flex flex-row items-center justify-between max-w-[1160px] mx-auto pt-[37px]"
  >
    <div
      class="text-white hidden lg:block font-bold font-barlow leading-[33px] tracking-wider text-[28px]"
    >
      {{ TopBarTitle }}
    </div>
    <div class="flex gap-[7px] lg:hidden">
      <div
        class="text-MobileDashboardTitle font-gotham font-medium leading-[10.5px] tracking-wider text-[18px]"
      >
        {{ TopBarTitle }}
      </div>
      <div class="-mt-1"><StarIconMobile /></div>
    </div>

    <div
      v-if="!isSearchPage"
      class="xl:flex items-center hidden bg-Sidebar-bg text-white rounded-[10px] border w-[784px] h-[53px] px-5"
    >
      <input
        type="text"
        placeholder="Search"
        class="bg-transparent font-barlow font-normal text-sm outline-none text-white flex-1"
      />
      <button class="text-gray-400 hover:text-white">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="text-primary-color w-[15px] h-[15px]"
        />
      </button>
    </div>

    <div
      class="xl:flex hidden items-center gap-x-[10px] rounded-[5px] justify-center bg-Sidebar-bg w-[140px] h-[53px]"
    >
      <div
        class="bg-primary-color font-helvetica text-white font-bold px-[6.5px] py-[6.5px] text-[8px] tracking-[12.5%] rounded-full flex items-center justify-center"
      >
        {{ ButtonLogoText }}
      </div>
      <div class="text-white text-sm font-helvetica">
        <div>{{ ProfileName }}</div>
        <div class="text-gray-400 text-xs">{{ ProfileAccount }}</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import StarIconMobile from "@/components/icons/StarIconMobile.vue";

const route = useRoute();

const isSearchPage = computed(() => route.path === "/search");

defineProps({
  TopBarTitle: String,
  ButtonLogoText: String,
  ProfileName: String,
  ProfileAccount: String,
});
</script>

<style scoped></style>
