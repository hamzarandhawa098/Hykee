<template>
  <div class="text-white relative hidden lg:block overflow-hidden pb-28">
    <img
      :src="AnalysisBgImage"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover opacity-10"
    />
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex flex-col items-center text-white py-12 space-y-3">
        <div>
          <component :is="iconMain" />
        </div>

        <h2
          class="text-[25px] font-bold font-sans uppercase tracking-wide text-center"
        >
          {{ mainTitle }}
        </h2>

        <p class="text-center font-normal text-base  font-monorope max-w-sm ">
          {{ mainDescription }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center space-x-[60px]">
        <div class="flex flex-col space-y-14 mt-10">
          <div
            v-for="(item, index) in leftItems"
            :key="'left-' + index"
            class="flex flex-col items-end text-white py-6 space-y-3"
          >
            <div>
              <component :is="item.icon" />
            </div>

            <h2
              class="text-[25px] font-bold font-sans uppercase tracking-wide text-center"
            >
              {{ item.title }}
            </h2>

            <p class="text-right font-normal text-base  font-monorope max-w-xs">
              {{ item.description }}
            </p>
          </div>
        </div>

        <div class="relative flex justify-center items-center">
          <div class="relative z-10">
            <img
              :src="AnalysisMobileImage"
              alt="Mobile Phone"
              class="w-[375px] h-auto rounded-2xl"
            />
          </div>
        </div>

        <div class="flex flex-col space-y-14 mt-10">
          <div
            v-for="(item, index) in rightItems"
            :key="'right-' + index"
            class="flex flex-col items-start text-white py-6 space-y-3"
          >
            <div>
              <component :is="item.icon" />
            </div>

            <h2
              class="text-[25px] font-bold font-sans uppercase tracking-wide text-center"
            >
              {{ item.title }}
            </h2>

            <p class="text-left font-normal text-base  font-monorope max-w-xs ">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnalysisBgImage from "@/assets/images/AnalysisBackImage.jpeg";
import AnalysisMobileImage from "@/assets/images/AnalysisMainImage.png";

defineProps({
  mainTitle: String,
  iconMain: String,
  mainDescription: String,
  leftItems: Array,
  rightItems: Array,
});
</script>

<style scoped></style>
