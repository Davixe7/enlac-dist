import { r as ref, o as onMounted, l as api, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx, h as QBtn, j as createTextVNode, s as QDialog, H as Fragment, b as createBaseVNode } from "./index-CIixvMyj.js";
import { _ as _sfc_main$3 } from "./SponsorProfile-Ct4II_sS.js";
import { Q as QTooltip } from "./QTooltip-aD7FXOcg.js";
import { Q as QTd } from "./QTd-DFh1zl6d.js";
import { Q as QTable } from "./QTable-BlWVfU6P.js";
import { _ as _sfc_main$2 } from "./PaymentConfigForm-DJSvPzrW.js";
import { u as useQuasar } from "./use-quasar-PyipS709.js";
import "./QImg-D7-rAmf3.js";
import "./QSelect-CUr3bFcr.js";
import "./QItem-DBnEobVN.js";
import "./selection-DNuwEDNn.js";
import "./QVirtualScroll-J6CPfoR2.js";
import "./QList-Cyz_qr_Z.js";
import "./QMarkupTable-NScijyJm.js";
import "./use-fullscreen-CVrPsPK4.js";
import "./QForm-BPiQZ_Ld.js";
import "./notify-ZDb5L8uG.js";
import "./QFile-BBofBKLI.js";
const _sfc_main$1 = {
  __name: "SponsorshipsTable",
  props: ["sponsorId"],
  setup(__props) {
    const $q = useQuasar();
    const props = __props;
    const paymentConfigs = ref([]);
    const dialog = ref(false);
    const frecuencies = {
      0.5: "Quincenal",
      1: "Mensual",
      2: "Bimestral",
      3: "Trimestral",
      6: "Semestral",
      12: "Anual"
    };
    const columns = ref([
      {
        name: "name",
        field: (row) => row.candidate.full_name,
        label: "Nombre del Candidato",
        sortable: true,
        align: "left"
      },
      { name: "amount", field: "id", label: "Folio", sortable: true, align: "left" },
      {
        name: "created_at",
        field: "amount",
        label: "Monto de la aportación",
        sortable: true,
        align: "left"
      },
      {
        name: "created_at",
        field: "created_at",
        label: "Patrocina desde",
        sortable: true,
        align: "left"
      },
      {
        name: "frequency",
        field: (row) => frecuencies[row.frequency],
        label: "Frecuencia del aporte",
        sortable: true,
        align: "left"
      },
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
    async function unlinkSponsor(row) {
      $q.dialog({
        title: "Cancelar patrocinio",
        message: `¿Seguro que deseas cancelar el patrocinio al beneficiario ${row.candidate.full_name}?`,
        cancel: true,
        ok: { label: "Sí, cancelar", color: "negative" }
      }).onOk(async () => {
        try {
          const { data } = await api.delete(`/payment_configs/${row.id}`);
          $q.notify({
            type: "warning",
            message: data.message
          });
          paymentConfigs.value = (await api.get(`/payment_configs/?sponsor_id=${props.sponsorId}`)).data.data;
        } catch (e) {
          $q.notify({ type: "negative", message: "Error al cancelar patrocinio" });
          console.error(e);
        }
      });
    }
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
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => unlinkSponsor(props2.row),
                  icon: "link_off",
                  flat: "",
                  round: "",
                  color: "negative"
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[2] || (_cache[2] = [
                        createTextVNode("Cancelar patrocinio")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"])
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
