import { Q as QInput } from "./QInput-C-mtqO6Q.js";
import { Q as QSelect } from "./QSelect-BuVzIreX.js";
import { Q as QCheckbox } from "./QCheckbox-Io3ISonT.js";
import { Q as QRadio } from "./QRadio-_wj-w-mt.js";
import { be as mergeModels, bf as useModel, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, r as ref, p as computed, o as onMounted, i as api, l as createBlock, w as withCtx, e as withModifiers, x as createCommentVNode, Q as QBtn, h as createTextVNode } from "./index-C2KXjwrR.js";
import { Q as QForm } from "./QForm-BXTj23Ur.js";
import { a as QCardSection, Q as QCard } from "./QCard-CI6b1UjI.js";
import { n as notify } from "./notify-3cR8ls6a.js";
import { Q as QFile } from "./QFile-glgdxd_w.js";
const _hoisted_1$1 = { class: "receipt-form" };
const _hoisted_2$1 = { class: "row q-col-gutter-x-md q-mb-md" };
const _hoisted_3$1 = { class: "col-12 col-sm-4" };
const _hoisted_4$1 = { class: "col-12 col-sm-8" };
const _hoisted_5$1 = { class: "row q-col-gutter-x-md q-mb-md" };
const _hoisted_6$1 = { class: "col-12 col-sm-4" };
const _hoisted_7$1 = { class: "col-12 col-sm-8" };
const _sfc_main$1 = {
  __name: "DeductibleReceiptForm",
  props: /* @__PURE__ */ mergeModels(["errors"], {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const props = __props;
    const fiscalRegimeOptions = [
      { value: 601, label: "General de Ley Personas Morales" },
      { value: 603, label: "Personas Morales con Fines no Lucrativos" },
      { value: 605, label: "Sueldos y Salarios e Ingresos Asimilados a Salarios" },
      { value: 606, label: "Arrendamiento" },
      { value: 607, label: "Régimen de Enajenación o Adquisición de Bienes" },
      { value: 608, label: "Demás ingresos" },
      { value: 610, label: "Residentes en el Extranjero sin Establecimiento Permanente en México" },
      { value: 611, label: "Ingresos por Dividendos (socios y accionistas)" },
      { value: 612, label: "Personas Físicas con Actividades Empresariales y Profesionales" },
      { value: 614, label: "Ingresos por intereses" },
      { value: 615, label: "Régimen de los ingresos por obtención de premios" },
      { value: 616, label: "Sin obligaciones fiscales" },
      { value: 620, label: "Sociedades Cooperativas de Producción que optan por diferir sus ingresos" },
      { value: 621, label: "Incorporación Fiscal" },
      { value: 622, label: "Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras" },
      { value: 623, label: "Opcional para Grupos de Sociedades" },
      { value: 624, label: "Coordinados" },
      {
        value: 625,
        label: `Régimen de las Actividades Empresariales con ingresos a través de PlataformasTecnológicas`
      },
      { value: 626, label: "Régimen Simplificado de Confianza" }
    ];
    const cfdiOptions = [
      { value: "G01", label: "G01 - Adquisición de mercancías" },
      { value: "G02", label: "G02 - Devoluciones, descuentos o bonificaciones" },
      { value: "G03", label: "G03 - Gastos en general" },
      { value: "I01", label: "I01 - Construcciones" },
      { value: "I02", label: "I02 - Mobiliario y equipo de oficina para inversiones" },
      { value: "I03", label: "I03 - Equipo de transporte" },
      { value: "I04", label: "I04 - Equipo de cómputo y accesorios" },
      { value: "I05", label: "I05 - Dados, troqueles, moldes, matrices y herramental" },
      { value: "I06", label: "I06 - Comunicaciones telefónicas" },
      { value: "I07", label: "I07 - Comunicaciones satelitales" },
      { value: "I08", label: "I08 - Otra maquinaria y equipo" },
      { value: "D01", label: "D01 - Honorarios médicos, dentales y hospitalarios" },
      { value: "D02", label: "D02 - Gastos médicos por incapacidad o discapacidad" },
      { value: "D03", label: "D03 - Gastos funerales" },
      { value: "D04", label: "D04 - Donativos" },
      { value: "D05", label: "D05 - Intereses reales pagados por créditos hipotecarios" },
      { value: "D06", label: "D06 - Aportaciones voluntarias al SAR" },
      { value: "D07", label: "D07 - Primas de seguros de gastos médicos" },
      { value: "D08", label: "D08 - Gastos de transportación escolar obligatoria" },
      { value: "D09", label: "D09 - Depósitos en cuentas para el ahorro, primas de pensiones" },
      { value: "D10", label: "D10 - Pagos por servicios educativos (colegiaturas)" },
      { value: "S01", label: "S01 - Sin efectos fiscales" },
      { value: "CP01", label: "CP01 - Pagos" },
      { value: "CN01", label: "CN01 - Nómina" }
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
              "hide-bottom-space": "",
              error: !!props.errors["receipt.rfc"],
              "error-message": props.errors["receipt.rfc"]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Nombre o Razón Social",
              modelValue: model.value.company_name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.company_name = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.company_name"],
              "error-message": props.errors["receipt.company_name"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Correo",
              modelValue: model.value.email,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.email = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.email"],
              "error-message": props.errors["receipt.email"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Régimen Fiscal",
              modelValue: model.value.fiscalRegime,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.fiscalRegime = $event),
              options: fiscalRegimeOptions,
              "hide-bottom-space": "",
              "emit-value": "",
              "map-options": "",
              error: !!props.errors["receipt.fiscalRegime"],
              "error-message": props.errors["receipt.fiscalRegime"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Uso de CFDI",
              modelValue: model.value.cfdi,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.value.cfdi = $event),
              options: cfdiOptions,
              "hide-bottom-space": "",
              "emit-value": "",
              "map-options": "",
              error: !!props.errors["receipt.cfdi"],
              "error-message": props.errors["receipt.cfdi"]
            }, null, 8, ["modelValue", "error", "error-message"])
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
              "hide-bottom-space": "",
              error: !!props.errors["receipt.street"],
              "error-message": props.errors["receipt.street"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Número exterior",
              modelValue: model.value.external_number,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.external_number = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.external_number"],
              "error-message": props.errors["receipt.external_number"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Código Postal",
              modelValue: model.value.zip_code,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => model.value.zip_code = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.zip_code"],
              "error-message": props.errors["receipt.zip_code"]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Colonia",
              modelValue: model.value.neighborhood,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => model.value.neighborhood = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.neighborhood"],
              "error-message": props.errors["receipt.neighborhood"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Ciudad",
              modelValue: model.value.city,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => model.value.city = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.city"],
              "error-message": props.errors["receipt.city"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Estado",
              modelValue: model.value.state,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => model.value.state = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.state"],
              "error-message": props.errors["receipt.state"]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "País",
              modelValue: model.value.country,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => model.value.country = $event),
              "hide-bottom-space": "",
              error: !!props.errors["receipt.country"],
              "error-message": props.errors["receipt.country"]
            }, null, 8, ["modelValue", "error", "error-message"])
          ])
        ]),
        _cache[15] || (_cache[15] = createBaseVNode("div", { class: "form-section-label q-mb-none" }, "Otros", -1)),
        createVNode(QInput, {
          outlined: "",
          "stack-label": "",
          label: "Observaciones",
          modelValue: model.value.observations,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => model.value.observations = $event),
          "hide-bottom-space": "",
          error: !!props.errors["receipt.observations"],
          "error-message": props.errors["receipt.observations"]
        }, null, 8, ["modelValue", "error", "error-message"]),
        createVNode(QFile, {
          outlined: "",
          "stack-label": "",
          label: "Constancia de situación fiscal",
          modelValue: model.value.fiscalStatusFile,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => model.value.fiscalStatusFile = $event),
          "hide-bottom-space": "",
          error: !!props.errors["receipt.fiscalStatus"],
          "error-message": props.errors["receipt.fiscalStatus"]
        }, null, 8, ["modelValue", "error", "error-message"])
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
      type: "sponsor",
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
        if (!paymentConfig.value.wants_deductible_receipt) {
          alert("Doesnt want receipt");
          delete data.receipt;
        }
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
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => paymentConfig.value.receipt = $event),
                      errors: errors.value
                    }, null, 8, ["modelValue", "errors"])
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
