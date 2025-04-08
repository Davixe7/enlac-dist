import { Q as QCheckbox } from "./QCheckbox-B6KgEUkB.js";
import { y as useTransitionProps, j as QMenu, u as useModelToggleEmits, s as scrollTargetProp, z as validateOffset, A as validatePosition, a as useModelToggleProps, B as useAnchorStaticProps, C as parsePosition, D as useTick, E as useTransition, F as useScrollTarget, q as useAnchor, b as useModelToggle, G as usePortal, H as addClickOutside, I as removeClickOutside, J as setPosition, g as getScrollTarget, d as QItemSection, Q as QItem, k as QList } from "./QList-DREGiCrq.js";
import { G as noop, j as createComponent, y as computed, n as h, p as hSlot, ar as nonRoundBtnProps, m as getCurrentInstance, r as ref, as as getBtnDesignAttr, C as watch, o as onMounted, h as QIcon, Q as QBtn, ac as stop, z as onBeforeUnmount, a1 as cleanEvt, a4 as addEvt, T as Transition, s as stopAndPrevent, at as shouldIgnoreKey, ae as prevent, q as nextTick, X as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, d as createVNode, c as createElementBlock, Z as Fragment, _ as renderList, g as createTextVNode, aa as toDisplayString, al as normalizeClass, af as createCommentVNode, N as Notify } from "./index-DqQk-fWJ.js";
import { u as useId, l as useSplitAttrs, a as addFocusFn } from "./use-key-composition-BMP8BRP1.js";
import { u as useTimeout, c as clearSelection } from "./selection-BD8QQn2r.js";
import { u as useDarkProps, a as useDark } from "./use-dark-BpW3p9LU.js";
import { u as useFullscreenEmits, a as useFullscreenProps, b as useFullscreen, Q as QPage } from "./QPage-B4fs8O6P.js";
import { Q as QRadio } from "./QRadio-CiJaESEz.js";
import { Q as QInput } from "./QInput-Dho-Zk2o.js";
import { u as useCandidateStore, _ as _sfc_main$1 } from "./CandidateProfile-DZ7seIGQ.js";
import { api } from "./axios-fPsnLTf7.js";
import { s as scrollToFirstError } from "./focusError-DHV7BPiX.js";
import "./QImg-4mwf5fXQ.js";
function getBlockElement(el, parent) {
  if (parent && el === parent) {
    return null;
  }
  const nodeName = el.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(nodeName) === true) {
    return el;
  }
  const style = window.getComputedStyle ? window.getComputedStyle(el) : el.currentStyle, display = style.display;
  if (display === "block" || display === "table") {
    return el;
  }
  return getBlockElement(el.parentNode);
}
function isChildOf(el, parent, orSame) {
  return !el || el === document.body ? false : orSame === true && el === parent || (parent === document ? document.body : parent).contains(el.parentNode);
}
function createRange(node, chars, range) {
  if (!range) {
    range = document.createRange();
    range.selectNode(node);
    range.setStart(node, 0);
  }
  if (chars.count === 0) {
    range.setEnd(node, chars.count);
  } else if (chars.count > 0) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.length < chars.count) {
        chars.count -= node.textContent.length;
      } else {
        range.setEnd(node, chars.count);
        chars.count = 0;
      }
    } else {
      for (let lp = 0; chars.count !== 0 && lp < node.childNodes.length; lp++) {
        range = createRange(node.childNodes[lp], chars, range);
      }
    }
  }
  return range;
}
const urlRegex = /^https?:\/\//;
class Caret {
  constructor(el, eVm) {
    this.el = el;
    this.eVm = eVm;
    this._range = null;
  }
  get selection() {
    if (this.el) {
      const sel = document.getSelection();
      if (isChildOf(sel.anchorNode, this.el, true) && isChildOf(sel.focusNode, this.el, true)) {
        return sel;
      }
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    const sel = this.selection;
    if (sel !== null && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
    return this._range;
  }
  get parent() {
    const range = this.range;
    if (range !== null) {
      const node = range.startContainer;
      return node.nodeType === document.ELEMENT_NODE ? node : node.parentNode;
    }
    return null;
  }
  get blockParent() {
    const parent = this.parent;
    if (parent !== null) {
      return getBlockElement(parent, this.el);
    }
    return null;
  }
  save(range = this.range) {
    if (range !== null) {
      this._range = range;
    }
  }
  restore(range = this._range) {
    const r = document.createRange(), sel = document.getSelection();
    if (range !== null) {
      r.setStart(range.startContainer, range.startOffset);
      r.setEnd(range.endContainer, range.endOffset);
      sel.removeAllRanges();
      sel.addRange(r);
    } else {
      sel.selectAllChildren(this.el);
      sel.collapseToEnd();
    }
  }
  savePosition() {
    let charCount = -1, node;
    const selection = document.getSelection(), parentEl = this.el.parentNode;
    if (selection.focusNode && isChildOf(selection.focusNode, parentEl)) {
      node = selection.focusNode;
      charCount = selection.focusOffset;
      while (node && node !== parentEl) {
        if (node !== this.el && node.previousSibling) {
          node = node.previousSibling;
          charCount += node.textContent.length;
        } else {
          node = node.parentNode;
        }
      }
    }
    this.savedPos = charCount;
  }
  restorePosition(length = 0) {
    if (this.savedPos > 0 && this.savedPos < length) {
      const selection = window.getSelection(), range = createRange(this.el, { count: this.savedPos });
      if (range) {
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  }
  hasParent(name, spanLevel) {
    const el = spanLevel ? this.parent : this.blockParent;
    return el !== null ? el.nodeName.toLowerCase() === name.toLowerCase() : false;
  }
  hasParents(list, recursive, el = this.parent) {
    if (el === null) {
      return false;
    }
    if (list.includes(el.nodeName.toLowerCase()) === true) {
      return true;
    }
    return recursive === true ? this.hasParents(list, recursive, el.parentNode) : false;
  }
  is(cmd, param) {
    if (this.selection === null) {
      return false;
    }
    switch (cmd) {
      case "formatBlock":
        return param === "DIV" && this.parent === this.el || this.hasParent(param, param === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(cmd) === param;
      case "fontName":
        const res = document.queryCommandValue(cmd);
        return res === `"${param}"` || res === param;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        const state = document.queryCommandState(cmd);
        return param !== void 0 ? state === param : state;
    }
  }
  getParentAttribute(attrib) {
    if (this.parent !== null) {
      return this.parent.getAttribute(attrib);
    }
    return null;
  }
  can(name) {
    if (name === "outdent") {
      return this.hasParents(["blockquote", "li"], true);
    }
    if (name === "indent") {
      return this.hasParents(["li"], true);
    }
    if (name === "link") {
      return this.selection !== null || this.is("link");
    }
  }
  apply(cmd, param, done = noop) {
    if (cmd === "formatBlock") {
      if (["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(param) && this.is(cmd, param)) {
        cmd = "outdent";
        param = null;
      }
      if (param === "PRE" && this.is(cmd, "PRE")) {
        param = "P";
      }
    } else if (cmd === "print") {
      done();
      const win = window.open();
      win.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `);
      win.print();
      win.close();
      return;
    } else if (cmd === "link") {
      const link = this.getParentAttribute("href");
      if (link === null) {
        const selection = this.selectWord(this.selection);
        const url = selection ? selection.toString() : "";
        if (!url.length && (!this.range || !this.range.cloneContents().querySelector("img"))) return;
        this.eVm.editLinkUrl.value = urlRegex.test(url) ? url : "https://";
        document.execCommand("createLink", false, this.eVm.editLinkUrl.value);
        this.save(selection.getRangeAt(0));
      } else {
        this.eVm.editLinkUrl.value = link;
        this.range.selectNodeContents(this.parent);
        this.save();
      }
      return;
    } else if (cmd === "fullscreen") {
      this.eVm.toggleFullscreen();
      done();
      return;
    } else if (cmd === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false;
      this.eVm.setContent(this.eVm.props.modelValue);
      done();
      return;
    }
    document.execCommand(cmd, false, param);
    done();
  }
  selectWord(sel) {
    if (sel === null || sel.isCollapsed !== true || /* IE 11 */
    sel.modify === void 0) {
      return sel;
    }
    const range = document.createRange();
    range.setStart(sel.anchorNode, sel.anchorOffset);
    range.setEnd(sel.focusNode, sel.focusOffset);
    const direction = range.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    range.detach();
    const endNode = sel.focusNode, endOffset = sel.focusOffset;
    sel.collapse(sel.anchorNode, sel.anchorOffset);
    sel.modify("move", direction[0], "character");
    sel.modify("move", direction[1], "word");
    sel.extend(endNode, endOffset);
    sel.modify("extend", direction[1], "character");
    sel.modify("extend", direction[0], "word");
    return sel;
  }
}
const QBtnGroup = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const btnPropsList = Object.keys(nonRoundBtnProps);
function passBtnProps(props) {
  return btnPropsList.reduce((acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  }, {});
}
const QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...nonRoundBtnProps,
    ...useTransitionProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = useId();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid.value,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          id: targetUid.value,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
const QTooltip = createComponent({
  name: "QTooltip",
  inheritAttrs: false,
  props: {
    ...useAnchorStaticProps,
    ...useModelToggleProps,
    ...useTransitionProps,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    },
    transitionShow: {
      ...useTransitionProps.transitionShow,
      default: "jump-down"
    },
    transitionHide: {
      ...useTransitionProps.transitionHide,
      default: "jump-up"
    },
    anchor: {
      type: String,
      default: "bottom middle",
      validator: validatePosition
    },
    self: {
      type: String,
      default: "top middle",
      validator: validatePosition
    },
    offset: {
      type: Array,
      default: () => [14, 14],
      validator: validateOffset
    },
    scrollTarget: scrollTargetProp,
    delay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    persistent: Boolean
  },
  emits: [
    ...useModelToggleEmits
  ],
  setup(props, { slots, emit, attrs }) {
    let unwatchPosition, observer;
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const innerRef = ref(null);
    const showing = ref(false);
    const anchorOrigin = computed(() => parsePosition(props.anchor, $q.lang.rtl));
    const selfOrigin = computed(() => parsePosition(props.self, $q.lang.rtl));
    const hideOnRouteChange = computed(() => props.persistent !== true);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow, anchorEvents } = useAnchor({ showing, configureAnchorEl });
    const { show, hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    Object.assign(anchorEvents, { delayShow, delayHide });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent, "tooltip");
    if ($q.platform.is.mobile === true) {
      const clickOutsideProps = {
        anchorEl,
        innerRef,
        onClickOutside(e) {
          hide(e);
          if (e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      };
      const hasClickOutside = computed(
        () => (
          // it doesn't has external model
          // (null is the default value)
          props.modelValue === null && props.persistent !== true && showing.value === true
        )
      );
      watch(hasClickOutside, (val) => {
        const fn = val === true ? addClickOutside : removeClickOutside;
        fn(clickOutsideProps);
      });
      onBeforeUnmount(() => {
        removeClickOutside(clickOutsideProps);
      });
    }
    function handleShow(evt) {
      showPortal();
      registerTick(() => {
        observer = new MutationObserver(() => updatePosition());
        observer.observe(innerRef.value, { attributes: false, childList: true, characterData: true, subtree: true });
        updatePosition();
        configureScrollTarget();
      });
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      registerTimeout(() => {
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup();
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup() {
      if (observer !== void 0) {
        observer.disconnect();
        observer = void 0;
      }
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      unconfigureScrollTarget();
      cleanEvt(anchorEvents, "tooltipTemp");
    }
    function updatePosition() {
      setPosition({
        targetEl: innerRef.value,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function delayShow(evt) {
      if ($q.platform.is.mobile === true) {
        clearSelection();
        document.body.classList.add("non-selectable");
        const target = anchorEl.value;
        const evts = ["touchmove", "touchcancel", "touchend", "click"].map((e) => [target, e, "delayHide", "passiveCapture"]);
        addEvt(anchorEvents, "tooltipTemp", evts);
      }
      registerTimeout(() => {
        show(evt);
      }, props.delay);
    }
    function delayHide(evt) {
      if ($q.platform.is.mobile === true) {
        cleanEvt(anchorEvents, "tooltipTemp");
        clearSelection();
        setTimeout(() => {
          document.body.classList.remove("non-selectable");
        }, 10);
      }
      registerTimeout(() => {
        hide(evt);
      }, props.hideDelay);
    }
    function configureAnchorEl() {
      if (props.noParentEvent === true || anchorEl.value === null) return;
      const evts = $q.platform.is.mobile === true ? [
        [anchorEl.value, "touchstart", "delayShow", "passive"]
      ] : [
        [anchorEl.value, "mouseenter", "delayShow", "passive"],
        [anchorEl.value, "mouseleave", "delayHide", "passive"]
      ];
      addEvt(anchorEvents, "anchor", evts);
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        const fn = props.noParentEvent === true ? updatePosition : hide;
        changeScrollEvent(localScrollTarget.value, fn);
      }
    }
    function getTooltipContent() {
      return showing.value === true ? h("div", {
        ...attrs,
        ref: innerRef,
        class: [
          "q-tooltip q-tooltip--style q-position-engine no-pointer-events",
          attrs.class
        ],
        style: [
          attrs.style,
          transitionStyle.value
        ],
        role: "tooltip"
      }, hSlot(slots.default)) : null;
    }
    function renderPortalContent() {
      return h(Transition, transitionProps.value, getTooltipContent);
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(vm.proxy, { updatePosition });
    return renderPortal;
  }
});
function run(e, btn, eVm) {
  if (btn.handler) {
    btn.handler(e, eVm, eVm.caret);
  } else {
    eVm.runCmd(btn.cmd, btn.param);
  }
}
function getGroup(children) {
  return h("div", { class: "q-editor__toolbar-group" }, children);
}
function getBtn(eVm, btn, clickHandler, active = false) {
  const toggled = active || (btn.type === "toggle" ? btn.toggled ? btn.toggled(eVm) : btn.cmd && eVm.caret.is(btn.cmd, btn.param) : false), child = [];
  if (btn.tip && eVm.$q.platform.is.desktop) {
    const Key = btn.key ? h("div", [
      h("small", `(CTRL + ${String.fromCharCode(btn.key)})`)
    ]) : null;
    child.push(
      h(QTooltip, { delay: 1e3 }, () => [
        h("div", { innerHTML: btn.tip }),
        Key
      ])
    );
  }
  return h(QBtn, {
    ...eVm.buttonProps.value,
    icon: btn.icon !== null ? btn.icon : void 0,
    color: toggled ? btn.toggleColor || eVm.props.toolbarToggleColor : btn.color || eVm.props.toolbarColor,
    textColor: toggled && !eVm.props.toolbarPush ? null : btn.textColor || eVm.props.toolbarTextColor,
    label: btn.label,
    disable: btn.disable ? typeof btn.disable === "function" ? btn.disable(eVm) : true : false,
    size: "sm",
    onClick(e) {
      clickHandler && clickHandler();
      run(e, btn, eVm);
    }
  }, () => child);
}
function getDropdown(eVm, btn) {
  const onlyIcons = btn.list === "only-icons";
  let label = btn.label, icon = btn.icon !== null ? btn.icon : void 0, contentClass, Items;
  function closeDropdown() {
    Dropdown.component.proxy.hide();
  }
  if (onlyIcons) {
    Items = btn.options.map((btn2) => {
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      return getBtn(eVm, btn2, closeDropdown, active);
    });
    contentClass = eVm.toolbarBackgroundClass.value;
    Items = [
      getGroup(Items)
    ];
  } else {
    const activeClass = eVm.props.toolbarToggleColor !== void 0 ? `text-${eVm.props.toolbarToggleColor}` : null;
    const inactiveClass = eVm.props.toolbarTextColor !== void 0 ? `text-${eVm.props.toolbarTextColor}` : null;
    const noIcons = btn.list === "no-icons";
    Items = btn.options.map((btn2) => {
      const disable = btn2.disable ? btn2.disable(eVm) : false;
      const active = btn2.type === void 0 ? eVm.caret.is(btn2.cmd, btn2.param) : false;
      if (active) {
        label = btn2.tip;
        icon = btn2.icon !== null ? btn2.icon : void 0;
      }
      const htmlTip = btn2.htmlTip;
      return h(QItem, {
        active,
        activeClass,
        clickable: true,
        disable,
        dense: true,
        onClick(e) {
          closeDropdown();
          eVm.contentRef.value !== null && eVm.contentRef.value.focus();
          eVm.caret.restore();
          run(e, btn2, eVm);
        }
      }, () => [
        noIcons === true ? null : h(
          QItemSection,
          {
            class: active ? activeClass : inactiveClass,
            side: true
          },
          () => h(QIcon, { name: btn2.icon !== null ? btn2.icon : void 0 })
        ),
        h(
          QItemSection,
          htmlTip ? () => h("div", { class: "text-no-wrap", innerHTML: btn2.htmlTip }) : btn2.tip ? () => h("div", { class: "text-no-wrap" }, btn2.tip) : void 0
        )
      ]);
    });
    contentClass = [eVm.toolbarBackgroundClass.value, inactiveClass];
  }
  const highlight = btn.highlight && label !== btn.label;
  const Dropdown = h(QBtnDropdown, {
    ...eVm.buttonProps.value,
    noCaps: true,
    noWrap: true,
    color: highlight ? eVm.props.toolbarToggleColor : eVm.props.toolbarColor,
    textColor: highlight && !eVm.props.toolbarPush ? null : eVm.props.toolbarTextColor,
    label: btn.fixedLabel ? btn.label : label,
    icon: btn.fixedIcon ? btn.icon !== null ? btn.icon : void 0 : icon,
    contentClass,
    onShow: (evt) => eVm.emit("dropdownShow", evt),
    onHide: (evt) => eVm.emit("dropdownHide", evt),
    onBeforeShow: (evt) => eVm.emit("dropdownBeforeShow", evt),
    onBeforeHide: (evt) => eVm.emit("dropdownBeforeHide", evt)
  }, () => Items);
  return Dropdown;
}
function getToolbar(eVm) {
  if (eVm.caret) {
    return eVm.buttons.value.filter((f) => {
      return !eVm.isViewingSource.value || f.find((fb) => fb.cmd === "viewsource");
    }).map((group) => getGroup(
      group.map((btn) => {
        if (eVm.isViewingSource.value && btn.cmd !== "viewsource") {
          return false;
        }
        if (btn.type === "slot") {
          return hSlot(eVm.slots[btn.slot]);
        }
        if (btn.type === "dropdown") {
          return getDropdown(eVm, btn);
        }
        return getBtn(eVm, btn);
      })
    ));
  }
}
function getFonts(defaultFont, defaultFontLabel, defaultFontIcon, fonts = {}) {
  const aliases = Object.keys(fonts);
  if (aliases.length === 0) {
    return {};
  }
  const def = {
    default_font: {
      cmd: "fontName",
      param: defaultFont,
      icon: defaultFontIcon,
      tip: defaultFontLabel
    }
  };
  aliases.forEach((alias) => {
    const name = fonts[alias];
    def[alias] = {
      cmd: "fontName",
      param: name,
      icon: defaultFontIcon,
      tip: name,
      htmlTip: `<font face="${name}">${name}</font>`
    };
  });
  return def;
}
function getLinkEditor(eVm) {
  if (eVm.caret) {
    const color = eVm.props.toolbarColor || eVm.props.toolbarTextColor;
    let link = eVm.editLinkUrl.value;
    const updateLink = () => {
      eVm.caret.restore();
      if (link !== eVm.editLinkUrl.value) {
        document.execCommand("createLink", false, link === "" ? " " : link);
      }
      eVm.editLinkUrl.value = null;
    };
    return [
      h("div", { class: `q-mx-xs text-${color}` }, `${eVm.$q.lang.editor.url}: `),
      h("input", {
        key: "qedt_btm_input",
        class: "col q-editor__link-input",
        value: link,
        onInput: (evt) => {
          stop(evt);
          link = evt.target.value;
        },
        onKeydown: (evt) => {
          if (shouldIgnoreKey(evt) === true) return;
          switch (evt.keyCode) {
            case 13:
              prevent(evt);
              return updateLink();
            case 27:
              prevent(evt);
              eVm.caret.restore();
              if (!eVm.editLinkUrl.value || eVm.editLinkUrl.value === "https://") {
                document.execCommand("unlink");
              }
              eVm.editLinkUrl.value = null;
              break;
          }
        }
      }),
      getGroup([
        h(QBtn, {
          key: "qedt_btm_rem",
          tabindex: -1,
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.remove,
          noCaps: true,
          onClick: () => {
            eVm.caret.restore();
            document.execCommand("unlink");
            eVm.editLinkUrl.value = null;
          }
        }),
        h(QBtn, {
          key: "qedt_btm_upd",
          ...eVm.buttonProps.value,
          label: eVm.$q.lang.label.update,
          noCaps: true,
          onClick: updateLink
        })
      ])
    ];
  }
}
const toString = Object.prototype.toString, hasOwn = Object.prototype.hasOwnProperty, notPlainObject = new Set(
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((name) => "[object " + name + "]")
);
function isPlainObject(obj) {
  if (obj !== Object(obj) || notPlainObject.has(toString.call(obj)) === true) {
    return false;
  }
  if (obj.constructor && hasOwn.call(obj, "constructor") === false && hasOwn.call(obj.constructor.prototype, "isPrototypeOf") === false) {
    return false;
  }
  let key;
  for (key in obj) {
  }
  return key === void 0 || hasOwn.call(obj, key);
}
function extend() {
  let options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, deep = false;
  const length = arguments.length;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (Object(target) !== target && typeof target !== "function") {
    target = {};
  }
  if (length === i) {
    target = this;
    i--;
  }
  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      for (name in options) {
        src = target[name];
        copy = options[name];
        if (target === copy) {
          continue;
        }
        if (deep === true && copy && ((copyIsArray = Array.isArray(copy)) || isPlainObject(copy) === true)) {
          if (copyIsArray === true) {
            clone = Array.isArray(src) === true ? src : [];
          } else {
            clone = isPlainObject(src) === true ? src : {};
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy !== void 0) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}
const QEditor = createComponent({
  name: "QEditor",
  props: {
    ...useDarkProps,
    ...useFullscreenProps,
    modelValue: {
      type: String,
      required: true
    },
    readonly: Boolean,
    disable: Boolean,
    minHeight: {
      type: String,
      default: "10rem"
    },
    maxHeight: String,
    height: String,
    definitions: Object,
    fonts: Object,
    placeholder: String,
    toolbar: {
      type: Array,
      validator: (v) => v.length === 0 || v.every((group) => group.length),
      // long line on purpose for API validation purposes:
      default: () => [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]]
    },
    toolbarColor: String,
    toolbarBg: String,
    toolbarTextColor: String,
    toolbarToggleColor: {
      type: String,
      default: "primary"
    },
    toolbarOutline: Boolean,
    toolbarPush: Boolean,
    toolbarRounded: Boolean,
    paragraphTag: {
      type: String,
      validator: (v) => ["div", "p"].includes(v),
      default: "div"
    },
    contentStyle: Object,
    contentClass: [Object, Array, String],
    square: Boolean,
    flat: Boolean,
    dense: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    "update:modelValue",
    "keydown",
    "click",
    "focus",
    "blur",
    "dropdownShow",
    "dropdownHide",
    "dropdownBeforeShow",
    "dropdownBeforeHide",
    "linkShow",
    "linkHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const splitAttrs = useSplitAttrs();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const editLinkUrl = ref(null);
    const isViewingSource = ref(false);
    const editable = computed(() => !props.readonly && !props.disable);
    let defaultFont, offsetBottom;
    let lastEmit = props.modelValue;
    {
      document.execCommand("defaultParagraphSeparator", false, props.paragraphTag);
      defaultFont = window.getComputedStyle(document.body).fontFamily;
    }
    const toolbarBackgroundClass = computed(() => props.toolbarBg ? ` bg-${props.toolbarBg}` : "");
    const buttonProps = computed(() => {
      const flat = props.toolbarOutline !== true && props.toolbarPush !== true;
      return {
        type: "a",
        flat,
        noWrap: true,
        outline: props.toolbarOutline,
        push: props.toolbarPush,
        rounded: props.toolbarRounded,
        dense: true,
        color: props.toolbarColor,
        disable: !editable.value,
        size: "sm"
      };
    });
    const buttonDef = computed(() => {
      const e = $q.lang.editor, i = $q.iconSet.editor;
      return {
        bold: { cmd: "bold", icon: i.bold, tip: e.bold, key: 66 },
        italic: { cmd: "italic", icon: i.italic, tip: e.italic, key: 73 },
        strike: { cmd: "strikeThrough", icon: i.strikethrough, tip: e.strikethrough, key: 83 },
        underline: { cmd: "underline", icon: i.underline, tip: e.underline, key: 85 },
        unordered: { cmd: "insertUnorderedList", icon: i.unorderedList, tip: e.unorderedList },
        ordered: { cmd: "insertOrderedList", icon: i.orderedList, tip: e.orderedList },
        subscript: { cmd: "subscript", icon: i.subscript, tip: e.subscript, htmlTip: "x<subscript>2</subscript>" },
        superscript: { cmd: "superscript", icon: i.superscript, tip: e.superscript, htmlTip: "x<superscript>2</superscript>" },
        link: { cmd: "link", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("link"), icon: i.hyperlink, tip: e.hyperlink, key: 76 },
        fullscreen: { cmd: "fullscreen", icon: i.toggleFullscreen, tip: e.toggleFullscreen, key: 70 },
        viewsource: { cmd: "viewsource", icon: i.viewSource, tip: e.viewSource },
        quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: i.quote, tip: e.quote, key: 81 },
        left: { cmd: "justifyLeft", icon: i.left, tip: e.left },
        center: { cmd: "justifyCenter", icon: i.center, tip: e.center },
        right: { cmd: "justifyRight", icon: i.right, tip: e.right },
        justify: { cmd: "justifyFull", icon: i.justify, tip: e.justify },
        print: { type: "no-state", cmd: "print", icon: i.print, tip: e.print, key: 80 },
        outdent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("outdent"), cmd: "outdent", icon: i.outdent, tip: e.outdent },
        indent: { type: "no-state", disable: (eVm2) => eVm2.caret && !eVm2.caret.can("indent"), cmd: "indent", icon: i.indent, tip: e.indent },
        removeFormat: { type: "no-state", cmd: "removeFormat", icon: i.removeFormat, tip: e.removeFormat },
        hr: { type: "no-state", cmd: "insertHorizontalRule", icon: i.hr, tip: e.hr },
        undo: { type: "no-state", cmd: "undo", icon: i.undo, tip: e.undo, key: 90 },
        redo: { type: "no-state", cmd: "redo", icon: i.redo, tip: e.redo, key: 89 },
        h1: { cmd: "formatBlock", param: "H1", icon: i.heading1 || i.heading, tip: e.heading1, htmlTip: `<h1 class="q-ma-none">${e.heading1}</h1>` },
        h2: { cmd: "formatBlock", param: "H2", icon: i.heading2 || i.heading, tip: e.heading2, htmlTip: `<h2 class="q-ma-none">${e.heading2}</h2>` },
        h3: { cmd: "formatBlock", param: "H3", icon: i.heading3 || i.heading, tip: e.heading3, htmlTip: `<h3 class="q-ma-none">${e.heading3}</h3>` },
        h4: { cmd: "formatBlock", param: "H4", icon: i.heading4 || i.heading, tip: e.heading4, htmlTip: `<h4 class="q-ma-none">${e.heading4}</h4>` },
        h5: { cmd: "formatBlock", param: "H5", icon: i.heading5 || i.heading, tip: e.heading5, htmlTip: `<h5 class="q-ma-none">${e.heading5}</h5>` },
        h6: { cmd: "formatBlock", param: "H6", icon: i.heading6 || i.heading, tip: e.heading6, htmlTip: `<h6 class="q-ma-none">${e.heading6}</h6>` },
        p: { cmd: "formatBlock", param: props.paragraphTag, icon: i.heading, tip: e.paragraph },
        code: { cmd: "formatBlock", param: "PRE", icon: i.code, htmlTip: `<code>${e.code}</code>` },
        "size-1": { cmd: "fontSize", param: "1", icon: i.size1 || i.size, tip: e.size1, htmlTip: `<font size="1">${e.size1}</font>` },
        "size-2": { cmd: "fontSize", param: "2", icon: i.size2 || i.size, tip: e.size2, htmlTip: `<font size="2">${e.size2}</font>` },
        "size-3": { cmd: "fontSize", param: "3", icon: i.size3 || i.size, tip: e.size3, htmlTip: `<font size="3">${e.size3}</font>` },
        "size-4": { cmd: "fontSize", param: "4", icon: i.size4 || i.size, tip: e.size4, htmlTip: `<font size="4">${e.size4}</font>` },
        "size-5": { cmd: "fontSize", param: "5", icon: i.size5 || i.size, tip: e.size5, htmlTip: `<font size="5">${e.size5}</font>` },
        "size-6": { cmd: "fontSize", param: "6", icon: i.size6 || i.size, tip: e.size6, htmlTip: `<font size="6">${e.size6}</font>` },
        "size-7": { cmd: "fontSize", param: "7", icon: i.size7 || i.size, tip: e.size7, htmlTip: `<font size="7">${e.size7}</font>` }
      };
    });
    const buttons = computed(() => {
      const userDef = props.definitions || {};
      const def = props.definitions || props.fonts ? extend(
        true,
        {},
        buttonDef.value,
        userDef,
        getFonts(
          defaultFont,
          $q.lang.editor.defaultFont,
          $q.iconSet.editor.font,
          props.fonts
        )
      ) : buttonDef.value;
      return props.toolbar.map(
        (group) => group.map((token) => {
          if (token.options) {
            return {
              type: "dropdown",
              icon: token.icon,
              label: token.label,
              size: "sm",
              dense: true,
              fixedLabel: token.fixedLabel,
              fixedIcon: token.fixedIcon,
              highlight: token.highlight,
              list: token.list,
              options: token.options.map((item) => def[item])
            };
          }
          const obj = def[token];
          if (obj) {
            return obj.type === "no-state" || userDef[token] && (obj.cmd === void 0 || buttonDef.value[obj.cmd] && buttonDef.value[obj.cmd].type === "no-state") ? obj : Object.assign({ type: "toggle" }, obj);
          } else {
            return {
              type: "slot",
              slot: token
            };
          }
        })
      );
    });
    const eVm = {
      $q,
      props,
      slots,
      emit,
      // caret (will get injected after mount)
      inFullscreen,
      toggleFullscreen,
      runCmd,
      isViewingSource,
      editLinkUrl,
      toolbarBackgroundClass,
      buttonProps,
      contentRef,
      buttons,
      setContent
    };
    watch(() => props.modelValue, (v) => {
      if (lastEmit !== v) {
        lastEmit = v;
        setContent(v, true);
      }
    });
    watch(editLinkUrl, (v) => {
      emit(`link${v ? "Show" : "Hide"}`);
    });
    const hasToolbar = computed(() => props.toolbar && props.toolbar.length !== 0);
    const keys = computed(() => {
      const k = {}, add = (btn) => {
        if (btn.key) {
          k[btn.key] = {
            cmd: btn.cmd,
            param: btn.param
          };
        }
      };
      buttons.value.forEach((group) => {
        group.forEach((token) => {
          if (token.options) {
            token.options.forEach(add);
          } else {
            add(token);
          }
        });
      });
      return k;
    });
    const innerStyle = computed(() => inFullscreen.value ? props.contentStyle : [
      {
        minHeight: props.minHeight,
        height: props.height,
        maxHeight: props.maxHeight
      },
      props.contentStyle
    ]);
    const classes = computed(
      () => `q-editor q-editor--${isViewingSource.value === true ? "source" : "default"}` + (props.disable === true ? " disabled" : "") + (inFullscreen.value === true ? " fullscreen column" : "") + (props.square === true ? " q-editor--square no-border-radius" : "") + (props.flat === true ? " q-editor--flat" : "") + (props.dense === true ? " q-editor--dense" : "") + (isDark.value === true ? " q-editor--dark q-dark" : "")
    );
    const innerClass = computed(() => [
      props.contentClass,
      "q-editor__content",
      { col: inFullscreen.value, "overflow-auto": inFullscreen.value || props.maxHeight }
    ]);
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    function onInput() {
      if (contentRef.value !== null) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        const val = contentRef.value[prop];
        if (val !== props.modelValue) {
          lastEmit = val;
          emit("update:modelValue", val);
        }
      }
    }
    function onKeydown(e) {
      emit("keydown", e);
      if (e.ctrlKey !== true || shouldIgnoreKey(e) === true) {
        refreshToolbar();
        return;
      }
      const key = e.keyCode;
      const target = keys.value[key];
      if (target !== void 0) {
        const { cmd, param } = target;
        stopAndPrevent(e);
        runCmd(cmd, param, false);
      }
    }
    function onClick(e) {
      refreshToolbar();
      emit("click", e);
    }
    function onBlur(e) {
      if (contentRef.value !== null) {
        const { scrollTop, scrollHeight } = contentRef.value;
        offsetBottom = scrollHeight - scrollTop;
      }
      eVm.caret.save();
      emit("blur", e);
    }
    function onFocus(e) {
      nextTick(() => {
        if (contentRef.value !== null && offsetBottom !== void 0) {
          contentRef.value.scrollTop = contentRef.value.scrollHeight - offsetBottom;
        }
      });
      emit("focus", e);
    }
    function onFocusin(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        eVm.caret.restorePosition(contentRef.value[prop].length);
        refreshToolbar();
      }
    }
    function onFocusout(e) {
      const root = rootRef.value;
      if (root !== null && root.contains(e.target) === true && (e.relatedTarget === null || root.contains(e.relatedTarget) !== true)) {
        eVm.caret.savePosition();
        refreshToolbar();
      }
    }
    function onPointerStart() {
      offsetBottom = void 0;
    }
    function onSelectionchange(e) {
      eVm.caret.save();
    }
    function setContent(v, restorePosition) {
      if (contentRef.value !== null) {
        if (restorePosition === true) {
          eVm.caret.savePosition();
        }
        const prop = `inner${isViewingSource.value === true ? "Text" : "HTML"}`;
        contentRef.value[prop] = v;
        if (restorePosition === true) {
          eVm.caret.restorePosition(contentRef.value[prop].length);
          refreshToolbar();
        }
      }
    }
    function runCmd(cmd, param, update = true) {
      focus();
      eVm.caret.restore();
      eVm.caret.apply(cmd, param, () => {
        focus();
        eVm.caret.save();
        if (update) {
          refreshToolbar();
        }
      });
    }
    function refreshToolbar() {
      setTimeout(() => {
        editLinkUrl.value = null;
        proxy.$forceUpdate();
      }, 1);
    }
    function focus() {
      addFocusFn(() => {
        contentRef.value !== null && contentRef.value.focus({ preventScroll: true });
      });
    }
    function getContentEl() {
      return contentRef.value;
    }
    onMounted(() => {
      eVm.caret = proxy.caret = new Caret(contentRef.value, eVm);
      setContent(props.modelValue);
      refreshToolbar();
      document.addEventListener("selectionchange", onSelectionchange);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("selectionchange", onSelectionchange);
    });
    Object.assign(proxy, {
      runCmd,
      refreshToolbar,
      focus,
      getContentEl
    });
    return () => {
      let toolbars;
      if (hasToolbar.value) {
        const bars = [
          h("div", {
            key: "qedt_top",
            class: "q-editor__toolbar row no-wrap scroll-x" + toolbarBackgroundClass.value
          }, getToolbar(eVm))
        ];
        editLinkUrl.value !== null && bars.push(
          h("div", {
            key: "qedt_btm",
            class: "q-editor__toolbar row no-wrap items-center scroll-x" + toolbarBackgroundClass.value
          }, getLinkEditor(eVm))
        );
        toolbars = h("div", {
          key: "toolbar_ctainer",
          class: "q-editor__toolbars-container"
        }, bars);
      }
      return h("div", {
        ref: rootRef,
        class: classes.value,
        style: { height: inFullscreen.value === true ? "100%" : null },
        ...attributes.value,
        onFocusin,
        onFocusout
      }, [
        toolbars,
        h("div", {
          ref: contentRef,
          style: innerStyle.value,
          class: innerClass.value,
          contenteditable: editable.value,
          placeholder: props.placeholder,
          ...{},
          ...splitAttrs.listeners.value,
          onInput,
          onKeydown,
          onClick,
          onBlur,
          onFocus,
          // clean saved scroll position
          onMousedown: onPointerStart,
          onTouchstartPassive: onPointerStart
        })
      ]);
    };
  }
});
const _hoisted_1 = { class: "row q-mb-xl" };
const _hoisted_2 = { class: "col-6" };
const _hoisted_3 = { class: "col-6" };
const _hoisted_4 = { class: "flex q-mb-xl" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "q-mb-xl" };
const _hoisted_7 = { class: "q-mb-xl" };
const _hoisted_8 = {
  key: 0,
  class: "flex justify-end items-center q-py-xl"
};
const _hoisted_9 = { class: "q-mr-lg" };
const _hoisted_10 = {
  key: 0,
  class: "q-mr-lg"
};
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "label-alt" };
const _sfc_main = {
  __name: "InterviewForm",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const store = useCandidateStore();
    onMounted(async () => {
      store.id = props.candidateId;
      await store.fetchCandidate();
      await fetchQuestions();
      await fetchInterview();
    });
    const loading = ref(false);
    const errors = ref({});
    const interviewQuestions = ref([]);
    const interview = ref({
      id: null,
      interviewee_name: "John Doe",
      interviewee_relationship: "padre",
      candidate_id: props.candidateId,
      content: "",
      observation: "",
      apgar_rank: 1,
      sphincters_control: 1,
      signed_at: null,
      answers: []
    });
    async function fetchInterview() {
      try {
        interview.value = (await api.get(`/interviews/?candidate_id=${props.candidateId}`)).data.data;
      } catch (error) {
        if (error.status == 404) return;
      }
    }
    async function fetchQuestions() {
      interviewQuestions.value = (await api.get("interview_questions")).data.data;
    }
    async function storeInterview() {
      loading.value = true;
      let route = interview.value.id ? `interviews/${interview.value.id}` : "interviews";
      let data = { ...interview.value, interviewee: store.interviewee };
      if (interview.value.id) {
        data._method = "PUT";
      }
      try {
        interview.value = (await api.post(route, data)).data.data;
        Notify.create({ caption: "Guardado con éxito", icon: "sym_o_check_circle", iconColor: "positive" });
      } catch (error) {
        Notify.create({ caption: "Error. Revise la informacion", icon: "sym_o_info", iconColor: "negative" });
        errors.value = error.formatted ? error.formatted : errors.value.formatted;
        nextTick(() => scrollToFirstError());
      }
      loading.value = false;
    }
    async function signInterview() {
      interview.value.signed_at = /* @__PURE__ */ new Date();
      await storeInterview();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[11] || (_cache[11] = createBaseVNode("div", { class: "page-title" }, "Entrevista", -1)),
          createVNode(_sfc_main$1, {
            "candidate-id": __props.candidateId,
            type: "interview"
          }, null, 8, ["candidate-id"]),
          _cache[12] || (_cache[12] = createBaseVNode("div", { class: "label-alt-2" }, "Lista de preguntas", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QList, { dense: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(interviewQuestions.value, (question, n) => {
                    return openBlock(), createBlock(QItem, {
                      clickable: !Boolean(interview.value.signed_at),
                      key: question.id
                    }, {
                      default: withCtx(() => [
                        createVNode(QItemSection, {
                          side: "",
                          top: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(QCheckbox, {
                              disable: Boolean(interview.value.signed_at),
                              modelValue: interview.value.answers,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => interview.value.answers = $event),
                              val: question.id
                            }, null, 8, ["disable", "modelValue", "val"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(n + 1) + " - " + toDisplayString(question.question_text), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["clickable"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QEditor, {
                dense: "",
                modelValue: interview.value.content,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => interview.value.content = $event),
                disable: Boolean(interview.value.signed_at),
                class: normalizeClass({ "q-field--error": !!errors.value.content }),
                "error-message": errors.value.content,
                style: { "height": "100%" }
              }, null, 8, ["modelValue", "disable", "class", "error-message"])
            ])
          ]),
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "label-alt" }, " 29 - Que calificacion APGAR tuvo al nacer? Seleccione una opción ", -1)),
          createBaseVNode("div", _hoisted_4, [
            (openBlock(), createElementBlock(Fragment, null, renderList(10, (n) => {
              return createBaseVNode("div", {
                key: n,
                class: normalizeClass(["btn-rank", { "btn-rank--active": interview.value.apgar_rank == n }]),
                onClick: ($event) => !interview.value.signed_at ? interview.value.apgar_rank = n : ""
              }, toDisplayString(n), 11, _hoisted_5);
            }), 64))
          ]),
          _cache[14] || (_cache[14] = createBaseVNode("div", { class: "label-alt" }, " 30 - ¿Controla esfínteres? ", -1)),
          createBaseVNode("div", _hoisted_6, [
            createVNode(QRadio, {
              modelValue: interview.value.sphincters_control,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => interview.value.sphincters_control = $event),
              label: "Si",
              val: 1,
              disable: !!interview.value.signed_at
            }, null, 8, ["modelValue", "disable"]),
            createVNode(QRadio, {
              modelValue: interview.value.sphincters_control,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => interview.value.sphincters_control = $event),
              label: "No",
              val: 0,
              disable: !!interview.value.signed_at
            }, null, 8, ["modelValue", "disable"])
          ]),
          _cache[15] || (_cache[15] = createBaseVNode("div", { class: "label-alt" }, " 31 - Observaciones adicionales por parte del evaluador: ", -1)),
          createBaseVNode("div", _hoisted_7, [
            createVNode(QInput, {
              outlined: "",
              type: "textarea",
              modelValue: interview.value.observation,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => interview.value.observation = $event),
              disable: !!interview.value.signed_at,
              readonly: !!interview.value.signed_at
            }, null, 8, ["modelValue", "disable", "readonly"])
          ]),
          !interview.value.signed_at ? (openBlock(), createElementBlock("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(QTooltip, {
                anchor: "top right",
                self: "bottom end",
                class: "bg-black text-white q-py-sm q-px-md",
                style: { "font-size": "14px", "width": "154px" }
              }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode(" Al guardarlo podrá seguir editando ")
                ])),
                _: 1
              }),
              createVNode(QIcon, {
                name: "info",
                size: "24px",
                class: "q-mr-sm"
              }),
              createVNode(QBtn, {
                loading: loading.value,
                outline: "",
                color: "primary",
                onClick: _cache[5] || (_cache[5] = ($event) => storeInterview())
              }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode(" Guardar ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            interview.value.id ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(QTooltip, {
                anchor: "top right",
                self: "bottom end",
                class: "bg-black text-white q-py-sm q-px-md",
                style: { "font-size": "14px", "width": "154px" }
              }, {
                default: withCtx(() => _cache[9] || (_cache[9] = [
                  createTextVNode(" Al firmar ya no podrá editarlo ")
                ])),
                _: 1
              }),
              createVNode(QIcon, {
                name: "info",
                size: "24px",
                class: "q-mr-sm"
              }),
              createVNode(QBtn, {
                loading: loading.value,
                color: "primary",
                onClick: _cache[6] || (_cache[6] = ($event) => signInterview())
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode(" Firmar ")
                ])),
                _: 1
              }, 8, ["loading"])
            ])) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, "Firmado el: " + toDisplayString(interview.value.signed_at), 1)
          ]))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
