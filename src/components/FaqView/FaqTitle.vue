<template>
    <div class="max-w-5xl mx-auto w-full p-6">
      <div class="flex justify-between items-center text-white rounded-lg shadow-lg p-6">
        <div class="tracking-wide">
          <h1 class="font-sans font-bold text-[58px]" v-html="FaqTitleText">
          </h1>
        </div>
  
        <div>
          <img :src="FaqIcon" alt="FAQ Icon" class="w-48 h-auto" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    FaqTitleText: String,
    FaqIcon: String,
  })
  </script>
  
  <style scoped>
  </style>
  