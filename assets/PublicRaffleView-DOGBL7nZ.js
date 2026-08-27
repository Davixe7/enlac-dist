import { Q as QSpinnerDots } from "./QSpinnerDots-Bei4-H9M.js";
import { Q as QImg } from "./QImg-DFTTGmkE.js";
import { r as ref, K as onMounted, a as computed, q as createBlock, t as withCtx, V as api, L as useRoute, s as openBlock, v as createVNode, a1 as QCard, B as createElementBlock, N as createBaseVNode, D as toDisplayString, O as QAvatar, z as createTextVNode, Q as QIcon, y as createCommentVNode, F as Fragment, C as renderList } from "./index-CtX55rPg.js";
import { Q as QBanner } from "./QBanner-C4ulspk6.js";
import { Q as QChip } from "./QChip-DUrZdEPF.js";
import { Q as QPage } from "./QPage-jVkVV77P.js";
import { Q as QLayout, a as QPageContainer } from "./QLayout-B3LyYCkP.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QScrollObserver-CG_rBZ5f.js";
import "./QResizeObserver-CBBr0Kxq.js";
const _hoisted_1 = {
  key: 0,
  class: "text-center q-pa-xl"
};
const _hoisted_2 = { key: 1 };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-4" };
const _hoisted_5 = { class: "col-4" };
const _hoisted_6 = { class: "text-center q-mb-md" };
const _hoisted_7 = { class: "text-bold text-primary q-ma-none" };
const _hoisted_8 = { class: "text-subtitle2 text-grey-7 q-mt-xs" };
const _hoisted_9 = { class: "text-subtitle1 text-weight-bolder leading-tight" };
const _hoisted_10 = { class: "row q-col-gutter-sm q-mb-md" };
const _hoisted_11 = { class: "col" };
const _hoisted_12 = { class: "text-h6 text-bold text-blue-9" };
const _hoisted_13 = { class: "col" };
const _hoisted_14 = { class: "text-h6 text-bold text-green-9" };
const _hoisted_15 = { class: "col" };
const _hoisted_16 = { class: "text-h6 text-bold text-red-9" };
const _hoisted_17 = {
  key: 0,
  class: "col"
};
const _hoisted_18 = { class: "text-h6 text-bold text-amber-10" };
const _hoisted_19 = {
  key: 1,
  class: "col"
};
const _hoisted_20 = { class: "text-h6 text-bold text-grey-8" };
const _hoisted_21 = { class: "row justify-center q-gutter-x-sm q-mb-lg flex-wrap" };
const _hoisted_22 = { class: "row q-col-gutter-xs justify-center" };
const _hoisted_23 = {
  key: 2,
  class: "text-center q-pa-xl text-negative"
};
const _sfc_main = {
  __name: "PublicRaffleView",
  setup(__props) {
    const route = useRoute();
    const raffle = ref(null);
    const loading = ref(true);
    const selectedFilter = ref("all");
    const fetchPublicRaffle = async () => {
      try {
        loading.value = true;
        const res = await api.get(`public/raffles/${route.params.raffleId}`);
        raffle.value = res.data.data;
      } catch (error) {
        console.error("Error al cargar la rifa pública:", error);
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchPublicRaffle();
    });
    const stats = computed(() => {
      if (!raffle.value?.tickets) return { total: 0, available: 0, sold: 0, won: 0, discarded: 0 };
      const tickets = raffle.value.tickets;
      const total = tickets.length;
      const available = tickets.filter((t) => t.status === "available").length;
      const sold = tickets.filter((t) => t.status === "sold").length;
      const won = tickets.filter((t) => t.status === "won").length;
      const discarded = tickets.filter((t) => t.status === "discarded").length;
      return { total, available, sold, won, discarded };
    });
    const filteredTickets = computed(() => {
      if (!raffle.value?.tickets) return [];
      if (selectedFilter.value === "all") return raffle.value.tickets;
      return raffle.value.tickets.filter((t) => t.status === selectedFilter.value);
    });
    const statusConfig = {
      available: { color: "positive", label: "Disponible" },
      sold: { color: "negative", label: "Vendido" },
      won: { color: "amber-8", label: "Ganador" },
      discarded: { color: "grey-6", label: "Descartado" }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QLayout, {
        view: "lHh Lpr lFf",
        class: "bg-grey-1"
      }, {
        default: withCtx(() => [
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(QPage, { class: "q-pa-md flex flex-center" }, {
                default: withCtx(() => [
                  createVNode(QCard, {
                    style: { "width": "100%", "max-width": "900px" },
                    flat: "",
                    bordered: "",
                    class: "q-pa-md"
                  }, {
                    default: withCtx(() => [
                      loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
                        createVNode(QSpinnerDots, {
                          color: "primary",
                          size: "50px"
                        }),
                        _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-grey-7 q-mt-sm" }, "Cargando disponibilidad de boletos...", -1))
                      ])) : raffle.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                        createBaseVNode("div", _hoisted_3, [
                          createBaseVNode("div", _hoisted_4, [
                            createVNode(QImg, {
                              src: "/logo_blue_h.png",
                              width: "175px",
                              height: "auto"
                            })
                          ]),
                          createBaseVNode("div", _hoisted_5, [
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode("h5", _hoisted_7, toDisplayString(raffle.value.activity?.name || raffle.value.name || "Obsequio entre Amigos"), 1),
                              createBaseVNode("div", _hoisted_8, " Precio por boleto: $" + toDisplayString(raffle.value.ticket_price), 1)
                            ])
                          ]),
                          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "col-4" }, null, -1))
                        ]),
                        raffle.value.winning_ticket || stats.value.won > 0 ? (openBlock(), createBlock(QCard, {
                          key: 0,
                          flat: "",
                          class: "bg-amber-1 text-amber-10 q-mb-md border-amber text-center q-pa-sm"
                        }, {
                          default: withCtx(() => [
                            createVNode(QAvatar, {
                              color: "amber-8",
                              "text-color": "white",
                              icon: "emoji_events",
                              size: "36px",
                              class: "q-mb-xs"
                            }),
                            createBaseVNode("div", _hoisted_9, " ¡Rifa Finalizada! Boleto Ganador: #" + toDisplayString(raffle.value.winning_ticket || "Ganador Registrado"), 1)
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(QBanner, {
                          key: 1,
                          dense: "",
                          "inline-actions": "",
                          class: "bg-amber-2 text-amber-10 rounded-borders q-mb-md text-center"
                        }, {
                          avatar: withCtx(() => [
                            createVNode(QIcon, {
                              name: "info",
                              color: "amber-9"
                            })
                          ]),
                          default: withCtx(() => [
                            _cache[7] || (_cache[7] = createTextVNode(" Para proceder con la venta del boleto deberás contactar a Recepción ENLAC para capturar los datos del Comprador. "))
                          ]),
                          _: 1
                        })),
                        createBaseVNode("div", _hoisted_10, [
                          createBaseVNode("div", _hoisted_11, [
                            createVNode(QCard, {
                              flat: "",
                              class: "bg-blue-1 text-center q-pa-sm"
                            }, {
                              default: withCtx(() => [
                                _cache[8] || (_cache[8] = createBaseVNode("div", { class: "text-caption text-blue-9" }, "Total", -1)),
                                createBaseVNode("div", _hoisted_12, toDisplayString(stats.value.total), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_13, [
                            createVNode(QCard, {
                              flat: "",
                              class: "bg-green-1 text-center q-pa-sm"
                            }, {
                              default: withCtx(() => [
                                _cache[9] || (_cache[9] = createBaseVNode("div", { class: "text-caption text-green-9" }, "Disponibles", -1)),
                                createBaseVNode("div", _hoisted_14, toDisplayString(stats.value.available), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(QCard, {
                              flat: "",
                              class: "bg-red-1 text-center q-pa-sm"
                            }, {
                              default: withCtx(() => [
                                _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-caption text-red-9" }, "Vendidos", -1)),
                                createBaseVNode("div", _hoisted_16, toDisplayString(stats.value.sold), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          stats.value.won > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                            createVNode(QCard, {
                              flat: "",
                              class: "bg-amber-2 text-center q-pa-sm"
                            }, {
                              default: withCtx(() => [
                                _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-caption text-amber-10" }, "Ganador", -1)),
                                createBaseVNode("div", _hoisted_18, toDisplayString(stats.value.won), 1)
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true),
                          stats.value.discarded > 0 ? (openBlock(), createElementBlock("div", _hoisted_19, [
                            createVNode(QCard, {
                              flat: "",
                              class: "bg-grey-3 text-center q-pa-sm"
                            }, {
                              default: withCtx(() => [
                                _cache[12] || (_cache[12] = createBaseVNode("div", { class: "text-caption text-grey-8" }, "Descartados", -1)),
                                createBaseVNode("div", _hoisted_20, toDisplayString(stats.value.discarded), 1)
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(QChip, {
                            clickable: "",
                            selected: selectedFilter.value === "all",
                            color: "primary",
                            "text-color": selectedFilter.value === "all" ? "white" : "dark",
                            outline: selectedFilter.value !== "all",
                            onClick: _cache[0] || (_cache[0] = ($event) => selectedFilter.value = "all")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Todos (" + toDisplayString(stats.value.total) + ") ", 1)
                            ]),
                            _: 1
                          }, 8, ["selected", "text-color", "outline"]),
                          createVNode(QChip, {
                            clickable: "",
                            selected: selectedFilter.value === "available",
                            color: "positive",
                            "text-color": selectedFilter.value === "available" ? "white" : "dark",
                            outline: selectedFilter.value !== "available",
                            onClick: _cache[1] || (_cache[1] = ($event) => selectedFilter.value = "available")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Disponibles (" + toDisplayString(stats.value.available) + ") ", 1)
                            ]),
                            _: 1
                          }, 8, ["selected", "text-color", "outline"]),
                          createVNode(QChip, {
                            clickable: "",
                            selected: selectedFilter.value === "sold",
                            color: "negative",
                            "text-color": selectedFilter.value === "sold" ? "white" : "dark",
                            outline: selectedFilter.value !== "sold",
                            onClick: _cache[2] || (_cache[2] = ($event) => selectedFilter.value = "sold")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Vendidos (" + toDisplayString(stats.value.sold) + ") ", 1)
                            ]),
                            _: 1
                          }, 8, ["selected", "text-color", "outline"]),
                          stats.value.won > 0 ? (openBlock(), createBlock(QChip, {
                            key: 0,
                            clickable: "",
                            selected: selectedFilter.value === "won",
                            color: "amber-8",
                            "text-color": selectedFilter.value === "won" ? "white" : "dark",
                            outline: selectedFilter.value !== "won",
                            onClick: _cache[3] || (_cache[3] = ($event) => selectedFilter.value = "won")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ganador (" + toDisplayString(stats.value.won) + ") ", 1)
                            ]),
                            _: 1
                          }, 8, ["selected", "text-color", "outline"])) : createCommentVNode("", true),
                          stats.value.discarded > 0 ? (openBlock(), createBlock(QChip, {
                            key: 1,
                            clickable: "",
                            selected: selectedFilter.value === "discarded",
                            color: "grey-6",
                            "text-color": selectedFilter.value === "discarded" ? "white" : "dark",
                            outline: selectedFilter.value !== "discarded",
                            onClick: _cache[4] || (_cache[4] = ($event) => selectedFilter.value = "discarded")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Descartados (" + toDisplayString(stats.value.discarded) + ") ", 1)
                            ]),
                            _: 1
                          }, 8, ["selected", "text-color", "outline"])) : createCommentVNode("", true)
                        ]),
                        createBaseVNode("div", _hoisted_22, [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredTickets.value, (ticket) => {
                            return openBlock(), createElementBlock("div", {
                              key: ticket.id,
                              class: "col-auto"
                            }, [
                              createVNode(QChip, {
                                square: "",
                                class: "text-bold",
                                color: statusConfig[ticket.status]?.color || "grey",
                                "text-color": "white"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" #" + toDisplayString(ticket.number), 1)
                                ]),
                                _: 2
                              }, 1032, ["color"])
                            ]);
                          }), 128))
                        ])
                      ])) : (openBlock(), createElementBlock("div", _hoisted_23, " No se encontró la información de la rifa especificada. "))
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
      });
    };
  }
};
const PublicRaffleView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62be12a8"]]);
export {
  PublicRaffleView as default
};
