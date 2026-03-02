import { aj as mergeModels, a as computed, ak as useModel, H as createBlock, I as openBlock, J as withCtx, K as createVNode, _ as createBaseVNode, L as withDirectives, V as QBtn, Q as QIcon, aT as mergeProps, al as QInput } from "./index-Dr8uhl4A.js";
import { Q as QDate } from "./QDate-C4AC4Lyq.js";
import { Q as QPopupProxy } from "./QPopupProxy-DjTbUqa1.js";
import { C as ClosePopup } from "./ClosePopup-CEwmesbF.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row items-center justify-end" };
const _sfc_main = {
  __name: "EnlacDate",
  props: /* @__PURE__ */ mergeModels({
    outlined: Boolean,
    filled: {
      type: Boolean,
      default: true
    }
  }, {
    "modelValue": { type: String, default: "" },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const isFilled = computed(() => props.outlined ? false : props.filled);
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
        filled: isFilled.value,
        outlined: __props.outlined,
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
      }, 16, ["filled", "outlined", "modelValue"]);
    };
  }
};
export {
  _sfc_main as _
};
