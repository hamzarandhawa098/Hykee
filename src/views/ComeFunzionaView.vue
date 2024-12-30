<template>
  <Analyze
    :MoreInformationBg="MoreInformationBg"
    :AnalyzeIcon="AnalyzeIcon"
    :AnalyzeText="AnalyzeText"
  />
  <MobileSteps
    class="lg:hidden"
    :titleMobileSteps="'Come funziona <span class=\'text-primary-color\'>in 5 steps:</span>'"
    :LeftMobile="LeftMobile"
    :RightMobile="RightMobile"
    :steps="steps"
  />
  <MobileStepsComeFunziona
    class="hidden lg:block"
    :LeftMobile="LeftMobile"
    :RightMobile="RightMobile"
    :titleMobileSteps="'Come funziona <span class=\'text-primary-color\'>in 5 steps:</span>'"
    :steps="steps"
  />

  <StartGrowing
    :StartGrowingImage="StartGrowingFunziona"
    :StartGrowingAnimation="StartGrowingAnimation"
    :StartGrowingText="'Entra a far parte dell’ecosistema Hykee '"
    :StartGrowingDescription="'Collegando la tua azienda ai Partner presenti sulla piattaforma HYKEE potrai ricevere un servizio di consulenza integrato e ottimizzato in cui le tue necessità sono al centro. Ricevi aggiornamenti mirati grazie ai sistemi di comunicazione one-to-one di HYKEE e concentrati sulla crescita del tuo business.'"
    :StartGrowingButtonText="'Iscriviti ora'"
    :StartGrowingTitleText="'Hey!'"
  />
  
</template>
<script setup>
import { ref } from "vue";
import Analyze from "@/components/ComeFunzionaView/Analyze.vue";
import MobileStepsComeFunziona from "@/components/ComeFunzionaView/MobileStepsComeFunziona.vue";
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";
import AnalyzeIcon from "@/components/icons/AnalyzeIcon.vue";
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobile.png";
import StartGrowing from "@/components/HomeView/StartGrowing.vue";
import StartGrowingFunziona from "@/assets/images/StartGrowingFunziona.png";
import StartGrowingAnimation from "@/assets/images/StartGrowingAnimation.png";

import MobileSteps from "@/components/HomeView/MobileSteps.vue";

const AnalyzeText = ref(
  "Analizza il tuo business<br>Osserva il mercato<br>Ottimizza la strategia di crescita!"
);

const steps = [
  {
    number: "01",
    description: "Attiva il tuo profilo Partner",
    image: RightMobile,
  },
  {
    number: "02",
    description:
      "Valuta i tuoi clienti con una visione a 360° (finanziaria e business). Facilmente integrabile con i tuoi servizi di consulenza.",
    image: LeftMobile,
  },
  {
    number: "03",
    description:
      "Invita i tuoi prospect o clienti a interagire con il chatbot dinamico Hykee per valutare le caratteristiche della loro organizzazione.",
    image: RightMobile,
  },
  {
    number: "04",
    description:
      "Ottieni lo score complessivo sulla capacità di crescita di un'azienda coniugando valutazioni economico-finanziarie.",
    image: LeftMobile,
  },
  {
    number: "05",
    description:
      "Invita i tuoi prospect o clienti a interagire con il chatbot dinamico Hykee per valutare le caratteristiche della loro organizzazione.",
    image: RightMobile,
  },
];
</script>
