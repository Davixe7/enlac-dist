import PaymentConfigControl from "./PaymentConfigControl-6b_ikUSp.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-SPihmL4j.js";
import "./QMarkupTable-ArqECrZD.js";
import "./use-dark-BzDTrRl4.js";
import "./QCard-BH9zYwWL.js";
import "./QRadio-BnMFhbos.js";
import "./option-sizes-TwU3Ft3M.js";
import "./use-key-composition-DUFFmK9W.js";
import "./QInput-DV-Rfkou.js";
import "./QSelect-BwWblSDD.js";
import "./QItemLabel-D_0HnZj_.js";
import "./selection-DRsVDt-b.js";
import "./QDialog-y9E-04rI.js";
import "./use-timeout-xVUlrfQi.js";
import "./notify-BUfyFQf6.js";
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
