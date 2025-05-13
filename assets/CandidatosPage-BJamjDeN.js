import { r as ref, o as onMounted, k as computed, R as createBlock, a as openBlock, w as withCtx, d as createVNode, b as createBaseVNode, g as createTextVNode, h as QIcon, x as withDirectives, Q as QBtn } from "./index-DNzcpddl.js";
import { Q as QTd } from "./QTd-D_yne8jU.js";
import { Q as QTable } from "./QTable-BF17cnq0.js";
import { Q as QSelect, h as QDialog } from "./QSelect-Dfccb1zM.js";
import { Q as QPage } from "./QPage-CuM6Q6cW.js";
import { api } from "./axios-rEY_Jecr.js";
import { a as QCardSection, Q as QCard } from "./QCard-NmYyN4JG.js";
import { D as DateTime, Q as QPopupProxy, a as QDate, b as QTime } from "./datetime-CKOLMVco.js";
import { Q as QInput } from "./QInput-uKsO-mcd.js";
import { C as ClosePopup } from "./ClosePopup-BNKXf0TW.js";
import { n as notify } from "./notify-ByjlCVX8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QSeparator-DQ_sL_0t.js";
import "./use-dark-WkhccWQ1.js";
import "./QList-CrD9GAVD.js";
import "./QCheckbox-DHyNCU4l.js";
import "./use-key-composition-DOj7cCcL.js";
import "./use-fullscreen-C2morA89.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
import "./use-render-cache-BA_W40LL.js";
const _hoisted_1$1 = { class: "page-title page-title--no-margin flex items-center" };
const _hoisted_2$1 = { class: "row items-center justify-end" };
const _hoisted_3 = { class: "row items-center justify-end" };
const _sfc_main$1 = {
  __name: "AppointmentForm",
  props: ["candidates"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const loading = ref(false);
    const errors = ref({});
    const areas = ref([]);
    const personal = ref([]);
    const appointment = ref({});
    onMounted(async () => {
      areas.value = (await api.get("roles")).data.data;
      areas.value = areas.value.map((area) => {
        let flag = appointmentTypes.value.find((type) => type.value == area.name);
        return { ...area, label: flag ? flag.label : area.name };
      });
    });
    async function fetchPersonal() {
      personal.value = (await api.get("personal", { params: { area: appointment.value.type_id } })).data.data;
    }
    const appointmentTypes = ref([
      { label: "Médico", value: "medico" },
      { label: "Nutrición", value: "nutricion" },
      { label: "Psicología", value: "psicologia" },
      { label: "Comunicación", value: "comunicacion" },
      { label: "Programa Escucha", value: "programa-escucha" }
    ]);
    const fulldatetime = computed(() => {
      let newDate = DateTime.fromFormat(date.value + " " + time.value, "dd/MM/yyyy hh:mm");
      return newDate.toISO();
    });
    const date = ref(DateTime.now().toFormat("dd/MM/yyyy"));
    const time = ref(DateTime.now().toFormat("hh:mm"));
    async function storeAppointment() {
      loading.value = true;
      errors.value = {};
      try {
        await api.post("appointments", { ...appointment.value, date: fulldatetime.value });
        notify.positive("Guardado con exito");
        emits("close");
      } catch (error) {
        console.log(error);
        errors.value = error.formatted ? error.formatted : {};
        notify.negative("Por favor, valide la informacion");
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "500px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(QIcon, {
                  name: "calendar_today",
                  class: "q-mr-sm"
                }),
                _cache[9] || (_cache[9] = createTextVNode(" Programar cita "))
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "q-gutter-y-md" }, {
            default: withCtx(() => [
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                class: "q-field--required",
                label: "Candidatos",
                options: __props.candidates,
                modelValue: appointment.value.candidate_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appointment.value.candidate_id = $event),
                "emit-value": "",
                "option-label": "full_name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                label: "Tipo de cita",
                class: "q-field--required",
                options: areas.value,
                modelValue: appointment.value.type_id,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => appointment.value.type_id = $event),
                  fetchPersonal
                ],
                "emit-value": "",
                "option-label": "label",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                label: "Atendera",
                class: "q-field--required",
                options: personal.value,
                modelValue: appointment.value.evaluator_id,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appointment.value.evaluator_id = $event),
                "emit-value": "",
                "option-label": "name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: date.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => date.value = $event),
                class: "q-field--required",
                label: "Seleccione fecha"
              }, {
                append: withCtx(() => [
                  createVNode(QIcon, {
                    name: "event",
                    class: "cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createVNode(QPopupProxy, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: withCtx(() => [
                          createVNode(QDate, {
                            modelValue: date.value,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => date.value = $event),
                            mask: "DD/MM/YYYY"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_2$1, [
                                withDirectives(createVNode(QBtn, {
                                  label: "Cerrar",
                                  color: "primary",
                                  flat: ""
                                }, null, 512), [
                                  [ClosePopup]
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: time.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => time.value = $event),
                class: "q-field--required",
                label: "Horario"
              }, {
                append: withCtx(() => [
                  createVNode(QIcon, {
                    name: "access_time",
                    class: "cursor-pointer"
                  }, {
                    default: withCtx(() => [
                      createVNode(QPopupProxy, {
                        cover: "",
                        "transition-show": "scale",
                        "transition-hide": "scale"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTime, {
                            modelValue: time.value,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => time.value = $event)
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_3, [
                                withDirectives(createVNode(QBtn, {
                                  label: "Cerrar",
                                  color: "primary",
                                  flat: ""
                                }, null, 512), [
                                  [ClosePopup]
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Observaciones",
                modelValue: appointment.value.comments,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => appointment.value.comments = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[8] || (_cache[8] = ($event) => emits("close")),
                class: "q-mr-sm",
                unelevated: "",
                outline: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("Cerrar")
                ])),
                _: 1
              }),
              createVNode(QBtn, {
                onClick: storeAppointment,
                unelevated: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("Guardar")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "CandidatosPage",
  setup(__props) {
    onMounted(() => fetchCandidates());
    async function fetchCandidates() {
      rows.value = (await api.get("candidates/dashboard")).data.data;
    }
    const appointmentDialog = ref(false);
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre de Candidato",
        align: "left",
        field: "full_name",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        align: "left",
        field: "sheet",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha de Evaluación",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.date : "NO DISPONIBLE",
        sortable: true
      },
      {
        name: "evaluator",
        label: "Evaluador",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.evaluator.name : "No disponible",
        sortable: true
      },
      {
        name: "is_candidate",
        label: "Candidato",
        align: "left",
        field: (row) => row.acceptance_status ? "Sí" : "No",
        sortable: true
      },
      {
        name: "notes",
        label: "Observaciones",
        align: "left",
        field: "diagnosis",
        sortable: false
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right",
        sortable: false
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-title" }, "Candidatos y Evaluaciones", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              color: "primary",
              icon: "description",
              outline: "",
              class: "q-mr-md",
              to: "/candidatos/reportes"
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("Reporte de candidatos ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "calendar_today",
              outline: "",
              onClick: _cache[0] || (_cache[0] = ($event) => appointmentDialog.value = true)
            }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("Programar cita ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "add",
              class: "q-ml-auto",
              unelevated: "",
              to: "/candidatos/registrar"
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode(" Nuevo Candidato ")
              ])),
              _: 1
            })
          ]),
          createVNode(QTable, {
            "wrap-cells": "",
            columns: columns.value,
            rows: rows.value,
            pagination: { rowsPerPage: 0 }
          }, {
            "body-cell-actions": withCtx((props) => [
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "edit",
                      to: `candidatos/${props.row.id}/editar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "chat",
                      to: `candidatos/${props.row.id}/entrevistar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "list",
                      to: `candidatos/${props.row.id}/evaluar`
                    }, null, 8, ["to"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows"]),
          createVNode(QDialog, {
            modelValue: appointmentDialog.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appointmentDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                candidates: rows.value,
                onClose: _cache[1] || (_cache[1] = ($event) => appointmentDialog.value = false)
              }, null, 8, ["candidates"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
const CandidatosPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2d4e9e5"]]);
export {
  CandidatosPage as default
};
