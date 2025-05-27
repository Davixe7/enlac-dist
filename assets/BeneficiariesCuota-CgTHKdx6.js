import { h as QDialog } from "./QSelect-CtZdKzvL.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BgLFTasG.js";
import _sfc_main$2 from "./SponsorForm-CV5WcaWf.js";
import { r as ref, j as onMounted, W as createElementBlock, J as openBlock, M as createVNode, K as withCtx } from "./index-cCQoerBE.js";
import "./use-key-composition-Cm9vnODB.js";
import "./use-dark-C8v3QwmZ.js";
import "./QItemLabel-BM-XPiQp.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./QCard-hZAF9mJo.js";
import "./QInput-BzETij5i.js";
import "./use-file-dom-props-DxWClpik.js";
import "./QRadio-CeSDzXzk.js";
import "./QCheckbox-BMrw9OGo.js";
import "./QForm-BEQZLlyt.js";
import "./notify-DMNPTzhM.js";
import "./axios-ByMy53kN.js";
import "./sponsor-store-DsYj0rME.js";
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
