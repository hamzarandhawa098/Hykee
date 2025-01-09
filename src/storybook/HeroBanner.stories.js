import HeroSection from "@/components/HomeView/HeroBanner.vue";
import HeroBackground from "@/assets/images/HeroBackground.jpg";
import HeroMainImage from "@/assets/images/heroMain.png";
import AppleStore from "@/assets/images/appstore.png";
import GooglePlay from "@/assets/images/playstore.png";


export default {
  title: "Components/HeroBanner",
  component: HeroSection,
  argTypes: {
    HeroBackground: { control: "text" },
    HeroMainImage: { control: "text" },
    AppleStore: { control: "text" },
    GooglePlay: { control: "text" },
    HeroCircle: { control: "text" },
    HeroBannerText: { control: "text" },
    HeroBannerTextMobile: { control: "text" },
  },
};

const Template = (args) => ({
  components: { HeroSection },
  setup() {
    return { args };
  },
  template: `
    <HeroSection
      :HeroBackground="args.HeroBackground"
      :HeroMainImage="args.HeroMainImage"
      :AppleStore="args.AppleStore"
      :GooglePlay="args.GooglePlay"
      :HeroCircle="args.HeroCircle"
      :HeroBannerText="args.HeroBannerText"
      :HeroBannerTextMobile="args.HeroBannerTextMobile"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  HeroBackground: HeroBackground, 
  HeroMainImage: HeroMainImage, 
  AppleStore: AppleStore, 
  GooglePlay: GooglePlay, 
  HeroBannerText: "Welcome to Our App!",
};
