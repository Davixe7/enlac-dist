import PaymentConfigControl from "./PaymentConfigControl-Bfn20bK9.js";
import { B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode, t as withCtx, z as createTextVNode, M as resolveComponent, F as Fragment } from "./index-CUa4PFcQ.js";
import "./QMarkupTable-AhtL3pNF.js";
import "./QSelect-BfJQYCtT.js";
import "./QChip-NUOlNc53.js";
import "./QItem-DN4uMRfM.js";
import "./QMenu-xTmjVZlF.js";
import "./position-engine-B-CHZPXC.js";
import "./selection-BEkjxQeg.js";
import "./format-CnAOSoyw.js";
import "./notify-BIZRiP1H.js";
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
