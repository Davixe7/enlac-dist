import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, U as toDisplayString, w as withCtx, W as Fragment, Q as QBtn } from "./index-DU7WQZxj.js";
import { Q as QTd } from "./QTd-G_aCvPPW.js";
import { Q as QTable } from "./QTable-CLdJnKpd.js";
import { h as QDialog } from "./QSelect-Q3sOnmo4.js";
import { api } from "./axios-eZUNxOzX.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-KFv8s-b4.js";
import "./QSeparator-Cy5dZ9-W.js";
import "./use-dark-C2VKfivn.js";
import "./QList-5dBAPxOr.js";
import "./QCheckbox-BKzbuvUV.js";
import "./use-key-composition-BKfn5I0Y.js";
import "./use-fullscreen-B10dsazK.js";
import "./QItemLabel-ppsdJfqW.js";
import "./selection-B9Xmlxbu.js";
import "./QCard-CAtQmdJv.js";
import "./QInput-DI708L3A.js";
import "./QRadio-DGx8yYLV.js";
import "./QForm-DjGdY2k_.js";
import "./notify-BGme3XVg.js";
import "./sponsor-store-BohvmO1m.js";
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
