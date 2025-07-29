import { Q as QCard, a as QCardSection } from "./QCard-Uo2azhKQ.js";
import { Q as QInput } from "./QInput-DpLq7x8-.js";
import { Q as QMarkupTable } from "./QMarkupTable-CnTuEiS2.js";
import { o as onMounted, p as computed, r as ref, i as api, l as createBlock, a as openBlock, w as withCtx, d as createVNode, b as createBaseVNode, j as QIcon, t as toDisplayString, Q as QBtn, h as createTextVNode, c as createElementBlock, F as Fragment, D as renderList, f as resolveComponent, g as unref, u as useAuthStore } from "./index-Bw7koZRs.js";
import { n as notify } from "./notify-DvT-hOLo.js";
import { a as QItem, Q as QItemSection, b as QItemLabel } from "./QItemLabel-DAkXD4my.js";
import { Q as QRadio } from "./QRadio-DqM-ahtL.js";
import { Q as QList } from "./QList-C0MQyPVs.js";
import { Q as QDialog } from "./QDialog-DifZ5hVn.js";
import "./use-dark-QoPeQzjR.js";
import "./use-key-composition-CcNkFKJ3.js";
import "./option-sizes-B9ECE9ZJ.js";
import "./use-timeout-CgolyZjO.js";
const _hoisted_1$2 = { class: "text-center q-gutter-y-md" };
const _hoisted_2$2 = { class: "text-primary text-bold" };
const _hoisted_3$2 = { class: "flex justify-center" };
const _hoisted_4$1 = { class: "flex justify-between items-center" };
const _hoisted_5 = { class: "flex justify-end" };
const _sfc_main$2 = {
  __name: "SponsorPicker",
  props: {
    modelValue: { type: Boolean, default: false },
    except: { type: Array, default: () => [] }
  },
  emits: ["close", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    onMounted(() => {
      fetchSponsors();
    });
    const sponsor = computed(() => sponsors.value.find((s) => s.id == sponsorId.value));
    const staging = ref(false);
    const sponsorId = ref(null);
    const loading = ref(false);
    const sponsors = ref([]);
    const rows = computed(() => sponsors.value.filter((item) => !props.except.includes(item.id)));
    async function fetchSponsors() {
      try {
        loading.value = true;
        sponsors.value = (await api.get(`/sponsors`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: __props.modelValue,
        onHide: _cache[5] || (_cache[5] = ($event) => emits("close"))
      }, {
        default: withCtx(() => [
          staging.value ? (openBlock(), createBlock(QCard, {
            key: 0,
            style: { "width": "400px" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pb-none" }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createBaseVNode("div", { class: "flex justify-center" }, [
                    createBaseVNode("div", { class: "page-title q-mb-none" }, "Confirmar seleccion")
                  ], -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$2, [
                    _cache[7] || (_cache[7] = createBaseVNode("div", null, "Confirma que desea vincular a", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QIcon, {
                        name: "sym_o_account_circle",
                        size: "40px"
                      })
                    ]),
                    createBaseVNode("div", _hoisted_2$2, toDisplayString(sponsor.value.full_name), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3$2, [
                    createVNode(QBtn, {
                      outline: "",
                      color: "primary",
                      class: "q-mr-md",
                      onClick: _cache[0] || (_cache[0] = ($event) => staging.value = false)
                    }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("Cancelar")
                      ])),
                      _: 1
                    }),
                    createVNode(QBtn, {
                      color: "primary",
                      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$router.push(`padrinos/${sponsorId.value}`))
                    }, {
                      default: withCtx(() => _cache[9] || (_cache[9] = [
                        createTextVNode("Confirmar")
                      ])),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : (openBlock(), createBlock(QCard, {
            key: 1,
            style: { "width": "400px" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pb-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_4$1, [
                    _cache[10] || (_cache[10] = createBaseVNode("div", { class: "page-title q-my-none" }, "Asociar un padrino", -1)),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "sym_o_close",
                      onClick: _cache[2] || (_cache[2] = ($event) => emits("close"))
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    class: "q-mb-md",
                    outlined: "",
                    "stack-label": "",
                    label: "Buscar por nombre"
                  }, {
                    prepend: withCtx(() => [
                      createVNode(QIcon, { name: "sym_o_search" })
                    ]),
                    _: 1
                  }),
                  createVNode(QList, { separator: "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (sponsor2) => {
                        return openBlock(), createBlock(QItem, {
                          clickable: "",
                          key: sponsor2.id
                        }, {
                          default: withCtx(() => [
                            createVNode(QItemSection, null, {
                              default: withCtx(() => [
                                createVNode(QItemLabel, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(sponsor2.full_name), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemLabel, { caption: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(sponsor2.company_name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemSection, { side: "" }, {
                              default: withCtx(() => [
                                createVNode(QRadio, {
                                  modelValue: sponsorId.value,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sponsorId.value = $event),
                                  val: sponsor2.id
                                }, null, 8, ["modelValue", "val"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(QBtn, {
                      disable: !sponsorId.value,
                      color: "primary",
                      onClick: _cache[4] || (_cache[4] = ($event) => staging.value = true)
                    }, {
                      default: withCtx(() => _cache[11] || (_cache[11] = [
                        createTextVNode("Continuar")
                      ])),
                      _: 1
                    }, 8, ["disable"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }))
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
};
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = { class: "text-bold" };
const _hoisted_3$1 = { class: "text-right" };
const _hoisted_4 = { key: 1 };
const _sfc_main$1 = {
  __name: "BeneficiarySponsors",
  props: {
    candidateId: { type: String, required: false },
    readonly: { type: Boolean, default: false }
  },
  setup(__props) {
    const dialog = ref(false);
    const props = __props;
    const paymentConfigs = ref([]);
    const except = computed(() => paymentConfigs.value.map((item) => item.sponsor.id));
    onMounted(async () => {
      let response = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
      paymentConfigs.value = response.filter((paymentConfig) => !!paymentConfig.sponsor_id);
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$2, {
          except: except.value,
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event),
          onClose: _cache[1] || (_cache[1] = ($event) => dialog.value = false)
        }, null, 8, ["except", "modelValue"]),
        createVNode(QCard, {
          bordered: "",
          flat: "",
          style: { "display": "flex", "flex-flow": "column nowrap", "height": "100%" }
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createBaseVNode("div", { class: "page-subtitle q-my-none" }, "Padrinos", -1)
              ])),
              _: 1
            }),
            createVNode(QMarkupTable, null, {
              default: withCtx(() => [
                paymentConfigs.value.length ? (openBlock(), createElementBlock("tbody", _hoisted_1$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(paymentConfigs.value, (paymentConfig) => {
                    return openBlock(), createElementBlock("tr", {
                      key: paymentConfig.id
                    }, [
                      createBaseVNode("td", null, [
                        createBaseVNode("div", _hoisted_2$1, toDisplayString(paymentConfig.sponsor.name), 1),
                        createBaseVNode("div", null, "$" + toDisplayString(paymentConfig.amount), 1)
                      ]),
                      createBaseVNode("td", _hoisted_3$1, [
                        createVNode(_component_router_link, {
                          class: "text-primary",
                          style: { "font-size": "0.75rem" },
                          to: `padrinos/${paymentConfig.sponsor_id}`
                        }, {
                          default: withCtx(() => _cache[4] || (_cache[4] = [
                            createTextVNode("Editar ")
                          ])),
                          _: 2
                        }, 1032, ["to"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("tbody", _hoisted_4, _cache[5] || (_cache[5] = [
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", {
                      colspan: "2",
                      class: "text-center",
                      style: { "height": "200px" }
                    }, " No hay padrinos asociados para mostrar. ")
                  ], -1)
                ])))
              ]),
              _: 1
            }),
            createVNode(QCardSection, { class: "flex justify-end q-mt-auto" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  disable: props.readonly,
                  outline: "",
                  color: "primary",
                  icon: "sym_o_add",
                  onClick: _cache[2] || (_cache[2] = ($event) => dialog.value = true)
                }, {
                  default: withCtx(() => _cache[6] || (_cache[6] = [
                    createTextVNode("Asociar padrino")
                  ])),
                  _: 1
                }, 8, ["disable"]),
                createVNode(QBtn, {
                  disable: props.readonly,
                  unelevated: "",
                  class: "q-ml-md",
                  color: "primary",
                  icon: "sym_o_add",
                  to: "registrar-padrino"
                }, {
                  default: withCtx(() => _cache[7] || (_cache[7] = [
                    createTextVNode("Registrar nuevo")
                  ])),
                  _: 1
                }, 8, ["disable"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "row q-col-gutter-x-md" };
const _hoisted_2 = { class: "col-12 col-md-6" };
const _hoisted_3 = { class: "col-12 col-md-6" };
const _sfc_main = {
  __name: "PaymentConfigDashboard",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const candidate = ref({});
    const rows = ref([]);
    const parentPaymentConfig = ref({
      candidate_id: props.candidateId,
      frequency: 1,
      month_payday: 1,
      address_type: "home",
      amount: 0
    });
    onMounted(async () => {
      candidate.value = props.candidateId ? (await api.get(`beneficiaries/${props.candidateId}`)).data.data : {};
      rows.value = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
      let foundParent = rows.value.find((row) => row.sponsor_id == null);
      parentPaymentConfig.value = foundParent ? foundParent : parentPaymentConfig.value;
    });
    async function storeParentPaymentConfig() {
      try {
        loading.value = false;
        let route = parentPaymentConfig.value.id ? `/payment_configs/${parentPaymentConfig.value.id}` : "payment_configs";
        let data = parentPaymentConfig.value.id ? { ...parentPaymentConfig.value, _method: "PUT" } : { ...parentPaymentConfig.value };
        parentPaymentConfig.value = (await api.post(route, data)).data.data;
        notify.positive(`Configuracion de pago actualizada con exito`);
      } catch (error) {
        console.log(error);
        notify.negative(`Error al guardar los cambios`);
      } finally {
        loading.value = false;
      }
    }
    const amountSponsors = computed(() => {
      if (!rows.value.length) return 0;
      let total = rows.value.filter((row) => row.sponsor_id != null).reduce((sum, row) => sum + row.monthly_amount, 0);
      return total.toFixed(2);
    });
    const amountEnlac = computed(
      () => (Number(candidate.value.program_price) - amountSponsors.value - parentPaymentConfig.value.amount).toFixed(2)
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1, {
            "candidate-id": props.candidateId,
            readonly: !unref(useAuthStore)().can("sponsors.update")
          }, null, 8, ["candidate-id", "readonly"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(QCard, { bordered: "" }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createBaseVNode("div", { class: "page-subtitle q-my-none" }, "Cuotas mensuales", -1)
                ])),
                _: 1
              }),
              createVNode(QMarkupTable, { flat: "" }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      _cache[2] || (_cache[2] = createBaseVNode("td", null, "Cuota de Padres:", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          outlined: "",
                          modelValue: parentPaymentConfig.value.amount,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => parentPaymentConfig.value.amount = $event)
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[3] || (_cache[3] = createBaseVNode("td", null, "Cuota de Padrinos:", -1)),
                      createBaseVNode("td", null, "$" + toDisplayString(amountSponsors.value), 1)
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[4] || (_cache[4] = createBaseVNode("td", null, "Cuota de ENLAC:", -1)),
                      createBaseVNode("td", null, "$" + toDisplayString(amountEnlac.value), 1)
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[5] || (_cache[5] = createBaseVNode("td", null, "Total del Programa:", -1)),
                      createBaseVNode("td", null, "$" + toDisplayString(candidate.value?.program_price), 1)
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "flex justify-end" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    outline: "",
                    color: "primary",
                    class: "q-mr-sm",
                    to: { name: "beneficiary.paymentConfig.control" }
                  }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("Ver detalles")
                    ])),
                    _: 1
                  }),
                  createVNode(QBtn, {
                    color: "primary",
                    onClick: storeParentPaymentConfig
                  }, {
                    default: withCtx(() => _cache[7] || (_cache[7] = [
                      createTextVNode("Guardar")
                    ])),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
