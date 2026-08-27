import { Q as QTooltip } from "./QTooltip-CaLtwm8I.js";
import { L as useRoute, r as ref, a as computed, K as onMounted, J as onUnmounted, B as createElementBlock, v as createVNode, q as createBlock, N as createBaseVNode, t as withCtx, A as unref, G as QBtn, y as createCommentVNode, D as toDisplayString, a1 as QCard, V as api, s as openBlock, z as createTextVNode, X as QCardSection, aj as TransitionGroup, F as Fragment, C as renderList, _ as normalizeClass, O as QAvatar } from "./index-CE1zmWGJ.js";
import { Q as QBanner } from "./QBanner-BUVnQ-nb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./position-engine-BOhbfp_x.js";
import "./selection-jvQtztp3.js";
const _hoisted_1 = { class: "bg-grey-2 text-grey-9 flex flex-center q-pa-md relative-position style-container" };
const _hoisted_2 = {
  class: "column items-center text-center",
  style: { "max-width": "1100px", "width": "100%" }
};
const _hoisted_3 = { class: "q-mb-xl" };
const _hoisted_4 = { class: "text-h3 text-weight-bolder text-primary q-mb-xs" };
const _hoisted_5 = {
  key: 0,
  class: "full-width q-mb-lg"
};
const _hoisted_6 = { class: "row q-col-gutter-md full-width q-mb-xl" };
const _hoisted_7 = { class: "col-12 col-md-4" };
const _hoisted_8 = { class: "text-h3 text-weight-bold text-primary q-mt-sm" };
const _hoisted_9 = { class: "col-12 col-md-4" };
const _hoisted_10 = { class: "text-h3 text-weight-bolder q-mt-sm" };
const _hoisted_11 = { class: "col-12 col-md-4" };
const _hoisted_12 = { class: "text-h3 text-weight-bold text-amber-10 q-mt-sm" };
const _hoisted_13 = {
  key: 0,
  class: "history-container q-pa-xs"
};
const _hoisted_14 = { class: "row items-center q-gutter-x-md" };
const _hoisted_15 = { class: "text-left" };
const _hoisted_16 = { class: "text-caption text-weight-bold text-uppercase text-grey-7" };
const _hoisted_17 = { class: "text-right" };
const _hoisted_18 = { class: "text-subtitle1 text-weight-bold text-grey-9" };
const _hoisted_19 = {
  key: 1,
  class: "text-grey-6 q-py-xl text-italic text-h6"
};
const _sfc_main = {
  __name: "StreamPage",
  setup(__props) {
    const route = useRoute();
    const raffleId = route.params.id || route.params.raffleId;
    const raffle = ref({});
    const tickets = ref([]);
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
        const repetitions = 6;
        const interval = 0.2;
        for (let i = 0; i < repetitions; i++) {
          const startTime = now + i * interval;
          const osc1 = audioCtx.createOscillator();
          const gain1 = audioCtx.createGain();
          osc1.type = "sawtooth";
          osc1.frequency.setValueAtTime(1200, startTime);
          osc1.frequency.exponentialRampToValueAtTime(600, startTime + 0.18);
          gain1.gain.setValueAtTime(0.8, startTime);
          gain1.gain.exponentialRampToValueAtTime(1e-4, startTime + 0.18);
          osc1.connect(gain1);
          gain1.connect(audioCtx.destination);
          osc1.start(startTime);
          osc1.stop(startTime + 0.18);
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
    async function fetchStreamData() {
      if (!raffleId) return;
      try {
        const res = await api.get(`raffles/${raffleId}`);
        const data = res.data.data || res.data;
        raffle.value = data;
        const allTickets = data.tickets || [];
        const previousDiscardedCount = discardedTickets.value.length;
        tickets.value = allTickets.filter(
          (t) => ["sold", "vendido", "discarded", "descartado", "won", "ganador"].includes(
            String(t.status).toLowerCase()
          )
        );
        if (discardedTickets.value.length > previousDiscardedCount && previousDiscardedCount !== 0) {
          playSynthesizedBell();
        }
      } catch (err) {
        console.error("Error al cargar datos del stream de la rifa:", err);
      }
    }
    const activeTickets = computed(
      () => tickets.value.filter((t) => ["sold", "vendido"].includes(String(t.status).toLowerCase()))
    );
    const discardedTickets = computed(
      () => tickets.value.filter((t) => ["discarded", "descartado"].includes(String(t.status).toLowerCase()))
    );
    const winningTicket = computed(
      () => tickets.value.find((t) => ["won", "ganador"].includes(String(t.status).toLowerCase()))
    );
    const sortedDiscardedList = computed(() => {
      return [...discardedTickets.value].sort((a, b) => {
        const dateA = new Date(a.updated_at || 0).getTime();
        const dateB = new Date(b.updated_at || 0).getTime();
        if (dateA !== dateB) {
          return dateB - dateA;
        }
        return (b.id || 0) - (a.id || 0);
      });
    });
    const historyList = computed(() => {
      const list = [];
      if (winningTicket.value) {
        list.push({ ...winningTicket.value, isWinner: true });
      }
      sortedDiscardedList.value.forEach((t) => {
        list.push({ ...t, isWinner: false });
      });
      return list;
    });
    function startPolling() {
      if (!timer) {
        timer = setInterval(fetchStreamData, 3e3);
      }
    }
    function stopPolling() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }
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
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QBtn, {
          flat: "",
          round: "",
          dense: "",
          color: "primary",
          icon: "arrow_back",
          class: "absolute-top-left q-ma-md",
          to: `/raffles/${unref(raffleId)}/live-draw`
        }, {
          default: withCtx(() => [
            createVNode(QTooltip, null, {
              default: withCtx(() => _cache[0] || (_cache[0] = [
                createTextVNode("Regresar al Panel")
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
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(raffle.value.title || raffle.value.name || "Sorteo de Rifa"), 1),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-h5 text-weight-bold text-grey-7" }, "Transmisión en Vivo", -1))
          ]),
          winningTicket.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
            createVNode(QBanner, {
              rounded: "",
              class: "bg-amber-9 text-white text-h4 text-weight-bold shadow-4 q-py-md"
            }, {
              default: withCtx(() => [
                createTextVNode(" 🎉 ¡TENEMOS UN GANADOR! BOLETO #" + toDisplayString(winningTicket.value.number) + " 🎉 ", 1)
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(QCard, {
                flat: "",
                bordered: "",
                class: "bg-white q-pa-md shadow-2"
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-subtitle2 text-grey-7 text-uppercase tracking-wider" }, "En Juego", -1)),
                      createBaseVNode("div", _hoisted_8, toDisplayString(activeTickets.value.length), 1)
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
                class: "bg-negative text-white q-pa-md shadow-4"
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-subtitle2 text-red-2 text-uppercase tracking-wider" }, "Descartados", -1)),
                      createBaseVNode("div", _hoisted_10, toDisplayString(discardedTickets.value.length), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_11, [
              createVNode(QCard, {
                flat: "",
                bordered: "",
                class: "bg-white q-pa-md shadow-2"
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-subtitle2 text-grey-7 text-uppercase tracking-wider" }, "Ganador", -1)),
                      createBaseVNode("div", _hoisted_12, toDisplayString(winningTicket.value ? `#${winningTicket.value.number}` : "-"), 1)
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
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-subtitle2 text-grey-6 text-uppercase tracking-wider q-mb-md" }, " Historial de Resultados del Sorteo ", -1)),
                  historyList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
                    createVNode(TransitionGroup, {
                      name: "list",
                      tag: "div",
                      class: "column q-gutter-y-sm"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(historyList.value, (item) => {
                          return openBlock(), createElementBlock("div", {
                            key: item.id,
                            class: normalizeClass(["history-item row items-center justify-between q-pa-md rounded-borders shadow-1", item.isWinner ? "bg-amber-2 border-winner" : "bg-red-1 border-discarded"])
                          }, [
                            createBaseVNode("div", _hoisted_14, [
                              createVNode(QAvatar, {
                                color: item.isWinner ? "amber-9" : "negative",
                                "text-color": "white",
                                icon: item.isWinner ? "emoji_events" : "close",
                                size: "44px"
                              }, null, 8, ["color", "icon"]),
                              createBaseVNode("div", _hoisted_15, [
                                createBaseVNode("div", {
                                  class: normalizeClass(["text-h5 text-weight-bolder", item.isWinner ? "text-amber-10" : "text-negative"])
                                }, " Boleto #" + toDisplayString(item.number), 3),
                                createBaseVNode("div", _hoisted_16, toDisplayString(item.isWinner ? "🏆 Boleto Ganador" : "❌ Descartado"), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_17, [
                              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-caption text-grey-7 text-uppercase" }, "Comprador", -1)),
                              createBaseVNode("div", _hoisted_18, toDisplayString(item.buyer?.first_name || item.buyer?.name || "Anónimo"), 1)
                            ])
                          ], 2);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createElementBlock("div", _hoisted_19, " Esperando descartes en vivo... "))
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
const StreamPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9f8319e"]]);
export {
  StreamPage as default
};
