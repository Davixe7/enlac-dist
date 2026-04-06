import { Q as QPage } from "./QPage-Df9taUdd.js";
import _sfc_main$1 from "./BeneficiaryProfile-m_3XLrRb.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-sn_6H7kT.js";
import "./QImg-CHyn-kpo.js";
import "./QExpansionItem-DLwF4Lky.js";
import "./QItem-HpGMm58B.js";
import "./candidate-store-Bug59H4P.js";
import "./notify-ZEsSXxmw.js";
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
