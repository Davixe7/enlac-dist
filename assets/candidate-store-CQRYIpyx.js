import { I as defineStore, l as api } from "./index-CZCe8xRO.js";
import { n as notify } from "./notify-BqysXg7-.js";
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
    entry_date: null,
    loading: false,
    contacts: [],
    contact: null,
    picture: null,
    evaluation_schedule: null,
    interviewee: {},
    program: null,
    medications: [],
    requires_transport: 0,
    location_detail: {
      id: null,
      transport_address: "",
      transport_location_link: "",
      curp: ""
    },
    enrollment: {},
    enrollments: [],
    equinetherapy_permission_medical: 0,
    equinetherapy_permission_legal_guardian: 0,
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
        this.location_id = data.location_id;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async saveLocation(payload) {
      try {
        let route = payload.id ? `candidate_locations/${payload.id}` : `candidate_locations`;
        let data = payload.id ? { ...payload, _method: "PUT" } : { ...payload };
        this.location_detail = (await api.post(route, data)).data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteLocation() {
      try {
        if (!this.location_detail || !this.location_detail.id) return;
        this.location_detail = (await api.delete(`candidate_locations/${this.location_detail.id}`)).data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateEquineTherapyPermission(payload) {
      try {
        this.loading = true;
        await api.put(`/beneficiaries/${this.id}/equinetherapy`, payload);
        notify.positive("Permisos de equinoterapia actualizados.");
      } catch (error) {
        notify.negative("Error al actualizar permisos de equinoterapia.");
        throw Error(error);
      } finally {
        this.loading = false;
      }
    }
  }
});
export {
  useCandidateStore as u
};
