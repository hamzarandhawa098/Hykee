import MobileSteps from "@/components/HomeView/MobileSteps.vue";
import LeftMobile from "@/assets/images/LeftMobile.png";
import RightMobile from "@/assets/images/RightMobile.png";

export default {
  title: "Components/MobileSteps",
  component: MobileSteps,
  argTypes: {
    titleMobileSteps: { control: "text" },
    steps: {
      control: "object",
      description:
        "Array of step objects with number, description, and image for each step.",
    },
  },
};

const Template = (args) => ({
  components: { MobileSteps },
  setup() {
    return { args };
  },
  template: `
  <div class="bg-black p-8">
    <MobileSteps
      :titleMobileSteps="args.titleMobileSteps"
      :steps="args.steps"
    />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  titleMobileSteps: "Mobile Steps to Success",
  steps: [
    {
      number: "1",
      description:
        "This is the first step description, explaining the process.",
      image: RightMobile,
    },
    {
      number: "2",
      description:
        "This is the second step description, explaining the next stage.",
      image: LeftMobile,
    },
    {
      number: "3",
      description:
        "This is the third step description, explaining the final process.",
      image: RightMobile,
    },
  ],
};
