import { Q as QPage } from "./QPage-ofY8DUkS.js";
import _sfc_main$1 from "./BeneficiaryProfile-V_WmvDZI.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-CyP9JFdC.js";
import "./QImg-eZ1t2aDI.js";
import "./QExpansionItem-CAMEvD9y.js";
import "./QItem--cneNo7k.js";
import "./candidate-store-CA37mEeZ.js";
import "./notify-BMqCstfe.js";
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
