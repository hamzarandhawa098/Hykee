<template>
  <div class=" py-0 lg:py-40">
    <div
      class="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto py-32 px-3"
    >
      <div class="text-center max-w-xl lg:text-left z-10">
        <h1
          class="text-5xl lg:text-[130px] font-normal text-primary-color font-coolvetica outline-text"
        >
          {{ OurManifestoTitle }}
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
      class="flex flex-col lg:flex-row-reverse justify-between max-w-7xl mx-auto px-3"
    >
      <div class="text-center max-w-xl lg:text-left z-10">
        <h1
          class="text-5xl lg:text-[130px] font-normal text-primary-color font-coolvetica outline-text"
        >
        {{ HowSeeTheMarketTitle }}
        </h1>
      </div>
      <div
        class="mt-8 lg:mt-0 text-center lg:text-left lg:ml-12 max-w-lg text-gray-300 z-10"
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
