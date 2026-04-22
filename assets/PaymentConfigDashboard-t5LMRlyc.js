import { o as onMounted, a as computed, r as ref, ag as api, H as createBlock, I as openBlock, J as withCtx, ah as QCard, K as createVNode, ai as QCardSection, _ as createBaseVNode, Q as QIcon, T as toDisplayString, V as QBtn, al as QInput, P as createElementBlock, R as Fragment, S as renderList, N as createTextVNode, as as QRadio, am as QDialog, Z as resolveComponent, M as createCommentVNode, ao as QCardActions, L as withDirectives, O as unref, G as useAuthStore } from "./index-B7OyGCt5.js";
import { Q as QMarkupTable } from "./QMarkupTable-DT0bRsMR.js";
import { n as notify } from "./notify-h311gLRe.js";
import { Q as QBadge } from "./QBadge-B-MNtci8.js";
import { C as ClosePopup } from "./ClosePopup-CU0bkWaO.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-STjM8B37.js";
import { Q as QList } from "./QList-BsTJ0hCL.js";
import { u as useQuasar } from "./use-quasar-EEj-GhtT.js";
import { Q as QSelect } from "./QSelect-D3ZWtIlV.js";
import { Q as QForm } from "./QForm-fVHi4KNM.js";
import "./QMenu-BqP-P0xG.js";
import "./selection-CuzV8dlV.js";
import "./format-BC-UoHKJ.js";
const _hoisted_1$3 = { class: "text-center q-gutter-y-md" };
const _hoisted_2$3 = { class: "text-primary text-bold" };
const _hoisted_3$2 = { class: "flex justify-center" };
const _hoisted_4$2 = { class: "flex justify-between items-center" };
const _hoisted_5$2 = { class: "flex justify-end" };
const _sfc_main$3 = {
  __name: "SponsorPicker",
  props: {
    modelValue: { type: Boolean, default: false },
    except: { type: Array, default: () => [] }
  },
  emits: ["close", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    onMounted(() => {
      fetchSponsors();
    });
    const sponsor = computed(() => sponsors.value.find((s) => s.id == sponsorId.value));
    const staging = ref(false);
    const sponsorId = ref(null);
    const loading = ref(false);
    const sponsors = ref([]);
    const rows = computed(() => sponsors.value.filter((item) => !props.except.includes(item.id)));
    const search = ref("");
    const results = computed(() => {
      if (search.value.trim() == "") {
        return rows.value;
      }
      return rows.value.filter(
        (row) => row.full_name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    async function fetchSponsors() {
      try {
        loading.value = true;
        sponsors.value = (await api.get(`/sponsors`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: __props.modelValue,
        onHide: _cache[6] || (_cache[6] = ($event) => emits("close"))
      }, {
        default: withCtx(() => [
          staging.value ? (openBlock(), createBlock(QCard, {
            key: 0,
            style: { "width": "400px" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pb-none" }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createBaseVNode("div", { class: "flex justify-center" }, [
                    createBaseVNode("div", { class: "page-title q-mb-none" }, "Confirmar seleccion")
                  ], -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$3, [
                    _cache[8] || (_cache[8] = createBaseVNode("div", null, "Confirma que desea vincular a", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QIcon, {
                        name: "sym_o_account_circle",
                        size: "40px"
                      })
                    ]),
                    createBaseVNode("div", _hoisted_2$3, toDisplayString(sponsor.value.full_name), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3$2, [
                    createVNode(QBtn, {
                      outline: "",
                      color: "primary",
                      class: "q-mr-md",
                      onClick: _cache[0] || (_cache[0] = ($event) => staging.value = false),
                      label: "Cancelar"
                    }),
                    createVNode(QBtn, {
                      color: "primary",
                      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push(`padrinos/${sponsorId.value}`)),
                      label: "Confirmar"
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (openBlock(), createBlock(QCard, {
            key: 1,
            style: { "width": "400px" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pb-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$2, [
                    _cache[9] || (_cache[9] = createBaseVNode("div", { class: "page-title q-my-none" }, "Asociar un padrino", -1)),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "sym_o_close",
                      onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    class: "q-mb-md",
                    outlined: "",
                    "stack-label": "",
                    label: "Buscar por nombre",
                    modelValue: search.value,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => search.value = $event),
                    debounce: "500"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(QIcon, { name: "sym_o_search" })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (sponsor2) => {
                        return openBlock(), createBlock(QItem, {
                          clickable: "",
                          key: sponsor2.id
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(sponsor2.full_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemLabel, { caption: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(sponsor2.company_name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createVNode(QRadio, {
                                  modelValue: sponsorId.value,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sponsorId.value = $event),
                                  val: sponsor2.id
                                }, null, 8, ["modelValue", "val"])
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
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_5$2, [
                    createVNode(QBtn, {
                      disable: !sponsorId.value,
                      color: "primary",
                      onClick: _cache[5] || (_cache[5] = ($event) => staging.value = true),
                      label: "Continuar"
                    }, null, 8, ["disable"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
const _hoisted_1$2 = { key: 0 };
const _hoisted_2$2 = { class: "text-bold" };
const _hoisted_3$1 = { class: "text-right" };
const _hoisted_4$1 = { class: "text-caption" };
const _hoisted_5$1 = { key: 1 };
const _hoisted_6 = { class: "flex" };
const _hoisted_7 = {
  key: 0,
  class: "text-caption"
};
const _hoisted_8 = { class: "text-right" };
const _sfc_main$2 = {
  __name: "BeneficiarySponsors",
  props: {
    candidateId: { type: String, required: false },
    readonly: { type: Boolean, default: false }
  },
  setup(__props) {
    const $q = useQuasar();
    const dialog = ref(false);
    const historyDialog = ref(false);
    const historyConfigs = ref([]);
    const paymentConfigs = ref([]);
    const hasHistory = ref(false);
    const props = __props;
    const except = computed(() => paymentConfigs.value.map((item) => item.sponsor.id));
    async function fetchConfigs() {
      try {
        let response = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
        paymentConfigs.value = response.filter((paymentConfig) => !!paymentConfig.sponsor_id);
      } catch (e) {
        console.error("Error cargando configs:", e);
      }
    }
    async function loadHistory() {
      try {
        const { data } = await api.get(
          `/payment_configs/list/all-history?candidate_id=${props.candidateId}`
        );
        historyConfigs.value = data.data;
        historyDialog.value = true;
      } catch (e) {
        console.log(e);
        $q.notify({ type: "negative", message: "No se pudo cargar el historial" });
      }
    }
    onMounted(() => {
      fetchConfigs();
      checkHistory();
    });
    function handleClose() {
      dialog.value = false;
      fetchConfigs();
    }
    async function restoreSponsor(id) {
      try {
        await api.patch(`/payment_configs/${id}/restore`);
        $q.notify({ type: "positive", message: "Patrocinio restaurado con éxito" });
        loadHistory();
        fetchConfigs();
        checkHistory();
      } catch (e) {
        console.log(e);
        $q.notify({ type: "negative", message: "Error al restaurar" });
      }
    }
    async function checkHistory() {
      try {
        const { data } = await api.get(`/payment_configs/has-history?candidate_id=${props.candidateId}`);
        hasHistory.value = data.has_history;
      } catch (e) {
        console.log(e);
        console.error("Error verificando historial");
      }
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$3, {
          except: except.value,
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event),
          onClose: handleClose
        }, null, 8, ["except", "modelValue"]),
        createVNode(QCard, {
          bordered: "",
          flat: "",
          style: { "display": "flex", "flex-flow": "column nowrap", "height": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createBaseVNode("div", { class: "page-subtitle q-my-none" }, "Padrinos", -1)
              ])),
              _: 1
            }),
            createVNode(QMarkupTable, { flat: "" }, {
              default: withCtx(() => [
                paymentConfigs.value.length ? (openBlock(), createElementBlock("tbody", _hoisted_1$2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paymentConfigs.value, (paymentConfig) => {
                    return openBlock(), createElementBlock("tr", {
                      key: paymentConfig.id
                    }, [
                      createBaseVNode("td", null, [
                        createBaseVNode("div", _hoisted_2$2, toDisplayString(paymentConfig.sponsor.name), 1),
                        createBaseVNode("div", null, "$" + toDisplayString(paymentConfig.amount), 1)
                      ]),
                      createBaseVNode("td", _hoisted_3$1, [
                        createVNode(_component_router_link, {
                          class: "text-primary",
                          style: { "font-size": "0.75rem" },
                          to: `padrinos/${paymentConfig.sponsor_id}`
                        }, {
                          default: withCtx(() => _cache[4] || (_cache[4] = [
                            createTextVNode(" Editar ")
                          ])),
                          _: 2
                        }, 1032, ["to"]),
                        createBaseVNode("div", _hoisted_4$1, "Actualizado el " + toDisplayString(paymentConfig.updated_at), 1)
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("tbody", _hoisted_5$1, _cache[5] || (_cache[5] = [
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      colspan: "2",
                      class: "text-center",
                      style: { "height": "200px" }
                    }, " No hay padrinos asociados para mostrar. ")
                  ], -1)
                ])))
              ]),
              _: 1
            }),
            createVNode(QCardSection, { class: "flex justify-between items-center q-mt-auto" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  dense: "",
                  color: "grey-8",
                  icon: "history",
                  label: "Historial de Aportaciones",
                  disable: !hasHistory.value,
                  onClick: loadHistory
                }, null, 8, ["disable"]),
                createBaseVNode("div", _hoisted_6, [
                  createVNode(QBtn, {
                    disable: props.readonly,
                    outline: "",
                    color: "primary",
                    icon: "sym_o_add",
                    onClick: _cache[1] || (_cache[1] = ($event) => dialog.value = true),
                    label: "Asociar padrino"
                  }, null, 8, ["disable"]),
                  createVNode(QBtn, {
                    disable: props.readonly,
                    unelevated: "",
                    class: "q-ml-md",
                    color: "primary",
                    icon: "sym_o_add",
                    to: "padrinos/crear",
                    label: "Registrar nuevo"
                  }, null, 8, ["disable"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: historyDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => historyDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "600px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center" }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createBaseVNode("div", { class: "text-h6" }, "Historial de Patrocinios", -1)
                  ])),
                  _: 1
                }),
                createVNode(QMarkupTable, {
                  flat: "",
                  separator: "horizontal"
                }, {
                  default: withCtx(() => [
                    _cache[8] || (_cache[8] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("th", { class: "text-left" }, "Padrino"),
                        createBaseVNode("th", { class: "text-left" }, "Monto"),
                        createBaseVNode("th", { class: "text-left" }, "Estado"),
                        createBaseVNode("th", { class: "text-right" }, "Acciones")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(historyConfigs.value, (item) => {
                        return openBlock(), createElementBlock("tr", {
                          key: item.id
                        }, [
                          createBaseVNode("td", null, toDisplayString(item.sponsor?.name || "Sin Padrino"), 1),
                          createBaseVNode("td", null, toDisplayString("$" + Number(item.amount).toFixed(2)), 1),
                          createBaseVNode("td", null, [
                            createVNode(QBadge, {
                              color: item.is_active ? "positive" : "negative"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.is_active ? "Activo" : "Cancelado"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            !item.is_active ? (openBlock(), createElementBlock("div", _hoisted_7, [
                              createTextVNode(toDisplayString(item.deleted_at_formatted) + " ", 1),
                              _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
                              createBaseVNode("i", null, "Motivo: " + toDisplayString(item.cancellation_reason ? item.cancellation_reason : "Sin motivo"), 1)
                            ])) : createCommentVNode("", true)
                          ]),
                          createBaseVNode("td", _hoisted_8, [
                            !item.is_active ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              icon: "restore",
                              label: "Restaurar",
                              color: "positive",
                              flat: "",
                              dense: "",
                              onClick: ($event) => restoreSponsor(item.id)
                            }, null, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "Cerrar",
                      color: "primary"
                    }, null, 512), [
                      [ClosePopup]
                    ])
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
const _hoisted_1$1 = { class: "flex items-center justify-between q-py-sm" };
const _hoisted_2$1 = { class: "flex justify-end q-pa-md" };
const _sfc_main$1 = {
  __name: "DownloadCarta",
  props: ["candidateId"],
  setup(__props) {
    const loading = ref(false);
    const errors = ref({});
    const props = __props;
    const carta = ref({
      contact_id: null,
      periodo: ""
    });
    const showDownloadDialog = ref(false);
    const contacts = ref([]);
    const downloadCarta = async () => {
      errors.value = {};
      if (!carta.value.contact_id) {
        errors.value["contact"] = "Debe seleccionar un destinatario";
      }
      if (!carta.value.periodo) {
        errors.value["periodo"] = "Especifique un periodo";
      }
      if (Object.values(errors.value).length) {
        return;
      }
      loading.value = true;
      let params = {
        ...carta.value
      };
      try {
        const response = await api.post(`/beneficiaries/${props.candidateId}/carta`, params, {
          responseType: "blob"
        });
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Carta_Beca_ENLAC.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error al descargar el PDF:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(async () => {
      contacts.value = (await api.get(`contacts/?candidate_id=${props.candidateId}`)).data.data;
      contacts.value.unshift({ id: null, full_name: "Seleccione un contacto / destinatario" });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QBtn, {
          outline: "",
          label: "Descargar Carta",
          icon: "download",
          onClick: _cache[0] || (_cache[0] = ($event) => showDownloadDialog.value = true)
        }),
        createVNode(QDialog, {
          modelValue: showDownloadDialog.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => showDownloadDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "420px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      _cache[5] || (_cache[5] = createBaseVNode("div", { class: "page-subtitle q-mb-md" }, "Descargar Carta", -1)),
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "close",
                        class: "q-ml-auto",
                        onClick: _cache[1] || (_cache[1] = ($event) => showDownloadDialog.value = false)
                      })
                    ]),
                    createVNode(QForm, null, {
                      default: withCtx(() => [
                        createVNode(QSelect, {
                          modelValue: carta.value.contact_id,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => carta.value.contact_id = $event),
                          "hide-bottom-space": "",
                          options: contacts.value,
                          "option-label": "full_name",
                          "option-value": "id",
                          "emit-value": "",
                          "map-options": "",
                          outlined: "",
                          "stack-label": "",
                          label: "Contacto",
                          class: "q-mb-md",
                          error: !!errors.value["contact"],
                          "error-message": errors.value["contact"]
                        }, null, 8, ["modelValue", "options", "error", "error-message"]),
                        createVNode(QInput, {
                          "stack-label": "",
                          outlined: "",
                          "hide-bottom-space": "",
                          modelValue: carta.value.periodo,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => carta.value.periodo = $event),
                          label: "Periodo",
                          error: !!errors.value["periodo"],
                          "error-message": errors.value["periodo"]
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(QBtn, {
                    onClick: downloadCarta,
                    color: "primary",
                    label: "Descargar",
                    loading: loading.value
                  }, null, 8, ["loading"])
                ])
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
const _hoisted_1 = { class: "flex q-my-md justify-end" };
const _hoisted_2 = { class: "row q-col-gutter-x-md" };
const _hoisted_3 = { class: "col-12 col-md-6" };
const _hoisted_4 = { class: "col-12 col-md-6" };
const _hoisted_5 = { colspan: "2" };
const _sfc_main = {
  __name: "PaymentConfigDashboard",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const candidate = ref({});
    const rows = ref([]);
    const parentPaymentConfig = ref({
      candidate_id: props.candidateId,
      frequency: 1,
      month_payday: 1,
      address_type: "home",
      amount: 0
    });
    onMounted(async () => {
      candidate.value = props.candidateId ? (await api.get(`beneficiaries/${props.candidateId}`)).data.data : {};
      rows.value = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
      let foundParent = rows.value.find((row) => row.sponsor_id == null);
      parentPaymentConfig.value = foundParent ? foundParent : parentPaymentConfig.value;
    });
    async function storeParentPaymentConfig() {
      try {
        loading.value = false;
        let route = parentPaymentConfig.value.id ? `/payment_configs/${parentPaymentConfig.value.id}` : "payment_configs";
        let data = parentPaymentConfig.value.id ? { ...parentPaymentConfig.value, _method: "PUT" } : { ...parentPaymentConfig.value };
        parentPaymentConfig.value = (await api.post(route, data)).data.data;
        notify.positive(`Configuracion de pago actualizada con exito`);
      } catch (error) {
        console.log(error);
        notify.negative(`Error al guardar los cambios`);
      } finally {
        loading.value = false;
      }
    }
    const amountSponsors = computed(() => {
      if (!rows.value.length) return 0;
      let total = rows.value.filter((row) => row.sponsor_id != null).reduce((sum, row) => sum + row.monthly_amount, 0);
      return total.toFixed(2);
    });
    const amountEnlac = computed(
      () => (Number(candidate.value.program_price) - amountSponsors.value - parentPaymentConfig.value.amount).toFixed(2)
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_sfc_main$1, {
            candidateId: props.candidateId
          }, null, 8, ["candidateId"])
        ]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$2, {
              "candidate-id": props.candidateId,
              readonly: !unref(useAuthStore)().can("sponsors.update")
            }, null, 8, ["candidate-id", "readonly"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QCard, { bordered: "" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createBaseVNode("div", { class: "page-subtitle q-my-none" }, "Cuotas mensuales", -1)
                  ])),
                  _: 1
                }),
                createVNode(QMarkupTable, { flat: "" }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[2] || (_cache[2] = createBaseVNode("td", null, "Cuota de Padres:", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: parentPaymentConfig.value.amount,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => parentPaymentConfig.value.amount = $event)
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("td", null, toDisplayString((parentPaymentConfig.value.amount / candidate.value?.program_price * 100).toFixed(2)) + " % ", 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[3] || (_cache[3] = createBaseVNode("td", null, "Aportación de Padrinos:", -1)),
                        createBaseVNode("td", null, "$" + toDisplayString(amountSponsors.value), 1),
                        createBaseVNode("td", null, toDisplayString((amountSponsors.value / candidate.value?.program_price * 100).toFixed(2)) + " %", 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[4] || (_cache[4] = createBaseVNode("td", null, "Beca ENLAC:", -1)),
                        createBaseVNode("td", null, "$" + toDisplayString(amountEnlac.value), 1),
                        createBaseVNode("td", null, "$" + toDisplayString((amountEnlac.value / candidate.value?.program_price * 100).toFixed(2)) + " %", 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[5] || (_cache[5] = createBaseVNode("td", null, "Total del Programa:", -1)),
                        createBaseVNode("td", _hoisted_5, "$" + toDisplayString(candidate.value?.program_price), 1)
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, { class: "flex justify-end" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      outline: "",
                      color: "primary",
                      class: "q-mr-sm",
                      to: { name: "beneficiaries.balances.control" },
                      label: "Ver detalles"
                    }),
                    createVNode(QBtn, {
                      color: "primary",
                      onClick: storeParentPaymentConfig,
                      label: "Guardar"
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
