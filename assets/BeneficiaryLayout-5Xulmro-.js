import { Q as QPage } from "./QPage-BxyvOzV3.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-CZKNWQri.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-Ca5-ciyA.js";
import "./QImg-yiivFUzd.js";
import "./QExpansionItem-BOqS0G_x.js";
import "./QItem-C9mpBGOT.js";
import "./candidate-store-BDc3Tx_x.js";
import "./notify-dGu9DWRJ.js";
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
