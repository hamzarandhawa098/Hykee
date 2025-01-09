import MobileStepsComeFunziona from '@/components/ComeFunzionaView/MobileStepsComeFunziona.vue';
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobileCome.png";


export default {
  title: 'Components/MobileStepsComeFunziona',
  component: MobileStepsComeFunziona,
  argTypes: {
    titleMobileSteps: { control: 'text' },
    steps: { control: 'array' },
    LeftMobile: { control: 'text' },
    RightMobile: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { MobileStepsComeFunziona },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-black p-8">
      <MobileStepsComeFunziona v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  titleMobileSteps: 'Steps to Get Started',
  steps: [
    {
      number: '1',
      description: 'Get to know the basics of Vue.js and Nuxt.js.',
      image: RightMobile,
    },
    {
      number: '2',
      description: 'Start building components and pages with reusable code.',
      image: LeftMobile,
    },
    {
      number: '3',
      description: 'Test and deploy your app for users to experience.',
      image: RightMobile,
    },
  ],
  LeftMobile: 'Some left text',
  RightMobile: 'Some right text',
};
