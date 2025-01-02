<template>
  <button
    class="font-monorope text-sm font-bold bg-primary-color text-white rounded-lg"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits(['click']); 
</script>
