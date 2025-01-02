<template>
  <div class="relative text-center text-white">
    <img
      :src="CuriosBgImage"
      alt="Background"
      class="absolute inset-0 w-full h-auto object-cover opacity-100"
    />
    <div
      class="max-w-5xl mx-auto relative z-10 flex flex-col items-center h-auto justify-center  backdrop-blur-[84px]"
    >
      <div class="mt-6 max-w-xl text-center py-14">
        <p
          class="uppercase text-sm font-sans font-bold tracking-[2px] pb-[20px]"
        >
          {{ curiosText }}
        </p>
        <h2
          class="text-3xl font-sans font-bold leading-[52px] tracking-wider lg:text-curiosText pb-[28px]"
        >
          {{ curiosDescription }}
        </h2>
        <Button
          class="w-[227px] h-[44px]"
        >
          {{ curiosButtonText }}
        </Button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "../global/Button.vue";

defineProps({
  curiosText: String,
  curiosDescription: String,
  curiosButtonText: String,
  CuriosBgImage: String,
});
</script>

<style scoped></style>
