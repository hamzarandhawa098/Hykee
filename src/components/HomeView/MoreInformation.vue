<template>
  <div class="relative w-full flex items-center justify-center py-8">
    <div
      class="relative mx-auto z-10 flex py-12 items-center justify-between w-full lg:w-[90%] max-w-4xl text-white p-6 rounded-lg"
    >
      <img
        :src="MoreInformationBg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover opacity-100 z-[-1] rounded-xl pointer-events-none"
      />
      <div class="max-w-2xl w-full mx-auto flex flex-col-reverse lg:flex-row justify-start  items-start lg:justify-between lg:items-center"> 
        <div>
          <h1 class="text-5xl font-sans font-bold leading-[56.5px]">{{ MoreInformationText }}</h1>
          <Button class="mt-5 px-5 py-3"> {{ MoreInformationButtonText }} </Button>
        </div>
        <component :is="MoreInformationIcon" class="text-4xl hidden lg:block"/>
        <component :is="EnvelopeIconMobile" class="text-4xl lg:hidden mb-10"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
import EnvelopeIconMobile from "@/components/icons/EnvelopeIconMobile.vue";

defineProps({
  MoreInformationBg: String,
  MoreInformationText: String,
  MoreInformationButtonText: String,
  MoreInformationIcon: String,
});
</script>

<style scoped></style>
