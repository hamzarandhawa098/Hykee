import Sidebar from "@/components/global/Sidebar.vue";
import Logo from "@/components/icons/Logo.vue";
import HomeIcon from "@/components/icons/HomeIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import StarIcon from "@/components/icons/StarIcon.vue";
import ClockIcon from "@/components/icons/ClockIcon.vue";
import PartnerIcon from "@/components/icons/PartnerIcon.vue";
import NotificationIcon from "@/components/icons/NotificationIcon.vue";
import AssistanceIcon from "@/components/icons/AssistanceIcon.vue";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    navigationItems: {
      control: { type: "array" },
      description: "Array of navigation items to display.",
      defaultValue: [
        { label: "Home", icon: HomeIcon, href: "/dashboard" },
        { label: "Ricerca", icon: SearchIcon, href: "/search" },
        { label: "Ricerche Salvate", icon: StarIcon, href: "#" },
        { label: "Cronologia di ricerca", icon: ClockIcon, href: "#" },
        { label: "Collegamenti", icon: PartnerIcon, href: "#" },
        { label: "Notifiche", icon: NotificationIcon, href: "#" },
      ],
    },
    activeIndex: {
      control: { type: "number" },
      description: "The index of the active navigation item.",
      defaultValue: 0,
    },
  },
};

const Template = (args) => ({
  components: { Sidebar, Logo, HomeIcon, SearchIcon, StarIcon, ClockIcon, PartnerIcon, NotificationIcon, AssistanceIcon },
  setup() {
    return { args };
  },
  template: `<Sidebar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  navigationItems: [
    { label: "Home", icon: HomeIcon, href: "/dashboard" },
    { label: "Ricerca", icon: SearchIcon, href: "/search" },
    { label: "Ricerche Salvate", icon: StarIcon, href: "#" },
    { label: "Cronologia di ricerca", icon: ClockIcon, href: "#" },
    { label: "Collegamenti", icon: PartnerIcon, href: "#" },
    { label: "Notifiche", icon: NotificationIcon, href: "#" },
  ],
  activeIndex: 0,
};
