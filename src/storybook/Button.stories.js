import Button from '@/components/global/Button.vue'; 

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    default: { control: 'text', defaultValue: 'Button' },
    onClick: { action: 'click' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  setup() {
    return { args, ...argTypes };
  },
  template: '<Button v-bind="args" @click="onClick">{{ args.default }}</Button>',
});

export const Default = Template.bind({});
Default.args = {
  default: 'Button',
};
