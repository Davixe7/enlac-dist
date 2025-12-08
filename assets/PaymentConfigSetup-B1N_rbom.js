import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DEsjxvnJ.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-CyRx5bio.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-nsTn0thB.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-CZfpjTb1.js";
import "./QImg-BIQ-eBtz.js";
import "./QExpansionItem-CrO921IT.js";
import "./QItem-qDs-mvmR.js";
import "./candidate-store-_ZKwdN1E.js";
import "./notify-DMNQyKJ7.js";
import "./QSelect-mt_8PtyR.js";
import "./selection-BMmQbh7r.js";
import "./QForm-DJOlnfD5.js";
import "./QFile-D5-y3XzO.js";
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
