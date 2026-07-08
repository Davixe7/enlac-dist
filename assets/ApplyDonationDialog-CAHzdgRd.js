import { Q as QSpace } from "./QSpace-ByGBkEdH.js";
import { r as ref, x as onMounted, a4 as api, w as watch, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a6 as QCardSection, Z as createBaseVNode, K as withDirectives, U as QBtn, af as withModifiers, O as createElementBlock, L as createCommentVNode, S as toDisplayString, b4 as normalizeProps, b5 as guardReactiveProps, M as createTextVNode, a7 as QInput, P as Fragment, a9 as QCheckbox, a5 as QCard } from "./index-7AOIawlZ.js";
import { Q as QBadge } from "./QBadge-nekfDHfP.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-CANGy5CK.js";
import { a as QSelect } from "./QSelect-dUV2_Zts.js";
import { Q as QMarkupTable } from "./QMarkupTable-Dzg7c5ei.js";
import { Q as QForm } from "./QForm-Db92MXPU.js";
import { C as ClosePopup } from "./ClosePopup-BvD-30NV.js";
import { d as date } from "./date-DAZjCVpT.js";
import { n as notify } from "./notify-CPeSi7Xy.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "text-ellipsis" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "row q-col-gutter-sm" };
const _hoisted_5 = { key: 2 };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 4 };
const _hoisted_8 = { class: "row q-col-gutter-xs" };
const _hoisted_9 = { class: "row q-col-gutter-xs" };
const _hoisted_10 = { key: 5 };
const _hoisted_11 = { class: "row q-col-gutter-xs items-center" };
const _hoisted_12 = { class: "flex items-center" };
const _hoisted_13 = { class: "flex justify-end q-mt-md q-gutter-x-sm" };
const _sfc_main = {
  __name: "ApplyDonationDialog",
  props: ["raffleTicketId"],
  emits: ["saved"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const ticket = ref({});
    onMounted(() => {
      loadInitialData();
      setTicketData();
    });
    async function setTicketData() {
      if (!props.raffleTicketId) {
        return;
      }
      form.value.raffle_ticket_id = props.raffleTicketId;
      await fetchTicket();
      form.value.donor_id = ticket.value.donor_id;
      form.value.activity_type = ticket.value.raffle.activity.type;
      form.value.procuration_activity_id = ticket.value.raffle.activity.id;
    }
    async function fetchTicket() {
      try {
        ticket.value = (await api.get(`raffle_tickets/${props.raffleTicketId}`)).data.data;
      } catch (error) {
        console.log(error);
      }
    }
    const loading = ref(false);
    const errors = ref({});
    const donorOptions = ref([]);
    const beneficiaryOptions = ref([]);
    const procurationActivities = ref([]);
    const filteredActivities = ref([]);
    const fiscalOptions = ref([]);
    const form = ref({
      donor_id: null,
      raffle_ticket_id: null,
      fiscal_record_id: null,
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
      piggy_bank_location: "",
      project_name: "",
      boteo_area: "",
      boteo_can_number: "",
      boteo_ten_percent: 0,
      government_institution_name: "",
      beneficiary_id: null,
      external_name: "",
      group_name: ""
    });
    const activityTypes = [
      "Alcancía",
      "Alianza",
      "Boteo",
      "Donativos Varios",
      "Fundaciones",
      "Natación",
      "Obsequio entre Amigos",
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
    async function loadInitialData() {
      try {
        const resAct = await api.get("/procuration-activities");
        procurationActivities.value = resAct.data.data || resAct.data || [];
      } catch (e) {
        console.error(e);
        notify.negative("No se pudieron cargar las actividades de procuración");
      }
    }
    async function filterDonors(val, update, abort) {
      if (val.trim().length < 2) {
        abort();
        return;
      }
      try {
        const response = await api.get(`/donors/search-all?search=${val}`);
        const dataFetched = response.data || [];
        update(() => {
          donorOptions.value = dataFetched;
        });
      } catch (e) {
        console.error("Error al filtrar:", e);
        abort();
      }
    }
    async function filterBeneficiaries(val, update, abort) {
      if (val.trim().length < 2) {
        abort();
        return;
      }
      try {
        const response = await api.get(`/beneficiaries?type=search&name=${val}`);
        const dataFetched = response.data.data || [];
        update(() => {
          beneficiaryOptions.value = dataFetched.map((item) => ({
            id: item.value,
            // Homologamos el 'value' del backend como el 'id' que usa el formulario
            label: item.label
            // El 'label' ya viene ordenado correctamente desde el CONCAT_WS del Controlador
          }));
        });
      } catch (e) {
        console.error("Error al filtrar beneficiarios:", e);
        abort();
      }
    }
    watch(
      () => form.value.donor_id,
      (newVal) => {
        form.value.fiscal_record_id = null;
        fiscalOptions.value = [];
        if (!newVal) return;
        if (newVal.origin === "donante") {
          if (newVal.fiscal_records?.length > 0) {
            fiscalOptions.value = newVal.fiscal_records;
            if (newVal.fiscal_records.length === 1) {
              form.value.fiscal_record_id = newVal.fiscal_records[0].id;
            }
          }
        } else if (newVal.origin === "sponsor") {
          fiscalOptions.value = [
            {
              id: "sponsor-" + newVal.id,
              // ID único para diferenciarlo
              tax_name: newVal.company_name || newVal.full_name,
              // Su razón social
              rfc: "N/A"
            }
          ];
          form.value.fiscal_record_id = "sponsor-" + newVal.id;
        }
      }
    );
    watch(
      () => form.value.activity_type,
      (newType) => {
        form.value.piggy_bank_location = "";
        form.value.project_name = "";
        form.value.government_institution_name = "";
        form.value.beneficiary_id = null;
        form.value.external_name = "";
        form.value.group_name = "";
        form.value.boteo_area = "";
        form.value.boteo_can_number = "";
        form.value.boteo_ten_percent = 0;
        if (!newType) {
          filteredActivities.value = [];
          return;
        }
        filteredActivities.value = procurationActivities.value.filter((activity) => {
          const matchesType = activity.type === newType;
          const isActive = activity.is_active === 1 || activity.is_active === true || activity.is_active === "1";
          return matchesType && isActive;
        });
      }
    );
    watch([() => form.value.amount, () => form.value.exchange_rate, () => form.value.currency], () => {
      if (form.value.currency === "DLLS") {
        form.value.equivalent_amount_mxn = (Number(form.value.amount || 0) * Number(form.value.exchange_rate || 1)).toFixed(2);
      } else {
        form.value.equivalent_amount_mxn = Number(form.value.amount || 0).toFixed(2);
      }
    });
    watch(
      () => form.value.amount,
      (newVal) => {
        if (form.value.activity_type === "Boteo") {
          form.value.boteo_ten_percent = (Number(newVal || 0) * 0.1).toFixed(2);
        }
      }
    );
    async function save() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = form.value.raffle_ticket_id ? { ...form.value } : {
          ...form.value,
          donor_id: form.value.donor_id?.origin === "donante" ? form.value.donor_id.id : null,
          sponsor_id: form.value.donor_id?.origin === "sponsor" ? form.value.donor_id.id : null,
          beneficiary_id: form.value.beneficiary_id?.id || null
        };
        const response = await api.post("/donations", payload);
        const folio = response.data?.data?.folio_number || "";
        notify.positive(`Donativo aplicado con éxito. Folio: ${folio}`);
        emits("saved");
      } catch (error) {
        if (error.response?.status === 422) {
          errors.value = error.response.data.errors;
        } else {
          notify.negative("Error al guardar el donativo");
        }
      } finally {
        loading.value = false;
      }
    }
    async function saveAndPrint() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = {
          ...form.value,
          donor_id: form.value.donor_id?.origin === "donante" ? form.value.donor_id.id : null,
          sponsor_id: form.value.donor_id?.origin === "sponsor" ? form.value.donor_id.id : null,
          fiscal_record_id: typeof form.value.fiscal_record_id === "string" && form.value.fiscal_record_id.startsWith("sponsor-") ? null : form.value.fiscal_record_id,
          beneficiary_id: form.value.beneficiary_id?.id || null
        };
        const response = await api.post("/donations/print", payload, {
          responseType: "blob"
        });
        const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `recibo_donativo_${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        notify.positive("Donativo registrado y Ticket generado.");
      } catch (error) {
        console.error("Error al generar PDF:", error);
        notify.negative("Error al guardar o generar el PDF");
      } finally {
        loading.value = false;
      }
    }
    async function autoFetchExchangeRate() {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        if (data && data.rates && data.rates.MXN) {
          form.value.exchange_rate = parseFloat(data.rates.MXN.toFixed(2));
        }
      } catch (error) {
        console.error("No se pudo precargar el tipo de cambio automático:", error);
      }
    }
    watch(
      [() => form.value.amount, () => form.value.exchange_rate, () => form.value.currency],
      ([amount, rate, currency], [, , oldCurrency]) => {
        if (currency === "DLLS" && oldCurrency !== "DLLS") {
          autoFetchExchangeRate();
        }
        if (currency === "DLLS") {
          form.value.equivalent_amount_mxn = (Number(amount || 0) * Number(rate || 1)).toFixed(2);
        } else {
          form.value.equivalent_amount_mxn = Number(amount || 0).toFixed(2);
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "800px", "max-width": "95vw" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
            default: withCtx(() => [
              _cache[25] || (_cache[25] = createBaseVNode("div", { class: "text-h6 text-weight-bold" }, "Nueva Aplicación de Donativo", -1)),
              createVNode(QSpace),
              withDirectives(createVNode(QBtn, {
                icon: "close",
                flat: "",
                round: "",
                dense: ""
              }, null, 512), [
                [ClosePopup]
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QForm, {
                onSubmit: withModifiers(save, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(QMarkupTable, {
                    flat: "",
                    class: "donation-form-table"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("tbody", null, [
                        createBaseVNode("tr", null, [
                          _cache[27] || (_cache[27] = createBaseVNode("td", { class: "text-bold" }, "Donante", -1)),
                          createBaseVNode("td", null, [
                            !form.value.raffle_ticket_id ? (openBlock(), createBlock(QSelect, {
                              key: 0,
                              modelValue: form.value.donor_id,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.donor_id = $event),
                              "use-input": "",
                              clearable: "",
                              "input-debounce": "300",
                              outlined: "",
                              dense: "",
                              placeholder: "Escriba para buscar un donante...",
                              options: donorOptions.value,
                              "option-label": "full_name",
                              onFilter: filterDonors,
                              error: !!errors.value.donor_id,
                              "error-message": errors.value.donor_id?.[0],
                              "hide-bottom-space": ""
                            }, {
                              option: withCtx((scope) => [
                                createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QItemLabel, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(scope.opt.full_name) + " ", 1),
                                            createVNode(QBadge, {
                                              color: scope.opt.origin === "donante" ? "primary" : "orange"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(scope.opt.origin === "donante" ? "Donante" : "Padrino"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        scope.opt.origin === "donante" && scope.opt.fiscal_records?.length ? (openBlock(), createBlock(QItemLabel, {
                                          key: 0,
                                          caption: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Contiene " + toDisplayString(scope.opt.fiscal_records.length) + " registro(s) fiscal(es) ", 1)
                                          ]),
                                          _: 2
                                        }, 1024)) : scope.opt.origin === "donante" ? (openBlock(), createBlock(QItemLabel, {
                                          key: 1,
                                          caption: "",
                                          class: "text-amber-9"
                                        }, {
                                          default: withCtx(() => _cache[26] || (_cache[26] = [
                                            createTextVNode(" Sin registros fiscales ")
                                          ])),
                                          _: 1
                                        })) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              "selected-item": withCtx((scope) => [
                                scope.opt ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(scope.opt.full_name), 1)) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options", "error", "error-message"])) : createCommentVNode("", true),
                            ticket.value && ticket.value.buyer ? (openBlock(), createBlock(QInput, {
                              key: 1,
                              outlined: "",
                              "hide-bottom-space": "",
                              modelValue: ticket.value.buyer.first_name,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ticket.value.buyer.first_name = $event),
                              readonly: ""
                            }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[28] || (_cache[28] = createBaseVNode("td", { class: "text-bold" }, "RFC / Razón Social", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QSelect, {
                              modelValue: form.value.fiscal_record_id,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.fiscal_record_id = $event),
                              outlined: "",
                              dense: "",
                              clearable: "",
                              options: fiscalOptions.value,
                              "option-value": "id",
                              "option-label": "tax_name",
                              "map-options": "",
                              "emit-value": "",
                              disable: !form.value.donor_id || fiscalOptions.value.length === 0,
                              placeholder: !form.value.donor_id ? "Primero seleccione un donante..." : fiscalOptions.value.length === 0 ? "Este donante no tiene datos fiscales" : "Seleccione una razón social...",
                              "bg-color": !form.value.donor_id || fiscalOptions.value.length === 0 ? "grey-2" : "white",
                              "hide-bottom-space": ""
                            }, {
                              option: withCtx((scope) => [
                                createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                                  default: withCtx(() => [
                                    createVNode(QItemSection, null, {
                                      default: withCtx(() => [
                                        createVNode(QItemLabel, { class: "text-weight-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(scope.opt.commercial_name || scope.opt.tax_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(QItemLabel, { caption: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode("RFC: " + toDisplayString(scope.opt.rfc), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1040)
                              ]),
                              "selected-item": withCtx((scope) => [
                                createBaseVNode("span", _hoisted_2, [
                                  createBaseVNode("strong", null, "RFC: " + toDisplayString(scope.opt.rfc), 1),
                                  createTextVNode(" — " + toDisplayString(scope.opt.commercial_name || scope.opt.tax_name), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "options", "disable", "placeholder", "bg-color"])
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[29] || (_cache[29] = createBaseVNode("td", { class: "text-bold" }, "Tipo de Actividad", -1)),
                          createBaseVNode("td", null, [
                            !form.value.raffle_ticket_id ? (openBlock(), createBlock(QSelect, {
                              key: 0,
                              modelValue: form.value.activity_type,
                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.activity_type = $event),
                              outlined: "",
                              dense: "",
                              options: activityTypes,
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])) : (openBlock(), createBlock(QInput, {
                              key: 1,
                              outlined: "",
                              "hide-bottom-space": "",
                              modelValue: ticket.value.raffle.activity.type,
                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ticket.value.raffle.activity.type = $event),
                              readonly: ""
                            }, null, 8, ["modelValue"]))
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[30] || (_cache[30] = createBaseVNode("td", { class: "text-bold" }, "Actividad Específica", -1)),
                          createBaseVNode("td", null, [
                            !form.value.raffle_ticket_id ? (openBlock(), createBlock(QSelect, {
                              key: 0,
                              modelValue: form.value.procuration_activity_id,
                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.procuration_activity_id = $event),
                              outlined: "",
                              dense: "",
                              options: filteredActivities.value,
                              "option-label": "name",
                              "option-value": "id",
                              "map-options": "",
                              "emit-value": "",
                              disable: !form.value.activity_type,
                              placeholder: "Seleccione la actividad...",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue", "options", "disable"])) : (openBlock(), createBlock(QInput, {
                              key: 1,
                              outlined: "",
                              "hide-bottom-space": "",
                              modelValue: ticket.value.raffle.activity.name,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ticket.value.raffle.activity.name = $event),
                              readonly: ""
                            }, null, 8, ["modelValue"]))
                          ])
                        ]),
                        form.value.activity_type === "Alcancía" ? (openBlock(), createElementBlock("tr", _hoisted_3, [
                          _cache[31] || (_cache[31] = createBaseVNode("td", { class: "text-bold" }, "Ubicada en", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value.piggy_bank_location,
                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.piggy_bank_location = $event),
                              outlined: "",
                              dense: "",
                              placeholder: "Nombre del establecimiento",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])
                          ])
                        ])) : createCommentVNode("", true),
                        form.value.activity_type === "Boteo" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createBaseVNode("tr", null, [
                            _cache[32] || (_cache[32] = createBaseVNode("td", { class: "text-bold" }, "Área de Boteo", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QInput, {
                                modelValue: form.value.boteo_area,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.boteo_area = $event),
                                outlined: "",
                                dense: "",
                                placeholder: "Escriba el área de recolección",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[33] || (_cache[33] = createBaseVNode("td", { class: "text-bold" }, "No. de Bote / 10%", -1)),
                            createBaseVNode("td", null, [
                              createBaseVNode("div", _hoisted_4, [
                                createVNode(QInput, {
                                  modelValue: form.value.boteo_can_number,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.boteo_can_number = $event),
                                  outlined: "",
                                  dense: "",
                                  placeholder: "No. de Bote",
                                  class: "col-6",
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"]),
                                createVNode(QInput, {
                                  modelValue: form.value.boteo_ten_percent,
                                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.boteo_ten_percent = $event),
                                  outlined: "",
                                  dense: "",
                                  placeholder: "10% (Autocalculado)",
                                  readonly: "",
                                  class: "col-6",
                                  "bg-color": "grey-2",
                                  "hide-bottom-space": ""
                                }, null, 8, ["modelValue"])
                              ])
                            ])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        form.value.activity_type === "Alianza" || form.value.activity_type === "Fundaciones" ? (openBlock(), createElementBlock("tr", _hoisted_5, [
                          _cache[34] || (_cache[34] = createBaseVNode("td", { class: "text-bold" }, "Proyecto", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value.project_name,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.project_name = $event),
                              outlined: "",
                              dense: "",
                              placeholder: "Nombre del proyecto asignado",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])
                          ])
                        ])) : createCommentVNode("", true),
                        form.value.activity_type === "Programa de Verano" || form.value.activity_type === "Natación" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                          createBaseVNode("tr", null, [
                            _cache[35] || (_cache[35] = createBaseVNode("td", { class: "text-bold" }, "Beneficiario", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QSelect, {
                                modelValue: form.value.beneficiary_id,
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.beneficiary_id = $event),
                                "use-input": "",
                                clearable: "",
                                "input-debounce": "300",
                                outlined: "",
                                dense: "",
                                placeholder: "Escriba el nombre del beneficiario...",
                                options: beneficiaryOptions.value,
                                "option-value": "id",
                                "option-label": "label",
                                "emit-value": "",
                                "map-options": "",
                                onFilter: filterBeneficiaries,
                                "hide-bottom-space": ""
                              }, {
                                option: withCtx((scope) => [
                                  createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(scope.opt.label), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1040)
                                ]),
                                "selected-item": withCtx((scope) => [
                                  scope.opt ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(scope.opt.label), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["modelValue", "options"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[36] || (_cache[36] = createBaseVNode("td", { class: "text-bold" }, "Nombre Externo", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QInput, {
                                modelValue: form.value.external_name,
                                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.external_name = $event),
                                outlined: "",
                                dense: "",
                                placeholder: "Nombre de la persona externa",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[37] || (_cache[37] = createBaseVNode("td", { class: "text-bold" }, "Grupo", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QInput, {
                                modelValue: form.value.group_name,
                                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.group_name = $event),
                                outlined: "",
                                dense: "",
                                placeholder: "Asigne el grupo o clase",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"])
                            ])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        form.value.activity_type === "Organismos de Gobierno" ? (openBlock(), createElementBlock("tr", _hoisted_7, [
                          _cache[38] || (_cache[38] = createBaseVNode("td", { class: "text-bold" }, "Nombre de Institución", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value.government_institution_name,
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.government_institution_name = $event),
                              outlined: "",
                              dense: "",
                              placeholder: "Secretaría, Dirección o dependencia estatal",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])
                          ])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("tr", null, [
                          _cache[39] || (_cache[39] = createBaseVNode("td", { class: "text-bold" }, "Concepto", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value.concept,
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.concept = $event),
                              outlined: "",
                              dense: "",
                              type: "textarea",
                              rows: "2",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[40] || (_cache[40] = createBaseVNode("td", { class: "text-bold" }, "Fecha / Método", -1)),
                          createBaseVNode("td", null, [
                            createBaseVNode("div", _hoisted_8, [
                              createVNode(QInput, {
                                modelValue: form.value.payment_date,
                                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.payment_date = $event),
                                outlined: "",
                                dense: "",
                                type: "date",
                                class: "col-6",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"]),
                              createVNode(QSelect, {
                                modelValue: form.value.payment_method,
                                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.payment_method = $event),
                                outlined: "",
                                dense: "",
                                options: paymentMethods,
                                class: "col-6",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"])
                            ])
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[41] || (_cache[41] = createBaseVNode("td", { class: "text-bold" }, "Monto / Moneda", -1)),
                          createBaseVNode("td", null, [
                            createBaseVNode("div", _hoisted_9, [
                              createVNode(QInput, {
                                modelValue: form.value.amount,
                                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.amount = $event),
                                modelModifiers: { number: true },
                                outlined: "",
                                dense: "",
                                type: "number",
                                step: "0.01",
                                prefix: "$",
                                class: "col-6",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"]),
                              createVNode(QSelect, {
                                modelValue: form.value.currency,
                                "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.currency = $event),
                                outlined: "",
                                dense: "",
                                options: ["MXN", "DLLS"],
                                class: "col-6",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"])
                            ])
                          ])
                        ]),
                        form.value.currency === "DLLS" ? (openBlock(), createElementBlock("tr", _hoisted_10, [
                          _cache[42] || (_cache[42] = createBaseVNode("td", { class: "text-bold" }, "Tipo de Cambio", -1)),
                          createBaseVNode("td", null, [
                            createBaseVNode("div", _hoisted_11, [
                              createVNode(QInput, {
                                modelValue: form.value.exchange_rate,
                                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => form.value.exchange_rate = $event),
                                modelModifiers: { number: true },
                                outlined: "",
                                dense: "",
                                type: "number",
                                step: "0.01",
                                class: "col-6",
                                "hide-bottom-space": ""
                              }, null, 8, ["modelValue"]),
                              createVNode(QInput, {
                                "model-value": form.value.equivalent_amount_mxn,
                                outlined: "",
                                dense: "",
                                readonly: "",
                                prefix: "Equiv. Pesos: $",
                                "bg-color": "orange-1",
                                class: "col-6 text-weight-bold text-orange-9",
                                "hide-bottom-space": ""
                              }, null, 8, ["model-value"])
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("tr", null, [
                          _cache[43] || (_cache[43] = createBaseVNode("td", { class: "text-bold" }, "Referencia", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value.reference,
                              "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => form.value.reference = $event),
                              outlined: "",
                              dense: "",
                              placeholder: "No. de operación o cheque",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[44] || (_cache[44] = createBaseVNode("td", { class: "text-bold" }, "¿Deducible?", -1)),
                          createBaseVNode("td", _hoisted_12, [
                            createVNode(QCheckbox, {
                              modelValue: form.value.has_tax_receipt,
                              "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => form.value.has_tax_receipt = $event),
                              label: "Sí, requiere recibo"
                            }, null, 8, ["modelValue"]),
                            form.value.has_tax_receipt ? (openBlock(), createBlock(QInput, {
                              key: 0,
                              modelValue: form.value.tax_receipt_number,
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => form.value.tax_receipt_number = $event),
                              outlined: "",
                              dense: "",
                              placeholder: "No. de Recibo",
                              class: "q-ml-md",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_13, [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "Cancelar"
                    }, null, 512), [
                      [ClosePopup]
                    ]),
                    createVNode(QBtn, {
                      unelevated: "",
                      icon: "print",
                      label: "Guardar e Imprimir",
                      color: "primary",
                      onClick: saveAndPrint,
                      loading: loading.value
                    }, null, 8, ["loading"]),
                    createVNode(QBtn, {
                      unelevated: "",
                      icon: "save",
                      label: "Guardar",
                      color: "primary",
                      onClick: save,
                      loading: loading.value
                    }, null, 8, ["loading"])
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
