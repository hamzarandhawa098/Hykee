<template>
  <div class="my-[106px]">
    <div
      class="bg-primary-color text-white px-3 lg:px-24 max-w-[899px] mx-auto w-full rounded-2xl h-auto"
    >
      <div class="max-w-[655px] mx-auto">
        <div
          class="flex flex-col lg:flex-row text-center lg:text-left justify-center items-start lg:justify-between mb-10 pt-[60px]"
        >
          <h1 class="text-3xl lg:text-5xl font-sans font-bold lg:max-w-[278px]">
            {{ title }}
          </h1>
          <p class="text-[20px] font-bold leading-[26px] font-sans lg:max-w-[279px]">
            {{ description }} <br /><br />
            <span class="text-sm font-normal">
              {{ note }}
            </span>
          </p>
        </div>
        <div class="flex items-center justify-center pt-[50px] pb-[80px]">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              v-for="plan in plans"
              :key="plan.id"
              class="bg-white relative p-10 rounded-3xl shadow-lg w-auto md:w-[500px] lg:w-[296px] h-[598px]"
            >
              <h2 class="text-[28px] font-sans text-card-text font-bold">
                {{ plan.name }}
              </h2>
              <div class="flex pt-[20px] pb-[30px]">
                <p class="text-4xl font-bold font-sans text-card-text">
                  €{{ plan.price }}
                </p>
                <p
                  class="text-xs mt-2 ml-4 font-avenir text-solution-features max-w-[100px] font-medium"
                >
                  {{ plan.period }}
                </p>
              </div>
              <p
                class="font-sans font-medium text-xs text-solution-features mb-8"
              >
                {{ plan.description }}
              </p>
              <p class="font-sans font-medium text-xs text-primary-color mb-6">
                {{ plan.description2 }}
              </p>
              <ul class="space-y-3 mb-6">
                <li
                  v-for="feature in plan.features"
                  :key="feature"
                  class="flex items-normal"
                >
                  <span
                    class="text-white w-[20px] h-[20px] p-1 flex justify-center items-center   rounded-full bg-check-bg font-bold mr-2"
                  >
                    <font-awesome-icon :icon="['fa', 'check']" />
                  </span>
                  <span
                    class="text-xs font-medium font-sans text-solution-features"
                    >{{ feature }}</span
                  >
                </li>
              </ul>
              <div class="flex justify-center">
                <button
                  class="bg-primary-color text-white px-[75.5px] py-[12px] rounded-xl font-semibold absolute bottom-6"
                >
                  {{ plan.buttonText }}
                </button>
              </div>
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
  plans: Array,
});
</script>

<style scoped></style>
