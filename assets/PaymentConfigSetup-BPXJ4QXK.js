import _sfc_main$1 from "./BeneficiaryProfile-DBcEvKAv.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-DYbbVmSK.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-DzhoYklD.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode } from "./index-B7OyGCt5.js";
import "./QImg-PIR1Phok.js";
import "./QExpansionItem-BfP3c0sf.js";
import "./QItem-STjM8B37.js";
import "./candidate-store-DaU8GWvh.js";
import "./notify-h311gLRe.js";
import "./date-CdxuJpYY.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-D3ZWtIlV.js";
import "./QMenu-BqP-P0xG.js";
import "./selection-CuzV8dlV.js";
import "./QForm-fVHi4KNM.js";
import "./QFile-BF01x-HK.js";
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
