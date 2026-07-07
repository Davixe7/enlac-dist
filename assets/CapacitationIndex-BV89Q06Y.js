import { r as ref, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a5 as QCard, a6 as QCardSection, Z as createBaseVNode, K as withDirectives, S as toDisplayString, U as QBtn, af as withModifiers, a7 as QInput, Q as QIcon, L as createCommentVNode, M as createTextVNode, a9 as QCheckbox, aa as QDialog, a4 as api, x as onMounted } from "./index-D8dGxR_o.js";
import { a as QSelect, Q as QChip } from "./QSelect-CrhGdhCv.js";
import { Q as QTd } from "./QTd-BFLtCilK.js";
import { Q as QBadge } from "./QBadge-Bw-0E5yr.js";
import { Q as QTooltip } from "./QTooltip-FoNXMHvB.js";
import { Q as QTable } from "./QTable-VflfFEGr.js";
import { Q as QPage } from "./QPage-BNlFXyGl.js";
import { n as notify } from "./notify-BXzUQ3RT.js";
import { d as date } from "./date-CmgNuwIn.js";
import { Q as QSpace } from "./QSpace-B023KKJX.js";
import { Q as QTime } from "./QTime-Dvm033aF.js";
import { Q as QMenu } from "./QMenu-P9699Vod.js";
import { Q as QMarkupTable } from "./QMarkupTable-Ca2XLBMv.js";
import { Q as QForm } from "./QForm-BZcpejmh.js";
import { C as ClosePopup } from "./ClosePopup-DRf8Xhae.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QItem-C80OgkSj.js";
import "./format-BC-UoHKJ.js";
import "./selection-C01nRuKQ.js";
import "./QVirtualScroll-CNbaPK8j.js";
import "./QList-56XDwGA0.js";
import "./use-fullscreen-_EaDTVwW.js";
import "./touch-BscSWsHh.js";
import "./use-datetime-ikfWr-s6.js";
const _hoisted_1$1 = { class: "text-h6 text-weight-bold" };
const _hoisted_2 = { class: "row q-col-gutter-xs" };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = { class: "col-6" };
const _hoisted_5 = { class: "text-bold" };
const _hoisted_6 = { class: "row items-center justify-between no-wrap" };
const _hoisted_7 = { class: "text-bold" };
const _hoisted_8 = { class: "row items-center justify-between no-wrap" };
const _hoisted_9 = { class: "flex items-center" };
const _hoisted_10 = { class: "flex justify-end q-mt-md q-gutter-x-sm" };
const _sfc_main$1 = {
  __name: "CapacitationDialog",
  emits: ["saved"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const dialog = ref(false);
    const loading = ref(false);
    const errors = ref({});
    const isEditing = ref(false);
    const itemId = ref(null);
    const userOptions = ref([]);
    const contactOptions = ref([]);
    const form = ref({
      name: "",
      date: date.formatDate(Date.now(), "YYYY-MM-DD"),
      start_time: "",
      end_time: "",
      location: "",
      description: "",
      internal_guests: [],
      external_guests: [],
      send_emails: false
    });
    async function loadInitialData() {
      try {
        const [resUsers, resContacts] = await Promise.all([
          api.get("/users?type=select"),
          api.get("/contacts?type=select")
        ]);
        userOptions.value = resUsers.data.data || resUsers.data || [];
        contactOptions.value = resContacts.data.data || resContacts.data || [];
      } catch (e) {
        console.error(e);
        notify.negative("No se pudieron cargar los listados de invitados");
      }
    }
    function open(item = null) {
      resetForm();
      loadInitialData();
      if (item) {
        isEditing.value = true;
        itemId.value = item.id;
        const rawInternal = item.internal_guests || item.internalGuests || [];
        const rawExternal = item.external_guests || item.externalGuests || [];
        form.value = {
          name: item.name,
          date: item.date,
          start_time: item.start_time,
          end_time: item.end_time,
          location: item.location,
          description: item.description || "",
          internal_guests: rawInternal.map((u) => typeof u === "object" ? u.id : u),
          external_guests: rawExternal.map((c) => typeof c === "object" ? c.id : c),
          send_emails: false
        };
      } else {
        isEditing.value = false;
        itemId.value = null;
      }
      dialog.value = true;
    }
    async function save() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = {
          ...form.value,
          internal_guests: form.value.internal_guests,
          external_guests: form.value.external_guests
        };
        if (isEditing.value) {
          await api.put(`/capacitations/${itemId.value}`, payload);
          notify.positive("Capacitación actualizada con éxito");
        } else {
          await api.post("/capacitations", payload);
          notify.positive("Capacitación registrada con éxito");
        }
        emit("saved");
        dialog.value = false;
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 422) {
          errors.value = error.response.data.errors || {};
        } else {
          notify.negative("Ocurrió un error al procesar la solicitud");
        }
      } finally {
        loading.value = false;
      }
    }
    function resetForm() {
      form.value = {
        name: "",
        date: date.formatDate(Date.now(), "YYYY-MM-DD"),
        start_time: "",
        end_time: "",
        location: "",
        description: "",
        internal_guests: [],
        external_guests: [],
        send_emails: false
      };
      errors.value = {};
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: dialog.value,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => dialog.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "800px", "max-width": "95vw" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, toDisplayString(isEditing.value ? "Editar Capacitación" : "Nueva Capacitación"), 1),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    icon: "close",
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QForm, {
                    onSubmit: withModifiers(save, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(QMarkupTable, {
                        flat: "",
                        class: "donation-form-table"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              _cache[12] || (_cache[12] = createBaseVNode("td", { class: "text-bold" }, "Capacitación *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  modelValue: form.value.name,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                                  outlined: "",
                                  dense: "",
                                  placeholder: "Nombre del evento o taller",
                                  error: !!errors.value.name,
                                  "error-message": errors.value.name?.[0],
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[13] || (_cache[13] = createBaseVNode("td", { class: "text-bold" }, "Fecha *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  modelValue: form.value.date,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.date = $event),
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  error: !!errors.value.date,
                                  "error-message": errors.value.date?.[0],
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[14] || (_cache[14] = createBaseVNode("td", { class: "text-bold" }, "Horario *", -1)),
                              createBaseVNode("td", null, [
                                createBaseVNode("div", _hoisted_2, [
                                  createBaseVNode("div", _hoisted_3, [
                                    createVNode(QInput, {
                                      modelValue: form.value.start_time,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.start_time = $event),
                                      outlined: "",
                                      dense: "",
                                      placeholder: "Hora de Entrada (ej. 08:00 AM)",
                                      error: !!errors.value.start_time,
                                      "error-message": errors.value.start_time?.[0],
                                      "hide-bottom-space": ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(QIcon, {
                                          name: "access_time",
                                          class: "cursor-pointer"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(QMenu, {
                                              anchor: "bottom end",
                                              self: "top end"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QTime, {
                                                  modelValue: form.value.start_time,
                                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.start_time = $event),
                                                  mask: "hh:mm A",
                                                  "label-color": "primary"
                                                }, null, 8, ["modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "error", "error-message"])
                                  ]),
                                  createBaseVNode("div", _hoisted_4, [
                                    createVNode(QInput, {
                                      modelValue: form.value.end_time,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.end_time = $event),
                                      outlined: "",
                                      dense: "",
                                      placeholder: "Hora de Salida (ej. 12:00 PM)",
                                      error: !!errors.value.end_time,
                                      "error-message": errors.value.end_time?.[0],
                                      "hide-bottom-space": ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(QIcon, {
                                          name: "access_time",
                                          class: "cursor-pointer"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(QMenu, {
                                              anchor: "bottom end",
                                              self: "top end"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(QTime, {
                                                  modelValue: form.value.end_time,
                                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.end_time = $event),
                                                  mask: "hh:mm A",
                                                  color: "primary"
                                                }, null, 8, ["modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "error", "error-message"])
                                  ])
                                ])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[15] || (_cache[15] = createBaseVNode("td", { class: "text-bold" }, "Lugar *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  modelValue: form.value.location,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.location = $event),
                                  outlined: "",
                                  dense: "",
                                  placeholder: "Ubicación física o enlace virtual",
                                  error: !!errors.value.location,
                                  "error-message": errors.value.location?.[0],
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", _hoisted_5, [
                                createBaseVNode("div", _hoisted_6, [
                                  _cache[16] || (_cache[16] = createBaseVNode("span", null, "Invitados Internos", -1)),
                                  form.value.internal_guests?.length > 0 ? (openBlock(), createBlock(QBadge, {
                                    key: 0,
                                    color: "blue-2",
                                    "text-color": "blue-9",
                                    class: "text-bold q-ml-xs"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(form.value.internal_guests.length), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  modelValue: form.value.internal_guests,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.internal_guests = $event),
                                  multiple: "",
                                  "use-chips": "",
                                  outlined: "",
                                  dense: "",
                                  "options-dense": "",
                                  options: userOptions.value,
                                  "option-label": "label",
                                  "option-value": "value",
                                  "emit-value": "",
                                  "map-options": "",
                                  placeholder: "Seleccione los usuarios internos...",
                                  class: "guests-dropdown",
                                  error: !!errors.value.internal_guests,
                                  "error-message": errors.value.internal_guests?.[0],
                                  "hide-bottom-space": ""
                                }, {
                                  "selected-item": withCtx((scope) => [
                                    createVNode(QChip, {
                                      removable: "",
                                      dense: "",
                                      onRemove: ($event) => scope.removeAtIndex(scope.index),
                                      tabindex: scope.tabindex,
                                      color: "blue-2",
                                      "text-color": "blue-9",
                                      class: "q-ma-none q-mr-xs text-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(scope.opt.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onRemove", "tabindex"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "options", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              createBaseVNode("td", _hoisted_7, [
                                createBaseVNode("div", _hoisted_8, [
                                  _cache[17] || (_cache[17] = createBaseVNode("span", null, "Invitados Externos", -1)),
                                  form.value.external_guests?.length > 0 ? (openBlock(), createBlock(QBadge, {
                                    key: 0,
                                    color: "orange-2",
                                    "text-color": "orange-9",
                                    class: "text-bold q-ml-xs"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(form.value.external_guests.length), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  modelValue: form.value.external_guests,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.external_guests = $event),
                                  multiple: "",
                                  "use-chips": "",
                                  outlined: "",
                                  dense: "",
                                  "options-dense": "",
                                  options: contactOptions.value,
                                  "option-label": "label",
                                  "option-value": "value",
                                  "emit-value": "",
                                  "map-options": "",
                                  placeholder: contactOptions.value.length === 0 ? "No se encontraron contactos externos..." : "Seleccione los contactos externos...",
                                  class: "guests-dropdown",
                                  error: !!errors.value.external_guests,
                                  "error-message": errors.value.external_guests?.[0],
                                  "hide-bottom-space": ""
                                }, {
                                  "selected-item": withCtx((scope) => [
                                    createVNode(QChip, {
                                      removable: "",
                                      dense: "",
                                      onRemove: ($event) => scope.removeAtIndex(scope.index),
                                      tabindex: scope.tabindex,
                                      color: "orange-2",
                                      "text-color": "orange-9",
                                      class: "q-ma-none q-mr-xs text-weight-medium"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(scope.opt.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["onRemove", "tabindex"])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "options", "placeholder", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[18] || (_cache[18] = createBaseVNode("td", { class: "text-bold" }, "Descripción", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  modelValue: form.value.description,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.description = $event),
                                  outlined: "",
                                  dense: "",
                                  type: "textarea",
                                  rows: "2",
                                  placeholder: "Notas o requerimientos de la capacitación...",
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[19] || (_cache[19] = createBaseVNode("td", { class: "text-bold" }, "Notificaciones", -1)),
                              createBaseVNode("td", _hoisted_9, [
                                createVNode(QCheckbox, {
                                  modelValue: form.value.send_emails,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.send_emails = $event),
                                  label: "Enviar invitación automática por correo electrónico al guardar"
                                }, null, 8, ["modelValue"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createBaseVNode("div", _hoisted_10, [
                        withDirectives(createVNode(QBtn, {
                          flat: "",
                          label: "Cancelar"
                        }, null, 512), [
                          [ClosePopup]
                        ]),
                        createVNode(QBtn, {
                          unelevated: "",
                          icon: "save",
                          label: "Confirmar y Guardar",
                          color: "primary",
                          type: "submit",
                          loading: loading.value
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
      }, 8, ["modelValue"]);
    };
  }
};
const _hoisted_1 = { class: "row items-center justify-between q-mb-md" };
const _sfc_main = {
  __name: "CapacitationIndex",
  setup(__props) {
    const capacitations = ref([]);
    const loading = ref(false);
    const capacitationDialogRef = ref(null);
    const paginationConfig = ref({
      sortBy: "date",
      descending: true,
      page: 1,
      rowsPerPage: 15
    });
    const columns = [
      {
        name: "name",
        label: "Nombre de la Capacitación",
        field: "name",
        align: "left",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha",
        field: "date",
        align: "center",
        sortable: true
      },
      {
        name: "start_time",
        label: "Hora Inicial",
        field: "start_time",
        align: "center"
      },
      {
        name: "end_time",
        label: "Hora Final",
        field: "end_time",
        align: "center"
      },
      {
        name: "location",
        label: "Lugar",
        field: "location",
        align: "left",
        sortable: true
      },
      {
        name: "internal_count",
        label: "Invitados Internos",
        field: "internal_count",
        align: "center",
        sortable: true
      },
      {
        name: "external_count",
        label: "Invitados Externos",
        field: "external_count",
        align: "center",
        sortable: true
      },
      {
        name: "actions",
        label: "Acciones",
        field: "actions",
        align: "center"
      }
    ];
    async function fetchCapacitations() {
      try {
        loading.value = true;
        const response = await api.get("/capacitations");
        capacitations.value = response.data.data || response.data || [];
      } catch (e) {
        console.error("Error al consultar capacitaciones:", e);
        notify.negative("No se pudo cargar el listado de capacitaciones");
      } finally {
        loading.value = false;
      }
    }
    function openCapacitationDialog(capacitation = null) {
      if (capacitationDialogRef.value) {
        capacitationDialogRef.value.open(capacitation);
      }
    }
    function formatDateString(dateVal) {
      if (!dateVal) return "";
      return date.formatDate(date.extractDate(dateVal, "YYYY-MM-DD"), "DD/MM/YYYY");
    }
    onMounted(() => {
      fetchCapacitations();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[1] || (_cache[1] = createBaseVNode("div", null, [
              createBaseVNode("div", null, [
                createBaseVNode("h1", { class: "page-title q-mb-none" }, "Control de Capacitaciones")
              ]),
              createBaseVNode("p", { class: "text-caption text-grey-7 q-mb-none" }, " Historial, registro y gestión de invitados para capacitaciones de ENLAC. ")
            ], -1)),
            createVNode(QBtn, {
              color: "primary",
              icon: "add",
              label: "Nueva Capacitación",
              unelevated: "",
              onClick: _cache[0] || (_cache[0] = ($event) => openCapacitationDialog())
            })
          ]),
          createVNode(QCard, {
            flat: "",
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(QTable, {
                rows: capacitations.value,
                columns,
                "row-key": "id",
                flat: "",
                loading: loading.value,
                pagination: paginationConfig.value,
                "no-data-label": "No se encontraron capacitaciones registradas",
                "loading-label": "Cargando capacitaciones..."
              }, {
                "body-cell-date": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      createVNode(QChip, {
                        outline: "",
                        square: "",
                        color: "blue-grey",
                        "text-color": "blue-grey",
                        dense: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            name: "event",
                            class: "q-mr-xs"
                          }),
                          createTextVNode(" " + toDisplayString(formatDateString(props.row.date)), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-start_time": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      createVNode(QChip, {
                        flat: "",
                        color: "grey-3",
                        "text-color": "grey-9",
                        dense: "",
                        class: "text-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            name: "play_arrow",
                            color: "green",
                            class: "q-mr-xs"
                          }),
                          createTextVNode(" " + toDisplayString(props.row.start_time), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-end_time": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      createVNode(QChip, {
                        flat: "",
                        color: "grey-3",
                        "text-color": "grey-9",
                        dense: "",
                        class: "text-weight-medium"
                      }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            name: "stop",
                            color: "red",
                            class: "q-mr-xs"
                          }),
                          createTextVNode(" " + toDisplayString(props.row.end_time), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-internal_count": withCtx((props) => [
                  createVNode(QTd, {
                    props,
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBadge, {
                        color: "blue-2",
                        "text-color": "blue-9",
                        class: "text-bold q-px-sm q-py-xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.internal_count) + " internos ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-external_count": withCtx((props) => [
                  createVNode(QTd, {
                    props,
                    class: "text-center"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBadge, {
                        color: "orange-2",
                        "text-color": "orange-9",
                        class: "text-bold q-px-sm q-py-xs"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.row.external_count) + " externos ", 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                "body-cell-actions": withCtx((props) => [
                  createVNode(QTd, {
                    props,
                    class: "q-gutter-x-sm"
                  }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        dense: "",
                        color: "primary",
                        icon: "edit",
                        onClick: ($event) => openCapacitationDialog(props.row)
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => _cache[2] || (_cache[2] = [
                              createTextVNode("Editar capacitación")
                            ])),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 1
              }, 8, ["rows", "loading", "pagination"])
            ]),
            _: 1
          }),
          createVNode(_sfc_main$1, {
            ref_key: "capacitationDialogRef",
            ref: capacitationDialogRef,
            onRefresh: fetchCapacitations,
            onSaved: fetchCapacitations
          }, null, 512)
        ]),
        _: 1
      });
    };
  }
};
const CapacitationIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d04202f8"]]);
export {
  CapacitationIndex as default
};
