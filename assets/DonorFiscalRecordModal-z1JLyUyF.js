import { r as ref, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a5 as QCard, ad as withModifiers, K as withDirectives, Z as createBaseVNode, b2 as vModelText, a6 as QCardSection, S as toDisplayString, U as QBtn, a9 as QInput, ae as QCheckbox, T as QSeparator, ac as QCardActions, aa as QDialog } from "./index-73seMa9c.js";
import { Q as QSelect } from "./QSelect-D7YhNIyE.js";
import { Q as QMarkupTable } from "./QMarkupTable-sgUXJ8ii.js";
import { Q as QForm } from "./QForm-CdVxlQot.js";
import { C as ClosePopup } from "./ClosePopup-CmjI8Typ.js";
const _hoisted_1 = { class: "text-subtitle1 text-weight-bold" };
const _sfc_main = {
  __name: "DonorFiscalRecordModal",
  emits: ["accept"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const editingIndex = ref(null);
    const form = ref(getCleanFiscalForm());
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
        // Cambiado de external_number a exterior_number
        neighborhood: "",
        postal_code: "",
        city: "",
        state: "",
        // Datos de Cobranza unificados con el Backend (prefijo billing_)
        billing_contact_name: "",
        // Cambiado de contact_name
        billing_job_title: "",
        // Cambiado de position
        billing_landline: "",
        // Cambiado de phone
        billing_cellphone: "",
        // Cambiado de cellphone
        billing_email: "",
        // Cambiado de collection_email
        billing_birth_date: "",
        home_collection: false,
        payment_day: "",
        billing_street: "",
        // Cambiado de collection_street
        billing_exterior_number: "",
        // Cambiado de collection_external_number
        billing_neighborhood: "",
        // Cambiado de collection_neighborhood
        billing_postal_code: ""
        // Cambiado de collection_postal_code
      };
    }
    const taxRegimens = [
      "601 - General Morales",
      "603 - Fines no Lucrativos",
      "605 - Sueldos y Salarios",
      "612 - Actividades Empresariales",
      "626 - RESICO"
    ];
    const cfdiUses = [
      "G01 - Adquisición de mercancías",
      "G03 - Gastos en general",
      "I02 - Mobiliario",
      "D04 - Donativos"
    ];
    function open(data = null, index = null) {
      editingIndex.value = index;
      if (data) {
        form.value = { ...getCleanFiscalForm(), ...data };
      } else {
        form.value = getCleanFiscalForm();
      }
      isOpen.value = true;
    }
    function submit() {
      emit("accept", { data: form.value, index: editingIndex.value });
      isOpen.value = false;
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: isOpen.value,
        "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => isOpen.value = $event),
        persistent: ""
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "750px", "max-width": "90vw" } }, {
            default: withCtx(() => [
              createVNode(QForm, {
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
                            _cache[52] || (_cache[52] = createBaseVNode("tr", { class: "bg-grey-2" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Razones / Denominaciones Sociales (Datos Fiscales) ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[27] || (_cache[27] = createBaseVNode("td", null, "Nombre Comercial *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.commercial_name,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.commercial_name = $event),
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[28] || (_cache[28] = createBaseVNode("td", null, "Razón / Denominación *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.tax_name,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.tax_name = $event),
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[29] || (_cache[29] = createBaseVNode("td", null, "RFC *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.rfc,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.rfc = $event),
                                  mask: "############",
                                  "hide-bottom-space": "",
                                  style: { "text-transform": "uppercase" },
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[30] || (_cache[30] = createBaseVNode("td", null, "Régimen Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.tax_regimen,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.tax_regimen = $event),
                                  options: taxRegimens,
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[31] || (_cache[31] = createBaseVNode("td", null, "Uso de CFDI *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QSelect, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.cfdi_use,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.cfdi_use = $event),
                                  options: cfdiUses,
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[32] || (_cache[32] = createBaseVNode("td", null, "Correo Electrónico *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "email",
                                  modelValue: form.value.email,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.email = $event),
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[33] || (_cache[33] = createBaseVNode("td", null, "Aniversario Empresa", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.company_anniversary,
                                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.company_anniversary = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[34] || (_cache[34] = createBaseVNode("td", null, "Calle Fiscal", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.street,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.street = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[35] || (_cache[35] = createBaseVNode("td", null, "Núm. Exterior", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.exterior_number,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.exterior_number = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[36] || (_cache[36] = createBaseVNode("td", null, "Colonia Fiscal", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.neighborhood,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.neighborhood = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[37] || (_cache[37] = createBaseVNode("td", null, "C.P. Fiscal *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.postal_code,
                                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.postal_code = $event),
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[38] || (_cache[38] = createBaseVNode("td", null, "Ciudad", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.city,
                                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.city = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[39] || (_cache[39] = createBaseVNode("td", null, "Estado", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.state,
                                  "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.state = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            _cache[53] || (_cache[53] = createBaseVNode("tr", { class: "bg-grey-3" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Datos de Cobranza ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[40] || (_cache[40] = createBaseVNode("td", null, "Contacto Cobranza *", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_contact_name,
                                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.billing_contact_name = $event),
                                  "hide-bottom-space": "",
                                  required: ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[41] || (_cache[41] = createBaseVNode("td", null, "Puesto / Ocupación", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_job_title,
                                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.billing_job_title = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[42] || (_cache[42] = createBaseVNode("td", null, "Teléfono Fijo", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_landline,
                                  "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.billing_landline = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[43] || (_cache[43] = createBaseVNode("td", null, "Celular Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  mask: "##########",
                                  modelValue: form.value.billing_cellphone,
                                  "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.billing_cellphone = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[44] || (_cache[44] = createBaseVNode("td", null, "Correo Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "email",
                                  modelValue: form.value.billing_email,
                                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.billing_email = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[45] || (_cache[45] = createBaseVNode("td", null, "Cumpleaños Contacto", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  type: "date",
                                  modelValue: form.value.billing_birth_date,
                                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.billing_birth_date = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[46] || (_cache[46] = createBaseVNode("td", null, "¿Cobro a domicilio?", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QCheckbox, {
                                  modelValue: form.value.home_collection,
                                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.home_collection = $event),
                                  label: "Sí, requiere cobro físico en sitio",
                                  color: "secondary"
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[47] || (_cache[47] = createBaseVNode("td", null, "Día Preferente Pago", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  placeholder: "Ej. Lunes o Quincena",
                                  modelValue: form.value.payment_day,
                                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => form.value.payment_day = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            _cache[54] || (_cache[54] = createBaseVNode("tr", { class: "bg-grey-3" }, [
                              createBaseVNode("td", {
                                colspan: "2",
                                class: "text-subtitle2 text-weight-bold text-grey-9"
                              }, " Domicilio Alterno de Cobranza (Opcional) ")
                            ], -1)),
                            createBaseVNode("tr", null, [
                              _cache[48] || (_cache[48] = createBaseVNode("td", null, "Calle Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_street,
                                  "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => form.value.billing_street = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[49] || (_cache[49] = createBaseVNode("td", null, "Num Exterior Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_exterior_number,
                                  "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => form.value.billing_exterior_number = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[50] || (_cache[50] = createBaseVNode("td", null, "Colonia Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_neighborhood,
                                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => form.value.billing_neighborhood = $event),
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ]),
                            createBaseVNode("tr", null, [
                              _cache[51] || (_cache[51] = createBaseVNode("td", null, "C.P. Cobranza", -1)),
                              createBaseVNode("td", null, [
                                createVNode(QInput, {
                                  outlined: "",
                                  dense: "",
                                  modelValue: form.value.billing_postal_code,
                                  "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => form.value.billing_postal_code = $event),
                                  "hide-bottom-space": ""
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
export {
  _sfc_main as _
};
