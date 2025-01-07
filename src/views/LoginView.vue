<template>
  <div class="relative min-h-screen flex items-center justify-center">
    <img
      :src="LoginBackground"
      alt="Background"
      class="absolute w-full h-full object-cover pointer-events-none -z-[1]"
    />
    <div
      class="relative flex flex-col h-auto items-center justify-center max-w-[847px] mx-auto backdrop-blur-[34px] bg-login-bg p-8 rounded-[19px] w-full"
    >
      <div class="mt-[35px]">
        <Logo />
      </div>
      <div class="max-w-[349px] mx-auto w-full mt-6 mb-[100px]">
        <h1
          class="text-center font-poppins text-white text-[25px] leading-[37.5px] font-bold"
        >
          Welcome to Hykee
        </h1>
        <p
          class="text-center mt-[4px] text-sm font-normal font-poppins leading-[21px] text-white"
        >
          Already have an account?
          <a href="#" class="text-primary-color underline underline-offset-2"
            >Log in</a
          >
        </p>
        <form @submit.prevent="handleLogin" class="mt-[54px]">
          <div class="mb-[35px] space-y-[17px]">
            <div>
              <label
                for="email"
                class="block mb-[15px] text-sm font-poppins font-normal text-white leading-[21.33px]"
                >Email</label
              >
              <input
                id="email"
                type="email"
                v-model="email"
                placeholder="Enter your email"
                class="block px-5 w-full h-[53px]  xl:w-[349px] bg-card-button-active text-white border border-primary-color rounded-[5px]"
              />
              <p v-if="emailError" class="text-red-500 text-xs mt-1">
                {{ emailError }}
              </p>
            </div>
            <div>
              <label
                for="password"
                class="block mb-[15px] text-sm font-poppins font-normal text-white leading-[21.33px]"
                >Password</label
              >
              <input
                id="password"
                type="password"
                v-model="password"
                placeholder="Enter your password"
                class="block px-5 h-[53px] w-full xl:w-[349px] bg-card-button-active text-white border border-primary-color rounded-[5px]"
              />
              <p v-if="passwordError" class="text-red-500 text-xs mt-1">
                {{ passwordError }}
              </p>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              class="w-full py-[14px] px-[153px]"
              :disabled="!isFormValid"
            >
              Login
            </Button>
          </div>
          <p v-if="formError" class="text-red-500 text-xs mt-4 text-center">
            {{ formError }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "vue-router";
import LoginBackground from "@/assets/images/LoginBackground.png";
import Button from "@/components/global/Button.vue";
import Logo from "@/components/icons/Logo.vue";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const formError = ref("");

const emailError = computed(() => {
  if (!email.value) return "Email is required.";
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value))
    return "Enter a valid email address.";
  return null;
});

const passwordError = computed(() => {
  if (!password.value) return "Password is required.";
  if (password.value.length < 6)
    return "Password must be at least 6 characters.";
  return null;
});

const isFormValid = computed(() => !emailError.value && !passwordError.value);

const handleLogin = async () => {
  formError.value = ""; 

  if (!isFormValid.value) {
    formError.value = "Please fill in all fields correctly.";
    return;
  }

  const isAuthenticated = await authStore.login({
    email: email.value,
    password: password.value,
  });

  if (isAuthenticated) {
    router.push("/dashboard");
  } else {
    formError.value = "Invalid email or password.";
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
