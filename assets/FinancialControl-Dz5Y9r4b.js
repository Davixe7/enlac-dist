import PaymentConfigControl from "./PaymentConfigControl-DnFX8bhL.js";
import { O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode, I as withCtx, M as createTextVNode, Y as resolveComponent, P as Fragment } from "./index-CyP9JFdC.js";
import "./QMarkupTable-BBXZAxNg.js";
import "./QSelect-U0HMsLQF.js";
import "./QItem--cneNo7k.js";
import "./QMenu-Ci9jBKA2.js";
import "./selection-C2Qa576V.js";
import "./format-BC-UoHKJ.js";
import "./notify-BMqCstfe.js";
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
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title" }, "Tesorería / Control de Cuotas", -1)),
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
