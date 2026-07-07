import { i as inject, e as emptyRenderFn, aP as tabsKey, g as getCurrentInstance, r as ref, a as computed, o as onBeforeUnmount, x as onMounted, K as withDirectives, aQ as Ripple, h, Q as QIcon, j as hMergeSlot, aR as isKeyCode, aS as shouldIgnoreKey, aT as stopAndPrevent, c as createComponent, aU as useTick, aV as useTimeout, w as watch, W as onDeactivated, V as onActivated, b as hSlot, p as provide, a0 as useDarkProps, a1 as useDark, a3 as hDir, O as createElementBlock, H as openBlock, J as createVNode, I as withCtx, a5 as QCard, a6 as QCardSection, Z as createBaseVNode, U as QBtn, T as QSeparator, af as withModifiers, aW as QOptionGroup, L as createCommentVNode, P as Fragment, a7 as QInput, a9 as QCheckbox, R as renderList, S as toDisplayString, G as createBlock, M as createTextVNode, ae as QCardActions, aa as QDialog, a4 as api, ag as useRouter, N as unref, aX as QToggle } from "./index-D8dGxR_o.js";
import { Q as QSpace } from "./QSpace-B023KKJX.js";
import { r as rtlHasScrollBug, a as QSelect } from "./QSelect-CrhGdhCv.js";
import { Q as QTd } from "./QTd-BFLtCilK.js";
import { Q as QTable } from "./QTable-VflfFEGr.js";
import { n as notify } from "./notify-BXzUQ3RT.js";
import { Q as QResizeObserver } from "./QResizeObserver-BZQaobLf.js";
import { Q as QMarkupTable } from "./QMarkupTable-Ca2XLBMv.js";
import { u as usePanelChildProps, a as usePanelEmits, b as usePanelProps, c as usePanel } from "./use-panel-BHGhYBFA.js";
import { Q as QForm } from "./QForm-BZcpejmh.js";
import { C as ClosePopup } from "./ClosePopup-DRf8Xhae.js";
import { _ as _sfc_main$2 } from "./DonorFiscalRecordModal-m26x4StJ.js";
import { _ as _sfc_main$3 } from "./ApplyDonationDialog-xie4PM8s.js";
import { e as exportXlsFile } from "./exportXls-Bp3Ww0fx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QItem-C80OgkSj.js";
import "./QMenu-P9699Vod.js";
import "./selection-C01nRuKQ.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-CNbaPK8j.js";
import "./QList-56XDwGA0.js";
import "./use-fullscreen-_EaDTVwW.js";
import "./touch-BscSWsHh.js";
import "./use-render-cache-DRJWLz-b.js";
import "./QBadge-Bw-0E5yr.js";
import "./date-CmgNuwIn.js";
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      return;
    }
    {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
const QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
const QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer = null, scrollTimer = null, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value === name) return;
      if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
        emit("update:modelValue", name);
      }
      if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
        animate(currentModel.value, name);
        currentModel.value = name;
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        rootRef.value && updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) return;
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (hadActivated === true) {
        hadActivated = false;
      } else if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        if (animateTimer !== null) {
          clearTimeout(animateTimer);
          animateTimer = null;
        }
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            animateTimer = null;
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null) return;
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      scrollTimer !== null && clearInterval(scrollTimer);
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      if (scrollTimer !== null) {
        clearInterval(scrollTimer);
        scrollTimer = null;
      }
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) return;
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        hadActivated = false;
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
      // false | string (uid)
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      animateTimer !== null && clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher, hadActivated;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      if (hadRouteWatcher === true) {
        watchRoute();
        hadActivated = true;
        verifyRouteModel();
      }
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
const QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
const QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
const _hoisted_1$1 = { class: "row q-px-sm q-pt-sm" };
const _hoisted_2$1 = { class: "row q-col-gutter-y-sm q-col-gutter-x-md q-py-xs" };
const _hoisted_3$1 = { class: "row items-center q-pa-md bg-grey-1" };
const _hoisted_4$1 = { class: "text-caption text-grey-6" };
const _hoisted_5$1 = { class: "q-pa-sm" };
const _hoisted_6$1 = { class: "text-weight-bold text-primary" };
const _hoisted_7$1 = { class: "text-caption text-grey-6" };
const _hoisted_8$1 = { class: "text-right q-gutter-x-xs" };
const _hoisted_9 = {
  key: 1,
  class: "q-pa-xl text-center text-grey-5 bg-grey-1 rounded-borders"
};
const _sfc_main$1 = {
  __name: "DonorKardexModal",
  emits: ["saved"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const isOpen = ref(false);
    const activeTab = ref("personal");
    const loading = ref(false);
    const errors = ref({});
    const fiscalRecordModalRef = ref(null);
    const form = ref(getCleanForm());
    function getCleanForm() {
      return {
        id: null,
        donor_type: "Físico",
        first_name: "",
        last_name: "",
        // Unificado (Apellido Paterno)
        second_last_name: "",
        // Unificado (Apellido Materno)
        preferred_name: "",
        // Unificado (Le gusta que le llamen)
        marital_status: "Desconocido",
        gender: "Masculino",
        // Unificado (Sexo)
        birth_date: "",
        // Unificado
        cellphone: "",
        landline: "",
        // Unificado (Teléfono Fijo)
        personal_email: "",
        // Unificado
        knows_facilities: "No",
        sector: "Cuauhtémoc",
        spouse_first_name: "",
        spouse_last_name: "",
        // Unificado
        spouse_second_last_name: "",
        // Unificado
        spouse_birth_date: "",
        // Unificado
        wedding_anniversary: "",
        // Unificado
        street: "",
        exterior_number: "",
        // Unificado
        neighborhood: "",
        postal_code: "",
        city: "",
        state: "",
        country: "México",
        company_name: "",
        // Unificado (Empresa)
        job_title: "",
        // Unificado (Puesto)
        contact_restrictions: "",
        referred_by: "",
        // Unificado (Persona que nos conectó)
        referral_relationship: "",
        // Unificado (Relación)
        notes: "",
        // Unificado (Observaciones)
        is_private_contact: 0,
        prospect_for: [],
        is_active: 1,
        fiscal_records: []
      };
    }
    const maritalOptions = [
      "Soltero(a)",
      "Casado(a)",
      "Divorciado(a)",
      "Viudo(a)",
      "Unión Libre",
      "Desconocido"
    ];
    const sectorOptions = [
      "Cuauhtémoc",
      "Corredor Comercial",
      "Ojo de la Yegua",
      "Jagüeyes",
      "Oasis",
      "Villa Ahumada",
      "Otro"
    ];
    const prospectOptions = [
      "Alcancía",
      "Fundaciones",
      "Programa de Verano",
      "Alianza",
      "Natación",
      "Proyecto Interno",
      "Boteo",
      "Obsequio entre Amigos",
      "Radiomaratón",
      "Donativos Varios",
      "Organismos de Gobierno"
    ];
    function open(rowData = null) {
      errors.value = {};
      activeTab.value = "personal";
      if (rowData) {
        form.value = {
          ...getCleanForm(),
          ...rowData,
          birth_date: rowData.birth_date ? rowData.birth_date.split("T")[0] : "",
          spouse_birth_date: rowData.spouse_birth_date ? rowData.spouse_birth_date.split("T")[0] : "",
          is_private_contact: rowData.is_private_contact ? 1 : 0,
          prospect_for: Array.isArray(rowData.prospect_for) ? rowData.prospect_for : [],
          knows_facilities: rowData.knows_facilities ? "SÍ" : "No",
          // Forzamos a que si viene desde el backend como fiscal_records, se asigne correctamente,
          // y si viene nulo o indefinido, inicialice como un array vacío para que el v-for no falle.
          fiscal_records: rowData.fiscal_records || rowData.fiscal_records || []
        };
      } else {
        form.value = getCleanForm();
      }
      isOpen.value = true;
    }
    function openAddFiscal() {
      fiscalRecordModalRef.value.open();
    }
    function openEditFiscal(index) {
      fiscalRecordModalRef.value.open(form.value.fiscal_records[index], index);
    }
    function removeFiscal(index) {
      form.value.fiscal_records.splice(index, 1);
    }
    async function handleFiscalAccept({ data, index, closeModal, setErrors }) {
      try {
        let response;
        if (!data.donor_id && form.value.id) {
          data.donor_id = form.value.id;
        }
        if (data.id) {
          response = await api.put(`/fiscal-records/${data.id}`, data);
          notify.positive("Registro fiscal actualizado con éxito");
        } else if (data.donor_id) {
          response = await api.post("/fiscal-records", data);
          notify.positive("Registro fiscal creado con éxito");
        } else {
          if (index !== null) {
            form.value.fiscal_records[index] = { ...data };
          } else {
            form.value.fiscal_records.push({ ...data });
          }
          if (closeModal) closeModal();
          return;
        }
        const savedRecord = response.data?.data || response.data;
        if (index !== null) {
          form.value.fiscal_records[index] = savedRecord;
        } else {
          form.value.fiscal_records.push(savedRecord);
        }
        if (closeModal) closeModal();
      } catch (error) {
        if (error.response && error.response.status === 422) {
          const serverErrors = error.response.data.errors || {};
          if (typeof setErrors === "function") {
            setErrors({ ...serverErrors });
          }
          notify.negative("Por favor, verifica los campos obligatorios del registro fiscal.");
        } else {
          const msg = error.response?.data?.message || "Error al procesar el registro fiscal.";
          notify.negative(msg);
        }
      }
    }
    async function save() {
      try {
        loading.value = true;
        errors.value = {};
        let route = form.value.id ? `/donors/${form.value.id}` : "/donors";
        let data = {
          ...form.value,
          _method: form.value.id ? "PUT" : void 0
        };
        const response = await api.post(route, data);
        notify.positive("Kardex del Donante procesado correctamente");
        emit("saved", response.data);
        isOpen.value = false;
      } catch (error) {
        if (error.response?.status === 422) {
          const serverErrors = error.response.data.errors || {};
          Object.keys(serverErrors).forEach((key) => {
            const errorVal = serverErrors[key];
            errors.value[key] = Array.isArray(errorVal) ? errorVal[0] : errorVal;
          });
          notify.negative("Te falta información por capturar o revisar en las pestañas");
          focusTabWithError(Object.keys(serverErrors));
        } else {
          const dbMessage = error.response?.data?.message || "Ocurrió un error al guardar el Kardex";
          notify.negative(dbMessage);
        }
      } finally {
        loading.value = false;
      }
    }
    function focusTabWithError(errorKeys) {
      const personalFields = ["first_name", "last_name", "cellphone", "sector"];
      const workFields = ["contact_restrictions"];
      if (errorKeys.some((key) => personalFields.includes(key))) {
        activeTab.value = "personal";
      } else if (errorKeys.some((key) => workFields.includes(key))) {
        activeTab.value = "work";
      }
    }
    __expose({ open });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: isOpen.value,
          "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => isOpen.value = $event),
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "900px", "max-width": "95vw" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "bg-primary text-white q-py-sm row items-center" }, {
                  default: withCtx(() => [
                    _cache[37] || (_cache[37] = createBaseVNode("div", { class: "text-h6 text-weight-bold" }, "Kardex de Control General", -1)),
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "sym_o_close",
                      class: "q-ml-auto"
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QTabs, {
                  modelValue: activeTab.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeTab.value = $event),
                  dense: "",
                  class: "text-grey bg-grey-2",
                  "active-color": "primary",
                  "indicator-color": "primary",
                  align: "left"
                }, {
                  default: withCtx(() => [
                    createVNode(QTab, {
                      name: "personal",
                      label: "1. Personales / Dom"
                    }),
                    createVNode(QTab, {
                      name: "spouse",
                      label: "2. Cónyuge",
                      disable: form.value.donor_type === "Moral"
                    }, null, 8, ["disable"]),
                    createVNode(QTab, {
                      name: "work",
                      label: "3. Laboral / Estatus"
                    }),
                    createVNode(QTab, {
                      name: "fiscal",
                      label: "4. Fiscales / Cobranza"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                createVNode(QSeparator),
                createVNode(QForm, {
                  onSubmit: withModifiers(save, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, {
                      style: { "max-height": "65vh" },
                      class: "scroll q-pa-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(QTabPanels, {
                          modelValue: activeTab.value,
                          "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => activeTab.value = $event),
                          animated: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(QTabPanel, {
                              name: "personal",
                              class: "q-pa-none q-gutter-y-md"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_1$1, [
                                  createVNode(QOptionGroup, {
                                    modelValue: form.value.donor_type,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.donor_type = $event),
                                    options: [
                                      { label: "Persona Física", value: "Físico" },
                                      { label: "Persona Moral", value: "Moral" }
                                    ],
                                    inline: "",
                                    color: "primary"
                                  }, null, 8, ["modelValue"])
                                ]),
                                createVNode(QMarkupTable, {
                                  flat: "",
                                  class: "system-form-table"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("tbody", null, [
                                      form.value.donor_type === "Físico" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createBaseVNode("tr", null, [
                                          _cache[38] || (_cache[38] = createBaseVNode("td", null, "Nombre(s) *", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QInput, {
                                              outlined: "",
                                              dense: "",
                                              modelValue: form.value.first_name,
                                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.first_name = $event),
                                              error: !!errors.value.first_name,
                                              "error-message": errors.value.first_name,
                                              "hide-bottom-space": ""
                                            }, null, 8, ["modelValue", "error", "error-message"])
                                          ])
                                        ]),
                                        createBaseVNode("tr", null, [
                                          _cache[39] || (_cache[39] = createBaseVNode("td", null, "Apellido Paterno *", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QInput, {
                                              outlined: "",
                                              dense: "",
                                              modelValue: form.value.last_name,
                                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.last_name = $event),
                                              error: !!errors.value.last_name,
                                              "error-message": errors.value.last_name,
                                              "hide-bottom-space": ""
                                            }, null, 8, ["modelValue", "error", "error-message"])
                                          ])
                                        ]),
                                        createBaseVNode("tr", null, [
                                          _cache[40] || (_cache[40] = createBaseVNode("td", null, "Apellido Materno", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QInput, {
                                              outlined: "",
                                              dense: "",
                                              modelValue: form.value.second_last_name,
                                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.second_last_name = $event),
                                              error: !!errors.value.second_last_name,
                                              "error-message": errors.value.second_last_name,
                                              "hide-bottom-space": ""
                                            }, null, 8, ["modelValue", "error", "error-message"])
                                          ])
                                        ]),
                                        createBaseVNode("tr", null, [
                                          _cache[41] || (_cache[41] = createBaseVNode("td", null, "Le gusta que le llamen", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QInput, {
                                              outlined: "",
                                              dense: "",
                                              modelValue: form.value.preferred_name,
                                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.preferred_name = $event),
                                              "hide-bottom-space": ""
                                            }, null, 8, ["modelValue"])
                                          ])
                                        ]),
                                        createBaseVNode("tr", null, [
                                          _cache[42] || (_cache[42] = createBaseVNode("td", null, "Estado Civil", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QSelect, {
                                              outlined: "",
                                              dense: "",
                                              modelValue: form.value.marital_status,
                                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.marital_status = $event),
                                              options: maritalOptions,
                                              "hide-bottom-space": ""
                                            }, null, 8, ["modelValue"])
                                          ])
                                        ]),
                                        createBaseVNode("tr", null, [
                                          _cache[43] || (_cache[43] = createBaseVNode("td", null, "Sexo", -1)),
                                          createBaseVNode("td", null, [
                                            createVNode(QOptionGroup, {
                                              modelValue: form.value.gender,
                                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.gender = $event),
                                              options: [
                                                { label: "Masculino", value: "Masculino" },
                                                { label: "Femenino", value: "Femenino" }
                                              ],
                                              inline: "",
                                              color: "primary"
                                            }, null, 8, ["modelValue"])
                                          ])
                                        ])
                                      ], 64)) : createCommentVNode("", true),
                                      createBaseVNode("tr", null, [
                                        _cache[44] || (_cache[44] = createBaseVNode("td", null, "Fecha de Nacimiento", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            type: "date",
                                            modelValue: form.value.birth_date,
                                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.birth_date = $event),
                                            "hide-bottom-space": "",
                                            hint: "DD/MM/AAAA"
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[45] || (_cache[45] = createBaseVNode("td", null, "Celular (10 dígitos) *", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            mask: "##########",
                                            modelValue: form.value.cellphone,
                                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.cellphone = $event),
                                            error: !!errors.value.cellphone,
                                            "error-message": errors.value.cellphone,
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue", "error", "error-message"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[46] || (_cache[46] = createBaseVNode("td", null, "Teléfono Fijo", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.landline,
                                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.landline = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[47] || (_cache[47] = createBaseVNode("td", null, "Correo Electrónico", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            type: "email",
                                            modelValue: form.value.personal_email,
                                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.personal_email = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[48] || (_cache[48] = createBaseVNode("td", null, "¿Conoce ENLAC?", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QOptionGroup, {
                                            modelValue: form.value.knows_facilities,
                                            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.knows_facilities = $event),
                                            options: [
                                              { label: "SÍ", value: "SÍ" },
                                              { label: "No", value: "No" }
                                            ],
                                            inline: "",
                                            color: "primary"
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[49] || (_cache[49] = createBaseVNode("td", null, "Sector *", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QSelect, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.sector,
                                            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.sector = $event),
                                            options: sectorOptions,
                                            error: !!errors.value.sector,
                                            "error-message": errors.value.sector,
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue", "error", "error-message"])
                                        ])
                                      ]),
                                      _cache[57] || (_cache[57] = createBaseVNode("tr", { class: "bg-grey-2" }, [
                                        createBaseVNode("td", {
                                          colspan: "2",
                                          class: "text-subtitle2 text-weight-bold"
                                        }, " Domicilio Particular del Donante ")
                                      ], -1)),
                                      createBaseVNode("tr", null, [
                                        _cache[50] || (_cache[50] = createBaseVNode("td", null, "Calle", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.street,
                                            "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.street = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[51] || (_cache[51] = createBaseVNode("td", null, "Núm. Exterior", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.exterior_number,
                                            "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.exterior_number = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[52] || (_cache[52] = createBaseVNode("td", null, "Colonia", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.neighborhood,
                                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.neighborhood = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[53] || (_cache[53] = createBaseVNode("td", null, "Código Postal", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.postal_code,
                                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.postal_code = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[54] || (_cache[54] = createBaseVNode("td", null, "Ciudad", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.city,
                                            "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.city = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[55] || (_cache[55] = createBaseVNode("td", null, "Estado", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.state,
                                            "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.state = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[56] || (_cache[56] = createBaseVNode("td", null, "País", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.country,
                                            "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.country = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QTabPanel, {
                              name: "spouse",
                              class: "q-pa-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(QMarkupTable, {
                                  flat: "",
                                  class: "system-form-table"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("tbody", null, [
                                      createBaseVNode("tr", null, [
                                        _cache[58] || (_cache[58] = createBaseVNode("td", null, "Nombre(s) Cónyuge", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.spouse_first_name,
                                            "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => form.value.spouse_first_name = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[59] || (_cache[59] = createBaseVNode("td", null, "Apellido Paterno", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.spouse_last_name,
                                            "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => form.value.spouse_last_name = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[60] || (_cache[60] = createBaseVNode("td", null, "Apellido Materno", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.spouse_second_last_name,
                                            "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => form.value.spouse_second_last_name = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[61] || (_cache[61] = createBaseVNode("td", null, "Nacimiento Cónyuge", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            type: "date",
                                            modelValue: form.value.spouse_birth_date,
                                            "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => form.value.spouse_birth_date = $event),
                                            "hide-bottom-space": "",
                                            hint: "DD/MM/AAAA"
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[62] || (_cache[62] = createBaseVNode("td", null, "Aniversario Casados", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            placeholder: "MM-DD",
                                            mask: "##-##",
                                            modelValue: form.value.wedding_anniversary,
                                            "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => form.value.wedding_anniversary = $event),
                                            "hide-bottom-space": "",
                                            hint: "Mes y Día (MM-DD)"
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QTabPanel, {
                              name: "work",
                              class: "q-pa-none"
                            }, {
                              default: withCtx(() => [
                                createVNode(QMarkupTable, {
                                  flat: "",
                                  class: "system-form-table"
                                }, {
                                  default: withCtx(() => [
                                    createBaseVNode("tbody", null, [
                                      createBaseVNode("tr", null, [
                                        _cache[63] || (_cache[63] = createBaseVNode("td", null, "Empresa labora/representa", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.company_name,
                                            "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => form.value.company_name = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[64] || (_cache[64] = createBaseVNode("td", null, "Puesto / Ocupación", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.job_title,
                                            "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => form.value.job_title = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      _cache[71] || (_cache[71] = createBaseVNode("tr", { class: "bg-grey-2" }, [
                                        createBaseVNode("td", {
                                          colspan: "2",
                                          class: "text-subtitle2 text-weight-bold"
                                        }, " Configuraciones de Contacto y Estatus ")
                                      ], -1)),
                                      createBaseVNode("tr", null, [
                                        _cache[65] || (_cache[65] = createBaseVNode("td", null, "Restricciones Contacto *", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.contact_restrictions,
                                            "onUpdate:modelValue": [
                                              _cache[28] || (_cache[28] = ($event) => form.value.contact_restrictions = $event),
                                              _cache[29] || (_cache[29] = ($event) => errors.value.contact_restrictions = null)
                                            ],
                                            error: !!errors.value.contact_restrictions,
                                            "error-message": errors.value.contact_restrictions,
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue", "error", "error-message"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[66] || (_cache[66] = createBaseVNode("td", null, "Persona que nos conectó", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.referred_by,
                                            "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => form.value.referred_by = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[67] || (_cache[67] = createBaseVNode("td", null, "Relación", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            modelValue: form.value.referral_relationship,
                                            "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => form.value.referral_relationship = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[68] || (_cache[68] = createBaseVNode("td", null, "Observaciones", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QInput, {
                                            outlined: "",
                                            dense: "",
                                            type: "textarea",
                                            rows: "2",
                                            modelValue: form.value.notes,
                                            "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => form.value.notes = $event),
                                            "hide-bottom-space": ""
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[69] || (_cache[69] = createBaseVNode("td", null, "Contacto Privado", -1)),
                                        createBaseVNode("td", null, [
                                          createVNode(QCheckbox, {
                                            modelValue: form.value.is_private_contact,
                                            "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => form.value.is_private_contact = $event),
                                            "true-value": 1,
                                            "false-value": 0,
                                            label: "NO SE INCLUIRÁ EN NINGÚN ENVÍO MASIVO",
                                            color: "red"
                                          }, null, 8, ["modelValue"])
                                        ])
                                      ]),
                                      createBaseVNode("tr", null, [
                                        _cache[70] || (_cache[70] = createBaseVNode("td", null, "Prospecto para:", -1)),
                                        createBaseVNode("td", null, [
                                          createBaseVNode("div", _hoisted_2$1, [
                                            (openBlock(), createElementBlock(Fragment, null, renderList(prospectOptions, (option) => {
                                              return createBaseVNode("div", {
                                                key: option,
                                                class: "col-12 col-sm-4"
                                              }, [
                                                createVNode(QCheckbox, {
                                                  modelValue: form.value.prospect_for,
                                                  "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => form.value.prospect_for = $event),
                                                  val: option,
                                                  label: option,
                                                  dense: "",
                                                  color: "primary",
                                                  class: "text-grey-9 text-caption text-weight-medium"
                                                }, null, 8, ["modelValue", "val", "label"])
                                              ]);
                                            }), 64))
                                          ])
                                        ])
                                      ])
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(QTabPanel, {
                              name: "fiscal",
                              class: "q-pa-none"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_3$1, [
                                  createBaseVNode("div", null, [
                                    _cache[72] || (_cache[72] = createBaseVNode("div", { class: "text-subtitle2 text-weight-bold text-grey-8" }, " Denominaciones Sociales y Cobranza ", -1)),
                                    createBaseVNode("div", _hoisted_4$1, " Cuentas fiscales registradas: " + toDisplayString(form.value.fiscal_records.length), 1)
                                  ]),
                                  createVNode(QBtn, {
                                    class: "q-ml-auto q-px-sm",
                                    color: "secondary",
                                    icon: "sym_o_add_card",
                                    label: "Agregar Razón Social / RFC",
                                    dense: "",
                                    onClick: openAddFiscal
                                  })
                                ]),
                                createBaseVNode("div", _hoisted_5$1, [
                                  form.value.fiscal_records.length > 0 ? (openBlock(), createBlock(QMarkupTable, {
                                    key: 0,
                                    flat: "",
                                    bordered: ""
                                  }, {
                                    default: withCtx(() => [
                                      _cache[73] || (_cache[73] = createBaseVNode("thead", null, [
                                        createBaseVNode("tr", { class: "bg-grey-2" }, [
                                          createBaseVNode("th", { class: "text-left" }, "RFC"),
                                          createBaseVNode("th", { class: "text-left" }, "RAZÓN SOCIAL"),
                                          createBaseVNode("th", { class: "text-left" }, "CONTACTO COBRANZA"),
                                          createBaseVNode("th", { class: "text-right" }, "ACCIONES")
                                        ])
                                      ], -1)),
                                      createBaseVNode("tbody", null, [
                                        (openBlock(true), createElementBlock(Fragment, null, renderList(form.value.fiscal_records, (rec, index) => {
                                          return openBlock(), createElementBlock("tr", { key: index }, [
                                            createBaseVNode("td", _hoisted_6$1, toDisplayString(rec.rfc.toUpperCase()), 1),
                                            createBaseVNode("td", null, [
                                              createTextVNode(toDisplayString(rec.tax_name) + " ", 1),
                                              createBaseVNode("span", _hoisted_7$1, "(" + toDisplayString(rec.commercial_name) + ")", 1)
                                            ]),
                                            createBaseVNode("td", null, toDisplayString(rec.billing_contact_name || "No asignado"), 1),
                                            createBaseVNode("td", _hoisted_8$1, [
                                              createVNode(QBtn, {
                                                flat: "",
                                                round: "",
                                                dense: "",
                                                icon: "sym_o_edit",
                                                color: "primary",
                                                onClick: ($event) => openEditFiscal(index)
                                              }, null, 8, ["onClick"]),
                                              createVNode(QBtn, {
                                                flat: "",
                                                round: "",
                                                dense: "",
                                                icon: "sym_o_delete",
                                                color: "negative",
                                                onClick: ($event) => removeFiscal(index)
                                              }, null, 8, ["onClick"])
                                            ])
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createElementBlock("div", _hoisted_9, [
                                    createVNode(QIcon, {
                                      name: "sym_o_receipt_long",
                                      size: "48px",
                                      class: "q-mb-sm"
                                    }),
                                    _cache[74] || (_cache[74] = createBaseVNode("div", null, "No hay razones sociales registradas para este donante todavía.", -1))
                                  ]))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(QSeparator),
                    createVNode(QCardActions, {
                      align: "right",
                      class: "q-pa-md"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(QBtn, {
                          flat: "",
                          label: "Cancelar",
                          color: "grey"
                        }, null, 512), [
                          [ClosePopup]
                        ]),
                        createVNode(QBtn, {
                          type: "submit",
                          color: "primary",
                          icon: "sym_o_save",
                          label: "Guardar Completo",
                          loading: loading.value
                        }, null, 8, ["loading"])
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
        }, 8, ["modelValue"]),
        createVNode(_sfc_main$2, {
          ref_key: "fiscalRecordModalRef",
          ref: fiscalRecordModalRef,
          onAccept: handleFiscalAccept
        }, null, 512)
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "flex items-center q-mb-md" };
const _hoisted_2 = { class: "flex items-center q-gutter-x-sm q-ml-auto" };
const _hoisted_3 = { class: "flex items-center q-gutter-x-md q-mb-md text-subtitle2" };
const _hoisted_4 = { class: "row q-col-gutter-md q-mb-lg justify-start" };
const _hoisted_5 = { class: "col-12 col-md-9 row q-col-gutter-sm items-stretch" };
const _hoisted_6 = { class: "col-12 col-sm-4" };
const _hoisted_7 = { class: "col-12 col-sm-4" };
const _hoisted_8 = { class: "col-12 col-sm-4" };
const _sfc_main = {
  __name: "DonorsIndex",
  setup(__props) {
    const $router = useRouter();
    const loading = ref(false);
    const rows = ref([]);
    const donationDialog = ref(false);
    const filterName = ref("");
    const selectedActivityId = ref(null);
    const selectedMonth = ref(null);
    const kardexModalRef = ref(null);
    const columns = ref([
      {
        align: "left",
        name: "donor_name",
        label: "NOMBRE DEL DONANTE",
        field: (row) => {
          if (row.full_name) return row.full_name;
          const first = row.first_name || "";
          const last = row.last_name || "";
          const second = row.second_last_name || "";
          const finalName = `${first} ${last} ${second}`.trim();
          return finalName || "Donante Sin Nombre";
        },
        sortable: true
      },
      { align: "left", name: "company_name", label: "EMPRESA", field: "company_name", sortable: true },
      { align: "left", name: "job_title", label: "PUESTO", field: "job_title", sortable: true },
      { align: "left", name: "cellphone", label: "TELÉFONO CELULAR", field: "cellphone" },
      {
        align: "left",
        name: "birth_date",
        label: "FECHA DE CUMPLEAÑOS",
        field: "birth_date",
        sortable: true,
        format: (val) => {
          if (!val) return "-";
          const [year, month, day] = val.split("T")[0].split("-");
          return `${day}/${month}/${year}`;
        }
      },
      { align: "left", name: "sector", label: "SECTOR", field: "sector", sortable: true },
      { align: "center", name: "is_active", label: "ESTATUS" },
      { align: "right", name: "actions", label: "ACCIONES" }
    ]);
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
    const monthsOptions = [
      { label: "Enero", value: "01" },
      { label: "Febrero", value: "02" },
      { label: "Marzo", value: "03" },
      { label: "Abril", value: "04" },
      { label: "Mayo", value: "05" },
      { label: "Junio", value: "06" },
      { label: "Julio", value: "07" },
      { label: "Agosto", value: "08" },
      { label: "Septiembre", value: "09" },
      { label: "Octubre", value: "10" },
      { label: "Noviembre", value: "11" },
      { label: "Diciembre", value: "12" }
    ];
    async function fetchInitialData() {
      await fetchDonors();
    }
    async function fetchDonors() {
      try {
        loading.value = true;
        const url = "/donors";
        const params = {};
        if (selectedActivityId.value) params.activity_type = selectedActivityId.value;
        if (selectedMonth.value) params.birth_month = selectedMonth.value.value;
        if (filterName.value) params.search = filterName.value;
        const response = await api.get(url, { params });
        let data = response.data.data || response.data || [];
        rows.value = [...data].sort((a, b) => {
          const nameA = a.full_name || a.first_name || "";
          const nameB = b.full_name || b.first_name || "";
          return nameA.localeCompare(nameB);
        });
      } catch (error) {
        console.error(error);
        notify.negative("No se pudieron obtener los donantes");
      } finally {
        loading.value = false;
      }
    }
    async function toggleStatus(row) {
      try {
        const route = `/donors/${row.id}/toggle-status`;
        await api.post(route, { is_active: row.is_active });
        notify.positive("Estatus actualizado con éxito");
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo guardar el cambio de estatus");
        row.is_active = !row.is_active;
      }
    }
    async function exportData() {
      if (rows.value.length === 0) {
        notify.warning("No hay datos disponibles para exportar");
        return;
      }
      try {
        loading.value = true;
        notify.info("Preparando la descarga del reporte...");
        await exportXlsFile(
          "/donors/export",
          {
            search: filterName.value,
            activity_type: selectedActivityId.value,
            birth_month: selectedMonth.value ? selectedMonth.value.value : null
          },
          "Reporte_Donantes.xlsx"
        );
      } catch (error) {
        console.error(error);
        notify.negative("Error al exportar el archivo Excel");
      } finally {
        loading.value = false;
      }
    }
    function openDonationsReport() {
      $router.push("/reports/donations");
    }
    function openVisitsReport() {
      $router.push("/reports/visits");
    }
    function openCreate() {
      kardexModalRef.value.open();
    }
    function openEdit(row) {
      kardexModalRef.value.open(row);
    }
    watch([selectedActivityId, selectedMonth, filterName], () => {
      fetchDonors();
    });
    onMounted(() => {
      fetchInitialData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[5] || (_cache[5] = createBaseVNode("div", null, [
            createBaseVNode("h1", { class: "page-title q-mb-none" }, "Donantes para Procuración de Fondos")
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            createVNode(QBtn, {
              icon: "sym_o_add_card",
              color: "primary",
              label: "Aplicar Donativo",
              onClick: _cache[0] || (_cache[0] = ($event) => donationDialog.value = true)
            }),
            createVNode(QBtn, {
              icon: "sym_o_person_add",
              color: "primary",
              label: "Nuevo Donante",
              onClick: openCreate
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: "text-primary text-weight-bold row items-center no-underline custom-link",
            onClick: openDonationsReport
          }, [
            createVNode(QIcon, {
              name: "sym_o_analytics",
              class: "q-mr-xs",
              size: "xs"
            }),
            _cache[6] || (_cache[6] = createTextVNode(" Reporte Donativos "))
          ]),
          createVNode(QSeparator, {
            vertical: "",
            inset: ""
          }),
          createBaseVNode("a", {
            href: "javascript:void(0)",
            class: "text-primary text-weight-bold row items-center no-underline custom-link",
            onClick: openVisitsReport
          }, [
            createVNode(QIcon, {
              name: "sym_o_calendar_month",
              class: "q-mr-xs",
              size: "xs"
            }),
            _cache[7] || (_cache[7] = createTextVNode(" Reporte de Visitas "))
          ]),
          createVNode(QSpace),
          createVNode(QBtn, {
            flat: "",
            dense: "",
            color: "grey-7",
            icon: "sym_o_download",
            label: "Exportar",
            class: "text-weight-bold",
            onClick: exportData
          })
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              _cache[8] || (_cache[8] = createBaseVNode("div", {
                class: "text-caption text-weight-bold text-grey-8 q-mb-xs",
                style: { "line-height": "1" }
              }, " Donante ", -1)),
              createVNode(QInput, {
                modelValue: filterName.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterName.value = $event),
                outlined: "",
                dense: "",
                "bg-color": "white",
                placeholder: "Buscar por nombre...",
                clearable: "",
                debounce: "400",
                "hide-bottom-space": "",
                class: "full-width"
              }, {
                append: withCtx(() => [
                  createVNode(QIcon, { name: "sym_o_search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[9] || (_cache[9] = createBaseVNode("div", {
                class: "text-caption text-weight-bold text-grey-8 q-mb-xs",
                style: { "line-height": "1" }
              }, " Tipo de Actividad ", -1)),
              createVNode(QSelect, {
                outlined: "",
                dense: "",
                "bg-color": "white",
                modelValue: selectedActivityId.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedActivityId.value = $event),
                options: activityTypes,
                placeholder: "Todos los tipos",
                "use-input": "",
                "hide-selected": "",
                "fill-input": "",
                "input-debounce": "0",
                clearable: "",
                "hide-bottom-space": "",
                class: "full-width"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_8, [
              _cache[10] || (_cache[10] = createBaseVNode("div", {
                class: "text-caption text-weight-bold text-grey-8 q-mb-xs",
                style: { "line-height": "1" }
              }, " Mes de Cumpleaños ", -1)),
              createVNode(QSelect, {
                outlined: "",
                dense: "",
                "bg-color": "white",
                modelValue: selectedMonth.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedMonth.value = $event),
                options: monthsOptions,
                "option-label": "label",
                "option-value": "value",
                placeholder: "Cualquier mes",
                "use-input": "",
                "hide-selected": "",
                "fill-input": "",
                "input-debounce": "0",
                clearable: "",
                "hide-bottom-space": "",
                class: "full-width"
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        createVNode(QTable, {
          columns: columns.value,
          rows: rows.value,
          loading: loading.value,
          pagination: { rowsPerPage: 10 },
          flat: "",
          bordered: ""
        }, {
          "body-cell-is_active": withCtx((props) => [
            createVNode(QTd, { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(QToggle, {
                  modelValue: props.row.is_active,
                  "onUpdate:modelValue": [($event) => props.row.is_active = $event, ($event) => toggleStatus(props.row)],
                  "true-value": true,
                  "false-value": false,
                  color: "primary"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  icon: "sym_o_visibility",
                  flat: "",
                  dense: "",
                  color: "secondary",
                  onClick: ($event) => unref($router).push(`/donors/${props.row.id}`),
                  title: "Ver perfil completo"
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  icon: "sym_o_edit",
                  flat: "",
                  dense: "",
                  color: "secondary",
                  title: "Edicion Rapida",
                  onClick: ($event) => openEdit(props.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["columns", "rows", "loading"]),
        createVNode(_sfc_main$1, {
          ref_key: "kardexModalRef",
          ref: kardexModalRef,
          onSaved: fetchDonors
        }, null, 512),
        createVNode(QDialog, {
          modelValue: donationDialog.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => donationDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const DonorsIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c75f702d"]]);
export {
  DonorsIndex as default
};
