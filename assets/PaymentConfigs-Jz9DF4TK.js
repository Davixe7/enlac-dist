import { r as ref, j as onMounted, U as createElementBlock, G as openBlock, L as createBaseVNode, K as createVNode, R as toDisplayString, H as withCtx, V as Fragment, N as QBtn } from "./index-Do2UNGkK.js";
import { Q as QTd } from "./QTd-CpvcY3fr.js";
import { Q as QTable } from "./QTable-C65yIXCw.js";
import { h as QDialog } from "./QSelect-gGbryZRL.js";
import { api } from "./axios--LrLQM_c.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BiaXLVek.js";
import "./QSeparator-DZhmyG_f.js";
import "./use-dark-DR5cwYKQ.js";
import "./QList-CitW4czx.js";
import "./QMarkupTable-kHyEbSXb.js";
import "./QCheckbox-DXE74Rqj.js";
import "./use-key-composition-Cb3U_Tha.js";
import "./use-fullscreen-DMaNYzjw.js";
import "./QItemLabel-WLy9p-qo.js";
import "./selection-r0vkVvJb.js";
import "./use-timeout-CzOVVImI.js";
import "./QCard-DUVQfyQw.js";
import "./QInput-BgFiysGV.js";
import "./QRadio-CUireVVM.js";
import "./QForm-3KD2SpBK.js";
import "./notify-Bh-ZzP7n.js";
import "./sponsor-store-AuREKALo.js";
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
