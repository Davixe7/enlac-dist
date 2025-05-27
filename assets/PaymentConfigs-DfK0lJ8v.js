import { r as ref, j as onMounted, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, U as toDisplayString, K as withCtx, X as Fragment, P as QBtn } from "./index-cCQoerBE.js";
import { Q as QTd } from "./QTd-DvptlpfK.js";
import { Q as QTable } from "./QTable-BFy7GktN.js";
import { h as QDialog } from "./QSelect-CtZdKzvL.js";
import { api } from "./axios-ByMy53kN.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BgLFTasG.js";
import "./QSeparator-BP1E2Kcs.js";
import "./use-dark-C8v3QwmZ.js";
import "./QList-Bqgej6v_.js";
import "./QMarkupTable-D1U2wsrV.js";
import "./QCheckbox-BMrw9OGo.js";
import "./use-key-composition-Cm9vnODB.js";
import "./use-fullscreen-BhYJh7gg.js";
import "./QItemLabel-BM-XPiQp.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./QCard-hZAF9mJo.js";
import "./QInput-BzETij5i.js";
import "./use-file-dom-props-DxWClpik.js";
import "./QRadio-CeSDzXzk.js";
import "./QForm-BEQZLlyt.js";
import "./notify-DMNPTzhM.js";
import "./sponsor-store-DsYj0rME.js";
const _sfc_main = {
  __name: "PaymentConfigs",
  props: ["sponsorId"],
  setup(__props) {
    const props = __props;
    const sponsor = ref({});
    const paymentConfigs = ref([]);
    const dialog = ref(false);
    const columns = ref([
      { name: "name", field: (row) => row.candidate.full_name, label: "Nombre del Candidato", sortable: true, align: "left" },
      { name: "amount", field: "id", label: "Folio", sortable: true, align: "left" },
      { name: "created_at", field: "amount", label: "Monto", sortable: true, align: "left" },
      { name: "frequency", field: "frequency", label: "Frecuencia ", sortable: true, align: "left" },
      { name: "actions", label: "Acciones", sortable: false, align: "right" }
    ]);
    const paymentConfigId = ref(null);
    function editPaymentConfig(id) {
      paymentConfigId.value = id;
      dialog.value = true;
    }
    onMounted(async () => {
      sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
      paymentConfigs.value = (await api.get(`/payment_configs/?sponsor_id=${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", null, toDisplayString(sponsor.value.name), 1),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: paymentConfigs.value,
          columns: columns.value,
          "hide-bottom": ""
        }, {
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  onClick: ($event) => editPaymentConfig(props2.row.id),
                  icon: "edit",
                  flat: "",
                  round: ""
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, { "payment-config-id": paymentConfigId.value }, null, 8, ["payment-config-id"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
