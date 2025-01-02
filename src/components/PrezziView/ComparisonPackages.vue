<template>
    <div class="relative max-w-4xl mx-auto w-full text-white pt-[100px]">
      <div v-if="!isTableOpen" class="relative w-full rounded-lg overflow-hidden">
        <img
          :src="ComparisonBg"
          alt="Background"
          class="w-full h-40 object-cover"
        />
        <Button
          @click="toggleTable"
          class="absolute py-2 px-6"
          style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
        >
          {{ buttonTextHide }}
        </Button>
      </div>
  
      <div v-else class="flex justify-center items-center rounded-lg p-4">
        <Button @click="toggleTable" class="py-2 px-6">
          {{ buttonTextShow }}
        </Button>
      </div>
  
      <div v-if="isTableOpen" class="mt-6 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out">
        <table class="w-full text-left border-collapse">
          <thead class="bg-white text-card-button-active">
            <tr>
              <th v-for="(header, index) in tableHeaders" :key="index" class="py-6 px-6 text-lg font-bold font-sans border-b-2 border-r-2 border-primary-color">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-white text-card-button-active">
            <tr v-for="(row, index) in tableData1" :key="index">
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color">
                {{ row.name }}
              </td>
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color text-start">
                <span v-if="row.start" class="text-green-600 font-bold">✔</span>
              </td>
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color text-start">
                <span v-if="row.plus" class="text-green-600 font-bold">✔</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-300 text-start">
                <span v-if="row.easy" class="text-green-600 font-bold">✔</span>
              </td>
            </tr>
          </tbody>
          <thead class="bg-white text-card-button-active">
            <tr>
              <th v-for="(header, index) in tableActionsHeaders" :key="index" class="py-6 px-6 text-lg font-bold font-sans border-b-2 border-r-2 border-primary-color">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-gray-50 text-card-button-active">
            <tr v-for="(row, index) in tableData2" :key="index">
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color">
                {{ row.name }}
              </td>
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color text-start">
                <span v-if="row.start" class="text-green-600 font-bold">✔</span>
              </td>
              <td class="py-4 px-6 border-b border-b-gray-300 border-r-2 border-r-primary-color text-start">
                <span v-if="row.plus" class="text-green-600 font-bold">✔</span>
              </td>
              <td class="py-4 px-6 border-b border-gray-300 text-start">
                <span v-if="row.easy" class="text-green-600 font-bold">✔</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import ComparisonBg from "@/assets/images/ComparisonPackages.png";
  import Button from "@/components/global/Button.vue";
  
  const isTableOpen = ref(false);
  
  const toggleTable = () => {
    isTableOpen.value = !isTableOpen.value;
  };

  defineProps({
    tableHeaders: Array,
    tableActionsHeaders: String,
    tableData1: String,
    tableData2: String,
    buttonTextShow: String,
    buttonTextHide: String
  })
  
  </script>
  