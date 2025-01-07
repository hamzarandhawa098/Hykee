<template>
  <div class="flex flex-col  xl:flex-row gap-[34px] px-[35px] py-[34px] bg-DropdownBg xl:bg-Sidebar-bg overflow-auto">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="bg-black w-[246px] h-[238px] rounded-lg shadow-lg text-center"
    >
      <div class="relative w-[72px] h-[72px] mx-auto my-[30px]">
        <div
          class="absolute top-0 left-0 w-full h-full rounded-full border-4"
          :class="
            card.percentage >= 0 ? 'border-primary-color' : 'border-red-400'
          "
          :style="getRotationStyle(card.percentage)"
        ></div>
        <div
          class="absolute top-0 left-0 w-full h-full flex items-center justify-center font-semibold"
          :class="card.percentage >= 0 ? 'text-primary-color' : 'text-red-400'"
        >
          {{ card.percentage }}%
        </div>
      </div>
      <div class="space-y-[17px] mb-[30px]">
        <h3 class="text-white font-poppins font-normal text-lg">
          {{ card.title }}
        </h3>
        <div
          class="flex items-center justify-center max-w-[178px] mx-auto gap-3"
        >
          <component
            :is="card.isAboveAverage ? SuccessIcon : WarningIcon"
            class="w-[70px] h-[39px]"
          />
          <span
            class="opacity-[70%] font-poppins font-normal text-[13px] text-left"
          >
            {{
              card.isAboveAverage
                ? "Above the industry average"
                : "Lower than the industry average"
            }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WarningIcon from "@/components/icons/WarningIcon.vue";
import SuccessIcon from "@/components/icons/SuccessIcon.vue";

const cards = [
  {
    title: "Revenue Growth",
    percentage: 3,
    isAboveAverage: false,
  },
  {
    title: "3y Growth Trend",
    percentage: 10,
    isAboveAverage: false,
  },
  {
    title: "EBITDA %",
    percentage: 9,
    isAboveAverage: true,
  },
  {
    title: "Leva",
    percentage: 6,
    isAboveAverage: true,
  },
];

function getRotationStyle(percentage) {
  const degrees = (percentage / 100) * 360;
  return { transform: `rotate(${degrees}deg)` };
}
</script>

<style scoped></style>
