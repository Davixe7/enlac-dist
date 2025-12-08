import { Q as QPage } from "./QPage-c9gU1vOU.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DEsjxvnJ.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-CZfpjTb1.js";
import "./QImg-BIQ-eBtz.js";
import "./QExpansionItem-CrO921IT.js";
import "./QItem-qDs-mvmR.js";
import "./candidate-store-_ZKwdN1E.js";
import "./notify-DMNQyKJ7.js";
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
