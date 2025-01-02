<template>
  <div class=" w-full max-w-5xl mx-auto">
    <div
      class="text-white flex flex-col items-center text-start lg:text-center px-[50px] py-[100px]"
    >
      <div v-if="isHomePage">
        <div
          class="text-4xl lg:text-title hidden lg:block font-sans font-bold lg:leading-[66px]"
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
        class="flex flex-col lg:flex-row mt-6 justify-center items-center space-x-0 lg:space-x-12"
      >
        <div>
          <component
            :is="LogoTransparent"
            class="w-full h-auto lg:w-[404px] lg:h-[131px]"
          />
        </div>
        <p
          class="text-sm md:text-base text-left flex items-start mt-9 justify-center text-white leading-7 max-w-md"
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
