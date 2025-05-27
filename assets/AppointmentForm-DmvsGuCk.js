import { r as ref, j as onMounted, a as computed, I as createBlock, J as openBlock, K as withCtx, M as createVNode, N as createBaseVNode, O as createTextVNode, Q as QIcon, e as withDirectives, P as QBtn } from "./index-cCQoerBE.js";
import { a as QCardSection, Q as QCard } from "./QCard-hZAF9mJo.js";
import { Q as QSelect } from "./QSelect-CtZdKzvL.js";
import { D as DateTime, Q as QPopupProxy, a as QDate, b as QTime } from "./datetime-D3M9Tjak.js";
import { Q as QInput } from "./QInput-BzETij5i.js";
import { C as ClosePopup } from "./ClosePopup-CVMW4Ps2.js";
import { api } from "./axios-ByMy53kN.js";
import { n as notify } from "./notify-DMNPTzhM.js";
const _hoisted_1 = { class: "page-title page-title--no-margin flex items-center" };
const _hoisted_2 = { class: "row items-center justify-end" };
const _hoisted_3 = { class: "row items-center justify-end" };
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
      personal.value = (await api.get("personal", { params: { area: appointment.value.type_id } })).data.data;
    }
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
        let newAppointment = (await api.post("appointments", { ...appointment.value, date: fulldatetime.value })).data.data;
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
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
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
                              createBaseVNode("div", _hoisted_2, [
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
