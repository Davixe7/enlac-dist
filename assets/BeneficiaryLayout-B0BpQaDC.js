import { Q as QPage } from "./QPage-jVkVV77P.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BCeQ_km5.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CtX55rPg.js";
import "./QImg-DFTTGmkE.js";
import "./QExpansionItem-yoGo5_rP.js";
import "./QItem-BV49-FNi.js";
import "./candidate-store-B4t81nwY.js";
import "./notify-CaqEAMwF.js";
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
