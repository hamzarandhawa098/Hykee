import TechComponent from "@/components/HomeView/TechnologyConsultancy.vue";
import LogoTransparent from "@/components/icons/LogoTransparent.vue";

export default {
  title: "Components/TechnologyConsultancy",
  component: TechComponent,
  argTypes: {
    LogoTransparent: { control: "text" },
    TechText: { control: "text" },
    TechDescription: { control: "text" },
    TitleTextMobile: { control: "text" },
    route: { control: "text" },
  },
};

const Template = (args) => ({
  components: { TechComponent },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black">
    <TechComponent
      :LogoTransparent="args.LogoTransparent"
      :TechText="args.TechText"
      :TechDescription="args.TechDescription"
      :TitleTextMobile="args.TitleTextMobile"
      :route="args.route"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  LogoTransparent: LogoTransparent,
  TechText: "Tech Innovation for the Future",
  TechDescription: "This is the description for the technology section, highlighting key features and benefits.",
  TitleTextMobile: "Tech Innovation",
  route: "/", 
};
