import { h as QDialog } from "./QSelect-Q3sOnmo4.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-KFv8s-b4.js";
import _sfc_main$2 from "./SponsorForm-Duz7lUTv.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx } from "./index-DU7WQZxj.js";
import "./use-key-composition-BKfn5I0Y.js";
import "./use-dark-C2VKfivn.js";
import "./QItemLabel-ppsdJfqW.js";
import "./selection-B9Xmlxbu.js";
import "./QCard-CAtQmdJv.js";
import "./QInput-DI708L3A.js";
import "./QRadio-DGx8yYLV.js";
import "./QCheckbox-BKzbuvUV.js";
import "./QForm-DjGdY2k_.js";
import "./notify-BGme3XVg.js";
import "./axios-eZUNxOzX.js";
import "./sponsor-store-BohvmO1m.js";
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
