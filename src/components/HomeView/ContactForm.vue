<template>
  <div class="relative min-h-screen flex items-center justify-center z-10">
    <img
      :src="ContactFormBg"
      alt="Background"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="absolute inset-0 flex justify-center items-center">
      <div
        class="relative bg-opacity-90 text-white p-8 rounded-lg max-w-3xl w-full"
      >
        <h3
          class="text-curiosText font-sans leading-[52px] font-bold text-center mb-8"
        >
          {{ contactFormTitle }}
        </h3>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                v-model="form.nome"
                type="text"
                placeholder="Nome"
                class="bg-transparent border border-white rounded-full px-20 py-3 focus:outline-none focus:ring-2"
                :class="{
                  'ring-red-500 border-red-500': errors.nome,
                  'focus:ring-primary-color': !errors.nome,
                }"
              />
              <p v-if="errors.nome" class="text-red-500 text-sm mt-1">
                {{ errors.nome }}
              </p>
            </div>
            <div>
              <input
                v-model="form.cognome"
                type="text"
                placeholder="Cognome"
                class="bg-transparent border border-white rounded-full px-20 py-3 focus:outline-none focus:ring-2"
                :class="{
                  'ring-red-500 border-red-500': errors.cognome,
                  'focus:ring-primary-color': !errors.cognome,
                }"
              />
              <p v-if="errors.cognome" class="text-red-500 text-sm mt-1">
                {{ errors.cognome }}
              </p>
            </div>
            <div>
              <input
                v-model="form.email"
                type="email"
                placeholder="Email"
                class="bg-transparent border border-white rounded-full px-20 py-3 focus:outline-none focus:ring-2"
                :class="{
                  'ring-red-500 border-red-500': errors.email,
                  'focus:ring-primary-color': !errors.email,
                }"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                {{ errors.email }}
              </p>
            </div>
            <div>
              <input
                v-model="form.telefono"
                type="text"
                placeholder="Telefono"
                class="bg-transparent border border-white rounded-full px-20 py-3 focus:outline-none focus:ring-2"
                :class="{
                  'ring-red-500 border-red-500': errors.telefono,
                  'focus:ring-primary-color': !errors.telefono,
                }"
              />
              <p v-if="errors.telefono" class="text-red-500 text-sm mt-1">
                {{ errors.telefono }}
              </p>
            </div>
          </div>
          <div class="flex justify-between">
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
                <router-link to="#" class="text-bold">privacy policy</router-link>
              </label>
            </div>
            <p v-if="errors.privacyPolicy" class="text-red-500 text-sm mt-1">
              {{ errors.privacyPolicy }}
            </p>
            <div class="px-4">
              <Button type="submit" class="px-6 py-2"> Invia </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/global/Button.vue";
import { reactive } from "vue";

defineProps({
  ContactFormBg: String,
  contactFormTitle: String,
});

const form = reactive({
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  privacyPolicy: false,
});

const errors = reactive({
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  privacyPolicy: "",
});

const validateForm = () => {
  let isValid = true;

  errors.nome = "";
  errors.cognome = "";
  errors.email = "";
  errors.telefono = "";
  errors.privacyPolicy = "";

  if (!form.nome) {
    errors.nome = "Il nome è obbligatorio.";
    isValid = false;
  }

  if (!form.cognome) {
    errors.cognome = "Il cognome è obbligatorio.";
    isValid = false;
  }

  if (!form.email) {
    errors.email = "L'email è obbligatoria.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "L'email non è valida.";
    isValid = false;
  }

  if (!form.telefono) {
    errors.telefono = "Il telefono è obbligatorio.";
    isValid = false;
  }

  if (!form.privacyPolicy) {
    errors.privacyPolicy = "Devi accettare la privacy policy.";
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    console.log("Form submitted successfully:", form);
  }
};
</script>
