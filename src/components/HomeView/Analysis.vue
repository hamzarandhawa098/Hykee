<template>
  <div class="text-white relative hidden lg:block overflow-hidden mt-[80px] mb-[206px]">
    <img
      :src="AnalysisBgImage"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover opacity-10"
    />
    <div class="max-w-[1285px] mx-auto w-full">
      <div class="flex flex-col max-w-[395px] mb-[41px] mx-auto items-center text-white space-y-4">
        <div>
          <component :is="iconMain" />
        </div>

        <h2
          class="text-[25px] font-bold font-sans leading-[37.5px] uppercase tracking-wide text-center"
        >
          {{ mainTitle }}
        </h2>

        <p class="text-center font-normal leading-6 text-[16px] font-monorope ">
          {{ mainDescription }}
        </p>
      </div>
      <div class="flex justify-center gap-[60px]">
        <div class="flex flex-col my-[51px] gap-y-[95.5px] max-w-[395px]">
          <div
            v-for="(item, index) in leftItems"
            :key="'left-' + index"
            class="flex flex-col items-end text-white space-y-4"
          >
            <div>
              <component :is="item.icon" />
            </div>

            <h2
              class="text-[25px] font-bold font-sans uppercase tracking-wide text-center"
            >
              {{ item.title }}
            </h2>

            <p class="text-right font-normal text-[16px] leading-6  font-monorope" v-html="item.description">
            </p>
          </div>
        </div>

        <div class="relative flex justify-center items-center">
          <div class="relative z-10">
            <img
              :src="AnalysisMobileImage"
              alt="Mobile Phone"
              class="w-[375px] h-[812px] rounded-2xl"
            />
          </div>
        </div>

        <div class="flex flex-col my-[51px] gap-y-[95.5px]">
          <div
            v-for="(item, index) in rightItems"
            :key="'right-' + index"
            class="flex flex-col items-start text-white space-y-4"
          >
            <div>
              <component :is="item.icon" />
            </div>

            <h2
              class="text-[25px] font-bold font-sans uppercase tracking-wide text-center"
            >
              {{ item.title }}
            </h2>

            <p class="text-left font-normal text-[16px] leading-6 font-monorope" v-html="item.description">
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
