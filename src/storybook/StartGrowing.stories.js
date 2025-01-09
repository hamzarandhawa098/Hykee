import StartGrowing from "@/components/HomeView/StartGrowing.vue"; 
import StartGrowingImage from "@/assets/images/StartGrowingImage.png";

export default {
  title: "Components/StartGrowing",
  component: StartGrowing,
  argTypes: {
    StartGrowingImage: { control: "text" },
    StartGrowingImageLg: { control: "text" },
    StartGrowingText: { control: "text" },
    StartGrowingDescription: { control: "text" },
    StartGrowingButtonText: { control: "text" },
    StartGrowingTitleText: { control: "text" },
  },
};

const Template = (args) => ({
  components: { StartGrowing },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black p-8">
    <StartGrowing
      :StartGrowingImage="args.StartGrowingImage"
      :StartGrowingImageLg="args.StartGrowingImageLg"
      :StartGrowingText="args.StartGrowingText"
      :StartGrowingDescription="args.StartGrowingDescription"
      :StartGrowingButtonText="args.StartGrowingButtonText"
      :StartGrowingTitleText="args.StartGrowingTitleText"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  StartGrowingImage: StartGrowingImage,
  StartGrowingImageLg: StartGrowingImage, 
  StartGrowingText: "Start Growing Today",
  StartGrowingDescription: "This is the description for the Start Growing section, explaining the benefits and what users can expect.",
  StartGrowingButtonText: "Get Started",
  StartGrowingTitleText: "Start Your Journey Now",
};
