<template>
  <section
    class="max-w-[1159px] hidden xl:block mx-auto mt-[10px] text-white rounded-lg"
  >
    <div class="flex space-x-[10px] relative">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="[
          'flex items-center justify-center max-w-[157px] h-[62px] transition-all',
          activeTab === tab.id
            ? 'bg-Sidebar-bg opacity-100 border-t-2 border-l-2 border-r-2 rounded-t-lg border-b-0 z-10'
            : 'bg-Sidebar-bg opacity-50 rounded-lg',
        ]"
      >
        <span
          class="flex items-center justify-center gap-1.5 px-[12px] py-[15px]"
        >
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            :class="[
              activeTab === tab.id ? 'text-primary-color' : 'text-white',
            ]"
          />
          <span class="font-normal text-[13px] font-poppins">{{
            tab.label
          }}</span>
        </span>
      </button>
    </div>
    <div class="border-2 rounded-b-lg relative z-0 transition-all -mt-[2px]">
      <component :is="currentTabComponent" />
    </div>
  </section>
  <section
    class="max-w-[1159px] xl:hidden mx-auto mt-[10px] text-white rounded-lg"
  >
    <div class="space-y-2">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="bg-DropdownBg rounded-lg overflow-hidden"
      >
        <button
          @click="toggleDropdown(tab.id)"
          class="flex items-center justify-between w-full px-4 py-3 text-left"
        >
          <span class="flex items-center gap-2">
            <span class="font-normal text-[13px] font-poppins">
              {{ tab.label }}
            </span>
          </span>
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            :class="[
              activeTab === tab.id ? 'rotate-180' : '',
            ]"
            class="transition-transform"
          />
        </button>
        <div
          v-show="activeTab === tab.id"
        >
          <component :is="tab.component" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import Trends from "@/components/DashboardView/TabsComponents/Trends.vue";
import FinancialStatements from "./TabsComponents/FinancialStatements.vue";
import BusinessEvaluation from "./TabsComponents/BusinessEvaluation.vue";

const tabs = [
  { id: "trends", label: "Trends", component: Trends },
  {
    id: "balance",
    label: "Prospetti di Bilancio",
    component: FinancialStatements,
  },
  {
    id: "valuation",
    label: "Valutazione Aziendale",
    component: BusinessEvaluation,
  },
  { id: "credit", label: "Advanced Credit Analytics", component: Trends },
  { id: "market", label: "Market & Competitors", component: Trends },
  { id: "digital", label: "Posizionamento Digitale", component: Trends },
  { id: "group", label: "Gruppo, Soci, Amministratori", component: Trends },
  { id: "cyber", label: "Cyber Exposure Index", component: Trends },
];

const activeTab = ref("trends");

const currentTabComponent = computed(() => {
  const currentTab = tabs.find((tab) => tab.id === activeTab.value);
  return currentTab ? currentTab.component : null;
});

const toggleDropdown = (id) => {
  activeTab.value = activeTab.value === id ? "" : id;
};
</script>
