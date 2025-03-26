import { c as createComponent, q as computed, h, d as hSlot } from "./index-CZkFWdkm.js";
const QTr = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-tr" + (props.props === void 0 || props.props.header === true ? "" : " " + props.props.__trClass) + (props.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
  }
});
export {
  QTr as Q
};
