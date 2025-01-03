<template>
  <TechnologyConsultancy
    :LogoTransparent="LogoTransparent"
    :TechText="'Tecnologia, consulenza, dati per  <span class=\'text-primary-color\'>cavalcare i mercati</span>'"
    :TechDescription="'La prima piattaforma di Advisory aumentata al mondo. Business, tecnologia, consulenza per imprimere alla tua azienda la crescita che merita'"
    :TitleTextMobile="'Perchè scegliere'"
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
    :StartGrowingImage="StartGrowingImage"
    :StartGrowingText="'Prova Hykee Gratis! '"
    :StartGrowingDescription="'Una piattaforma tecnologica a supporto delle tue decisioni strategiche.'"
    :StartGrowingButtonText="'Iniziamo!'"
    :StartGrowingTitleText="'Hey!'"
  />
</template>
<script setup>
import TechnologyConsultancy from "@/components/HomeView/TechnologyConsultancy.vue";
import LogoTransparent from "@/components/icons/LogoTransparent.vue";
import MobileSteps from "@/components/HomeView/MobileSteps.vue";
import MobileStepsComeFunziona from "@/components/ComeFunzionaView/MobileStepsComeFunziona.vue";
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobile.png";
import StartGrowing from "@/components/HomeView/StartGrowing.vue";
import StartGrowingImage from "@/assets/images/StartGrowingImage.png";


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
