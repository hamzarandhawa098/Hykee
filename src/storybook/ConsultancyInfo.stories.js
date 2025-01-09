import ConsultancyInfo from "@/components/Partners/ConsultancyInfo.vue";
import ConsultancyToolsImg from "@/assets/images/ConsultancyTools.png";


export default {
  title: "Components/ConsultancyInfo",
  component: ConsultancyInfo,
  argTypes: {
    section1Title1: { control: "text" },
    section1Description1: { control: "text" },
    section1DescriptionMob: { control: "text" },
    section1Button1: { control: "text" },
    section1Button2: { control: "text" },
    consultancyToolsImg: { control: "text" },
  },
};

const Template = (args) => ({
  components: { ConsultancyInfo },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black h-screen">
    <ConsultancyInfo
      :section1Title1="args.section1Title1"
      :section1Description1="args.section1Description1"
      :section1DescriptionMob="args.section1DescriptionMob"
      :section1Button1="args.section1Button1"
      :section1Button2="args.section1Button2"
      :consultancyToolsImg="args.consultancyToolsImg"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  section1Title1: "Discover our services",
  section1Description1: "Explore how we help businesses thrive with expert consultancy.",
  section1DescriptionMob: "Business growth made simple with our expert consultancy services.",
  section1Button1: "Get Started",
  section1Button2: "Learn More",
  consultancyToolsImg: ConsultancyToolsImg,
};
