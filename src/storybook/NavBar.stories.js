import Navbar from "@/components/global/Navbar.vue";
import Logo from "@/components/icons/Logo.vue";
import Hamburger from "@/components/icons/Hamburger.vue";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    menuItems: {
      control: { type: "array" },
      description: "Array of menu items to display.",
      defaultValue: [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Services", href: "/services" },
        { text: "Contatti", href: "/contact" },
      ],
    },
    loginText: {
      control: { type: "text" },
      description: "Text for the login button.",
      defaultValue: "Login",
    },
    signupText: {
      control: { type: "text" },
      description: "Text for the signup button.",
      defaultValue: "Sign Up",
    },
    Logo: {
      control: { type: "text" },
      description: "Logo component to use.",
      defaultValue: "Logo", 
    },
    Hamburger: {
      control: { type: "text" },
      description: "Hamburger menu icon component.",
      defaultValue: "Hamburger", 
    },
  },
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: `<Navbar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { text: "Chi Siamo", href: "/" },
    { text: "Come funziona", href: "/about" },
    { text: "Perche scegliere HYKEE", href: "/services" },
    { text: "Prezzi", href: "/contact" },
    { text: "FAQ", href: "/contact" },
    { text: "Contatti", href: "/contact" },
    { text: "Partner", href: "/contact" },

  ],
  loginText: "Login",
  signupText: "Sign Up",
  Logo: Logo, 
  Hamburger: Hamburger, 
};
