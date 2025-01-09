import CompanyInfo from "@/components/DashboardView/CompanyInfo.vue";

export default {
  title: "Components/CompanyInfo",
  component: CompanyInfo,
  argTypes: {
    companyInfoTitle: { control: "text" },
    companyInfo: { control: "array" },
  },
};

const Template = (args) => ({
  components: { CompanyInfo },
  setup() {
    return { args };
  },
  template: `      
  <CompanyInfo v-bind="args" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  companyInfoTitle: "Company Information",
  companyInfo : {
    Indirizzo: "Via Mazzini 3 - Torino - Piemonte",
    Nace: "34.56.78",
    "Latest Budget": "2020",
    Activities: "Confectionery production",
    Revenues: "€345.000.000",
  }
};
