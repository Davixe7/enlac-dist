import { r as ref, K as onMounted, B as createElementBlock, s as openBlock, v as createVNode, t as withCtx, G as QBtn, z as createTextVNode, a3 as QDialog, a1 as QCard, X as QCardSection, N as createBaseVNode, D as toDisplayString, Y as QInput, ac as QCardActions, x as withDirectives, F as Fragment, C as renderList, q as createBlock, V as api } from "./index-DPs1zKRF.js";
import { _ as _sfc_main$3 } from "./SponsorProfile-DUtX8k9u.js";
import { Q as QTd } from "./QTd-TNLx62mu.js";
import { Q as QTooltip } from "./QTooltip-DUJkqOVw.js";
import { Q as QTable } from "./QTable-C3BGz7fn.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-alNvM6f-.js";
import { Q as QList } from "./QList-Y_Pm_q5p.js";
import { C as ClosePopup } from "./ClosePopup-D6zGJ5Xz.js";
import { _ as _sfc_main$2 } from "./PaymentConfigForm-DtyQh_7G.js";
import { n as notify } from "./notify-DADgrWRd.js";
import "./QImg-C9nJDA2r.js";
import "./position-engine-BG5FKc6K.js";
import "./selection-C1DDF3hy.js";
import "./QVirtualScroll-DHY9ScGR.js";
import "./QMarkupTable-B7PVBtRF.js";
import "./QSelect-CKtDGNdF.js";
import "./QChip-DkKrhn_2.js";
import "./QMenu-BSWPeWRp.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-iyEOoWrF.js";
import "./QForm-CGo3c9Fl.js";
import "./QFile-Bub8u-LN.js";
const _hoisted_1$1 = { class: "text-caption text-grey" };
const _sfc_main$1 = {
  __name: "SponsorshipsTable",
  props: ["sponsorId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const paymentConfigs = ref([]);
    const dialog = ref(false);
    const cancelDialog = ref(false);
    const cancellationReason = ref("");
    const selectedRow = ref(null);
    const paymentConfigId = ref(null);
    const logs = ref([]);
    const logsDialog = ref(false);
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
        name: "candidate",
        field: (row) => row.candidate.full_name,
        label: "Nombre del Candidato",
        sortable: true,
        align: "left"
      },
      { name: "id", field: "id", label: "Folio", sortable: true, align: "left" },
      {
        name: "amount",
        field: "amount",
        label: "Monto ($)",
        format: (val) => Number(val).toFixed(2),
        sortable: true,
        align: "left"
      },
      {
        name: "created_at",
        field: "created_at",
        label: "Patrocina desde",
        format: (val) => val ? val : "N/A",
        sortable: true,
        align: "left"
      },
      {
        name: "frequency",
        field: (row) => frecuencies[Number(row.frequency)] || "N/A",
        label: "Frecuencia",
        sortable: true,
        align: "left"
      },
      { name: "actions", label: "Acciones", sortable: false, align: "right" }
    ]);
    const fetchPaymentConfigs = async () => {
      try {
        loading.value = true;
        paymentConfigs.value = (await api.get(`/sponsorships/?sponsor_id=${props.sponsorId}`)).data.data;
      } catch (e) {
        console.error("Error al cargar configuraciones:", e);
      } finally {
        loading.value = false;
      }
    };
    onMounted(fetchPaymentConfigs);
    function editPaymentConfig(id) {
      paymentConfigId.value = id;
      dialog.value = true;
    }
    function openCancelDialog(row) {
      selectedRow.value = row;
      cancellationReason.value = "";
      cancelDialog.value = true;
    }
    async function confirmCancel() {
      try {
        let data = { cancellation_reason: cancellationReason.value };
        await api.delete(`/sponsorships/${selectedRow.value.id}`, { data });
        notify.warning(
          "Patrocinio cancelado correctamente. Recuerda hablar con los padres de familia para reponer la aportación de Padrinos."
        );
        cancelDialog.value = false;
        await fetchPaymentConfigs();
      } catch (e) {
        console.log(e);
        notify.negative("Error al cancelar patrocinio");
      }
    }
    function onSave() {
      dialog.value = false;
      fetchPaymentConfigs();
    }
    async function showLogs(id) {
      try {
        const { data } = await api.get(`/payment_configs/${id}/history-logs`);
        logs.value = data.data;
        logsDialog.value = true;
      } catch (e) {
        console.log(e);
        notify.negative("No se pudo cargar el historial");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: paymentConfigs.value,
          columns: columns.value,
          "hide-bottom": "",
          "row-key": "id"
        }, {
          "body-cell-candidate": withCtx((slotProps) => [
            createVNode(QTd, { props: slotProps }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  dense: "",
                  "no-caps": "",
                  color: "primary",
                  class: "text-weight-medium q-pa-none",
                  to: { name: "semaforo", params: { candidateId: slotProps.row.candidate.id } },
                  label: slotProps.row.candidate.full_name
                }, null, 8, ["to", "label"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-actions": withCtx((slotProps) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  onClick: ($event) => editPaymentConfig(slotProps.row.id),
                  icon: "edit",
                  flat: "",
                  round: ""
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => openCancelDialog(slotProps.row),
                  icon: "link_off",
                  flat: "",
                  round: "",
                  color: "negative"
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[4] || (_cache[4] = [
                        createTextVNode("Cancelar patrocinio")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                createVNode(QBtn, {
                  onClick: ($event) => showLogs(slotProps.row.id),
                  icon: "history",
                  flat: "",
                  round: "",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[5] || (_cache[5] = [
                        createTextVNode("Ver historial de movimientos")
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
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              "payment-config-id": paymentConfigId.value,
              onSave
            }, null, 8, ["payment-config-id"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: cancelDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => cancelDialog.value = $event),
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "450px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createBaseVNode("div", { class: "text-h6" }, "Cancelar patrocinio", -1)
                  ])),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("p", null, [
                      _cache[7] || (_cache[7] = createTextVNode(" ¿Por qué deseas cancelar el patrocinio de ")),
                      createBaseVNode("strong", null, toDisplayString(selectedRow.value?.candidate.full_name), 1),
                      _cache[8] || (_cache[8] = createTextVNode("? "))
                    ]),
                    createVNode(QInput, {
                      modelValue: cancellationReason.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cancellationReason.value = $event),
                      label: "Motivo de la cancelación",
                      type: "textarea",
                      outlined: "",
                      autofocus: "",
                      class: "q-mt-sm",
                      rules: [
                        (val) => val && val.length > 5 || "El motivo debe tener al menos 6 caracteres"
                      ]
                    }, null, 8, ["modelValue", "rules"])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "Volver",
                      color: "grey"
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QBtn, {
                      label: "Confirmar Cancelación",
                      color: "negative",
                      disable: !cancellationReason.value || cancellationReason.value.length <= 5,
                      onClick: confirmCancel
                    }, null, 8, ["disable"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: logsDialog.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => logsDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "500px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createBaseVNode("div", { class: "text-h6" }, "Historial de Movimientos", -1)
                  ])),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QList, { separator: "" }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(logs.value, (log, index) => {
                          return openBlock(), createBlock(QItem, { key: index }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createVNode(QItemLabel, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(log.action), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(QItemLabel, { caption: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(log.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemSection, { side: "" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_1$1, toDisplayString(log.reason), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
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
    const sponsor = ref({});
    const loading = ref(false);
    onMounted(async () => {
      try {
        loading.value = true;
        sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Detalles del Padrino", -1)),
          createVNode(QBtn, {
            color: "primary",
            to: `${props.sponsorId}/editar`,
            label: "Editar perfil"
          }, null, 8, ["to"])
        ]),
        createVNode(_sfc_main$3, { sponsorId: __props.sponsorId }, null, 8, ["sponsorId"]),
        _cache[1] || (_cache[1] = createBaseVNode("h2", { class: "page-subtitle" }, "Patrocinios / ahijados", -1)),
        createVNode(_sfc_main$1, { sponsorId: __props.sponsorId }, null, 8, ["sponsorId"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
