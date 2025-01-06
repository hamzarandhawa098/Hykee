<template>
  <div class="text-white max-w-[928px] pt-[100px] mx-auto">
    <div class="container">
      <h2
        class="text-titleSecondary font-bold text-center lg:text-start font-sans w-full lg:w-1/3 mb-12"
        v-html="titleMobileSteps"
      ></h2>
      <div class="max-w-[866px] mx-auto">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col md:flex-row items-center gap-[60px]"
        >
          <template v-if="isEven(index)">
            <div class="md:w-1/2 flex flex-row items-center gap-6">
              <h1 class="outline-text tracking-widest text-5xl font-bold">
                {{ step.number }}
              </h1>
              <hr class="w-10 border-2 border-primary-color" />
            </div>
            <p class="px-[60px] mt-2 md:w-full text-center md:text-left">
              {{ step.description }}
            </p>

            <div class="flex justify-center w-full h-full">
              <img
                :src="step.image"
                :alt="'Step ' + step.number"
                class="rounded-lg shadow-lg"
              />
            </div>
          </template>

          <template v-else>
            <div class="flex items-center gap-[60px] justify-center">
              <p class="max-w-xl mr-24 mt-2 md:w-full text-center md:text-left">
                {{ step.description }}
              </p>
            </div>
            <div class="w-[333px] h-[286px]">
              <img
                :src="step.image"
                :alt="'Step ' + step.number"
                class="max-w-full rounded-lg shadow-lg"
              />
            </div>
            <div class="md:w-1/2 flex flex-row items-center gap-4 px-[60px]">
              <hr class="w-10 border-2 border-primary-color" />
              <h1 class="outline-text text-5xl font-bold">
                {{ step.number }}
              </h1>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  LeftMobile: String,
  RightMobile: String,
  titleMobileSteps: String,
  steps: Array,
});

const isEven = (index) => index % 2 === 0;
</script>

<style>
.outline-text {
  font-family: "Coolvetica", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #00cd78;
  text-align: center;
}
</style>
