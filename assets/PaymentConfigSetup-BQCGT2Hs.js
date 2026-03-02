import _sfc_main$1 from "./BeneficiaryProfile-CSa0hTuM.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-B-ty-Cws.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-B3Hd7jj1.js";
import { P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode } from "./index-Y0a2SGnG.js";
import "./QImg-DCvuMy7-.js";
import "./QExpansionItem-CYn3u7UD.js";
import "./QItem-DC2gNDJ1.js";
import "./candidate-store-Drbh0Znd.js";
import "./notify-B8FCsw9t.js";
import "./QSelect-BJp1SiYJ.js";
import "./QMenu-Bhi7Fnly.js";
import "./selection-C8FNrCNV.js";
import "./format-BC-UoHKJ.js";
import "./QForm-PMlWH-wP.js";
import "./QFile-FfMREq0t.js";
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
