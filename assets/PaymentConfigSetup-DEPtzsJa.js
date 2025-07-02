import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BAM_O7FW.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-muXeOPro.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BwlleC49.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-BKlFzi9U.js";
import "./QImg-BHpEaJZk.js";
import "./use-timeout-GW2bv9wv.js";
import "./candidate-store-c63mDLc6.js";
import "./axios-DnBXXbR5.js";
import "./QInput-Cl4GFezJ.js";
import "./use-key-composition-Cryiiwp5.js";
import "./use-dark-hk5G9xUE.js";
import "./QSelect-DKl0wMy2.js";
import "./QItemLabel-TX7ESzio.js";
import "./selection-C0xLdPSq.js";
import "./QDialog-dSz5pi_j.js";
import "./QCheckbox-s2Kvsmmx.js";
import "./option-sizes-CfP0-6il.js";
import "./QRadio-CaSQ0QVf.js";
import "./QForm-P-BH0S5t.js";
import "./QCard-ChwXMyjm.js";
import "./notify-DpPex7WU.js";
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
