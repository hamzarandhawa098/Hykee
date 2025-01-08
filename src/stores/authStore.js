import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("auth_token") || null,
    logoutTimer: null,
    users: [
      {
        email: "user@example.com",
        password: "password123",
      },
      {
        email: "admin@example.com",
        password: "admin456",
      },
    ], 
  }),

  actions: {
    /**
     * @param {string} email
     * @returns {boolean} 
     */
    checkEmail(email) {
      return this.users.some((user) => user.email === email);
    },

    /**
     * @param {object} credentials 
     * @param {string} credentials.email 
     * @param {string} credentials.password
     * @returns {boolean} 
     */
    login({ email, password }) {
      const user = this.users.find((user) => user.email === email);

      if (user && user.password === password) {
        this.token = "k1x3f6bdi2x1692460148362"; 
        localStorage.setItem("auth_token", this.token);

        this.startAutoLogoutTimer(100000); 
        return true;
      }

      return false;
    },

    /**
     */
    logout() {
      this.token = null;
      localStorage.removeItem("auth_token");

      if (this.logoutTimer) {
        clearTimeout(this.logoutTimer);
        this.logoutTimer = null;
      }
    },

    /**
     * @param {number} duration 
     */
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
    /**
     * @param {object} state
     * @returns {boolean} 
     */
    isAuthenticated: (state) => state.token !== null,
  },
});
