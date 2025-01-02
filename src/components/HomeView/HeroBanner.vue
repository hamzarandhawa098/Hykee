<template>
  <div class="flex flex-col items-center text-white relative">
    <img
      :src="HeroBackground"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover z-1"
    />
    <div class="max-w-[634px] w-full relative z-10">
      <div
        class="text-center font-sans pt-[31px] text-5xl md:text-title leading-[50px] md:leading-[66px] font-bold mb-6 z-10"
        v-html="HeroBannerText"
      ></div>

      <div class="flex justify-center items-center px-[45.5px]">
        <img
          :src="HeroMainImage"
          alt="Phone Preview"
          class="z-10 w-full h-auto lg:w-[543px] lg:h-[393px]"
        />
      </div>

      <div class="flex space-x-4 justify-center px-[147px]">
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
