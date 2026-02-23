import { Q as QPage } from "./QPage-D4Cnf6sh.js";
import _sfc_main$1 from "./BeneficiaryProfile-C8a7OTBR.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-vLy8_pvK.js";
import "./QImg-BsDuirIh.js";
import "./QExpansionItem-DAUJgYnG.js";
import "./QItem-CygvGfQx.js";
import "./candidate-store-D1lGpj5O.js";
import "./notify-DeHCx5VC.js";
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
