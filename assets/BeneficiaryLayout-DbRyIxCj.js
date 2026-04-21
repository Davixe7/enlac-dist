import { Q as QPage } from "./QPage-C92FJNCO.js";
import _sfc_main$1 from "./BeneficiaryProfile-CAZQLjUd.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-BM0NNqhD.js";
import "./QImg-BxVzKoB3.js";
import "./QExpansionItem-gpPYS5dN.js";
import "./QItem-m4PJG8l-.js";
import "./candidate-store-CNX2SKE-.js";
import "./notify-BGKvYJO9.js";
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
