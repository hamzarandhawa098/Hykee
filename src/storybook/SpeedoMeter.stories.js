import VueSpeedometer from "vue-speedometer";

export default {
  title: "Components/Speedometer",
  component: VueSpeedometer,
  argTypes: {
    value: {
      control: { type: "number" },
      description: "The current value of the speedometer.",
      defaultValue: 55,
    },
    minValue: {
      control: { type: "number" },
      description: "Minimum value of the speedometer.",
      defaultValue: 0,
    },
    maxValue: {
      control: { type: "number" },
      description: "Maximum value of the speedometer.",
      defaultValue: 120,
    },
    segments: {
      control: { type: "number" },
      description: "Number of segments in the speedometer.",
      defaultValue: 6,
    },
    customSegmentLabels: {
      control: { type: "object" },
      description: "Labels for each segment.",
      defaultValue: [
        { text: "Very Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
        { text: "Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
        { text: "Normal", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
        { text: "Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
        { text: "Very Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
        { text: "Excellent", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
      ],
    },
    customSegmentStops: {
      control: { type: "array" },
      description: "Custom segment stop values.",
      defaultValue: [0, 20, 40, 60, 80, 100, 120],
    },
    segmentColors: {
      control: { type: "array" },
      description: "Colors for each segment.",
      defaultValue: ["#ff5454", "#ff8c42", "#ffcc33", "#e3e33e", "#91d951", "#52c256"],
    },
    ringWidth: {
      control: { type: "number" },
      description: "Width of the speedometer ring.",
      defaultValue: 70,
    },
    needleColor: {
      control: { type: "color" },
      description: "Color of the speedometer needle.",
      defaultValue: "#00ffcc",
    },
    needleTransition: {
      control: { type: "text" },
      description: "Transition type for the needle.",
      defaultValue: "easeElastic",
    },
    needleTransitionDuration: {
      control: { type: "number" },
      description: "Transition duration for the needle.",
      defaultValue: 3333,
    },
    width: {
      control: { type: "number" },
      description: "Width of the speedometer.",
      defaultValue: 500,
    },
    height: {
      control: { type: "number" },
      description: "Height of the speedometer.",
      defaultValue: 300,
    },
  },
};

const Template = (args) => ({
  components: { VueSpeedometer },
  setup() {
    return { args };
  },
  template: `
    <div>
      <section class="hidden xl:block">
        <VueSpeedometer v-bind="args" />
      </section>
      <section class="xl:hidden">
        <VueSpeedometer v-bind="{ ...args, width: 500, height: 300 }" />
      </section>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  value: 55,
  minValue: 0,
  maxValue: 120,
  segments: 6,
  customSegmentLabels: [
    { text: "Very Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
    { text: "Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
    { text: "Normal", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
    { text: "Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
    { text: "Very Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
    { text: "Excellent", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  ],
  customSegmentStops: [0, 20, 40, 60, 80, 100, 120],
  segmentColors: ["#ff5454", "#ff8c42", "#ffcc33", "#e3e33e", "#91d951", "#52c256"],
  ringWidth: 70,
  needleColor: "#00ffcc",
  needleTransition: "easeElastic",
  needleTransitionDuration: 3333,
};
