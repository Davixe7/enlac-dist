import { Q as QImg } from "./QImg-CcezxwFy.js";
import { v as createComponent, A as computed, B as h, C as hSlot, r as ref, a5 as isRuntimeSsrPreHydration, o as onMounted, y as getCurrentInstance, $ as onBeforeUnmount, S as noop, N as nextTick, a6 as listenOpts, a7 as inject, a8 as emptyRenderFn, a9 as layoutKey, D as watch, aa as hUniqueSlot, ab as useRouterLinkProps, ac as useRouterLink, k as QIcon, ad as hMergeSlot, ae as useAlignProps, af as useAlign, ag as getNormalizedVNodes, ah as provide, ai as pageContainerKey, aj as scrollTargetProp, ak as getScrollTarget, al as getVerticalScrollPosition, am as getHorizontalScrollPosition, an as getScrollbarWidth, a2 as reactive, ao as onUnmounted, u as useAuthStore, q as createBlock, a as openBlock, w as withCtx, d as createVNode, F as withDirectives, E as createCommentVNode, j as createTextVNode, g as unref, c as createElementBlock, H as Fragment, K as renderList, t as toDisplayString, ap as QSeparator, h as QBtn, aq as onActivated, ar as onDeactivated, p as useRoute, f as resolveComponent, b as createBaseVNode, M as QAvatar, P as normalizeStyle } from "./index-Bj0d6EJy.js";
import { Q as QBadge } from "./QBadge-BUUQBR6F.js";
import { a as QItem, Q as QItemSection } from "./QItem-BdujNBmC.js";
import { Q as QList } from "./QList-B0WbKoMu.js";
import { Q as QExpansionItem } from "./QExpansionItem-PzGICphl.js";
import { Q as QMenu } from "./QMenu-DJC6B_Cs.js";
import { C as ClosePopup } from "./ClosePopup-3JX1s3it.js";
import { u as useNotificationStore } from "./notification-store-IY4I-PBL.js";
import { e as extend } from "./extend-4L5z_PNK.js";
import "./selection-W867SDax.js";
const QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
  }
});
function useHydration() {
  const isHydrated = ref(!isRuntimeSsrPreHydration.value);
  if (isHydrated.value === false) {
    onMounted(() => {
      isHydrated.value = true;
    });
  }
  return { isHydrated };
}
const hasObserver = typeof ResizeObserver !== "undefined";
const resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
const QResizeObserver = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props, { emit }) {
    let timer = null, targetEl, size = { width: -1, height: -1 };
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (timer === null) {
        timer = setTimeout(emitEvent, props.debounce);
      }
    }
    function emitEvent() {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      if (targetEl) {
        const { offsetWidth: width, offsetHeight: height } = targetEl;
        if (width !== size.width || height !== size.height) {
          size = { width, height };
          emit("resize", size);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    proxy.trigger = trigger;
    if (hasObserver === true) {
      let observer;
      const init = (stop) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
      });
      onBeforeUnmount(() => {
        timer !== null && clearTimeout(timer);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        if (timer !== null) {
          clearTimeout(timer);
          timer = null;
        }
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl && targetEl.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger, listenOpts.passive);
          emitEvent();
        }
      };
      const { isHydrated } = useHydration();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      return () => {
        if (isHydrated.value === true) {
          return h("object", {
            class: "q--avoid-card-border",
            style: resizeProps.style,
            tabindex: -1,
            // fix for Firefox
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
const QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") !== -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const QBreadcrumbsEl = createComponent({
  name: "QBreadcrumbsEl",
  props: {
    ...useRouterLinkProps,
    label: String,
    icon: String,
    tag: {
      type: String,
      default: "span"
    }
  },
  emits: ["click"],
  setup(props, { slots }) {
    const { linkTag, linkAttrs, linkClass, navigateOnClick } = useRouterLink();
    const data = computed(() => {
      return {
        class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (props.disable !== true ? "q-link--focusable" + linkClass.value : "q-breadcrumbs__el--disable"),
        ...linkAttrs.value,
        onClick: navigateOnClick
      };
    });
    const iconClass = computed(
      () => "q-breadcrumbs__el-icon" + (props.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : "")
    );
    return () => {
      const child = [];
      props.icon !== void 0 && child.push(
        h(QIcon, {
          class: iconClass.value,
          name: props.icon
        })
      );
      props.label !== void 0 && child.push(props.label);
      return h(
        linkTag.value,
        { ...data.value },
        hMergeSlot(slots.default, child)
      );
    };
  }
});
const disabledValues = ["", true];
const QBreadcrumbs = createComponent({
  name: "QBreadcrumbs",
  props: {
    ...useAlignProps,
    separator: {
      type: String,
      default: "/"
    },
    separatorColor: String,
    activeColor: {
      type: String,
      default: "primary"
    },
    gutter: {
      type: String,
      validator: (v) => ["none", "xs", "sm", "md", "lg", "xl"].includes(v),
      default: "sm"
    }
  },
  setup(props, { slots }) {
    const alignClass = useAlign(props);
    const classes = computed(
      () => `flex items-center ${alignClass.value}${props.gutter === "none" ? "" : ` q-gutter-${props.gutter}`}`
    );
    const sepClass = computed(() => props.separatorColor ? ` text-${props.separatorColor}` : "");
    const activeClass = computed(() => ` text-${props.activeColor}`);
    return () => {
      if (slots.default === void 0) return;
      const vnodes = getNormalizedVNodes(
        hSlot(slots.default)
      );
      if (vnodes.length === 0) return;
      let els = 1;
      const child = [], len = vnodes.filter((c) => c.type !== void 0 && c.type.name === "QBreadcrumbsEl").length, separator = slots.separator !== void 0 ? slots.separator : () => props.separator;
      vnodes.forEach((comp) => {
        if (comp.type !== void 0 && comp.type.name === "QBreadcrumbsEl") {
          const middle = els < len;
          const disabled = comp.props !== null && disabledValues.includes(comp.props.disable);
          const cls = (middle === true ? "" : " q-breadcrumbs--last") + (disabled !== true && middle === true ? activeClass.value : "");
          els++;
          child.push(
            h("div", {
              class: `flex items-center${cls}`
            }, [comp])
          );
          if (middle === true) {
            child.push(
              h("div", {
                class: "q-breadcrumbs__separator" + sepClass.value
              }, separator())
            );
          }
        } else {
          child.push(comp);
        }
      });
      return h("div", {
        class: "q-breadcrumbs"
      }, [
        h("div", { class: classes.value }, child)
      ]);
    };
  }
});
const QPageContainer = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
    provide(pageContainerKey, true);
    const style = computed(() => {
      const css = {};
      if ($layout.header.space === true) {
        css.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style.value
    }, hSlot(slots.default));
  }
});
const { passive } = listenOpts;
const axisValues = ["both", "horizontal", "vertical"];
const QScrollObserver = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: scrollTargetProp
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer !== null && clearTimer();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) return;
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger, passive);
      trigger(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger, passive);
        localScrollTarget = void 0;
      }
    }
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    watch(() => proxy.$q.lang.rtl, emitEvent);
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });
    return noop;
  }
});
const QLayout = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard")
    );
    const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }
      if (resized === true && props.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height2 }) {
      if (containerHeight.value !== height2) {
        containerHeight.value = height2;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props.container === true) {
        const width2 = height.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width2) {
          scrollbarWidth.value = width2;
        }
      }
    }
    let animateTimer = null;
    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),
      rootRef,
      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        animateTimer = setTimeout(() => {
          animateTimer = null;
          document.body.classList.remove("q-body--layout-animate");
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer === null) {
          if (el.scrollHeight > $q.screen.height) return;
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer);
        }
        timer = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer !== null && action === "remove") {
          clearTimeout(timer);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer = null;
      const el = document.body;
      watch(
        () => props.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
const _sfc_main$1 = {
  __name: "AdminMenu",
  setup(__props) {
    const authStore = useAuthStore();
    const adminLinks = ref([
      { label: "Notificaciones", link: "/notificaciones" },
      { label: "Catálogo de Actividades", link: "/actividades" },
      { label: "Administración de Grupos", link: "/grupos" },
      { label: "Horarios de Equinoterapia", link: "/horarios-equinoterapia" },
      { label: "Usuarios", link: "/usuarios" },
      { label: "Areas", link: "/areas-de-trabajo" },
      { label: "Puestos", link: "/puestos" },
      { label: "Carrusel", link: "/carrusel" }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QBtn, {
        flat: "",
        round: "",
        color: "white",
        icon: "arrow_drop_down"
      }, {
        default: withCtx(() => [
          createVNode(QMenu, { offset: [0, 15] }, {
            default: withCtx(() => [
              createVNode(QList, {
                style: { "min-width": "255px" },
                dense: ""
              }, {
                default: withCtx(() => [
                  withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "notifications" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, null, {
                        default: withCtx(() => _cache[1] || (_cache[1] = [
                          createTextVNode("Notificaciones")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [ClosePopup]
                  ]),
                  unref(authStore).data.user.is_admin ? (openBlock(), createBlock(QExpansionItem, {
                    key: 0,
                    dense: "",
                    "expand-separator": "",
                    icon: "settings",
                    label: "Configuración"
                  }, {
                    default: withCtx(() => [
                      createVNode(QList, {
                        dense: "",
                        style: { "padding-left": "22px" }
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(adminLinks.value, (link) => {
                            return openBlock(), createBlock(QItem, {
                              clickable: "",
                              key: link.link,
                              to: link.link
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(link.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, { avatar: "" }, {
                        default: withCtx(() => [
                          createVNode(QIcon, { name: "logout" })
                        ]),
                        _: 1
                      }),
                      createVNode(QItemSection, {
                        onClick: _cache[0] || (_cache[0] = ($event) => unref(authStore).attemptLogout())
                      }, {
                        default: withCtx(() => _cache[2] || (_cache[2] = [
                          createTextVNode("Cerrar sesion")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 1
                  })), [
                    [ClosePopup]
                  ]),
                  createVNode(QSeparator)
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
let updateId = null, currentClientMeta;
const clientList = [];
function normalize(meta) {
  if (meta.title) {
    meta.title = meta.titleTemplate ? meta.titleTemplate(meta.title) : meta.title;
    delete meta.titleTemplate;
  }
  [["meta", "content"], ["link", "href"]].forEach((type) => {
    const metaType = meta[type[0]], metaProp = type[1];
    for (const name in metaType) {
      const metaLink = metaType[name];
      if (metaLink.template) {
        if (Object.keys(metaLink).length === 1) {
          delete metaType[name];
        } else {
          metaLink[metaProp] = metaLink.template(metaLink[metaProp] || "");
          delete metaLink.template;
        }
      }
    }
  });
}
function changed(old, def) {
  if (Object.keys(old).length !== Object.keys(def).length) {
    return true;
  }
  for (const key in old) {
    if (old[key] !== def[key]) {
      return true;
    }
  }
}
function bodyFilter(name) {
  return ["class", "style"].includes(name) === false;
}
function htmlFilter(name) {
  return ["lang", "dir"].includes(name) === false;
}
function diff(meta, other) {
  const add = {}, remove = {};
  if (meta === void 0) {
    return { add: other, remove };
  }
  if (meta.title !== other.title) {
    add.title = other.title;
  }
  ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach((type) => {
    const old = meta[type], cur = other[type];
    remove[type] = [];
    if (old === void 0 || old === null) {
      add[type] = cur;
      return;
    }
    add[type] = {};
    for (const key in old) {
      if (cur.hasOwnProperty(key) === false) {
        remove[type].push(key);
      }
    }
    for (const key in cur) {
      if (old.hasOwnProperty(key) === false) {
        add[type][key] = cur[key];
      } else if (changed(old[key], cur[key]) === true) {
        remove[type].push(key);
        add[type][key] = cur[key];
      }
    }
  });
  return { add, remove };
}
function apply({ add, remove }) {
  if (add.title) {
    document.title = add.title;
  }
  if (Object.keys(remove).length !== 0) {
    ["meta", "link", "script"].forEach((type) => {
      remove[type].forEach((name) => {
        document.head.querySelector(`${type}[data-qmeta="${name}"]`).remove();
      });
    });
    remove.htmlAttr.filter(htmlFilter).forEach((name) => {
      document.documentElement.removeAttribute(name);
    });
    remove.bodyAttr.filter(bodyFilter).forEach((name) => {
      document.body.removeAttribute(name);
    });
  }
  ["meta", "link", "script"].forEach((type) => {
    const metaType = add[type];
    for (const name in metaType) {
      const tag = document.createElement(type);
      for (const att in metaType[name]) {
        if (att !== "innerHTML") {
          tag.setAttribute(att, metaType[name][att]);
        }
      }
      tag.setAttribute("data-qmeta", name);
      if (type === "script") {
        tag.innerHTML = metaType[name].innerHTML || "";
      }
      document.head.appendChild(tag);
    }
  });
  Object.keys(add.htmlAttr).filter(htmlFilter).forEach((name) => {
    document.documentElement.setAttribute(name, add.htmlAttr[name] || "");
  });
  Object.keys(add.bodyAttr).filter(bodyFilter).forEach((name) => {
    document.body.setAttribute(name, add.bodyAttr[name] || "");
  });
}
function updateClientMeta() {
  updateId = null;
  const data = {
    title: "",
    titleTemplate: null,
    meta: {},
    link: {},
    script: {},
    htmlAttr: {},
    bodyAttr: {}
  };
  for (let i = 0; i < clientList.length; i++) {
    const { active, val } = clientList[i];
    if (active === true) {
      extend(true, data, val);
    }
  }
  normalize(data);
  apply(diff(currentClientMeta, data));
  currentClientMeta = data;
}
function planClientUpdate() {
  updateId !== null && clearTimeout(updateId);
  updateId = setTimeout(updateClientMeta, 50);
}
function useMeta(metaOptions) {
  {
    const meta = { active: true };
    if (typeof metaOptions === "function") {
      const content = computed(metaOptions);
      meta.val = content.value;
      watch(content, (val) => {
        meta.val = val;
        meta.active === true && planClientUpdate();
      });
    } else {
      meta.val = metaOptions;
    }
    clientList.push(meta);
    planClientUpdate();
    onActivated(() => {
      meta.active = true;
      planClientUpdate();
    });
    onDeactivated(() => {
      meta.active = false;
      planClientUpdate();
    });
    onUnmounted(() => {
      clientList.splice(clientList.indexOf(meta), 1);
      planClientUpdate();
    });
  }
}
const _hoisted_1 = { class: "q-toolbar__title-container" };
const _hoisted_2 = {
  key: 0,
  style: { "padding": "32px" }
};
const _sfc_main = {
  __name: "MainLayout",
  setup(__props) {
    const route = useRoute();
    onMounted(() => {
      route.matched.forEach((rt) => console.log(rt.name + " " + rt.path));
      authStore.fetchUser();
      useNotificationStore().fetchNotifications();
      useMeta(() => ({ title: route.meta.label }));
    });
    const authStore = useAuthStore();
    const notificationStore = useNotificationStore();
    const matchedRoutes = computed(
      () => route.matched.filter((rt) => Boolean(!rt.meta.hideBreadcrumbEl))
    );
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh Lpr lFf" }, {
        default: withCtx(() => [
          createVNode(QHeader, null, {
            default: withCtx(() => [
              createVNode(QToolbar, { style: { "padding": "36px 32px" } }, {
                default: withCtx(() => [
                  createVNode(_component_router_link, { to: "/home" }, {
                    default: withCtx(() => [
                      createVNode(QImg, {
                        src: "/logo_header.png",
                        width: "72px"
                      })
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(QToolbarTitle, null, {
                      default: withCtx(() => _cache[0] || (_cache[0] = [
                        createTextVNode(" ENLAC ")
                      ])),
                      _: 1
                    }),
                    _cache[1] || (_cache[1] = createBaseVNode("div", { class: "q-toolbar__subtitle" }, "Portal web para la administración y gestión", -1))
                  ]),
                  unref(route).name == "scores.create" ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    flat: "",
                    round: "",
                    icon: "sym_o_rule",
                    class: "q-ml-md",
                    to: { name: "attendance.index" }
                  })) : createCommentVNode("", true),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "sym_o_notifications",
                    class: "q-mx-md",
                    to: "/notificaciones"
                  }, {
                    default: withCtx(() => [
                      unref(notificationStore).unreadNotificationsCount ? (openBlock(), createBlock(QBadge, {
                        key: 0,
                        color: "red",
                        floating: "",
                        rounded: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(notificationStore).unreadNotificationsCount), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  unref(authStore).data.user ? (openBlock(), createBlock(QAvatar, {
                    key: 1,
                    size: "52px",
                    "text-color": "white",
                    color: "grey",
                    class: "q-mr-sm"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(authStore).data.user.name.charAt(0).toUpperCase()), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              !unref(route).meta.hideBreadcrumb ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createVNode(QBreadcrumbs, null, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(matchedRoutes.value, (rt) => {
                      return openBlock(), createBlock(QBreadcrumbsEl, {
                        key: rt.path,
                        label: rt.meta.label,
                        icon: rt.meta.icon,
                        to: rt.name ? { name: rt.name, props: rt.props } : null
                      }, null, 8, ["label", "icon", "to"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                style: normalizeStyle({ padding: unref(route).meta.noPadding ? 0 : "16px 32px 32px" })
              }, [
                createVNode(_component_router_view)
              ], 4)
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
  _sfc_main as default
};
