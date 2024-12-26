<template>
  <div class="flex flex-col items-center text-white py-12 px-4 relative">
    <img
      :src="HeroBackground"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-1"
    />
    <div class="max-w-[634px] w-full relative z-10">
      <div
        class="text-center font-sans text-4xl md:text-title leading-[50px] md:leading-[66px] font-bold mb-6 z-10"
        v-html="HeroBannerText"
      ></div>

      <div class="relative flex justify-center items-center">
        <img :src="HeroCircle" alt="Circles" class="absolute w-[543px] h-auto" />
        <img
          :src="HeroMainImage"
          alt="Phone Preview"
          class="z-10 w-[32rem] h-[380px]"
        />
      </div>

      <div class="flex space-x-4 justify-center mt-7">
  <img
    :src="AppleStore"
    alt="Download on App Store"
    class="aspect-[4/3] h-[98px] object-contain"
  />
  <img
    :src="GooglePlay"
    alt="Get it on Google Play"
    class="aspect-[4/3] h-[100px] object-contain"
  />
</div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  HeroBackground: String,
  HeroMainImage: String,
  AppleStore: String,
  GooglePlay: String,
  HeroCircle: String,
  HeroBannerText: String,
});
</script>

<style scoped></style>
