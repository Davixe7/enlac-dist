import { I as defineStore, l as api } from "./index-CZCe8xRO.js";
const useCategoryStore = defineStore("category", {
  state: () => ({
    category: null,
    categories: [],
    loading: false,
    defaultSearchParams: {
      base_only: null,
      name: null
    }
  }),
  actions: {
    async fetchCategories(params = this.defaultSearchParams) {
      try {
        this.loading = true;
        this.categories = (await api.get("plan_categories", { params })).data.data;
        return this.categories;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async getCategoryByName(name, base_only = 1) {
      if (this.categories.length == 0) {
        await this.fetchCategories({ base_only });
      }
      return this.categories.find((iCategory) => iCategory.name == name);
    }
  }
});
export {
  useCategoryStore as u
};
