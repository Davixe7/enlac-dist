import { c as createComponent, h } from "./index-BtlleyNg.js";
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    const space = h("div", { class: "q-space" });
    return () => space;
  }
});
export {
  QSpace as Q
};
