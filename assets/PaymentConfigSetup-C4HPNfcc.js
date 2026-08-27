import { _ as _sfc_main$1 } from "./BeneficiaryProfile-B2KZbTmH.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-Dt-6KOlc.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-Pw98AKkV.js";
import { B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode } from "./index-CE1zmWGJ.js";
import "./QImg-DkFk-57C.js";
import "./QExpansionItem-By6SOGky.js";
import "./QItem-CeLkB8Sc.js";
import "./candidate-store-D6MFmrk-.js";
import "./notify-DYEQECtn.js";
import "./QSelect-l-CLCyhG.js";
import "./QChip-Dz88ilID.js";
import "./QMenu-DIfJt6Zs.js";
import "./position-engine-BOhbfp_x.js";
import "./selection-jvQtztp3.js";
import "./format-CnAOSoyw.js";
import "./QForm-BdpAeNjP.js";
import "./QFile-KcToxzSw.js";
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
