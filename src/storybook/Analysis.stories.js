import AnalysisSection from "@/components/HomeView/Analysis.vue";


export default {
  title: "Components/Analysis",
  component: AnalysisSection,
  argTypes: {
    mainTitle: { control: "text" },
    iconMain: { control: "text" },
    mainDescription: { control: "text" },
    leftItems: { control: "array" },
    rightItems: { control: "array" },
  },
};

const Template = (args) => ({
  components: { AnalysisSection },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black bg-opacity-[80%] p-8">
    <AnalysisSection
      :mainTitle="args.mainTitle"
      :iconMain="args.iconMain"
      :mainDescription="args.mainDescription"
      :leftItems="args.leftItems"
      :rightItems="args.rightItems"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  mainTitle: "Analysis",
  iconMain: "SomeIcon",
  mainDescription: "A comprehensive overview of the key metrics that drive business performance.",
  leftItems: [
    {
      icon: "SomeIcon", 
      title: "Growth",
      description: "Description of business growth over time.",
    },
    {
      icon: "SomeIcon", 
      title: "Efficiency",
      description: "How efficient the business processes are.",
    },
    {
        icon: "SomeIcon", 
        title: "Efficiency",
        description: "How efficient the business processes are.",
      },
  ],
  rightItems: [
    {
      icon: "SomeIcon", 
      title: "Profitability",
      description: "How profitable the business is across different segments.",
    },
    {
      icon: "SomeIcon", 
      title: "Innovation",
      description: "Innovative strategies that keep the business ahead.",
    },
    {
        icon: "SomeIcon", 
        title: "Innovation",
        description: "Innovative strategies that keep the business ahead.",
      },
  ],
};
