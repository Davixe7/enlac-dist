import { _ as _sfc_main$1 } from "./BeneficiaryProfile-DdQ6nigl.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-B1iI4J8V.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-Db96z54S.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-B_bwoT8t.js";
import "./QImg-BKmWwYF2.js";
import "./use-timeout-megrCliV.js";
import "./candidate-store-Dl-smCZB.js";
import "./QInput-DlBCoLND.js";
import "./use-key-composition-ihl9jEj-.js";
import "./use-dark-DDE_KIFI.js";
import "./QSelect-Bb6ZnWlZ.js";
import "./QItem-DFvPMMde.js";
import "./selection-CQJ5exgf.js";
import "./QDialog-C-Ls8xlu.js";
import "./QCheckbox-CsWL1rI4.js";
import "./use-checkbox-Dj1tA0EI.js";
import "./option-sizes-Bvq37fCe.js";
import "./QRadio-CNBtZ_VM.js";
import "./QForm-kciIdtX7.js";
import "./QCard-DTdwX5EV.js";
import "./notify-Cw4iG4uu.js";
import "./QFile-Con0W853.js";
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
