import CuriosSection from "@/components/HomeView/Curios.vue";
import CuriosBgImage from "@/assets/images/CuriosBg.png";


export default {
  title: "Components/Curios",
  component: CuriosSection,
  argTypes: {
    curiosText: { control: "text" },
    curiosDescription: { control: "text" },
    curiosButtonText: { control: "text" },
    CuriosBgImage: { control: "text" },
  },
};

const Template = (args) => ({
  components: { CuriosSection },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black p-8">
    <CuriosSection
      :curiosText="args.curiosText"
      :curiosDescription="args.curiosDescription"
      :curiosButtonText="args.curiosButtonText"
      :CuriosBgImage="args.CuriosBgImage"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  curiosText: "Explore More",
  curiosDescription: "Discover ",
  curiosButtonText: "Learn More",
  CuriosBgImage: CuriosBgImage,
};
