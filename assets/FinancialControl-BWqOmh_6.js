import PaymentConfigControl from "./PaymentConfigControl-DPqLo51G.js";
import { B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode, t as withCtx, z as createTextVNode, M as resolveComponent, F as Fragment } from "./index-CtX55rPg.js";
import "./QMarkupTable-HtlB0vwn.js";
import "./QSelect-bgEQ-w_V.js";
import "./QChip-DUrZdEPF.js";
import "./QItem-BV49-FNi.js";
import "./QMenu-CT9hGhHI.js";
import "./position-engine-DMMaRPIq.js";
import "./selection-BmM1jSsC.js";
import "./format-CnAOSoyw.js";
import "./notify-CaqEAMwF.js";
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
