<template>
    <button
      class="text-monorope text-sm font-bold bg-primary-color text-white  rounded-lg"
      @click="handleClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  defineProps({
    onClick: {
      type: Function,
      default: null,
    },
  });
  
  function handleClick() {
    if (onClick) {
      onClick();
    }
  }
  </script>
  