import { Q as QPage } from "./QPage-Bk4uoDA0.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-YnBxhpjt.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-ByC9LpzG.js";
import "./QImg-CLOeK5NX.js";
import "./QExpansionItem-CBOEDKea.js";
import "./QItem--Axh1EJ1.js";
import "./candidate-store-COF2TvnU.js";
import "./notify-CW-opdH0.js";
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
