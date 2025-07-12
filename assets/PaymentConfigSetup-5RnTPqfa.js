import { _ as _sfc_main$1 } from "./BeneficiaryProfile-NPE7r6sd.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-CLQqwoq6.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BoSSw06C.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-BXqY0shX.js";
import "./QImg-l2IahqLW.js";
import "./use-timeout-CrK4RhEz.js";
import "./candidate-store-Cb1WiNlM.js";
import "./QInput-D40gES8W.js";
import "./use-key-composition-BKbfOFw1.js";
import "./use-dark-DjMuuakh.js";
import "./QSelect-IM5jyk2g.js";
import "./QItemLabel-tzmo7QJQ.js";
import "./selection-B--_r8qR.js";
import "./QDialog-oeqTLSLP.js";
import "./QCheckbox-1shOM7b_.js";
import "./option-sizes-CENjnHKS.js";
import "./QRadio-qdcekmTp.js";
import "./QForm-DOzkmr3h.js";
import "./QCard-Ds7qAq6D.js";
import "./notify-X3dm3duL.js";
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
