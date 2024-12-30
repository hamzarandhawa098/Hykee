<template>
    <section class="max-w-7xl mx-auto w-full  text-white py-12 px-6 lg:px-20">
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div class="text-center">
          <h1 class="text-3xl md:text-5xl font-sans text-center font-bold" v-html="ChooseSolutionTitle">
          </h1>
        </div>
  
        <div class="text-center lg:text-left md:max-w-md">
          <p class="font-sans font-normal text-base leading-[30px]">
            {{ ChooseSolutionDescription }}
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  defineProps({
    ChooseSolutionTitle : String,
    ChooseSolutionDescription : String,
  })
  </script>
  
  <style>
  </style>
  