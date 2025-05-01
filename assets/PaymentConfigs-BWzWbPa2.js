import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, U as toDisplayString, w as withCtx, W as Fragment, Q as QBtn } from "./index-XVUxbwAj.js";
import { Q as QTd } from "./QTd-Bls__Fh0.js";
import { Q as QTable } from "./QTable-DbW4CaUa.js";
import { h as QDialog } from "./QSelect-C8uCeXfA.js";
import { api } from "./axios-BaazhBMR.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-34PXSl7C.js";
import "./QSeparator-AjPZRMd9.js";
import "./use-dark-C0G2Ox9U.js";
import "./QList-CKgMNYKZ.js";
import "./QCheckbox-EsAyBKFH.js";
import "./use-key-composition-ByS6eEmN.js";
import "./use-fullscreen-YMBfuyXb.js";
import "./QItemLabel-DpR4ih5u.js";
import "./selection-CAbnqUsA.js";
import "./QCard-VE4ZT6YY.js";
import "./QInput-CT12m4wj.js";
import "./QRadio-BQKitX3d.js";
import "./QForm-Csrw8R4r.js";
import "./notify-BnGDOOzg.js";
import "./sponsor-store-C8zEyrvV.js";
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
