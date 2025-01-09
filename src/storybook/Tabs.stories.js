import Tabs from "@/components/DashboardView/Tabs.vue";
import Trends from "@/components/DashboardView/TabsComponents/Trends.vue";
import FinancialStatements from "@/components/DashboardView/TabsComponents/FinancialStatements.vue";
import BusinessEvaluation from "@/components/DashboardView/TabsComponents/BusinessEvaluation.vue";

const tabs = [
  { id: "trends", label: "Trends", component: Trends },
  { id: "balance", label: "Prospetti di Bilancio", component: FinancialStatements },
  { id: "valuation", label: "Valutazione Aziendale", component: BusinessEvaluation },
  { id: "credit", label: "Advanced Credit Analytics", component: Trends },
  { id: "market", label: "Market & Competitors", component: Trends },
  { id: "digital", label: "Posizionamento Digitale", component: Trends },
  { id: "group", label: "Gruppo, Soci, Amministratori", component: Trends },
  { id: "cyber", label: "Cyber Exposure Index", component: Trends },
];

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    tabs: { control: "object" },
    activeTab: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: `
    <Tabs
      v-bind="args"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  tabs,
  activeTab: "trends",
};
