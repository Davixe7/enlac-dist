import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DnWgku9g.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-Ct4II_sS.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-DJSvPzrW.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-CIixvMyj.js";
import "./QImg-D7-rAmf3.js";
import "./QExpansionItem-DqtJzx4w.js";
import "./QItem-DBnEobVN.js";
import "./candidate-store-BDEYAyhD.js";
import "./notify-ZDb5L8uG.js";
import "./QSelect-CUr3bFcr.js";
import "./selection-DNuwEDNn.js";
import "./QForm-BPiQZ_Ld.js";
import "./QFile-BBofBKLI.js";
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
