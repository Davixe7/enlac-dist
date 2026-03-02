import _sfc_main$1 from "./BeneficiaryProfile-DYER2N5F.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-D7IxeIDi.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-CDiJ8pvp.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode } from "./index-CL_-xYHm.js";
import "./QImg-yIi0VvTv.js";
import "./QExpansionItem-BCZihQy1.js";
import "./QItem-LSJnNv33.js";
import "./candidate-store-DAXmipSw.js";
import "./notify-BK0sYr0Z.js";
import "./QSelect-D5eEeIlb.js";
import "./QMenu-DOwcDRWH.js";
import "./selection-BVqSG1Df.js";
import "./format-BC-UoHKJ.js";
import "./QForm-CrVAQV4X.js";
import "./QFile-Wdc60KvO.js";
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
