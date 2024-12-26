<template>
    <div class="max-w-4xl mx-auto bg-solution-bg-color rounded-xl text-white h-auto flex items-center justify-center">
      <div class="text-center py-20">
        <h1 class="text-3xl font-bold text-white mb-4" v-html="solutionTitle">
        </h1>
        <div class="flex w-auto h-auto flex-col md:flex-row gap-16  items-center justify-center">
          <div
            v-for="plan in plans"
            :key="plan.name"
            class="bg-white text-black rounded-2xl p-6 w-80 cursor-pointer"
            :class="{'ring-4 ring-green-500': selectedPlan === plan.name}"
            @click="selectPlan(plan.name)"
          >
            <h2 class="text-xl font-bold mb-4">{{ plan.name }}</h2>
            <div class="flex gap-1">
            <p class="text-4xl font-bold text-black mb-4">
              €{{ plan.price }}
            </p>
            <span class="text-base font-normal text-primary-color">per utente al mese</span>
        </div>
            <ul class="text-sm text-left text-solution-features  space-y-2 mb-6">
              <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
            </ul>
            <Button
              class=" py-2 px-4 "
            >
              {{ plan.buttonText }}
            </Button>
          </div>
        </div>
        <p v-if="selectedPlan" class="mt-6 text-lg">
          Hai selezionato: <span class="font-bold">{{ selectedPlan }}</span>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Button from '@/components/global/Button.vue';

  defineProps({
    solutionTitle: String,
    plans: Array
  })
  
  const selectedPlan = ref(null);
  
  function selectPlan(plan) {
    selectedPlan.value = plan;
  }
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  .ring-4 {
    border-width: 4px;
  }
  </style>
  