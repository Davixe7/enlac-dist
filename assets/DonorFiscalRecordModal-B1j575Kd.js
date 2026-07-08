import { r as ref, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a5 as QCard, af as withModifiers, K as withDirectives, Z as createBaseVNode, an as vModelText, a6 as QCardSection, S as toDisplayString, U as QBtn, a7 as QInput, a9 as QCheckbox, T as QSeparator, ae as QCardActions, aa as QDialog } from "./index-7AOIawlZ.js";
import { a as QSelect } from "./QSelect-dUV2_Zts.js";
import { Q as QMarkupTable } from "./QMarkupTable-Dzg7c5ei.js";
import { Q as QForm } from "./QForm-Db92MXPU.js";
import { C as ClosePopup } from "./ClosePopup-BvD-30NV.js";
const _hoisted_1 = { class: "text-subtitle1 text-weight-bold" };
const _sfc_main = {
  __name: "DonorFiscalRecordModal",
  emits: ["accept"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const editingIndex = ref(null);
    const form = ref(getCleanFiscalForm());
    const serverErrors = ref({});
    function getCleanFiscalForm() {
      return {
        id: null,
        commercial_name: "",
        tax_name: "",
        rfc: "",
        tax_regimen: "",
        cfdi_use: "",
        email: "",
        company_anniversary: "",
        street: "",
        exterior_number: "",
        neighborhood: "",
        postal_code: "",
        city: "",
        state: "",
        billing_contact_name: "",
        billing_job_title: "",
        billing_landline: "",
        billing_cellphone: "",
        billing_email: "",
        billing_birth_date: "",
        home_collection: false,
        payment_day: "",
        billing_street: "",
        billing_exterior_number: "",
        billing_neighborhood: "",
        billing_postal_code: ""
      };
    }
    const taxRegimens = [
      "601 - General de Ley Personas Morales",
      "603 - Personas Morales con Fines no Lucrativos",
      "605 - Sueldos y Salarios e Ingresos Asimilados a Salarios",
      "606 - Arrendamiento",
      "607 - Régimen de Enajenación o Adquisición de Bienes",
      "608 - Demás ingresos",
      "610 - Residentes en el Extranjero sin Establecimiento Permanente en México",
      "611 - Ingresos por Dividendos (socios y accionistas)",
      "612 - Personas Físicas con Actividades Empresariales y Profesionales",
      "614 - Ingresos por intereses",
      "615 - Régimen de los ingresos por obtención de premios",
      "616 - Sin obligaciones fiscales",
      "620 - Sociedades Cooperativas de Producción que optan por diferir sus ingresos",
      "621 - Incorporación Fiscal",
      "622 - Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras",
      "623 - Opcional para Grupos de Sociedades",
      "624 - Coordinados",
      "625 - Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
      "626 - Régimen Simplificado de Confianza"
    ];
    const cfdiUses = [
      "G01 - Adquisición de mercancías",
      "G02 - Devoluciones, descuentos o bonificaciones",
      "G03 - Gastos en general",
      "I01 - Construcciones",
      "I02 - Mobiliario y equipo de oficina por inversiones",
      "I03 - Equipo de transporte",
      "I04 - Equipo de cómputo y accesorios",
      "I05 - Dados, troqueles, moldes, matrices y herramental",
      "I06 - Comunicaciones telefónicas",
      "I07 - Comunicaciones satelitales",
      "I08 - Otra maquinaria y equipo",
      "D01 - Honorarios médicos, dentales y gastos hospitalarios",
      "D02 - Gastos médicos por incapacidad o discapacidad",
      "D03 - Gastos funerales",
      "D04 - Donativos",
      "D05 - Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)",
      "D06 - Aportaciones voluntarias al SAR",
      "D07 - Primas por seguros de gastos médicos",
      "D08 - Gastos de transportación escolar obligatoria",
      "D09 - Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones",
      "D10 - Pagos por servicios educativos (colegiaturas)",
      "S01 - Sin efectos fiscales",
      "CP01 - Pagos",
      "CN01 - Nómina"
    ];
    const fiscalFormRef = ref(null);
    function open(data = null, index = null) {
      editingIndex.value = index;
      serverErrors.value = {};
      if (data) {
        form.value = { ...getCleanFiscalForm(), ...data };
      } else {
        form.value = getCleanFiscalForm();
      }
      isOpen.value = true;
    }
    function getFieldError(field) {
      const error = serverErrors.value[field];
      if (!error) return "";
      return Array.isArray(error) ? error[0] : error;
    }
    function setServerErrors(errors) {
      serverErrors.value = errors || {};
    }
    function closeModal() {
      isOpen.value = false;
    }
    async function submit() {
      if (fiscalFormRef.value) {
        const isValid = await fiscalFormRef.value.validate();
        if (!isValid) return;
      }
      emit("accept", {
        data: form.value,
        index: editingIndex.value,
        closeModal,
        setErrors: setServerErrors
      });
    }
    function clearFieldError(field) {
      if (serverErrors.value[field]) {
        delete serverErrors.value[field];
      }
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[50] || (_cache[50] = ($event) => isOpen.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "750px", "max-width": "90vw" } }, {
            default: withCtx(() => [
              createVNode(QForm, {
                ref_key: "fiscalFormRef",
                ref: fiscalFormRef,
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("input", {
                    type: "hidden",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.donor_id = $event)
                  }, null, 512), [
                    [vModelText, form.value.donor_id]
                  ]),
                  createVNode(QCardSection, { class: "bg-primary text-white q-py-sm flex items-center" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_1, toDisplayString(editingIndex.value !== null ? "Editar Registro Fiscal" : "Nuevo Registro Fiscal y Cobranza"), 1),
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        round: "",
                        icon: "sym_o_close",
                        class: "q-ml-auto"
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, {
                    style: { "max-height": "60vh" },
                    class: "scroll q-pa-none"
                  }, {
                    default: withCtx(() => [
                      createVNode(QMarkupTable, {
                        flat: "",
                        class: "system-form-table"
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("tbody", null, [
                            _cache[76] || (_cache[76] = createBaseVNode("tr", { class: "bg-grey-2" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Razones / Denominaciones Sociales (Datos Fiscales) ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[51] || (_cache[51] = createBaseVNode("td", null, "Nombre Comercial *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.commercial_name,
                                  "onUpdate:modelValue": [
                                    _cache[1] || (_cache[1] = ($event) => form.value.commercial_name = $event),
                                    _cache[2] || (_cache[2] = ($event) => clearFieldError("commercial_name"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El nombre comercial es obligatorio",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.commercial_name,
                                  "error-message": getFieldError("commercial_name"),
                                  "hide-bottom-space": !serverErrors.value.commercial_name
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[52] || (_cache[52] = createBaseVNode("td", null, "Razón / Denominación *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.tax_name,
                                  "onUpdate:modelValue": [
                                    _cache[3] || (_cache[3] = ($event) => form.value.tax_name = $event),
                                    _cache[4] || (_cache[4] = ($event) => clearFieldError("tax_name"))
                                  ],
                                  rules: [
                                    (val) => !!val || "La razón o denominación social es obligatoria",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.tax_name,
                                  "error-message": getFieldError("tax_name"),
                                  "hide-bottom-space": !serverErrors.value.tax_name
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[53] || (_cache[53] = createBaseVNode("td", null, "RFC *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.rfc,
                                  "onUpdate:modelValue": [
                                    _cache[5] || (_cache[5] = ($event) => form.value.rfc = $event),
                                    _cache[6] || (_cache[6] = (val) => {
                                      form.value.rfc = val.toUpperCase().replace(/[^A-Z0-9&]/g, "");
                                      clearFieldError("rfc");
                                    })
                                  ],
                                  style: { "text-transform": "uppercase" },
                                  maxlength: "13",
                                  placeholder: "Ej: EM120324XX1",
                                  rules: [
                                    (val) => !!val || "El RFC es obligatorio",
                                    (val) => val.length >= 12 && val.length <= 13 || "El RFC debe tener entre 12 y 13 caracteres"
                                  ],
                                  error: !!serverErrors.value.rfc,
                                  "error-message": getFieldError("rfc"),
                                  "hide-bottom-space": !serverErrors.value.rfc
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[54] || (_cache[54] = createBaseVNode("td", null, "Régimen Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.tax_regimen,
                                  "onUpdate:modelValue": [
                                    _cache[7] || (_cache[7] = ($event) => form.value.tax_regimen = $event),
                                    _cache[8] || (_cache[8] = ($event) => clearFieldError("tax_regimen"))
                                  ],
                                  options: taxRegimens,
                                  rules: [(val) => !!val || "El régimen fiscal es obligatorio"],
                                  error: !!serverErrors.value.tax_regimen,
                                  "error-message": getFieldError("tax_regimen"),
                                  "hide-bottom-space": !serverErrors.value.tax_regimen
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[55] || (_cache[55] = createBaseVNode("td", null, "Uso de CFDI *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.cfdi_use,
                                  "onUpdate:modelValue": [
                                    _cache[9] || (_cache[9] = ($event) => form.value.cfdi_use = $event),
                                    _cache[10] || (_cache[10] = ($event) => clearFieldError("cfdi_use"))
                                  ],
                                  options: cfdiUses,
                                  rules: [(val) => !!val || "El uso de CFDI es obligatorio"],
                                  error: !!serverErrors.value.cfdi_use,
                                  "error-message": getFieldError("cfdi_use"),
                                  "hide-bottom-space": !serverErrors.value.cfdi_use
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[56] || (_cache[56] = createBaseVNode("td", null, "Correo Electrónico *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "email",
                                  modelValue: form.value.email,
                                  "onUpdate:modelValue": [
                                    _cache[11] || (_cache[11] = ($event) => form.value.email = $event),
                                    _cache[12] || (_cache[12] = ($event) => clearFieldError("email"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El correo electrónico fiscal es obligatorio",
                                    (val) => /.+@.+\..+/.test(val) || "Ingresa un correo electrónico válido",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.email,
                                  "error-message": getFieldError("email"),
                                  "hide-bottom-space": !serverErrors.value.email
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[57] || (_cache[57] = createBaseVNode("td", null, "Aniversario Empresa", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.company_anniversary,
                                  "onUpdate:modelValue": [
                                    _cache[13] || (_cache[13] = ($event) => form.value.company_anniversary = $event),
                                    _cache[14] || (_cache[14] = ($event) => clearFieldError("company_anniversary"))
                                  ],
                                  error: !!serverErrors.value.company_anniversary,
                                  "error-message": getFieldError("company_anniversary"),
                                  "hide-bottom-space": !serverErrors.value.company_anniversary
                                }, null, 8, ["modelValue", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[58] || (_cache[58] = createBaseVNode("td", null, "Calle Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.street,
                                  "onUpdate:modelValue": [
                                    _cache[15] || (_cache[15] = ($event) => form.value.street = $event),
                                    _cache[16] || (_cache[16] = ($event) => clearFieldError("street"))
                                  ],
                                  rules: [
                                    (val) => !!val || "La calle fiscal es obligatoria",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.street,
                                  "error-message": getFieldError("street"),
                                  "hide-bottom-space": !serverErrors.value.street
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[59] || (_cache[59] = createBaseVNode("td", null, "Núm. Exterior *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.exterior_number,
                                  "onUpdate:modelValue": [
                                    _cache[17] || (_cache[17] = ($event) => form.value.exterior_number = $event),
                                    _cache[18] || (_cache[18] = ($event) => clearFieldError("exterior_number"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El número exterior es obligatorio",
                                    (val) => val.length <= 50 || "Máximo 50 caracteres"
                                  ],
                                  error: !!serverErrors.value.exterior_number,
                                  "error-message": getFieldError("exterior_number"),
                                  "hide-bottom-space": !serverErrors.value.exterior_number
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[60] || (_cache[60] = createBaseVNode("td", null, "Colonia Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.neighborhood,
                                  "onUpdate:modelValue": [
                                    _cache[19] || (_cache[19] = ($event) => form.value.neighborhood = $event),
                                    _cache[20] || (_cache[20] = ($event) => clearFieldError("neighborhood"))
                                  ],
                                  rules: [
                                    (val) => !!val || "La colonia fiscal es obligatoria",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.neighborhood,
                                  "error-message": getFieldError("neighborhood"),
                                  "hide-bottom-space": !serverErrors.value.neighborhood
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[61] || (_cache[61] = createBaseVNode("td", null, "C.P. Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.postal_code,
                                  "onUpdate:modelValue": [
                                    _cache[21] || (_cache[21] = ($event) => form.value.postal_code = $event),
                                    _cache[22] || (_cache[22] = ($event) => clearFieldError("postal_code"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El código postal es obligatorio",
                                    (val) => val.length <= 10 || "Máximo 10 caracteres"
                                  ],
                                  error: !!serverErrors.value.postal_code,
                                  "error-message": getFieldError("postal_code"),
                                  "hide-bottom-space": !serverErrors.value.postal_code
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[62] || (_cache[62] = createBaseVNode("td", null, "Ciudad *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.city,
                                  "onUpdate:modelValue": [
                                    _cache[23] || (_cache[23] = ($event) => form.value.city = $event),
                                    _cache[24] || (_cache[24] = ($event) => clearFieldError("city"))
                                  ],
                                  rules: [
                                    (val) => !!val || "La ciudad fiscal es obligatoria",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.city,
                                  "error-message": getFieldError("city"),
                                  "hide-bottom-space": !serverErrors.value.city
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[63] || (_cache[63] = createBaseVNode("td", null, "Estado *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.state,
                                  "onUpdate:modelValue": [
                                    _cache[25] || (_cache[25] = ($event) => form.value.state = $event),
                                    _cache[26] || (_cache[26] = ($event) => clearFieldError("state"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El estado fiscal es obligatorio",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.state,
                                  "error-message": getFieldError("state"),
                                  "hide-bottom-space": !serverErrors.value.state
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            _cache[77] || (_cache[77] = createBaseVNode("tr", { class: "bg-grey-3" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Datos de Cobranza ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[64] || (_cache[64] = createBaseVNode("td", null, "Contacto Cobranza *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_contact_name,
                                  "onUpdate:modelValue": [
                                    _cache[27] || (_cache[27] = ($event) => form.value.billing_contact_name = $event),
                                    _cache[28] || (_cache[28] = ($event) => clearFieldError("billing_contact_name"))
                                  ],
                                  rules: [
                                    (val) => !!val || "El contacto de cobranza es obligatorio",
                                    (val) => val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.billing_contact_name,
                                  "error-message": getFieldError("billing_contact_name"),
                                  "hide-bottom-space": !serverErrors.value.billing_contact_name
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[65] || (_cache[65] = createBaseVNode("td", null, "Puesto / Ocupación", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_job_title,
                                  "onUpdate:modelValue": [
                                    _cache[29] || (_cache[29] = ($event) => form.value.billing_job_title = $event),
                                    _cache[30] || (_cache[30] = ($event) => clearFieldError("billing_job_title"))
                                  ],
                                  rules: [(val) => !val || val.length <= 255 || "Máximo 255 caracteres"],
                                  error: !!serverErrors.value.billing_job_title,
                                  "error-message": getFieldError("billing_job_title"),
                                  "hide-bottom-space": !serverErrors.value.billing_job_title
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[66] || (_cache[66] = createBaseVNode("td", null, "Teléfono Fijo", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_landline,
                                  "onUpdate:modelValue": [
                                    _cache[31] || (_cache[31] = ($event) => form.value.billing_landline = $event),
                                    _cache[32] || (_cache[32] = ($event) => clearFieldError("billing_landline"))
                                  ],
                                  rules: [(val) => !val || val.length <= 50 || "Máximo 50 caracteres"],
                                  error: !!serverErrors.value.billing_landline,
                                  "error-message": getFieldError("billing_landline"),
                                  "hide-bottom-space": !serverErrors.value.billing_landline
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[67] || (_cache[67] = createBaseVNode("td", null, "Celular Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  mask: "##########",
                                  modelValue: form.value.billing_cellphone,
                                  "onUpdate:modelValue": [
                                    _cache[33] || (_cache[33] = ($event) => form.value.billing_cellphone = $event),
                                    _cache[34] || (_cache[34] = ($event) => clearFieldError("billing_cellphone"))
                                  ],
                                  rules: [(val) => !val || val.length <= 50 || "Máximo 50 caracteres"],
                                  error: !!serverErrors.value.billing_cellphone,
                                  "error-message": getFieldError("billing_cellphone"),
                                  "hide-bottom-space": !serverErrors.value.billing_cellphone
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[68] || (_cache[68] = createBaseVNode("td", null, "Correo Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "email",
                                  modelValue: form.value.billing_email,
                                  "onUpdate:modelValue": [
                                    _cache[35] || (_cache[35] = ($event) => form.value.billing_email = $event),
                                    _cache[36] || (_cache[36] = ($event) => clearFieldError("billing_email"))
                                  ],
                                  rules: [
                                    (val) => !val || /.+@.+\..+/.test(val) || "Ingresa un correo válido",
                                    (val) => !val || val.length <= 255 || "Máximo 255 caracteres"
                                  ],
                                  error: !!serverErrors.value.billing_email,
                                  "error-message": getFieldError("billing_email"),
                                  "hide-bottom-space": !serverErrors.value.billing_email
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[69] || (_cache[69] = createBaseVNode("td", null, "Cumpleaños Contacto", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.billing_birth_date,
                                  "onUpdate:modelValue": [
                                    _cache[37] || (_cache[37] = ($event) => form.value.billing_birth_date = $event),
                                    _cache[38] || (_cache[38] = ($event) => clearFieldError("billing_birth_date"))
                                  ],
                                  error: !!serverErrors.value.billing_birth_date,
                                  "error-message": getFieldError("billing_birth_date"),
                                  "hide-bottom-space": !serverErrors.value.billing_birth_date
                                }, null, 8, ["modelValue", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[70] || (_cache[70] = createBaseVNode("td", null, "¿Cobro a domicilio?", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QCheckbox, {
                                  modelValue: form.value.home_collection,
                                  "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => form.value.home_collection = $event),
                                  label: "Sí, requiere cobro físico en sitio",
                                  color: "secondary"
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[71] || (_cache[71] = createBaseVNode("td", null, "Día Preferente Pago", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  placeholder: "Ej. Lunes o Quincena",
                                  modelValue: form.value.payment_day,
                                  "onUpdate:modelValue": [
                                    _cache[40] || (_cache[40] = ($event) => form.value.payment_day = $event),
                                    _cache[41] || (_cache[41] = ($event) => clearFieldError("payment_day"))
                                  ],
                                  rules: [(val) => !val || val.length <= 255 || "Máximo 255 caracteres"],
                                  error: !!serverErrors.value.payment_day,
                                  "error-message": getFieldError("payment_day"),
                                  "hide-bottom-space": !serverErrors.value.payment_day
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            _cache[78] || (_cache[78] = createBaseVNode("tr", { class: "bg-grey-3" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Domicilio Alterno de Cobranza (Opcional) ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[72] || (_cache[72] = createBaseVNode("td", null, "Calle Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_street,
                                  "onUpdate:modelValue": [
                                    _cache[42] || (_cache[42] = ($event) => form.value.billing_street = $event),
                                    _cache[43] || (_cache[43] = ($event) => clearFieldError("billing_street"))
                                  ],
                                  rules: [(val) => !val || val.length <= 255 || "Máximo 255 caracteres"],
                                  error: !!serverErrors.value.billing_street,
                                  "error-message": getFieldError("billing_street"),
                                  "hide-bottom-space": !serverErrors.value.billing_street
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[73] || (_cache[73] = createBaseVNode("td", null, "Num Exterior Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_exterior_number,
                                  "onUpdate:modelValue": [
                                    _cache[44] || (_cache[44] = ($event) => form.value.billing_exterior_number = $event),
                                    _cache[45] || (_cache[45] = ($event) => clearFieldError("billing_exterior_number"))
                                  ],
                                  rules: [(val) => !val || val.length <= 50 || "Máximo 50 caracteres"],
                                  error: !!serverErrors.value.billing_exterior_number,
                                  "error-message": getFieldError("billing_exterior_number"),
                                  "hide-bottom-space": !serverErrors.value.billing_exterior_number
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[74] || (_cache[74] = createBaseVNode("td", null, "Colonia Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_neighborhood,
                                  "onUpdate:modelValue": [
                                    _cache[46] || (_cache[46] = ($event) => form.value.billing_neighborhood = $event),
                                    _cache[47] || (_cache[47] = ($event) => clearFieldError("billing_neighborhood"))
                                  ],
                                  rules: [(val) => !val || val.length <= 255 || "Máximo 255 caracteres"],
                                  error: !!serverErrors.value.billing_neighborhood,
                                  "error-message": getFieldError("billing_neighborhood"),
                                  "hide-bottom-space": !serverErrors.value.billing_neighborhood
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[75] || (_cache[75] = createBaseVNode("td", null, "C.P. Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_postal_code,
                                  "onUpdate:modelValue": [
                                    _cache[48] || (_cache[48] = ($event) => form.value.billing_postal_code = $event),
                                    _cache[49] || (_cache[49] = ($event) => clearFieldError("billing_postal_code"))
                                  ],
                                  rules: [(val) => !val || val.length <= 10 || "Máximo 10 caracteres"],
                                  error: !!serverErrors.value.billing_postal_code,
                                  "error-message": getFieldError("billing_postal_code"),
                                  "hide-bottom-space": !serverErrors.value.billing_postal_code
                                }, null, 8, ["modelValue", "rules", "error", "error-message", "hide-bottom-space"])
                              ])
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QCardActions, {
                    align: "right",
                    class: "q-pa-md"
                  }, {
                    default: withCtx(() => [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancelar",
                        color: "grey"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      createVNode(QBtn, {
                        type: "submit",
                        color: "primary",
                        icon: "sym_o_check_circle",
                        label: "Aceptar"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
export {
  _sfc_main as _
};
