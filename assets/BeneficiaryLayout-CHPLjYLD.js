import { Q as QPage } from "./QPage-DiIAaO1c.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BhMWutJC.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-D0yVl0M9.js";
import "./QImg-DB7x9hf_.js";
import "./QExpansionItem-CsQa3Gsf.js";
import "./QItem-C8aOaOe3.js";
import "./candidate-store-CbhkRSuP.js";
import "./notify-Bax-TIrS.js";
const _sfc_main = {
  __name: "BeneficiaryLayout",
  props: {
    candidateId: { required: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(_sfc_main$1, {
            candidateId: __props.candidateId,
            class: "q-mb-lg"
          }, null, 8, ["candidateId"]),
          createVNode(_component_router_view)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
