import { Q as QPage } from "./QPage-yY8iG7AG.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DhmRoiMH.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CKbYB40P.js";
import "./QImg-3iqZCxlN.js";
import "./QExpansionItem-DK6LD6Fg.js";
import "./QItem-CFEJs2Nw.js";
import "./candidate-store-DUGAd80G.js";
import "./notify-BnbxmtN1.js";
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
