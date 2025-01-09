import ConsultancyTools from "@/components/Partners/ConsultancyTools.vue"; 
import LeftMobile from "@/assets/images/PartnersMobileRight.png";
import RightMobile from "@/assets/images/RightMobile.png";


export default {
  title: "Components/ConsultancyTools",
  component: ConsultancyTools,
  argTypes: {
    leftMobile: { control: "text" },
    rightMobile: { control: "text" },
    section2Title: { control: "text" },
    section1Title2: { control: "text" },
    section2Description1: { control: "text" },
    section2DescriptionMob: { control: "text" },
    section3Title: { control: "text" },
    section3Description1: { control: "text" },
    section3Description2: { control: "text" },
  },
};

const Template = (args) => ({
  components: { ConsultancyTools },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black">
    <ConsultancyTools
      :leftMobile="args.leftMobile"
      :rightMobile="args.rightMobile"
      :section2Title="args.section2Title"
      :section1Title2="args.section1Title2"
      :section2Description1="args.section2Description1"
      :section2DescriptionMob="args.section2DescriptionMob"
      :section3Title="args.section3Title"
      :section3Description1="args.section3Description1"
      :section3Description2="args.section3Description2"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  leftMobile: LeftMobile,
  rightMobile: RightMobile, 
  section2Title: "Una piattaforma di <span class=\'text-primary-color\'> Business <br> Intelligence</span> pensata per l’era post covid",
  section1Title2: "Abilita nuovi modelli di business grazie alla piattaforma Hykee di <span class=\'text-primary-color\'><br />consulenza aumentata</span>",
  section2Description1: "L’analisi di bilancio è importante ma la capacità di un <span><br></span>business di competere sul mercato è frutto delle sue <span><br></span>persone, dei prodotti, dei modelli di business e della <span><br></span>capacità di adattamento. <span><br><br></span>Pensata per condurre analisi <span><br></span>approfondite coinvolgendo, in maniera amplificata dalla tecnologia e <span><br></span>dalla consulenza, i tuoi clienti",
  section2DescriptionMob: "Your description text for section 2, mobile view.",
  section3Title: '<span class=\'text-primary-color\'> Coinvolgi i tuoi clienti</span> e comunica in modo profilato ed efficace ',
  section3Description1: "L’analisi di bilancio è importante ma la capacità di un business di competere sul mercato è frutto delle sue persone, dei prodotti, dei modelli di business e della capacità di adattamento.Pensata per condurre analisi approfondite coinvolgendo, in maniera amplificata dalla tecnologia e dalla consulenza, i tuoi clienti.",
};
