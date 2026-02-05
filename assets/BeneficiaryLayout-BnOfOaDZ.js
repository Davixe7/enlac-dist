import { Q as QPage } from "./QPage-CbXJqtYF.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DnWgku9g.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-CIixvMyj.js";
import "./QImg-D7-rAmf3.js";
import "./QExpansionItem-DqtJzx4w.js";
import "./QItem-DBnEobVN.js";
import "./candidate-store-BDEYAyhD.js";
import "./notify-ZDb5L8uG.js";
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
