import TopBarDashboard from "@/components/DashboardView/TopBarDashboard.vue";
import StarIconMobile from "@/components/icons/StarIconMobile.vue";

export default {
  title: "Components/TopBarDashboard",
  component: TopBarDashboard,
  argTypes: {
    TopBarTitle: { control: "text" },
    ButtonLogoText: { control: "text" },
    ProfileName: { control: "text" },
    ProfileAccount: { control: "text" },
    route: { control: "text" },
  },
};

const Template = (args) => ({
  components: { TopBarDashboard, StarIconMobile },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black p-8">
    <TopBarDashboard
      v-bind="args"
    />
  </div>
  `,
});

export const DesktopView = Template.bind({});
DesktopView.args = {
  TopBarTitle: "Ferrero S.P.A.",
  ButtonLogoText: "RG",
  ProfileName: "Robert Gray",
  ProfileAccount: "HYKEE Account",
  route: "/some-route",
};
