import { Q as QPage } from "./QPage-DFK4cQIA.js";
import _sfc_main$1 from "./BeneficiaryProfile-DYER2N5F.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-CL_-xYHm.js";
import "./QImg-yIi0VvTv.js";
import "./QExpansionItem-BCZihQy1.js";
import "./QItem-LSJnNv33.js";
import "./candidate-store-DAXmipSw.js";
import "./notify-BK0sYr0Z.js";
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
