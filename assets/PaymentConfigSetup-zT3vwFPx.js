import _sfc_main$1 from "./BeneficiaryProfile-DkZZXNs-.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-1StnyZPe.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-CUJsZiFi.js";
import { O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode } from "./index-Lpbv6tCz.js";
import "./QImg-Dg3-E4FR.js";
import "./QExpansionItem-B0eFPBRc.js";
import "./QItem-hGGqEP0j.js";
import "./candidate-store-DCmh2JEQ.js";
import "./notify-DG_2rm3w.js";
import "./date-s2hr6oY7.js";
import "./format-BC-UoHKJ.js";
import "./QSelect-A9ZZmmDT.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./QForm-_kiBS9mb.js";
import "./QFile-DXZnaber.js";
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
