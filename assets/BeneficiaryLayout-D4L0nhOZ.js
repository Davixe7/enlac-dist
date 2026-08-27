import { Q as QPage } from "./QPage-5WLcGYGT.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-B7xuqmOl.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-DPs1zKRF.js";
import "./QImg-C9nJDA2r.js";
import "./QExpansionItem-Rp_d_auI.js";
import "./QItem-alNvM6f-.js";
import "./candidate-store-CmBOzidk.js";
import "./notify-DADgrWRd.js";
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
