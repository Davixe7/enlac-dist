import { Q as QPage } from "./QPage-DX1kWiy7.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DyzODfR9.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CnS-WeK3.js";
import "./QImg-Cu2K6YV3.js";
import "./QExpansionItem-UCAlyCza.js";
import "./QItem-DX9D2juO.js";
import "./candidate-store-C94lLppO.js";
import "./notify-Bjd0fRPw.js";
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
