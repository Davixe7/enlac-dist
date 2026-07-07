import { Q as QPage } from "./QPage-BZaRQ4v8.js";
import _sfc_main$1 from "./BeneficiaryProfile-BLmjoJr1.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-D6yGbtmC.js";
import "./QImg-CbQDF9ip.js";
import "./QExpansionItem-BikOy3Dr.js";
import "./QItem-wHrLANdD.js";
import "./candidate-store-q4Jrs6NG.js";
import "./notify-n2Z0CrY2.js";
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
