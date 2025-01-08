<template>
    <div class="radial-chart">
      <canvas ref="chartCanvas"></canvas>
      <div class="chart-label">
        <span
          class="flex justify-center items-center font-semibold font-poppins text-[16px] leading-[34.6px]"
        >
          {{ label }}
        </span>
      </div>
      <div class="chart-values">
        <span class="value-0 font-poppins font-medium text-[18px] leading-[34px]">0</span>
        <span class="value-90 font-poppins font-medium text-[18px] leading-[34px]">90</span>
        <span class="value-100 font-poppins font-medium text-[18px] leading-[34px]">100</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from "vue";
  import { Chart, ArcElement, Tooltip, DoughnutController, Legend } from "chart.js";
  
  Chart.register(ArcElement, Tooltip, DoughnutController, Legend);
  
  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: () => [0, 100],
    },
    colors: {
      type: Array,
      required: true,
      default: () => ["#00CD78", "#000000"],
    },
    label: {
      type: String,
      required: true,
      default: "Label",
    },
  });
  
  const chartCanvas = ref(null);
  let chartInstance = null;
  
  const createChart = () => {
    const ctx = chartCanvas.value.getContext("2d");
  
    if (chartInstance) {
      chartInstance.destroy(); 
    }
  
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: props.data,
            backgroundColor: props.colors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          tooltip: { enabled: false },
        },
        rotation: 205,
        circumference: 300,
      },
    });
  };
  
  onMounted(createChart);
  
  watch(() => props.data, createChart); 
  </script>
  
  <style scoped>
  .radial-chart {
    width: 174px;
    height: 174px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  
  canvas {
    max-width: 100%;
  }
  
  .chart-label {
    position: absolute;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
  
  .chart-values {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .value-0,
  .value-90,
  .value-100 {
    position: absolute;
    font-size: 12px;
    font-weight: bold;
    color: white;
  }
  
  .value-0 {
    bottom: 5px;
    left: 0;
    transform: translate(-50%, 0);
  }
  
  .value-90 {
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .value-100 {
    bottom: 5px;
    right: 0;
    transform: translate(50%, 0);
  }
  </style>
  