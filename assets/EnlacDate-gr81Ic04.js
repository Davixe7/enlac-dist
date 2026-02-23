import { aF as useModel, A as computed, q as createBlock, a as openBlock, w as withCtx, d as createVNode, b as createBaseVNode, F as withDirectives, h as QBtn, k as QIcon, R as mergeProps, Q as QInput } from "./index-CrF4bxHZ.js";
import { Q as QDate } from "./QDate-B9IQ5j7B.js";
import { Q as QPopupProxy } from "./QPopupProxy-C4YhzFeU.js";
import { C as ClosePopup } from "./ClosePopup-DF4PLPjE.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row items-center justify-end" };
const _sfc_main = {
  __name: "EnlacDate",
  props: {
    "modelValue": { type: String, default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const limitToPast = (dateString) => {
      const dateToCheck = DateTime.fromFormat(dateString, "yyyy/MM/dd");
      const today = DateTime.now().startOf("day");
      return dateToCheck <= today;
    };
    const model = useModel(__props, "modelValue");
    const proxyModel = computed({
      get: () => model.value,
      set: (val) => {
        model.value = val;
      }
    });
    const dateDisplay = computed({
      get() {
        if (!model.value) return "";
        return DateTime.fromISO(model.value).toFormat("dd/MM/yyyy");
      },
      set(val) {
        if (!val || val.length < 10) return;
        const parsed = DateTime.fromFormat(val, "dd/MM/yyyy");
        if (parsed.isValid) {
          model.value = parsed.toISODate();
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QInput, mergeProps({
        filled: "",
        modelValue: dateDisplay.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dateDisplay.value = $event),
        mask: "##/##/####"
      }, _ctx.$attrs), {
        append: withCtx(() => [
          createVNode(QIcon, {
            name: "event",
            class: "cursor-pointer"
          }, {
            default: withCtx(() => [
              createVNode(QPopupProxy, {
                cover: "",
                "transition-show": "scale",
                "transition-hide": "scale"
              }, {
                default: withCtx(() => [
                  createVNode(QDate, {
                    modelValue: proxyModel.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => proxyModel.value = $event),
                    mask: "YYYY-MM-DD",
                    options: limitToPast
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, [
                        withDirectives(createVNode(QBtn, {
                          label: "Cerrar",
                          color: "primary",
                          flat: ""
                        }, null, 512), [
                          [ClosePopup]
                        ])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
};
export {
  _sfc_main as _
};
