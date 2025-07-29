import PaymentConfigControl from "./PaymentConfigControl-Rhybjday.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-Bw7koZRs.js";
import "./QMarkupTable-CnTuEiS2.js";
import "./use-dark-QoPeQzjR.js";
import "./QCard-Uo2azhKQ.js";
import "./QRadio-DqM-ahtL.js";
import "./option-sizes-B9ECE9ZJ.js";
import "./use-key-composition-CcNkFKJ3.js";
import "./QInput-DpLq7x8-.js";
import "./QSelect-BpBR3LGj.js";
import "./QItemLabel-DAkXD4my.js";
import "./selection-CHZ-_4p5.js";
import "./QDialog-DifZ5hVn.js";
import "./use-timeout-CgolyZjO.js";
import "./notify-DvT-hOLo.js";
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
