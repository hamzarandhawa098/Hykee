import RadialChart from '@/components/global/RadialChart.vue';

export default {
  title: 'Components/RadialChart',
  component: RadialChart,
  argTypes: {
    data: {
      control: { type: 'array' },
      description: 'Dataset values for the radial chart.',
      defaultValue: [70, 30],
    },
    colors: {
      control: { type: 'array' },
      description: 'Array of colors for the chart segments.',
      defaultValue: ['#00CD78', '#E0E0E0'],
    },
    label: {
      control: { type: 'text' },
      description: 'Label to display in the center of the chart.',
      defaultValue: '70%',
    },
  },
};

const Template = (args) => ({
  components: { RadialChart },
  setup() {
    return { args };
  },
  template: '<RadialChart v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  data: [70, 30],
  colors: ['#00CD78', '#E0E0E0'],
  label: '70%',
};

export const CustomData = Template.bind({});
CustomData.args = {
  data: [30, 70],
  colors: ['#FF6347', '#D3D3D3'],
  label: '90%',
};

