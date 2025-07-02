import { Q as QInput } from "./QInput-Cl4GFezJ.js";
import { Q as QSelect } from "./QSelect-DKl0wMy2.js";
import { Q as QCheckbox } from "./QCheckbox-s2Kvsmmx.js";
import { Q as QRadio } from "./QRadio-CaSQ0QVf.js";
import { aJ as useModel, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, r as ref, m as computed, o as onMounted, j as createBlock, w as withCtx, e as withModifiers, s as createCommentVNode, Q as QBtn, g as createTextVNode } from "./index-BKlFzi9U.js";
import { Q as QForm } from "./QForm-P-BH0S5t.js";
import { a as QCardSection, Q as QCard } from "./QCard-ChwXMyjm.js";
import { n as notify } from "./notify-DpPex7WU.js";
import { api } from "./axios-DnBXXbR5.js";
const _hoisted_1$1 = { class: "receipt-form" };
const _hoisted_2$1 = { class: "row q-col-gutter-x-md q-mb-md" };
const _hoisted_3$1 = { class: "col-12 col-sm-4" };
const _hoisted_4$1 = { class: "col-12 col-sm-8" };
const _hoisted_5$1 = { class: "row q-col-gutter-x-md q-mb-md" };
const _hoisted_6$1 = { class: "col-12 col-sm-4" };
const _hoisted_7$1 = { class: "col-12 col-sm-8" };
const _sfc_main$1 = {
  __name: "DeductibleReceiptForm",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const fiscalRegimeOptions = [
      { label: "601 - General de Ley Personas Morales", value: "601" },
      { label: "612 - Personas Físicas con Actividades Empresariales", value: "612" }
      // Agrega más según SAT
    ];
    const cfdiOptions = [
      { label: "G03 - Gastos en general", value: "G03" },
      { label: "P01 - Por definir", value: "P01" }
      // Agrega más opciones necesarias
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "RFC",
              modelValue: model.value.rfc,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value.rfc = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Nombre o Razón Social",
              modelValue: model.value.company_name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.company_name = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Correo",
              modelValue: model.value.email,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.email = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Régimen Fiscal",
              modelValue: model.value.fiscalRegime,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.fiscalRegime = $event),
              options: fiscalRegimeOptions,
              "hide-bottom-space": "",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Uso de CFDI",
              modelValue: model.value.cfdi,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.value.cfdi = $event),
              options: cfdiOptions,
              "hide-bottom-space": "",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        _cache[14] || (_cache[14] = createBaseVNode("div", { class: "form-section-label q-mb-none" }, "Domicilio", -1)),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Calle",
              modelValue: model.value.street,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.value.street = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Número exterior",
              modelValue: model.value.external_number,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.external_number = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Código Postal",
              modelValue: model.value.zip_code,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.value.zip_code = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Colonia",
              modelValue: model.value.neighborhood,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.value.neighborhood = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Ciudad",
              modelValue: model.value.city,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.value.city = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Estado",
              modelValue: model.value.state,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.value.state = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "País",
              modelValue: model.value.country,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.value.country = $event),
              "hide-bottom-space": ""
            }, null, 8, ["modelValue"])
          ])
        ]),
        _cache[15] || (_cache[15] = createBaseVNode("div", { class: "form-section-label q-mb-none" }, "Otros", -1)),
        createVNode(QInput, {
          outlined: "",
          "stack-label": "",
          label: "Observaciones",
          modelValue: model.value.observations,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.value.observations = $event),
          "hide-bottom-space": ""
        }, null, 8, ["modelValue"]),
        createVNode(QInput, {
          outlined: "",
          "stack-label": "",
          label: "Constancia de situación fiscal",
          modelValue: model.value.fiscalStatus,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.value.fiscalStatus = $event),
          "hide-bottom-space": ""
        }, null, 8, ["modelValue"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "form-row" };
const _hoisted_2 = { class: "form-row" };
const _hoisted_3 = { class: "form-row" };
const _hoisted_4 = { class: "form-row" };
const _hoisted_5 = { class: "form-row" };
const _hoisted_6 = { class: "form-row" };
const _hoisted_7 = { class: "form-row" };
const _hoisted_8 = { class: "form-row" };
const _hoisted_9 = { class: "form-row" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "PaymentConfigForm",
  props: ["sponsorId", "candidateId", "paymentConfigId"],
  emits: ["save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const errors = ref({});
    const loading = ref(false);
    const template = {
      sponsor_id: props.sponsorId ? Number(props.sponsorId) : null,
      candidate_id: props.candidateId ? Number(props.candidateId) : null,
      amount: 0,
      month_payday: 1,
      frequency: 1,
      address_type: "home",
      wants_pickup: 0,
      wants_reminder: 0,
      wants_deductible_receipt: 0,
      receipt: {
        rfc: "",
        company_name: "",
        fiscalRegime: "",
        cfdi: "",
        email: "",
        observations: "",
        fiscalStatus: "",
        street: "",
        external_number: "",
        neighborhood: "",
        city: "",
        zip_code: "",
        state: "",
        country: ""
      }
    };
    const paymentConfig = ref({ ...template });
    async function saveData() {
      try {
        loading.value = true;
        let route = paymentConfig.value.id ? `/payment_configs/${paymentConfig.value.id}` : "/payment_configs";
        let data = paymentConfig.value.id ? { ...paymentConfig.value, _method: "PUT" } : { ...paymentConfig.value };
        await api.post(route, data);
        notify.positive("Guardado con éxito");
        emits("save");
      } catch (error) {
        errors.value = error.status == 422 ? error.formatted : {};
        notify.negative("No se pudo guardar");
      } finally {
        loading.value = false;
      }
    }
    const frequencies = ref([
      {
        label: "Mensual",
        val: 1
      },
      {
        label: "Bimestral",
        val: 2
      },
      {
        label: "Trimestral",
        val: 3
      },
      {
        label: "Semestral",
        val: 6
      },
      {
        label: "Anual",
        val: 12
      }
    ]);
    const yearlyAmount = computed(() => {
      return paymentConfig.value.amount * (12 / paymentConfig.value.frequency);
    });
    const monthlyAmount = computed(() => {
      return (yearlyAmount.value / 12).toFixed(2);
    });
    onMounted(async () => {
      if (!props.paymentConfigId && !(props.candidateId && props.sponsorId)) {
        paymentConfig.value.sponsor_id = Number(props.sponsorId);
        return;
      }
      let route = props.paymentConfigId ? `/payment_configs/${props.paymentConfigId}` : `/payment_configs/?candidate_id=${props.candidateId}&sponsor_id=${props.sponsorId}`;
      paymentConfig.value = (await api.get(route)).data.data;
      if (!paymentConfig.value.receipt["id"]) {
        console.log(template.receipt);
        paymentConfig.value.receipt = { ...template.receipt };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        bordered: "",
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _cache[21] || (_cache[21] = createBaseVNode("h1", { class: "page-title q-pb-md" }, "Niveles de Aportación", -1)),
              createVNode(QForm, {
                onSubmit: _cache[9] || (_cache[9] = withModifiers(($event) => saveData(), ["prevent"])),
                class: "q-gutter-y-lg split-form"
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1, [
                    _cache[10] || (_cache[10] = createBaseVNode("label", { for: "#" }, "Cantidad", -1)),
                    createVNode(QInput, {
                      outlined: "",
                      class: "q-field--required",
                      modelValue: paymentConfig.value.amount,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => paymentConfig.value.amount = $event),
                      "hide-bottom-space": "",
                      error: !!errors.value.amount,
                      "error-message": errors.value.amount
                    }, null, 8, ["modelValue", "error", "error-message"])
                  ]),
                  createBaseVNode("div", _hoisted_2, [
                    _cache[11] || (_cache[11] = createBaseVNode("label", { for: "#" }, "Frecuencia del donativo", -1)),
                    createVNode(QSelect, {
                      outlined: "",
                      dense: "",
                      options: frequencies.value,
                      class: "q-field--required",
                      modelValue: paymentConfig.value.frequency,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => paymentConfig.value.frequency = $event),
                      "option-label": "label",
                      "option-value": "val",
                      "map-options": "",
                      "emit-value": "",
                      "hide-bottom-space": "",
                      error: !!errors.value.frequency,
                      "error-message": errors.value.frequency
                    }, null, 8, ["options", "modelValue", "error", "error-message"])
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", { for: "#" }, "Aportacion Anual", -1)),
                    createVNode(QInput, {
                      outlined: "",
                      "stack-label": "",
                      "model-value": yearlyAmount.value,
                      type: "number",
                      "hide-bottom-space": ""
                    }, null, 8, ["model-value"])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    _cache[13] || (_cache[13] = createBaseVNode("label", { for: "#" }, "Impacto mensual en cuota del beneficiario", -1)),
                    createVNode(QInput, {
                      outlined: "",
                      "model-value": monthlyAmount.value,
                      type: "number",
                      "hide-bottom-space": ""
                    }, null, 8, ["model-value"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    _cache[14] || (_cache[14] = createBaseVNode("label", { for: "#" }, "¿Qué día del mes será su aportación?", -1)),
                    createVNode(QInput, {
                      outlined: "",
                      "stack-label": "",
                      modelValue: paymentConfig.value.month_payday,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => paymentConfig.value.month_payday = $event),
                      type: "number",
                      "hide-bottom-space": "",
                      error: !!errors.value.month_payday,
                      "error-message": errors.value.month_payday
                    }, null, 8, ["modelValue", "error", "error-message"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    _cache[15] || (_cache[15] = createBaseVNode("label", { for: "#" }, "¿Requiere que pasen a recoger su donativo?", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QCheckbox, {
                        modelValue: paymentConfig.value.wants_pickup,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => paymentConfig.value.wants_pickup = $event),
                        "true-value": 1,
                        "false-value": 0
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    _cache[16] || (_cache[16] = createBaseVNode("label", { for: "#" }, "¿A cual domicilio?", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QRadio, {
                        modelValue: paymentConfig.value.address_type,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => paymentConfig.value.address_type = $event),
                        val: "home",
                        label: "Casa"
                      }, null, 8, ["modelValue"]),
                      createVNode(QRadio, {
                        modelValue: paymentConfig.value.address_type,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paymentConfig.value.address_type = $event),
                        val: "office",
                        label: "Oficina"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    _cache[17] || (_cache[17] = createBaseVNode("label", { for: "#" }, "¿Desea un recordatorio?", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QCheckbox, {
                        modelValue: paymentConfig.value.wants_reminder,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paymentConfig.value.wants_reminder = $event),
                        "true-value": 1,
                        "false-value": 0
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    _cache[18] || (_cache[18] = createBaseVNode("label", { for: "#" }, "¿Desea un recibo deducible?", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QCheckbox, {
                        modelValue: paymentConfig.value.wants_deductible_receipt,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => paymentConfig.value.wants_deductible_receipt = $event),
                        "true-value": 1,
                        "false-value": 0
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  paymentConfig.value.wants_deductible_receipt ? (openBlock(), createElementBlock("div", _hoisted_10, [
                    _cache[19] || (_cache[19] = createBaseVNode("div", { class: "form-section-label q-mb-none" }, "Recibo deducible", -1)),
                    createVNode(_sfc_main$1, {
                      modelValue: paymentConfig.value.receipt,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => paymentConfig.value.receipt = $event)
                    }, null, 8, ["modelValue"])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(QBtn, {
                      type: "submit",
                      color: "primary",
                      loading: loading.value
                    }, {
                      default: withCtx(() => _cache[20] || (_cache[20] = [
                        createTextVNode(" Guardar ")
                      ])),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
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
export {
  _sfc_main as _
};
