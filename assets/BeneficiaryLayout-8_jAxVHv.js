import { Q as QPage } from "./QPage-LVtxJ0hY.js";
import _sfc_main$1 from "./BeneficiaryProfile-CdcM3oMM.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-jjbrZD2b.js";
import "./QImg-BntzgVKX.js";
import "./QExpansionItem-CAMgsm55.js";
import "./QItem-CueSYjnM.js";
import "./candidate-store-BFN6J_5V.js";
import "./notify--3o81CEj.js";
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
