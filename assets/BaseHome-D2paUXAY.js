import { c as createComponent, a as computed, h, b as hSlot, a0 as useDarkProps, g as getCurrentInstance, a1 as useDark, w as watch, a2 as isNumber, x as onMounted, o as onBeforeUnmount, a3 as hDir, U as QBtn, j as hMergeSlot, a4 as api, r as ref, Y as resolveComponent, G as createBlock, H as openBlock, I as withCtx, J as createVNode, Z as createBaseVNode, O as createElementBlock, P as Fragment, R as renderList, a5 as QCard, $ as normalizeStyle, a6 as QCardSection, S as toDisplayString, F as useAuthStore, L as createCommentVNode, N as unref } from "./index-CZ0dY6Fq.js";
import { u as usePanelChildProps, a as usePanelEmits, b as usePanelProps, c as usePanel } from "./use-panel-CqUNbnIN.js";
import { u as useFullscreenEmits, a as useFullscreenProps, b as useFullscreen } from "./use-fullscreen-DlLM7bjK.js";
import { Q as QImg } from "./QImg-u9OOrRwI.js";
import { Q as QPage } from "./QPage-BG0Lx9ix.js";
import { u as useCategoryStore } from "./category-store-MWzNgRyZ.js";
import "./touch-BscSWsHh.js";
import "./selection-CzAX6PqU.js";
import "./use-render-cache-DRJWLz-b.js";
const QCarouselSlide = createComponent({
  name: "QCarouselSlide",
  props: {
    ...usePanelChildProps,
    imgSrc: String
  },
  setup(props, { slots }) {
    const style = computed(() => props.imgSrc ? { backgroundImage: `url("${props.imgSrc}")` } : {});
    return () => h("div", {
      class: "q-carousel__slide",
      style: style.value
    }, hSlot(slots.default));
  }
});
const navigationPositionOptions = ["top", "right", "bottom", "left"];
const controlTypeOptions = ["regular", "flat", "outline", "push", "unelevated"];
const QCarousel = createComponent({
  name: "QCarousel",
  props: {
    ...useDarkProps,
    ...usePanelProps,
    ...useFullscreenProps,
    transitionPrev: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    transitionNext: {
      // usePanelParentProps override
      type: String,
      default: "fade"
    },
    height: String,
    padding: Boolean,
    controlColor: String,
    controlTextColor: String,
    controlType: {
      type: String,
      validator: (v) => controlTypeOptions.includes(v),
      default: "flat"
    },
    autoplay: [Number, Boolean],
    arrows: Boolean,
    prevIcon: String,
    nextIcon: String,
    navigation: Boolean,
    navigationPosition: {
      type: String,
      validator: (v) => navigationPositionOptions.includes(v)
    },
    navigationIcon: String,
    navigationActiveIcon: String,
    thumbnails: Boolean
  },
  emits: [
    ...useFullscreenEmits,
    ...usePanelEmits
  ],
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    let timer = null, panelsLen;
    const {
      updatePanelsList,
      getPanelContent,
      panelDirectives,
      goToPanel,
      previousPanel,
      nextPanel,
      getEnabledPanels,
      panelIndex
    } = usePanel();
    const { inFullscreen } = useFullscreen();
    const style = computed(() => inFullscreen.value !== true && props.height !== void 0 ? { height: props.height } : {});
    const direction = computed(() => props.vertical === true ? "vertical" : "horizontal");
    const navigationPosition = computed(
      () => props.navigationPosition || (props.vertical === true ? "right" : "bottom")
    );
    const classes = computed(
      () => `q-carousel q-panel-parent q-carousel--with${props.padding === true ? "" : "out"}-padding` + (inFullscreen.value === true ? " fullscreen" : "") + (isDark.value === true ? " q-carousel--dark q-dark" : "") + (props.arrows === true ? ` q-carousel--arrows-${direction.value}` : "") + (props.navigation === true ? ` q-carousel--navigation-${navigationPosition.value}` : "")
    );
    const arrowIcons = computed(() => {
      const ico = [
        props.prevIcon || $q.iconSet.carousel[props.vertical === true ? "up" : "left"],
        props.nextIcon || $q.iconSet.carousel[props.vertical === true ? "down" : "right"]
      ];
      return props.vertical === false && $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const navIcon = computed(() => props.navigationIcon || $q.iconSet.carousel.navigationIcon);
    const navActiveIcon = computed(() => props.navigationActiveIcon || navIcon.value);
    const controlProps = computed(() => ({
      color: props.controlColor,
      textColor: props.controlTextColor,
      round: true,
      [props.controlType]: true,
      dense: true
    }));
    watch(() => props.modelValue, () => {
      if (props.autoplay) {
        startTimer();
      }
    });
    watch(() => props.autoplay, (val) => {
      if (val) {
        startTimer();
      } else if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    function startTimer() {
      const duration = isNumber(props.autoplay) === true ? Math.abs(props.autoplay) : 5e3;
      timer !== null && clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        if (duration >= 0) {
          nextPanel();
        } else {
          previousPanel();
        }
      }, duration);
    }
    onMounted(() => {
      props.autoplay && startTimer();
    });
    onBeforeUnmount(() => {
      timer !== null && clearTimeout(timer);
    });
    function getNavigationContainer(type, mapping) {
      return h("div", {
        class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${type} q-carousel__navigation--${navigationPosition.value}` + (props.controlColor !== void 0 ? ` text-${props.controlColor}` : "")
      }, [
        h("div", {
          class: "q-carousel__navigation-inner flex flex-center no-wrap"
        }, getEnabledPanels().map(mapping))
      ]);
    }
    function getContent() {
      const node = [];
      if (props.navigation === true) {
        const fn = slots["navigation-icon"] !== void 0 ? slots["navigation-icon"] : (opts) => h(QBtn, {
          key: "nav" + opts.name,
          class: `q-carousel__navigation-icon q-carousel__navigation-icon--${opts.active === true ? "" : "in"}active`,
          ...opts.btnProps,
          onClick: opts.onClick
        });
        const maxIndex = panelsLen - 1;
        node.push(
          getNavigationContainer("buttons", (panel, index) => {
            const name = panel.props.name;
            const active = panelIndex.value === index;
            return fn({
              index,
              maxIndex,
              name,
              active,
              btnProps: {
                icon: active === true ? navActiveIcon.value : navIcon.value,
                size: "sm",
                ...controlProps.value
              },
              onClick: () => {
                goToPanel(name);
              }
            });
          })
        );
      } else if (props.thumbnails === true) {
        const color = props.controlColor !== void 0 ? ` text-${props.controlColor}` : "";
        node.push(getNavigationContainer("thumbnails", (panel) => {
          const slide = panel.props;
          return h("img", {
            key: "tmb#" + slide.name,
            class: `q-carousel__thumbnail q-carousel__thumbnail--${slide.name === props.modelValue ? "" : "in"}active` + color,
            src: slide.imgSrc || slide["img-src"],
            onClick: () => {
              goToPanel(slide.name);
            }
          });
        }));
      }
      if (props.arrows === true && panelIndex.value >= 0) {
        if (props.infinite === true || panelIndex.value > 0) {
          node.push(
            h("div", {
              key: "prev",
              class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[0],
                ...controlProps.value,
                onClick: previousPanel
              })
            ])
          );
        }
        if (props.infinite === true || panelIndex.value < panelsLen - 1) {
          node.push(
            h("div", {
              key: "next",
              class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${direction.value} absolute flex flex-center`
            }, [
              h(QBtn, {
                icon: arrowIcons.value[1],
                ...controlProps.value,
                onClick: nextPanel
              })
            ])
          );
        }
      }
      return hMergeSlot(slots.control, node);
    }
    return () => {
      panelsLen = updatePanelsList(slots);
      return h("div", {
        class: classes.value,
        style: style.value
      }, [
        hDir(
          "div",
          { class: "q-carousel__slides-container" },
          getPanelContent(),
          "sl-cont",
          props.swipeable,
          () => panelDirectives.value
        )
      ].concat(getContent()));
    };
  }
});
const _hoisted_1$1 = { class: "row q-col-gutter-lg" };
const _sfc_main$2 = {
  __name: "HomePage",
  setup(__props) {
    onMounted(async () => {
      slides.value = (await api.get("dashboard-slides")).data.data;
      slide.value = slides.value.length ? slides.value[0].id : null;
    });
    const slides = ref([]);
    const slide = ref(null);
    const modules = ref([
      {
        label: "Candidatos y Evaluaciones",
        color: "#EE8B0080",
        icon: "candidatos",
        path: "/candidatos"
      },
      {
        label: "Admisiones y Beneficiarios",
        color: "#DD004A80",
        icon: "beneficiarios",
        path: "/beneficiarios"
      },
      {
        label: "Tesorería",
        color: "#8DAF1280",
        icon: "tesoreria",
        path: "/tesoreria"
      },
      {
        label: "Padrinos",
        color: "#00659180",
        icon: "padrinos",
        path: "/padrinos"
      },
      {
        label: "Reportes de Programas",
        color: "#98007780",
        icon: "administracion",
        path: "/reportes"
      },
      {
        label: "Capacitaciones",
        color: "#D4242980",
        icon: "capacitaciones",
        path: "/capacitaciones"
      },
      {
        label: "Donantes",
        color: "#36087680",
        icon: "fondos",
        path: "/donors"
      },
      {
        label: "Personal ENLAC",
        color: "#A3B8FF",
        icon: "personal",
        path: "/"
      }
    ]);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(QCarousel, {
            autoplay: "",
            infinite: "",
            modelValue: slide.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => slide.value = $event),
            "transition-prev": "fade",
            "transition-next": "fade",
            "control-color": "white",
            swipeable: "",
            animated: "",
            navigation: "",
            arrows: "",
            height: "366px",
            class: "bg-grey-13 text-white rounded-borders q-mb-lg"
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(slides.value, (slide2) => {
                return openBlock(), createBlock(QCarouselSlide, {
                  key: slide2.id,
                  name: slide2.id,
                  class: "column no-wrap flex-center",
                  "img-src": slide2.picture
                }, null, 8, ["name", "img-src"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createBaseVNode("div", null, [
            createBaseVNode("div", _hoisted_1$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(modules.value, (module) => {
                return openBlock(), createElementBlock("div", {
                  class: "col col-12 col-md-3",
                  key: module.name
                }, [
                  createVNode(QCard, {
                    class: "module-card",
                    style: normalizeStyle({ background: module.color })
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_router_link, {
                        to: module.path
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, { style: { "padding": "36px" } }, {
                            default: withCtx(() => [
                              createVNode(QImg, {
                                src: `/${module.icon}.png`,
                                width: "74px",
                                fit: "contain"
                              }, null, 8, ["src"]),
                              createBaseVNode("div", null, toDisplayString(module.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ]),
                    _: 2
                  }, 1032, ["style"])
                ]);
              }), 128))
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "row q-col-gutter-xl" };
const _hoisted_2 = {
  key: 0,
  class: "col-12 col-sm-6"
};
const _hoisted_3 = { class: "page-subtitle q-mb-0" };
const _sfc_main$1 = {
  __name: "EmployeeHome",
  setup(__props) {
    const categoryStore = useCategoryStore();
    const auth = useAuthStore();
    const areaPermissions = ref({
      8: [1, 4, 5, 6],
      4: [3, 7],
      7: [2]
    });
    const driverOptions = [
      { role: "driver", path: "traslados/rubio", label: "TRASLADO CUAUHTÉMOC-RUBIO" },
      { role: "driver", path: "traslados/equinoterapia", label: "TRASLADO EQUINOTERPIA" }
    ];
    const categoryOptions = computed(() => {
      if (categoryStore.categories.length == 0) return [];
      return categoryStore.categories.map((item) => ({ ...item, path: `area/${item.name}/calificar` })).concat(driverOptions);
    });
    function isAllowed(option) {
      let allowedByArea = areaPermissions.value[auth.data.user.work_area_id] && areaPermissions.value[auth.data.user.work_area_id].some((allowed) => allowed == option.id);
      let allowedByRoleName = auth.data.user.role.name == option.role;
      return allowedByArea || allowedByRoleName;
    }
    onMounted(async () => {
      await categoryStore.fetchCategories({ base_only: 1 });
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title" }, "Seleccione el área:", -1)),
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(categoryOptions.value, (option) => {
              return openBlock(), createElementBlock(Fragment, {
                key: option.id
              }, [
                isAllowed(option) ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createVNode(_component_router_link, {
                    to: option.path,
                    style: { "text-decoration": "none !important" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QCard, {
                        bordered: "",
                        flat: "",
                        class: "home-menu-card"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCardSection, { class: "q-pa-xl" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_3, toDisplayString(option.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ])) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
const _sfc_main = {
  __name: "BaseHome",
  setup(__props) {
    const auth = useAuthStore();
    return (_ctx, _cache) => {
      return unref(auth).authMode == "admin" ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : (openBlock(), createBlock(_sfc_main$1, { key: 1 }));
    };
  }
};
export {
  _sfc_main as default
};
