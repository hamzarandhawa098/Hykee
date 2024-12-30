<template>
<FaqTitle 
:FaqTitleText="'F<span class=\'text-primary-color\'>.</span>A<span class=\'text-primary-color\'>.</span>Q'"
:FaqIcon="FaqIcon"

/>
<FaqSection />

</template>
<script setup>
import FaqTitle from '@/components/FaqView/FaqTitle.vue';
import FaqIcon from "@/assets/images/Faq.gif";
import FaqSection from '@/components/FaqView/FaqSection.vue';
</script>