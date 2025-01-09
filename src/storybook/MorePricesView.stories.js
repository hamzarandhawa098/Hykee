import MorePricesView from "@/components/PrezziView/MorePricesView.vue"; 

export default {
  title: "Components/MorePricesView",
  component: MorePricesView,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    note: { control: "text" },
    plans: { control: "array" },
  },
};

const Template = (args) => ({
  components: { MorePricesView },
  setup() {
    return { args };
  },
  template: `
    <MorePricesView
      :title="args.title"
      :description="args.description"
      :note="args.note"
      :plans="args.plans"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  title: "Our Pricing Plans",
  description: "Choose a plan that fits your needs.",
  note: "All plans come with a 30-day money-back guarantee.",
  plans: [
    {
      id: 1,
      name: "Basic Plan",
      price: "10",
      period: "per month",
      description: "Basic features for small teams.",
      description2: "Includes 1 GB of storage.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "25",
      period: "per month",
      description: "Advanced features for growing teams.",
      description2: "Includes 5 GB of storage.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
      buttonText: "Choose Plan",
    },
  ],
};
