<template>
<div class="pt-[48px] pb-[104px] bg-DropdownBg xl:bg-Sidebar-bg">
  <Table />
  
    <div class="flex flex-col xl:flex-row justify-between max-w-[1068px] w-full mx-auto gap-[51px] pt-[50px]">
      <Card :image="card1.image" :tableData="card1.tableData" />
      <Card :image="card2.image" :tableData="card2.tableData" />
      <Card :image="card3.image" :tableData="card3.tableData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Table from "./BusinessEvaluation/Table.vue";
import Card from "./BusinessEvaluation/Card.vue";
import CardImg1 from "@/assets/images/CardImg1.png";
import CardImg2 from "@/assets/images/CardImg2.png";
import CardImg3 from "@/assets/images/CardImg3.png";

const card1 = ref({
  image: CardImg1,
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
  image: CardImg2,
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
  image: CardImg3,
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
