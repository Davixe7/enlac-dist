import { Q as QPage } from "./QPage-ByUg_F05.js";
import { api } from "./axios-DnBXXbR5.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BAM_O7FW.js";
import { r as ref, o as onMounted, j as createBlock, w as withCtx, f as resolveComponent, a as openBlock, d as createVNode } from "./index-BKlFzi9U.js";
import "./QImg-BHpEaJZk.js";
import "./use-timeout-GW2bv9wv.js";
import "./candidate-store-c63mDLc6.js";
const _sfc_main = {
  __name: "BeneficiaryLayout",
  props: {
    candidateId: { required: true }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const candidate = ref({});
    onMounted(async () => {
      try {
        loading.value = true;
        candidate.value = (await api.get(`/candidates/${props.candidateId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    });
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
