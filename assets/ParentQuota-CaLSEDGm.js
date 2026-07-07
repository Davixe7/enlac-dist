import { r as ref, a as computed, x as onMounted, E as onUnmounted, O as createElementBlock, H as openBlock, Z as createBaseVNode, S as toDisplayString, aL as renderSlot, M as createTextVNode, J as createVNode, I as withCtx, a5 as QCard, P as Fragment, a4 as api, a6 as QCardSection, a7 as QInput, U as QBtn, Q as QIcon, R as renderList, G as createBlock, T as QSeparator } from "./index-Lpbv6tCz.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-hGGqEP0j.js";
import { Q as QList } from "./QList-VjDLrJpF.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$2 } from "./EnlacDate-yz6lrqZ0.js";
import "./QDate-DenJkZYt.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-ulFL8mFR.js";
import "./date-s2hr6oY7.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-BBdHAWWY.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./ClosePopup-FQHseU-J.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1$1 = { class: "countdown-container" };
const _hoisted_2$1 = {
  key: 0,
  class: "countdown-timer"
};
const _hoisted_3 = { class: "time-block" };
const _hoisted_4 = { class: "time-value" };
const _hoisted_5 = { class: "time-block" };
const _hoisted_6 = { class: "time-value" };
const _hoisted_7 = { class: "time-block" };
const _hoisted_8 = { class: "time-value" };
const _hoisted_9 = { class: "time-block" };
const _hoisted_10 = { class: "time-value" };
const _hoisted_11 = {
  key: 1,
  class: "countdown-expired"
};
const _sfc_main$1 = {
  __name: "CountDown",
  props: {
    // "Y-m-d H:i:s" o timestamp en milisegundos
    targetDate: {
      type: [String, Number],
      required: true
    }
  },
  emits: ["expired"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const timeLeft = ref({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    let timerInterval = null;
    const targetTime = computed(() => {
      if (typeof props.targetDate === "string") {
        return new Date(props.targetDate.replace(" ", "T"));
      }
      return new Date(props.targetDate);
    });
    const isTimeUp = ref(false);
    const calculateTimeLeft = () => {
      const now = (/* @__PURE__ */ new Date()).getTime();
      const difference = targetTime.value.getTime() - now;
      if (difference <= 0) {
        isTimeUp.value = true;
        timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (timerInterval) clearInterval(timerInterval);
        emit("expired");
        return;
      }
      isTimeUp.value = false;
      timeLeft.value = {
        days: Math.floor(difference / (1e3 * 60 * 60 * 24)),
        hours: Math.floor(difference % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)),
        minutes: Math.floor(difference % (1e3 * 60 * 60) / (1e3 * 60)),
        seconds: Math.floor(difference % (1e3 * 60) / 1e3)
      };
    };
    const formatNumber = (num) => String(num).padStart(2, "0");
    onMounted(() => {
      calculateTimeLeft();
      timerInterval = setInterval(calculateTimeLeft, 1e3);
    });
    onUnmounted(() => {
      if (timerInterval) clearInterval(timerInterval);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        !isTimeUp.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", _hoisted_4, toDisplayString(formatNumber(timeLeft.value.days)), 1),
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "time-label" }, "Días", -1))
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("span", _hoisted_6, toDisplayString(formatNumber(timeLeft.value.hours)), 1),
            _cache[1] || (_cache[1] = createBaseVNode("span", { class: "time-label" }, "Horas", -1))
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("span", _hoisted_8, toDisplayString(formatNumber(timeLeft.value.minutes)), 1),
            _cache[2] || (_cache[2] = createBaseVNode("span", { class: "time-label" }, "Minutos", -1))
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("span", _hoisted_10, toDisplayString(formatNumber(timeLeft.value.seconds)), 1),
            _cache[3] || (_cache[3] = createBaseVNode("span", { class: "time-label" }, "Segundos", -1))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_11, [
          renderSlot(_ctx.$slots, "expired", {}, () => [
            _cache[4] || (_cache[4] = createTextVNode("No hay incremento programado"))
          ], true)
        ]))
      ]);
    };
  }
};
const CountDown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f0473161"]]);
const _hoisted_1 = { class: "q-ml-auto" };
const _hoisted_2 = { class: "flex items-center" };
const _sfc_main = {
  __name: "ParentQuota",
  setup(__props) {
    const errors = ref({});
    const loading = ref(false);
    const quota = ref({});
    const quotas = ref([]);
    async function fetchQuota() {
      try {
        loading.value = true;
        let response = (await api.get("/parent-quota-updates")).data.data;
        quotas.value = [...response];
        quota.value = quotas.value.length ? quotas.value.find((q) => q.applied == 0) : {};
        quotas.value = quotas.value.filter((q) => q.applied == 1);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function updateQuota() {
      try {
        loading.value = true;
        quota.value = (await api.post("/parent-quota-updates", { ...quota.value })).data.data;
        notify.positive("Guardado con éxito");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo guardar la actualización");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchQuota();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title" }, "Ajuste de Cuota de Padres", -1)),
        createVNode(QCard, { class: "q-mb-md" }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "flex items-center" }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  _cache[2] || (_cache[2] = createBaseVNode("div", {
                    class: "q-mb-xs",
                    style: { "font-size": "0.9rem" }
                  }, " Proxima ejecución ", -1)),
                  createVNode(CountDown, {
                    "target-date": quota.value.valid_since
                  }, null, 8, ["target-date"])
                ]),
                createBaseVNode("div", _hoisted_1, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", {
                    class: "q-mb-xs",
                    style: { "font-size": "0.9rem", "color": "#fff" }
                  }, " Proxima ejecución ", -1)),
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QInput, {
                      outlined: "",
                      modelValue: quota.value.amount,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => quota.value.amount = $event),
                      "hide-bottom-space": "",
                      error: !!errors.value["amount"],
                      "error-message": errors.value["amount"],
                      type: "number",
                      prefix: "$",
                      class: "q-mr-md"
                    }, null, 8, ["modelValue", "error", "error-message"]),
                    createVNode(_sfc_main$2, {
                      outlined: "",
                      modelValue: quota.value.valid_since,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => quota.value.valid_since = $event),
                      "hide-bottom-space": "",
                      "limit-to-past": false,
                      error: !!errors.value["valid_since"],
                      "error-message": errors.value["valid_since"],
                      class: "q-mr-md"
                    }, null, 8, ["modelValue", "error", "error-message"]),
                    createVNode(QBtn, {
                      color: "primary",
                      label: "Guardar cambios",
                      loading: loading.value,
                      onClick: updateQuota
                    }, null, 8, ["loading"])
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", null, [
          createVNode(QCard, null, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "flex items-center" }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: "sym_o_history",
                    class: "q-mr-sm"
                  }),
                  _cache[4] || (_cache[4] = createBaseVNode("span", { class: "font-weight-medium" }, "Historial de Incrementos", -1)),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "sym_o_more_vert",
                    class: "q-ml-auto"
                  })
                ]),
                _: 1
              }),
              createVNode(QList, {
                class: "q-pb-md q-px-sm",
                separator: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(quotas.value, (item) => {
                    return openBlock(), createBlock(QItem, {
                      key: item.id
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.valid_since) + " 00:00:00 ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QItemLabel, { caption: "" }, {
                              default: withCtx(() => [
                                createTextVNode(" $ " + toDisplayString(item.amount), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemSection, { side: "" }, {
                          default: withCtx(() => [
                            createVNode(QIcon, {
                              size: "1.5rem",
                              name: "sym_o_check_circle",
                              color: "positive"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(QSeparator)
            ]),
            _: 1
          })
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
