import { a as QSelect } from "./QSelect-U0HMsLQF.js";
import { ac as mergeModels, ad as useModel, r as ref, w as watch, a as computed, x as onMounted, O as createElementBlock, H as openBlock, J as createVNode, Z as createBaseVNode, I as withCtx, a5 as QCard, a6 as QCardSection, U as QBtn, a7 as QInput, M as createTextVNode, ab as normalizeClass, aa as QDialog, K as withDirectives, aN as vShow, Q as QIcon, P as Fragment, R as renderList, G as createBlock, S as toDisplayString, af as withModifiers, L as createCommentVNode, a4 as api, aX as QToggle, ag as useRouter } from "./index-CyP9JFdC.js";
import { n as notify } from "./notify-BMqCstfe.js";
import { _ as _sfc_main$2 } from "./EnlacDate-O92n22c8.js";
import { Q as QMarkupTable } from "./QMarkupTable-BBXZAxNg.js";
import { Q as QItem, a as QItemSection } from "./QItem--cneNo7k.js";
import { Q as QList } from "./QList-BjNhhijf.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QMenu-Ci9jBKA2.js";
import "./selection-C2Qa576V.js";
import "./format-BC-UoHKJ.js";
import "./QDate-BV4tS_U4.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-D45eT_Cs.js";
import "./date-C7mI6M9f.js";
import "./QPopupProxy-CKMqyXB1.js";
import "./ClosePopup-DkXxM9bm.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1$1 = { class: "flex justify-between" };
const _hoisted_2$1 = { class: "q-px-md q-pb-md" };
const _hoisted_3$1 = { class: "flex justify-end q-pa-md" };
const _hoisted_4$1 = { class: "page-title flex items-center q-mb-lg" };
const _hoisted_5$1 = { class: "row q-col-gutter-x-md" };
const _hoisted_6$1 = { class: "col-md-4" };
const _hoisted_7$1 = {
  class: "flex q-gutter-x-md",
  style: { "flex-flow": "row nowrap" }
};
const _hoisted_8$1 = { key: 0 };
const _hoisted_9 = { class: "td--name" };
const _hoisted_10 = { class: "td--measurement-unit" };
const _hoisted_11 = { key: 1 };
const _sfc_main$1 = {
  __name: "PlanActivities",
  props: /* @__PURE__ */ mergeModels(["categoryId", "category"], {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    const showList = ref(false);
    const loading = ref(false);
    watch(
      () => props.categoryId,
      (newVal) => {
        console.log(newVal);
        fetchActivities();
        fetchSubcategories();
      }
    );
    const searchFilter = ref({
      query: "",
      subcategoryId: null
    });
    const subcategories = ref([]);
    const activities = ref([]);
    const results = computed(() => {
      let results2 = activities.value;
      if (searchFilter.value.subcategoryId) {
        results2 = results2.filter(
          (activity) => activity.activity_category_id == searchFilter.value.subcategoryId
        );
      }
      if (searchFilter.value.query) {
        results2 = results2.filter(
          (activity) => String(activity.name).toLowerCase().includes(searchFilter.value.query.toLowerCase())
        );
      }
      if (model.value.length) {
        results2 = results2.filter(
          (resultItem) => !model.value.find((planActivity) => planActivity.id == resultItem.id)
        );
      }
      return results2;
    });
    async function fetchSubcategories() {
      try {
        loading.value = true;
        let route = `activity_categories/?plan_category_id=${props.categoryId}`;
        let results2 = (await api.get(route)).data.data;
        results2.unshift({ label: "Clasificación", id: null });
        subcategories.value = results2;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchActivities() {
      try {
        loading.value = true;
        let route = `activities/?plan_category_id=${props.categoryId}`;
        activities.value = (await api.get(route)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const draggedItem = ref(null);
    function onDragStart(activity) {
      console.log("Start dragging");
      draggedItem.value = activity;
    }
    function onDrop() {
      console.log("Drop");
      if (!draggedItem.value) return;
      model.value.push({ ...draggedItem.value, daily_goal: null });
    }
    function removeActivity(activity) {
      if (!window.confirm("Seguro que desea descartar la actividad?")) return;
      model.value.splice(model.value.indexOf(activity), 1);
    }
    const selectedActivity = ref(null);
    const dialog = ref(false);
    function setActivity(activity) {
      selectedActivity.value = activity;
      dialog.value = true;
    }
    const instructables = ["fisico", "natacion", "gimnasia", "equinoterapia"];
    function inputClass(val) {
      return !val && instructables.includes(props.category?.name) ? "error-border" : "";
    }
    onMounted(() => {
      fetchActivities();
      fetchSubcategories();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "400px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      _cache[11] || (_cache[11] = createBaseVNode("div", { class: "page-subtitle q-mb-md" }, "Ajustes de la actividad", -1)),
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        dense: "",
                        icon: "sym_o_close",
                        style: { "align-self": "flex-start", "flex": "0 0" },
                        onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false)
                      })
                    ])
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    "hide-bottom-space": "",
                    modelValue: selectedActivity.value.name,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedActivity.value.name = $event),
                    label: "Actividad",
                    readonly: true
                  }, null, 8, ["modelValue"])
                ]),
                createVNode(QMarkupTable, null, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("td", null, [
                          createTextVNode("Intensidad "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            "stack-label": "",
                            "hide-bottom-space": "",
                            modelValue: selectedActivity.value.intensity,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectedActivity.value.intensity = $event),
                            class: normalizeClass(inputClass(selectedActivity.value.intensity))
                          }, null, 8, ["modelValue", "class"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[13] || (_cache[13] = createBaseVNode("td", null, [
                          createTextVNode("Frecuencia "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            "stack-label": "",
                            "hide-bottom-space": "",
                            modelValue: selectedActivity.value.frequency,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedActivity.value.frequency = $event),
                            class: normalizeClass(inputClass(selectedActivity.value.frequency))
                          }, null, 8, ["modelValue", "class"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[14] || (_cache[14] = createBaseVNode("td", null, [
                          createTextVNode("Duración "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            "stack-label": "",
                            "hide-bottom-space": "",
                            modelValue: selectedActivity.value.duration,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => selectedActivity.value.duration = $event),
                            class: normalizeClass(inputClass(selectedActivity.value.duration))
                          }, null, 8, ["modelValue", "class"])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createBaseVNode("div", _hoisted_3$1, [
                  createVNode(QBtn, {
                    color: "primary",
                    label: "Guardar",
                    loading: loading.value,
                    type: "submit",
                    onClick: _cache[5] || (_cache[5] = ($event) => dialog.value = false)
                  }, null, 8, ["loading"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_4$1, [
          createVNode(QBtn, {
            icon: "sym_o_menu",
            flat: "",
            round: "",
            dense: "",
            style: { "flex": "0 0", "font-size": "1rem", "align-self": "flex-start" },
            onClick: _cache[7] || (_cache[7] = ($event) => showList.value = !showList.value),
            class: "q-mr-md"
          }),
          _cache[15] || (_cache[15] = createTextVNode(" Detalles del plan individual "))
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          withDirectives(createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", _hoisted_7$1, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: searchFilter.value.query,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => searchFilter.value.query = $event),
                class: "q-mb-md",
                clearable: "",
                style: { "width": "100%" }
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "sym_o_search" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                modelValue: searchFilter.value.subcategoryId,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => searchFilter.value.subcategoryId = $event),
                options: subcategories.value,
                "option-value": "id",
                "option-label": "label",
                "emit-value": "",
                "map-options": "",
                dense: "",
                style: { "width": "fit-content", "white-space": "nowrap" }
              }, null, 8, ["modelValue", "options"])
            ]),
            createVNode(QList, {
              separator: "",
              bordered: "",
              class: "activity-list"
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (item) => {
                  return openBlock(), createBlock(QItem, {
                    draggable: "true",
                    onDragstart: ($event) => onDragStart(item),
                    key: item.id
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onDragstart"]);
                }), 128))
              ]),
              _: 1
            })
          ], 512), [
            [vShow, showList.value]
          ]),
          createBaseVNode("div", {
            class: "col-12 col-md",
            onDrop,
            onDragover: _cache[10] || (_cache[10] = withModifiers(() => {
            }, ["prevent"])),
            style: { "min-height": "calc(100vh - 264px)", "transition": "all 0.4s" }
          }, [
            createVNode(QMarkupTable, {
              flat: "",
              bordered: "",
              class: "plan-form-table"
            }, {
              default: withCtx(() => [
                _cache[17] || (_cache[17] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, "Nombre"),
                    createBaseVNode("th", { style: { "white-space": "nowrap" } }, "Tipo de Meta"),
                    createBaseVNode("th", null, "Unidad"),
                    createBaseVNode("th", null, "Meta diaria"),
                    createBaseVNode("th", null, "Meta final"),
                    createBaseVNode("th")
                  ])
                ], -1)),
                model.value.length ? (openBlock(), createElementBlock("tbody", _hoisted_8$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(model.value, (activity) => {
                    return openBlock(), createElementBlock("tr", {
                      key: activity.id
                    }, [
                      createBaseVNode("td", _hoisted_9, toDisplayString(activity.name), 1),
                      createBaseVNode("td", null, toDisplayString(activity.goal_type), 1),
                      createBaseVNode("td", _hoisted_10, toDisplayString(activity.measurement_unit), 1),
                      createBaseVNode("td", null, [
                        activity.goal_type == "Normal" ? (openBlock(), createBlock(QInput, {
                          key: 0,
                          dense: "",
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          modelValue: activity.daily_goal,
                          "onUpdate:modelValue": ($event) => activity.daily_goal = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : activity.goal_type == "Dominio" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                          createTextVNode("Dominada")
                        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                          createTextVNode("N/A")
                        ], 64))
                      ]),
                      createBaseVNode("td", null, [
                        ["Incremental", "Acumulada"].includes(activity.goal_type) ? (openBlock(), createBlock(QInput, {
                          key: 0,
                          dense: "",
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          modelValue: activity.final_goal,
                          "onUpdate:modelValue": ($event) => activity.final_goal = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                      ]),
                      createBaseVNode("td", null, [
                        createVNode(QBtn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "sym_o_delete",
                          onClick: ($event) => removeActivity(activity)
                        }, null, 8, ["onClick"]),
                        createVNode(QBtn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "sym_o_info",
                          color: "red",
                          onClick: ($event) => setActivity(activity),
                          disable: !instructables.includes(__props.category.name)
                        }, null, 8, ["onClick", "disable"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createElementBlock("tr", _hoisted_11, _cache[16] || (_cache[16] = [
                  createBaseVNode("td", {
                    colspan: "6",
                    class: "program-activities--empty"
                  }, " Arrastra actividades aqui para armar el plan ", -1)
                ])))
              ]),
              _: 1
            })
          ], 32)
        ])
      ], 64);
    };
  }
};
const PlanActivities = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-fa45339c"]]);
const _hoisted_1 = { class: "page-title" };
const _hoisted_2 = { class: "row q-col-gutter-md q-mb-lg" };
const _hoisted_3 = { class: "col-12 col-md-4 q-gutter-y-md" };
const _hoisted_4 = { class: "row q-col-gutter-x-md" };
const _hoisted_5 = { class: "col" };
const _hoisted_6 = { class: "col" };
const _hoisted_7 = {
  key: 0,
  class: "q-mb-md text-negative text-weight-bold"
};
const _hoisted_8 = { class: "flex justify-end q-py-lg" };
const _sfc_main = {
  __name: "PlanForm",
  props: ["planId", "groupId", "candidateId"],
  setup(__props) {
    const errors = ref({});
    const router = useRouter();
    const props = __props;
    const loading = ref(false);
    const categories = ref([]);
    const planTypes = ref([]);
    const category = computed(() => {
      return categories.value.find((cat) => cat.id == plan.value.category_id);
    });
    const plan = ref({
      id: null,
      group_id: props.groupId,
      candidate_id: props.candidateId,
      category_id: 1,
      plan_type_id: 1,
      name: "",
      status: 1,
      start_date: null,
      end_date: null,
      activities: []
    });
    const REQUIRED_LABELS = ["Físico", "Gimnasia", "Natación", "Equinoterapia"];
    const isRequiredCategory = computed(() => {
      return category.value && REQUIRED_LABELS.includes(category.value.label);
    });
    async function fetchPlan() {
      if (!props.planId) return;
      try {
        loading.value = true;
        plan.value = (await api.get(`plans/${props.planId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchCategories() {
      try {
        loading.value = true;
        categories.value = (await api.get(`plan_categories`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchPlanTypes() {
      try {
        loading.value = true;
        const response = (await api.get(`plan_types/?plan_category_id=${plan.value.category_id}`)).data.data;
        const uniqueTypes = response.filter(
          (value, index, self) => index === self.findIndex((t) => t.label === value.label)
        );
        planTypes.value = uniqueTypes;
      } catch (error) {
        notify.negative("Error al cargar los tipos de plan");
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function savePlan() {
      if (isRequiredCategory.value) {
        const hasMissing = plan.value.activities.some(
          (a) => !a.intensity || !a.frequency || !a.duration
        );
        if (hasMissing) {
          notify.negative(
            "La Intensidad, Frecuencia y Duración son obligatorias para cada actividad en planes Físicos/Gimnasia/Natación/Equinoterapia."
          );
          return;
        }
      }
      try {
        loading.value = true;
        let data = {
          ...plan.value,
          activities: formatActivities(),
          _method: props.planId ? "PUT" : "POST"
        };
        let route = props.planId ? `plans/${props.planId}` : "plans";
        let result = (await api.post(route, data)).data.data;
        notify.positive("Programa guardado exitosamente.");
        router.push({ ...redirectTo.value, params: { recent: result.id } });
      } catch (error) {
        errors.value = error.response.status == "422" ? error.formatted : errors.value;
        notify.negative("No se pudo registrar el programa.");
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    function formatActivities() {
      return plan.value.activities.reduce((acc, actividad) => {
        acc[actividad.id] = {
          daily_goal: actividad.daily_goal,
          final_goal: actividad.final_goal ?? null,
          intensity: actividad.intensity,
          frequency: actividad.frequency,
          duration: actividad.duration
        };
        return acc;
      }, {});
    }
    const redirectTo = computed(
      () => props.candidateId ? { name: "programs.index", props: { candidateId: props.candidateId } } : { name: "groups.show", props: { groupId: props.groupId ?? plan.value.group_id } }
    );
    onMounted(async () => {
      await fetchCategories();
      await fetchPlan();
      await fetchPlanTypes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, "Elaborar Programa " + toDisplayString(props.candidateId ? "Individual" : "Grupal"), 1),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QSelect, {
              class: "q-field--required",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Plan",
              options: categories.value,
              "map-options": "",
              "emit-value": "",
              "option-value": "id",
              modelValue: plan.value.category_id,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => plan.value.category_id = $event),
                _cache[1] || (_cache[1] = () => {
                  fetchPlanTypes();
                  plan.value.plan_type_id = null;
                })
              ],
              error: !!(errors.value && errors.value.category_id),
              "error-message": errors.value.category_id
            }, null, 8, ["options", "modelValue", "error", "error-message"]),
            createVNode(QSelect, {
              class: "q-field--required",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Tipo de plan",
              options: planTypes.value,
              "map-options": "",
              "emit-value": "",
              "option-value": "id",
              "option-label": "label",
              modelValue: plan.value.plan_type_id,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => plan.value.plan_type_id = $event),
              error: !!(errors.value && errors.value.plan_type_id),
              "error-message": errors.value.plan_type_id
            }, null, 8, ["options", "modelValue", "error", "error-message"]),
            createVNode(QInput, {
              class: "q-field--required",
              label: "Nombre del plan",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              modelValue: plan.value.name,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => plan.value.name = $event),
              error: !!(errors.value && errors.value.name),
              "error-message": errors.value.name
            }, null, 8, ["modelValue", "error", "error-message"]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createVNode(_sfc_main$2, {
                  outlined: "",
                  label: "Fecha de inicio",
                  modelValue: plan.value.start_date,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => plan.value.start_date = $event),
                  "limit-to-past": false
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(_sfc_main$2, {
                  outlined: "",
                  label: "Fecha de cierre",
                  modelValue: plan.value.end_date,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => plan.value.end_date = $event),
                  "limit-to-past": false
                }, null, 8, ["modelValue"])
              ])
            ]),
            createVNode(QToggle, {
              style: { "align-self": "flex-end" },
              label: plan.value.status ? "Activo" : "Inactivo",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              modelValue: plan.value.status,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => plan.value.status = $event),
              "true-value": 1,
              "false-value": 0
            }, null, 8, ["label", "modelValue"])
          ])
        ]),
        isRequiredCategory.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createVNode(QIcon, { name: "warning" }),
          _cache[9] || (_cache[9] = createTextVNode(" Se requiere completar Intensidad, Frecuencia y Duración en cada actividad. "))
        ])) : createCommentVNode("", true),
        createVNode(PlanActivities, {
          modelValue: plan.value.activities,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => plan.value.activities = $event),
          category: category.value,
          categoryId: plan.value.category_id
        }, null, 8, ["modelValue", "category", "categoryId"]),
        createBaseVNode("div", _hoisted_8, [
          createVNode(QBtn, {
            color: "primary",
            label: "Guardar programa",
            loading: loading.value,
            onClick: _cache[8] || (_cache[8] = ($event) => savePlan())
          }, null, 8, ["loading"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
