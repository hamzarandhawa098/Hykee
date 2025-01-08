<template>
  <section
    class="xl:flex hidden flex-col xl:flex-row items-center justify-between mt-[10px] max-w-[1159px] mx-auto text-white space-x-[10px]"
  >
    <div class="space-y-[10px]">
      <div
        class="flex items-center space-x-9 bg-Sidebar-bg px-[49px] py-[42.5px] rounded-lg w-[417px]"
        v-for="score in scores"
        :key="score.id"
      >
        <div
          class="flex items-center justify-center w-[60px] h-[60px] bg-primary-color rounded-full"
        >
      <component :is="score.icon" />
        </div>
        <div>
          <p class="text-2xl font-poppins leading-9 font-bold">
            {{ score.value }}
          </p>
          <p class="text-sm font-normal font-poppins opacity-[70%]">
            {{ score.label }}
          </p>
        </div>
      </div>
    </div>

    <div class="bg-Sidebar-bg max-w-[732px] h-[304px] w-full rounded-[10px]">
      <div class="mt-[25px] px-[39.5px]">
        <h5 class="font-sans font-medium text-lg opacity-[70%] text-whites">
          {{ hykeeTitle }}
        </h5>
      </div>
      <div class="flex-1 flex justify-center">
        <SpeedoMeter class="absolute bottom-3"/>
      </div>
    </div>
  </section>
  <section class="xl:hidden">
    <div
      class="rounded-lg w-full mx-auto mt-[16px]"
      :style="{
        backgroundImage: `url(${MobileCompoBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <div class="w-full">
        <div class="px-[18px] pt-[18px]">
          <h5 class="font-poppins font-normal text-[15px] text-white">
            {{ hykeeTitle }}
          </h5>
        </div>
        <div class="flex justify-center ">
          <SpeedoMeter />
        </div>
      </div>
    </div>
    <div class="flex gap-[15px] text-white mt-[16px]">
      <div
        v-for="(score, index) in scoresMobile"
        :key="index"
        class="rounded-lg w-full mx-auto "
        :style="{
          backgroundImage: `url(${score.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="flex flex-col">
          <div class="flex  items-center pl-[18px] pt-[18px]">
            <h3 class="font-poppins font-normal text-[15px]">{{ score.title }}</h3>
          </div>
          <div class="flex justify-center items-center mt-[34px] mb-[55px] leading-[10.5px]">
           <h1 class="font-poppins font-medium text-[32px] leading-[26px]">{{ score.value }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import MobileCompoBg from "@/assets/images/MobileCompoBg.png";
import ScoreBg from "@/assets/images/ScoreBg.png";
import SpeedoMeter from "@/components/global/SpeedoMeter.vue";
defineProps({
  scores: Array,
  hykeeTitle: String,
  hykeeImage: String,
});

const scoresMobile = ref([
  {
    title: 'Business Score',
    value: '74%',
    backgroundImage: ScoreBg,
  },
  {
    title: 'Financial Score',
    value: '65%',
    backgroundImage: ScoreBg, 
  },
]);

</script>

