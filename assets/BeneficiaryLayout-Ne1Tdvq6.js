import { Q as QPage } from "./QPage-BG0Lx9ix.js";
import _sfc_main$1 from "./BeneficiaryProfile-CEqtFXTA.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-CZ0dY6Fq.js";
import "./QImg-u9OOrRwI.js";
import "./QExpansionItem-BZV1BKyG.js";
import "./QItem-B_syubG1.js";
import "./candidate-store-BF7llngL.js";
import "./notify-wpUyCu9G.js";
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
