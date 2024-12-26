<template>
  <div class="text-white py-12 max-w-5xl mx-auto">
    <div class="container mx-auto px-6 lg:px-12">
      <h2
        class="text-titleSecondary font-bold text-center lg:text-start font-sans w-full lg:w-1/3 mb-12"
        v-html="titleMobileSteps"
      ></h2>
      <div class="space-y-16">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex flex-col md:flex-row items-center gap-8"
        >
          <div
            :class="index % 2 === 0 ? 'md:w-1/2 flex space-x-10' : 'md:w-1/2'"
          >
            <div
              v-if="index % 2 === 0"
              class="flex flex-row items-center gap-4"
            >
              <h1 class="outline-text text-5xl font-bold">
                {{ step.number }}
              </h1>
              <hr class="w-10 border-2 border-primary-color" />
            </div>
            <p>{{ step.description }}</p>
          </div>
          <div class="md:w-1/2 flex justify-center">
            <img
              :src="index % 2 === 0 ? RightMobile : LeftMobile"
              :alt="'Step ' + step.number"
              class="max-w-full rounded-lg shadow-lg"
            />
          </div>
          <div v-if="index % 2 !== 0" class="flex flex-row items-center gap-4">
            <hr class="w-10 border-2 border-primary-color" />
            <h1 class="outline-text text-5xl font-bold">
              {{ step.number }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  LeftMobile: String,
  RightMobile: String,
  titleMobileSteps: String,
  steps: Array,
});
</script>

<style>
.outline-text {
  font-family: "Coolvetica", sans-serif;
  color: transparent;
  -webkit-text-stroke: 1px #00cd78;
  text-align: center;
}
</style>
