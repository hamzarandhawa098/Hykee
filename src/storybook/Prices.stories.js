import PricesCard from "@/components/PrezziView/PricesCard.vue"; 

export default {
  title: "Components/PricesCard",
  component: PricesCard,
  argTypes: {
    cards: { control: "array" },
  },
};

const Template = (args) => ({
  components: { PricesCard },
  setup() {
    return { args };
  },

  template: `
  <div class="bg-black p-8">
    <PricesCard :cards="args.cards" />
</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      id: "basic",
      title: "Basic Plan",
      price: "10",
      pricesText: "per month",
      description: "Ideal for individuals or small teams.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: "plus",
      title: "Plus Plan",
      price: "25",
      pricesText: "per month",
      description: "Perfect for growing teams with advanced features.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
      buttonText: "Choose Plan",
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: "50",
      pricesText: "per month",
      description: "Best for large teams with premium features.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      buttonText: "Choose Plan",
    },
  ],
};
