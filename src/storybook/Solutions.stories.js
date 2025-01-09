import Solutions from "@/components/Partners/Solutions.vue"; 

export default {
  title: "Components/Solutions",
  component: Solutions,
  argTypes: {
    solutionTitle: { control: "text" },
    plans: { control: "array" },
  },
};

const Template = (args) => ({
  components: { Solutions },
  setup() {
    return { args };
  },
  template: `
    <Solutions
      :solutionTitle="args.solutionTitle"
      :plans="args.plans"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  solutionTitle: "Your Solution Title",
  plans: [
    {
      name: "Plan 1",
      price: "29",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Choose Plan",
    },
    {
      name: "Plan 2",
      price: "49",
      features: ["Feature A", "Feature B", "Feature C"],
      buttonText: "Choose Plan",
    },
  ],
};
