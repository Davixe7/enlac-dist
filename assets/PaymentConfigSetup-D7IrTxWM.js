import { _ as _sfc_main$1 } from "./BeneficiaryProfile-CzWN1WsV.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-CYUqBsy0.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-BqkW51-A.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-Bw7koZRs.js";
import "./QImg-CBLciifN.js";
import "./use-timeout-CgolyZjO.js";
import "./candidate-store-B81qSADN.js";
import "./QInput-DpLq7x8-.js";
import "./use-key-composition-CcNkFKJ3.js";
import "./use-dark-QoPeQzjR.js";
import "./QSelect-BpBR3LGj.js";
import "./QItemLabel-DAkXD4my.js";
import "./selection-CHZ-_4p5.js";
import "./QDialog-DifZ5hVn.js";
import "./QCheckbox-C8n8UXWX.js";
import "./option-sizes-B9ECE9ZJ.js";
import "./QRadio-DqM-ahtL.js";
import "./QForm-BWe6Bvnx.js";
import "./QCard-Uo2azhKQ.js";
import "./notify-DvT-hOLo.js";
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
