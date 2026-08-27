import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DhmRoiMH.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-BkgpfERX.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-CqrrjyyI.js";
import { B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode } from "./index-CKbYB40P.js";
import "./QImg-3iqZCxlN.js";
import "./QExpansionItem-DK6LD6Fg.js";
import "./QItem-CFEJs2Nw.js";
import "./candidate-store-DUGAd80G.js";
import "./notify-BnbxmtN1.js";
import "./QSelect-CRWVdTzU.js";
import "./QChip-C7aczF42.js";
import "./QMenu-onc-S44f.js";
import "./position-engine-DlA4O3Ti.js";
import "./selection-BIEcezoc.js";
import "./format-CnAOSoyw.js";
import "./QForm-FczhIUg0.js";
import "./QFile-Cs716rDs.js";
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
