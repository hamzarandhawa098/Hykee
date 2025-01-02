<template>
  <div class="relative w-full flex items-center justify-center py-8">
    <div
      class="relative mx-auto z-10 flex py-12 items-center justify-between w-full lg:w-[938px] max-w-5xl text-white p-6 rounded-lg"
    >
      <img
        :src="MoreInformationBg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover opacity-100 z-[-1] rounded-xl pointer-events-none"
      />
      <div class="max-w-2xl w-full mx-auto flex flex-col-reverse lg:flex-row justify-start  items-start lg:justify-between lg:items-center"> 
        <div>
          <h1 class="text-3xl md:text-5xl  font-sans font-bold tracking-wider pb-[35px]"
          style="line-height: 56.5px;"
          >{{ MoreInformationText }}</h1>
          <Button class="w-[121px] h-[44px]"> {{ MoreInformationButtonText }} </Button>
        </div>
        <component :is="MoreInformationIcon" class="w-1/3 h-1/3 hidden lg:block"/>
        <component :is="EnvelopeIconMobile" class=" lg:hidden mb-10"/>
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
