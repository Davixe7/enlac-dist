import { Q as QSelect } from "./QSelect-CHFKea7D.js";
import { Q as QInput } from "./QInput-rhPFqdXf.js";
import { Q as QToggle } from "./QToggle-Waq8vPyV.js";
import { r as ref, p as computed, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, e as withModifiers, Q as QBtn, i as api, j as QIcon, F as Fragment, C as renderList, l as createBlock, h as createTextVNode, t as toDisplayString } from "./index-BohS6BTj.js";
import { a as QItem, Q as QItemSection } from "./QItemLabel-CYfLSou4.js";
import { Q as QList } from "./QList-DPzf5afm.js";
import { Q as QMarkupTable } from "./QMarkupTable-DsWzvl2S.js";
import "./use-key-composition-CfFXhD6z.js";
import "./use-dark-CRXm_J8x.js";
import "./selection-Bf8snFwk.js";
import "./QDialog-BWfG8-5J.js";
import "./use-timeout-DaW3MBpA.js";
import "./use-checkbox-E5fsBQ_d.js";
import "./option-sizes-BK7oOCkP.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 col-md-10" };
const _hoisted_3 = { class: "row q-col-gutter-x-md q-mb-lg" };
const _hoisted_4 = { class: "col-md-2" };
const _hoisted_5 = { class: "col-md-4" };
const _hoisted_6 = { class: "col-md-4" };
const _hoisted_7 = { class: "col-md-2 flex" };
const _hoisted_8 = { class: "row q-col-gutter-x-md" };
const _hoisted_9 = { class: "col-md-6" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { key: 1 };
const _hoisted_12 = { class: "flex justify-end q-py-lg" };
const _sfc_main = {
  __name: "ProgramForm",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const search = ref("");
    const planTypes = ref([]);
    const plans = ref([]);
    const planOptions = computed(
      () => plans.value.filter((plan) => plan.plan_type_id == program.value.plan_type_id)
    );
    const activities = ref([]);
    const activitiesOptions = computed(() => {
      return activities.value.filter(
        (activity) => !program.value.activities.find((programActivity) => programActivity.id == activity.id)
      );
    });
    const program = ref({
      id: null,
      candidate_id: props.candidateId,
      plan_id: null,
      plan_type_id: null,
      name: "",
      activities: [],
      status: false
    });
    async function fetchPlanTypes() {
      try {
        loading.value = true;
        planTypes.value = (await api.get(`plan_types`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchPlans() {
      try {
        loading.value = true;
        plans.value = (await api.get(`plans`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchActivities() {
      try {
        loading.value = true;
        activities.value = (await api.get(`activities/?plan_type_id=${program.value.plan_type_id}`)).data.data;
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
    async function saveProgram() {
      try {
        loading.value = true;
        program.value.activities = program.value.activities.reduce((acc, actividad) => {
          acc[actividad.id] = { daily_goal: actividad.daily_goal };
          return acc;
        }, {});
        await api.post(`personal_programs`, { ...program.value });
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchPlans();
      fetchPlanTypes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "flex items-center" }, [
            createBaseVNode("div", { class: "page-title" }, "Elaborar Programa Individual")
          ], -1)),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                label: "Plan",
                options: planTypes.value,
                "map-options": "",
                "emit-value": "",
                "option-value": "id",
                modelValue: program.value.plan_type_id,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => program.value.plan_type_id = $event),
                  _cache[1] || (_cache[1] = ($event) => fetchActivities())
                ]
              }, null, 8, ["options", "modelValue"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                label: "Tipo de plan",
                options: planOptions.value,
                "map-options": "",
                "emit-value": "",
                "option-value": "id",
                "option-label": "name",
                modelValue: program.value.plan_id,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => program.value.plan_id = $event)
              }, null, 8, ["options", "modelValue"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(QInput, {
                label: "Nombre del plan",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: program.value.name,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => program.value.name = $event)
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QToggle, {
                style: { "align-self": "flex-end" },
                label: program.value.status ? "Activo" : "Inactivo",
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: program.value.status,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => program.value.status = $event)
              }, null, 8, ["label", "modelValue"])
            ])
          ]),
          _cache[10] || (_cache[10] = createBaseVNode("div", { class: "page-subtitle q-mb-md" }, "Detalles del plan individual", -1)),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                "hide-bottom-space": "",
                modelValue: search.value,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => search.value = $event),
                class: "q-mb-md"
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
                  (openBlock(true), createElementBlock(Fragment, null, renderList(activitiesOptions.value, (item) => {
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
              class: "col-md-6",
              onDrop,
              onDragover: _cache[6] || (_cache[6] = withModifiers(() => {
              }, ["prevent"]))
            }, [
              createVNode(QMarkupTable, {
                flat: "",
                bordered: ""
              }, {
                default: withCtx(() => [
                  _cache[8] || (_cache[8] = createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      createBaseVNode("th", null, "Nombre"),
                      createBaseVNode("th", null, "Unidad"),
                      createBaseVNode("th", { style: { "white-space": "nowrap" } }, "Tipo de Meta"),
                      createBaseVNode("th", null, "Meta diaria"),
                      createBaseVNode("th")
                    ])
                  ], -1)),
                  program.value.activities.length ? (openBlock(), createElementBlock("tbody", _hoisted_10, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(program.value.activities, (activity) => {
                      return openBlock(), createElementBlock("tr", {
                        key: activity.id
                      }, [
                        createBaseVNode("td", null, toDisplayString(activity.name), 1),
                        createBaseVNode("td", null, toDisplayString(activity.measurement_unit), 1),
                        createBaseVNode("td", null, toDisplayString(activity.goal_type), 1),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            dense: "",
                            outlined: "",
                            "stack-label": "",
                            "hide-bottom-space": "",
                            modelValue: activity.daily_goal,
                            "onUpdate:modelValue": ($event) => activity.daily_goal = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                  ])) : (openBlock(), createElementBlock("tr", _hoisted_11, _cache[7] || (_cache[7] = [
                    createBaseVNode("td", {
                      colspan: "4",
                      style: { "border": "2px blue dashed", "text-align": "center", "padding": "13px 16px" }
                    }, " Arrastra actividades aqui para armar el plan ", -1)
                  ])))
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_12, [
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
