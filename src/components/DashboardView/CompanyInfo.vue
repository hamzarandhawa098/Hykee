<template>
  <section
    class="bg-Sidebar-bg hidden xl:block max-w-[1159px] mt-[12px] w-full mx-auto text-white px-[47px] rounded-[10px]"
  >
    <div class="mb-[37px] pt-[25px]">
      <h5 class="text-lg font-sans font-medium opacity-[70%]">
        {{ companyInfoTitle }}
      </h5>
    </div>
    <div class="flex text-sm gap-[99px] max-w-[1065px] w-full">
      <div
        v-for="(value, key, index) in companyInfo"
        :key="index"
        class="flex flex-col mb-[29px] relative after:content-[''] after:absolute after:h-full after:w-[1px] after:bg-CompanyInfo-divider after:right-[-50px] after:top-0"
        :class="{
          'after:hidden': index === Object.keys(companyInfo).length - 1,
        }"
      >
        <p class="text-primary-color font-barlow font-normal text-base">
          {{ key }}:
        </p>
        <div class="py-[10px]">
          <p class="text-white font-poppins font-light text-sm">{{ value }}</p>
        </div>
      </div>
    </div>
  </section>

  <section
    class="rounded-lg xl:hidden shadow-md w-full mx-auto mt-[26px] px-[13px] py-[13px]"
    :style="{
      backgroundImage: `url(${MobileCompoBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <div class="flex text-white justify-between w-full relative">
      <div
        v-for="(section, index) in sections"
        :key="index"
        class="space-y-[19px] flex-1 relative"
      >
        <div v-for="(item, idx) in section.items" :key="idx">
          <p class="font-poppins font-medium mb-[6px] text-xs">
            {{ item.label }}
          </p>
          <p class="font-poppins max-w-[84px] font-light text-xs">
            {{ item.value }}
          </p>
        </div>
        <div
          v-if="index < sections.length - 1"
          class="absolute top-0 right-4 h-[98px] w-[1px] bg-Divider"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MobileCompoBg from "@/assets/images/MobileCompoBg.png";
defineProps({
  companyInfoTitle: String,
  companyInfo: Array,
});

const sections = [
  {
    items: [
      { label: "Via:", value: "Via Mazzini 3" },
      { label: "City:", value: "Torino" },
      { label: "Region:", value: "Piedmont" },
    ],
  },
  {
    items: [
      { label: "Nace:", value: "34.56.78" },
      { label: "Activities:", value: "Confectionery production" },
    ],
  },
  {
    items: [
      { label: "Latest Budget:", value: "2020" },
      { label: "Revenues:", value: "€345.000.000" },
    ],
  },
];
</script>

<style scoped>
.flex > div:not(:last-child)::after {
  content: none;
}
</style>
