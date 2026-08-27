import { c as createComponent, h, x as withDirectives, a4 as useDarkProps, r as ref, g as getCurrentInstance, a5 as useDark, a as computed, bz as debounce, w as watch, c0 as setHorizontalScrollPosition, I as onDeactivated, H as onActivated, c1 as setVerticalScrollPosition, o as onBeforeUnmount, j as hMergeSlot, L as useRoute, K as onMounted, q as createBlock, t as withCtx, V as api, s as openBlock, N as createBaseVNode, D as toDisplayString, A as unref, v as createVNode, G as QBtn, a1 as QCard, z as createTextVNode, Y as QInput, c2 as withKeys, B as createElementBlock, F as Fragment, C as renderList, _ as normalizeClass, y as createCommentVNode } from "./index-wM11jDk3.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-ouM2WTqi.js";
import { Q as QList } from "./QList-I7wt001i.js";
import { Q as QResizeObserver } from "./QResizeObserver-DeS1v63B.js";
import { Q as QScrollObserver } from "./QScrollObserver-C6XecqMr.js";
import { T as TouchPan } from "./TouchPan-CyZL0enM.js";
import { b as between } from "./format-CnAOSoyw.js";
import { Q as QPage } from "./QPage-DTnmuxcE.js";
import { n as notify } from "./notify-CdEneTud.js";
import "./touch-BscSWsHh.js";
import "./selection-CttaKPaT.js";
const ScrollAreaControls = createComponent({
  props: [
    "store",
    "barStyle",
    "verticalBarStyle",
    "horizontalBarStyle"
  ],
  setup(props) {
    return () => [
      h("div", {
        class: props.store.scroll.vertical.barClass.value,
        style: [props.barStyle, props.verticalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onVerticalMousedown
      }),
      h("div", {
        class: props.store.scroll.horizontal.barClass.value,
        style: [props.barStyle, props.horizontalBarStyle],
        "aria-hidden": "true",
        onMousedown: props.store.onHorizontalMousedown
      }),
      withDirectives(
        h("div", {
          ref: props.store.scroll.vertical.ref,
          class: props.store.scroll.vertical.thumbClass.value,
          style: props.store.scroll.vertical.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbVertDir
      ),
      withDirectives(
        h("div", {
          ref: props.store.scroll.horizontal.ref,
          class: props.store.scroll.horizontal.thumbClass.value,
          style: props.store.scroll.horizontal.style.value,
          "aria-hidden": "true"
        }),
        props.store.thumbHorizDir
      )
    ];
  }
});
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
const QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    verticalOffset: {
      type: Array,
      default: [0, 0]
    },
    horizontalOffset: {
      type: Array,
      default: [0, 0]
    },
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer = null, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    Object.assign(container, {
      verticalInner: computed(() => container.vertical.value - props.verticalOffset[0] - props.verticalOffset[1]),
      horizontalInner: computed(() => container.horizontal.value - props.horizontalOffset[0] - props.horizontalOffset[1])
    });
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1);
    scroll.vertical.thumbStart = computed(() => props.verticalOffset[0] + scroll.vertical.percentage.value * (container.verticalInner.value - scroll.vertical.thumbSize.value));
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.verticalInner.value * container.verticalInner.value / scroll.vertical.size.value,
          getMinThumbSize(container.verticalInner.value),
          container.verticalInner.value
        )
      )
    );
    scroll.vertical.style = computed(() => ({
      ...props.thumbStyle,
      ...props.verticalThumbStyle,
      top: `${scroll.vertical.thumbStart.value}px`,
      height: `${scroll.vertical.thumbSize.value}px`,
      right: `${props.horizontalOffset[1]}px`
    }));
    scroll.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(() => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1);
    scroll.horizontal.thumbStart = computed(() => props.horizontalOffset[0] + scroll.horizontal.percentage.value * (container.horizontalInner.value - scroll.horizontal.thumbSize.value));
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontalInner.value * container.horizontalInner.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontalInner.value),
          container.horizontalInner.value
        )
      )
    );
    scroll.horizontal.style = computed(() => ({
      ...props.thumbStyle,
      ...props.horizontalThumbStyle,
      [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
      width: `${scroll.horizontal.thumbSize.value}px`,
      bottom: `${props.verticalOffset[1]}px`
    }));
    scroll.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : ""));
    scroll.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        Object.assign(info, {
          [axis + "Position"]: data.position.value,
          [axis + "Percentage"]: data.percentage.value,
          [axis + "Size"]: data.size.value,
          [axis + "ContainerSize"]: container[axis].value,
          [axis + "ContainerInnerSize"]: container[axis + "Inner"].value
        });
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position }) {
      let change = false;
      if (scroll.vertical.position.value !== position.top) {
        scroll.vertical.position.value = position.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position.left) {
        scroll.horizontal.position.value = position.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) return;
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const multiplier = (data.size.value - container[axis].value) / (container[axis + "Inner"].value - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const startOffset = axis === "vertical" ? props.verticalOffset[0] : props.horizontalOffset[0];
        const offset = evt[dirProps[axis].offset] - startOffset;
        const thumbStart = data.thumbStart.value - startOffset;
        if (offset < thumbStart || offset > thumbStart + data.thumbSize.value) {
          const targetThumbStart = offset - data.thumbSize.value / 2;
          const percentage = between(targetThumbStart / (container[axis + "Inner"].value - data.thumbSize.value), 0, 1);
          setScroll(percentage * Math.max(0, data.size.value - container[axis].value), axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function startTimer() {
      tempShowing.value = true;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    let mouseEventTimer = null;
    function onMouseenter() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
      }
      mouseEventTimer = setTimeout(() => {
        mouseEventTimer = null;
        hover.value = true;
      }, proxy.$q.platform.is.ios ? 50 : 0);
    }
    function onMouseleave() {
      if (mouseEventTimer !== null) {
        clearTimeout(mouseEventTimer);
        mouseEventTimer = null;
      }
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) return;
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration
        );
      }
    });
    const store = {
      scroll,
      thumbVertDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "vertical");
        },
        void 0,
        { vertical: true, ...panOpts }
      ]],
      thumbHorizDir: [[
        TouchPan,
        (e) => {
          onPanThumb(e, "horizontal");
        },
        void 0,
        { horizontal: true, ...panOpts }
      ]],
      onVerticalMousedown(evt) {
        onMousedown(evt, "vertical");
      },
      onHorizontalMousedown(evt) {
        onMousedown(evt, "horizontal");
      }
    };
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h(ScrollAreaControls, {
          store,
          barStyle: props.barStyle,
          verticalBarStyle: props.verticalBarStyle,
          horizontalBarStyle: props.horizontalBarStyle
        })
      ]);
    };
  }
});
const _hoisted_1 = { class: "row items-center justify-between q-mb-md bg-white q-pa-md rounded-borders shadow-1" };
const _hoisted_2 = { class: "text-caption text-grey-7" };
const _hoisted_3 = { class: "row q-col-gutter-md" };
const _hoisted_4 = { class: "col-12 col-md-5" };
const _hoisted_5 = { class: "row q-col-gutter-xs text-center q-mb-md" };
const _hoisted_6 = { class: "col-4" };
const _hoisted_7 = { class: "bg-blue-1 text-blue-9 q-pa-xs rounded-borders" };
const _hoisted_8 = { class: "text-h6 text-weight-bold" };
const _hoisted_9 = { class: "col-4" };
const _hoisted_10 = { class: "bg-red-1 text-red-9 q-pa-xs rounded-borders" };
const _hoisted_11 = { class: "text-h6 text-weight-bold" };
const _hoisted_12 = { class: "col-4" };
const _hoisted_13 = { class: "bg-amber-1 text-amber-10 q-pa-xs rounded-borders" };
const _hoisted_14 = { class: "text-h6 text-weight-bold" };
const _hoisted_15 = { class: "col-12 col-md-7" };
const _hoisted_16 = { class: "row q-gutter-x-xs" };
const _sfc_main = {
  __name: "LiveDrawPage",
  setup(__props) {
    const route = useRoute();
    const raffleId = route.params.id || route.params.raffleId;
    const loading = ref(false);
    const raffle = ref({});
    const tickets = ref([]);
    const searchNumber = ref("");
    async function fetchRaffleData() {
      try {
        loading.value = true;
        const res = await api.get(`raffles/${raffleId}`);
        raffle.value = res.data.data || res.data;
        const allTickets = raffle.value.tickets || [];
        tickets.value = allTickets.filter(
          (t) => ["sold", "vendido", "discarded", "descartado", "won", "ganador"].includes(
            String(t.status).toLowerCase()
          )
        );
      } catch (err) {
        console.error(err);
        notify.negative("Error al cargar datos del sorteo");
      } finally {
        loading.value = false;
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
    const filteredTickets = computed(() => {
      if (!searchNumber.value) return tickets.value;
      const cleanSearch = String(searchNumber.value).trim();
      return tickets.value.filter((t) => String(t.number).includes(cleanSearch));
    });
    async function processEnterDiscard() {
      const query = String(searchNumber.value).trim();
      if (!query) return;
      const target = activeTickets.value.find((t) => parseInt(t.number, 10) === parseInt(query, 10));
      if (!target) {
        notify.warning(`El boleto #${query} no está disponible para descartar (o ya fue descartado)`);
        return;
      }
      await setStatus(target, "discarded");
    }
    async function setStatus(ticket, status) {
      try {
        await api.post(`raffles/${raffleId}/live-discard`, {
          ticket_id: ticket.id,
          status
        });
        ticket.status = status;
        searchNumber.value = "";
        notify.positive(`Boleto #${ticket.number} marcado como ${status.toUpperCase()}`);
      } catch (err) {
        console.error(err);
        notify.negative("Error al actualizar el boleto");
      }
    }
    function openStreamWindow() {
      const url = `${window.location.origin}/#/public/raffles/${raffleId}/stream`;
      window.open(url, "_blank");
    }
    onMounted(() => fetchRaffleData());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-md bg-grey-2" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", null, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-h5 text-weight-bolder text-primary" }, "Captura de Sorteo en Vivo", -1)),
              createBaseVNode("div", _hoisted_2, "Rifa ID #" + toDisplayString(unref(raffleId)), 1)
            ]),
            createBaseVNode("div", null, [
              createVNode(QBtn, {
                color: "primary",
                icon: "sym_o_cast",
                label: "Ranking en Vivo",
                onClick: openStreamWindow
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QCard, {
                flat: "",
                class: "q-pa-md"
              }, {
                default: withCtx(() => [
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-subtitle1 text-weight-bold q-mb-xs" }, "Descarte Rápido", -1)),
                  _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-caption text-grey-7 q-mb-md" }, [
                    createTextVNode(" Escribe el número y presiona "),
                    createBaseVNode("b", null, "ENTER"),
                    createTextVNode(". ")
                  ], -1)),
                  createVNode(QInput, {
                    modelValue: searchNumber.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchNumber.value = $event),
                    outlined: "",
                    dense: "",
                    autofocus: "",
                    placeholder: "Número de boleto + ENTER",
                    type: "number",
                    class: "q-mb-md",
                    onKeyup: withKeys(processEnterDiscard, ["enter"])
                  }, {
                    append: withCtx(() => [
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "send",
                        color: "primary",
                        onClick: processEnterDiscard
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-caption" }, "En Juego", -1)),
                        createBaseVNode("div", _hoisted_8, toDisplayString(activeTickets.value.length), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, [
                        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-caption" }, "Descartados", -1)),
                        createBaseVNode("div", _hoisted_11, toDisplayString(discardedTickets.value.length), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-caption" }, "Ganador", -1)),
                        createBaseVNode("div", _hoisted_14, toDisplayString(winningTicket.value ? `#${winningTicket.value.number}` : "-"), 1)
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(QCard, {
                flat: "",
                class: "q-pa-md"
              }, {
                default: withCtx(() => [
                  _cache[7] || (_cache[7] = createBaseVNode("div", { class: "text-subtitle1 text-weight-bold q-mb-sm" }, "Boletos Participantes", -1)),
                  createVNode(QScrollArea, { style: { "height": "500px" } }, {
                    default: withCtx(() => [
                      createVNode(QList, { separator: "" }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(filteredTickets.value, (t) => {
                            return openBlock(), createBlock(QItem, {
                              key: t.id,
                              class: normalizeClass({
                                "bg-red-1": ["discarded", "descartado"].includes(String(t.status).toLowerCase()),
                                "bg-amber-2": ["won", "ganador"].includes(String(t.status).toLowerCase())
                              })
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, { class: "text-weight-bold" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Boleto #" + toDisplayString(t.number), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, { caption: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Comprador: " + toDisplayString(t.buyer?.first_name || "Sin nombre"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(QItemSection, { side: "" }, {
                                  default: withCtx(() => [
                                    createBaseVNode("div", _hoisted_16, [
                                      ["sold", "vendido"].includes(String(t.status).toLowerCase()) ? (openBlock(), createBlock(QBtn, {
                                        key: 0,
                                        color: "negative",
                                        dense: "",
                                        unelevated: "",
                                        icon: "close",
                                        label: "Descartar",
                                        onClick: ($event) => setStatus(t, "discarded")
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                      ["discarded", "descartado"].includes(String(t.status).toLowerCase()) ? (openBlock(), createBlock(QBtn, {
                                        key: 1,
                                        color: "grey-7",
                                        dense: "",
                                        flat: "",
                                        icon: "undo",
                                        label: "Revertir",
                                        onClick: ($event) => setStatus(t, "sold")
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                                      ["sold", "vendido"].includes(String(t.status).toLowerCase()) ? (openBlock(), createBlock(QBtn, {
                                        key: 2,
                                        color: "amber-9",
                                        dense: "",
                                        unelevated: "",
                                        icon: "emoji_events",
                                        label: "Ganador",
                                        onClick: ($event) => setStatus(t, "won")
                                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 1
                      })
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
export {
  _sfc_main as default
};
