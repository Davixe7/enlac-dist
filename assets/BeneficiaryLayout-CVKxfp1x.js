import { Q as QPage } from "./QPage-BMIwFIc3.js";
import _sfc_main$1 from "./BeneficiaryProfile-CgqcCI-S.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-CZCe8xRO.js";
import "./QImg-B_-JbdjU.js";
import "./QExpansionItem-g5Y3gt1Y.js";
import "./QItem-C0btFpr9.js";
import "./candidate-store-CQRYIpyx.js";
import "./notify-BqysXg7-.js";
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
