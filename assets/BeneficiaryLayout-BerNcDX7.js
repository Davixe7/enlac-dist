import { Q as QPage } from "./QPage-8W8pgweH.js";
import _sfc_main$1 from "./BeneficiaryProfile-96hhvCET.js";
import { G as createBlock, H as openBlock, I as withCtx, J as createVNode, Y as resolveComponent } from "./index-7AOIawlZ.js";
import "./QImg-6879-71p.js";
import "./QExpansionItem-BTB7ryII.js";
import "./QItem-CANGy5CK.js";
import "./candidate-store-BfGh7qWA.js";
import "./notify-CPeSi7Xy.js";
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
