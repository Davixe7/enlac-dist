import { Q as QPage } from "./QPage-DsRZstmU.js";
import _sfc_main$1 from "./BeneficiaryProfile-BKvV2_sV.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-BZ01KtdN.js";
import "./QImg-Bz_eARvO.js";
import "./QExpansionItem-CjJnRzmm.js";
import "./QItem-DQq-9vA7.js";
import "./candidate-store-DK9qkKlF.js";
import "./notify-DaUGVOTv.js";
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
