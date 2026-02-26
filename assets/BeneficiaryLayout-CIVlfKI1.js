import { Q as QPage } from "./QPage-DLLies9N.js";
import _sfc_main$1 from "./BeneficiaryProfile-BTtdpHAy.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-Bj0d6EJy.js";
import "./QImg-CcezxwFy.js";
import "./QExpansionItem-PzGICphl.js";
import "./QItem-BdujNBmC.js";
import "./candidate-store-CDD5O5O6.js";
import "./notify-DSQRBAOh.js";
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
