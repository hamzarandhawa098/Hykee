<template>
  <TopBar
    v-if="isHomePage"
    :topbarText="'La piattaforma di  <span class=\'text-primary-color\'>Business Intelligence</span> che amplifica la proposta di valore nei confronti dei tuoi clienti'"
  />
  <div class="bg-background-color h-auto">
    <Navbar
      :menuItems="menuItems"
      loginText="Login"
      signupText="Sign up"
      :Logo="Logo"
      :Hamburger="Hamburger"
      @contact-click="openPopup"
    />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <MoreInformation
      :MoreInformationBg="MoreInformationBg"
      :MoreInformationText="'Desideri maggiori informazioni?'"
      :MoreInformationButtonText="'Contattaci'"
      :MoreInformationIcon="EnvelopeIcon"
    />
    <ContactForm
      :ContactFormBg="ContactFormBg"
      :contactFormTitle="'Stay tuned!'"
    />
    <Footer
      :Logo="Logo"
      :footerSections="footerSections"
      :footerMeta="footerMeta"
      :data="data"
      :route="isHomePage"
      :FooterBg="FooterBg"
    />
    <ContattiPopup v-if="showPopup" @close="closePopup" />
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import TopBar from "@/components/global/TopBar.vue";
import Navbar from "@/components/global/Navbar.vue";
import Logo from "@/components/icons/Logo.vue";
import Hamburger from "@/components/icons/Hamburger.vue";
import Footer from "@/components/global/Footer.vue";
import { useRoute } from "vue-router";
import AppleStore from "@/assets/images/appstore.png";
import PlayStore from "@/assets/images/playstore.png";
import MoreInformation from "@/components/global/MoreInformation.vue";
import ContactForm from "@/components/global/ContactForm.vue";
import MoreInformationBg from "@/assets/images/MoreInformationBg.png";
import ContactFormBg from "@/assets/images/ContactForm.png";
import EnvelopeIcon from "@/components/icons/EnvelopeIcon.vue";
import ContattiPopup from "@/components/global/ContattiPopup.vue";
import FooterBg from "@/assets/images/footerBg.png";


const route = useRoute();


const isHomePage = computed(() => route.path === "/");
const showPopup = ref(false);

function openPopup() {
  showPopup.value = true;
}

function closePopup() {
  showPopup.value = false;
}

watch(showPopup, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
//Navbar
const menuItems = ref([
  { text: "Chi siamo", href: "/chi-siamo" },
  { text: "Come funziona", href: "/come-funziona" },
  { text: "Perchè scegliere HYKEE", href: "/perchè-scegliere-hykee" },
  { text: "Prezzi", href: "/prezzi" },
  { text: "FAQ", href: "/faq" },
  { text: "Contatti", href: "#" },
  { text: "Partner", href: "/partners" },
]);


//Footer

const footerSections = ref([
  {
    heading: "La piattaforma",
    links: [
      { text: "Come funziona", href: "#" },
      { text: "Prezzi", href: "#" },
      { text: "Perché scegliere HYKEE", href: "#" },
    ],
  },
  {
    heading: "Assistenza",
    links: [
      { text: "FAQ", href: "#" },
      { text: "Il metodo HYKEE", href: "#" },
      { text: "info@hykee.tech", href: "mailto:info@hykee.tech" },
    ],
  },
  {
    heading: "Chi siamo",
    links: [
      { text: "Descrizione sintetica dell'about us", href: "#" },
      { text: "Privacy", href: "#" },
      { text: "Termini di utilizzo", href: "#" },
    ],
  },
  {
    heading: "Follow us",
    links: [
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "LinkedIn", href: "#" },
    ],
  },
]);

const footerMeta = ref("© Lunapartner All rights reserved");

const data = ref({
  platformLinksTitle: "La piattaforma",
  supportLinksTitle: "Assistenza",
  aboutLinksTitle: "Chi siamo",
  appLinksTitle: "Installa l’ App",
  description:
    "Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisi nunc quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.",
  socialLinks: [
    { href: "#", ariaLabel: "Facebook", icon: "fa-brands fa-facebook" },
    { href: "#", ariaLabel: "Twitter", icon: "fa-brands fa-twitter" },
    { href: "#", ariaLabel: "LinkedIn", icon: "fa-brands fa-linkedin" },
  ],
  platformLinks: [
    { text: "Come funziona", href: "#" },
    { text: "Prezzi", href: "#" },
    { text: "Perché scegliere HYKEE", href: "#" },
  ],
  supportLinks: [
    { text: "FAQ", href: "#" },
    { text: "Il metodo HYKEE", href: "#" },
    { text: "info@hykee.tech", href: "mailto:info@hykee.tech" },
  ],
  aboutLinks: [
    { text: "Descrizione sintetica dell'about us", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Termini di utilizzo", href: "#" },
  ],
  appLinks: {
    playStore: { src: PlayStore, alt: "Get it on Google Play" },
    appleStore: { src: AppleStore, alt: "Download on the App Store" },
  },
  copyright: "© Lunapartner All rights reserved",
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
