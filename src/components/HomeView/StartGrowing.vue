<template>
  <div
    class="max-w-7xl w-full mx-auto text-white px-6 py-10 flex flex-col lg:flex-row items-center  justify-center"
  >
    <div class="relative flex justify-center lg:w-1/2">
      <img
        :src="StartGrowingImage"
        alt="Phone preview"
        class="max-w-full lg:w-3/4 relative z-10"
      />
      <img
        :src="StartGrowingAnimation"
        alt="Decorative background"
        class="absolute w-44 bottom-[31px] left-[170px]"
      />
    </div>

    <div class="text-left mt-8 lg:mt-0 max-w-sm lg:w-1/2">
      <p class="text-primary-color text-2xl font-normal font-sans mb-2">
        {{ StartGrowingTitleText }}
      </p>
      <h1
        class="text-3xl lg:text-5xl font-bold font-sans mb-10 leading-[56.5px]"
      >
        {{ StartGrowingText }}
      </h1>
      <p class="font-monorope font-medium text-base mb-10">
        {{ StartGrowingDescription }}
      </p>
      <Button class="py-2 px-6">
        {{ StartGrowingButtonText }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
defineProps({
  StartGrowingImage: String,
  StartGrowingAnimation: String,
  StartGrowingText: String,
  StartGrowingDescription: String,
  StartGrowingButtonText: String,
  StartGrowingTitleText: String,
});
</script>

<style scoped></style>
