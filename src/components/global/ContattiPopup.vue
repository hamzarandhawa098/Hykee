<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
  >
    <div
      class="relative rounded-xl border bg-black w-full max-w-5xl mx-auto shadow-lg"
    >
      <img
        :src="ContactFormBg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover opacity-100 rounded-xl"
      />

      <!-- Overlay Content -->
      <div class="relative z-10 p-8 text-white">
        <!-- Close Button -->
        <button
          class="absolute top-4 right-4 text-white text-xl"
          @click="closePopup"
        >
          ✕
        </button>

        <!-- Title Section -->

        <div class="text-left mb-6">
          <div class="flex justify-center mb-10">
            <Logo />
          </div>
          <div class="flex justify-evenly">
            <h2 class="text-[58px] font-bold font-sans text-primary-color">
              Contattaci
            </h2>
            <p class="mt-5 text-base font-normal font-sans max-w-xs">
              Compila il form e scarica l’app gratuitamente
            </p>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="submitForm" class="space-y-5 max-w-3xl mx-auto">
          <div class="grid grid-cols-2">
            <input
              type="text"
              v-model="form.nome"
              placeholder="Nome"
              class="w-[80%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              v-model="form.cognome"
              placeholder="Cognome"
              class="w-[80%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>
          <div class="grid grid-cols-2">
            <input
              type="email"
              v-model="form.email"
              placeholder="Email"
              class="w-[80%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              v-model="form.ruolo"
              placeholder="Ruolo"
              class="w-[80%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
          <select
            v-model="form.settore"
            class="w-[90%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          >
            <option value="" disabled selected>Seleziona il tuo settore</option>
            <option value="Settore 1">Settore 1</option>
            <option value="Settore 2">Settore 2</option>
            <option value="Settore 3">Settore 3</option>
          </select>
          <textarea
            v-model="form.messaggio"
            placeholder="Scrivi un messaggio"
            rows="6"
            class="w-[90%] py-3 px-3 text-sm rounded-lg border border-gray-300 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
          ></textarea>

          <div class="flex justify-between max-w-2xl">
            <div class="flex items-center gap-3">
              <label class="relative flex items-center cursor-pointer">
                <input
                  v-model="form.privacyPolicy"
                  type="checkbox"
                  id="privacyPolicy"
                  class="hidden"
                />
                <div
                  class="w-6 h-6 flex items-center justify-center rounded-lg transition-all"
                  :class="{
                    'bg-primary-color': form.privacyPolicy,
                    'bg-white': !form.privacyPolicy,
                  }"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="text-black"
                    v-if="form.privacyPolicy"
                  />
                </div>
              </label>

              <label
                for="privacyPolicy"
                class="ml-2 text-base font-normal leading-7"
              >
                Ho letto la
                <router-link to="#" class="text-bold"
                  >privacy policy</router-link
                >
              </label>
            </div>

            <Button type="submit" class="px-44 py-2"> Invia </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ContactFormBg from "@/assets/images/ContactForm.png";
import Logo from "@/components/icons/Logo.vue";
import Button from "./Button.vue";

const emit = defineEmits(["close"]);

const form = ref({
  nome: "",
  cognome: "",
  email: "",
  ruolo: "",
  settore: "",
  messaggio: "",
  privacyPolicy: false,
});

function closePopup() {
  emit("close");
}

function submitForm() {
  console.log("Form Data Submitted:", form.value);
  closePopup();
}
</script>

<style></style>
