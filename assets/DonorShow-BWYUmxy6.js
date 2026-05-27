import { r as ref, x as onMounted, a4 as api, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a5 as QCard, a6 as QCardSection, Z as createBaseVNode, K as withDirectives, U as QBtn, ad as withModifiers, a9 as QInput, ac as QCardActions, aa as QDialog, L as createCommentVNode, X as useRoute, S as toDisplayString, O as createElementBlock, P as Fragment, R as renderList, M as createTextVNode, T as QSeparator } from "./index-73seMa9c.js";
import { Q as QItem, a as QItemSection } from "./QItem-BL3QQOOm.js";
import { Q as QList } from "./QList-COXbN_4Y.js";
import { Q as QBadge } from "./QBadge-CGw92e5K.js";
import { Q as QSelect, a as QChip } from "./QSelect-D7YhNIyE.js";
import { Q as QSpace } from "./QSpace-BKmdIqjc.js";
import { Q as QMarkupTable } from "./QMarkupTable-sgUXJ8ii.js";
import { Q as QPage } from "./QPage-CVA-KSVe.js";
import { n as notify } from "./notify-CI1eDtFr.js";
import { Q as QForm } from "./QForm-CdVxlQot.js";
import { C as ClosePopup } from "./ClosePopup-CmjI8Typ.js";
import { _ as _sfc_main$4 } from "./DonorFiscalRecordModal-z1JLyUyF.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
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
      donorId.value = id;
      if (rowData) {
        const data = { ...rowData };
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
      } catch (error) {
        console.log(error);
        notify.negative("Error al guardar la visita");
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
                                  "map-options": ""
                                }, null, 8, ["modelValue", "options"])
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
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.reason = $event)
                                }, null, 8, ["modelValue"])
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
const _hoisted_1 = { class: "text-h4 q-mb-xl text-weight-bold text-dark" };
const _hoisted_2 = { class: "row q-col-gutter-xl" };
const _hoisted_3 = { class: "col-12 col-md-4" };
const _hoisted_4 = { class: "col-12 col-md-4" };
const _hoisted_5 = { class: "col-12 col-md-4" };
const _hoisted_6 = { class: "row q-mt-lg" };
const _hoisted_7 = { class: "col-12" };
const _hoisted_8 = { class: "row bg-grey-1 q-pa-md rounded-borders q-col-gutter-md" };
const _hoisted_9 = { class: "col-12 col-md-4" };
const _hoisted_10 = { class: "col-12 col-md-4" };
const _hoisted_11 = { class: "col-12 col-md-4" };
const _hoisted_12 = { class: "row q-mt-lg" };
const _hoisted_13 = { class: "col-12" };
const _hoisted_14 = { class: "text-body2 text-dark q-mb-sm" };
const _hoisted_15 = { class: "text-body2 text-dark q-mb-xl" };
const _hoisted_16 = { class: "row q-gutter-sm items-center q-pt-sm" };
const _hoisted_17 = { class: "text-weight-bold" };
const _hoisted_18 = { class: "text-right" };
const _hoisted_19 = { class: "text-right" };
const _hoisted_20 = { class: "text-right" };
const _hoisted_21 = { class: "text-right" };
const _hoisted_22 = { class: "text-weight-medium text-primary" };
const _hoisted_23 = {
  style: { "max-width": "250px" },
  class: "ellipsis"
};
const _hoisted_24 = { class: "text-right text-weight-bold" };
const _hoisted_25 = { class: "text-grey-6" };
const _hoisted_26 = { key: 0 };
const _hoisted_27 = { key: 0 };
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
    async function handleFiscalAccept({ data }) {
      try {
        if (data.id) {
          await api.put(`/fiscal-records/${data.id}`, data);
        } else {
          await api.post("/fiscal-records", { ...data, donor_id: donor.value.id });
        }
        await loadDonorData();
        notify.positive("Registro actualizado");
      } catch (e) {
        notify.negative("Error al guardar " + e);
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
      const [year, month, day] = isoString.split("T")[0].split("-");
      if (!year || !month || !day) return isoString;
      return `${day}/${month}/${year}`;
    }
    const openVisit = (donorId, rowData = null) => {
      visitModalRef.value.open(donorId, rowData);
    };
    const openGratitude = (donorId, rowData = null) => {
      gratitudeModalRef.value.open(donorId, rowData);
    };
    onMounted(loadDonorData);
    return (_ctx, _cache) => {
      return donor.value ? (openBlock(), createBlock(QPage, {
        key: 0,
        class: "q-pa-lg"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, toDisplayString(donor.value.first_name) + " " + toDisplayString(donor.value.last_name), 1),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-xl"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-py-md bg-grey-1" }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createBaseVNode("div", { class: "text-subtitle1 text-weight-bold text-grey-9" }, "Ficha Completa de Donante", -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-lg" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", _hoisted_3, [
                      _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, "Identidad", -1)),
                      createVNode(QList, { dense: "" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList({
                            "ID:": donor.value.id,
                            "Nombre:": donor.value.full_name,
                            "Preferido:": donor.value.preferred_name || "N/A",
                            "Estado Civil:": donor.value.marital_status || "N/A",
                            "Género:": donor.value.gender || "N/A",
                            "Nacimiento:": donor.value.birth_date || "N/A"
                          }, (val, label) => {
                            return openBlock(), createBlock(QItem, {
                              key: label,
                              class: "row"
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, {
                                  side: "",
                                  class: "text-weight-bold text-grey-8",
                                  style: { "width": "100px" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(label), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(val), 1)
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
                    createBaseVNode("div", _hoisted_4, [
                      _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, " Contacto y Domicilio ", -1)),
                      createVNode(QList, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[5] || (_cache[5] = [
                                  createTextVNode("Celular:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
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
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[6] || (_cache[6] = [
                                  createTextVNode("Fijo:")
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
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[7] || (_cache[7] = [
                                  createTextVNode("Email:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
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
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[8] || (_cache[8] = [
                                  createTextVNode("Sector:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
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
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[9] || (_cache[9] = [
                                  createTextVNode("Domicilio:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { class: "text-caption" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString([
                                    donor.value.street,
                                    donor.value.exterior_number,
                                    donor.value.neighborhood,
                                    donor.value.city,
                                    donor.value.state,
                                    donor.value.country
                                  ].filter(Boolean).join(", ") || "N/A"), 1)
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
                    createBaseVNode("div", _hoisted_5, [
                      _cache[15] || (_cache[15] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-md" }, " Profesional y Estatus ", -1)),
                      createVNode(QList, { dense: "" }, {
                        default: withCtx(() => [
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[11] || (_cache[11] = [
                                  createTextVNode("Empresa:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
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
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[12] || (_cache[12] = [
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
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[13] || (_cache[13] = [
                                  createTextVNode("Estatus:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, { side: "" }, {
                                default: withCtx(() => [
                                  createVNode(QBadge, {
                                    color: donor.value.is_active ? "positive" : "negative",
                                    class: "q-px-sm"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(donor.value.is_active ? "ACTIVO" : "INACTIVO"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["color"])
                                ]),
                                _: 1
                              }),
                              createVNode(QItemSection)
                            ]),
                            _: 1
                          }),
                          createVNode(QItem, { class: "row" }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, {
                                side: "",
                                class: "text-weight-bold text-grey-8",
                                style: { "width": "100px" }
                              }, {
                                default: withCtx(() => _cache[14] || (_cache[14] = [
                                  createTextVNode("Privado:")
                                ])),
                                _: 1
                              }),
                              createVNode(QItemSection, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(donor.value.is_private_contact ? "SÍ" : "No"), 1)
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
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("div", _hoisted_7, [
                      _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-subtitle2 text-primary text-weight-bold q-mb-sm" }, " Datos del Cónyuge y Familia ", -1)),
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          _cache[16] || (_cache[16] = createBaseVNode("strong", null, "Nombre:", -1)),
                          createTextVNode(" " + toDisplayString([donor.value.spouse_first_name, donor.value.spouse_last_name, donor.value.spouse_second_last_name].filter(Boolean).join(" ") || "N/A"), 1)
                        ]),
                        createBaseVNode("div", _hoisted_10, [
                          _cache[17] || (_cache[17] = createBaseVNode("strong", null, "Nacimiento:", -1)),
                          createTextVNode(" " + toDisplayString(donor.value.spouse_birth_date || "N/A"), 1)
                        ]),
                        createBaseVNode("div", _hoisted_11, [
                          _cache[18] || (_cache[18] = createBaseVNode("strong", null, "Aniversario:", -1)),
                          createTextVNode(" " + toDisplayString(donor.value.wedding_anniversary || "N/A"), 1)
                        ])
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("div", _hoisted_14, [
                        _cache[20] || (_cache[20] = createBaseVNode("strong", null, "Restricciones de Contacto:", -1)),
                        createTextVNode(" " + toDisplayString(donor.value.contact_restrictions || "Sin restricciones"), 1)
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        _cache[21] || (_cache[21] = createBaseVNode("strong", null, "Notas:", -1)),
                        createTextVNode(" " + toDisplayString(donor.value.notes || "Sin notas registradas"), 1)
                      ]),
                      createVNode(QSeparator, { class: "q-mb-md" }),
                      createBaseVNode("div", _hoisted_16, [
                        _cache[25] || (_cache[25] = createBaseVNode("span", { class: "text-subtitle2 text-weight-bold text-secondary q-mr-sm" }, "Trazabilidad:", -1)),
                        createVNode(QChip, {
                          outline: "",
                          color: "blue-7",
                          "text-color": "blue-7",
                          icon: "event",
                          class: "q-px-md"
                        }, {
                          default: withCtx(() => [
                            _cache[22] || (_cache[22] = createBaseVNode("span", { class: "text-weight-bold q-mr-xs" }, "Creado:", -1)),
                            createTextVNode(" " + toDisplayString(formatDate(donor.value.created_at)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QChip, {
                          outline: "",
                          color: "orange-8",
                          "text-color": "orange-8",
                          icon: "edit_calendar",
                          class: "q-px-md"
                        }, {
                          default: withCtx(() => [
                            _cache[23] || (_cache[23] = createBaseVNode("span", { class: "text-weight-bold q-mr-xs" }, "Última actualización:", -1)),
                            createTextVNode(" " + toDisplayString(formatDate(donor.value.updated_at)), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(QChip, {
                          outline: "",
                          color: "teal-8",
                          "text-color": "teal-8",
                          icon: "published_with_changes",
                          class: "q-px-md"
                        }, {
                          default: withCtx(() => [
                            _cache[24] || (_cache[24] = createBaseVNode("span", { class: "text-weight-bold q-mr-xs" }, "Cambio de estatus:", -1)),
                            createTextVNode(" " + toDisplayString(formatDate(donor.value.status_changed_at)), 1)
                          ]),
                          _: 1
                        })
                      ])
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
                  _cache[26] || (_cache[26] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Razones / Denominaciones Sociales", -1)),
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
                      _cache[27] || (_cache[27] = createBaseVNode("thead", null, [
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
                            createBaseVNode("td", _hoisted_17, toDisplayString(fiscal.rfc), 1),
                            createBaseVNode("td", null, toDisplayString(fiscal.tax_name), 1),
                            createBaseVNode("td", null, toDisplayString(fiscal.billing_contact_name), 1),
                            createBaseVNode("td", _hoisted_18, [
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
                                onClick: ($event) => _ctx.deleteFiscal(fiscal.id)
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
                  _cache[28] || (_cache[28] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Bitácora de Visitas", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nueva Visita",
                    unelevated: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => openVisit(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[29] || (_cache[29] = createBaseVNode("thead", null, [
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
                            createBaseVNode("td", _hoisted_19, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                onClick: ($event) => openVisit(donor.value.id, visit)
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
                  _cache[30] || (_cache[30] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Agradecimientos", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nuevo Agradecimiento",
                    unelevated: "",
                    onClick: _cache[1] || (_cache[1] = ($event) => openGratitude(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[31] || (_cache[31] = createBaseVNode("thead", null, [
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
                            createBaseVNode("td", _hoisted_20, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                onClick: ($event) => openGratitude(donor.value.id, gratitude)
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
                  _cache[32] || (_cache[32] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, " Bitácora de Envío de Tarjetas, Videos y Otros ", -1)),
                  createVNode(QSpace),
                  createVNode(QBtn, {
                    color: "primary",
                    label: "(+) Nuevo Envío",
                    unelevated: "",
                    onClick: _cache[2] || (_cache[2] = ($event) => openShipmentModal(donor.value.id))
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[33] || (_cache[33] = createBaseVNode("thead", null, [
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
                            createBaseVNode("td", _hoisted_21, [
                              createVNode(QBtn, {
                                flat: "",
                                round: "",
                                dense: "",
                                icon: "sym_o_edit",
                                color: "secondary",
                                onClick: ($event) => openShipmentModal(donor.value.id, shipment)
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
                  _cache[34] || (_cache[34] = createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Historial de Donativos", -1)),
                  createVNode(QSpace)
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[36] || (_cache[36] = createBaseVNode("thead", null, [
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
                            createBaseVNode("td", _hoisted_22, toDisplayString(donative.folio_number), 1),
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
                            createBaseVNode("td", _hoisted_23, toDisplayString(donative.concept || "N/A"), 1),
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
                            createBaseVNode("td", _hoisted_24, [
                              createTextVNode(" $ " + toDisplayString(donative.amount) + " ", 1),
                              createBaseVNode("small", _hoisted_25, toDisplayString(donative.currency), 1)
                            ])
                          ]);
                        }), 128)),
                        !donor.value.donations || donor.value.donations.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_26, _cache[35] || (_cache[35] = [
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
                default: withCtx(() => _cache[37] || (_cache[37] = [
                  createBaseVNode("div", { class: "text-h6 text-grey-9 text-weight-medium" }, "Historial de Cambios de Estatus", -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, { flat: "" }, {
                    default: withCtx(() => [
                      _cache[39] || (_cache[39] = createBaseVNode("thead", null, [
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
                        !donor.value.status_logs || donor.value.status_logs.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_27, _cache[38] || (_cache[38] = [
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
