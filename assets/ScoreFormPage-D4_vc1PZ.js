import { y as getCurrentInstance, a7 as inject, a8 as emptyRenderFn, a9 as layoutKey, A as computed, C as hSlot, B as h, v as createComponent, br as mergeModels, bs as useModel, q as createBlock, a as openBlock, w as withCtx, d as createVNode, Q as QInput, b as createBaseVNode, t as toDisplayString, bx as normalizeProps, by as guardReactiveProps, O as normalizeClass, j as createTextVNode, D as watch, p as useRoute, r as ref, o as onMounted, E as createCommentVNode, g as unref, k as QIcon, F as withDirectives, h as QBtn, l as api, c as createElementBlock, s as QDialog, L as QRadio, m as QCard, H as Fragment, n as QCardSection, K as renderList, i as QCheckbox } from "./index-CnPCrPcs.js";
import { a as QItem, Q as QItemSection, b as QItemLabel } from "./QItem-Ce5rFAfg.js";
import { Q as QList } from "./QList-B0uO-GP0.js";
import { Q as QImg } from "./QImg-YGiRXtAr.js";
import { n as notify } from "./notify-CvtyHu7z.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
import { Q as QTooltip } from "./QTooltip-ByDC8PTc.js";
import { Q as QTd } from "./QTd-BQhkgjsC.js";
import { Q as QSelect } from "./QSelect-2bl5SHtH.js";
import { Q as QTable } from "./QTable-5_0AeQ_Q.js";
import { _ as _sfc_main$3 } from "./EnlacDate-qMk6pUnv.js";
import { u as useCategoryStore } from "./category-store-DsnMZ8yz.js";
import { Q as QDate } from "./QDate-7g8-8pOA.js";
import { Q as QPopupProxy } from "./QPopupProxy-B2IRhZfT.js";
import { Q as QFile } from "./QFile-BRGuUy3O.js";
import { Q as QMarkupTable } from "./QMarkupTable-BQ20kKCe.js";
import { Q as QForm } from "./QForm-BuNZxJpY.js";
import { C as ClosePopup } from "./ClosePopup-c30KicH8.js";
import { u as useCandidateStore } from "./candidate-store-DkkgXyHj.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-DnzmeAgO.js";
import "./use-fullscreen-Be43hROf.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
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
const _hoisted_1$2 = { class: "multi-line-ellipsis" };
const _hoisted_2$2 = { style: { "font-size": "14px" } };
const _sfc_main$2 = {
  __name: "ScoresTable",
  props: /* @__PURE__ */ mergeModels({
    readonly: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    mode: { type: String, default: "user" },
    errors: { type: Object, default: () => ({}) }
  }, {
    "rows": { type: Array, default: () => [] },
    "rowsModifiers": {}
  }),
  emits: ["update:rows"],
  setup(__props) {
    const props = __props;
    const rows = useModel(__props, "rows");
    const columns = computed(() => {
      return props.mode == "user" ? [
        { align: "left", name: "name", label: "Actividad", field: (row) => row.activity.name },
        { align: "left", name: "goal_type", label: "Tipo", field: (row) => row.activity.goal_type },
        { align: "left", name: "daily_goal", label: "Meta diaria", field: (row) => row.activity.daily_goal },
        { align: "left", name: "final_goal", label: "Meta final", field: (row) => row.activity.final_goal },
        { align: "left", name: "qualify", label: "Dato Real" },
        { align: "left", name: "comments", label: "Comentario" }
      ] : [
        { align: "left", name: "name", label: "Beneficiario", field: (row) => row.candidate.name },
        { align: "left", name: "goal_type", label: "Tipo", field: (row) => row.activity.goal_type },
        { align: "left", name: "daily_goal", label: "Meta diaria", field: (row) => row.activity.daily_goal },
        { align: "left", name: "final_goal", label: "Meta final", field: (row) => row.activity.final_goal },
        { align: "left", name: "qualify", label: "Dato Real" },
        { align: "left", name: "comments", label: "Comentario" }
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QTable, {
        bordered: "",
        flat: "",
        dense: "",
        loading: __props.loading,
        columns: columns.value,
        rows: rows.value,
        pagination: { rowsPerPage: 0 },
        class: "q-mb-md activity-candidates-table",
        style: { "width": "100%" },
        "no-data-label": "NO HAY RESULTADOS PARA MOSTRAR"
      }, {
        "body-cell-name": withCtx((props2) => [
          createVNode(QTd, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, [
                createTextVNode(toDisplayString(props2.value) + " ", 1),
                createVNode(QTooltip, {
                  anchor: "top middle",
                  self: "bottom middle",
                  "max-width": "300px",
                  class: "bg-dark text-white shadow-4"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props2.value), 1)
                  ]),
                  _: 2
                }, 1024)
              ])
            ]),
            _: 2
          }, 1024)
        ]),
        "body-cell-qualify": withCtx((props2) => [
          createVNode(QTd, null, {
            default: withCtx(() => [
              props2.row.activity.goal_type != "Dominio" ? (openBlock(), createBlock(QInput, {
                key: 0,
                disable: __props.readonly || props2.row.closed == 1,
                type: "number",
                borderless: "",
                filled: "",
                modelValue: rows.value[props2.rowIndex].score,
                "onUpdate:modelValue": ($event) => rows.value[props2.rowIndex].score = $event,
                style: { "max-width": "125px" },
                error: __props.errors && !!__props.errors[`scores.${props2.rowIndex}.score`],
                "error-message": "Complete el campo"
              }, {
                append: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$2, toDisplayString(props2.row.activity.measurement_unit), 1)
                ]),
                _: 2
              }, 1032, ["disable", "modelValue", "onUpdate:modelValue", "error"])) : (openBlock(), createBlock(QSelect, {
                key: 1,
                disable: __props.readonly || props2.row.closed == 1,
                dense: "",
                outlined: "",
                options: [
                  { color: "text-black", label: "Ninguno", value: "presentaninguno" },
                  { color: "text-red", label: "Presentada", value: "presentada" },
                  { color: "text-orange", label: "En proceso", value: "en proceso" },
                  { color: "text-green", label: "Dominada", value: "dominada" }
                ],
                modelValue: rows.value[props2.rowIndex].score,
                "onUpdate:modelValue": ($event) => rows.value[props2.rowIndex].score = $event,
                "option-value": "value",
                "option-label": "label",
                "emit-value": "",
                "map-options": "",
                "use-chips": "",
                style: { "max-width": "125px" }
              }, {
                "selected-item": withCtx((scope) => [
                  createBaseVNode("div", {
                    class: normalizeClass([scope.opt.color, "q-py-xs"])
                  }, toDisplayString(scope.opt.label), 3)
                ]),
                option: withCtx((scope) => [
                  createVNode(QItem, normalizeProps(guardReactiveProps(scope.itemProps)), {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, {
                            class: normalizeClass(["text-weight-bold", scope.opt.color])
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
          }, 1024)
        ]),
        _: 1
      }, 8, ["loading", "columns", "rows"]);
    };
  }
};
const _hoisted_1$1 = { class: "full-width custom-table" };
const _hoisted_2$1 = { class: "q-pa-sm" };
const _hoisted_3$1 = { class: "q-py-lg" };
const _hoisted_4$1 = { class: "q-pa-sm" };
const _hoisted_5$1 = { class: "q-pa-sm" };
const _hoisted_6$1 = { class: "row items-center justify-end" };
const _hoisted_7$1 = { class: "q-pa-sm" };
const _hoisted_8$1 = { class: "q-pa-sm" };
const _hoisted_9$1 = { class: "q-pa-sm" };
const _hoisted_10$1 = { class: "row" };
const _hoisted_11$1 = { class: "q-pa-md flex justify-end" };
const _sfc_main$1 = {
  __name: "IssuesForm",
  props: ["candidateId"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const candidateStore = useCandidateStore();
    const props = __props;
    watch(() => props.candidateId, () => {
      candidateStore.$state.id = props.candidateId;
      candidateStore.fetchCandidate();
    });
    const route = useRoute();
    const category = ref(null);
    const subjects = ref([
      {
        id: 1,
        label: "Alimentación"
      },
      {
        id: 2,
        label: "Retardo"
      },
      {
        id: 3,
        label: "Higiene"
      },
      {
        id: 4,
        label: "Falta a Cita Médica"
      },
      {
        id: 5,
        label: "Falta a Cita Nutrición"
      },
      {
        id: 6,
        label: "Falta a Cita Psicología"
      },
      {
        id: 7,
        label: "Falta a Cita Comunicación"
      },
      {
        id: 8,
        label: "Falta a Capacitación"
      },
      {
        id: 9,
        label: "Falta a Reunión de Padres"
      },
      {
        id: 10,
        label: "Falta Actividades de Recaudación de Fondos"
      },
      {
        id: 11,
        label: "Indisciplina"
      },
      {
        id: 12,
        label: "Otro"
      }
    ]);
    const date = ref(DateTime.now().toFormat("dd/MM/yyyy"));
    const comments = ref("");
    const type = ref(null);
    const userId = ref(null);
    const users = ref([]);
    const loading = ref(false);
    const files = ref([]);
    const emit = __emit;
    async function fetchUsers() {
      try {
        loading.value = true;
        users.value = (await api.get("users")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const errors = ref([]);
    async function storeIssue() {
      try {
        loading.value = false;
        errors.value = {};
        let data = new FormData();
        data.append("candidate_id", props.candidateId);
        data.append("plan_category_id", category.value.id);
        data.append("user_id", userId.value);
        data.append("type", type.value);
        data.append("date", DateTime.fromFormat(date.value, "dd/MM/yyyy").toISODate());
        data.append("comments", comments.value);
        files.value.forEach((file) => {
          data.append("media[]", file);
        });
        await api.post("issues", data);
        notify.positive("Incidencia registrada con exito");
        emit("close");
      } catch (error) {
        if (error.formatted) {
          errors.value = error.formatted;
        }
        notify.negative("No se pudo registrar la incidencia");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      category.value = await useCategoryStore().getCategoryByName(route.params.categoryName);
      fetchUsers();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QForm, null, {
        default: withCtx(() => [
          createVNode(QMarkupTable, {
            flat: "",
            bordered: "",
            square: "",
            separator: "cell",
            dense: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("table", _hoisted_1$1, [
                createBaseVNode("tbody", null, [
                  createBaseVNode("tr", null, [
                    _cache[8] || (_cache[8] = createBaseVNode("td", null, "Área", -1)),
                    createBaseVNode("td", _hoisted_2$1, [
                      category.value ? (openBlock(), createBlock(QInput, {
                        key: 0,
                        "stack-label": "",
                        "hide-bottom-space": "",
                        outlined: "",
                        readonly: "",
                        modelValue: category.value.label,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => category.value.label = $event)
                      }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("td", null, "Beneficiario", -1)),
                    createBaseVNode("td", _hoisted_3$1, [
                      createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(candidateStore) ? unref(candidateStore).full_name : "Cargando..."), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("td", null, "Fecha", -1)),
                    createBaseVNode("td", _hoisted_5$1, [
                      createVNode(QInput, {
                        outlined: "",
                        "stack-label": "",
                        modelValue: date.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => date.value = $event),
                        class: "q-field--required"
                      }, {
                        append: withCtx(() => [
                          createVNode(QIcon, {
                            name: "event",
                            class: "cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode(QPopupProxy, {
                                cover: "",
                                "transition-show": "scale",
                                "transition-hide": "scale"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QDate, {
                                    modelValue: date.value,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => date.value = $event),
                                    mask: "DD/MM/YYYY"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_6$1, [
                                        withDirectives(createVNode(QBtn, {
                                          label: "Cerrar",
                                          color: "primary",
                                          flat: "",
                                          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.dialog = false)
                                        }, null, 512), [
                                          [ClosePopup]
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[11] || (_cache[11] = createBaseVNode("td", null, "Reportó", -1)),
                    createBaseVNode("td", _hoisted_7$1, [
                      createVNode(QSelect, {
                        dense: "",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: userId.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => userId.value = $event),
                        options: users.value,
                        "option-label": "name",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": "",
                        error: !!errors.value["user_id"],
                        "error-message": errors.value["user_id"]
                      }, null, 8, ["modelValue", "options", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("td", null, "Tipo", -1)),
                    createBaseVNode("td", _hoisted_8$1, [
                      createVNode(QSelect, {
                        dense: "",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: type.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => type.value = $event),
                        options: subjects.value,
                        "option-label": "label",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": "",
                        error: !!errors.value["type"],
                        "error-message": errors.value["type"]
                      }, null, 8, ["modelValue", "options", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[13] || (_cache[13] = createBaseVNode("td", null, "Comentarios", -1)),
                    createBaseVNode("td", _hoisted_9$1, [
                      createVNode(QInput, {
                        type: "textarea",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: comments.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => comments.value = $event),
                        error: !!errors.value["comments"],
                        "error-message": errors.value["comments"]
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("td", null, "Adjuntos", -1)),
                    createBaseVNode("td", null, [
                      createBaseVNode("div", _hoisted_10$1, [
                        createVNode(QFile, {
                          ref: "filePicker",
                          modelValue: files.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => files.value = $event),
                          append: "",
                          multiple: "",
                          "use-chips": "",
                          outlined: "",
                          class: "full-width"
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_11$1, [
            createVNode(QBtn, {
              color: "primary",
              label: "Guardar",
              loading: loading.value,
              onClick: storeIssue
            }, null, 8, ["loading"])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-md-8 q-mx-auto q-gutter-y-md" };
const _hoisted_3 = { class: "flex" };
const _hoisted_4 = { class: "page-title q-mb-none" };
const _hoisted_5 = { class: "flex q-gutter-x-md" };
const _hoisted_6 = { class: "q-gutter-y-md" };
const _hoisted_7 = { class: "flex q-gutter-x-md" };
const _hoisted_8 = { class: "flex" };
const _hoisted_9 = {
  key: 0,
  class: "flex justify-end q-gutter-x-md"
};
const _hoisted_10 = { key: 1 };
const _hoisted_11 = {
  key: 3,
  class: "flex justify-end q-gutter-x-md"
};
const _hoisted_12 = {
  key: 4,
  class: "text-negative"
};
const _hoisted_13 = {
  key: 5,
  class: "text-center"
};
const _hoisted_14 = { class: "flex justify-center items-center" };
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
      if (loading.value == true) {
        return false;
      }
      if (results.value.length == 0) {
        return true;
      }
      return false;
    });
    const deferredDate = computed(() => {
      if (!dateISO.value) return false;
      const dateISOparsed = DateTime.fromISO(dateISO.value).startOf("day");
      const today = DateTime.now().startOf("day");
      return dateISOparsed < today;
    });
    const isClosable = computed(() => {
      return scores.value.some((score) => score.id);
    });
    const categoryStore = useCategoryStore();
    const rows = ref([]);
    const scores = ref([]);
    async function fetchScores() {
      loading.value = true;
      rows.value = (await api.get(`activity_daily_scores/?category_id=${category.value.id}&mode=${searchType.value}`)).data.data;
      loading.value = false;
    }
    const results = computed(() => {
      if (!searchQuery.value) {
        return rows.value;
      }
      return rows.value.filter((row) => row.name.toLowerCase().includes(searchQuery.value.toLocaleLowerCase()));
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
        notify.positive("Calificaciones guardas con exito");
        await fetchScores();
        scores.value = [...rows.value.find((row) => row.id == optionId.value).scores];
        if (closed == 1) {
          closeScores();
        }
      } catch (error) {
        console.log(error);
        notify.negative("Error al guardar calificaciones");
        if (error.formatted) {
          errors.value = error.formatted;
        }
      } finally {
        savingScores.value = false;
      }
    }
    function selectOption(option) {
      if (option.id == optionId.value) {
        optionId.value = null;
        scores.value = [];
        return;
      }
      optionId.value = option.id;
      scores.value = option.scores;
    }
    const errors = ref({});
    const issuesDialog = ref(false);
    onMounted(async () => {
      category.value = await categoryStore.getCategoryByName(props.categoryName);
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
                    _cache[15] || (_cache[15] = createBaseVNode("h1", { class: "page-subtitle q-my-none" }, "Registrar Incidencia", -1)),
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
                createVNode(_sfc_main$1, {
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
              createVNode(_sfc_main$3, {
                modelValue: dateISO.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dateISO.value = $event),
                class: "q-ml-auto"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QRadio, {
                modelValue: searchType.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchType.value = $event),
                val: "user",
                label: "Nombre de beneficiario"
              }, null, 8, ["modelValue"]),
              createVNode(QRadio, {
                modelValue: searchType.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => searchType.value = $event),
                val: "activity",
                label: "Seleccionar actividad"
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(QInput, {
                  type: "search",
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  modelValue: searchQuery.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => searchQuery.value = $event),
                  clearable: "",
                  style: { "flex": "1 1 auto" },
                  debounce: "500"
                }, {
                  prepend: withCtx(() => [
                    createVNode(QIcon, { name: "sym_o_search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
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
                          createVNode(QItemSection, {
                            class: "two-line-ellipsis",
                            style: { "font-family": "monospace" }
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(result.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemSection, { side: "" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_8, [
                                createVNode(QBtn, {
                                  flat: "",
                                  round: "",
                                  icon: "sym_o_siren",
                                  class: "q-mr-md",
                                  onClick: _cache[7] || (_cache[7] = ($event) => issuesDialog.value = true)
                                }),
                                createVNode(QCheckbox, {
                                  modelValue: optionId.value,
                                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => optionId.value = $event),
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
            scores.value && scores.value.length && !dayClosed.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
              isClosable.value ? (openBlock(), createBlock(QBtn, {
                key: 0,
                disable: deferredDate.value || dayClosed.value,
                color: "secondary",
                label: "Cerrar dia",
                onClick: _cache[9] || (_cache[9] = ($event) => storeScores(1)),
                loading: savingScores.value
              }, null, 8, ["disable", "loading"])) : createCommentVNode("", true),
              createVNode(QBtn, {
                disable: deferredDate.value || dayClosed.value,
                color: "primary",
                label: "Guardar calificaciones",
                onClick: _cache[10] || (_cache[10] = ($event) => storeScores(0)),
                loading: savingScores.value
              }, null, 8, ["disable", "loading"])
            ])) : dayClosed.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
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
                      _cache[16] || (_cache[16] = createBaseVNode("span", { class: "text-green-1" }, "Dia cerrado, no se admiten actualizaciones.", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            optionId.value ? (openBlock(), createBlock(_sfc_main$2, {
              key: 2,
              rows: scores.value,
              "onUpdate:rows": _cache[11] || (_cache[11] = ($event) => scores.value = $event),
              readonly: deferredDate.value,
              mode: searchType.value,
              loading: loading.value,
              disable: savingScores.value,
              errors: errors.value
            }, null, 8, ["rows", "readonly", "mode", "loading", "disable", "errors"])) : createCommentVNode("", true),
            scores.value && scores.value.length && !dayClosed.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
              isClosable.value ? (openBlock(), createBlock(QBtn, {
                key: 0,
                disable: deferredDate.value || dayClosed.value,
                color: "secondary",
                label: "Cerrar dia",
                onClick: _cache[12] || (_cache[12] = ($event) => storeScores(1)),
                loading: savingScores.value
              }, null, 8, ["disable", "loading"])) : createCommentVNode("", true),
              createVNode(QBtn, {
                disable: deferredDate.value || dayClosed.value,
                color: "primary",
                label: "Guardar calificaciones",
                onClick: _cache[13] || (_cache[13] = ($event) => storeScores(0)),
                loading: savingScores.value
              }, null, 8, ["disable", "loading"])
            ])) : createCommentVNode("", true),
            emptySearch.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createVNode(QIcon, { name: "sym_o_info" }),
              _cache[17] || (_cache[17] = createTextVNode(" No hay resultados coincidentes con la busqueda "))
            ])) : createCommentVNode("", true),
            !optionId.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createVNode(QImg, {
                src: "/public/actividades.png",
                width: "200px"
              }),
              _cache[18] || (_cache[18] = createBaseVNode("h6", { class: "q-my-sm" }, "Selecciona un beneficiario o actividad", -1)),
              _cache[19] || (_cache[19] = createBaseVNode("p", null, "para empezar a evaluar", -1))
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
                createBaseVNode("div", _hoisted_14, [
                  createVNode(QIcon, {
                    name: "sym_o_warning",
                    class: "q-mr-md"
                  }),
                  createBaseVNode("div", null, [
                    _cache[20] || (_cache[20] = createTextVNode(" Estás visualizando una fecha pasada, no se admiten modificaciones. ")),
                    createVNode(QBtn, {
                      unelevated: "",
                      dense: "",
                      label: "Ir a hoy",
                      onClick: _cache[14] || (_cache[14] = ($event) => dateISO.value = (/* @__PURE__ */ new Date()).toISOString().split("T")[0]),
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
