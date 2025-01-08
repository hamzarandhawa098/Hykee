<template>
  <button
    class="font-monorope text-sm font-bold bg-primary-color rounded-lg"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits(['click']); 
</script>
