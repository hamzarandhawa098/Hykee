import ContactFormPopup from '@/components/global/ContattiPopup.vue';

export default {
  title: 'Components/ContactFormPopup',
  component: ContactFormPopup,
  argTypes: {
    ContactFormBg: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { ContactFormPopup },
  setup() {
    return { args };
  },
  template: '<ContactFormPopup v-bind="args" @close="onClose" />',
  methods: {
    onClose: () => alert('Popup closed!'),
  },
});

export const Default = Template.bind({});
Default.args = {
  ContactFormBg: 'https://via.placeholder.com/1500x800',
};
