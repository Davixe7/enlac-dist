import { Q as QPage } from "./QPage-gdN3Nbwe.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-C-6LnmTc.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-CnPCrPcs.js";
import "./QImg-YGiRXtAr.js";
import "./QExpansionItem-CiSVY7DL.js";
import "./QItem-Ce5rFAfg.js";
import "./candidate-store-DkkgXyHj.js";
import "./notify-CvtyHu7z.js";
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
