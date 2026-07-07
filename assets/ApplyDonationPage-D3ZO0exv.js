import { Q as QSpace } from "./QSpace-B023KKJX.js";
import { r as ref, w as watch, x as onMounted, a4 as api, G as createBlock, I as withCtx, H as openBlock, Z as createBaseVNode, J as createVNode, a5 as QCard, a6 as QCardSection, af as withModifiers, O as createElementBlock, L as createCommentVNode, M as createTextVNode, a7 as QInput, T as QSeparator, P as Fragment, a9 as QCheckbox, Q as QIcon, S as toDisplayString, U as QBtn } from "./index-D8dGxR_o.js";
import { Q as QItem, a as QItemSection } from "./QItem-C80OgkSj.js";
import { a as QSelect } from "./QSelect-CrhGdhCv.js";
import { Q as QForm } from "./QForm-BZcpejmh.js";
import { Q as QPage } from "./QPage-BNlFXyGl.js";
import { n as notify } from "./notify-BXzUQ3RT.js";
import { d as date } from "./date-CmgNuwIn.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QMenu-P9699Vod.js";
import "./selection-C01nRuKQ.js";
import "./format-BC-UoHKJ.js";
const _hoisted_1 = { class: "row justify-center" };
const _hoisted_2 = { class: "col-12 col-md-10" };
const _hoisted_3 = { class: "row q-col-gutter-md q-mt-md" };
const _hoisted_4 = { class: "col-12 col-sm-6" };
const _hoisted_5 = { class: "col-12 col-sm-6" };
const _hoisted_6 = { class: "col-12 col-sm-6" };
const _hoisted_7 = { class: "col-12 col-sm-6" };
const _hoisted_8 = { class: "row q-col-gutter-md" };
const _hoisted_9 = { class: "col-12 col-sm-8" };
const _hoisted_10 = { class: "col-12 col-sm-4" };
const _hoisted_11 = { class: "col-12 col-sm-3" };
const _hoisted_12 = { class: "col-12 col-sm-3" };
const _hoisted_13 = { class: "col-12 col-sm-3" };
const _hoisted_14 = { class: "col-12 col-sm-3" };
const _hoisted_15 = { class: "col-12 col-sm-6" };
const _hoisted_16 = { class: "col-12 col-sm-6 flex items-center" };
const _hoisted_17 = {
  key: 0,
  class: "q-mt-lg q-pa-md bg-blue-grey-1 rounded-borders"
};
const _hoisted_18 = { class: "text-subtitle1 text-weight-bold q-mb-sm text-blue-grey-8" };
const _hoisted_19 = {
  key: 0,
  class: "row"
};
const _hoisted_20 = {
  key: 1,
  class: "row"
};
const _hoisted_21 = {
  key: 2,
  class: "row q-col-gutter-sm"
};
const _hoisted_22 = {
  key: 3,
  class: "row q-col-gutter-sm"
};
const _hoisted_23 = {
  key: 4,
  class: "row"
};
const _hoisted_24 = { class: "row justify-end q-mt-xl q-gutter-x-md" };
const _sfc_main = {
  __name: "ApplyDonationPage",
  setup(__props) {
    const loading = ref(false);
    const errors = ref({});
    const donorOptions = ref([]);
    const procurationActivities = ref([]);
    const filteredActivities = ref([]);
    const beneficiaries = ref([]);
    const form = ref({
      donor_id: null,
      procuration_activity_id: null,
      activity_type: "",
      concept: "",
      payment_date: date.formatDate(Date.now(), "YYYY-MM-DD"),
      payment_method: "Efectivo",
      reference: "",
      amount: 0,
      currency: "MXN",
      exchange_rate: 1,
      equivalent_amount_mxn: 0,
      has_tax_receipt: false,
      tax_receipt_number: "",
      // Campos dinámicos
      piggy_bank_location: "",
      project_name: "",
      boteo_area: "",
      boteo_can_number: "",
      boteo_ten_percent: 0,
      beneficiary_id: null,
      external_name: "",
      group_name: "",
      government_institution_name: ""
    });
    const activityTypes = [
      "Alcancía",
      "Alianza",
      "Boteo",
      "Donativos Varios",
      "Fundaciones",
      "Natación",
      "Organismos de Gobierno",
      "Programa de Verano",
      "Proyecto Interno",
      "Radiomaratón"
    ];
    const paymentMethods = [
      "Efectivo",
      "Transferencia",
      "Depósito",
      "Cheque",
      "Tarjeta Débito",
      "Tarjeta Crédito",
      "Oxxo"
    ];
    async function filterDonors(val, update) {
      if (val.length < 2) {
        update(() => {
          donorOptions.value = [];
        });
        return;
      }
      try {
        const response = await api.get(`/donors?search=${val}`);
        update(() => {
          donorOptions.value = response.data.data || response.data;
        });
      } catch (e) {
        console.error(e);
      }
    }
    watch(
      () => form.value.activity_type,
      (newType) => {
        form.value.procuration_activity_id = null;
        filteredActivities.value = procurationActivities.value.filter(
          (a) => a.type === newType && a.is_active
        );
      }
    );
    watch([() => form.value.amount, () => form.value.exchange_rate, () => form.value.currency], () => {
      if (form.value.currency === "DLLS") {
        form.value.equivalent_amount_mxn = (form.value.amount * form.value.exchange_rate).toFixed(2);
      } else {
        form.value.equivalent_amount_mxn = form.value.amount;
      }
    });
    watch(
      () => form.value.amount,
      (newVal) => {
        if (form.value.activity_type === "Boteo") {
          form.value.boteo_ten_percent = (newVal * 0.1).toFixed(2);
        }
      }
    );
    onMounted(async () => {
      try {
        const resActivities = await api.get("/procuration-activities");
        procurationActivities.value = resActivities.data.data || resActivities.data;
        const resBen = await api.get("/beneficiaries");
        beneficiaries.value = resBen.data.data || resBen.data;
      } catch (e) {
        console.log(e);
        notify.negative("Error al cargar catálogos iniciales");
      }
    });
    async function submitDonation(print = false) {
      try {
        loading.value = true;
        errors.value = {};
        const payload = {
          ...form.value,
          donor_id: form.value.donor_id?.id
        };
        const response = await api.post("/donations", payload);
        notify.positive(response.data.message);
        if (print) {
          generateTicket(response.data.data);
        }
        resetForm();
      } catch (error) {
        if (error.response?.status === 422) {
          errors.value = error.response.data.errors;
        } else {
          notify.negative("No se pudo procesar el donativo");
        }
      } finally {
        loading.value = false;
      }
    }
    function resetForm() {
      form.value = {
        /* Reiniciar valores iniciales */
      };
      form.value.payment_date = date.formatDate(Date.now(), "YYYY-MM-DD");
      form.value.payment_method = "Efectivo";
      form.value.currency = "MXN";
    }
    function generateTicket(donation) {
      console.log("Generando ticket para folio:", donation.folio_number);
      notify.info(`Imprimiendo Folio: ${donation.folio_number}`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        padding: "",
        class: "bg-grey-2"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, {
                flat: "",
                bordered: "",
                class: "q-pa-md shadow-2"
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                    default: withCtx(() => [
                      _cache[23] || (_cache[23] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Aplicar Donativo", -1)),
                      createVNode(QSpace),
                      _cache[24] || (_cache[24] = createBaseVNode("div", { class: "text-h6 text-primary text-weight-bolder" }, "Folio: P-26-XXXXX", -1))
                    ]),
                    _: 1
                  }),
                  createVNode(QForm, {
                    onSubmit: _cache[22] || (_cache[22] = withModifiers(($event) => submitDonation(false), ["prevent"]))
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3, [
                        createBaseVNode("div", _hoisted_4, [
                          _cache[26] || (_cache[26] = createBaseVNode("div", { class: "text-subtitle2 text-weight-bold" }, "Donante (Búsqueda Inteligente)", -1)),
                          createVNode(QSelect, {
                            modelValue: form.value.donor_id,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.donor_id = $event),
                            "use-input": "",
                            outlined: "",
                            dense: "",
                            label: "Escriba nombre o razón social",
                            options: donorOptions.value,
                            "option-label": "name",
                            onFilter: filterDonors,
                            error: !!errors.value.donor_id,
                            "error-message": errors.value.donor_id?.[0]
                          }, {
                            "no-option": withCtx(() => [
                              createVNode(QItem, null, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { class: "text-grey" }, {
                                    default: withCtx(() => _cache[25] || (_cache[25] = [
                                      createTextVNode("No se encontraron resultados")
                                    ])),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "options", "error", "error-message"])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          _cache[27] || (_cache[27] = createBaseVNode("div", { class: "text-subtitle2 text-weight-bold" }, "RFC / Razón Social", -1)),
                          createVNode(QInput, {
                            outlined: "",
                            dense: "",
                            readonly: "",
                            "model-value": form.value.donor_id?.rfc || "Seleccione un donante",
                            "bg-color": "grey-3"
                          }, null, 8, ["model-value"])
                        ]),
                        createBaseVNode("div", _hoisted_6, [
                          createVNode(QSelect, {
                            modelValue: form.value.activity_type,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.activity_type = $event),
                            outlined: "",
                            dense: "",
                            label: "Tipo de Actividad",
                            options: activityTypes,
                            error: !!errors.value.activity_type
                          }, null, 8, ["modelValue", "error"])
                        ]),
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(QSelect, {
                            modelValue: form.value.procuration_activity_id,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.procuration_activity_id = $event),
                            outlined: "",
                            dense: "",
                            label: "Actividad Específica",
                            options: filteredActivities.value,
                            "option-label": "name",
                            "option-value": "id",
                            "map-options": "",
                            "emit-value": "",
                            disable: !form.value.activity_type,
                            error: !!errors.value.procuration_activity_id
                          }, null, 8, ["modelValue", "options", "disable", "error"])
                        ])
                      ]),
                      createVNode(QSeparator, { class: "q-my-lg" }),
                      createBaseVNode("div", _hoisted_8, [
                        createBaseVNode("div", _hoisted_9, [
                          createVNode(QInput, {
                            modelValue: form.value.concept,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.concept = $event),
                            outlined: "",
                            dense: "",
                            label: "Concepto del Pago",
                            type: "textarea",
                            rows: "2"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_10, [
                          createVNode(QInput, {
                            modelValue: form.value.payment_date,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.payment_date = $event),
                            outlined: "",
                            dense: "",
                            label: "Fecha de Pago",
                            type: "date"
                          }, null, 8, ["modelValue"]),
                          createVNode(QSelect, {
                            modelValue: form.value.payment_method,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.payment_method = $event),
                            outlined: "",
                            dense: "",
                            label: "Forma de Pago",
                            options: paymentMethods,
                            class: "q-mt-sm"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(QInput, {
                            modelValue: form.value.amount,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.amount = $event),
                            modelModifiers: { number: true },
                            outlined: "",
                            dense: "",
                            label: "Monto",
                            type: "number",
                            step: "0.01",
                            prefix: "$"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_12, [
                          createVNode(QSelect, {
                            modelValue: form.value.currency,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.currency = $event),
                            outlined: "",
                            dense: "",
                            label: "Moneda",
                            options: ["MXN", "DLLS"]
                          }, null, 8, ["modelValue"])
                        ]),
                        form.value.currency === "DLLS" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createBaseVNode("div", _hoisted_13, [
                            createVNode(QInput, {
                              modelValue: form.value.exchange_rate,
                              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.exchange_rate = $event),
                              modelModifiers: { number: true },
                              outlined: "",
                              dense: "",
                              label: "T. Cambio",
                              type: "number",
                              step: "0.0001",
                              color: "orange"
                            }, null, 8, ["modelValue"])
                          ]),
                          createBaseVNode("div", _hoisted_14, [
                            createVNode(QInput, {
                              "model-value": form.value.equivalent_amount_mxn,
                              outlined: "",
                              dense: "",
                              label: "Equiv. Pesos",
                              readonly: "",
                              "bg-color": "orange-1"
                            }, null, 8, ["model-value"])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_15, [
                          createVNode(QInput, {
                            modelValue: form.value.reference,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.reference = $event),
                            outlined: "",
                            dense: "",
                            label: "Referencia / No. Operación"
                          }, null, 8, ["modelValue"])
                        ]),
                        createBaseVNode("div", _hoisted_16, [
                          createVNode(QCheckbox, {
                            modelValue: form.value.has_tax_receipt,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.has_tax_receipt = $event),
                            label: "¿Requiere Recibo Deducible?"
                          }, null, 8, ["modelValue"]),
                          form.value.has_tax_receipt ? (openBlock(), createBlock(QInput, {
                            key: 0,
                            modelValue: form.value.tax_receipt_number,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.tax_receipt_number = $event),
                            outlined: "",
                            dense: "",
                            label: "No. de Recibo",
                            class: "q-ml-md flex-grow"
                          }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                        ])
                      ]),
                      form.value.activity_type ? (openBlock(), createElementBlock("div", _hoisted_17, [
                        createBaseVNode("div", _hoisted_18, [
                          createVNode(QIcon, { name: "extension" }),
                          createTextVNode(" Detalles de " + toDisplayString(form.value.activity_type), 1)
                        ]),
                        form.value.activity_type === "Alcancía" ? (openBlock(), createElementBlock("div", _hoisted_19, [
                          createVNode(QInput, {
                            modelValue: form.value.piggy_bank_location,
                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.piggy_bank_location = $event),
                            outlined: "",
                            dense: "",
                            label: "Ubicada en (Establecimiento/Lugar)",
                            class: "col-12"
                          }, null, 8, ["modelValue"])
                        ])) : createCommentVNode("", true),
                        ["Alianza", "Fundaciones"].includes(form.value.activity_type) ? (openBlock(), createElementBlock("div", _hoisted_20, [
                          createVNode(QInput, {
                            modelValue: form.value.project_name,
                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.project_name = $event),
                            outlined: "",
                            dense: "",
                            label: "Nombre del Proyecto / Convenio",
                            class: "col-12"
                          }, null, 8, ["modelValue"])
                        ])) : createCommentVNode("", true),
                        form.value.activity_type === "Boteo" ? (openBlock(), createElementBlock("div", _hoisted_21, [
                          createVNode(QInput, {
                            modelValue: form.value.boteo_area,
                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.boteo_area = $event),
                            outlined: "",
                            dense: "",
                            label: "Área de Boteo",
                            class: "col-4"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            modelValue: form.value.boteo_can_number,
                            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.boteo_can_number = $event),
                            outlined: "",
                            dense: "",
                            label: "No. de Bote",
                            class: "col-4"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            modelValue: form.value.boteo_ten_percent,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.boteo_ten_percent = $event),
                            outlined: "",
                            dense: "",
                            label: "10% Boteo (Auto)",
                            readonly: "",
                            class: "col-4",
                            "bg-color": "white"
                          }, null, 8, ["modelValue"])
                        ])) : createCommentVNode("", true),
                        ["Natación", "Programa de Verano"].includes(form.value.activity_type) ? (openBlock(), createElementBlock("div", _hoisted_22, [
                          createVNode(QSelect, {
                            modelValue: form.value.beneficiary_id,
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.beneficiary_id = $event),
                            outlined: "",
                            dense: "",
                            label: "Seleccionar Beneficiario",
                            options: beneficiaries.value,
                            "option-label": "full_name",
                            "option-value": "id",
                            "map-options": "",
                            "emit-value": "",
                            class: "col-4"
                          }, null, 8, ["modelValue", "options"]),
                          createVNode(QInput, {
                            modelValue: form.value.external_name,
                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.external_name = $event),
                            outlined: "",
                            dense: "",
                            label: "Nombre Externo (Si no es beneficiario)",
                            class: "col-4"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            modelValue: form.value.group_name,
                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.group_name = $event),
                            outlined: "",
                            dense: "",
                            label: "Grupo / Clase",
                            class: "col-4"
                          }, null, 8, ["modelValue"])
                        ])) : createCommentVNode("", true),
                        form.value.activity_type === "Organismos de Gobierno" ? (openBlock(), createElementBlock("div", _hoisted_23, [
                          createVNode(QInput, {
                            modelValue: form.value.government_institution_name,
                            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.government_institution_name = $event),
                            outlined: "",
                            dense: "",
                            label: "Dependencia / Institución de Gobierno",
                            class: "col-12"
                          }, null, 8, ["modelValue"])
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_24, [
                        createVNode(QBtn, {
                          flat: "",
                          label: "Cancelar",
                          color: "grey-7",
                          onClick: resetForm
                        }),
                        createVNode(QBtn, {
                          outline: "",
                          icon: "print",
                          label: "Guardar e Imprimir Ticket",
                          color: "secondary",
                          loading: loading.value,
                          onClick: _cache[21] || (_cache[21] = ($event) => submitDonation(true))
                        }, null, 8, ["loading"]),
                        createVNode(QBtn, {
                          unelevated: "",
                          icon: "save",
                          label: "Guardar Donativo",
                          color: "primary",
                          loading: loading.value,
                          type: "submit"
                        }, null, 8, ["loading"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const ApplyDonationPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67b9ea73"]]);
export {
  ApplyDonationPage as default
};
