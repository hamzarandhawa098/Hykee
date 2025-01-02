<template>
  <div class="relative w-full flex items-center justify-center py-8">
    <div
      class="relative mx-auto z-10 flex py-12 items-center justify-center lg:justify-between w-full lg:w-[938px] max-w-4xl text-white p-6 rounded-lg"
    >
      <img
        :src="MoreInformationBg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover opacity-100 z-[-1] rounded-xl pointer-events-none"
      />
      <div
        class="max-w-3xl w-full mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center"
      >
        <component :is="AnalyzeIcon" class="text-4xl" />
        <div class="flex flex-col justify-center items-center">
          <h1
            class="text-2xl lg:text-3xl lg:pl-[47px]  text-center lg:text-left font-roboto font-semibold leading-[51.37px] mt-5"
            v-html="AnalyzeText"
          ></h1>
          <Button class="w-[121px] h-[44px] mt-5" v-if="!isComeFuzionaView">{{ ButtonText }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Button from "@/components/global/Button.vue";
import { useRoute } from "vue-router";

const route = useRoute();


const isComeFuzionaView = computed(() => route.path === "/come-funziona");

defineProps({
  MoreInformationBg: String,
  AnalyzeText: String,
  AnalyzeIcon: String,
  ButtonText: String
});
</script>

<style scoped></style>
