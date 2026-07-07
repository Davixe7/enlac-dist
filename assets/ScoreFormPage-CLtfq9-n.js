import { g as getCurrentInstance, i as inject, e as emptyRenderFn, l as layoutKey, a as computed, b as hSlot, h, c as createComponent, r as ref, O as createElementBlock, H as openBlock, J as createVNode, I as withCtx, U as QBtn, a7 as QInput, G as createBlock, b4 as normalizeProps, b5 as guardReactiveProps, ab as normalizeClass, M as createTextVNode, S as toDisplayString, Z as createBaseVNode, a5 as QCard, L as createCommentVNode, a6 as QCardSection, ae as QCardActions, K as withDirectives, aa as QDialog, P as Fragment, w as watch, x as onMounted, ai as QRadio, a4 as api, Q as QIcon, R as renderList, af as withModifiers, a9 as QCheckbox } from "./index-D8dGxR_o.js";
import { a as QSelect } from "./QSelect-CrhGdhCv.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-C80OgkSj.js";
import { Q as QList } from "./QList-56XDwGA0.js";
import { Q as QImg } from "./QImg-BVxkkgtJ.js";
import { n as notify } from "./notify-BXzUQ3RT.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
import { Q as QTd } from "./QTd-BFLtCilK.js";
import { Q as QTable } from "./QTable-VflfFEGr.js";
import { C as ClosePopup } from "./ClosePopup-DRf8Xhae.js";
import { _ as _sfc_main$2 } from "./EnlacDate-BuLz5-Uh.js";
import { u as useCategoryStore } from "./category-store-C6ur-hkX.js";
import { _ as _sfc_main$3 } from "./IssuesForm-Di3bbNj7.js";
import "./QMenu-P9699Vod.js";
import "./selection-C01nRuKQ.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-CNbaPK8j.js";
import "./QMarkupTable-Ca2XLBMv.js";
import "./use-fullscreen-_EaDTVwW.js";
import "./QDate-CYhAd8p2.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-ikfWr-s6.js";
import "./date-CmgNuwIn.js";
import "./QPopupProxy-BAhvQzwo.js";
import "./QFile-DIN7Si1v.js";
import "./QForm-BZcpejmh.js";
import "./candidate-store-BD2-EgJ1.js";
const usePageStickyProps = {
  position: {
    type: String,
    default: "bottom-right",
    validator: (v) => [
      "top-right",
      "top-left",
      "bottom-right",
      "bottom-left",
      "top",
      "right",
      "bottom",
      "left"
    ].includes(v)
  },
  offset: {
    type: Array,
    validator: (v) => v.length === 2
  },
  expand: Boolean
};
function usePageSticky() {
  const { props, proxy: { $q } } = getCurrentInstance();
  const $layout = inject(layoutKey, emptyRenderFn);
  if ($layout === emptyRenderFn) {
    console.error("QPageSticky needs to be child of QLayout");
    return emptyRenderFn;
  }
  const attach = computed(() => {
    const pos = props.position;
    return {
      top: pos.indexOf("top") !== -1,
      right: pos.indexOf("right") !== -1,
      bottom: pos.indexOf("bottom") !== -1,
      left: pos.indexOf("left") !== -1,
      vertical: pos === "top" || pos === "bottom",
      horizontal: pos === "left" || pos === "right"
    };
  });
  const top = computed(() => $layout.header.offset);
  const right = computed(() => $layout.right.offset);
  const bottom = computed(() => $layout.footer.offset);
  const left = computed(() => $layout.left.offset);
  const style = computed(() => {
    let posX = 0, posY = 0;
    const side = attach.value;
    const dir = $q.lang.rtl === true ? -1 : 1;
    if (side.top === true && top.value !== 0) {
      posY = `${top.value}px`;
    } else if (side.bottom === true && bottom.value !== 0) {
      posY = `${-bottom.value}px`;
    }
    if (side.left === true && left.value !== 0) {
      posX = `${dir * left.value}px`;
    } else if (side.right === true && right.value !== 0) {
      posX = `${-dir * right.value}px`;
    }
    const css = { transform: `translate(${posX}, ${posY})` };
    if (props.offset) {
      css.margin = `${props.offset[1]}px ${props.offset[0]}px`;
    }
    if (side.vertical === true) {
      if (left.value !== 0) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${left.value}px`;
      }
      if (right.value !== 0) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${right.value}px`;
      }
    } else if (side.horizontal === true) {
      if (top.value !== 0) {
        css.top = `${top.value}px`;
      }
      if (bottom.value !== 0) {
        css.bottom = `${bottom.value}px`;
      }
    }
    return css;
  });
  const classes = computed(
    () => `q-page-sticky row flex-center fixed-${props.position} q-page-sticky--${props.expand === true ? "expand" : "shrink"}`
  );
  function getStickyContent(slots) {
    const content = hSlot(slots.default);
    return h(
      "div",
      {
        class: classes.value,
        style: style.value
      },
      props.expand === true ? content : [h("div", content)]
    );
  }
  return {
    $layout,
    getStickyContent
  };
}
const QPageSticky = createComponent({
  name: "QPageSticky",
  props: usePageStickyProps,
  setup(_, { slots }) {
    const { getStickyContent } = usePageSticky();
    return () => getStickyContent(slots);
  }
});
const _sfc_main$1 = {
  __name: "ScoresTable",
  props: {
    rows: { type: Array, default: () => [] },
    mode: { type: String, default: "user" },
    loading: { type: Boolean, default: false },
    disable: { type: Boolean, default: false },
    errors: { type: Object, default: () => ({}) },
    categoryId: { type: [String, Number], default: null }
  },
  setup(__props) {
    const props = __props;
    const infoDialog = ref(false);
    const selectedRow = ref(null);
    const openInfo = (row) => {
      selectedRow.value = row;
      infoDialog.value = true;
    };
    const columns = computed(() => {
      const baseCols = [
        {
          align: "left",
          name: "name",
          label: props.mode == "user" ? "Actividad" : "Beneficiario",
          field: (row) => props.mode == "user" ? row.activity.name : row.candidate.name
        },
        { align: "left", name: "goal_type", label: "Tipo", field: (row) => row.activity.goal_type }
      ];
      baseCols.push({ align: "left", name: "qualify", label: "Dato Real" });
      if (String(props.categoryId) !== "2") {
        baseCols.push({
          align: "center",
          name: "daily_goal",
          label: "Meta Diaria",
          field: (row) => row.activity.daily_goal || "-"
        });
        baseCols.push({
          align: "center",
          name: "final_goal",
          label: "Meta Final",
          field: (row) => row.activity.final_goal || "-"
        });
        baseCols.push({ align: "center", name: "info", label: "Detalles" });
      }
      baseCols.push({ align: "left", name: "comments", label: "Comentarios" });
      return baseCols;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QTable, {
          bordered: "",
          flat: "",
          loading: __props.loading,
          columns: columns.value,
          rows: __props.rows,
          pagination: { rowsPerPage: 0 },
          "no-data-label": "NO HAY RESULTADOS PARA MOSTRAR"
        }, {
          "body-cell-qualify": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                props2.row.activity.goal_type != "Dominio" ? (openBlock(), createBlock(QInput, {
                  key: 0,
                  disable: __props.disable || props2.row.closed == 1,
                  type: "number",
                  borderless: "",
                  filled: "",
                  modelValue: props2.row.score,
                  "onUpdate:modelValue": ($event) => props2.row.score = $event,
                  style: { "max-width": "125px" }
                }, null, 8, ["disable", "modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(QSelect, {
                  key: 1,
                  disable: __props.disable || props2.row.closed == 1,
                  dense: "",
                  outlined: "",
                  options: [
                    { color: "text-red", label: "Ninguno", value: "ninguno" },
                    { color: "text-orange", label: "Presentada", value: "presentada" },
                    { color: "text-orange", label: "En proceso", value: "en proceso" },
                    { color: "text-green", label: "Dominada", value: "dominada" }
                  ],
                  modelValue: props2.row.score,
                  "onUpdate:modelValue": ($event) => props2.row.score = $event,
                  "emit-value": "",
                  "map-options": "",
                  style: { "max-width": "140px" }
                }, {
                  "selected-item": withCtx((scope) => [
                    createBaseVNode("span", {
                      class: normalizeClass(scope.opt.color)
                    }, toDisplayString(scope.opt.label), 3)
                  ]),
                  option: withCtx((scope) => [
                    createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                      default: withCtx(() => [
                        createVNode(QItemSection, null, {
                          default: withCtx(() => [
                            createVNode(QItemLabel, {
                              class: normalizeClass(scope.opt.color)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(scope.opt.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1040)
                  ]),
                  _: 2
                }, 1032, ["disable", "modelValue", "onUpdate:modelValue"]))
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-comments": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QInput, {
                  modelValue: props2.row.comments,
                  "onUpdate:modelValue": ($event) => props2.row.comments = $event,
                  dense: "",
                  outlined: "",
                  disable: __props.disable || props2.row.closed == 1,
                  placeholder: "Añadir comentario..."
                }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-info": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  color: "warning",
                  icon: "sym_o_priority_high",
                  onClick: ($event) => openInfo(props2.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["loading", "columns", "rows"]),
        createVNode(QDialog, {
          modelValue: infoDialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => infoDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "500px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "text-h6" }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode("Detalles de la Actividad")
                  ])),
                  _: 1
                }),
                selectedRow.value ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                  default: withCtx(() => [
                    createBaseVNode("p", null, [
                      _cache[2] || (_cache[2] = createBaseVNode("strong", null, "Actividad:", -1)),
                      createTextVNode(" " + toDisplayString(selectedRow.value.activity.name), 1)
                    ]),
                    createBaseVNode("p", null, [
                      _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Intensidad:", -1)),
                      createTextVNode(" " + toDisplayString(selectedRow.value.activity.intensity), 1)
                    ]),
                    createBaseVNode("p", null, [
                      _cache[4] || (_cache[4] = createBaseVNode("strong", null, "Frecuencia:", -1)),
                      createTextVNode(" " + toDisplayString(selectedRow.value.activity.frequency), 1)
                    ]),
                    createBaseVNode("p", null, [
                      _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Duración:", -1)),
                      createTextVNode(" " + toDisplayString(selectedRow.value.activity.duration), 1)
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "Cerrar",
                      color: "primary"
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-md-12 q-mx-auto q-gutter-y-md" };
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "page-title q-mb-none" };
const _hoisted_5 = { class: "flex q-gutter-x-md" };
const _hoisted_6 = { class: "q-gutter-y-md" };
const _hoisted_7 = { class: "flex" };
const _hoisted_8 = {
  key: 1,
  class: "flex justify-end q-gutter-x-md q-mt-md"
};
const _hoisted_9 = {
  key: 2,
  class: "q-mt-md"
};
const _hoisted_10 = {
  key: 3,
  class: "text-negative"
};
const _hoisted_11 = {
  key: 4,
  class: "text-center"
};
const _hoisted_12 = { class: "flex justify-center items-center" };
const _sfc_main = {
  __name: "ScoreFormPage",
  props: {
    categoryName: { type: String, required: true }
  },
  setup(__props) {
    const props = __props;
    const category = ref(false);
    const loading = ref(false);
    const savingScores = ref(false);
    const groups = ref([]);
    const groupId = ref(null);
    async function fetchGroups() {
      try {
        loading.value = true;
        let response = (await api.get(`groups/?plan_category_id=${category.value.id}`)).data.data;
        response.push({ name: "Seleccionar grupo", id: null });
        groups.value = response;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los grupos");
      } finally {
        loading.value = false;
      }
    }
    const searchType = ref("user");
    const searchQuery = ref("");
    const optionId = ref(null);
    const dateISO = ref(DateTime.now().toISODate().split("T")[0]);
    const dayClosed = computed(() => scores.value.some((score) => score.closed == 1));
    function clearForm() {
      loading.value = true;
      rows.value = [];
      searchQuery.value = "";
      optionId.value = null;
      scores.value = [];
    }
    watch(searchType, function() {
      clearForm();
      fetchScores();
    });
    watch(dateISO, function() {
      clearForm();
    });
    const emptySearch = computed(() => {
      if (loading.value == true) return false;
      return results.value.length === 0;
    });
    const deferredDate = computed(() => {
      if (!dateISO.value) return false;
      const dateISOparsed = DateTime.fromISO(dateISO.value).startOf("day");
      const today = DateTime.now().startOf("day");
      return dateISOparsed < today;
    });
    const categoryStore = useCategoryStore();
    const rows = ref([]);
    const scores = ref([]);
    async function fetchScores() {
      loading.value = true;
      let params = {
        category_id: category.value.id,
        mode: searchType.value
      };
      if (groupId.value) {
        params.group_id = groupId.value;
      }
      rows.value = (await api.get("activity_daily_scores", { params })).data.data;
      loading.value = false;
    }
    const results = computed(() => {
      if (!searchQuery.value) return rows.value;
      return rows.value.filter(
        (row) => row.name.toLowerCase().includes(searchQuery.value.toLocaleLowerCase())
      );
    });
    async function closeScores() {
      scores.value = scores.value.map((score) => ({ ...score, closed: 1 }));
    }
    async function storeScores(closed = false) {
      try {
        let data = { scores: scores.value, closed };
        errors.value = {};
        savingScores.value = true;
        await api.post("activity_daily_scores", data);
        notify.positive("Calificaciones guardadas con éxito");
        await fetchScores();
        scores.value = [...rows.value.find((row) => row.id == optionId.value).scores];
        if (closed == 1) closeScores();
      } catch (error) {
        console.log(error);
        notify.negative("Error al guardar calificaciones");
        if (error.formatted) errors.value = error.formatted;
      } finally {
        savingScores.value = false;
      }
    }
    function selectOption(option, toggleable = true) {
      if (option.id == optionId.value && toggleable) {
        optionId.value = null;
        scores.value = [];
        return;
      }
      optionId.value = option.id;
      scores.value = option.scores;
    }
    function openDialogFor(option) {
      selectOption(option, false);
      issuesDialog.value = true;
    }
    const errors = ref({});
    const issuesDialog = ref(false);
    onMounted(async () => {
      category.value = await categoryStore.getCategoryByName(props.categoryName);
      await fetchGroups();
      await fetchScores();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: issuesDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => issuesDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "sym_o_siren",
                      class: "q-mr-sm",
                      size: "1.25rem"
                    }),
                    _cache[13] || (_cache[13] = createBaseVNode("h1", { class: "page-subtitle q-my-none" }, "Registrar Incidencia", -1)),
                    createVNode(QBtn, {
                      onClick: _cache[0] || (_cache[0] = ($event) => issuesDialog.value = false),
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: "",
                      class: "q-ml-auto"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$3, {
                  "candidate-id": optionId.value,
                  onClose: _cache[1] || (_cache[1] = ($event) => issuesDialog.value = false)
                }, null, 8, ["candidate-id"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, " Calificar actividades " + toDisplayString(category.value ? `- ${category.value.label}` : ""), 1),
              createVNode(_sfc_main$2, {
                modelValue: dateISO.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dateISO.value = $event),
                class: "q-ml-auto"
              }, null, 8, ["modelValue"])
            ]),
            createVNode(QSelect, {
              options: groups.value,
              modelValue: groupId.value,
              "onUpdate:modelValue": [
                _cache[4] || (_cache[4] = ($event) => groupId.value = $event),
                _cache[5] || (_cache[5] = ($event) => fetchScores())
              ],
              "option-value": "id",
              "option-label": "name",
              outlined: "",
              clearable: "",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["options", "modelValue"]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QRadio, {
                modelValue: searchType.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => searchType.value = $event),
                val: "user",
                label: "Nombre de beneficiario"
              }, null, 8, ["modelValue"]),
              createVNode(QRadio, {
                modelValue: searchType.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => searchType.value = $event),
                val: "activity",
                label: "Seleccionar actividad"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(QInput, {
                type: "search",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: searchQuery.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => searchQuery.value = $event),
                clearable: "",
                debounce: "500"
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "sym_o_search" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              results.value ? (openBlock(), createBlock(QList, {
                key: 0,
                bordered: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: result.id
                    }, [
                      !optionId.value || result.id == optionId.value ? (openBlock(), createBlock(QItem, {
                        key: 0,
                        clickable: "",
                        onClick: ($event) => selectOption(result)
                      }, {
                        default: withCtx(() => [
                          createVNode(QItemSection, { avatar: "" }, {
                            default: withCtx(() => [
                              createVNode(QIcon, { name: "sym_o_account_circle" })
                            ]),
                            _: 1
                          }),
                          createVNode(QItemSection, { style: { "font-family": "monospace" } }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(result.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_7, [
                                createVNode(QBtn, {
                                  flat: "",
                                  round: "",
                                  icon: "sym_o_siren",
                                  class: "q-mr-md",
                                  onClick: withModifiers(() => openDialogFor(result), ["stop"])
                                }, null, 8, ["onClick"]),
                                createVNode(QCheckbox, {
                                  modelValue: optionId.value,
                                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => optionId.value = $event),
                                  val: result.id,
                                  "true-value": result.id,
                                  "false-value": null,
                                  style: { "pointer-events": "none" }
                                }, null, 8, ["modelValue", "val", "true-value"])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            optionId.value ? (openBlock(), createBlock(_sfc_main$1, {
              key: 0,
              rows: scores.value,
              "onUpdate:rows": _cache[10] || (_cache[10] = ($event) => scores.value = $event),
              "category-id": category.value?.id,
              readonly: deferredDate.value,
              mode: searchType.value,
              loading: loading.value,
              disable: savingScores.value,
              errors: errors.value
            }, null, 8, ["rows", "category-id", "readonly", "mode", "loading", "disable", "errors"])) : createCommentVNode("", true),
            scores.value && scores.value.length && !dayClosed.value ? (openBlock(), createElementBlock("div", _hoisted_8, [
              createVNode(QBtn, {
                disable: deferredDate.value || dayClosed.value,
                color: "primary",
                label: "Guardar calificaciones",
                onClick: _cache[11] || (_cache[11] = ($event) => storeScores(0)),
                loading: savingScores.value
              }, null, 8, ["disable", "loading"])
            ])) : dayClosed.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "bg-positive" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: "sym_o_done_all",
                        size: "1.5rem",
                        color: "green-1",
                        class: "q-mr-md"
                      }),
                      _cache[14] || (_cache[14] = createBaseVNode("span", { class: "text-green-1" }, "Dia cerrado, no se admiten actualizaciones.", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            emptySearch.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
              createVNode(QIcon, { name: "sym_o_info" }),
              _cache[15] || (_cache[15] = createTextVNode(" No hay resultados coincidentes con la busqueda "))
            ])) : createCommentVNode("", true),
            !optionId.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(QImg, {
                src: "/public/actividades.png",
                width: "200px"
              }),
              _cache[16] || (_cache[16] = createBaseVNode("h6", { class: "q-my-sm" }, "Selecciona un beneficiario o actividad", -1)),
              _cache[17] || (_cache[17] = createBaseVNode("p", null, "para empezar a evaluar", -1))
            ])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(QPageSticky, {
          expand: "",
          position: "top",
          offset: [0, 0],
          class: "z-top"
        }, {
          default: withCtx(() => [
            deferredDate.value ? (openBlock(), createBlock(QCard, {
              key: 0,
              square: "",
              class: "full-width shadow-2 q-pa-sm bg-warning"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_12, [
                  createVNode(QIcon, {
                    name: "sym_o_warning",
                    class: "q-mr-md"
                  }),
                  createBaseVNode("div", null, [
                    _cache[18] || (_cache[18] = createTextVNode(" Estás visualizando una fecha pasada, no se admiten modificaciones. ")),
                    createVNode(QBtn, {
                      unelevated: "",
                      dense: "",
                      label: "Ir a hoy",
                      onClick: _cache[12] || (_cache[12] = ($event) => dateISO.value = (/* @__PURE__ */ new Date()).toISOString().split("T")[0]),
                      class: "q-ml-sm q-pa-sm bg-dark text-white",
                      icon: "sym_o_event_upcoming"
                    })
                  ])
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
