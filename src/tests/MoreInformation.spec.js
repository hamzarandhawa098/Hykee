import { mount } from "@vue/test-utils";
import MoreInformation from "@/components/global/MoreInformation.vue";
import Button from "@/components/global/Button.vue";
import EnvelopeIconMobile from "@/components/icons/EnvelopeIconMobile.vue";

describe("MoreInformation.vue", () => {
  const props = {
    MoreInformationBg: "background-image-url",
    MoreInformationText: "Some important information here",
    MoreInformationButtonText: "Learn More",
    MoreInformationIcon: "InfoIcon",
  };

  it("renders the background image with correct src attribute", () => {
    const wrapper = mount(MoreInformation, {
      props,
    });

    const backgroundImage = wrapper.find("img");
    expect(backgroundImage.attributes("src")).toBe(props.MoreInformationBg);
  });

  it("renders the correct heading text", () => {
    const wrapper = mount(MoreInformation, {
      props,
    });

    const heading = wrapper.find("h1");
    expect(heading.text()).toBe(props.MoreInformationText);
  });

  it("renders the button with correct text", () => {
    const wrapper = mount(MoreInformation, {
      props,
    });

    const button = wrapper.findComponent(Button);
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe(props.MoreInformationButtonText);
  });

  

  it("applies a dynamic class when the background image is loaded", async () => {
    const wrapper = mount(MoreInformation, {
      props,
    });

    const image = wrapper.find("img");
    await image.trigger("load");

    expect(image.classes()).toContain("loaded");
  });
});
