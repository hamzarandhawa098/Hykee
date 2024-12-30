<template>
  <div class="py-24">
    <div
      class="bg-primary-color text-white py-20 px-3 lg:px-24 max-w-7xl mx-auto w-full rounded-2xl"
    >
      <div class="max-w-4xl mx-auto">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-left justify-center items-center lg:justify-between mb-10"
        >
          <h1 class="text-3xl lg:text-5xl font-sans font-bold mb-4 lg:max-w-sm">
            {{ title }}
          </h1>
          <p class="text-xl font-bold font-sans mb-8 lg:max-w-sm">
            {{ description }} <br /><br />
            <span class="text-sm font-normal">
              {{ note }}
            </span>
          </p>
        </div>
        <div class="flex items-center justify-center">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div
              v-for="plan in plans"
              :key="plan.id"
              class="bg-white relative p-10 rounded-lg shadow-lg w-auto md:w-[500px] lg:w-[350px] h-[624px]"
            >
              <h2 class="text-[28px] font-sans text-card-text font-bold mb-7">
                {{ plan.name }}
              </h2>
              <div class="flex">
                <p class="text-4xl font-bold font-sans text-card-text mb-7">
                  €{{ plan.price }}
                </p>
                <p
                  class="text-xs mt-2 ml-4 font-avenir text-solution-features max-w-[100px] font-medium"
                >
                  {{ plan.period }}
                </p>
              </div>
              <p
                class="font-sans font-medium text-xs text-solution-features mb-4"
              >
                {{ plan.description }}
              </p>
              <p class="font-sans font-medium text-xs text-primary-color mb-8">
                {{ plan.description2 }}
              </p>
              <ul class="space-y-6 mb-6">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-start"
                >
                  <span
                    class="text-white px-1.5 py-0.5 rounded-full bg-primary-color font-bold mr-2"
                  >
                    <font-awesome-icon :icon="['fa', 'check']" />
                  </span>
                  <span
                    class="text-xs font-medium font-sans text-solution-features"
                    >{{ feature }}</span
                  >
                </li>
              </ul>
              <button
                class="bg-primary-color text-white px-6 py-2 rounded-lg font-semibold absolute bottom-6 left-6 right-6"
              >
                {{ plan.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    note: String,
    plans: Array
})

</script>

<style scoped></style>
