import Footer from "@/components/global/Footer.vue";
import Logo from "@/components/icons/Logo.vue";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    Logo: { control: "object" },
    footerSections: { control: "array" },
    footerMeta: { control: "text" },
    data: { control: "object" },
    route: { control: "text" },
    FooterBg: { control: "text" },
  },
};

const Template = (args) => ({
  components: { Footer },
  setup() {
    return { args };
  },
  template: '<Footer v-bind="args" />',
});

export const HomePage = Template.bind({});
HomePage.args = {
  route: "/",
  Logo: Logo,
  footerSections: [
    {
      heading: "La piattaforma",
      links: [
        { text: "Come funziona", href: "#" },
        { text: "Prezzi", href: "#" },
        { text: "Perché scegliere HYKEE", href: "#" },
      ],
    },
    {
      heading: "Assistenza",
      links: [
        { text: "FAQ", href: "#" },
        { text: "Il metodo HYKEE", href: "#" },
        { text: "info@hykee.tech", href: "mailto:info@hykee.tech" },
      ],
    },
    {
      heading: "Chi siamo",
      links: [
        { text: "Descrizione sintetica dell'about us", href: "#" },
        { text: "Privacy", href: "#" },
        { text: "Termini di utilizzo", href: "#" },
      ],
    },
    {
      heading: "Follow us",
      links: [
        { text: "Facebook", href: "#" },
        { text: "Twitter", href: "#" },
        { text: "LinkedIn", href: "#" },
      ],
    },
  ],
  footerMeta: "© Lunapartner All rights reserved",
};
