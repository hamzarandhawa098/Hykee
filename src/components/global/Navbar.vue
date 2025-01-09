<template>
  <nav
    class="flex bg-background-color justify-between items-end lg:items-start mx-[46.5px] text-white lg:pt-[41px]"
  >
    <div>
      <router-link to="/">
        <component :is="Logo" />
      </router-link>
    </div>

    <ul class="hidden lg:flex space-x-[21px] pl-[40px]">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link
          :to="item.href"
          @click.prevent="item.text === 'Contatti' ? emitContactClick() : null"
          class="font-monorope text-sm font-normal hover:text-primary-color active:text-primary-color cursor-pointer"
          >{{ item.text }}
        </router-link>
      </li>
    </ul>

    <div class="hidden lg:flex items-center space-x-3.5 cursor-pointer">
      <router-link
        to="/login"
        class="text-white font-monorope font-extrabold text-sm hover:text-primary-color"
      >
        {{ loginText }}
      </router-link>
      <Button class="px-[25px] py-[10px]">
        {{ signupText }}
      </Button>
    </div>
    <div
      class="lg:hidden mt-4 flex justify-center items-center border rounded-full border-primary-color border-6 p-2"
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
            @click.prevent="
              item.text === 'Contatti' ? emitContactClick() : null
            "
            class="block text-monorope text-base font-normal hover:text-primary-color"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
      <div class="mt-4">
        <router-link
          to="/login"
          class="w-full block text-white hover:text-primary-color"
        >
          {{ loginText }}
        </router-link>
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

const emit = defineEmits(["contact-click"]);

function emitContactClick() {
  emit("contact-click");
}

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
