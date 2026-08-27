import { c as createComponent, b4 as useTransitionProps, a4 as useDarkProps, a5 as useDark, g as getCurrentInstance, b6 as useTransition, a as computed, h, ap as Transition, a9 as QSpinner, r as ref, K as onMounted, w as watch, B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode, y as createCommentVNode, G as QBtn, t as withCtx, F as Fragment, C as renderList, z as createTextVNode, D as toDisplayString, _ as normalizeClass, Q as QIcon, V as api } from "./index-CKbYB40P.js";
import { Q as QSpinnerDots } from "./QSpinnerDots-d8sRppDk.js";
import { Q as QBadge } from "./QBadge-DYSZxBgV.js";
import { Q as QTooltip } from "./QTooltip-Bgw2Pdyv.js";
import { Q as QMarkupTable } from "./QMarkupTable-BPJpp9JF.js";
import { _ as _sfc_main$1 } from "./EnlacDate-8EUcFvQj.js";
import { e as exportXlsFile } from "./exportXls-BnHE2Xtb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./position-engine-DlA4O3Ti.js";
import "./selection-BIEcezoc.js";
import "./QDate-D6Wgl5l4.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-DKIZtgBp.js";
import "./date-sjBg8Kfy.js";
import "./format-CnAOSoyw.js";
import "./QPopupProxy-Dwm7GDW0.js";
import "./QMenu-onc-S44f.js";
import "./ClosePopup-CA4vzDEV.js";
import "./datetime-Dvln09A7.js";
const QInnerLoading = createComponent({
  name: "QInnerLoading",
  props: {
    ...useDarkProps,
    ...useTransitionProps,
    showing: Boolean,
    color: String,
    size: {
      type: [String, Number],
      default: "42px"
    },
    label: String,
    labelClass: String,
    labelStyle: [String, Array, Object]
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { transitionProps, transitionStyle } = useTransition(props);
    const classes = computed(
      () => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (isDark.value === true ? " q-inner-loading--dark" : "")
    );
    const labelClass = computed(
      () => "q-inner-loading__label" + (props.labelClass !== void 0 ? ` ${props.labelClass}` : "")
    );
    function getInner() {
      const child = [
        h(QSpinner, {
          size: props.size,
          color: props.color
        })
      ];
      if (props.label !== void 0) {
        child.push(
          h("div", {
            class: labelClass.value,
            style: props.labelStyle
          }, [props.label])
        );
      }
      return child;
    }
    function getContent() {
      return props.showing === true ? h(
        "div",
        { class: classes.value, style: transitionStyle.value },
        slots.default !== void 0 ? slots.default() : getInner()
      ) : null;
    }
    return () => h(Transition, transitionProps.value, getContent);
  }
});
const _hoisted_1 = { class: "row items-center q-mb-lg" };
const _hoisted_2 = { class: "col-12 col-md-4 flex" };
const _hoisted_3 = { class: "q-ml-auto" };
const _hoisted_4 = { class: "plan-header q-mb-md" };
const _hoisted_5 = { class: "text-h6 text-bold text-grey-9 text-capitalize" };
const _hoisted_6 = { class: "bg-grey-2" };
const _hoisted_7 = { class: "ellipsis" };
const _hoisted_8 = { class: "text-left font-mono text-weight-medium text-grey-8 date-col" };
const _hoisted_9 = {
  key: 0,
  class: "score-container"
};
const _hoisted_10 = { class: "score-value text-capitalize" };
const _hoisted_11 = {
  key: 0,
  class: "goal-value"
};
const _hoisted_12 = {
  key: 1,
  class: "no-data-badge"
};
const _hoisted_13 = { class: "bg-grey-1 summary-row border-top" };
const _hoisted_14 = ["colspan"];
const _hoisted_15 = { class: "flex items-center gap-2" };
const _hoisted_16 = { class: "bg-blue-1 summary-row" };
const _hoisted_17 = {
  key: 1,
  class: "text-center q-pa-xl text-grey-6 bg-grey-1 rounded-borders"
};
const _sfc_main = {
  __name: "MonthlyReport",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const getDefaultDates = () => {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();
      return {
        start: `${year}-${month}-01`,
        end: `${year}-${month}-${String(lastDay).padStart(2, "0")}`
      };
    };
    const initialDates = getDefaultDates();
    const startDate = ref(initialDates.start);
    const endDate = ref(initialDates.end);
    const plans = ref([]);
    const loading = ref(false);
    async function fetchScores() {
      if (!props.candidateId || !startDate.value || !endDate.value) return;
      try {
        loading.value = true;
        const response = await api.get(`beneficiaries/${props.candidateId}/reports/monthly`, {
          params: {
            start_date: startDate.value,
            end_date: endDate.value
          }
        });
        plans.value = response.data.data;
      } catch (error) {
        console.error("Error fetching monthly report:", error);
      } finally {
        loading.value = false;
      }
    }
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(`beneficiaries/${props.candidateId}/reports/exportMonthly`, {
          start_date: startDate.value,
          end_date: endDate.value
        });
      } finally {
        loading.value = false;
      }
    }
    const getPlanDates = (plan) => {
      const datesSet = /* @__PURE__ */ new Set();
      plan.activities.forEach((act) => {
        act.scores?.forEach((score) => datesSet.add(score.date));
      });
      return Array.from(datesSet).sort();
    };
    const getScoreForDate = (activity, date) => {
      return activity.scores?.find((s) => s.date === date) || null;
    };
    const formatDateLabel = (dateStr) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split("-");
      const date = new Date(year, month - 1, day);
      const formatted = date.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
      return formatted.replace(/(?:^|\s)[a-z]/g, (letter) => letter.toUpperCase());
    };
    const getBadgeClass = (color) => {
      if (!color) return "bg-grey-2 text-grey-8";
      const colorMap = {
        green: "status-green",
        positive: "status-green",
        yellow: "status-yellow",
        warning: "status-warning",
        red: "status-red",
        negative: "status-red"
      };
      return colorMap[color.toLowerCase()] || `bg-${color}-2 text-${color}-9`;
    };
    const formatTotal = (total) => {
      if (total === null || total === void 0) return "-";
      if (Array.isArray(total)) {
        const uniqueItems = [...new Set(total)];
        return uniqueItems.join(", ");
      }
      return total;
    };
    onMounted(() => {
      fetchScores();
    });
    watch([startDate, endDate], () => {
      fetchScores();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(_sfc_main$1, {
              modelValue: startDate.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
              class: "q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(_sfc_main$1, {
              modelValue: endDate.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              icon: "file_download",
              label: "Exportar Excel",
              loading: loading.value,
              onClick: exportXls
            }, null, 8, ["loading"])
          ])
        ]),
        createVNode(QInnerLoading, { showing: loading.value }, {
          default: withCtx(() => [
            createVNode(QSpinnerDots, {
              size: "50px",
              color: "primary"
            })
          ]),
          _: 1
        }, 8, ["showing"]),
        !loading.value && plans.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(plans.value, (plan) => {
          return openBlock(), createElementBlock("div", {
            key: plan.id,
            class: "q-mb-xl"
          }, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QBadge, {
                color: "primary",
                class: "q-mr-sm text-subtitle2 text-capitalize"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(plan.category?.label), 1)
                ]),
                _: 2
              }, 1024),
              createBaseVNode("span", _hoisted_5, toDisplayString(plan.name), 1)
            ]),
            createVNode(QMarkupTable, {
              class: "monthly-scores-table rounded-borders shadow-1",
              flat: "",
              bordered: ""
            }, {
              default: withCtx(() => [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", _hoisted_6, [
                    _cache[2] || (_cache[2] = createBaseVNode("th", { class: "text-left text-weight-bold date-col" }, "Fecha", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                      return openBlock(), createElementBlock("th", {
                        key: activity.id,
                        class: "text-center text-weight-bold activity-header-col"
                      }, [
                        createBaseVNode("div", _hoisted_7, [
                          createTextVNode(toDisplayString(activity.name) + " ", 1),
                          createVNode(QTooltip, {
                            anchor: "top middle",
                            self: "bottom middle"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(activity.name), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getPlanDates(plan), (date) => {
                    return openBlock(), createElementBlock("tr", { key: date }, [
                      createBaseVNode("td", _hoisted_8, toDisplayString(formatDateLabel(date)), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                        return openBlock(), createElementBlock("td", {
                          key: activity.id
                        }, [
                          getScoreForDate(activity, date) ? (openBlock(), createElementBlock("div", _hoisted_9, [
                            createBaseVNode("span", {
                              class: normalizeClass(["score-badge", getBadgeClass(getScoreForDate(activity, date).color)])
                            }, [
                              createBaseVNode("span", _hoisted_10, toDisplayString(getScoreForDate(activity, date).score), 1),
                              activity.pivot?.daily_goal ? (openBlock(), createElementBlock("span", _hoisted_11, " / " + toDisplayString(activity.pivot.daily_goal), 1)) : createCommentVNode("", true)
                            ], 2)
                          ])) : (openBlock(), createElementBlock("span", _hoisted_12, "N/A"))
                        ]);
                      }), 128))
                    ]);
                  }), 128)),
                  createBaseVNode("tr", _hoisted_13, [
                    createBaseVNode("td", {
                      colspan: plan.activities.length + 1,
                      class: "text-left text-weight-bold text-grey-8 date-col"
                    }, [
                      createBaseVNode("div", _hoisted_15, [
                        _cache[3] || (_cache[3] = createBaseVNode("span", null, "Días Evaluados:", -1)),
                        createVNode(QBadge, {
                          color: "primary",
                          outline: "",
                          class: "text-weight-bold"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(getPlanDates(plan).length) + " días ", 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ], 8, _hoisted_14)
                  ]),
                  createBaseVNode("tr", _hoisted_16, [
                    _cache[4] || (_cache[4] = createBaseVNode("td", { class: "text-left text-weight-bolder text-primary date-col" }, "Total Acumulado", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                      return openBlock(), createElementBlock("td", {
                        key: activity.id,
                        class: "text-center text-weight-bolder text-subtitle2 text-primary text-capitalize"
                      }, toDisplayString(formatTotal(activity.total)), 1);
                    }), 128))
                  ])
                ])
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128)) : !loading.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
          createVNode(QIcon, {
            name: "event_busy",
            size: "48px",
            class: "q-mb-sm"
          }),
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "text-subtitle1" }, "No hay registros disponibles para el rango seleccionado.", -1))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const MonthlyReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dccbfaf5"]]);
export {
  MonthlyReport as default
};
