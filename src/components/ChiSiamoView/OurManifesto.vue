<template>
  <div class="py-0 mb-12 lg:mb-0 lg:py-40 px-4 lg:px-0">
    <div
      class="flex flex-col lg:flex-row justify-center max-w-[1200px] gap-x-[93px] mx-auto pt-[100px] lg:pt-0"
    >
      <div class="z-10">
        <h1
          class="text-5xl lg:text-[130px] text-justify font-normal text-primary-color font-coolvetica outline-text"
          v-html="OurManifestoTitle"
        ></h1>
      </div>
      <div
        class="mt-8 text-center lg:text-left lg:mt-0 lg:ml-12 max-w-lg text-white z-10"
      >
        <p
          class="mb-4 font-monorope text-[14px] leading-[19px] font-normal"
          v-html="OurManifestoDescription"
        ></p>
      </div>
    </div>
    <div
      class="flex flex-col lg:flex-row-reverse items-start justify-center gap-x-[131px] max-w-[1200px] mx-auto mt-[85px] lg:mt-[103px]"
    >
    <div class=" flex items-start lg:ml-12 lg:mt-0  lg:text-left z-10">
        <h1
          class="text-5xl lg:text-[130px] font-normal text-primary-color font-coolvetica outline-text"
        >
          {{ HowSeeTheMarketTitle }}
        </h1>
      </div>
      <div
        class=" text-center lg:text-left max-w-lg text-white z-10"
      >
        <p
          class="mb-4 mt-8 lg:mt-10 font-monorope text-[14px] leading-[19px] font-normal"
          v-html="HowSeetheMarketDescription"
        ></p>
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

<style scoped>
h1 {
  text-align: left;
}

@media (max-width: 1024px) {
  h1 {
    text-align: center;
  }
}
</style>
