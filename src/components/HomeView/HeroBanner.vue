<template>
  <div
  class="flex flex-col items-center text-white relative h-full lg:pb-20"
  :style="{ backgroundImage: `url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
>
    <div
      class="max-w-[634px] flex flex-col justify-center w-full relative  mt-[73px]"
    >
      <div
        class="text-center hidden lg:block font-sans text-5xl md:text-title leading-[50px] md:leading-[66px] font-bold z-10 "
        v-html="HeroBannerText"
      ></div>
      <div
        class="text-center font-sans block lg:hidden text-5xl md:text-title leading-[50px] md:leading-[66px] font-bold z-10 mx-[34.5px] lg:mx-0"
        v-html="HeroBannerTextMobile"
      ></div>

      <div class="flex justify-center items-center mt-[28px] lg:px-[45.5px] ">
        <img
          :src="HeroMainImage"
          alt="Phone Preview"
          class="z-10 w-full h-full lg:w-[543px] lg:h-[393px]"
        />
      </div>

      <div class="flex justify-center space-x-4 mt-[28px] mx-[47px] lg:mx-[147px] z-10">
        <img
          :src="AppleStore"
          alt="Download on App Store"
          class="object-contain w-[157px] h-auto lg:h-auto"
        />
        <img
          :src="GooglePlay"
          alt="Get it on Google Play"
          class="object-contain w-[157px] h-auto"
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
  HeroBannerTextMobile: String,
});
</script>

<style scoped></style>
