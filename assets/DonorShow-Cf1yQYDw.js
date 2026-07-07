import { r as ref, x as onMounted, a4 as api, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a5 as QCard, a6 as QCardSection, Z as createBaseVNode, K as withDirectives, U as QBtn, af as withModifiers, a7 as QInput, ae as QCardActions, aa as QDialog, L as createCommentVNode, X as useRoute, S as toDisplayString, Q as QIcon, M as createTextVNode, O as createElementBlock, P as Fragment, R as renderList, T as QSeparator } from "./index-Lpbv6tCz.js";
import { Q as QBadge } from "./QBadge-BF2oxqEK.js";
import { Q as QItem, a as QItemSection } from "./QItem-hGGqEP0j.js";
import { Q as QList } from "./QList-VjDLrJpF.js";
import { Q as QExpansionItem } from "./QExpansionItem-B0eFPBRc.js";
import { Q as QSpace } from "./QSpace-DDJHlChA.js";
import { Q as QMarkupTable } from "./QMarkupTable-CAF8YLQ6.js";
import { Q as QPage } from "./QPage-C8CB305j.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { a as QSelect } from "./QSelect-A9ZZmmDT.js";
import { Q as QForm } from "./QForm-_kiBS9mb.js";
import { C as ClosePopup } from "./ClosePopup-FQHseU-J.js";
import { _ as _sfc_main$4 } from "./DonorFiscalRecordModal-DFWnIAP-.js";
import { d as date } from "./date-s2hr6oY7.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./format-BC-UoHKJ.js";
const _sfc_main$3 = {
  __name: "DonorVisitModal",
  emits: ["saved"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const loading = ref(false);
    const users = ref([]);
    const donorId = ref(null);
    const errors = ref({});
    const form = ref(getCleanForm());
    function getCleanForm() {
      return {
        visit_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        enlac_user_id: null,
        recommended_by: "",
        reason: "",
        schedule_contact_name: "",
        schedule_contact_phone: "",
        received_by: "",
        visitors_names: "",
        material_presented: "",
        result: "",
        comments: "",
        interests_hobbies: ""
      };
    }
    onMounted(async () => {
      const { data } = await api.get("/users?type=select");
      users.value = data.data;
    });
    function open(id, rowData = null) {
      errors.value = {};
      donorId.value = id;
      if (rowData) {
        const data = { ...rowData };
        if (data.visit_date) {
          data.visit_date = data.visit_date.split("T")[0];
        }
        if (data.responsible && data.responsible.id) {
          data.enlac_user_id = data.responsible.id;
        }
        form.value = data;
      } else {
        form.value = getCleanForm();
        form.value.donor_id = id;
      }
      isOpen.value = true;
    }
    async function save() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = { ...form.value };
        delete payload.responsible;
        delete payload.created_at;
        delete payload.updated_at;
        if (payload.id) {
          await api.put(`/donor-visits/${payload.id}`, payload);
        } else {
          await api.post("/donor-visits", payload);
        }
        notify.positive("Visita guardada correctamente");
        emit("saved");
        isOpen.value = false;
      } catch (err) {
        console.error(err);
        if (err.response && err.response.status === 422) {
          errors.value = err.response.data.errors || {};
          notify.negative("Por favor, corrige los campos marcados en rojo");
        } else {
          notify.negative("Error al guardar la visita");
        }
      } finally {
        loading.value = false;
      }
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => isOpen.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "1000px", "max-width": "95vw" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "bg-primary text-white row items-center" }, {
                default: withCtx(() => [
                  _cache[13] || (_cache[13] = createBaseVNode("div", { class: "text-h6" }, "Nueva Visita", -1)),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "sym_o_close"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QForm, {
                onSubmit: withModifiers(save, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: "scroll",
                    style: { "max-height": "65vh" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QMarkupTable, {
                        flat: "",
                        class: "system-form-table"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              _cache[14] || (_cache[14] = createBaseVNode("td", null, "Fecha de Visita", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.visit_date,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.visit_date = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[15] || (_cache[15] = createBaseVNode("td", null, "Contacto ENLAC responsable de la Visita *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.enlac_user_id,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.enlac_user_id = $event),
                                  options: users.value,
                                  "emit-value": "",
                                  "map-options": "",
                                  error: !!errors.value.enlac_user_id,
                                  "error-message": Array.isArray(errors.value.enlac_user_id) ? errors.value.enlac_user_id[0] : errors.value.enlac_user_id
                                }, null, 8, ["modelValue", "options", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[16] || (_cache[16] = createBaseVNode("td", null, "Quién recomienda la Visita", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.recommended_by,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.recommended_by = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[17] || (_cache[17] = createBaseVNode("td", null, "Motivo de la Visita*", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.reason,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.reason = $event),
                                  error: !!errors.value.reason,
                                  "error-message": Array.isArray(errors.value.reason) ? errors.value.reason[0] : errors.value.reason
                                }, null, 8, ["modelValue", "error", "error-message"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[18] || (_cache[18] = createBaseVNode("td", null, "Nombre del contacto para agendar la Visita", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.schedule_contact_name,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.schedule_contact_name = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[19] || (_cache[19] = createBaseVNode("td", null, "Celular del Contacto", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.schedule_contact_phone,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.schedule_contact_phone = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[20] || (_cache[20] = createBaseVNode("td", null, "Nombre de la Persona que recibe", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.received_by,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.received_by = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[21] || (_cache[21] = createBaseVNode("td", null, "Personas que realizan la visita", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.visitors_names,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.visitors_names = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[22] || (_cache[22] = createBaseVNode("td", null, "Material que se les presento", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.material_presented,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.material_presented = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[23] || (_cache[23] = createBaseVNode("td", null, "Resultado", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.result,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.result = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[24] || (_cache[24] = createBaseVNode("td", null, "Comentarios, Notas y Puntos a dar Seguimiento", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.comments,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.comments = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[25] || (_cache[25] = createBaseVNode("td", null, "Intereses personales / Hobbies / Circunstancias a considerar", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.interests_hobbies,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.interests_hobbies = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        label: "Guardar",
                        type: "submit",
                        color: "primary",
                        loading: loading.value
                      }, null, 8, ["loading"])
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
const _sfc_main$2 = {
  __name: "DonorGratitudeModal",
  emits: ["saved"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const loading = ref(false);
    const donorId = ref(null);
    const deliveryOptions = ["Correo electrónico", "WhatsApp", "Visita personal"];
    const form = ref(getCleanForm());
    function getCleanForm() {
      return {
        donor_id: null,
        date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        campaign_program: "",
        type: "",
        delivery_method: "WhatsApp",
        recipient_name: ""
      };
    }
    function open(id, rowData = null) {
      donorId.value = id;
      if (rowData) {
        form.value = {
          ...getCleanForm(),
          ...rowData,
          donor_id: id
        };
      } else {
        form.value = getCleanForm();
        form.value.donor_id = id;
      }
      isOpen.value = true;
    }
    async function save() {
      try {
        loading.value = true;
        const payload = { ...form.value };
        delete payload.created_at;
        delete payload.updated_at;
        console.log("Enviando payload al servidor:", payload);
        let response;
        if (payload.id) {
          response = await api.put(`/donor-gratitudes/${payload.id}`, payload);
        } else {
          response = await api.post("/donor-gratitudes", payload);
        }
        console.log("Respuesta del servidor:", response);
        notify.positive("Agradecimiento guardado correctamente");
        emit("saved");
        isOpen.value = false;
      } catch (error) {
        console.error("Error completo capturado:", error.response || error);
        notify.negative("Error al guardar: revisa la consola para el error técnico");
      } finally {
        loading.value = false;
      }
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isOpen.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "700px", "max-width": "95vw" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "bg-primary text-white row items-center" }, {
                default: withCtx(() => [
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-h6" }, "Bitácora de Agradecimientos", -1)),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "sym_o_close"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QForm, {
                onSubmit: withModifiers(save, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: "scroll",
                    style: { "max-height": "65vh" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QMarkupTable, {
                        flat: "",
                        class: "system-form-table"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              _cache[7] || (_cache[7] = createBaseVNode("td", null, "Fecha", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.date,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.date = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[8] || (_cache[8] = createBaseVNode("td", null, "Campaña / Programa *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.campaign_program,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.campaign_program = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[9] || (_cache[9] = createBaseVNode("td", null, "Tipo de Agradecimiento *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.type,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.type = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[10] || (_cache[10] = createBaseVNode("td", null, "Método de Envío *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.delivery_method,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.delivery_method = $event),
                                  options: deliveryOptions,
                                  "emit-value": "",
                                  "map-options": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[11] || (_cache[11] = createBaseVNode("td", null, "Persona a quien se entrega", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.recipient_name,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.recipient_name = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        label: "Guardar",
                        type: "submit",
                        color: "primary",
                        loading: loading.value
                      }, null, 8, ["loading"])
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
const _sfc_main$1 = {
  __name: "DonorShipmentModal",
  emits: ["saved"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const loading = ref(false);
    const methods = ["Correo electrónico", "WhatsApp", "Visita personal"];
    const form = ref({});
    function open(id, rowData = null) {
      form.value = rowData ? { ...rowData } : {
        donor_id: id,
        date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        material_description: "",
        delivery_method: "WhatsApp"
      };
      isOpen.value = true;
    }
    async function save() {
      try {
        loading.value = true;
        if (form.value.id) await api.put(`/donor-shipments/${form.value.id}`, form.value);
        else await api.post("/donor-shipments", form.value);
        notify.positive("Envío guardado correctamente");
        emit("saved");
        isOpen.value = false;
      } catch (e) {
        notify.negative("Error al guardar " + e);
      } finally {
        loading.value = false;
      }
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isOpen.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "700px", "max-width": "95vw" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "bg-primary text-white row items-center" }, {
                default: withCtx(() => [
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-h6" }, "Nuevo Envío", -1)),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "sym_o_close"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QForm, {
                onSubmit: withModifiers(save, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, {
                    class: "scroll",
                    style: { "max-height": "65vh" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QMarkupTable, {
                        flat: "",
                        class: "system-form-table"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("tbody", null, [
                            createBaseVNode("tr", null, [
                              _cache[5] || (_cache[5] = createBaseVNode("td", null, "Fecha de envío *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.date,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.date = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[6] || (_cache[6] = createBaseVNode("td", null, "Descripción del material *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.material_description,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.material_description = $event)
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[7] || (_cache[7] = createBaseVNode("td", null, "Método de envío *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.delivery_method,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.delivery_method = $event),
                                  options: methods,
                                  "emit-value": "",
                                  "map-options": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QCardActions, { align: "right" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        label: "Guardar",
                        type: "submit",
                        color: "primary",
                        loading: loading.value
                      }, null, 8, ["loading"])
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
const _hoisted_1 = { class: "row items-center q-mb-xl" };
const _hoisted_2 = { class: "text-h4 text-weight-bold text-dark" };
const _hoisted_3 = { class: "row items-center q-gutter-x-sm" };
const _hoisted_4 = { class: "text-caption text-grey-7" };
const _hoisted_5 = { class: "text-weight-bold text-grey-9" };
const _hoisted_6 = { class: "text-weight-medium text-grey-9" };
const _hoisted_7 = { class: "row q-col-gutter-xl" };
const _hoisted_8 = {
  class: "col-12 col-md-4",
  style: { "border-right": "1px dashed #e0e0e0" }
};
const _hoisted_9 = {
  class: "col-12 col-md-4",
  style: { "border-right": "1px dashed #e0e0e0" }
};
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "text-grey-5 text-weight-bold" };
const _hoisted_13 = {
  key: 1,
  class: "text-italic text-grey-5"
};
const _hoisted_14 = { class: "col-12 col-md-4" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = {
  key: 0,
  class: "text-grey-6 text-caption"
};
const _hoisted_17 = {
  key: 1,
  class: "text-grey-5 text-italic text-caption"
};
const _hoisted_18 = {
  key: 0,
  class: "text-grey-6 text-caption q-mt-xs text-weight-normal"
};
const _hoisted_19 = { key: 0 };
const _hoisted_20 = {
  key: 1,
  class: "q-ml-xs"
};
const _hoisted_21 = { class: "q-mt-lg bg-grey-2 rounded-borders" };
const _hoisted_22 = { class: "row q-col-gutter-md" };
const _hoisted_23 = { class: "col-12 col-sm-6" };
const _hoisted_24 = {
  key: 0,
  class: "row q-gutter-xs"
};
const _hoisted_25 = {
  key: 1,
  class: "text-caption text-italic text-grey-5"
};
const _hoisted_26 = { class: "col-12 col-sm-6" };
const _hoisted_27 = {
  class: "text-caption text-grey-9 bg-grey-1 q-pa-sm rounded-borders q-mb-none",
  style: { "white-space": "pre-wrap" }
};
const _hoisted_28 = { class: "row q-gutter-x-md text-caption text-grey-6 justify-end q-pt-xs" };
const _hoisted_29 = { class: "text-weight-bold" };
const _hoisted_30 = { class: "text-right" };
const _hoisted_31 = { class: "text-right" };
const _hoisted_32 = { class: "text-right" };
const _hoisted_33 = { class: "text-right" };
const _hoisted_34 = { class: "text-weight-medium text-primary" };
const _hoisted_35 = {
  style: { "max-width": "250px" },
  class: "ellipsis"
};
const _hoisted_36 = { class: "text-right text-weight-bold" };
const _hoisted_37 = { class: "text-grey-6" };
const _hoisted_38 = { key: 0 };
const _hoisted_39 = { key: 0 };
const _sfc_main = {
  __name: "DonorShow",
  setup(__props) {
    const route = useRoute();
    const donor = ref(null);
    const shipmentModal = ref(null);
    const fiscalModalRef = ref(null);
    const openShipmentModal = (id, rowData = null) => {
      shipmentModal.value.open(id, rowData);
    };
    function openAddFiscal() {
      fiscalModalRef.value.open(null, null);
    }
    function openEditFiscal(fiscal, index) {
      fiscalModalRef.value.open(fiscal, index);
    }
    async function handleFiscalAccept({ data, closeModal, setErrors }) {
      try {
        if (data.id) {
          await api.put(`/fiscal-records/${data.id}`, data);
        } else {
          await api.post("/fiscal-records", { ...data, donor_id: donor.value.id });
        }
        await loadDonorData();
        notify.positive("Registro actualizado con éxito");
        closeModal();
      } catch (e) {
        if (e.response && e.response.status === 422) {
          notify.negative(e.response.data.message || "Verifica los campos requeridos");
          if (e.response.data.errors) {
            setErrors(e.response.data.errors);
          }
        } else {
          notify.negative("Error al guardar: " + (e.message || e));
        }
      }
    }
    async function deleteFiscal(id) {
      try {
        const confirmed = confirm(
          "¿Estás seguro de eliminar este registro fiscal? Esta acción no se puede deshacer."
        );
        if (!confirmed) return;
        await api.delete(`/fiscal-records/${id}`);
        await loadDonorData();
        notify.positive("Registro eliminado con éxito");
      } catch (e) {
        console.error(e);
        notify.negative("Error al eliminar el registro: " + (e.response?.data?.message || e.message));
      }
    }
    const visitModalRef = ref(null);
    const gratitudeModalRef = ref(null);
    async function loadDonorData() {
      const { data } = await api.get(`/donors/${route.params.id}`);
      donor.value = data;
    }
    function formatDate(isoString) {
      if (!isoString) return "N/A";
      const dateOnly = isoString.split("T")[0];
      const [year, month, day] = dateOnly.split("-");
      const d = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.formatDate(d, "DD/MM/YYYY");
    }
    function formatLocalDate(dateString) {
      if (!dateString) return "N/A";
      const cleanDate = dateString.split("T")[0];
      const [year, month, day] = cleanDate.split("-");
      const localDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.formatDate(localDate, "DD/MM/YYYY");
    }
    const openVisit = (donorId, rowData = null) => {
      visitModalRef.value.open(donorId, rowData);
    };
    const openGratitude = (donorId, rowData = null) => {
      gratitudeModalRef.value.open(donorId, rowData);
    };
    async function deleteVisit(id) {
      try {
        const confirmed = confirm(
          "¿Estás seguro de eliminar esta visita? Esta acción no se puede deshacer."
        );
        if (!confirmed) return;
        await api.delete(`/donor-visits/${id}`);
        await loadDonorData();
        notify.positive("Visita eliminada con éxito");
      } catch (e) {
        console.error(e);
        notify.negative("Error al eliminar la visita: " + (e.response?.data?.message || e.message));
      }
    }
    async function deleteGratitude(id) {
      try {
        const confirmed = confirm(
          "¿Estás seguro de eliminar este agradecimiento? Esta acción no se puede deshacer."
        );
        if (!confirmed) return;
        await api.delete(`/donor-gratitudes/${id}`);
        await loadDonorData();
        notify.positive("Agradecimiento eliminado con éxito");
      } catch (e) {
        console.error(e);
        notify.negative(
          "Error al eliminar el agradecimiento: " + (e.response?.data?.message || e.message)
        );
      }
    }
    async function deleteShipment(id) {
      try {
        const confirmed = confirm(
          "¿Estás seguro de eliminar este registro de envío? Esta acción no se puede deshacer."
        );
        if (!confirmed) return;
        await api.delete(`/donor-shipments/${id}`);
        await loadDonorData();
        notify.positive("Envío eliminado con éxito");
      } catch (e) {
        console.error(e);
        notify.negative("Error al eliminar el envío: " + (e.response?.data?.message || e.message));
      }
    }
    onMounted(loadDonorData);
    return (_ctx, _cache) => {
      return donor.value ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "q-pa-lg"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              color: "grey-8",
              class: "q-mr-md",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.push("/donors"))
            }),
            createBaseVNode("div", _hoisted_2, toDisplayString(donor.value.first_name) + " " + toDisplayString(donor.value.last_name), 1)
          ]),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-py-sm bg-grey-1 row items-center justify-between" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QIcon, {
                      name: donor.value.donor_type === "Moral" ? "corporate_fare" : "person",
                      color: "primary",
                      size: "xs"
                    }, null, 8, ["name"]),
                    createBaseVNode("div", _hoisted_4, [
                      _cache[4] || (_cache[4] = createTextVNode(" Kardex ID: ")),
                      createBaseVNode("span", _hoisted_5, "#" + toDisplayString(donor.value.id), 1),
                      _cache[5] || (_cache[5] = createBaseVNode("span", { class: "q-mx-xs" }, "|", -1)),
                      _cache[6] || (_cache[6] = createTextVNode(" Tipo: ")),
                      createBaseVNode("span", _hoisted_6, toDisplayString(donor.value.donor_type || "Físico"), 1)
                    ])
                  ]),
                  createVNode(QBadge, {
                    color: donor.value.is_active ? "positive" : "negative",
                    class: "q-px-sm text-weight-bold"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(donor.value.is_active ? "ACTIVO" : "INACTIVO"), 1)
                    ]),
                    _: 1
                  }, 8, ["color"])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-lg" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, " Identidad y Perfil ", -1)),
                      createVNode(QList, {
                        dense: "",
                        class: "q-gutter-y-xs"
                      }, {
                        default: withCtx(() => [
                          donor.value.donor_type !== "Moral" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[7] || (_cache[7] = [
                                    createTextVNode("Nombre(s):")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.first_name), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[8] || (_cache[8] = [
                                    createTextVNode("Apellidos:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString([donor.value.last_name, donor.value.second_last_name].filter(Boolean).join(" ") || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[9] || (_cache[9] = [
                                    createTextVNode("Prefiere Llamada:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, { class: "text-italic text-secondary" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.preferred_name || "No especificado"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[10] || (_cache[10] = [
                                    createTextVNode("Sexo / Género:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.gender || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[11] || (_cache[11] = [
                                    createTextVNode("Nacimiento:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(formatLocalDate(donor.value.birth_date)), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[12] || (_cache[12] = [
                                    createTextVNode("Estado Civil:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.marital_status || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[13] || (_cache[13] = [
                                    createTextVNode("Razon Social:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, { class: "text-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.company_name), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[14] || (_cache[14] = [
                                    createTextVNode("Representante:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.full_name || "No asignado"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "140px" }
                                }, {
                                  default: withCtx(() => _cache[15] || (_cache[15] = [
                                    createTextVNode("Puesto:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.job_title || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64))
                        ]),
                        _: 1
                      })
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      _cache[22] || (_cache[22] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, " Contacto y Ubicación ", -1)),
                      createVNode(QList, {
                        dense: "",
                        class: "q-gutter-y-xs"
                      }, {
                        default: withCtx(() => [
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "100px" }
                              }, {
                                default: withCtx(() => _cache[17] || (_cache[17] = [
                                  createTextVNode("Celular:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.cellphone || "N/A"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "100px" }
                              }, {
                                default: withCtx(() => _cache[18] || (_cache[18] = [
                                  createTextVNode("Tel. Fijo:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.landline || "N/A"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "100px" }
                              }, {
                                default: withCtx(() => _cache[19] || (_cache[19] = [
                                  createTextVNode("Correo:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-ellipsis text-primary" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.personal_email || "N/A"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "100px" }
                              }, {
                                default: withCtx(() => _cache[20] || (_cache[20] = [
                                  createTextVNode("Sector:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.sector || "N/A"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row items-start" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "100px" }
                              }, {
                                default: withCtx(() => _cache[21] || (_cache[21] = [
                                  createTextVNode("Domicilio:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-caption text-grey-9" }, {
                                default: withCtx(() => [
                                  donor.value.street || donor.value.exterior_number || donor.value.neighborhood ? (openBlock(), createElementBlock("div", _hoisted_10, [
                                    createTextVNode(toDisplayString(donor.value.street) + " " + toDisplayString(donor.value.exterior_number) + " ", 1),
                                    donor.value.neighborhood ? (openBlock(), createElementBlock("div", _hoisted_11, "Col. " + toDisplayString(donor.value.neighborhood), 1)) : createCommentVNode("", true),
                                    createBaseVNode("div", null, toDisplayString([donor.value.city, donor.value.state].filter(Boolean).join(", ")) + " " + toDisplayString(donor.value.postal_code ? `C.P. ${donor.value.postal_code}` : ""), 1),
                                    createBaseVNode("div", _hoisted_12, toDisplayString(donor.value.country), 1)
                                  ])) : (openBlock(), createElementBlock("div", _hoisted_13, " Sin domicilio particular registrado "))
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
                    createBaseVNode("div", _hoisted_14, [
                      _cache[30] || (_cache[30] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, " Vínculos y Restricciones ", -1)),
                      createVNode(QList, {
                        dense: "",
                        class: "q-gutter-y-xs"
                      }, {
                        default: withCtx(() => [
                          donor.value.donor_type !== "Moral" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "155px" }
                                }, {
                                  default: withCtx(() => _cache[23] || (_cache[23] = [
                                    createTextVNode("Empresa:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.company_name || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QItem, { class: "row" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-7 no-wrap",
                                  style: { "min-width": "155px" }
                                }, {
                                  default: withCtx(() => _cache[24] || (_cache[24] = [
                                    createTextVNode("Puesto:")
                                  ])),
                                  _: 1
                                }),
                                createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(donor.value.job_title || "N/A"), 1)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true),
                          createVNode(QItem, { class: "row items-start" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "155px" }
                              }, {
                                default: withCtx(() => _cache[25] || (_cache[25] = [
                                  createTextVNode("Conectado por:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                default: withCtx(() => [
                                  donor.value.referred_by ? (openBlock(), createElementBlock("div", _hoisted_15, [
                                    createTextVNode(toDisplayString(donor.value.referred_by) + " ", 1),
                                    donor.value.referral_relationship ? (openBlock(), createElementBlock("span", _hoisted_16, " (" + toDisplayString(donor.value.referral_relationship) + ")", 1)) : createCommentVNode("", true)
                                  ])) : (openBlock(), createElementBlock("div", _hoisted_17, " Directo / Ninguno "))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "155px" }
                              }, {
                                default: withCtx(() => _cache[26] || (_cache[26] = [
                                  createTextVNode("¿Conoce ENLAC?:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.knows_facilities ? "SÍ" : "No"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          donor.value.donor_type !== "Moral" ? (openBlock(), createBlock(QItem, {
                            key: 1,
                            class: "row items-start"
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "155px" }
                              }, {
                                default: withCtx(() => _cache[27] || (_cache[27] = [
                                  createTextVNode("Cónyuge:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", null, toDisplayString([
                                    donor.value.spouse_first_name,
                                    donor.value.spouse_last_name,
                                    donor.value.spouse_second_last_name
                                  ].filter(Boolean).join(" ") || "N/A"), 1),
                                  donor.value.spouse_birth_date || donor.value.wedding_anniversary ? (openBlock(), createElementBlock("div", _hoisted_18, [
                                    donor.value.spouse_birth_date ? (openBlock(), createElementBlock("span", _hoisted_19, " 🎂 " + toDisplayString(formatLocalDate(donor.value.spouse_birth_date)), 1)) : createCommentVNode("", true),
                                    donor.value.wedding_anniversary ? (openBlock(), createElementBlock("span", _hoisted_20, "💍 " + toDisplayString(donor.value.wedding_anniversary), 1)) : createCommentVNode("", true)
                                  ])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-7 no-wrap",
                                style: { "min-width": "155px" }
                              }, {
                                default: withCtx(() => _cache[28] || (_cache[28] = [
                                  createTextVNode("Contacto Privado:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-grey-9 text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.is_private_contact ? "SÍ (EXCLUIR MASIVOS)" : "NO"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row items-start" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-negative no-wrap",
                                style: { "min-width": "155px" }
                              }, {
                                default: withCtx(() => _cache[29] || (_cache[29] = [
                                  createTextVNode("Restricciones:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-negative text-weight-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.contact_restrictions || "Sin restricciones de contacto"), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_21, [
                    createVNode(QExpansionItem, {
                      icon: "assignment",
                      label: "Ver Campañas de Prospección y Notas Internas",
                      "header-class": "text-weight-medium text-grey-8",
                      dense: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QCard, { class: "bg-white q-pa-md" }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_22, [
                              createBaseVNode("div", _hoisted_23, [
                                _cache[31] || (_cache[31] = createBaseVNode("div", { class: "text-caption text-weight-bold text-grey-7 q-mb-xs" }, " Prospecto para: ", -1)),
                                donor.value.prospect_for && donor.value.prospect_for.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.prospect_for, (campaign) => {
                                    return openBlock(), createBlock(QBadge, {
                                      key: campaign,
                                      color: "indigo-1",
                                      "text-color": "indigo-9",
                                      class: "text-weight-bold"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(campaign), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ])) : (openBlock(), createElementBlock("div", _hoisted_25, " No asignado como prospecto activo. "))
                              ]),
                              createBaseVNode("div", _hoisted_26, [
                                _cache[32] || (_cache[32] = createBaseVNode("div", { class: "text-caption text-weight-bold text-grey-7 q-mb-xs" }, " Observaciones generales: ", -1)),
                                createBaseVNode("p", _hoisted_27, toDisplayString(donor.value.notes || "Sin anotaciones adicionales."), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(QSeparator, { class: "q-mt-md q-mb-xs" }),
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("div", null, [
                      createVNode(QIcon, {
                        name: "event",
                        size: "14px",
                        class: "q-mr-xs"
                      }),
                      _cache[33] || (_cache[33] = createBaseVNode("strong", null, "Creado:", -1)),
                      createTextVNode(" " + toDisplayString(donor.value.created_at ? donor.value.created_at.split("T")[0] : "N/A"), 1)
                    ]),
                    createBaseVNode("div", null, [
                      createVNode(QIcon, {
                        name: "edit_calendar",
                        size: "14px",
                        class: "q-mr-xs"
                      }),
                      _cache[34] || (_cache[34] = createBaseVNode("strong", null, "Actualizado:", -1)),
                      createTextVNode(" " + toDisplayString(donor.value.updated_at ? donor.value.updated_at.split("T")[0] : "N/A"), 1)
                    ]),
                    createBaseVNode("div", null, [
                      createVNode(QIcon, {
                        name: "published_with_changes",
                        size: "14px",
                        class: "q-mr-xs"
                      }),
                      _cache[35] || (_cache[35] = createBaseVNode("strong", null, "Estatus:", -1)),
                      createTextVNode(" " + toDisplayString(donor.value.status_changed_at ? donor.value.status_changed_at.split("T")[0] : "N/A"), 1)
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center bg-grey-2 q-py-md" }, {
                default: withCtx(() => [
                  _cache[36] || (_cache[36] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Razones / Denominaciones Sociales", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nueva",
                    unelevated: "",
                    onClick: openAddFiscal
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  donor.value.fiscal_records && donor.value.fiscal_records.length > 0 ? (openBlock(), createBlock(QMarkupTable, {
                    key: 0,
                    flat: ""
                  }, {
                    default: withCtx(() => [
                      _cache[37] || (_cache[37] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "RFC"),
                          createBaseVNode("th", { class: "text-left" }, "Razón Social"),
                          createBaseVNode("th", { class: "text-left" }, "Contacto Cobranza"),
                          createBaseVNode("th", { class: "text-right" }, "Acciones")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.fiscal_records, (fiscal, index) => {
                          return openBlock(), createElementBlock("tr", {
                            key: fiscal.id
                          }, [
                            createBaseVNode("td", _hoisted_29, toDisplayString(fiscal.rfc), 1),
                            createBaseVNode("td", null, toDisplayString(fiscal.tax_name), 1),
                            createBaseVNode("td", null, toDisplayString(fiscal.billing_contact_name), 1),
                            createBaseVNode("td", _hoisted_30, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "primary",
                                class: "q-mr-xs",
                                onClick: ($event) => openEditFiscal(fiscal, index)
                              }, null, 8, ["onClick"]),
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_delete",
                                color: "negative",
                                onClick: ($event) => deleteFiscal(fiscal.id)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-py-md bg-grey-1" }, {
                default: withCtx(() => [
                  _cache[38] || (_cache[38] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Bitácora de Visitas", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nueva Visita",
                    unelevated: "",
                    onClick: _cache[1] || (_cache[1] = ($event) => openVisit(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[39] || (_cache[39] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "Fecha"),
                          createBaseVNode("th", { class: "text-left" }, "Contacto ENLAC"),
                          createBaseVNode("th", { class: "text-left" }, "Motivo"),
                          createBaseVNode("th", { class: "text-right" }, "Acciones")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.visits, (visit) => {
                          return openBlock(), createElementBlock("tr", {
                            key: visit.id
                          }, [
                            createBaseVNode("td", null, toDisplayString(formatDate(visit.visit_date)), 1),
                            createBaseVNode("td", null, toDisplayString(visit.responsible?.name) + " " + toDisplayString(visit.responsible?.last_name), 1),
                            createBaseVNode("td", null, toDisplayString(visit.reason), 1),
                            createBaseVNode("td", _hoisted_31, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                class: "q-mr-xs",
                                onClick: ($event) => openVisit(donor.value.id, visit)
                              }, null, 8, ["onClick"]),
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_delete",
                                color: "negative",
                                onClick: ($event) => deleteVisit(visit.id)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-py-md bg-grey-1" }, {
                default: withCtx(() => [
                  _cache[40] || (_cache[40] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Agradecimientos", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nuevo Agradecimiento",
                    unelevated: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => openGratitude(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[41] || (_cache[41] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "Fecha"),
                          createBaseVNode("th", { class: "text-left" }, "Campaña / Programa"),
                          createBaseVNode("th", { class: "text-left" }, "Tipo de Agradecimiento"),
                          createBaseVNode("th", { class: "text-left" }, "Método de Envio"),
                          createBaseVNode("th", { class: "text-left" }, "Persona a quien se Entrega"),
                          createBaseVNode("th", { class: "text-right" }, "Acciones")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.gratitudes, (gratitude) => {
                          return openBlock(), createElementBlock("tr", {
                            key: gratitude.id
                          }, [
                            createBaseVNode("td", null, toDisplayString(formatDate(gratitude.date)), 1),
                            createBaseVNode("td", null, toDisplayString(gratitude.campaign_program), 1),
                            createBaseVNode("td", null, toDisplayString(gratitude.type), 1),
                            createBaseVNode("td", null, toDisplayString(gratitude.delivery_method), 1),
                            createBaseVNode("td", null, toDisplayString(gratitude.recipient_name), 1),
                            createBaseVNode("td", _hoisted_32, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                class: "q-mr-xs",
                                onClick: ($event) => openGratitude(donor.value.id, gratitude)
                              }, null, 8, ["onClick"]),
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_delete",
                                color: "negative",
                                onClick: ($event) => deleteGratitude(gratitude.id)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-md"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-py-md bg-grey-1" }, {
                default: withCtx(() => [
                  _cache[42] || (_cache[42] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, " Bitácora de Envío de Tarjetas, Videos y Otros ", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nuevo Envío",
                    unelevated: "",
                    onClick: _cache[3] || (_cache[3] = ($event) => openShipmentModal(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[43] || (_cache[43] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "Fecha"),
                          createBaseVNode("th", { class: "text-left" }, "Descripción del Material"),
                          createBaseVNode("th", { class: "text-left" }, "Método de Envío"),
                          createBaseVNode("th", { class: "text-right" }, "Acciones")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.shipments, (shipment) => {
                          return openBlock(), createElementBlock("tr", {
                            key: shipment.id
                          }, [
                            createBaseVNode("td", null, toDisplayString(formatDate(shipment.date)), 1),
                            createBaseVNode("td", null, toDisplayString(shipment.material_description), 1),
                            createBaseVNode("td", null, toDisplayString(shipment.delivery_method), 1),
                            createBaseVNode("td", _hoisted_33, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                class: "q-mr-xs",
                                onClick: ($event) => openShipmentModal(donor.value.id, shipment)
                              }, null, 8, ["onClick"]),
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_delete",
                                color: "negative",
                                onClick: ($event) => deleteShipment(shipment.id)
                              }, null, 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-py-md bg-grey-1" }, {
                default: withCtx(() => [
                  _cache[44] || (_cache[44] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Historial de Donativos", -1)),
                  createVNode(QSpace)
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[46] || (_cache[46] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "No. Folio"),
                          createBaseVNode("th", { class: "text-left" }, "Fecha de Pago"),
                          createBaseVNode("th", { class: "text-left" }, "Tipo de Actividad"),
                          createBaseVNode("th", { class: "text-left" }, "Concepto / Actividad"),
                          createBaseVNode("th", { class: "text-left" }, "Forma de Pago"),
                          createBaseVNode("th", { class: "text-left" }, "Recibo Deducible"),
                          createBaseVNode("th", { class: "text-right" }, "Monto")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.donations, (donative) => {
                          return openBlock(), createElementBlock("tr", {
                            key: donative.id
                          }, [
                            createBaseVNode("td", _hoisted_34, toDisplayString(donative.folio_number), 1),
                            createBaseVNode("td", null, toDisplayString(formatDate(donative.payment_date)), 1),
                            createBaseVNode("td", null, [
                              createVNode(QBadge, {
                                color: "blue-grey-6",
                                outline: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donative.activity_type), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createBaseVNode("td", _hoisted_35, toDisplayString(donative.concept || "N/A"), 1),
                            createBaseVNode("td", null, toDisplayString(donative.payment_method), 1),
                            createBaseVNode("td", null, [
                              createVNode(QBadge, {
                                color: donative.has_tax_receipt ? "positive" : "grey-5"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donative.has_tax_receipt ? donative.tax_receipt_number || "Sí (Sin Folio)" : "No"), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createBaseVNode("td", _hoisted_36, [
                              createTextVNode(" $ " + toDisplayString(donative.amount) + " ", 1),
                              createBaseVNode("small", _hoisted_37, toDisplayString(donative.currency), 1)
                            ])
                          ]);
                        }), 128)),
                        !donor.value.donations || donor.value.donations.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_38, _cache[45] || (_cache[45] = [
                          createBaseVNode("td", {
                            colspan: "7",
                            class: "text-center text-grey-6 q-py-md"
                          }, " No se han registrado donativos para este donante. ", -1)
                        ]))) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-py-md bg-grey-1" }, {
                default: withCtx(() => _cache[47] || (_cache[47] = [
                  createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Historial de Cambios de Estatus", -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[49] || (_cache[49] = createBaseVNode("thead", null, [
                        createBaseVNode("tr", { class: "bg-grey-1 text-grey-7" }, [
                          createBaseVNode("th", { class: "text-left" }, "Estatus Cambiado a"),
                          createBaseVNode("th", { class: "text-left" }, "Fecha y Hora")
                        ])
                      ], -1)),
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(donor.value.status_logs, (log) => {
                          return openBlock(), createElementBlock("tr", {
                            key: log.id
                          }, [
                            createBaseVNode("td", null, [
                              createVNode(QBadge, {
                                color: log.is_active ? "positive" : "negative"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(log.is_active ? "ACTIVO" : "INACTIVO"), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]),
                            createBaseVNode("td", null, toDisplayString(formatDate(log.changed_at)), 1)
                          ]);
                        }), 128)),
                        !donor.value.status_logs || donor.value.status_logs.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_39, _cache[48] || (_cache[48] = [
                          createBaseVNode("td", {
                            colspan: "2",
                            class: "text-center text-grey-6 q-py-md"
                          }, " No hay historial de cambios registrado. ", -1)
                        ]))) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_sfc_main$3, {
            ref_key: "visitModalRef",
            ref: visitModalRef,
            onSaved: loadDonorData
          }, null, 512),
          createVNode(_sfc_main$2, {
            ref_key: "gratitudeModalRef",
            ref: gratitudeModalRef,
            onSaved: loadDonorData
          }, null, 512),
          createVNode(_sfc_main$1, {
            ref_key: "shipmentModal",
            ref: shipmentModal,
            onSaved: loadDonorData
          }, null, 512),
          createVNode(_sfc_main$4, {
            ref_key: "fiscalModalRef",
            ref: fiscalModalRef,
            onAccept: handleFiscalAccept
          }, null, 512)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
};
export {
  _sfc_main as default
};
