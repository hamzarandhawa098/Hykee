<template>
  <HeroBanner
    :HeroBackground="HeroBackground"
    :HeroMainImage="HeroMainImage"
    :AppleStore="AppleStore"
    :GooglePlay="GooglePlay"
    :HeroCircle="HeroCircle"
    :HeroBannerText="'The Augmented Advisory  <span class=\'text-primary-color\'>Platform to grow </span> your business '"
    :HeroBannerTextMobile="'La miglior App per <span class=\'text-primary-color\'>business valutation </span>'"
  />
  <Intermediary  
    class="lg:hidden mt-[79px]"
    :IntermediaryBg="IntermediaryBg"
    :IntermediaryTitleText="'Sei un intermediario?'"
    :IntermediaryDescription="'Scopri le soluzioni HYKEE più adatte a te e ai tuoi clienti!'"
    :IntermediaryButtonText="'Scopri Hykee per i Partner'"
  />
  <TechnologyConsultancy
    :LogoTransparent="LogoTransparent"
    :TechText="'Tecnologia, consulenza, dati <span class=\'text-center\'><br> per  <span class=\'text-primary-color\'>cavalcare i mercati</span></span>'"
    :TechDescription="'La prima piattaforma di Advisory aumentata al mondo. Business, tecnologia, consulenza per imprimere alla tua azienda la crescita che merita'"
    :TitleTextMobile="'Perchè scegliere'"
    :route="isHomePage"
  />
  <MobileSteps
    class="lg:hidden"
    :LeftMobile="LeftMobile"
    :RightMobile="RightMobile"
    :steps="steps"
  />
  <Analysis
    :mainTitle="mainTitle"
    :iconMain="iconMain"
    :mainDescription="mainDescription"
    :leftItems="leftItems"
    :rightItems="rightItems"
  />
  <Curios
    :curiosText="'Curioso?'"
    :curiosDescription="'Scopri i dettagli della piattaforma HYKEE'"
    :curiosButtonText="'Vedi tutte le funzionalità'"
    :CuriosBgImage="CuriosBgImage"
  />
  <StartGrowing
    :StartGrowingImage="StartGrowingImage"
    :StartGrowingText="'Inizia a crescere è GRATIS! '"
    :StartGrowingDescription="'Una piattaforma tecnologica a supporto delle tue decisioni strategiche.'"
    :StartGrowingButtonText="'Iniziamo!'"
    :StartGrowingTitleText="'Hey!'"
  />
  <Intermediary
    class="hidden lg:block"
    :IntermediaryBg="IntermediaryBg"
    :IntermediaryTitleText="'Sei un intermediario?'"
    :IntermediaryDescription="'Scopri le soluzioni HYKEE più adatte a te e ai tuoi clienti!'"
    :IntermediaryButtonText="'Scopri Hykee per i Partner'"
  />
</template>

<script setup>
import { ref } from "vue";
import HeroBanner from "@/components/HomeView/HeroBanner.vue";
import HeroBackground from "@/assets/images/HeroBackground.jpg";
import HeroMainImage from "@/assets/images/heroMain.png";
import AppleStore from "@/assets/images/appstore.png";
import GooglePlay from "@/assets/images/playstore.png";
import TechnologyConsultancy from "@/components/HomeView/TechnologyConsultancy.vue";
import LogoTransparent from "@/components/icons/LogoTransparent.vue";
import Analysis from "@/components/HomeView/Analysis.vue";
import AnalysisSvg from "@/components/icons/AnalysisSvg.vue";
import Checkup from "@/components/icons/Checkup.vue";
import Comparison from "@/components/icons/Comparison.vue";
import Database from "@/components/icons/Database.vue";
import Networking from "@/components/icons/Networking.vue";
import News from "@/components/icons/News.vue";
import Planning from "@/components/icons/Planning.vue";
import Curios from "@/components/HomeView/Curios.vue";
import CuriosBgImage from "@/assets/images/CuriosBg.png";
import StartGrowing from "@/components/HomeView/StartGrowing.vue";
import StartGrowingImage from "@/assets/images/StartGrowingImage.png";
import Intermediary from "@/components/HomeView/Intermediary.vue";
import IntermediaryBg from "@/assets/images/IntermediaryBg.png";
import MobileSteps from "@/components/HomeView/MobileSteps.vue";
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobile.png";

import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isHomePage = computed(() => route.path === "/");

//Analysis
const mainTitle = ref("Analisi");
const iconMain = ref(AnalysisSvg);
const mainDescription = ref(
  "L'unica piattaforma di analisi di business che correla analisi di bilancio, dinamiche di business, posizionamento di brand."
);

const leftItems = ref([
  {
    icon: Checkup,
    title: "Check up",
    description:
      "Identifica le aree critiche e i punti di <span><br>forza della tua organizzazione</span>",
  },
  {
    icon: Networking,
    title: "Networking",
    description:
      "Connettiti con i tuoi professionisti <span><br></span>per ottenere servizi profilati",
  },
  {
    icon: Planning,
    title: "Planning",
    description:
      "Scopri il tuo hykee score e imposta <span><br></span>un percorso di crescita assieme ai <span><br></span>consulenti di business HYKEE",
  },
]);

const rightItems = ref([
  {
    icon: Database,
    title: "Database",
    description: "Accedi al database completo <span><br></span>delle aziende italiane",
  },
  {
    icon: News,
    title: "News",
    description: "Scopri le news di mercato",
  },
  {
    icon: Comparison,
    title: "Comparison",
    description:
      "Scopri come la tua azienda si rapporta <span><br></span>al mercato e ai principali competitor",
  },
]);

//ComeFunziona

const steps = [
  {
    number: "01",
    description:
      "Inserisci la tua ragione <span><br></span>sociale o partita IVA per <span><br></span>scoprire il tuo rating <span><br></span>finanziario",
    image: RightMobile,
  },
  {
    number: "02",
    description:
      "Interagisci con il <span><br></span>chatbot RBHQ per una valutazione <span><br></span>delle dinamiche della tua <span><br></span>azienda",
    image: LeftMobile,
  },
  {
    number: "03",
    description:
      "Inserisci il tuo sito internet <span><br></span>per scoprire il tuo <span><br></span>posizionamento di <span><br></span>mercato",
    image: RightMobile,
  },
  {
    number: "04",
    description:
      "Ottieni news di mercato <span><br></span>profilate e connettiti <span><br></span>con i tuoi consulenti",
    image: LeftMobile,
  },
  {
    number: "05",
    description:
      "Analizza il tuo Score <span><br></span>assieme ad un teamd i <span><br></span>consulenti per sbloccare <span><br></span>le tue opportunità di <span><br></span>crescita",
    image: RightMobile,
  },
];
</script>
