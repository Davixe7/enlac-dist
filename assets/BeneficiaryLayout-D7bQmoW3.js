import { Q as QPage } from "./QPage-DA4gbVsy.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-A9cNfEGk.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-Vw2bamBz.js";
import "./QImg-D-CG_R_3.js";
import "./QExpansionItem-0mZUKBp7.js";
import "./QItem-BqzxJWRl.js";
import "./candidate-store-CAsBHsk9.js";
import "./notify-D13hz_p5.js";
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
