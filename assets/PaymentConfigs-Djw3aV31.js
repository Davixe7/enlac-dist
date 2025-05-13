import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, U as toDisplayString, w as withCtx, W as Fragment, Q as QBtn } from "./index-DNzcpddl.js";
import { Q as QTd } from "./QTd-D_yne8jU.js";
import { Q as QTable } from "./QTable-BF17cnq0.js";
import { h as QDialog } from "./QSelect-Dfccb1zM.js";
import { api } from "./axios-rEY_Jecr.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-Du1s77E1.js";
import "./QSeparator-DQ_sL_0t.js";
import "./use-dark-WkhccWQ1.js";
import "./QList-CrD9GAVD.js";
import "./QCheckbox-DHyNCU4l.js";
import "./use-key-composition-DOj7cCcL.js";
import "./use-fullscreen-C2morA89.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
import "./QCard-NmYyN4JG.js";
import "./QInput-uKsO-mcd.js";
import "./QRadio-B8b3MSsK.js";
import "./QForm-BbkqTju1.js";
import "./notify-ByjlCVX8.js";
import "./sponsor-store-DUUfqRc0.js";
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
