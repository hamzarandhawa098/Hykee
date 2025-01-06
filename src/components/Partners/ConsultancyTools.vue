<template>
  <div class="relative text-white lg:mt-[101px] px-4 lg:py-32">
    <div>
      <img
        :src="ConsultancyAnimation"
        alt=""
        class="absolute hidden lg:block bottom-[855px] right-[30px]"
      />
    </div>
    <div class="max-w-[963px] mx-auto  w-full mt-5">
      <h2
        class="text-titleTertiary  font-sans font-bold w-full lg:max-w-lg text-center lg:text-left pb-[80px]"
        v-html="section1Title2"
      ></h2>

      <div
        class="flex flex-col w-full md:flex-row items-centerrelative lg:gap-[19px] z-10 py-[44px]"
      >
        <div class="relative flex mx-auto">
          <img
            :src="leftMobile"
            alt="Phone Display"
            class="relative z-10 mx-auto md:mx-0"
          />
        </div>
        <div class="flex text-center md:text-left">
          <div>
            <h2
              class="text-titleTertiary font-sans font-bold"
              v-html="section2Title"
            ></h2>
            <p
              class="font-normal text-base mt-[24px] hidden lg:block font-sans"
              v-html="section2Description1"
            ></p>
            <p
              class="font-normal text-base lg:hidden font-monorope"
              v-html="section2DescriptionMob"
            ></p>
          </div>
        </div>
      </div>

      <div
        class="lg:mt-16 flex flex-col gap-[28px] md:flex-row justify-start relative z-10"
      >
        <div class="max-w-lg text-center md:text-left">
          <h2
            class="text-titleTertiary font-sans font-bold leading-9"
            v-html="section3Title"
          ></h2>
          <p
            class="mt-8 font-normal max-w-[410px] w-full text-base font-monorope"
          >
            {{ section3Description1 }}
          </p>
        </div>
        <div
          class="relative order-first lg:order-last flex justify-center mb-8 lg:mb-0 lg:flex-[-1]"
        >
          <img :src="rightMobile" alt="Phone Display" class="relative z-10" />
        </div>
        <div>
          <img
            :src="ConsultancyAnimationBelow"
            alt=""
            class="absolute hidden lg:block bottom-[-153px] right-[-128px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ConsultancyAnimation from "@/assets/images/ConsultancyAnimation.png";
import ConsultancyAnimationBelow from "@/assets/images/ConsultancyAnimationBelow.png";
defineProps({
  leftMobile: String,
  rightMobile: String,
  section2Title: String,
  section1Title2: String,
  section2Description1: String,
  section2DescriptionMob: String,
  section3Title: String,
  section3Description1: String,
  section3Description2: String,
});
</script>

<style></style>
