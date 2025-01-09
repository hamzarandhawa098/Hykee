import MoreInformation from '@/components/global/MoreInformation.vue';
import EnvelopeIconMobile from '@/components/icons/EnvelopeIconMobile.vue';
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";


export default {
  title: 'Components/MoreInformation',
  component: MoreInformation,
  argTypes: {
    MoreInformationBg: { control: 'text' },
    MoreInformationText: { control: 'text' },
    MoreInformationButtonText: { control: 'text' },
    MoreInformationIcon: { control: 'select' },
  },
};

const Template = (args) => ({
  components: { MoreInformation },
  setup() {
    return { args };
  },
  template: '<MoreInformation v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  MoreInformationBg: MoreInformationBg, 
  MoreInformationText: 'Want More Information?',
  MoreInformationButtonText: 'Contact Us',
  MoreInformationIcon: EnvelopeIconMobile,
};
