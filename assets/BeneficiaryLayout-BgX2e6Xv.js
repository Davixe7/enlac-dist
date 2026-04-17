import { Q as QPage } from "./QPage-ZNH3ZkwE.js";
import _sfc_main$1 from "./BeneficiaryProfile-DP3nYwAb.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-BIHzQJC2.js";
import "./QImg-B_NZEd8s.js";
import "./QExpansionItem-Bv0Vt5lt.js";
import "./QItem-BnaTGDRL.js";
import "./candidate-store-CCDy9kLs.js";
import "./notify-CHIasCgz.js";
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
