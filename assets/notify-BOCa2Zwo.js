import { aJ as Notify } from "./index-CrF4bxHZ.js";
const notify = {
  positive(caption) {
    Notify.create({
      icon: "check_circle",
      iconColor: "positive",
      position: "bottom",
      timeout: 3e3,
      caption
    });
  },
  negative(caption) {
    Notify.create({
      icon: "warning",
      iconColor: "negative",
      position: "bottom",
      timeout: 3e3,
      caption
    });
  },
  info(caption) {
    Notify.create({
      icon: "info",
      iconColor: "positive",
      position: "bottom",
      timeout: 3e3,
      caption
    });
  },
  warning(caption) {
    Notify.create({
      color: "warning",
      icon: "priority_high",
      position: "bottom",
      timeout: 3e3,
      caption
    });
  }
};
export {
  notify as n
};
