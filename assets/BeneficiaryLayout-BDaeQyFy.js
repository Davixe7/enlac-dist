import { Q as QPage } from "./QPage-DizCFH31.js";
import _sfc_main$1 from "./BeneficiaryProfile-BYgfSihH.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-C_pgiTRk.js";
import "./QImg-HgQaPOXN.js";
import "./QExpansionItem-BMH_wXA3.js";
import "./QItem-BDHnU4rl.js";
import "./candidate-store-By-g39go.js";
import "./notify-DEfCNxK_.js";
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
