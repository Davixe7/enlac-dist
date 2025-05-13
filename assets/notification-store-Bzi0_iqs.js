import { Y as defineStore } from "./index-DNzcpddl.js";
import { api } from "./axios-rEY_Jecr.js";
const useNotificationStore = defineStore("notification", {
  state: () => {
    return {
      loading: false,
      errors: {},
      notifications: []
    };
  },
  getters: {
    unreadNotificationsCount() {
      return this.notifications.filter(
        (notification) => notification.read_at == null
      ).length;
    }
  },
  actions: {
    async fetchNotifications() {
      this.notifications = (await api.get("notifications")).data.data;
    },
    async markAllAsRead() {
      await api.get("notifications/mark-all-read");
      this.notifications = this.notifications.map((notification) => ({
        ...notification,
        read_at: true
      }));
    }
  }
});
export {
  useNotificationStore as u
};
