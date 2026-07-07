import { Q as QPage } from "./QPage-C8CB305j.js";
import _sfc_main$1 from "./BeneficiaryProfile-DkZZXNs-.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-Lpbv6tCz.js";
import "./QImg-Dg3-E4FR.js";
import "./QExpansionItem-B0eFPBRc.js";
import "./QItem-hGGqEP0j.js";
import "./candidate-store-DCmh2JEQ.js";
import "./notify-DG_2rm3w.js";
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
