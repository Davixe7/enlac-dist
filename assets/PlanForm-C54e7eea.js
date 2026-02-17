import { Q as QSelect } from "./QSelect-2bl5SHtH.js";
import { r as ref, A as computed, o as onMounted, c as createElementBlock, b as createBaseVNode, t as toDisplayString, d as createVNode, Q as QInput, a3 as QToggle, w as withCtx, e as withModifiers, h as QBtn, l as api, J as useRouter, a as openBlock, k as QIcon, H as Fragment, K as renderList, q as createBlock, j as createTextVNode, E as createCommentVNode } from "./index-CnPCrPcs.js";
import { Q as QDate } from "./QDate-7g8-8pOA.js";
import { Q as QPopupProxy } from "./QPopupProxy-B2IRhZfT.js";
import { a as QItem, Q as QItemSection } from "./QItem-Ce5rFAfg.js";
import { Q as QList } from "./QList-B0uO-GP0.js";
import { Q as QMarkupTable } from "./QMarkupTable-BQ20kKCe.js";
import { n as notify } from "./notify-CvtyHu7z.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./format-BC-UoHKJ.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12" };
const _hoisted_3 = { class: "flex items-center" };
const _hoisted_4 = { class: "page-title" };
const _hoisted_5 = { class: "row q-col-gutter-x-md q-mb-lg" };
const _hoisted_6 = { class: "col-md-2" };
const _hoisted_7 = { class: "col-md-4" };
const _hoisted_8 = { class: "col-md-4" };
const _hoisted_9 = { class: "col-md-2 flex" };
const _hoisted_10 = { class: "row q-col-gutter-x-md q-mb-lg" };
const _hoisted_11 = { class: "col-md-2" };
const _hoisted_12 = { class: "col-md-2" };
const _hoisted_13 = { class: "row q-col-gutter-x-md" };
const _hoisted_14 = { class: "col-md-4" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "td--name" };
const _hoisted_17 = { class: "td--measurement-unit" };
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { class: "flex justify-end q-py-lg" };
const _sfc_main = {
  __name: "PlanForm",
  props: ["planId", "groupId", "candidateId"],
  setup(__props) {
    const errors = ref({});
    const router = useRouter();
    const props = __props;
    const loading = ref(false);
    const activitiesSearch = ref("");
    const categoriesResource = ref([]);
    const categories = computed(
      () => categoriesResource.value.filter((category) => category.parent_id == null)
    );
    const subcategories = computed(
      () => program.value.category_id ? categoriesResource.value.filter((category) => category.parent_id == program.value.category_id) : []
    );
    const activitiesResource = ref([]);
    const activities = computed(() => {
      let results = activitiesResource.value.filter(
        (activity) => !program.value.activities.find((programActivity) => programActivity.id == activity.id)
      );
      if (activitiesSearch.value == "" || activitiesSearch.value == null) {
        return results;
      }
      return results.filter(
        (activity) => String(activity.name).toLowerCase().includes(activitiesSearch.value.toLowerCase())
      );
    });
    const program = ref({
      id: null,
      group_id: props.groupId,
      candidate_id: props.candidateId,
      category_id: null,
      subcategory_id: null,
      name: "",
      status: false,
      start_date: null,
      end_date: null,
      activities: []
    });
    async function fetchProgram() {
      if (!props.planId) return;
      try {
        loading.value = true;
        program.value = (await api.get(`plans/${props.planId}`)).data.data;
        fetchActivities();
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchPlanCategories(parentId) {
      try {
        loading.value = true;
        let route = parentId ? `plan_categories/?parent_id=${parentId}` : `plan_categories`;
        categoriesResource.value = (await api.get(route)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchActivities() {
      try {
        loading.value = true;
        let route = `activities/?plan_category_id=${program.value.category_id}`;
        activitiesResource.value = (await api.get(route)).data.data;
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
      program.value.activities.push({ ...draggedItem.value, daily_goal: null });
    }
    function removeActivity(activity) {
      if (!window.confirm("Seguro que desea descartar la actividad?")) return;
      program.value.activities.splice(program.value.activities.indexOf(activity), 1);
    }
    function formatActivities() {
      return program.value.activities.reduce((acc, actividad) => {
        acc[actividad.id] = { daily_goal: actividad.daily_goal, final_goal: actividad.final_goal };
        return acc;
      }, {});
    }
    const redirectTo = computed(
      () => props.candidateId ? { name: "programs.index", props: { candidateId: props.candidateId } } : { name: "groups.show", props: { groupId: props.groupId ?? program.value.group_id } }
    );
    async function saveProgram() {
      try {
        loading.value = true;
        let data = {
          ...program.value,
          activities: formatActivities(),
          _method: props.planId ? "PUT" : "POST"
        };
        let route = props.planId ? `plans/${props.planId}` : "plans";
        let result = (await api.post(route, data)).data.data;
        notify.positive("Programa guardado exitosamente.");
        router.push({ ...redirectTo, params: { recent: result.id } });
      } catch (error) {
        errors.value = error.response.status == "422" ? error.formatted : errors.value;
        notify.negative("No se pudo registrar el programa.");
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchPlanCategories();
      await fetchProgram();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, " Elaborar Programa " + toDisplayString(props.candidateId ? "Individual" : "Grupal"), 1)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
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
                modelValue: program.value.category_id,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => program.value.category_id = $event),
                  _cache[1] || (_cache[1] = ($event) => fetchActivities())
                ],
                error: !!(errors.value && errors.value.category_id),
                "error-message": errors.value.category_id
              }, null, 8, ["options", "modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QSelect, {
                class: "q-field--required",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                label: "Tipo de plan",
                options: subcategories.value,
                "map-options": "",
                "emit-value": "",
                "option-value": "id",
                "option-label": "name",
                modelValue: program.value.subcategory_id,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => program.value.subcategory_id = $event),
                error: !!(errors.value && errors.value.subcategory_id),
                "error-message": errors.value.subcategory_id
              }, null, 8, ["options", "modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_8, [
              createVNode(QInput, {
                class: "q-field--required",
                label: "Nombre del plan",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: program.value.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => program.value.name = $event),
                error: !!(errors.value && errors.value.name),
                "error-message": errors.value.name
              }, null, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createVNode(QToggle, {
                style: { "align-self": "flex-end" },
                label: program.value.status ? "Activo" : "Inactivo",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: program.value.status,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => program.value.status = $event),
                "true-value": 1,
                "false-value": 0
              }, null, 8, ["label", "modelValue"])
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            createBaseVNode("div", _hoisted_11, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: program.value.start_date,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => program.value.start_date = $event),
                class: "q-field--required",
                label: "Fecha de inicio",
                mask: "##/##/####",
                error: !!(errors.value && errors.value.start_date),
                "error-message": errors.value.start_date
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
                            modelValue: program.value.start_date,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => program.value.start_date = $event),
                            mask: "DD/MM/YYYY"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_12, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: program.value.end_date,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => program.value.end_date = $event),
                class: "q-field--required",
                label: "Fecha de cierre",
                mask: "##/##/####",
                error: !!(errors.value && errors.value.end_date),
                "error-message": errors.value.end_date
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
                            modelValue: program.value.end_date,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => program.value.end_date = $event),
                            mask: "DD/MM/YYYY"
                          }, null, 8, ["modelValue"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"])
            ])
          ]),
          _cache[13] || (_cache[13] = createBaseVNode("div", { class: "page-subtitle q-mb-md" }, "Detalles del plan individual", -1)),
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("div", _hoisted_14, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: activitiesSearch.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => activitiesSearch.value = $event),
                class: "q-mb-md",
                clearable: ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "sym_o_search" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QList, {
                separator: "",
                bordered: ""
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(activities.value, (item) => {
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
            ]),
            createBaseVNode("div", {
              class: "col-md-8",
              onDrop,
              onDragover: _cache[10] || (_cache[10] = withModifiers(() => {
              }, ["prevent"]))
            }, [
              createVNode(QMarkupTable, {
                flat: "",
                bordered: "",
                class: "plan-form-table"
              }, {
                default: withCtx(() => [
                  _cache[12] || (_cache[12] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Nombre"),
                      createBaseVNode("th", { style: { "white-space": "nowrap" } }, "Tipo de Meta"),
                      createBaseVNode("th", null, "Unidad"),
                      createBaseVNode("th", null, "Meta diaria"),
                      createBaseVNode("th", null, "Meta final"),
                      createBaseVNode("th")
                    ])
                  ], -1)),
                  program.value.activities.length ? (openBlock(), createElementBlock("tbody", _hoisted_15, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(program.value.activities, (activity) => {
                      return openBlock(), createElementBlock("tr", {
                        key: activity.id
                      }, [
                        createBaseVNode("td", _hoisted_16, toDisplayString(activity.name), 1),
                        createBaseVNode("td", null, toDisplayString(activity.goal_type), 1),
                        createBaseVNode("td", _hoisted_17, toDisplayString(activity.measurement_unit), 1),
                        createBaseVNode("td", null, [
                          activity.goal_type == "Normal" ? (openBlock(), createBlock(QInput, {
                            key: 0,
                            dense: "",
                            outlined: "",
                            "stack-label": "",
                            "hide-bottom-space": "",
                            modelValue: activity.daily_goal,
                            "onUpdate:modelValue": ($event) => activity.daily_goal = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
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
                          }, null, 8, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("tr", _hoisted_18, _cache[11] || (_cache[11] = [
                    createBaseVNode("td", {
                      colspan: "6",
                      class: "program-activities--empty"
                    }, " Arrastra actividades aqui para armar el plan ", -1)
                  ])))
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_19, [
                createVNode(QBtn, {
                  color: "primary",
                  label: "Guardar programa",
                  loading: loading.value,
                  onClick: saveProgram
                }, null, 8, ["loading"])
              ])
            ], 32)
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
