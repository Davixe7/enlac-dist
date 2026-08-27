import { Q as QTooltip } from "./QTooltip-x5G34X3y.js";
import { r as ref, a as computed, w as watch, K as onMounted, J as onUnmounted, q as createBlock, t as withCtx, V as api, s as openBlock, v as createVNode, N as createBaseVNode, G as QBtn, z as createTextVNode, B as createElementBlock, y as createCommentVNode, D as toDisplayString, a1 as QCard, X as QCardSection } from "./index-wM11jDk3.js";
import { Q as QBanner } from "./QBanner-C-BfGeBI.js";
import { Q as QPage } from "./QPage-DTnmuxcE.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./position-engine-C00F9T-k.js";
import "./selection-CttaKPaT.js";
const _hoisted_1 = {
  class: "column items-center text-center",
  style: { "max-width": "1100px", "width": "100%" }
};
const _hoisted_2 = { class: "text-h4 text-weight-bold text-primary q-mb-xl" };
const _hoisted_3 = {
  key: 0,
  class: "full-width q-mb-lg"
};
const _hoisted_4 = { class: "row q-col-gutter-md full-width q-mb-xl" };
const _hoisted_5 = { class: "col-12 col-md-4" };
const _hoisted_6 = { class: "text-h3 text-weight-bold text-primary q-mt-sm" };
const _hoisted_7 = { class: "col-12 col-md-4" };
const _hoisted_8 = { class: "text-h3 text-weight-bolder q-mt-sm" };
const _hoisted_9 = { class: "col-12 col-md-4" };
const _hoisted_10 = { class: "text-h3 text-weight-bold text-negative q-mt-sm" };
const _hoisted_11 = {
  key: 0,
  class: "column items-center q-py-md"
};
const _hoisted_12 = { class: "text-h4 text-weight-bold text-primary q-mb-xs" };
const _hoisted_13 = {
  key: 0,
  class: "text-h4 text-weight-bold text-primary q-mb-xs"
};
const _hoisted_14 = { class: "text-h2 text-weight-bolder text-positive q-mt-xs" };
const _hoisted_15 = {
  key: 1,
  class: "text-grey-6 q-py-lg text-italic text-h6"
};
const _sfc_main = {
  __name: "MarathonStreamPage",
  props: {
    radiomarathonId: {
      type: [String, Number],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const activityName = ref("Radiomaratón");
    const targetAmount = ref(0);
    const totalAmount = ref(0);
    const latestDonation = ref(null);
    const audioEnabled = ref(false);
    let timer = null;
    let audioCtx = null;
    function playSynthesizedBell() {
      if (!audioEnabled.value) return;
      try {
        if (!audioCtx) {
          audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }
        const now = audioCtx.currentTime;
        const repetitions = 12;
        const interval = 0.28;
        for (let i = 0; i < repetitions; i++) {
          const startTime = now + i * interval;
          const osc1 = audioCtx.createOscillator();
          const gain1 = audioCtx.createGain();
          osc1.type = "sawtooth";
          osc1.frequency.setValueAtTime(1200, startTime);
          osc1.frequency.exponentialRampToValueAtTime(600, startTime + 0.22);
          gain1.gain.setValueAtTime(0.8, startTime);
          gain1.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.22);
          osc1.connect(gain1);
          gain1.connect(audioCtx.destination);
          osc1.start(startTime);
          osc1.stop(startTime + 0.22);
          const osc2 = audioCtx.createOscillator();
          const gain2 = audioCtx.createGain();
          osc2.type = "square";
          osc2.frequency.setValueAtTime(1600, startTime + 0.06);
          osc2.frequency.exponentialRampToValueAtTime(800, startTime + 0.25);
          gain2.gain.setValueAtTime(0, startTime);
          gain2.gain.setValueAtTime(0.9, startTime + 0.06);
          gain2.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.25);
          osc2.connect(gain2);
          gain2.connect(audioCtx.destination);
          osc2.start(startTime + 0.06);
          osc2.stop(startTime + 0.25);
        }
      } catch (e) {
        console.error("Error al reproducir el sonido sintetizado:", e);
      }
    }
    function enableAudio() {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      audioCtx.resume().then(() => {
        audioEnabled.value = true;
      });
    }
    const remainingAmount = computed(() => {
      const diff = targetAmount.value - totalAmount.value;
      return diff > 0 ? diff : 0;
    });
    const isGoalReached = computed(() => {
      return targetAmount.value > 0 && totalAmount.value >= targetAmount.value;
    });
    function formatCurrency(value) {
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        maximumFractionDigits: 0
      }).format(value || 0);
    }
    async function fetchStreamData() {
      if (!props.radiomarathonId) return;
      try {
        if (activityName.value === "Radiomaratón") {
          const { data: activityData } = await api.get(
            `procuration-activities/${props.radiomarathonId}`
          );
          if (activityData?.data?.name) {
            activityName.value = activityData.data.name;
          }
        }
        const { data } = await api.get(`radiomarathon/${props.radiomarathonId}/stream`);
        if (data && typeof data === "object") {
          totalAmount.value = Number(data.data) || 0;
          targetAmount.value = Number(data.target) || 0;
          if (data.latest) {
            const hasChanged = !latestDonation.value || latestDonation.value.donor_name !== data.latest.donor_name || latestDonation.value.amount !== data.latest.amount || latestDonation.value.timestamp !== data.latest.timestamp;
            if (hasChanged) {
              latestDonation.value = data.latest;
              playSynthesizedBell();
            }
          }
        }
      } catch (error) {
        console.error("Error al obtener datos del stream:", error);
      }
    }
    function startPolling() {
      if (!timer && !isGoalReached.value) {
        timer = setInterval(fetchStreamData, 3e3);
      }
    }
    function stopPolling() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
    watch(isGoalReached, (reached) => {
      if (reached) {
        stopPolling();
      } else {
        startPolling();
      }
    });
    onMounted(() => {
      fetchStreamData();
      startPolling();
    });
    onUnmounted(() => {
      stopPolling();
      if (audioCtx) {
        audioCtx.close();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "bg-grey-2 text-grey-9 flex flex-center q-pa-md relative-position" }, {
        default: withCtx(() => [
          createVNode(QBtn, {
            flat: "",
            round: "",
            dense: "",
            color: "primary",
            icon: "arrow_back",
            class: "absolute-top-left q-ma-md",
            to: { name: "radiomaraton.operar", params: { radiomarathonId: props.radiomarathonId } }
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => _cache[0] || (_cache[0] = [
                  createTextVNode("Regresar a Operar")
                ])),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["to"]),
          !audioEnabled.value ? (openBlock(), createBlock(QBtn, {
            key: 0,
            flat: "",
            color: "warning",
            icon: "volume_off",
            label: "Activar Sonido",
            class: "absolute-top-right q-ma-md",
            onClick: enableAudio
          })) : (openBlock(), createBlock(QBtn, {
            key: 1,
            flat: "",
            color: "positive",
            icon: "volume_up",
            label: "Sonido Activo",
            class: "absolute-top-right q-ma-md"
          })),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, " Transmisión en Vivo - " + toDisplayString(activityName.value), 1),
            isGoalReached.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createVNode(QBanner, {
                rounded: "",
                class: "bg-positive text-white text-h5 text-weight-bold shadow-4"
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode(" 🎉 ¡META ALCANZADA! GRACIAS A TODOS POR SU GENEROSIDAD 🎉 ")
                ])),
                _: 1
              })
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(QCard, {
                  flat: "",
                  bordered: "",
                  class: "bg-white q-pa-md shadow-2"
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-subtitle2 text-grey-7 text-uppercase tracking-wider" }, "Meta", -1)),
                        createBaseVNode("div", _hoisted_6, toDisplayString(formatCurrency(targetAmount.value)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(QCard, {
                  flat: "",
                  bordered: "",
                  class: "bg-primary text-white q-pa-md shadow-4"
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-subtitle2 text-blue-2 text-uppercase tracking-wider" }, "Acumulado", -1)),
                        createBaseVNode("div", _hoisted_8, toDisplayString(formatCurrency(totalAmount.value)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(QCard, {
                  flat: "",
                  bordered: "",
                  class: "bg-white q-pa-md shadow-2"
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-subtitle2 text-grey-7 text-uppercase tracking-wider" }, "Faltan", -1)),
                        createBaseVNode("div", _hoisted_10, toDisplayString(formatCurrency(remainingAmount.value)), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(QCard, {
              flat: "",
              bordered: "",
              class: "bg-white q-pa-lg full-width shadow-3"
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-subtitle2 text-grey-6 text-uppercase tracking-wider q-mb-xs" }, " Último Donativo Registrado ", -1)),
                    latestDonation.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, toDisplayString(latestDonation.value.donor_name), 1),
                      latestDonation.value.company_name && latestDonation.value.company_name !== "Anónimo" ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(latestDonation.value.company_name), 1)) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_14, toDisplayString(formatCurrency(latestDonation.value.amount)), 1)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_15, " Esperando donativos... "))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
};
const MarathonStreamPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-539f079c"]]);
export {
  MarathonStreamPage as default
};
