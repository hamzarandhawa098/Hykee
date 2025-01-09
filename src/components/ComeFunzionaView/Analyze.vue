<template>
  <section class="relative w-full my-[64px] flex items-center justify-center" v-if="props.route">
    <div
      class="relative mx-auto z-10 flex py-12 items-center justify-center lg:justify-between w-full  max-w-[938px] text-white rounded-lg"
    >
      <img
        :src="MoreInformationBg"
        alt="Background"
        class="absolute inset-0 w-full h-full lg:w-[938px] lg:h-auto object-cover opacity-100 z-[-1] rounded-xl pointer-events-none"
      />
      <div
        class="max-w-[775px] w-full flex flex-col lg:flex-row justify-center items-center"
      >
      <img :src="AnalyzeImage" alt="" class="w-[111px] h-[124px]">
        <div class="flex flex-col justify-center items-center">
          <h1
            class="text-2xl lg:text-3xl lg:pl-[47px]  text-center lg:text-left font-roboto font-semibold leading-[51.37px] mt-5"
            v-html="AnalyzeText"
          ></h1>
        </div>
      </div>
    </div>
  </section>
  <section class="relative w-full my-[64px] flex items-center justify-center" v-else>
    <div
      class="relative mx-auto z-10 flex py-12 items-center justify-center w-full  max-w-[938px] text-white rounded-lg"
    >
      <img
        :src="MoreInformationBg"
        alt="Background"
        class="absolute inset-0 w-full h-full lg:w-[938px] lg:h-auto object-cover opacity-100 z-[-1] rounded-xl pointer-events-none"
      />
      <div
        class="max-w-[775px] w-full flex flex-col lg:flex-row justify-center items-center"
      >
      <img :src="AnalyzeImage" alt="" class="w-[111px] h-[124px]">
        <div class="flex flex-col justify-center items-center">
          <h1
            class="text-2xl lg:text-3xl lg:pl-[47px]  text-center  font-roboto font-semibold leading-[51.37px] mt-5"
            v-html="AnalyzeText"
          ></h1>
          <Button class="w-[121px] h-[44px] mt-10">{{ ButtonText }}</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/global/Button.vue";

const props = defineProps({
  MoreInformationBg: String,
  AnalyzeText: String,
  AnalyzeImage: String,
  ButtonText: String,
  route: String,
});
</script>

<style scoped></style>
