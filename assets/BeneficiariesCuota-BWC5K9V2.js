import { h as QDialog } from "./QSelect-Dw9jouLP.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-C7P7PjGL.js";
import _sfc_main$2 from "./SponsorForm-OeckF7ro.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx } from "./index-VJVtHb4i.js";
import "./use-key-composition-DoKllCYK.js";
import "./use-dark-DYVVyhjM.js";
import "./QItemLabel-JKpEpf5_.js";
import "./selection-BPWdDBn3.js";
import "./QCard-IbRGW94K.js";
import "./QInput-C8-EAPmV.js";
import "./QRadio-DqXGw0zM.js";
import "./QCheckbox-D1Zqx8H0.js";
import "./QForm-B1Ir1lx0.js";
import "./notify-DX5pIhuI.js";
import "./axios-BgrPseWt.js";
import "./sponsor-store-DCJvZY9Y.js";
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
