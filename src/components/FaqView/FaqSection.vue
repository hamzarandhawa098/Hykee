<template>
    <div class="space-y-10 pb-32">
      <div class="max-w-[900px]  mx-auto w-full overflow-hidden" v-for="(faqItem, index) in faqData.items" :key="index">
        <div
          :class="[
            'flex items-center justify-between lg:px-12 px-8 py-24 border border-primary-color lg:py-0 bg-faqQuestionBg h-[145px] text-white cursor-pointer mainBar',
            { active: isOpen[index] },
          ]"
        >
          <div class="flex flex-col lg:flex-row items-start lg:space-x-[30px] space-y-4 lg:space-y-1">
            <div
              class="w-[56px] h-[56px] rounded-full bg-faqIconCircular flex items-center justify-center"
            >
              <faqIconCircular  class="w-[32px] h-[32px]"/>
            </div>
            <div>
              <h3 class="text-2xl font-medium font-sans uppercase">{{ faqItem.title }}</h3>
              <p class="text-sm font-sans font-normal text-solution-features">
                {{ faqItem.subtitle }}
              </p>
            </div>
          </div>
          <div class=" items-center flex">
            <span
              class="text-primary-color font-semibold font-coolvetica text-3xl lg:text-[133px] "
              v-if="isOpen[index]"
              @click="toggleOpen(index)"
            >
            <faqMinus />
            </span>
            <span
              class="outline-text font-semibold font-coolvetica text-3xl lg:text-[133px]"
              v-else
              @click="toggleOpen(index)"
            >
            <faqPlus />
            </span>
          </div>
        </div>
  
        <div v-if="isOpen[index]" class="bg-white py-[50px] ">
          <div class="space-y-12 px-8 lg:px-0 max-w-3xl mx-auto w-full">
            <div v-for="(item, index) in faqItem.items" :key="index">
              <h4 class="font-semibold text-card-button-active mb-2">
                {{ item.question }}
              </h4>
              <p class="text-card-button-active">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import faqIconCircular from "@/components/icons/faqIconCircular.vue";
  import faqPlus from "../icons/faqPlus.vue";
  import faqMinus from "../icons/faqMinus.vue";
  
  const isOpen = ref([false, false]); 
  
  const faqData = ref({
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
          {
            question: "Sed ut perspiciatis unde omnis?",
            answer:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
        ],
      },
      {
        title: "Turpis eget.",
        subtitle: "Es. :  Lorem Ipsum?  /  lorem ipsum ipsum?  /  Lorem? ",
        items: [
          {
            question: "Sed ut perspiciatis unde omnis?",
            answer:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
          {
            question: "Lorem ipsum dolor sit amet?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien amet suscipit convallis purus, cursus quis. Venenatis sit mi nullam cursus bibendum.",
          },
        ],
      },
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
          {
            question: "Sed ut perspiciatis unde omnis?",
            answer:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
        ],
      },
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
          {
            question: "Sed ut perspiciatis unde omnis?",
            answer:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
          },
        ],
      },
    ],
  });
  
  const toggleOpen = (index) => {
    isOpen.value[index] = !isOpen.value[index];
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  
  .mainBar.active {
    background-color: white;
    color: black;
  }
  </style>
  