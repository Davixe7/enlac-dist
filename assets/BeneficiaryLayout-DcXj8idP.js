import { Q as QPage } from "./QPage-4x8FyvQG.js";
import _sfc_main$1 from "./BeneficiaryProfile-BwHuCE1d.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-BtlleyNg.js";
import "./QImg-0LiuKTR0.js";
import "./QExpansionItem-CD1U6xWM.js";
import "./QItem-BysEJ2EE.js";
import "./candidate-store-DgF_xVB_.js";
import "./notify-DLhM6q4g.js";
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
