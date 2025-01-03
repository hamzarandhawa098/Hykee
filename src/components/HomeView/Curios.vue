<template>
  <div class="relative text-center text-white">
    <img
      :src="CuriosBgImage"
      alt="Background"
      class="absolute inset-0 w-full h-auto object-cover opacity-100"
    />
    <div
      class="max-w-[941px] mx-auto relative z-10 flex flex-col items-center h-auto justify-center  backdrop-blur-[40px]"
    >
      <div class="max-w-[460px] mx-auto my-[54.62px]  text-center">
        <p
          class="uppercase text-sm font-sans font-bold tracking-[2px]"
        >
          {{ curiosText }}
        </p>
        <h2
          class="font-sans font-bold mt-[20px] mb-[28px]  leading-[52px] tracking-wider text-curiosText"
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
