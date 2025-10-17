import { A as defineStore, i as api } from "./index-B_bwoT8t.js";
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
    chronological_age2: null,
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
    medications: [],
    group_id: null,
    errors: {}
  }),
  actions: {
    async fetchCandidate(type = "candidate") {
      if (!this.id) return;
      try {
        this.loading = true;
        let route = type == "candidate" ? `candidates/${this.id}` : `beneficiaries/${this.id}`;
        let data = (await api.get(route)).data.data;
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
