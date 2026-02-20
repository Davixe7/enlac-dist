import { Q as QPage } from "./QPage-CwkgH55g.js";
import _sfc_main$1 from "./BeneficiaryProfile-H7wu49h5.js";
import { q as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-BMx8ZhBX.js";
import "./QImg-_vY6cqeF.js";
import "./QExpansionItem-bRhJMLWv.js";
import "./QItem-Br0oypuR.js";
import "./candidate-store-BuduI226.js";
import "./notify-DbcNKswI.js";
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
