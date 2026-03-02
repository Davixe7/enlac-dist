import { Q as QPage } from "./QPage-BfMx99W6.js";
import _sfc_main$1 from "./BeneficiaryProfile-Btpp6j6q.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-Dr8uhl4A.js";
import "./QImg-CVnAFh8i.js";
import "./QExpansionItem-Do7ob-rQ.js";
import "./QItem-XQlagMDu.js";
import "./candidate-store-72OQaKFT.js";
import "./notify-Cl6MN3dZ.js";
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
