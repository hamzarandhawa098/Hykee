<template>
  <div class="max-w-[900px] mx-auto w-full px-10 lg:px-0">
    <div
      class="flex justify-between items-center text-white rounded-lg shadow-lg py-[100px]"
    >
      <h1 class="font-sans tracking-[0.2em] font-bold text-[58px]" v-html="FaqTitleText"></h1>
      <img :src="FaqIcon" alt="FAQ Icon" class="w-auto h-[127px]" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  FaqTitleText: String,
  FaqIcon: String,
});
</script>

<style scoped></style>
