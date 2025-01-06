<template>
  <div class=" w-full max-w-[340px] lg:max-w-[998.48px] mx-auto mt-[50px] lg:mt-[100px] pb-[100px]">
    <div
      class="text-white flex flex-col items-center lg:items-start max-w-[898.48px] mx-auto text-start lg:text-center"
    >
      <div v-if="isHomePage">
        <div
          class="text-4xl lg:text-title max-w-[823px] hidden lg:block font-sans font-bold lg:leading-[66px]"
          v-html="TechText"
        ></div>
        <div
          class="text-primary-color font-coolvetica text-5xl font-normal lg:hidden outline-text"
        >
          {{ TitleTextMobile }}
        </div>
      </div>
      <div v-else>
        <div
          class="text-primary-color font-coolvetica text-5xl lg:text-[130px] font-normal outline-text"
        >
          {{ TitleTextMobile }}
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row lg:mt-[15px] lg:justify-start lg:items-end gap-[35px] lg:gap-[70px]"
      >
        <div>
          <component
            :is="LogoTransparent"
            class="w-full h-auto lg:w-[404px] lg:h-[131px]"
          />
        </div>
        <p
          class="text-[13px] lg:text-[16px] font-monorope font-normal text-left flex items-start justify-center text-white leading-6 lg:leading-7 w-full max-w-[420px]"
        >
          {{ TechDescription }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isHomePage = computed(() => route.path === "/");

defineProps({
  LogoTransparent: String,
  TechText: String,
  TechDescription: String,
  TitleTextMobile: String,
});
</script>

<style scoped></style>
