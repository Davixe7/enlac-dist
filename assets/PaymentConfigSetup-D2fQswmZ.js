import { _ as _sfc_main$1 } from "./BeneficiaryProfile-C7FixCj_.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-DJY7L8Ju.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BkXhor46.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-BohS6BTj.js";
import "./QImg-F-gdIYyo.js";
import "./use-timeout-DaW3MBpA.js";
import "./candidate-store-3ok7-vWy.js";
import "./QInput-rhPFqdXf.js";
import "./use-key-composition-CfFXhD6z.js";
import "./use-dark-CRXm_J8x.js";
import "./QSelect-CHFKea7D.js";
import "./QItemLabel-CYfLSou4.js";
import "./selection-Bf8snFwk.js";
import "./QDialog-BWfG8-5J.js";
import "./QCheckbox-DTmIhu0A.js";
import "./use-checkbox-E5fsBQ_d.js";
import "./option-sizes-BK7oOCkP.js";
import "./QRadio-DjqyWwR0.js";
import "./QForm-BfS_welW.js";
import "./QCard-2LFzadz4.js";
import "./notify-Bp4QBAep.js";
import "./QFile-DV8vWUof.js";
const _hoisted_1 = { class: "row q-col-gutter-x-md" };
const _hoisted_2 = { class: "col-12 col-sm-6 col-md-3" };
const _hoisted_3 = { class: "col-12 col-sm-6 col-md-3" };
const _hoisted_4 = { class: "col-12 col-md-6" };
const _sfc_main = {
  __name: "PaymentConfigSetup",
  props: ["candidateId", "sponsorId"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1, { candidateId: __props.candidateId }, null, 8, ["candidateId"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(_sfc_main$2, { sponsorId: __props.sponsorId }, null, 8, ["sponsorId"])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createVNode(_sfc_main$3, {
            candidateId: __props.candidateId,
            sponsorId: __props.sponsorId,
            onSave: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push(`/beneficiarios/${__props.candidateId}/cuotas`))
          }, null, 8, ["candidateId", "sponsorId"])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
