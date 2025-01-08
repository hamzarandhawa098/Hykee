<template>
    <section class="hidden xl:block" style="position: relative">
      <vue-speedometer
        :width="500"
        :needleHeightRatio="0.7"
        :value="55"
        :minValue="0"
        :maxValue="120"
        :segments="6"
        :customSegmentLabels="customSegmentLabels"
        :customSegmentStops="customSegmentStops"
        :segmentColors="segmentColors"
        :ringWidth="70"
        :needleTransitionDuration="3333"
        needleTransition="easeElastic"
        needleColor="#00ffcc"
      />
    
    </section>
    <section class="xl:hidden" style="position: relative">
      <vue-speedometer
        :width="350"
        :height="180"
        :needleHeightRatio="0.7"
        :value="55"
        :minValue="0"
        :maxValue="120"
        :segments="6"
        :customSegmentLabels="customSegmentLabels"
        :customSegmentStops="customSegmentStops"
        :segmentColors="segmentColors"
        :ringWidth="70"
        :needleTransitionDuration="3333"
        needleTransition="easeElastic"
        needleColor="#00ffcc"
      />
        
    </section>
  </template>
  

<script setup>
import VueSpeedometer from "vue-speedometer";

const customSegmentLabels = [
  { text: "Very Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  { text: "Bad", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  { text: "Normal", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  { text: "Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  { text: "Very Good", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
  { text: "Excellent", position: "INSIDE", color: "#ffffff", fontSize: "12px" },
];

const segmentColors = [
  "#ff5454",
  "#ff8c42",
  "#ffcc33",
  "#e3e33e",
  "#91d951",
  "#52c256",
];

const customSegmentStops = [0, 20, 40, 60, 80, 100, 120];
</script>

<style scoped>

</style>
