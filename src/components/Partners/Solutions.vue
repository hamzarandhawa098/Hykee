<template>
  <div
    class="max-w-[938px] w-full mt-[32px] mb-[64px]  mx-auto bg-solution-bg-color rounded-xl text-white h-auto flex items-center justify-center"
  >
    <div class="text-center ">
      <h1
        class="text-5xl font-sans leading-[50px] pt-[50px] pb-[62px] font-bold text-white mb-4"
        v-html="solutionTitle"
      ></h1>
      <div
        class="flex w-auto h-auto flex-col  px-[32px]  pb-[80px] md:flex-row gap-16 items-center justify-center"
      >
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="bg-white text-faqQuestionBg rounded-2xl p-6 w-[296px] h-[367px] cursor-pointer"
          :class="{ 'ring-4 ring-primary-color': selectedPlan === plan.name }"
          @click="selectPlan(plan.name)"
        >
          <h2 class="text-xl text-left font-bold mb-4">{{ plan.name }}</h2>
          <div class="flex">
            <p class="text-4xl font-bold text-faqQuestionBg mb-4">€{{ plan.price }}</p>
            <span class="text-xs text-left mt-3 pl-[10px] font-normal text-solution-features"
              >per utente <br> al mese</span
            >
          </div>
          <ul class="text-sm text-left text-solution-features space-y-2 mb-6">
            <li v-for="feature in plan.features" :key="feature">
              {{ feature }}
            </li>
          </ul>
          <Button class="py-2 px-4">
            {{ plan.buttonText }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/global/Button.vue";

defineProps({
  solutionTitle: String,
  plans: Array,
});

const selectedPlan = ref(null);

function selectPlan(plan) {
  selectedPlan.value = plan;
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.ring-4 {
  border-width: 4px;
}
</style>
