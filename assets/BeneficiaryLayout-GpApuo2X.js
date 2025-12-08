import { Q as QPage } from "./QPage-DlaNt5hV.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-8qqFQ-1w.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-DnbucpnZ.js";
import "./QImg-BNkn-lX-.js";
import "./QExpansionItem-CO9DMf79.js";
import "./QItem-rJjzgen_.js";
import "./candidate-store-D2x1X7Sb.js";
import "./notify-ss2b1ea4.js";
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
