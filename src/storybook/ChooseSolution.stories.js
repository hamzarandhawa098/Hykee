import ChooseSolution from "@/components/PrezziView/ChooseSolution.vue";

export default {
  title: "Components/ChooseSolution",
  component: ChooseSolution,
  argTypes: {
    ChooseSolutionTitle: { control: "text" },
    ChooseSolutionDescription: { control: "text" },
  },
};

const Template = (args) => ({
  components: { ChooseSolution },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black p-8">
    <ChooseSolution
      :ChooseSolutionTitle="args.ChooseSolutionTitle"
      :ChooseSolutionDescription="args.ChooseSolutionDescription"
    />
</div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  ChooseSolutionTitle: "Scegli la soluzione più <span class=\'text-primary-color\'><br>adatta a te!</span>",
  ChooseSolutionDescription: "Esplora la piattaforma HYKEE e acquista la soluzione che meglio risponde alle tue esigenze. Dal piano PLUS a soluzioni potenziate!",
};
