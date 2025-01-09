import Topbar from "@/components/global/TopBar.vue";

export default {
  title: "Components/Topbar",
  component: Topbar,
  argTypes: {
    topbarText: {
      control: { type: "text" },
      description: "HTML content for the topbar text.",
      defaultValue: "Topbar text goes here",
    },
  },
};

const Template = (args) => ({
  components: { Topbar },
  setup() {
    return { args };
  },
  template: `<Topbar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    topbarText:'La piattaforma di  <span class=\'text-primary-color\'>Business Intelligence</span> che amplifica la proposta di valore nei confronti dei tuoi clienti'
};
