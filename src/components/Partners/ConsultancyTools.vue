<template>
  <div class="relative text-white py-20">
    <img
      :src="consultancyBg"
      alt="Circular Background"
      class="absolute inset-0 w-auto h-full object-cover opacity-100 z-0"
    />
    <div class="max-w-6xl mx-auto w-full">
      <div
        class="relative flex flex-col md:flex-row items-start pt-[150px] gap-8 z-10"
      >
        <div class="relative flex-1 text-center md:text-left">
          <h2
            class="text-titleTertiary font-sans font-bold"
            v-html="section1Title1"
          ></h2>
          <p class="mt-8 font-normal text-base font-monorope">
            {{ section1Description1 }}
          </p>
          <p class="mt-6 font-normal text-base font-monorope">
            {{ section1Description2 }}
          </p>
          <div class="mt-8 space-x-4">
            <Button class="w-[244px] h-[44px]">{{ section1Button1 }}</Button>
            <button
              class="bg-transparent text-solution-features border rounded-lg border-solution-features w-[121px] h-[44px]"
            >
              {{ section1Button2 }}
            </button>
          </div>
          <div class="lg:pt-64 lg:pl-12">
            <h2
              class="text-titleTertiary font-sans font-bold w-full lg:max-w-lg text-center lg:text-left"
              v-html="section1Title2"
            ></h2>
          </div>
        </div>

        <div class="relative flex-1 pl-[58.14px]">
          <img
            :src="consultancyToolsImg"
            alt="Phone Display"
            class="relative z-10 mx-auto md:mx-0"
          />
        </div>
      </div>

      <div
        class="  flex flex-col pl-[70px] md:flex-row items-center gap-8 relative z-10 py-28"
      >
        <div class="relative flex">
          <img
            :src="leftMobile"
            alt="Phone Display"
            class="relative z-10 mx-auto md:mx-0"
          />
        </div>
        <div class="flex-1 text-center md:text-left">
          <div class="max-w-xl mx-auto">
            <h2
              class="text-titleTertiary font-sans font-bold"
              v-html="section2Title"
            ></h2>
            <h2
              class="text-titleTertiary font-sans font-bold"
              v-html="section2Title"
            ></h2>
            <p class="mt-8 font-normal text-base font-monorope">
              {{ section2Description1 }}
            </p>
            <p class="mt-8 font-normal text-base font-monorope">
              {{ section2Description2 }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-16 flex flex-col md:flex-row  justify-start relative z-10"
      >
        <div class="max-w-lg text-center md:text-left  mr-44  ml-24">
          <h2
            class="text-titleTertiary font-sans font-bold leading-9"
            v-html="section3Title"
          ></h2>
          <p class="mt-8 font-normal max-w-[410px] w-full text-base font-monorope">
            {{ section3Description1 }}
          </p>
        </div>
        <div
          class="relative order-first lg:order-last flex justify-center mb-8 lg:mb-0 lg:flex-[-1]"
        >
          <img
            :src="rightMobile"
            alt="Phone Display"
            class="relative z-10 md:mx-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
defineProps({
  section1Title1: String,
  section1Description1: String,
  section1Description2: String,
  section1Button1: String,
  section1Button2: String,
  section1Title2: String,
  consultancyBg: String,
  consultancyToolsImg: String,
  leftMobile: String,
  rightMobile: String,
  section2Title: String,
  section2Description1: String,
  section2Description2: String,
  section3Title: String,
  section3Description1: String,
  section3Description2: String,
});
</script>

<style></style>
