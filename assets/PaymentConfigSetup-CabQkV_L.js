import { _ as _sfc_main$1 } from "./BeneficiaryProfile-JXcnTSmG.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-CZi1CQcT.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-CVB7OCjp.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-SPihmL4j.js";
import "./QImg-BqXmW5pJ.js";
import "./use-timeout-xVUlrfQi.js";
import "./candidate-store-Datye8nW.js";
import "./QInput-DV-Rfkou.js";
import "./use-key-composition-DUFFmK9W.js";
import "./use-dark-BzDTrRl4.js";
import "./QSelect-BwWblSDD.js";
import "./QItemLabel-D_0HnZj_.js";
import "./selection-DRsVDt-b.js";
import "./QDialog-y9E-04rI.js";
import "./QCheckbox-CCYU-rV6.js";
import "./option-sizes-TwU3Ft3M.js";
import "./QRadio-BnMFhbos.js";
import "./QForm-CIUMPmNx.js";
import "./QCard-BH9zYwWL.js";
import "./notify-BUfyFQf6.js";
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
