import { Q as QPage } from "./QPage-srRoTGYR.js";
import _sfc_main$1 from "./BeneficiaryProfile-DPLWVdoB.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-BZblXE-E.js";
import "./QImg-CiD-KrYE.js";
import "./QExpansionItem-BeZ5ME0-.js";
import "./QItem-6zJESPmB.js";
import "./candidate-store-xp0TtwFw.js";
import "./notify-Bf--eU2W.js";
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
