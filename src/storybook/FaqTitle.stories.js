import FaqHeader from "@/components/FaqView/FaqTitle.vue";
import FaqIcon from "@/assets/images/Faq.gif";


export default {
  title: "Components/FAQTitle",
  component: FaqHeader,
  argTypes: {
    FaqTitleText: { control: "text" },
    FaqIcon: { control: "text" },
  },
};

const Template = (args) => ({
  components: { FaqHeader },
  setup() {
    return { args };
  },
  template: `<div class="bg-black p-8"><FaqHeader :FaqTitleText="args.FaqTitleText" :FaqIcon="args.FaqIcon" /></div> `,
});

export const Default = Template.bind({});
Default.args = {
  FaqTitleText: 'F<span class=\'text-primary-color\'>.</span>A<span class=\'text-primary-color\'>.</span>Q',
  FaqIcon: FaqIcon,
};
