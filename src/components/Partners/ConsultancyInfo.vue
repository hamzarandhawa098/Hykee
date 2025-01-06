<template>
  <div class="relative pt-[121px] z-10 px-4 lg:px-0">
    <img
      :src="ContactInfo"
      alt=""
      class="absolute hidden lg:block top-[294px] left-[13px]"
    />
    <div
      class="max-w-[931px] mx-auto w-full flex text-white flex-col md:flex-row items-start lg:gap-[58px]"
    >
      <div class="relative text-center md:text-left max-w-[544px]">
        <h2
          class="text-titleTertiary font-sans font-bold"
          v-html="section1Title1"
        ></h2>
        <p
          class="mt-8 font-normal hidden lg:block text-base font-monorope"
          v-html="section1Description1"
        ></p>
        <p
          class="mt-8 font-normal lg:hidden text-base font-monorope"
          v-html="section1DescriptionMob"
        ></p>

        <div class="mt-[48px] space-x-5">
          <Button class="px-[18px] py-[12px]">{{ section1Button1 }}</Button>
          <button
            class="bg-transparent text-solution-features border rounded-lg border-solution-features px-[17.72px] py-[11px]"
          >
            {{ section1Button2 }}
          </button>
        </div>
      </div>

      <div class="w-[329px] mx-auto lg:mx-0">
        <img
          :src="consultancyToolsImg"
          alt="Phone Display"
          class="relative lg:absolute w-[329px] lg:top-[150px]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from "@/components/global/Button.vue";
import ContactInfo from "@/assets/images/ContactInfo.png";
defineProps({
  section1Title1: String,
  section1Description1: String,
  section1DescriptionMob: String,
  section1Description2: String,
  section1Button1: String,
  section1Button2: String,
  consultancyToolsImg: String,
  section1Title2: String,
});
</script>
