import { Q as QPage } from "./QPage-LP40HHHE.js";
import _sfc_main$1 from "./BeneficiaryProfile-DBcEvKAv.js";
import { H as createBlock, I as openBlock, J as withCtx, K as createVNode, Z as resolveComponent } from "./index-B7OyGCt5.js";
import "./QImg-PIR1Phok.js";
import "./QExpansionItem-BfP3c0sf.js";
import "./QItem-STjM8B37.js";
import "./candidate-store-DaU8GWvh.js";
import "./notify-h311gLRe.js";
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
