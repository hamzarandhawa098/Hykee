import Analyze from "@/components/ComeFunzionaView/Analyze.vue";
import AnalyzeImage from "@/assets/images/AnalyzeImage.png";
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";

export default {
  title: 'Components/Analyze',
  component: Analyze,
  argTypes: {
    MoreInformationBg: { control: 'text' },
    AnalyzeText: { control: 'text' },
    AnalyzeImage: { control: 'text' },
    ButtonText: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Analyze },
  setup() {
    return { args };
  },
  template: `
      <Analyze v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  MoreInformationBg: MoreInformationBg, 
  AnalyzeText: 'Analyze the market trends and insights with us!',
  AnalyzeImage: AnalyzeImage, 
  ButtonText: 'Learn More',
};
