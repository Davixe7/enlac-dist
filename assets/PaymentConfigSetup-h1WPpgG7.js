import _sfc_main$1 from "./BeneficiaryProfile--8oS-iG-.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-B_zFOa0k.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-C7WrfYJQ.js";
import { O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode } from "./index-DKrRlTZm.js";
import "./QImg-CIKfNVox.js";
import "./QExpansionItem-2CIi0O_l.js";
import "./QItem-B2NZIVVI.js";
import "./candidate-store-Bt7VnzqG.js";
import "./notify-DDWWrqfi.js";
import "./date-BS2RDF0q.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-CV8g3Ha7.js";
import "./QMenu-DWDJhV2Z.js";
import "./selection-DDtO3inV.js";
import "./QForm-BGtkmyHC.js";
import "./QFile-C9VLdA1b.js";
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
