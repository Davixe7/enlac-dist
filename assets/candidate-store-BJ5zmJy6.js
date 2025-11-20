import { I as defineStore, k as api } from "./index-Dk-vfK7v.js";
import { n as notify } from "./notify-qwVxQIpJ.js";
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
    requires_transport: false,
    transport_address: null,
    transport_location_link: null,
    curp: null,
    onboard_at: null,
    loading: false,
    contacts: [],
    contact: null,
    picture: null,
    evaluation_schedule: null,
    interviewee: {},
    program: null,
    medications: [],
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
        this.loading = false;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async updateTransport(payload) {
      return api.put(`/transport/${this.id}`, payload);
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
    },
    async cancelTransport() {
      try {
        this.loading = true;
        await api.post(`transport/${this.id}`, { _method: "DELETE" });
        notify.positive("Datos de transporte actualizados.");
      } catch (error) {
        console.log(error);
        notify.negative("Error al actualizar datos de transporte.");
      } finally {
        this.loading = false;
      }
    }
  }
});
export {
  useCandidateStore as u
};
