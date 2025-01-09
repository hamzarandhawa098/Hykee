import FaqComponent from "@/components/FaqView/FaqSection.vue";
import faqIconCircular from "@/components/icons/faqIconCircular.vue";
import faqPlus from "@/components/icons/faqPlus.vue";
import faqMinus from "@/components/icons/faqMinus.vue";

export default {
  title: "Components/FAQSection",
  component: FaqComponent,
  argTypes: {
    faqData: { control: "object" },
    isOpen: { control: "array" },
  },
};

const Template = (args) => ({
  components: { FaqComponent, faqIconCircular, faqPlus, faqMinus },
  setup() {
    const faqData = ref(args.faqData);
    const isOpen = ref(args.isOpen);
    return { faqData, isOpen };
  },
  template: `
    <FaqComponent :faqData="faqData" :isOpen="isOpen" />
  `,
});

export const Default = Template.bind({});
Default.args = {
  faqData: {
    items: [
      {
        title: "Turpis eget.",
        subtitle: "Es. :  Lorem Ipsum?  /  lorem ipsum ipsum?  /  Lorem? ",
        items: [
          {
            question: "Lorem ipsum ipsum?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien amet suscipit convallis purus, cursus quis. Venenatis sit mi nullam cursus bibendum.",
          },
          {
            question: "Lorem ipsum dolor sit amet?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien amet suscipit convallis purus, cursus quis. Venenatis sit mi nullam cursus bibendum.",
          },
        ],
      },
      {
        title: "Sed ut perspiciatis unde omnis?",
        subtitle: "Es. :  Lorem Ipsum?  /  lorem ipsum ipsum?  /  Lorem? ",
        items: [
          {
            question: "Sed ut perspiciatis unde omnis?",
            answer:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
        ],
      },
    ],
  },
  isOpen: [false, false],
};
