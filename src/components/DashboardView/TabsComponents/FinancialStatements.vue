<template>
  <div class="bg-DropdownBg xl:bg-Sidebar-bg flex items-center justify-center">
    <div class="w-full max-w-[951px] mx-auto mt-[20px] xl:mt-[91px] px-2 xl:px-0 mb-10 xl:mb-[151px]">
      <div class="flex justify-center xl:justify-between items-center">
        <div class="xl:space-x-4 flex flex-col xl:flex-row">
          <button
            class="px-[27px] py-[11px]  bg-Tabs-button border-2 border-primary-color rounded-[10px] text-sm font-medium text-white"
          >
            Riclassificato
          </button>
          <button
            class="px-[40.5px] mt-4 py-[11px]  rounded-[10px] text-sm font-medium text-white opacity-[50%] bg-Tabs-button"
          >
            IV Diretta
          </button>
        </div>
      </div>

      <div class="bg-Sidebar-Bg rounded-lg overflow-hidden mt-9 xl:mt-[1px]">
        <div class="flex justify-between items-center">
          <div></div>
          <button
            class="px-[28px] py-[13px] gap-[19px] flex rounded-t-lg bg-primary-color"
          >
            <DownloadIcon />
            Scarica altri Bilanci
          </button>
        </div>
        <table class="table-auto w-full text-left">
          <thead class="bg-white text-Sidebar-bg w-[951px]">
            <tr>
              <th class="xl:px-[27px] px-3 py-[14px]  font-poppins font-medium text-xs" v-html="tableTitle"></th>
              <th class="xl:px-[27px] px-3 py-[14px]  font-poppins font-medium text-xs" v-for="year in years" :key="year">
                {{ year }}
              </th>
            </tr>
          </thead>
          <tbody class="text-white rounded-[5px]">
            <tr
              v-for="(row, index) in rows"
              :key="row.id"
              :class="index % 2 === 0 ? 'bg-black' : 'bg-black bg-opacity-[0%]'"
              class="w-[951px]"
            >
              <td class="xl:px-[27px] px-3 py-[14px]  font-poppins font-medium text-xs" v-html="row.name"></td>
              <td
                class="xl:px-[27px] px-3 py-[14px] font-poppins font-medium text-xs"
                v-for="value in row.values"
                :key="value"
              >
                {{ value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

const tableTitle = ref('Income <span><br></span>Statement')
const years = ref([2018, 2019, 2020]);
const rows = ref([
  { id: 1, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 2, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 3, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 4, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 4, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
]);
</script>

<style scoped></style>
