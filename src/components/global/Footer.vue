<template>
  <section class="text-white py-12 bg-home-footer-bg" v-if="props.route">
    <div class="flex flex-col-reverse lg:flex-col justify-center items-center">
      <div
        class="max-w-[933px]  mx-auto w-full flex flex-wrap lg:space-y-0 md:justify-between px-10 lg:px-0 text-left"
      >
        <div
          v-for="(section, index) in footerSections"
          :key="index"
          class="w-full md:w-auto pt-[80px] lg:pt-[90.37px]"
        >
          <h3 class="font-medium leading-7 font-monorope text-lg pb-[16px]">
            {{ section.heading }}
          </h3>
          <ul class="gap-y-3">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <router-link
                :to="link.href"
                class="hover:underline font-sans font-normal text-sm leading-6 text-footer-links"
              >
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
        class=" flex  mt-[106px] items-center justify-start lg:justify-center px-8 lg:px-0 w-full"
      >
        <div class="w-1/3 h-px hidden lg:block bg-white"></div>
        <component :is="Logo" class="w-24 mx-4" />
        <div class="w-1/3 h-px bg-white hidden lg:block"></div>
      </div>
    </div>
    <div class="flex justify-start mt-[100px] lg:mt-[38px] px-10 lg:justify-center lg:px-0">
      <p class="text-sm text-footer-links font-normal font-monorope">
        {{ footerMeta }}
      </p>
    </div>
  </section>
  <section class="relative text-white pt-[95px]" v-else>
    <div class="max-w-6xl mx-auto w-full">
      <img
        :src="FooterBg"
        alt="Footer background"
        class="absolute hidden lg:block inset-0 w-full h-full object-cover opacity-100 pointer-events-none z-1"
        style="object-position: center"
      />
      <div class="flex flex-col lg:flex-row gap-16">
        <div class="max-w-64  ml-14 lg:ml-[18px] z-10">
          <component :is="Logo" />
          <p class="text-sm text-footer-links font-normal mt-8 font-monorope">
            {{ data.description }}
          </p>
          <div class="flex space-x-4 mt-4">
            <router-link
              v-for="(link, index) in data.socialLinks"
              :key="index"
              :to="link.href"
              :aria-label="link.ariaLabel"
              class="rounded-full text-white px-2.5 py-1"
            >
              <font-awesome-icon :icon="link.icon" />
            </router-link>
          </div>
        </div>

        <div
          class="ml-14 lg:ml-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 relative pt-12 pb-16"
        >
          <div>
            <h3
              class="font-medium font-monorope text-xl text-primary-color mb-10"
            >
              {{ data.platformLinksTitle }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(link, index) in data.platformLinks" :key="index">
                <router-link
                  :to="link.href"
                  class="text-footer-links-text text-base font-normal hover:text-gray-200"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="font-medium font-monorope text-xl text-primary-color mb-10"
            >
              {{ data.supportLinksTitle }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(link, index) in data.supportLinks" :key="index">
                <router-link
                  :to="link.href"
                  class="text-footer-links-text text-base font-normal hover:text-gray-200"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="font-medium font-monorope text-xl text-primary-color mb-10"
            >
              {{ data.aboutLinksTitle }}
            </h3>
            <ul class="space-y-4">
              <li v-for="(link, index) in data.aboutLinks" :key="index">
                <router-link
                  :to="link.href"
                  class="text-footer-links-text text-base font-normal hover:text-gray-200"
                >
                  {{ link.text }}
                </router-link>
              </li>
            </ul>
          </div>

          <div>
            <h3
              class="font-medium font-monorope text-xl text-primary-color mb-10"
            >
              {{ data.appLinksTitle }}
            </h3>
            <div class="mt-4 space-y-4">
              <router-link :to="data.appLinks.playStore.src" class="block">
                <img
                  :src="data.appLinks.playStore.src"
                  :alt="data.appLinks.playStore.alt"
                  class="h-10"
                />
              </router-link>
              <router-link :to="data.appLinks.appleStore.src" class="block">
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
      class="pt-[25px] pb-[23px] text-right text-footer-links bg-black py-2 px-14 w-full text-sm relative"
    >
      {{ data.copyright }}
    </div>
  </section>
</template>

<script setup>

const props = defineProps({
  Logo: String,
  footerSections: Array,
  footerMeta: String,
  data: String,
  route: String,
  FooterBg : String,
});
</script>
<style scoped></style>
