import { Q as QPage } from "./QPage-DrhS5Iru.js";
import _sfc_main$1 from "./BeneficiaryProfile-0G6gMo2d.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-CrF4bxHZ.js";
import "./QImg-DusyACHo.js";
import "./QExpansionItem-BIcx_Uk-.js";
import "./QItem-HobJXZdD.js";
import "./candidate-store-Dk5_xf9E.js";
import "./notify-BOCa2Zwo.js";
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
