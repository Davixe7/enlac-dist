import _sfc_main$1 from "./BeneficiaryProfile-m_3XLrRb.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-o8dPjCMD.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-ZAzvrehW.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode } from "./index-sn_6H7kT.js";
import "./QImg-CHyn-kpo.js";
import "./QExpansionItem-DLwF4Lky.js";
import "./QItem-HpGMm58B.js";
import "./candidate-store-Bug59H4P.js";
import "./notify-ZEsSXxmw.js";
import "./date-DexfeD65.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-2cph_QJY.js";
import "./QMenu-BOREoGHl.js";
import "./selection-fWkXqno_.js";
import "./QForm-MY8GSPaN.js";
import "./QFile-DH9b5NU5.js";
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
