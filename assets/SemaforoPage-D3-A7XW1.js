import { r as ref, w as watch, a as computed, x as onMounted, G as createBlock, H as openBlock, I as withCtx, Z as createBaseVNode, O as createElementBlock, L as createCommentVNode, ab as normalizeClass, J as createVNode, a9 as QCheckbox, ai as QRadio, a7 as QInput, P as Fragment, R as renderList, M as createTextVNode, S as toDisplayString, U as QBtn, a4 as api, a5 as QCard, a6 as QCardSection, aa as QDialog } from "./index-Lpbv6tCz.js";
import { Q as QMarkupTable } from "./QMarkupTable-CAF8YLQ6.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { a as QSelect } from "./QSelect-A9ZZmmDT.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-hGGqEP0j.js";
import { Q as QList } from "./QList-VjDLrJpF.js";
import { Q as QForm } from "./QForm-_kiBS9mb.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./format-BC-UoHKJ.js";
const _hoisted_1$1 = { class: "row" };
const _hoisted_2 = {
  key: 0,
  class: "col-5 q-pa-sm"
};
const _hoisted_3 = {
  style: { "border-radius": "3px" },
  class: "bg-grey-2"
};
const _hoisted_4 = {
  class: "col-md-12 q-pa-md flex justify-end",
  style: { "border-top": "1px solid rgba(0, 0, 0, 0.095)" }
};
const _sfc_main$1 = {
  __name: "PaymentForm",
  props: ["month", "paymentBlocks", "candidateId"],
  emits: "close",
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const payment = ref({
      year: null,
      month: 8,
      payment_method: null,
      amount: props.month.goal_amount - props.month.paid_amount,
      comments: "",
      ref: "",
      is_partial: 0,
      date: `${props.month.year}-${props.month.month}-01`,
      candidate_id: props.candidateId,
      payment_type: props.month.type
    });
    const multiple = ref(false);
    watch(
      () => multiple.value,
      function(newVal) {
        console.log(newVal);
        if (!newVal) {
          targetMonths.value = [props.month];
        }
      }
    );
    const localPaymentBlocks = computed(() => {
      return Object.values(props.paymentBlocks[props.month.key]);
    });
    const enabledPaymentBlocks = computed(() => {
      return localPaymentBlocks.value.map((block) => {
        let fullPaid = block.paid_amount == block.goal_amount;
        block.enabled = block.payment_config_id == props.month.payment_config_id && !fullPaid;
        return block;
      });
    });
    const fullAmount = computed(() => {
      if (!Array.isArray(targetMonths.value)) {
        return 0;
      }
      return targetMonths.value.reduce((amount, targetMonth) => {
        let block = enabledPaymentBlocks.value.find((block2) => block2.month == targetMonth.month);
        return block.goal_amount + amount;
      }, 0);
    });
    const targetMonths = ref([]);
    const loading = ref(false);
    const errors = ref({});
    const monthNames = ref([
      "",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ]);
    const paymentMethods = ref([
      { label: "Seleccione un método", value: null },
      { label: "Efectivo", value: "Efectivo" },
      { label: "Transferencia", value: "Transferencia" },
      { label: "Depósito", value: "Depósito" },
      { label: "Cheque", value: "Cheque" },
      { label: "Tarjeta de Débito", value: "Tarjeta de Débito" },
      { label: "Tarjeta de Crédito", value: "Tarjeta de Crédito" },
      { label: "Oxxo", value: "Oxxo" }
    ]);
    async function storePayment() {
      try {
        errors.value = {};
        loading.value = true;
        if (!validateMax()) return;
        let data = {
          ...payment.value,
          multiple: multiple.value,
          targetMonths: targetMonths.value,
          payment_config_id: props.month.payment_config_id
        };
        await api.post("payments", data);
        notify.positive("Pago registrado exitosamente");
        emit("close");
      } catch (error) {
        console.log("Error al registrar pago", error.response);
        errors.value = error.formatted ? error.formatted : errors.value;
        notify.negative("No se pudo guardar la información del pago");
      } finally {
        loading.value = false;
      }
    }
    function validateMax() {
      console.log(props.month.goal_amount, props.month.paid_amount);
      if (multiple.value) {
        return true;
      }
      if (payment.value.amount > props.month.goal_amount - props.month.paid_amount) {
        errors.value["amount"] = "El monto a pagar no puede superar el monto pendiente";
        return false;
      }
      return true;
    }
    watch(
      () => targetMonths.value,
      () => {
        payment.value.amount = fullAmount.value;
      }
    );
    onMounted(() => {
      payment.value.month = props.month.month;
      payment.value.year = props.month.year;
      targetMonths.value.push(
        enabledPaymentBlocks.value.find((block) => props.month.month == block.month)
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QForm, {
        onSubmit: _cache[9] || (_cache[9] = ($event) => storePayment())
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", {
              class: normalizeClass({ "col-12": !multiple.value, "col-md-7": multiple.value })
            }, [
              createVNode(QMarkupTable, { flat: "" }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      _cache[10] || (_cache[10] = createBaseVNode("td", null, "Multiple", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QCheckbox, {
                          outlined: "",
                          dense: "",
                          "true-value": true,
                          "false-value": false,
                          modelValue: multiple.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => multiple.value = $event),
                          class: "q-ml-xs q-mr-md"
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[11] || (_cache[11] = createBaseVNode("td", null, "Cobertura", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QRadio, {
                          outlined: "",
                          dense: "",
                          val: 1,
                          label: "Parcial",
                          modelValue: payment.value.is_partial,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => payment.value.is_partial = $event),
                          error: !!errors.value.is_partial,
                          "error-message": errors.value.is_partial,
                          "hide-bottom-space": "",
                          class: "q-ml-xs q-mr-md",
                          disable: multiple.value
                        }, null, 8, ["modelValue", "error", "error-message", "disable"]),
                        createVNode(QRadio, {
                          outlined: "",
                          dense: "",
                          val: 0,
                          label: "Total",
                          modelValue: payment.value.is_partial,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => payment.value.is_partial = $event),
                          error: !!errors.value.is_partial,
                          "error-message": errors.value.is_partial,
                          "hide-bottom-space": "",
                          disable: multiple.value
                        }, null, 8, ["modelValue", "error", "error-message", "disable"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[12] || (_cache[12] = createBaseVNode("td", null, "Fecha", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          filled: "",
                          "model-value": `${monthNames.value[__props.month.month]} ${__props.month.year}`,
                          "hide-bottom-space": ""
                        }, null, 8, ["model-value"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[13] || (_cache[13] = createBaseVNode("td", null, "Forma de Pago", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QSelect, {
                          outlined: "",
                          dense: "",
                          options: paymentMethods.value,
                          modelValue: payment.value.payment_method,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => payment.value.payment_method = $event),
                          error: !!errors.value.payment_method,
                          "error-message": errors.value.payment_method,
                          "emit-value": "",
                          "map-options": "",
                          "hide-bottom-space": ""
                        }, null, 8, ["options", "modelValue", "error", "error-message"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[14] || (_cache[14] = createBaseVNode("td", null, "Monto", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          filled: "",
                          type: "number",
                          modelValue: payment.value.amount,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => payment.value.amount = $event),
                          error: !!errors.value["amount"],
                          "error-message": errors.value["amount"],
                          disable: multiple.value || !payment.value.is_partial,
                          "hide-bottom-space": ""
                        }, null, 8, ["modelValue", "error", "error-message", "disable"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[15] || (_cache[15] = createBaseVNode("td", null, "Referencia", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          outlined: "",
                          modelValue: payment.value.ref,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => payment.value.ref = $event),
                          error: !!errors.value["ref"],
                          "error-message": errors.value["ref"],
                          "hide-bottom-space": ""
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[16] || (_cache[16] = createBaseVNode("td", null, "Comentarios", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          outlined: "",
                          modelValue: payment.value.comments,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => payment.value.comments = $event),
                          error: !!errors.value["comments"],
                          "error-message": errors.value["comments"],
                          "hide-bottom-space": ""
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ], 2),
            multiple.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QList, { style: { "max-height": "370px", "overflow": "auto" } }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(enabledPaymentBlocks.value, (item) => {
                      return openBlock(), createBlock(QItem, {
                        key: item.month,
                        disable: !item.enabled
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, null, {
                            default: withCtx(() => [
                              createVNode(QItemLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(`${monthNames.value[item.month]} ${item.year}`), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QItemLabel, {
                                caption: "",
                                top: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.paid_amount) + " / " + toDisplayString(item.goal_amount), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, {
                            side: "",
                            top: ""
                          }, {
                            default: withCtx(() => [
                              !payment.value.is_partial ? (openBlock(), createBlock(QCheckbox, {
                                key: 0,
                                modelValue: targetMonths.value,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => targetMonths.value = $event),
                                val: item,
                                disable: !item.enabled
                              }, null, 8, ["modelValue", "val", "disable"])) : (openBlock(), createBlock(QRadio, {
                                key: 1,
                                modelValue: targetMonths.value,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => targetMonths.value = $event),
                                val: item.month,
                                disable: !item.enabled
                              }, null, 8, ["modelValue", "val", "disable"]))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["disable"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_4, [
              createVNode(QBtn, {
                type: "submit",
                color: "primary",
                label: "Registrar pago",
                loading: loading.value
              }, null, 8, ["loading"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = ["onClick"];
const _sfc_main = {
  __name: "SemaforoPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const rows = ref([]);
    const loading = ref(false);
    onMounted(() => {
      fetchSponsorships();
    });
    async function fetchSponsorships() {
      try {
        loading.value = true;
        rows.value = (await api.get(`semaforo/?candidate_id=${props.candidateId}`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los datos del semaforo");
      } finally {
        loading.value = false;
      }
    }
    const monthShortNames = ref([
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul"
    ]);
    const month = ref({});
    const paymentFormDialog = ref(false);
    function createPayment(targetMonth, key) {
      if (targetMonth.paid_amount == targetMonth.goal_amount) {
        return;
      }
      month.value = targetMonth;
      month.value.key = key;
      paymentFormDialog.value = true;
    }
    function onPaymentSaved() {
      paymentFormDialog.value = false;
      fetchSponsorships(props.candidateId);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: paymentFormDialog.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => paymentFormDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "max-width": "920px", "width": "100%" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center q-py-md" }, {
                  default: withCtx(() => [
                    _cache[2] || (_cache[2] = createBaseVNode("h2", { class: "page-subtitle" }, "Aplicar pago", -1)),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "close",
                      class: "q-ml-auto",
                      onClick: _cache[0] || (_cache[0] = ($event) => paymentFormDialog.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  "candidate-id": props.candidateId,
                  month: month.value,
                  "payment-blocks": rows.value,
                  onClose: onPaymentSaved
                }, null, 8, ["candidate-id", "month", "payment-blocks"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title" }, "Semaforo", -1)),
        createVNode(QMarkupTable, {
          separator: "cell",
          class: "text-center"
        }, {
          default: withCtx(() => [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                _cache[3] || (_cache[3] = createBaseVNode("td", null, null, -1)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(monthShortNames.value, (monthName) => {
                  return openBlock(), createElementBlock("td", { key: monthName }, toDisplayString(monthName), 1);
                }), 128))
              ]),
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(rows.value), (key) => {
                return openBlock(), createElementBlock("tr", { key }, [
                  createBaseVNode("td", null, toDisplayString(key), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(rows.value[key]), (month2) => {
                    return openBlock(), createElementBlock("td", {
                      key: month2.year,
                      class: normalizeClass(`bg-${month2.color}`),
                      onClick: ($event) => createPayment(month2, key)
                    }, toDisplayString(month2.paid_amount_format) + " / " + toDisplayString(month2.goal_amount_format), 11, _hoisted_1);
                  }), 128))
                ]);
              }), 128))
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
