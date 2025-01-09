import BusinessEvaluation from "@/components/DashboardView/TabsComponents/BusinessEvaluation.vue";
import Table from "@/components/DashboardView/TabsComponents/BusinessEvaluation/Table.vue";
import Card from "@/components/DashboardView/TabsComponents/BusinessEvaluation/Card.vue";
import RadialChart from "@/components/global/RadialChart.vue";

const card1 = {
  component: RadialChart,
  tableData: [
    {
      name: "Focus",
      score: 90,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
    {
      name: "Flessibilità",
      score: 80,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
    {
      name: "Velocità",
      score: 70,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
};

const card2 = {
  component: RadialChart,
  tableData: [
    {
      name: "Creatività",
      score: 85,
      result: "Buono",
      resultClass: "text-primary-color",
    },
    {
      name: "Innovazione",
      score: 78,
      result: "Buono",
      resultClass: "text-primary-color",
    },
    {
      name: "Originalità",
      score: 92,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
};

const card3 = {
  component: RadialChart,
  tableData: [
    {
      name: "Precisione",
      score: 88,
      result: "Ottimo",
      resultClass: "text-primary-color",
    },
    {
      name: "Efficienza",
      score: 82,
      result: "Ottimo",
      resultClass: "text-primary-color",
    },
    {
      name: "Efficacia",
      score: 95,
      result: "Eccellente",
      resultClass: "text-primary-color",
    },
  ],
};

export default {
  title: "Components/BusinessEvaluation",
  component: BusinessEvaluation,
  argTypes: {
    card1: { control: "object" },
    card2: { control: "object" },
    card3: { control: "object" },
  },
};

const Template = (args) => ({
  components: { BusinessEvaluation, Table, Card, RadialChart },
  setup() {
    const card1Data = ref(args.card1);
    const card2Data = ref(args.card2);
    const card3Data = ref(args.card3);
    return { card1Data, card2Data, card3Data };
  },
  template: `
    <BusinessEvaluation :card1="card1Data" :card2="card2Data" :card3="card3Data">
      <Table />
      <div class="flex flex-col xl:flex-row justify-between max-w-[1068px] w-full mx-auto gap-[51px] pt-[50px]">
        <Card
          :component="RadialChart"
          :tableData="card1Data.tableData"
          :chartData="[90, 10]"
          :chartColors="['#00CD78', '#000000']"
          chartLabel="Agilità"
        />
        <Card
          :component="RadialChart"
          :tableData="card1Data.tableData"
          :chartData="[80, 20]"
          :chartColors="['#00CD78', '#000000']"
          chartLabel="Crescita"
        />
        <Card
          :component="RadialChart"
          :tableData="card1Data.tableData"
          :chartData="[100, 0]"
          :chartColors="['#00CD78', '#000000']"
          chartLabel="Attitudine"
        />
      </div>
    </Component>
  `,
});

export const Default = Template.bind({});
Default.args = {
  card1: card1,
  card2: card2,
  card3: card3,
};
