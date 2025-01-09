import FinancialStatements from "@/components/DashboardView/TabsComponents/FinancialStatements.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";

const tableTitle = 'Income <span><br></span>Statement';
const years = [2018, 2019, 2020];
const rows = [
  { id: 1, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 2, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 3, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 4, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  { id: 5, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
];

export default {
  title: "Components/FinancialStatements",
  component: FinancialStatements,
  argTypes: {
    tableTitle: { control: "text" },
    years: { control: "array" },
    rows: { control: "object" },
  },
};

const Template = (args) => ({
  components: { FinancialStatements, DownloadIcon },
  setup() {
    const tableTitle = ref(args.tableTitle);
    const years = ref(args.years);
    const rows = ref(args.rows);

    const downloadTableAsCSV = () => {
      let csvContent = `${tableTitle.value},${years.value.join(",")}\n`;

      rows.value.forEach((row) => {
        const rowData = [row.name, ...row.values].join(",");
        csvContent += `${rowData}\n`;
      });

      const blob = new Blob([csvContent], { type: "text/csv" });

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "financial_statements.csv";
      link.click();

      URL.revokeObjectURL(link.href);
    };

    return { tableTitle, years, rows, downloadTableAsCSV, args };
  },
  template: `
    <FinancialStatements
      :tableTitle="tableTitle"
      :years="years"
      :rows="rows"
      :downloadTableAsCSV="downloadTableAsCSV"
      v-bind="args"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  tableTitle: 'Income <span><br></span>Statement',
  years: [2018, 2019, 2020],
  rows: [
    { id: 1, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
    { id: 2, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
    { id: 3, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
    { id: 4, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
    { id: 5, name: "Income <span><br></span>Statement", values: [2018, 2019, 2020] },
  ],
};
