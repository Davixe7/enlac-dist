import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DyzODfR9.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-B72JiPvx.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BxHGOSou.js";
import { B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode } from "./index-CnS-WeK3.js";
import "./QImg-Cu2K6YV3.js";
import "./QExpansionItem-UCAlyCza.js";
import "./QItem-DX9D2juO.js";
import "./candidate-store-C94lLppO.js";
import "./notify-Bjd0fRPw.js";
import "./QSelect-DXvU-ucL.js";
import "./QChip-ThYbqGlC.js";
import "./QMenu-tq1EQicO.js";
import "./position-engine-B1SmjE0k.js";
import "./selection-bb_rJf9a.js";
import "./format-CnAOSoyw.js";
import "./QForm-lV5U506i.js";
import "./QFile-CXoOxUmf.js";
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
