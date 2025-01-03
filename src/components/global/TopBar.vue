<template>
  <section class="bg-white  w-full hidden lg:block">
    <div class="mx-auto max-w-7xl">
      <div class="flex justify-center items-center h-full py-[4px]">
        <div
          class="font-monorope font-bold text-xs leading-5"
          v-html="topbarText"
        ></div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  topbarText: String,
});
</script>
