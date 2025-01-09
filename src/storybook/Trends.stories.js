import Trends from "@/components/DashboardView/TabsComponents/Trends.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";
import SuccessIcon from "@/components/icons/SuccessIcon.vue";

const cards = [
  {
    title: "Revenue Growth",
    percentage: 3,
    isAboveAverage: false,
  },
  {
    title: "3y Growth Trend",
    percentage: 10,
    isAboveAverage: false,
  },
  {
    title: "EBITDA %",
    percentage: 9,
    isAboveAverage: true,
  },
  {
    title: "Leva",
    percentage: 6,
    isAboveAverage: true,
  },
];

export default {
  title: "Components/Trends",
  component: Trends,
  argTypes: {
    cards: { control: "object" },
  },
};

const Template = (args) => ({
  components: { Trends, WarningIcon, SuccessIcon },
  setup() {
    return { args };
  },
  template: `
    <Trends
      v-bind="args"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  cards,
};
