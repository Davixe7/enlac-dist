import { Q as QPage } from "./QPage-CTQQJjx9.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-B2KZbTmH.js";
import { q as createBlock, s as openBlock, t as withCtx, v as createVNode, M as resolveComponent } from "./index-CE1zmWGJ.js";
import "./QImg-DkFk-57C.js";
import "./QExpansionItem-By6SOGky.js";
import "./QItem-CeLkB8Sc.js";
import "./candidate-store-D6MFmrk-.js";
import "./notify-DYEQECtn.js";
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
