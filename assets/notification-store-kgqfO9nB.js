import { a1 as defineStore } from "./index-CdGmwL0l.js";
import { api } from "./axios-D8J8w8EI.js";
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
