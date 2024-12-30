<template>
  <div class="relative text-center text-white lg:h-[80vh] overflow-hidden">
    <img
      :src="CuriosBgImage"
      alt="Background"
      class="absolute inset-0 w-full h-auto object-cover opacity-100"
    />
    <div
      class="max-w-7xl mx-auto relative z-10 flex flex-col items-center h-auto justify-center  backdrop-blur-4xl pb-10"
    >
      <div class="mt-6 max-w-xl space-y-4 text-center">
        <p
          class="uppercase text-sm font-sans font-bold tracking-wide opacity-80"
        >
          {{ curiosText }}
        </p>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-sans font-bold leading-tight text-curiosText"
        >
          {{ curiosDescription }}
        </h2>
        <Button
          class="py-3 px-8"
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
