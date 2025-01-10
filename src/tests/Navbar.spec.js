import { mount } from "@vue/test-utils";
import Nav from "@/components/global/Navbar.vue";
import Logo from "@/components/icons/Logo.vue";
import Hamburger from "@/components/icons/Hamburger.vue";
import Button from "@/components/global/Button.vue";

describe("Nav.vue", () => {
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contatti", href: "/contact" },
  ];

  const loginText = "Login";
  const signupText = "Sign up";

  it("renders the logo component", () => {
    const wrapper = mount(Nav, {
      props: {
        menuItems,
        loginText,
        signupText,
        Logo: Logo,
        Hamburger: Hamburger,
      },
    });

    const logo = wrapper.findComponent(Logo);
    expect(logo.exists()).toBe(true);
  });

  it("renders the correct number of menu items", () => {
    const wrapper = mount(Nav, {
      props: {
        menuItems,
        loginText,
        signupText,
        Logo: Logo,
        Hamburger: Hamburger,
      },
    });

    const menuItemsList = wrapper.findAll("li");
    expect(menuItemsList.length).toBe(menuItems.length);
  });

  
  it("renders the login and signup buttons", () => {
    const wrapper = mount(Nav, {
      props: {
        menuItems,
        loginText,
        signupText,
        Logo: Logo,
        Hamburger: Hamburger,
      },
    });

    const loginButton = wrapper.find(".text-white.font-monorope");
    const signupButton = wrapper.findComponent(Button);

    expect(loginButton.exists()).toBe(true);
    expect(signupButton.exists()).toBe(true);
    expect(loginButton.text()).toContain(loginText);
    expect(signupButton.text()).toContain(signupText);
  });
  it("renders menu items with the correct href", () => {
    const wrapper = mount(Nav, {
      props: {
        menuItems,
        loginText,
        signupText,
        Logo: Logo,
        Hamburger: Hamburger,
      },
    });

    const menuItemsList = wrapper.findAll("li");
    menuItemsList.forEach((item, index) => {
      const link = item.find("router-link");
      expect(link.attributes("to")).toBe(menuItems[index].href);
      expect(link.text()).toBe(menuItems[index].text);
    });
  });
 
});
