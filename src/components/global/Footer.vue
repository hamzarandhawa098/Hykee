<template>
  <section class="text-white py-20" v-if="isHomePage">
    <div class="flex flex-col-reverse lg:flex-col justify-center items-center">
      <div
        class="max-w-5xl mx-auto w-full flex flex-wrap space-y-12 lg:space-y-0 md:justify-between gap-8 px-10 lg:px-0 text-left"
      >
        <div
          v-for="(section, index) in footerSections"
          :key="index"
          class="w-full md:w-auto flex-shrink-0"
        >
          <h3 class="font-medium leading-7 font-monorope text-lg mb-4">
            {{ section.heading }}
          </h3>
          <ul class="space-y-2">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <router-link
                :href="link.href"
                class="hover:underline font-sans font-normal text-sm leading-6 text-footer-links"
              >
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="mt-20 mb-12 lg:mb-0 flex items-center justify-start lg:justify-center px-8 lg:px-0 w-full"
      >
        <div class="w-1/3 h-px hidden lg:block bg-white"></div>
        <component :is="Logo" class="w-24 mx-4" />
        <div class="w-1/3 h-px bg-white hidden lg:block"></div>
      </div>
    </div>
    <div class="flex justify-start px-10 lg:justify-center lg:px-0">
      <p class="text-sm text-footer-links font-normal font-monorope mt-8">
        {{ footerMeta }}
      </p>
    </div>
  </section>
  <section class="relative bg-footer-bg-color text-white pt-20" v-else>
    <div class="max-w-6xl mx-auto w-full">
      <img
        :src="FooterBg"
        alt="Footer background"
        class="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
        style="object-position: center"
      />
      <div class="flex flex-col lg:flex-row gap-16">
        <div class="max-w-64 lg:mx-auto ml-14 lg:ml-0">
          <component :is="Logo" />
          <p class="text-sm text-footer-links font-normal mt-8">
            {{ data.description }}
          </p>
          <div class="flex space-x-4 mt-4">
            <router-link
              v-for="(link, index) in data.socialLinks"
              :key="index"
              :href="link.href"
              :aria-label="link.ariaLabel"
              class="rounded-full bg-gray-900 text-white px-2.5 py-1"
            >
              <font-awesome-icon :icon="link.icon" />
            </router-link>
          </div>
        </div>
        
          <div
            class="ml-14 lg:ml-0 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative py-16"
          >
            <div>
              <h3
                class="font-medium font-monorope text-xl text-primary-color mb-4"
              >
                {{ data.platformLinksTitle }}
              </h3>
              <ul class="space-y-4">
                <li v-for="(link, index) in data.platformLinks" :key="index">
                  <router-link
                    :href="link.href"
                    class="text-footer-links-text text-base font-normal hover:text-gray-200"
                  >
                    {{ link.text }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div>
              <h3
                class="font-medium font-monorope text-xl text-primary-color mb-4"
              >
                {{ data.supportLinksTitle }}
              </h3>
              <ul class="space-y-4">
                <li v-for="(link, index) in data.supportLinks" :key="index">
                  <router-link
                    :href="link.href"
                    class="text-footer-links-text text-base font-normal hover:text-gray-200"
                  >
                    {{ link.text }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div>
              <h3
                class="font-medium font-monorope text-xl text-primary-color mb-4"
              >
                {{ data.aboutLinksTitle }}
              </h3>
              <ul class="space-y-4">
                <li v-for="(link, index) in data.aboutLinks" :key="index">
                  <router-link
                    :href="link.href"
                    class="text-footer-links-text text-base font-normal hover:text-gray-200"
                  >
                    {{ link.text }}
                  </router-link>
                </li>
              </ul>
            </div>

            <div>
              <h3
                class="font-medium font-monorope text-xl text-primary-color mb-4"
              >
                {{ data.appLinksTitle }}
              </h3>
              <div class="mt-4 space-y-4">
                <router-link :href="data.appLinks.playStore.src" class="block">
                  <img
                    :src="data.appLinks.playStore.src"
                    :alt="data.appLinks.playStore.alt"
                    class="h-10"
                  />
                </router-link>
                <router-link :href="data.appLinks.appleStore.src" class="block">
                  <img
                    :src="data.appLinks.appleStore.src"
                    :alt="data.appLinks.appleStore.alt"
                    class="h-10"
                  />
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div
      class="mt-8 text-right text-footer-links bg-black py-2 px-14 w-full text-sm relative"
    >
      {{ data.copyright }}
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const isHomePage = computed(() => route.path === "/");
import FooterBg from "@/assets/images/footerBg.png";
import Logo from "../icons/Logo.vue";

defineProps({
  Logo: String,
  footerSections: Array,
  footerMeta: String,
  data: String,
});
</script>
<style scoped></style>
