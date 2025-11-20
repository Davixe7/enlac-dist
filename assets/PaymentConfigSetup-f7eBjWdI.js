import { _ as _sfc_main$1 } from "./BeneficiaryProfile-Cv31DV2X.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-Bs7HXNcK.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-Rc79ZPzn.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-Dk-vfK7v.js";
import "./QImg-DKYrHYl6.js";
import "./QExpansionItem-DsCrMgbu.js";
import "./QItem-DE7d-lgy.js";
import "./candidate-store-BJ5zmJy6.js";
import "./notify-qwVxQIpJ.js";
import "./use-quasar-Db6bNxqq.js";
import "./QSelect-BW1ZBX55.js";
import "./selection-DEaGGDNT.js";
import "./QForm-D_Iwsj8x.js";
import "./QFile-DYy0HRyr.js";
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
