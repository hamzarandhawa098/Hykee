import ContactForm from '@/components/global/ContactForm.vue';


export default {
  title: 'Components/ContactForm',
  component: ContactForm,
  argTypes: {
    ContactFormBg: { control: 'text' },
    contactFormTitle: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { ContactForm },
  setup() {
    return { args };
  },
  template: '<ContactForm v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  ContactFormBg: 'https://st4.depositphotos.com/13349494/23275/i/450/depositphotos_232751862-stock-photo-dark-blue-shabby-wooden-background.jpg',
  contactFormTitle: 'Contattaci',
};

