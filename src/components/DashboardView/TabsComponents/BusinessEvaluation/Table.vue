<template>
  <div class=" text-white">
    <div class="max-w-[1068px] w-full mx-auto px-3 flex flex-col xl:flex-row justify-between">
      <table class="w-full max-w-[753px]">
        <thead class="rounded-[10px]">
          <tr
            class="bg-white font-poppins font-medium text-xs text-left text-Sidebar-bg"
          >
            <th class="py-[14px] px-[27px]">Area</th>
            <th class="py-[14px] px-[27px]">Score %</th>
            <th class="py-[14px] px-[27px]">Risultato</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in tableData"
            :key="index"
            :class="{
              'bg-black': index % 2 === 0,
              'bg-black bg-opacity-[0%]': index % 2 !== 0,
            }"
          >
            <td class="py-[14px] px-[27px] font-poppins font-medium text-xs">
              {{ item.area }}
            </td>
            <td class="py-[14px] px-[27px] font-poppins font-medium text-xs">
              {{ item.score }}%
            </td>
            <td
              class="py-[14px] px-[27px] font-poppins font-medium text-xs"
              :class="{
                'text-Table-Yellow-text': item.result === 'Debole',
                'text-primary-color': item.result === 'Eccellente',
              }"
            >
              {{ item.result }}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-white opacity-[70%] mt-3 xl:mt-0 text-center xl:text-left font-inter text-xs xl:max-w-[236px]">
        <p  v-html="description" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tableData = ref([
  { area: "Prodotto", score: 0, result: "Debole" },
  { area: "Cliente", score: 0, result: "Eccellente" },
  { area: "Modalità di Business", score: 0, result: "Eccellente" },
  { area: "Cultura", score: 0, result: "Eccellente" },
  { area: "Visione e Obiettivi", score: 0, result: "Eccellente" },
  { area: "Mercato", score: 0, result: "Eccellente" },
]);

const description = ref(" L'Hykee Business Score è un parametro qualitativo che fornisce indicazione della forza competitiva e dei punti di forza e debolezza di un azienda analizzandone i principali aspetti chiave: prodotti/servizi, i clienti, il mercato, la cultura aziendale, i processi, il modello di business.<span><br><br></span> L'Hykee Business Score è un algoritmo proprietario che pondera e combina le risposte del Business Assessment.<span><br><br></span> La finalità dell'Hykee Business Score è offrire una valutazione complementare e parallela ai tradizionali indicatori economico-finanziari basati sui bilanci storici. Loscopo è fornire una panoramica prospettica dell'azienda e della sua capacità di competere nel mercato.")
</script>

<style scoped>
</style>
