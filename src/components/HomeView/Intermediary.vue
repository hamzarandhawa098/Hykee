<template>
    <div class="relative w-full h-full py-12 flex items-center justify-center text-white">
      <img 
        :src="IntermediaryBg" 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" 
      />
  
      <div class="relative max-w-7xl w-full mx-auto z-10 text-center py-12">
        <h1 class="text-5xl font-sans leading-[48px] lg:leading-[64px] font-bold pb-[18px] lg:pb-0">{{ IntermediaryTitleText }}</h1>
        <p class="lg:text-base text-[13px] font-monorope font-light pb-[40px]">{{ IntermediaryDescription }}</p>
        <Button 
          class="w-[236px] h-[44px]">
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
  