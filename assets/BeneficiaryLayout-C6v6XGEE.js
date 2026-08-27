import { Q as QPage } from "./QPage-B4A0aiF4.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-Ddm5aF3w.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CUa4PFcQ.js";
import "./QImg-C-SMWXac.js";
import "./QExpansionItem-CrGRqtqM.js";
import "./QItem-DN4uMRfM.js";
import "./candidate-store-BuYhYyPg.js";
import "./notify-BIZRiP1H.js";
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
