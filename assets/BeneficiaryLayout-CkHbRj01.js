import { Q as QPage } from "./QPage-CVA-KSVe.js";
import _sfc_main$1 from "./BeneficiaryProfile-BxHDMqq6.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-73seMa9c.js";
import "./QImg-ByYKIFE6.js";
import "./QExpansionItem-BGfvCx58.js";
import "./QItem-BL3QQOOm.js";
import "./candidate-store-Dr0LGjAO.js";
import "./notify-CI1eDtFr.js";
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
