import PaymentConfigControl from "./PaymentConfigControl-BXnVyu_q.js";
import { c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-B_bwoT8t.js";
import "./QMarkupTable-GBm7hxEc.js";
import "./use-dark-DDE_KIFI.js";
import "./QCard-DTdwX5EV.js";
import "./QRadio-CNBtZ_VM.js";
import "./option-sizes-Bvq37fCe.js";
import "./use-key-composition-ihl9jEj-.js";
import "./QInput-DlBCoLND.js";
import "./QSelect-Bb6ZnWlZ.js";
import "./QItem-DFvPMMde.js";
import "./selection-CQJ5exgf.js";
import "./QDialog-C-Ls8xlu.js";
import "./use-timeout-megrCliV.js";
import "./notify-Cw4iG4uu.js";
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
