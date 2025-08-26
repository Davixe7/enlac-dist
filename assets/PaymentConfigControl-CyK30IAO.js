import { Q as QMarkupTable } from "./QMarkupTable-DsWzvl2S.js";
import { Q as QCard, a as QCardSection } from "./QCard-2LFzadz4.js";
import { Q as QRadio } from "./QRadio-DjqyWwR0.js";
import { Q as QInput } from "./QInput-rhPFqdXf.js";
import { Q as QSelect } from "./QSelect-CHFKea7D.js";
import { r as ref, p as computed, o as onMounted, i as api, c as createElementBlock, d as createVNode, w as withCtx, a as openBlock, b as createBaseVNode, x as createCommentVNode, F as Fragment, C as renderList, t as toDisplayString, g as unref, u as useAuthStore, G as normalizeClass, Q as QBtn, h as createTextVNode } from "./index-BohS6BTj.js";
import { Q as QDialog } from "./QDialog-BWfG8-5J.js";
import { n as notify } from "./notify-Bp4QBAep.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./use-dark-CRXm_J8x.js";
import "./option-sizes-BK7oOCkP.js";
import "./use-key-composition-CfFXhD6z.js";
import "./QItemLabel-CYfLSou4.js";
import "./selection-Bf8snFwk.js";
import "./use-timeout-DaW3MBpA.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "PaymentConfigControl",
  props: ["candidateId"],
  setup(__props) {
    const rows = ref([]);
    const props = __props;
    const errors = ref({});
    const loading = ref(false);
    const dialog = ref(false);
    const candidate = ref({});
    const amountSponsors = computed(() => {
      if (!rows.value.length) return 0;
      let total = rows.value.reduce((sum, row) => sum + row.monthly_amount, 0);
      return total.toFixed(2);
    });
    const amountEnlac = computed(() => {
      if (!candidate.value.id) return 0;
      return (candidate.value.program.price - amountSponsors.value).toFixed(2);
    });
    const payment = ref({
      candidate_id: props.candidateId,
      sponsor_id: null,
      payment_type: "",
      is_partial: 0,
      date: "",
      payment_method: "",
      ref: null,
      comments: null,
      amount: 0
    });
    const configs = ref([]);
    const paymentMethods = ref([
      "Efectivo",
      "Transferencia",
      "Depósito",
      "Cheque",
      "Tarjeta de Débito",
      "Tarjeta de Crédito",
      "Oxxo"
    ]);
    async function fetchConfigs() {
      let response = (await api.get(`/test/?candidate_id=${props.candidateId}`)).data;
      configs.value = { ...response, [""]: response[""] };
    }
    onMounted(async () => {
      payment.value.payment_method = paymentMethods.value[0];
      candidate.value = (await api.get(`/candidates/${props.candidateId}`)).data.data;
      rows.value = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
      await fetchConfigs();
    });
    function setPayment(config) {
      let firstDue = configs.value[config].find((i) => i.status == "red");
      firstDue = firstDue ? firstDue : configs.value[config].find((i) => i.status == "yellow");
      payment.value.sponsor_id = config;
      payment.value.payment_type = config ? "sponsor" : "parent";
      payment.value.date = firstDue.date;
      dialog.value = true;
    }
    async function storePayment() {
      loading.value = true;
      try {
        let data = { ...payment.value };
        (await api.post("payments", data)).data.data;
        notify.positive("Pago registrado con exito");
        dialog.value = false;
        await fetchConfigs();
      } catch (error) {
        errors.value = error.formatted ? error.formatted : {};
        notify.negative("Error al registrar el pago");
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QMarkupTable, {
          bordered: "",
          separator: "cell"
        }, {
          default: withCtx(() => [
            _cache[10] || (_cache[10] = createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Concepto"),
                createBaseVNode("th", null, "Ago"),
                createBaseVNode("th", null, "Sep"),
                createBaseVNode("th", null, "Oct"),
                createBaseVNode("th", null, "Nov"),
                createBaseVNode("th", null, "Dic"),
                createBaseVNode("th", null, "Ene"),
                createBaseVNode("th", null, "Feb"),
                createBaseVNode("th", null, "Mar"),
                createBaseVNode("th", null, "Abr"),
                createBaseVNode("th", null, "May"),
                createBaseVNode("th", null, "Jun"),
                createBaseVNode("th", null, "Jul")
              ])
            ], -1)),
            rows.value && rows.value.length ? (openBlock(), createElementBlock("tbody", _hoisted_1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(configs.value).reverse(), (config) => {
                return openBlock(), createElementBlock("tr", { key: config }, [
                  createBaseVNode("td", null, toDisplayString(config != "" ? rows.value.find((r) => r.sponsor?.id == config).sponsor.full_name : "Cuota de padres"), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(configs.value[config], (payment2) => {
                    return openBlock(), createElementBlock("td", {
                      key: payment2.month,
                      class: normalizeClass([`bg-${payment2.status}-2`]),
                      onClick: ($event) => unref(useAuthStore)().can("payments.update") ? setPayment(config) : ""
                    }, [
                      createBaseVNode("div", null, "$" + toDisplayString(payment2.abono), 1)
                    ], 10, _hoisted_2);
                  }), 128))
                ]);
              }), 128)),
              createBaseVNode("tr", null, [
                _cache[8] || (_cache[8] = createBaseVNode("td", null, "Beca ENLAC", -1)),
                (openBlock(), createElementBlock(Fragment, null, renderList(12, (n) => {
                  return createBaseVNode("td", { key: n }, toDisplayString(amountEnlac.value), 1);
                }), 64))
              ]),
              candidate.value.id ? (openBlock(), createElementBlock("tr", _hoisted_3, [
                _cache[9] || (_cache[9] = createBaseVNode("td", null, "Total", -1)),
                (openBlock(), createElementBlock(Fragment, null, renderList(12, (n) => {
                  return createBaseVNode("td", { key: n }, toDisplayString(candidate.value.program.price), 1);
                }), 64))
              ])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "560px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createBaseVNode("div", { class: "page-subtitle q-mb-none" }, "Aplicar Pago", -1)
                  ])),
                  _: 1
                }),
                createVNode(QMarkupTable, {
                  bordered: "",
                  separator: "cell"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("th", null, "Beneficiario", -1)),
                        createBaseVNode("td", null, toDisplayString(candidate.value.full_name), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[13] || (_cache[13] = createBaseVNode("th", null, "Concepto", -1)),
                        createBaseVNode("td", null, " Cuota de " + toDisplayString(payment.value.payment_type == "sponsor" ? "Padrino" : "Padre"), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[14] || (_cache[14] = createBaseVNode("th", null, "Pago", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QRadio, {
                            label: "Parcial",
                            modelValue: payment.value.is_partial,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => payment.value.is_partial = $event),
                            val: 1,
                            "true-val": 1
                          }, null, 8, ["modelValue"]),
                          createVNode(QRadio, {
                            label: "Total",
                            modelValue: payment.value.is_partial,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => payment.value.is_partial = $event),
                            val: 0,
                            "true-val": 0
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[15] || (_cache[15] = createBaseVNode("th", null, "Fecha de Pago", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: payment.value.date,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => payment.value.date = $event),
                            error: !!errors.value.date,
                            "error-message": errors.value.date,
                            "hide-bottom-space": "",
                            type: "date"
                          }, null, 8, ["modelValue", "error", "error-message"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[16] || (_cache[16] = createBaseVNode("th", null, "Forma de Pago", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            outlined: "",
                            dense: "",
                            options: paymentMethods.value,
                            modelValue: payment.value.payment_method,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => payment.value.payment_method = $event),
                            error: !!errors.value.payment_method,
                            "error-message": errors.value.payment_method,
                            "hide-bottom-space": ""
                          }, null, 8, ["options", "modelValue", "error", "error-message"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[17] || (_cache[17] = createBaseVNode("th", null, "Referencia", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: payment.value.ref,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => payment.value.ref = $event),
                            error: !!errors.value.ref,
                            "error-message": errors.value.ref,
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue", "error", "error-message"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[18] || (_cache[18] = createBaseVNode("th", null, "Comentarios", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: payment.value.comments,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => payment.value.comments = $event),
                            error: !!errors.value.comments,
                            "error-message": errors.value.comments,
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue", "error", "error-message"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[19] || (_cache[19] = createBaseVNode("th", null, "Monto", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: payment.value.amount,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => payment.value.amount = $event),
                            error: !!errors.value.amount,
                            "error-message": errors.value.amount,
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue", "error", "error-message"])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4, [
                      createVNode(QBtn, {
                        onClick: storePayment,
                        loading: loading.value,
                        color: "primary"
                      }, {
                        default: withCtx(() => _cache[20] || (_cache[20] = [
                          createTextVNode("Guardar")
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
        }, 8, ["modelValue"])
      ]);
    };
  }
};
const PaymentConfigControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e35fc741"]]);
export {
  PaymentConfigControl as default
};
