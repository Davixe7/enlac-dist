import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DuwFnPdv.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-BKI9OoVa.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BY4-rIrK.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-D6w-cXuQ.js";
import "./QImg-ChvKTb1Q.js";
import "./use-timeout-tcy2aUTk.js";
import "./candidate-store-lJGYglME.js";
import "./axios-DOaUvPJw.js";
import "./QInput-wxw_kogA.js";
import "./use-key-composition-BP8jtq2e.js";
import "./use-dark-3OGnIsE7.js";
import "./QSelect-CDZ-81F1.js";
import "./QItemLabel-BELvJCJR.js";
import "./selection-GX1L8RjI.js";
import "./QDialog-Bi4NORAY.js";
import "./QCheckbox-BMnj2b1-.js";
import "./option-sizes-B3TZgULG.js";
import "./QRadio-B5LzLb3z.js";
import "./QForm-BDWuRyxm.js";
import "./QCard-iKpX3XMK.js";
import "./notify-BZ2TjmhX.js";
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
