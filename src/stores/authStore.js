import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("auth_token") || null, 
    logoutTimer: null,
  }),

  actions: {
    login({ email, password }) {
      const dummyEmail = "user@example.com";
      const dummyPassword = "password123";

      if (email === dummyEmail && password === dummyPassword) {
        this.token = "k1x3f6bdi2x1692460148362";  
        localStorage.setItem("auth_token", this.token);  

        this.startAutoLogoutTimer(10); 
        return true;
      }
      return false;
    },

    logout() {
      this.token = null;
      localStorage.removeItem("auth_token");  

      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
      }
    },

    startAutoLogoutTimer(duration) {
      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
      }

      this.logoutTimer = setTimeout(() => {
        this.logout();
        console.log("Logged out automatically after inactivity.");
      }, duration);
    },
  },

  getters: {
    isAuthenticated: (state) => state.token !== null,
  },
});
