<template>
  <ChooseSolution
    :ChooseSolutionTitle="'Scegli la soluzione più <span class=\'text-primary-color\'>adatta a te!</span>'"
    :ChooseSolutionDescription="'Esplora la piattaforma HYKEE e acquista la soluzione che meglio risponde alle tue esigenze. Dal piano PLUS a soluzioni potenziate!'"
  />
  <PricesCard :cards="cards" />

  <ComparisonPackages
    class="hidden lg:block"
    :tableHeaders="tableHeaders"
    :tableActionsHeaders="tableActionsHeaders"
    :tableData1="tableData1"
    :tableData2="tableData2"
    :buttonTextShow="'Chiudi comparazione piani'"
    :buttonTextHide="'Comparazione piani'"
  />
  <MorePricesView
    :title="title"
    :description="description"
    :note="note"
    :plans="plans"
  />
</template>
<script setup>
import { ref } from "vue";
import ChooseSolution from "@/components/PrezziView/ChooseSolution.vue";
import PricesCard from "@/components/PrezziView/PricesCard.vue";
import MorePricesView from "@/components/PrezziView/MorePricesView.vue";
import ComparisonPackages from "@/components/PrezziView/ComparisonPackages.vue";

const cards = ref([
  {
    id: "start",
    title: "Start",
    price: "0",
    pricesText: "",
    description:
      "Scopri il tuo HYKEE Score e verifica come puoi affinare la tua strategia di Business.",
    features: [
      "Hykee Score",
      "Prospetti contabili degli ultimi due anni",
      "Business Rating con questionario SA",
    ],
    buttonText: "Iscriviti gratis",
  },
  {
    id: "plus",
    title: "Plus",
    price: "1.199",
    pricesText: "per azienda all’ anno",
    description:
      "Scopri il tuo HYKEE Score e confrontati con gli altri attori del mercato, esplora i tuoi competitor, clienti e fornitori e ottimizza la tua strategia di Business.",
    features: [
      "Hykee Score per te e per 120 aziende di tuo interesse",
      "Business Rating con questionario SA",
      "Prospetti contabili degli ultimi due anni per te e per 120 aziende di tuo interessea",
    ],
    buttonText: "Attiva ora!",
  },
  {
    id: "easy",
    title: "Easy",
    price: "100",
    pricesText: "",
    description:
      "Scopri il tuo HYKEE Score e verifica come puoi affinare la tua strategia di Business.",
    features: [
      "Hykee Score per te e per 3 aziende di tuo interesse",
      "Business Rating con questionario SA",
      "Prospetti contabili degli ultimi due anni per te e per 3 aziende di tuo interesse",
    ],
    buttonText: "Attiva ora!",
  },
]);

const title = ref("Desideri uno strumento ancora più potente?");
const description = ref(
  "Potenzia il tuo abbonamento Plus con il modulo più adatto alle tue necessità!"
);
const note = ref(
  "Scegli un percorso di consulenza di 20 ore annuali oppure l’accesso illimitato alle informazioni contabili delle aziende che ti interessano, oppure attivali entrambi."
);

const plans = ref([
  {
    id: 1,
    name: "Advisory",
    price: 2900,
    period: "per azienda all'anno",
    features: [
      "HYKEE Score",
      "Business Rating con questionario SA",
      "Consulenza dedicata annuale con professionisti HYKEE per rafforzare la tua strategia di business",
    ],
    buttonText: "Attiva ora!",
    description:
      "Scopri il tuo HYKEE Score e utilizza una consulenza dedicata di 20 ore annuali per migliorare la tua strategia di Business",
    description2: "Attivabile solo in abbinamento al piano PLUS.",
  },
  {
    id: 2,
    name: "Analyst",
    price: 3000,
    period: "per azienda all'anno",
    features: [
      "HYKEE Score",
      "Business Rating con questionario SA",
      "Dati di bilancio illimitati, periodico dettagliato e consulente quando desideri",
    ],
    buttonText: "Attiva ora!",
    description:
      "Scopri il tuo HYKEE Score e utilizza una consulenza dedicata di 20 ore annuali per migliorare la tua strategia di Business",
    description2: "Attivabile solo in abbinamento al piano PLUS.",
  },
]);
//Comparison Table

const tableHeaders = ref([
  "Dettaglio propria azienda",
  "Start € 0,00",
  "Plus € 1.199,00",
  "Easy € 100,00",
]);

const tableActionsHeaders = ref(["Azioni disponibili", "", "", ""]);

const tableData1 = ref([
  { name: "Haylee score", start: true, plus: true, easy: true },
  { name: "Financial Score", start: true, plus: true, easy: true },
  { name: "Business Score", start: true, plus: true, easy: true },
  { name: "Trends", start: true, plus: true, easy: true },
  { name: "Financial Statements", start: true, plus: true, easy: true },
  { name: "Business Rating", start: true, plus: true, easy: true },
  { name: "Strategic Positioning", start: false, plus: true, easy: false },
  { name: "Markets Competitors", start: false, plus: true, easy: false },
  { name: "Chamber Data", start: false, plus: true, easy: false },
]);

const tableData2 = ref([
  {
    name: "Valutazione Business con questionario Self Assessmet",
    start: true,
    plus: true,
    easy: true,
  },
  { name: "Ricerca profili aziende", start: false, plus: true, easy: true },
  { name: "Salvataggio profili aziende", start: false, plus: true, easy: true },
  { name: "Download dati cameral", start: false, plus: true, easy: true },
  { name: "Gestione piano attivo", start: true, plus: true, easy: true },
  {
    name: "Collegamento con intermediario partner",
    start: false,
    plus: true,
    easy: false,
  },
  {
    name: "Prenotazione consulenza dedicata",
    start: false,
    plus: true,
    easy: false,
  },
]);
</script>
