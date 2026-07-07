import _sfc_main$1 from "./BeneficiaryProfile-B6_KL6_K.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-D6foh_Wh.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-DZbQcIKS.js";
import { O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode } from "./index-D8dGxR_o.js";
import "./QImg-BVxkkgtJ.js";
import "./QExpansionItem-DrplAMFE.js";
import "./QItem-C80OgkSj.js";
import "./candidate-store-BD2-EgJ1.js";
import "./notify-BXzUQ3RT.js";
import "./date-CmgNuwIn.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-CrhGdhCv.js";
import "./QMenu-P9699Vod.js";
import "./selection-C01nRuKQ.js";
import "./QForm-BZcpejmh.js";
import "./QFile-DIN7Si1v.js";
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
