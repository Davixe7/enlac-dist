import { $ as defineStore } from "./index-DqQk-fWJ.js";
import { api } from "./axios-fPsnLTf7.js";
const useAuthStore = defineStore("auth", {
  state: () => {
    let url = new URL(api.defaults.baseURL).origin;
    return {
      loading: false,
      errors: {},
      baseUrl: url,
      data: {}
    };
  },
  actions: {
    async csrfCookie() {
      await api.get(`${this.baseUrl}/sanctum/csrf-cookie`);
    },
    async attemptLogout() {
      await api.post(`${this.baseUrl}/logout`);
      this.router.push("login");
    },
    async attemptLogin(data) {
      try {
        this.loading = true;
        await api.post(`${this.baseUrl}/login`, data);
        this.router.push("home");
      } catch (error) {
        if (error.status == 422) {
          this.errors = {
            email: "Nombre de usuario o contrasenia incorrectos"
          };
        }
      }
      this.loading = false;
    },
    async fetchUser() {
      this.data.user = (await api.get("user")).data.data;
    }
  }
});
export {
  useAuthStore as u
};
