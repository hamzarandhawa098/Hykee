<template>
  <ConsultancyInfo
    :section1Title1="'Lo strumento di consulenza aumentata  <span class=\'text-primary-color\'><br />che stavi cercando</span>'"
    :section1Description1="section1Description1"
    :section1DescriptionMob="section1DescriptionMob"
    :section1Button1="section1Button1"
    :section1Button2="section1Button2"
    :consultancyToolsImg="consultancyToolsImg"

  />
  <ConsultancyTools
    :leftMobile="leftMobile"
    :rightMobile="rightMobile"
    :section1Title2="'Abilita nuovi modelli di business grazie alla piattaforma Hykee di <span class=\'text-primary-color\'><br />consulenza aumentata</span>'"
    :section2Title="'Una piattaforma di <span class=\'text-primary-color\'> Business <br> Intelligence</span> pensata per l’era post covid'"
    :section2Description1="section2Description1"
    :section2DescriptionMob="section2DescriptionMob" 
    :section3Title="'<span class=\'text-primary-color\'> Coinvolgi i tuoi clienti</span> e comunica in modo profilato ed efficace '"
    :section3Description1="section3Description1"
  />
  <Analyze
    :MoreInformationBg="MoreInformationBg"
    :AnalyzeImage="AnalyzeImage"
    :AnalyzeText="'Vuoi utilizzare Hykee per analisi evolute <span><br></span>o per veicolare nuovi servizi ai tuoi clienti?'"
    :ButtonText="'Contactti'"
  />
  <Solutions
    :solutionTitle="' Scegli la soluzione più<span class=\'text-primary-color\'><br> adatta a te!</span>  '"
    :plans="plans"
  />
</template>
<script setup>
import { ref } from "vue";
import ConsultancyTools from "@/components/Partners/ConsultancyTools.vue";
import ConsultancyToolsImg from "@/assets/images/ConsultancyTools.png";
import LeftMobile from "@/assets/images/PartnersMobileRight.png";
import RightMobile from "@/assets/images/RightMobile.png";
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";
import Analyze from "@/components/ComeFunzionaView/Analyze.vue";
import Solutions from "@/components/Partners/Solutions.vue";
import ConsultancyInfo from "@/components/Partners/ConsultancyInfo.vue";
import AnalyzeImage from "@/assets/images/AnalyzeImage.png";


const consultancyToolsImg = ConsultancyToolsImg;
const leftMobile = LeftMobile;
const rightMobile = RightMobile;

const section1Description1 = ref(
  "HYKEE mette a disposizione, in un’unica piattaforma, <span><br></span> le informazioni finanziarie, di business e di posizionamento di <span><br></span>brand dei tuoi clienti.<span><br><br></span> Valuta e supporta i tuoi clienti con una visione approfondita <span><br></span>del loro business per creare valore alla tua organizzazione e <span><br></span>alla loro."
);
const section1DescriptionMob = ref(
  "HYKEE mette a disposizione, in un’unica piattaforma, le informazioni finanziarie, di business e di posizionamento di brand dei tuoi clienti.Valuta e supporta i tuoi clienti con una visione approfonditadel loro business per creare valore alla tua organizzazione e alla loro."
);

const section1Button1 = ref("Richiedi una prova gratuita");
const section1Button2 = ref("Scopri di più");

const section2Description1 = ref(
  "L’analisi di bilancio è importante ma la capacità di un <span><br></span>business di competere sul mercato è frutto delle sue <span><br></span>persone, dei prodotti, dei modelli di business e della <span><br></span>capacità di adattamento. <span><br><br></span>Pensata per condurre analisi <span><br></span>approfondite coinvolgendo, in maniera amplificata dalla tecnologia e <span><br></span>dalla consulenza, i tuoi clienti"
);
const section2DescriptionMob = ref(
  "L’analisi di bilancio è importante ma la capacità di un business di competere sul mercato è frutto delle sue persone, dei prodotti, dei modelli di business e della capacità di adattamento. <span><br></span>Pensata per condurre analisi approfondite coinvolgendo, in maniera amplificata dalla tecnologia e  dalla consulenza, i tuoi clienti"
);
const section3Description1 = ref(
  "L’analisi di bilancio è importante ma la capacità di un business di competere sul mercato è frutto delle sue persone, dei prodotti, dei modelli di business e della capacità di adattamento.Pensata per condurre analisi approfondite coinvolgendo, in maniera amplificata dalla tecnologia e dalla consulenza, i tuoi clienti."
);
const plans = ref([
  {
    name: "Plus",
    price: "29,00",
    features: [
      "1-15 Utenti <span><br></span>Setup e formazione inclusa <span><br><br></span>10 HYKEE Score <span><br></span>10 Financial Rating / 10 Business Rating <span><br></span>Analisi Competitor",
    ],
    buttonText: "Attiva ora!",
  },
  {
    name: "Unlimited",
    price: "100,00",
    features: [
      "Più di 15 Utenti <span><br></span>Setup e formazione inclusa <span><br><br></span>HYKEE Score illimitati <span><br></span>Financial Rating / Business Rating<span><br></span>Analisi Competitor",
    ],
    buttonText: "Attiva ora!",
  },
]);
</script>
