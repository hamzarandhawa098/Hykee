<template>
  <section class="max-w-7xl mx-auto w-full text-white lg:py-40">
    <div
      class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 relative"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        @click="activeCard = card.id"
        :class="[
          'card relative flex flex-col justify-between w-auto md:w-[500px] lg:w-[350px] h-[624px]',
          activeCard === card.id && isLargeScreen
            ? 'active text-white'
            : 'inactive',
        ]"
      >
        <div class="px-4 text-left">
          <h2
            :class="
              activeCard === card.id && isLargeScreen
                ? 'text-white'
                : 'text-card-text'
            "
            class="text-3xl font-sans font-bold"
          >
            {{ card.title }}
          </h2>
          <div class="flex">
          <p
            :class="
              activeCard === card.id && isLargeScreen
                ? 'text-white'
                : 'text-card-text'
            "
            class="text-4xl font-sans font-bold mt-7"
          >
            €{{ card.price }}
          </p>
          <p
            :class="
              activeCard === card.id && isLargeScreen
                ? 'text-white'
                : 'text-card-text'
            "
            class="text-xs font-avenir font-medium mt-9 max-w-[100px] ml-4"
          >
       {{ card.pricesText }}
          </p>
        </div>
          <p
            :class="
              activeCard === card.id && isLargeScreen
                ? 'text-white'
                : 'text-solution-features'
            "
            class="mt-9 text-[15px] font-medium leading-5 font-sans"
          >
            {{ card.description }}
          </p>
          <ul
            class="mt-9 text-[15px] font-medium leading-5 font-sans space-y-5"
          >
            <li
              v-for="(feature, index) in card.features"
              :key="index"
              class="flex items-start"
            >
              <div
                :class="[
                  'px-1.5 py-1 flex justify-center items-center rounded-full mr-3',
                  activeCard === card.id && isLargeScreen
                    ? 'bg-white text-primary-color'
                    : 'bg-primary-color text-white',
                ]"
              >
                <font-awesome-icon :icon="['fa', 'check']" />
              </div>
              <span
                :class="
                  activeCard === card.id && isLargeScreen ? 'text-white' : ''
                "
              >
                {{ feature }}
              </span>
            </li>
          </ul>
        </div>
        <button
          :class="[
            activeCard === card.id && isLargeScreen
              ? 'bg-card-button-active text-white'
              : 'bg-primary-color text-black',
          ]"
          class="mt-6 px-4 py-2 rounded"
        >
          {{ card.buttonText }}
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
cards : Array,
});


const activeCard = ref("plus");
const isLargeScreen = ref(false);

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener("resize", updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});

</script>

<style>
.card {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, z-index 0.3s, box-shadow 0.3s,
    background-color 0.3s;
  cursor: pointer;
}

.card.inactive {
  background-color: white;
  color: #333;
  transform: scale(1);
  z-index: 1;
}

.card.active {
  background-color: #00cd78;
  color: black;
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
}
</style>
