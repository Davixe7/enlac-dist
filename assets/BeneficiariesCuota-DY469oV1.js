import { h as QDialog } from "./QSelect-gGbryZRL.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BiaXLVek.js";
import _sfc_main$2 from "./SponsorForm-E-z0ffKb.js";
import { r as ref, j as onMounted, U as createElementBlock, G as openBlock, K as createVNode, H as withCtx } from "./index-Do2UNGkK.js";
import "./use-key-composition-Cb3U_Tha.js";
import "./use-dark-DR5cwYKQ.js";
import "./QItemLabel-WLy9p-qo.js";
import "./selection-r0vkVvJb.js";
import "./use-timeout-CzOVVImI.js";
import "./QCard-DUVQfyQw.js";
import "./QInput-BgFiysGV.js";
import "./QRadio-CUireVVM.js";
import "./QCheckbox-DXE74Rqj.js";
import "./QForm-3KD2SpBK.js";
import "./notify-Bh-ZzP7n.js";
import "./axios--LrLQM_c.js";
import "./sponsor-store-AuREKALo.js";
const _sfc_main = {
  __name: "BeneficiariesCuota",
  props: ["candidateId", "sponsorId"],
  setup(__props) {
    const dialog = ref(false);
    onMounted(() => {
      console.log("Works!");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$1, {
          sponsorId: __props.sponsorId,
          candidateId: __props.candidateId,
          onRequestSponsor: _cache[0] || (_cache[0] = () => {
            dialog.value = true;
          })
        }, null, 8, ["sponsorId", "candidateId"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
