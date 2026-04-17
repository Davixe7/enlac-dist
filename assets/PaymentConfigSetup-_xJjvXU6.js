import _sfc_main$1 from "./BeneficiaryProfile-DP3nYwAb.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-i97AavCz.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-DPzWGJyu.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode } from "./index-BIHzQJC2.js";
import "./QImg-B_NZEd8s.js";
import "./QExpansionItem-Bv0Vt5lt.js";
import "./QItem-BnaTGDRL.js";
import "./candidate-store-CCDy9kLs.js";
import "./notify-CHIasCgz.js";
import "./date-O9F4qdZV.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-DC4TaHBg.js";
import "./QMenu-C_IZU81x.js";
import "./selection-uHMJWc11.js";
import "./QForm-8rzZg6Is.js";
import "./QFile-UV66D4kx.js";
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
