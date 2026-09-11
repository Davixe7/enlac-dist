import { Q as QPage } from "./QPage-B8NIn0Om.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DL2YsKr6.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CHo5VICr.js";
import "./QImg-BVjKVHAY.js";
import "./QExpansionItem-BvU7MpAr.js";
import "./QItem-CDM0OUtz.js";
import "./candidate-store-CV2ORgpf.js";
import "./notify-uWCQJ6k7.js";
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
