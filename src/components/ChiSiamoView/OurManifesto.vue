<template>
  <div class=" py-0 lg:py-40 px-4 lg:px-0">
    <div
      class="flex flex-col lg:flex-row justify-evenly max-w-7xl mx-auto pt-[100px] lg:pt-0"
    >
      <div class="text-center max-w-xl lg:text-left z-10">
        <h1
          class="text-5xl lg:text-[130px] text-left font-normal text-primary-color font-coolvetica outline-text"
        v-html="OurManifestoTitle">
        </h1>
      </div>
      <div
        class="mt-8 text-center lg:text-left lg:mt-0 lg:ml-12 max-w-lg text-white z-10"
      >
        <p class="mb-4 font-monorope text-sm font-normal" v-html="OurManifestoDescription">
        </p>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row-reverse items-start justify-evenly  max-w-7xl mx-auto pt-[100px]"
    >
      <div class="max-w-xl flex items-start lg:text-left z-10">
        <h1
          class="text-5xl lg:text-[130px] font-normal text-primary-color font-coolvetica outline-text"
        >
        {{ HowSeeTheMarketTitle }}
        </h1>
      </div>
      <div
        class="mt-8 lg:mt-[40px] text-center lg:text-left lg:ml-12 max-w-lg text-gray-300 z-10"
      >
        <p class="mb-4 font-monorope text-sm font-normal" v-html="HowSeetheMarketDescription">
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  OurManifestoTitle: String,
  OurManifestoDescription: String,
  HowSeeTheMarketTitle: String,
  HowSeetheMarketDescription: String,
});
</script>

<style scoped></style>
