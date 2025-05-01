import { h as QDialog } from "./QSelect-C8uCeXfA.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-34PXSl7C.js";
import _sfc_main$2 from "./SponsorForm-BboUWs7Z.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx } from "./index-XVUxbwAj.js";
import "./use-key-composition-ByS6eEmN.js";
import "./use-dark-C0G2Ox9U.js";
import "./QItemLabel-DpR4ih5u.js";
import "./selection-CAbnqUsA.js";
import "./QCard-VE4ZT6YY.js";
import "./QInput-CT12m4wj.js";
import "./QRadio-BQKitX3d.js";
import "./QCheckbox-EsAyBKFH.js";
import "./QForm-Csrw8R4r.js";
import "./notify-BnGDOOzg.js";
import "./axios-BaazhBMR.js";
import "./sponsor-store-C8zEyrvV.js";
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
