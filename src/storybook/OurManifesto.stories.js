import OurManifesto from '@/components/ChiSiamoView/OurManifesto.vue';

export default {
  title: 'Components/OurManifesto',
  component: OurManifesto,
  argTypes: {
    OurManifestoTitle: { control: 'text' },
    OurManifestoDescription: { control: 'text' },
    HowSeeTheMarketTitle: { control: 'text' },
    HowSeetheMarketDescription: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { OurManifesto },
  setup() {
    return { args };
  },
  template: `
    <div class="bg-black p-8">
      <OurManifesto v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  OurManifestoTitle: 'Our Manifesto',
  OurManifestoDescription: 'We believe in innovation and integrity, striving to create a better future for all.',
  HowSeeTheMarketTitle: 'How We See The Market',
  HowSeetheMarketDescription: 'We focus on market trends, analyzing the present to shape the future.',
};
