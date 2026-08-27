import { Q as QPage } from "./QPage-DTnmuxcE.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-CLWxXLiT.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-wM11jDk3.js";
import "./QImg-DtSew6Ob.js";
import "./QExpansionItem-C1dSgsa5.js";
import "./QItem-ouM2WTqi.js";
import "./candidate-store-DShWqLSW.js";
import "./notify-CdEneTud.js";
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
