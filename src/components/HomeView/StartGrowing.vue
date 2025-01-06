<template>
  <div
    class="max-w-7xl w-full mx-auto px-[48px] text-white lg:py-28 pb-28 lg:pb-0 flex flex-col lg:flex-row items-start  justify-center"
  >
    <div class="relative lg:hidden flex justify-center">
      <img
        :src="StartGrowingImage"
        alt="Phone preview"
        class= "relative z-10"
      />
    </div>
    <div class="relative hidden lg:flex justify-center">
      <img
        :src="StartGrowingImageLg"
        alt="Phone preview"
        class= "relative z-10"
      />
    </div>


    <div class="text-left max-w-[312px] lg:mt-[14rem] lg:max-w-sm lg:w-1/2 space-y-6">
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
      <Button class="px-[18px] py-[12px]">
        {{ StartGrowingButtonText }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Button from "@/components/global/Button.vue";
import { useRoute } from "vue-router";
import StartGrowingImageLg from "@/assets/images/StartGrowingImageLg.png";

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
