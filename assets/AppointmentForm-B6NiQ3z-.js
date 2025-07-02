import { r as ref, o as onMounted, m as computed, j as createBlock, a as openBlock, w as withCtx, d as createVNode, b as createBaseVNode, g as createTextVNode, h as QIcon, v as withDirectives, Q as QBtn } from "./index-BKlFzi9U.js";
import { a as QCardSection, Q as QCard } from "./QCard-ChwXMyjm.js";
import { Q as QSelect } from "./QSelect-DKl0wMy2.js";
import { D as DateTime, Q as QPopupProxy, a as QDate, b as QTime } from "./datetime-D36_sh8N.js";
import { Q as QInput } from "./QInput-Cl4GFezJ.js";
import { C as ClosePopup } from "./ClosePopup-1XzxlS47.js";
import { api } from "./axios-DnBXXbR5.js";
import { n as notify } from "./notify-DpPex7WU.js";
const _hoisted_1 = { class: "page-title q-mb-none flex items-center text-primary" };
const _hoisted_2 = { class: "row q-col-gutter-x-md" };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = { class: "row items-center justify-end" };
const _hoisted_5 = { class: "col-6" };
const _hoisted_6 = { class: "row items-center justify-end" };
const _sfc_main = {
  __name: "AppointmentForm",
  props: ["candidates"],
  emits: ["close", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const loading = ref(false);
    const errors = ref({});
    const areas = ref([]);
    const personal = ref([]);
    const appointment = ref({});
    onMounted(async () => {
      areas.value = (await api.get("work_areas")).data.data;
      appointment.value.candidate_id = props.candidates.length ? props.candidates[0].id : null;
    });
    async function fetchPersonal() {
      let params = { area: appointment.value.type_id };
      personal.value = (await api.get("personal", { params })).data.data;
    }
    const fulldatetime = computed(() => {
      let newDate = DateTime.fromFormat(date.value + " " + time.value, "dd/MM/yyyy hh:mm");
      return newDate.toISO();
    });
    const date = ref(DateTime.now().toFormat("dd/MM/yyyy"));
    const time = ref(DateTime.now().toFormat("hh:mm"));
    async function storeAppointment() {
      try {
        loading.value = true;
        errors.value = {};
        let newAppointment = (await api.post("appointments", {
          ...appointment.value,
          date: fulldatetime.value
        })).data.data;
        notify.positive("Guardado con exito");
        emits("save", newAppointment);
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
          createVNode(QCardSection, { style: { "border-bottom": "1px solid #d9d9d9" } }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QIcon, {
                  name: "calendar_today",
                  class: "q-mr-md"
                }),
                _cache[9] || (_cache[9] = createTextVNode(" Programar Cita "))
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
                disable: __props.candidates.length == 1,
                options: __props.candidates,
                modelValue: appointment.value.candidate_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appointment.value.candidate_id = $event),
                "emit-value": "",
                "option-label": "full_name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["disable", "options", "modelValue"]),
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
                "option-label": "name",
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
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
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
                                  createBaseVNode("div", _hoisted_4, [
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
                  }, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_5, [
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
                                  createBaseVNode("div", _hoisted_6, [
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
                  }, 8, ["modelValue"])
                ])
              ]),
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
                color: "primary",
                loading: loading.value
              }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("Guardar")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as _
};
