import { y as defineStore } from "./index-D6w-cXuQ.js";
import { api } from "./axios-DOaUvPJw.js";
const useCandidateStore = defineStore("candidate", {
  state: () => ({
    id: null,
    full_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: null,
    age: null,
    chronological_age: null,
    diagnosis: "",
    info_channel: null,
    sheet: 1,
    onboard_at: null,
    loading: false,
    contacts: [],
    contact: null,
    picture: null,
    evaluation_schedule: null,
    interviewee: {},
    program: null,
    errors: {}
  }),
  actions: {
    async fetchCandidate() {
      if (!this.id) return;
      try {
        this.loading = true;
        let data = (await api.get(`candidates/${this.id}`)).data.data;
        this.$patch(data);
        this.loading = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
  }
});
export {
  useCandidateStore as u
};
