import PaymentConfigControl from "./PaymentConfigControl-CDsXs67g.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-BXqY0shX.js";
import "./QMarkupTable-DkEupggY.js";
import "./use-dark-DjMuuakh.js";
import "./QCard-Ds7qAq6D.js";
import "./QRadio-qdcekmTp.js";
import "./option-sizes-CENjnHKS.js";
import "./use-key-composition-BKbfOFw1.js";
import "./QInput-D40gES8W.js";
import "./QSelect-IM5jyk2g.js";
import "./QItemLabel-tzmo7QJQ.js";
import "./selection-B--_r8qR.js";
import "./QDialog-oeqTLSLP.js";
import "./use-timeout-CrK4RhEz.js";
import "./notify-X3dm3duL.js";
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
