import { h as QDialog } from "./QSelect-Dfccb1zM.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-Du1s77E1.js";
import _sfc_main$2 from "./SponsorForm-DUmhwXq4.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx } from "./index-DNzcpddl.js";
import "./use-key-composition-DOj7cCcL.js";
import "./use-dark-WkhccWQ1.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
import "./QCard-NmYyN4JG.js";
import "./QInput-uKsO-mcd.js";
import "./QRadio-B8b3MSsK.js";
import "./QCheckbox-DHyNCU4l.js";
import "./QForm-BbkqTju1.js";
import "./notify-ByjlCVX8.js";
import "./axios-rEY_Jecr.js";
import "./sponsor-store-DUUfqRc0.js";
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
