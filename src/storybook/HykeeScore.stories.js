import HykeeScore from "@/components/DashboardView/HykeeScore.vue";
import SpeedoMeter from "@/components/global/SpeedoMeter.vue";
import BusinessScore from "@/components/icons/BusinessScore.vue";
import FinancialScore from "@/components/icons/FinancialScore.vue";

export default {
  title: "Components/HykeeScore",
  component: HykeeScore,
};

const TemplateDesktop = (args) => ({
  components: { HykeeScore, SpeedoMeter },
  setup() {
    return { args };
  },
  template: `
    <HykeeScore
      v-bind="args"
    />
  `,
});

export const DesktopView = TemplateDesktop.bind({});
DesktopView.args = {
  hykeeTitle: "Hykee Score",
  scores: [
    {
      id: 1,
      value: "85%",
      label: "Business Score",
      icon: FinancialScore,
    },
    {
      id: 2,
      value: "90%",
      label: "Financial Score",
      icon: BusinessScore,
    },
  ],
};
