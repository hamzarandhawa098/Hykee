<template>
    <div class="relative w-full h-full bg-faqIconCircular mb-[64px] flex items-center justify-center text-white">
      <img 
        :src="IntermediaryBg" 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none" 
      />
  
      <div class="relative max-w-[491px] pt-[92px] pb-[88px]  w-full mx-auto z-10 text-center">
        <h1 class="text-5xl font-sans leading-[48px] lg:leading-[64px] font-bold pb-[18px] lg:pb-0">{{ IntermediaryTitleText }}</h1>
        <p class="lg:text-base text-[13px] font-monorope font-light pb-[40px]">{{ IntermediaryDescription }}</p>
        <Button 
          class="px-[18px] py-[12px]">
          {{ IntermediaryButtonText }}
        </Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from "@/components/global/Button.vue";
  defineProps({
    IntermediaryBg: String,
    IntermediaryTitleText: String,
    IntermediaryDescription: String,
    IntermediaryButtonText: String,
  });
  
  </script>
  
  <style scoped>
  </style>
  