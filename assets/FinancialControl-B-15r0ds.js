import PaymentConfigControl from "./PaymentConfigControl-L6mHzY33.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode, J as withCtx, N as createTextVNode, Z as resolveComponent, R as Fragment } from "./index-BIHzQJC2.js";
import "./QMarkupTable-D3_THBI7.js";
import "./QSelect-DC4TaHBg.js";
import "./QItem-BnaTGDRL.js";
import "./QMenu-C_IZU81x.js";
import "./selection-uHMJWc11.js";
import "./format-BC-UoHKJ.js";
import "./notify-CHIasCgz.js";
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
