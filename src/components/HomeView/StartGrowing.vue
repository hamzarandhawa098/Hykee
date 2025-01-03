<template>
  <div
    class="max-w-7xl w-full mx-auto text-white lg:py-28 pb-28 lg:pb-0 flex flex-col lg:flex-row items-center  justify-center"
  >
    <div class="relative flex justify-center">
      <img
        :src="StartGrowingImage"
        alt="Phone preview"
        class= "relative z-10"
      />
    </div>

    <div class="text-left mt-8 lg:mt-0 max-w-[312px] lg:max-w-sm lg:w-1/2 space-y-6">
      <p class="text-primary-color text-2xl font-normal font-sans">
        {{ StartGrowingTitleText }}
      </p>
      <h1
        class="text-5xl font-bold font-sans leading-[56.5px]"
      >
        {{ StartGrowingText }}
      </h1>
      <p class="font-monorope font-medium text-base leading-8" v-html="StartGrowingDescription">
      </p>
      <Button class="w-[108px] h-[44px]">
        {{ StartGrowingButtonText }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Button from "@/components/global/Button.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomePage = computed(() => route.path === "/");

defineProps({
  StartGrowingImage: String,
  StartGrowingText: String,
  StartGrowingDescription: String,
  StartGrowingButtonText: String,
  StartGrowingTitleText: String,
});
</script>

<style scoped></style>
