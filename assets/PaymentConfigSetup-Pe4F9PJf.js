import _sfc_main$1 from "./BeneficiaryProfile-H7wu49h5.js";
import { _ as _sfc_main$2 } from "./SponsorProfile-Blw6AhrD.js";
import { _ as _sfc_main$3 } from "./PaymentConfigForm-Dd0U91jn.js";
import { c as createElementBlock, b as createBaseVNode, d as createVNode, a as openBlock } from "./index-BMx8ZhBX.js";
import "./QImg-_vY6cqeF.js";
import "./QExpansionItem-bRhJMLWv.js";
import "./QItem-Br0oypuR.js";
import "./candidate-store-BuduI226.js";
import "./notify-DbcNKswI.js";
import "./QSelect-B0MGoxqs.js";
import "./QMenu-9gvivH3V.js";
import "./selection-D-nz9tJE.js";
import "./format-BC-UoHKJ.js";
import "./QForm-M_cI1vlI.js";
import "./QFile-DO3DL9Bn.js";
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
