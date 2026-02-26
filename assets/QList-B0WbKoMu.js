import { v as createComponent, x as useDarkProps, z as useDark, y as getCurrentInstance, A as computed, B as h, C as hSlot } from "./index-Bj0d6EJy.js";
const roleAttrExceptions = ["ul", "ol"];
const QList = createComponent({
  name: "QList",
  props: {
    ...useDarkProps,
    bordered: Boolean,
    dense: Boolean,
    separator: Boolean,
    padding: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const role = computed(
      () => roleAttrExceptions.includes(props.tag) ? null : "list"
    );
    const classes = computed(
      () => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : "")
    );
    return () => h(props.tag, { class: classes.value, role: role.value }, hSlot(slots.default));
  }
});
export {
  QList as Q
};
