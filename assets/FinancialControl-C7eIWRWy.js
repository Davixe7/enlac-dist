import PaymentConfigControl from "./PaymentConfigControl-DdIPMCcq.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-C2KXjwrR.js";
import "./QMarkupTable-DClwcSyL.js";
import "./use-dark-BFshqYza.js";
import "./QCard-CI6b1UjI.js";
import "./QRadio-_wj-w-mt.js";
import "./option-sizes-DU4gasAy.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./QInput-C-mtqO6Q.js";
import "./QSelect-BuVzIreX.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./QDialog-CDPZ16vR.js";
import "./use-timeout-C7Vsd41J.js";
import "./notify-3cR8ls6a.js";
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
