import IntermediarySection from "@/components/HomeView/Intermediary.vue";
import IntermediaryBg from "@/assets/images/IntermediaryBg.png";


export default {
  title: "Components/Intermediary",
  component: IntermediarySection,
  argTypes: {
    IntermediaryBg: { control: "text" },
    IntermediaryTitleText: { control: "text" },
    IntermediaryDescription: { control: "text" },
    IntermediaryButtonText: { control: "text" },
  },
};

const Template = (args) => ({
  components: { IntermediarySection },
  setup() {
    return { args };
  },
  template: `
    <IntermediarySection
      :IntermediaryBg="args.IntermediaryBg"
      :IntermediaryTitleText="args.IntermediaryTitleText"
      :IntermediaryDescription="args.IntermediaryDescription"
      :IntermediaryButtonText="args.IntermediaryButtonText"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  IntermediaryBg: IntermediaryBg,
  IntermediaryTitleText: "Intermediary",
  IntermediaryDescription: "Description for the intermediary section.",
  IntermediaryButtonText: "For More",
};
