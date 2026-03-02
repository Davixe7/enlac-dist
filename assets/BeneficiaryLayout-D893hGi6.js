import { Q as QPage } from "./QPage-DIqQpXat.js";
import _sfc_main$1 from "./BeneficiaryProfile-CSa0hTuM.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-Y0a2SGnG.js";
import "./QImg-DCvuMy7-.js";
import "./QExpansionItem-CYn3u7UD.js";
import "./QItem-DC2gNDJ1.js";
import "./candidate-store-Drbh0Znd.js";
import "./notify-B8FCsw9t.js";
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
