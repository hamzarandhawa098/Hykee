<template>
  <section class="max-w-6xl pt-32 mx-auto w-full text-white">
    <div
      class="flex flex-col lg:flex-row lg:bg-white max-w-[899px] w-full mx-auto rounded-[26px] items-center justify-center gap-10 lg:gap-0 relative"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        @click="activeCard = card.id"
        :class="[
          'card relative flex flex-col  justify-between w-auto md:w-[500px] lg:w-[296px]',
          activeCard === card.id && isLargeScreen
            ? 'active text-white'
            : 'inactive',
        ]"
      >
        <div
          :class="
            activeCard === card.id && isLargeScreen ? 'active' : 'inactive'
          "
          class="text-left spacing space-y-5"
        >
          <h2
            :class="
              activeCard === card.id && isLargeScreen
                ? 'text-white'
                : 'text-card-text'
            "
            class="text-[28px] font-sans leading-9 font-bold"
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
              class="text-4xl font-sans font-bold"
            >
              €{{ card.price }}
            </p>
            <p
              :class="
                activeCard === card.id && isLargeScreen
                  ? 'text-white'
                  : 'text-card-text'
              "
              class="text-xs font-avenir font-medium pt-[10px]  max-w-[100px] ml-4"
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
            class="text-[14px] font-medium leading-[18px] font-sans"
          >
            {{ card.description }}
          </p>
          <ul
            class="text-[15px] font-medium leading-5 font-sans space-y-[10px]"
          >
            <li
              v-for="(feature, index) in card.features"
              :key="index"
              class="flex items-normal"
            >
              <div
                class="w-[20px] h-[20px] p-1 flex justify-center items-center bg-check-bg rounded-full mr-3"
              >
                <font-awesome-icon :icon="['fa', 'check']" class="text-white" />
              </div>
              <div
                :class="
                  activeCard === card.id && isLargeScreen ? 'text-white' : ''
                "
              >
                {{ feature }}
              </div>
            </li>
          </ul>
        </div>
        <div class="flex justify-center mb-[30px]">
          <button
            :class="[
              activeCard === card.id && isLargeScreen
                ? 'bg-card-button-active text-white'
                : 'bg-primary-color text-black',
            ]"
            class="px-[75.5px] py-[12px] rounded-xl"
          >
            {{ card.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";

defineProps({
  cards: Array,
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
  border-radius: 26px;
  text-align: center;
  transition: transform 0.3s ease, z-index 0.3s, box-shadow 0.3s,
    background-color 0.3s;
  cursor: pointer;
}

.card.inactive {
  background-color: white;
  color: #848199;
  transform: scale(1);
  z-index: 1;
  height: 616px;
}

.card.active {
  background-color: #00cd78;
  color: black;
  transform: scale(1.01) translateY(-30px);
  z-index: 10;
  box-shadow: 0px 42px 34px 0px #0c38464b;
  height: 624px;
}

.spacing.inactive {
  padding: 40px 40px 0px 40px;
}
.spacing.active {
  padding: 32px 32px 30px 32px;
}
</style>
