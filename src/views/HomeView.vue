<template>
  <HeroBanner
    :HeroBackground="HeroBackground"
    :HeroMainImage="HeroMainImage"
    :AppleStore="AppleStore"
    :GooglePlay="GooglePlay"
    :HeroCircle="HeroCircle"
    :HeroBannerText="'The Augmented Advisory  <span class=\'text-primary-color\'>Platform to grow </span> your business '"
  />
  <Intermediary
    class="lg:hidden"
    :IntermediaryBg="IntermediaryBg"
    :IntermediaryTitleText="'Sei un intermediario?'"
    :IntermediaryDescription="'Scopri le soluzioni HYKEE più adatte a te e ai tuoi clienti!'"
    :IntermediaryButtonText="'Scopri Hykee'"
  />
  <TechnologyConsultancy
    :LogoTransparent="LogoTransparent"
    :TechText="'Tecnologia, consulenza, dati per  <span class=\'text-primary-color\'>cavalcare i mercati</span>'"
    :TechDescription="'La prima piattaforma di Advisory aumentata al mondo. Business, tecnologia, consulenza per imprimere alla tua azienda la crescita che merita'"
    :TitleTextMobile="'Perchè scegliere'"
  />
  <MobileSteps class="lg:hidden" 
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
    :StartGrowingAnimation="StartGrowingAnimation"
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
    :IntermediaryButtonText="'Scopri Hykee'"
  />
  <MoreInformation
    :MoreInformationBg="MoreInformationBg"
    :MoreInformationText="'Desideri maggiori informazioni?'"
    :MoreInformationButtonText="'Contattaci'"
    :MoreInformationIcon="EnvelopeIcon"
  />
  <ContactForm
    :ContactFormBg="ContactFormBg"
    :contactFormTitle="'Stay tuned!'"
  />
</template>

<script setup>
import { ref } from "vue";
import HeroBanner from "@/components/HomeView/HeroBanner.vue";
import HeroBackground from "@/assets/images/HeroBackground.jpg";
import HeroMainImage from "@/assets/images/heromain.png";
import AppleStore from "@/assets/images/appstore.png";
import GooglePlay from "@/assets/images/playstore.png";
import HeroCircle from "@/assets/images/heroMainCircles.png";
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
import StartGrowingAnimation from "@/assets/images/StartGrowingAnimation.png";
import Intermediary from "@/components/HomeView/Intermediary.vue";
import IntermediaryBg from "@/assets/images/IntermediaryBg.png";
import MoreInformation from "@/components/HomeView/MoreInformation.vue";
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
import ContactForm from "@/components/HomeView/ContactForm.vue";
import ContactFormBg from "@/assets/images/ContactForm.png";
import MobileSteps from "@/components/HomeView/MobileSteps.vue";
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobile.png";

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
      "Identifica le aree critiche e i punti diforza della tua organizzazione",
  },
  {
    icon: Networking,
    title: "Networking",
    description:
      "Connettiti con i tuoi professionisti per ottenere servizi profilati",
  },
  {
    icon: Planning,
    title: "Planning",
    description:
      "Scopri il tuo hykee score e imposta un percorso di crescita assieme ai consulenti di business HYKEE",
  },
]);

const rightItems = ref([
  {
    icon: Database,
    title: "Database",
    description: "Accedi al database completo delle aziende italiane",
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
      "Scopri come la tua azienda si rapporta al mercato e ai principali competitor",
  },
]);

//ComeFunziona

const steps = [
  {
    number: "01",
    description:
      "Inserisci la tua ragione sociale o partita IVA per scoprire il tuo rating finanziario",
    image: RightMobile,
  },
  {
    number: "02",
    description:
      "Interagisci con il chatbot RBHQ per una valutazione delle dinamiche della tua azienda",
    image: LeftMobile,
  },
  {
    number: "03",
    description:
      "Inserisci il tuo sito internet per scoprire il tuo posizionamento di mercato",
    image: RightMobile,
  },
  {
    number: "04",
    description:
      "Interagisci con il chatbot RBHQ per una valutazione delle dinamiche della tua azienda",
    image: LeftMobile,
  },
  {
    number: "05",
    description:
      "Inserisci il tuo sito internet per scoprire il tuo posizionamento di mercato",
    image: RightMobile,
  },
];
</script>
