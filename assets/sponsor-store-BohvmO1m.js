import { Y as defineStore } from "./index-DU7WQZxj.js";
import { api } from "./axios-eZUNxOzX.js";
import { n as notify } from "./notify-BGme3XVg.js";
const useSponsorStore = defineStore("sponsor", {
  state: () => ({
    loading: false,
    errors: {},
    sponsors: []
  }),
  actions: {
    async saveData(sponsor) {
      this.loading = true;
      try {
        let route = sponsor.id ? `/sponsors/${sponsor.id}` : "/sponsors";
        let data = sponsor.id ? { ...sponsor, _method: "PUT" } : { ...sponsor };
        let newSponsor = (await api.post(route, data)).data.data;
        if (!sponsor.id) {
          this.sponsors.push(newSponsor);
        } else {
          let index = this.sponsors.findIndex((i) => i.id == sponsor.id);
          this.sponsors.splice(index, 1, newSponsor);
        }
        notify.positive("Guardado con éxito");
      } catch (error) {
        console.log(error);
        this.errors = error.status == 422 ? error.formatted : {};
        notify.negative("No se pudo guardar");
      }
      this.loading = false;
    },
    async fetchSponsors() {
      try {
        this.loading = true;
        this.sponsors = (await api.get("sponsors")).data.data;
      } catch (error) {
        this.errors = error.status == 422 && error.formatted ? error.formatted : {};
      }
      this.loading = false;
    }
  }
});
export {
  useSponsorStore as u
};
