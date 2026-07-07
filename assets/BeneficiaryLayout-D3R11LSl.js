import { Q as QPage } from "./QPage-BNlFXyGl.js";
import _sfc_main$1 from "./BeneficiaryProfile-B6_KL6_K.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-D8dGxR_o.js";
import "./QImg-BVxkkgtJ.js";
import "./QExpansionItem-DrplAMFE.js";
import "./QItem-C80OgkSj.js";
import "./candidate-store-BD2-EgJ1.js";
import "./notify-BXzUQ3RT.js";
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
