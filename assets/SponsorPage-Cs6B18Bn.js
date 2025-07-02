import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx, Q as QBtn, F as Fragment, b as createBaseVNode, g as createTextVNode } from "./index-BKlFzi9U.js";
import { api } from "./axios-DnBXXbR5.js";
import { _ as _sfc_main$3 } from "./SponsorProfile-muXeOPro.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { Q as QDialog } from "./QDialog-dSz5pi_j.js";
import { _ as _sfc_main$2 } from "./PaymentConfigForm-BwlleC49.js";
import "./QImg-BHpEaJZk.js";
import "./use-timeout-GW2bv9wv.js";
import "./QSeparator-2_Z6TE3i.js";
import "./use-dark-hk5G9xUE.js";
import "./QList-BwwRjKko.js";
import "./QMarkupTable-fuDnew7J.js";
import "./QSelect-DKl0wMy2.js";
import "./use-key-composition-Cryiiwp5.js";
import "./QItemLabel-TX7ESzio.js";
import "./selection-C0xLdPSq.js";
import "./QCheckbox-s2Kvsmmx.js";
import "./option-sizes-CfP0-6il.js";
import "./use-fullscreen-NQbe2Wgy.js";
import "./QInput-Cl4GFezJ.js";
import "./QRadio-CaSQ0QVf.js";
import "./QForm-P-BH0S5t.js";
import "./QCard-ChwXMyjm.js";
import "./notify-DpPex7WU.js";
const _sfc_main$1 = {
  __name: "SponsorshipsTable",
  props: ["sponsorId"],
  setup(__props) {
    const props = __props;
    const paymentConfigs = ref([]);
    const dialog = ref(false);
    const columns = ref([
      {
        name: "name",
        field: (row) => row.candidate.full_name,
        label: "Nombre del Candidato",
        sortable: true,
        align: "left"
      },
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
      paymentConfigs.value = (await api.get(`/payment_configs/?sponsor_id=${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
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
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              "payment-config-id": paymentConfigId.value,
              onSave: _cache[0] || (_cache[0] = ($event) => dialog.value = false)
            }, null, 8, ["payment-config-id"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "flex items-center justify-between q-mb-md" };
const _sfc_main = {
  __name: "SponsorPage",
  props: ["sponsorId"],
  setup(__props) {
    const props = __props;
    const paymentConfigs = ref([]);
    const sponsor = ref({});
    const loading = ref(false);
    onMounted(async () => {
      try {
        loading.value = true;
        sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
        paymentConfigs.value = (await api.get(`/payment_configs/?sponsor_id=${props.sponsorId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Detalles del Padrino", -1)),
          createVNode(QBtn, {
            color: "primary",
            to: `${props.sponsorId}/editar`
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Editar perfil")
            ])),
            _: 1
          }, 8, ["to"])
        ]),
        createVNode(_sfc_main$3, { sponsorId: __props.sponsorId }, null, 8, ["sponsorId"]),
        _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "page-subtitle" }, "Patrocinios / ahijados", -1)),
        createVNode(_sfc_main$1, { sponsorId: __props.sponsorId }, null, 8, ["sponsorId"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
