import { r as ref, x as onMounted, a4 as api, O as createElementBlock, Z as createBaseVNode, J as createVNode, I as withCtx, aa as QDialog, P as Fragment, H as openBlock, U as QBtn, G as createBlock, L as createCommentVNode, a5 as QCard, a6 as QCardSection, K as withDirectives, S as toDisplayString, ad as withModifiers, a9 as QInput, ae as QCheckbox } from "./index-BtlleyNg.js";
import { Q as QTd } from "./QTd-A-JBdP7S.js";
import { Q as QTable } from "./QTable-CzBJPEB1.js";
import { Q as QSelect } from "./QSelect-Br-RFt5-.js";
import { Q as QMarkupTable } from "./QMarkupTable-DvOTOLBy.js";
import { Q as QForm } from "./QForm-CdqJwVnc.js";
import { C as ClosePopup } from "./ClosePopup-BgUON_Th.js";
import { n as notify } from "./notify-DLhM6q4g.js";
import "./QVirtualScroll-CusdomfO.js";
import "./QList-DyILp-GS.js";
import "./use-fullscreen-j85J4bbe.js";
import "./QItem-BysEJ2EE.js";
import "./QMenu-Df-u1lML.js";
import "./selection-8PfsjyT0.js";
import "./format-BC-UoHKJ.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "text-subtitle1 text-weight-bold" };
const _hoisted_3 = { class: "flex justify-end q-mt-md" };
const _hoisted_4 = { class: "text-caption text-secondary text-weight-bold" };
const _hoisted_5 = { class: "flex justify-end q-mt-md" };
const _sfc_main = {
  __name: "ProcurationActivitiesCatalog",
  setup(__props) {
    const loading = ref(false);
    const configLoading = ref(false);
    const errors = ref({});
    const row = ref(null);
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "name", label: "Nombre de la Actividad", field: "name", sortable: true },
      { align: "left", name: "type", label: "Tipo de Actividad", field: "type" },
      {
        align: "right",
        name: "status",
        label: "Estatus",
        field: (row2) => row2.is_active ? "Activo" : "Inactivo"
      },
      { align: "right", name: "actions", label: "Acciones" }
    ]);
    const dialog = ref(false);
    const configDialog = ref(false);
    const selectedActivity = ref(null);
    const configForm = ref({
      created_date: "",
      event_date: "",
      place: "",
      goal_amount: 0,
      tickets_count: 0,
      ticket_price: 0,
      winning_ticket: "",
      winner_name: "",
      seller_winner_name: ""
    });
    const activityTypes = [
      "Alcancía",
      "Alianza",
      "Boteo",
      "Donativos Varios",
      "Fundaciones",
      "Natación",
      "Obsequio entre Amigos",
      "Organismos de Gobierno",
      "Programa de Verano",
      "Proyecto Interno",
      "Radiomaratón"
    ];
    function editActivity(newRow) {
      row.value = { ...newRow, is_active: newRow.is_active ? 1 : 0 };
      errors.value = {};
      dialog.value = true;
    }
    function addActivity() {
      row.value = {
        name: "",
        type: "",
        is_active: 1
      };
      errors.value = {};
      dialog.value = true;
    }
    async function saveActivity() {
      try {
        loading.value = true;
        errors.value = {};
        let route = row.value.id ? `/procuration-activities/${row.value.id}` : "/procuration-activities";
        let data = row.value.id ? { ...row.value, _method: "PUT" } : { ...row.value };
        const response = await api.post(route, data);
        const savedData = response.data.data || response.data;
        if (row.value.id) {
          const index = rows.value.findIndex((item) => item.id === row.value.id);
          if (index !== -1) rows.value[index] = savedData;
        } else {
          rows.value.unshift(savedData);
        }
        rows.value.sort((a, b) => a.name.localeCompare(b.name));
        notify.positive("Guardado con éxito");
        dialog.value = false;
      } catch (error) {
        console.log(error);
        if (error.response?.status === 422) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach((key) => {
            errors.value[key] = serverErrors[key][0];
          });
        } else {
          notify.negative("No se pudo guardar la actividad");
        }
      } finally {
        loading.value = false;
      }
    }
    function openConfiguration(activity) {
      selectedActivity.value = activity;
      errors.value = {};
      const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
      configForm.value = {
        created_date: activity.created_date ? activity.created_date.split("T")[0] : today,
        event_date: activity.event_date ? activity.event_date.split("T")[0] : "",
        place: activity.place || "",
        goal_amount: activity.goal_amount || 0,
        tickets_count: activity.tickets_count || 0,
        ticket_price: activity.ticket_price || 0,
        winning_ticket: activity.winning_ticket || "",
        winner_name: activity.winner_name || "",
        seller_winner_name: activity.seller_winner_name || ""
      };
      configDialog.value = true;
    }
    async function saveConfiguration() {
      try {
        configLoading.value = true;
        errors.value = {};
        const route = `/procuration-activities/${selectedActivity.value.id}`;
        const data = {
          ...selectedActivity.value,
          ...configForm.value,
          _method: "PUT"
        };
        const response = await api.post(route, data);
        const savedData = response.data.data || response.data;
        const index = rows.value.findIndex((item) => item.id === selectedActivity.value.id);
        if (index !== -1) {
          rows.value[index] = savedData;
        }
        notify.positive("Configuración avanzada guardada correctamente");
        configDialog.value = false;
      } catch (error) {
        console.log(error);
        if (error.response?.status === 422) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach((key) => {
            errors.value[key] = serverErrors[key][0];
          });
        } else {
          notify.negative("Error al guardar la configuración");
        }
      } finally {
        configLoading.value = false;
      }
    }
    onMounted(async () => {
      try {
        const response = await api.get("/procuration-activities");
        let data = response.data.data || response.data;
        rows.value = data.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.log("Error al cargar actividades:", error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[18] || (_cache[18] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Catálogo de Procuración de Fondos", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            icon: "sym_o_add",
            onClick: addActivity,
            color: "primary",
            label: "Nueva Actividad"
          })
        ]),
        createVNode(QTable, {
          columns: columns.value,
          rows: rows.value,
          pagination: { rowsPerPage: 0 },
          flat: "",
          bordered: ""
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right q-gutter-x-sm" }, {
              default: withCtx(() => [
                ["Obsequio entre Amigos", "Radiomaratón"].includes(props.row.type) ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  icon: "sym_o_settings",
                  label: "Configurar",
                  flat: "",
                  dense: "",
                  color: "secondary",
                  onClick: ($event) => openConfiguration(props.row)
                }, null, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(QBtn, {
                  icon: "sym_o_edit",
                  round: "",
                  flat: "",
                  color: "primary",
                  dense: "",
                  onClick: ($event) => editActivity(props.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, toDisplayString(`${row.value.id ? "Actualizar" : "Nueva"}`) + " Actividad ", 1),
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "sym_o_close",
                      onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false),
                      class: "q-ml-auto"
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QForm, {
                      class: "q-gutter-y-md",
                      onSubmit: withModifiers(saveActivity, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(QMarkupTable, {
                          flat: "",
                          class: "activity-form"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("tbody", null, [
                              createBaseVNode("tr", null, [
                                _cache[19] || (_cache[19] = createBaseVNode("td", null, "Tipo de Actividad", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QSelect, {
                                    outlined: "",
                                    dense: "",
                                    modelValue: row.value.type,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => row.value.type = $event),
                                    options: activityTypes,
                                    placeholder: "Seleccione un tipo",
                                    "hide-bottom-space": "",
                                    error: !!errors.value["type"],
                                    "error-message": errors.value["type"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[20] || (_cache[20] = createBaseVNode("td", null, "Nombre de la Actividad", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    dense: "",
                                    modelValue: row.value.name,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => row.value.name = $event),
                                    placeholder: "Ej. Sorteo Anual 2026",
                                    "hide-bottom-space": "",
                                    error: !!errors.value["name"],
                                    "error-message": errors.value["name"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[21] || (_cache[21] = createBaseVNode("td", null, "Activo", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QCheckbox, {
                                    modelValue: row.value.is_active,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => row.value.is_active = $event),
                                    "true-value": 1,
                                    "false-value": 0
                                  }, null, 8, ["modelValue"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_3, [
                          createVNode(QBtn, {
                            loading: loading.value,
                            type: "submit",
                            label: `${row.value.id ? "Actualizar" : "Agregar"}`,
                            color: "primary"
                          }, null, 8, ["loading", "label"])
                        ])
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
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: configDialog.value,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => configDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "550px", "max-width": "90vw" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", null, [
                      _cache[22] || (_cache[22] = createBaseVNode("div", { class: "text-subtitle1 text-weight-bold" }, "Configurar Detalles Adicionales", -1)),
                      createBaseVNode("div", _hoisted_4, toDisplayString(selectedActivity.value?.name) + " — " + toDisplayString(selectedActivity.value?.type), 1)
                    ]),
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "sym_o_close",
                      onClick: _cache[5] || (_cache[5] = ($event) => configDialog.value = false),
                      class: "q-ml-auto"
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QForm, {
                      class: "q-gutter-y-sm",
                      onSubmit: withModifiers(saveConfiguration, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(QMarkupTable, {
                          flat: "",
                          class: "activity-form"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("tbody", null, [
                              selectedActivity.value?.type === "Radiomaratón" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createBaseVNode("tr", null, [
                                  _cache[23] || (_cache[23] = createBaseVNode("td", null, "Meta", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "number",
                                      step: "0.01",
                                      prefix: "$",
                                      modelValue: configForm.value.goal_amount,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => configForm.value.goal_amount = $event),
                                      modelModifiers: { number: true },
                                      placeholder: "0.00",
                                      "hide-bottom-space": "",
                                      error: !!errors.value["goal_amount"],
                                      "error-message": errors.value["goal_amount"]
                                    }, null, 8, ["modelValue", "error", "error-message"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[24] || (_cache[24] = createBaseVNode("td", null, "Fecha de Creación", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "date",
                                      modelValue: configForm.value.created_date,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => configForm.value.created_date = $event),
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[25] || (_cache[25] = createBaseVNode("td", null, "Fecha del Evento", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "date",
                                      modelValue: configForm.value.event_date,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => configForm.value.event_date = $event),
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ])
                              ], 64)) : createCommentVNode("", true),
                              selectedActivity.value?.type === "Obsequio entre Amigos" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createBaseVNode("tr", null, [
                                  _cache[26] || (_cache[26] = createBaseVNode("td", null, "Número de Boletos", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "number",
                                      modelValue: configForm.value.tickets_count,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => configForm.value.tickets_count = $event),
                                      modelModifiers: { number: true },
                                      placeholder: "Numérico",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[27] || (_cache[27] = createBaseVNode("td", null, "Precio del Boleto", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "number",
                                      step: "0.01",
                                      prefix: "$",
                                      modelValue: configForm.value.ticket_price,
                                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => configForm.value.ticket_price = $event),
                                      modelModifiers: { number: true },
                                      placeholder: "Monetario",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[28] || (_cache[28] = createBaseVNode("td", null, "Fecha de Creación", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "date",
                                      modelValue: configForm.value.created_date,
                                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => configForm.value.created_date = $event),
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[29] || (_cache[29] = createBaseVNode("td", null, "Fecha del Evento", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      type: "date",
                                      modelValue: configForm.value.event_date,
                                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => configForm.value.event_date = $event),
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[30] || (_cache[30] = createBaseVNode("td", null, "Lugar", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      modelValue: configForm.value.place,
                                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => configForm.value.place = $event),
                                      placeholder: "Campo de texto",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[31] || (_cache[31] = createBaseVNode("td", null, "Boleto Ganador", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      modelValue: configForm.value.winning_ticket,
                                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => configForm.value.winning_ticket = $event),
                                      placeholder: "Campo de texto",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[32] || (_cache[32] = createBaseVNode("td", null, "Nombre del Ganador", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      modelValue: configForm.value.winner_name,
                                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => configForm.value.winner_name = $event),
                                      placeholder: "Campo de texto",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ]),
                                createBaseVNode("tr", null, [
                                  _cache[33] || (_cache[33] = createBaseVNode("td", null, "Nombre del Vendedor Ganador", -1)),
                                  createBaseVNode("td", null, [
                                    createVNode(QInput, {
                                      outlined: "",
                                      dense: "",
                                      modelValue: configForm.value.seller_winner_name,
                                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => configForm.value.seller_winner_name = $event),
                                      placeholder: "Campo de texto",
                                      "hide-bottom-space": ""
                                    }, null, 8, ["modelValue"])
                                  ])
                                ])
                              ], 64)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_5, [
                          createVNode(QBtn, {
                            loading: configLoading.value,
                            type: "submit",
                            label: "Guardar Configuración",
                            color: "primary"
                          }, null, 8, ["loading"])
                        ])
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
export {
  _sfc_main as default
};
