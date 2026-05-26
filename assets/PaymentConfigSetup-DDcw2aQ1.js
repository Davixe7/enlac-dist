import _sfc_main$1 from "./BeneficiaryProfile-BwHuCE1d.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-CHJ3lUuP.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BatGola5.js";
import { O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode } from "./index-BtlleyNg.js";
import "./QImg-0LiuKTR0.js";
import "./QExpansionItem-CD1U6xWM.js";
import "./QItem-BysEJ2EE.js";
import "./candidate-store-DgF_xVB_.js";
import "./notify-DLhM6q4g.js";
import "./date-CqEQ1wlP.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-Br-RFt5-.js";
import "./QMenu-Df-u1lML.js";
import "./selection-8PfsjyT0.js";
import "./QForm-CdqJwVnc.js";
import "./QFile-6mgVEgTj.js";
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
