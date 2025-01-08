<template>
  <div class="pt-[48px] pb-[104px] bg-DropdownBg xl:bg-Sidebar-bg">
    <Table />

    <div
      class="flex flex-col xl:flex-row justify-between max-w-[1068px] w-full mx-auto gap-[51px] pt-[50px]"
    >
      <Card
        :component="RadialChart"
        :tableData="card1.tableData"
        :chartData="[90, 10]"
        :chartColors="['#00CD78', '#000000']"
        chartLabel="Agilità"
      />
      <Card
        :component="RadialChart"
        :tableData="card1.tableData"
        :chartData="[80, 20]"
        :chartColors="['#00CD78', '#000000']"
        chartLabel="Crescita"
      />
      <Card
        :component="RadialChart"
        :tableData="card1.tableData"
        :chartData="[100, 0]"
        :chartColors="['#00CD78', '#000000']"
        chartLabel="Attitudine"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Table from "./BusinessEvaluation/Table.vue";
import Card from "./BusinessEvaluation/Card.vue";
import RadialChart from "@/components/global/RadialChart.vue";

const card1 = ref({
  component: RadialChart,
  tableData: [
    {
      name: "Focus",
      score: 90,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
    {
      name: "Flessibilità",
      score: 80,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
    {
      name: "Velocità",
      score: 70,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
});

const card2 = ref({
  component: RadialChart,
  tableData: [
    {
      name: "Creatività",
      score: 85,
      result: "Buono",
      resultClass: "text-primary-color",
    },
    {
      name: "Innovazione",
      score: 78,
      result: "Buono",
      resultClass: "text-primary-color",
    },
    {
      name: "Originalità",
      score: 92,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
});

const card3 = ref({
  component: RadialChart,
  tableData: [
    {
      name: "Precisione",
      score: 88,
      result: "Ottimo",
      resultClass: "text-primary-color",
    },
    {
      name: "Efficienza",
      score: 82,
      result: "Ottimo",
      resultClass: "text-primary-color",
    },
    {
      name: "Efficacia",
      score: 95,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
});
</script>

<style scoped></style>
