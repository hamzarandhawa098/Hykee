<template>
  <nav class="flex justify-between items-center px-10 py-4 text-white">
    <div class="flex items-center space-x-2">
      <router-link to="/">
        <component :is="Logo" />
      </router-link>
    </div>

    <ul class="hidden lg:flex space-x-6">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link
          :to="item.href"
          class="text-monorope text-base font-normal hover:text-primary-color cursor-pointer"
          >{{ item.text }}</router-link
        >
      </li>
    </ul>

    <div class="hidden lg:flex items-center space-x-4 cursor-pointer">
      <button class="text-white hover:text-primary-color">
        {{ loginText }}
      </button>
      <Button class="px-4 py-2">
        {{ signupText }}
      </Button>
    </div>

    <div
      class="lg:hidden flex justify-center items-center border rounded-full border-primary-color border-6 p-2"
    >
      <button @click="toggleMenu" class="text-white">
        <component :is="Hamburger" />
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="absolute top-16 right-10 bg-gray-800 p-4 rounded shadow-md z-50 lg:hidden"
    >
      <ul class="space-y-4">
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.href"
            class="block text-monorope text-base font-normal hover:text-primary-color"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
      <div class="mt-4">
        <button class="w-full text-white hover:text-primary-color">
          {{ loginText }}
        </button>
        <Button class="w-full mt-2 px-4 py-2">
          {{ signupText }}
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import Logo from "@/components/icons/Logo.vue";
import Button from "@/components/global/Button.vue";
import Hamburger from "../icons/Hamburger.vue";

defineProps({
  menuItems: Array,
  loginText: String,
  signupText: String,
  Logo: String,
  Hamburger: String,
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
