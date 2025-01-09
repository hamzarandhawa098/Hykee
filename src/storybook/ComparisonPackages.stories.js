import ComparisonPackages from "@/components/PrezziView/ComparisonPackages.vue";

export default {
  title: "Components/ComparisonPackages",
  component: ComparisonPackages,
  argTypes: {
    tableHeaders: { control: "array" },
    tableActionsHeaders: { control: "text" },
    tableData1: { control: "array" },
    tableData2: { control: "array" },
    buttonTextShow: { control: "text" },
    buttonTextHide: { control: "text" },
  },
};

const Template = (args) => ({
  components: { ComparisonPackages },
  setup() {
    return { args };
  },
  template: `
    <ComparisonPackages
      :tableHeaders="args.tableHeaders"
      :tableActionsHeaders="args.tableActionsHeaders"
      :tableData1="args.tableData1"
      :tableData2="args.tableData2"
      :buttonTextShow="args.buttonTextShow"
      :buttonTextHide="args.buttonTextHide"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  tableHeaders: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  tableData1: [
    { name: "Plan 1", start: true, plus: false, easy: true },
    { name: "Plan 2", start: false, plus: true, easy: true },
  ],
  tableData2: [
    { name: "Plan 3", start: true, plus: true, easy: false },
    { name: "Plan 4", start: false, plus: false, easy: true },
  ],
  buttonTextShow: "Show Table",
  buttonTextHide: "Hide Table",
};
