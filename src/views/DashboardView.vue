<template>
  <div class="pb-[59px]">
    <TopBarDashboard
      :TopBarTitle="'Ferrero S.P.A.'"
      :ButtonLogoText="'RG'"
      :ProfileName="'Robert Gray'"
      :ProfileAccount="'Hykee Account'"
      :route="!isSearchPage"
    />
    <CompanyInfo
      :companyInfoTitle="companyInfoTitle"
      :companyInfo="companyInfo"
    />
    <HykeeScore
      :scores="scores"
      :hykeeTitle="hykeeTitle"
      :hykeeImage="hykeeImage"

    />
    <Tabs />
  </div>
</template>
<script setup>
import { ref } from "vue";
import TopBarDashboard from "@/components/DashboardView/TopBarDashboard.vue";
import CompanyInfo from "@/components/DashboardView/CompanyInfo.vue";
import HykeeScore from "@/components/DashboardView/HykeeScore.vue";
import GuageDashboard from "@/assets/images/GuageDashboard.png";
import BusinessScore from "@/components/icons/BusinessScore.vue";
import FinancialScore from "@/components/icons/FinancialScore.vue";
import Tabs from "@/components/DashboardView/Tabs.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isSearchPage = computed(() => route.path === "/search");
const companyInfoTitle = ref("Info dell’azienda");
const companyInfo = ref({
  Indirizzo: "Via Mazzini 3 - Torino - Piemonte",
  Nace: "34.56.78",
  "Latest Budget": "2020",
  Activities: "Confectionery production",
  Revenues: "€345.000.000",
});

const scores = ref([
  {
    id: 1,
    value: 74,
    label: "Business Score",
    icon: BusinessScore,
  },
  {
    id: 2,
    value: 65,
    label: "Financial Score",
    icon: FinancialScore,
  },
]);

const hykeeTitle = ref("Hykee Score");
const hykeeImage = ref(GuageDashboard);
</script>
