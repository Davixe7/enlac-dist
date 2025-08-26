import PaymentConfigControl from "./PaymentConfigControl-CyK30IAO.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-BohS6BTj.js";
import "./QMarkupTable-DsWzvl2S.js";
import "./use-dark-CRXm_J8x.js";
import "./QCard-2LFzadz4.js";
import "./QRadio-DjqyWwR0.js";
import "./option-sizes-BK7oOCkP.js";
import "./use-key-composition-CfFXhD6z.js";
import "./QInput-rhPFqdXf.js";
import "./QSelect-CHFKea7D.js";
import "./QItemLabel-CYfLSou4.js";
import "./selection-Bf8snFwk.js";
import "./QDialog-BWfG8-5J.js";
import "./use-timeout-DaW3MBpA.js";
import "./notify-Bp4QBAep.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "flex" };
const _sfc_main = {
  __name: "FinancialControl",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title" }, "Tesoreria / Control de Cuotas", -1)),
          createVNode(_component_router_link, {
            class: "q-mr-md q-ml-auto",
            to: `/tesoreria/${props.candidateId}/historial`
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Historial de pagos")
            ])),
            _: 1
          }, 8, ["to"]),
          createVNode(_component_router_link, { to: `/tesoreria` }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Regresar")
            ])),
            _: 1
          })
        ]),
        createVNode(PaymentConfigControl, {
          candidateId: props.candidateId
        }, null, 8, ["candidateId"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
