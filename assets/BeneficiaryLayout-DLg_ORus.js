import { Q as QPage } from "./QPage-D62swEBs.js";
import _sfc_main$1 from "./BeneficiaryProfile--8oS-iG-.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-DKrRlTZm.js";
import "./QImg-CIKfNVox.js";
import "./QExpansionItem-2CIi0O_l.js";
import "./QItem-B2NZIVVI.js";
import "./candidate-store-Bt7VnzqG.js";
import "./notify-DDWWrqfi.js";
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
