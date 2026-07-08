import { a as QSelect } from "./QSelect-dUV2_Zts.js";
import { r as ref, a as computed, x as onMounted, O as createElementBlock, Z as createBaseVNode, J as createVNode, I as withCtx, a7 as QInput, U as QBtn, aa as QDialog, P as Fragment, a4 as api, H as openBlock, Q as QIcon, M as createTextVNode, a8 as QSpinner, a5 as QCard, a6 as QCardSection } from "./index-7AOIawlZ.js";
import { Q as QTd } from "./QTd-AUuWNKtJ.js";
import { Q as QTable } from "./QTable-hNyDMtuU.js";
import { Q as QMarkupTable } from "./QMarkupTable-Dzg7c5ei.js";
import { n as notify } from "./notify-CPeSi7Xy.js";
import "./QItem-CANGy5CK.js";
import "./QMenu-CUUu2kI9.js";
import "./selection-CRdJwsu6.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-DWDJBn0H.js";
import "./QList-C5Or0C77.js";
import "./use-fullscreen-C1cCkiqj.js";
const _hoisted_1 = { class: "row q-col-gutter-md q-my-md" };
const _hoisted_2 = { class: "col-12 col-md-3 col-lg-2" };
const _hoisted_3 = { class: "col-12 col-md-3 col-lg-2" };
const _hoisted_4 = { class: "col-12 col-md-3 col-lg-2" };
const _hoisted_5 = { class: "col-12 col-md flex justify-end" };
const _hoisted_6 = { class: "activities" };
const _hoisted_7 = { class: "flex q-my-lg justify-center" };
const _hoisted_8 = { class: "q-table__actions" };
const _sfc_main = {
  __name: "ActivitiesPage",
  setup(__props) {
    const data = ref({
      id: null,
      plan_category_id: "",
      activity_category_id: "",
      name: "",
      measurement_unit: "",
      goal_type: ""
    });
    const loading = ref(true);
    const dialog = ref(false);
    const searchFilter = ref({
      planCategory: null,
      activityCategory: null,
      text: ""
    });
    const subcategories = ref([]);
    const categories = ref([]);
    const baseCategories = computed(() => categories.value.filter((cat) => cat.parent_id == null));
    const measurementUnits = ref([
      { label: "Cantidad", value: "cantidad" },
      { label: "Metros", value: "metros" },
      { label: "Minutos", value: "minutos" },
      { label: "Horas", value: "horas" },
      { label: "Sí / No", value: "si_no" },
      { label: "Mixta", value: "mixta" }
    ]);
    const goalTypes = ref([
      { label: "Normal", value: "Normal" },
      { label: "Incremental", value: "Incremental" },
      { label: "Acumulada", value: "Acumulada" },
      { label: "Dominio", value: "Dominio" }
    ]);
    const columns = ref([
      {
        align: "left",
        name: "plan",
        label: "Plan",
        field: (row) => row.plan_category?.label,
        sortable: true
      },
      { align: "left", name: "name", label: "Actividad", field: "name", sortable: true },
      {
        align: "left",
        name: "activity_category",
        label: "Clasificacion",
        field: (row) => row.activity_category?.label
      },
      { align: "left", name: "measurement_unit", label: "Unidad", field: "measurement_unit" },
      { align: "left", name: "goal_type", label: "Meta", field: "goal_type", sortable: true },
      { align: "right", name: "actions", label: "Acciones", sortable: false }
    ]);
    const rows = ref([]);
    const results = computed(() => {
      if (searchFilter.value.planCategory == null) {
        return [...rows.value];
      }
      let results2 = rows.value.filter((row) => row.plan_category_id == searchFilter.value.planCategory);
      if (searchFilter.value.activityCategory) {
        results2 = results2.filter(
          (row) => row.activity_category_id == searchFilter.value.activityCategory
        );
      }
      return results2;
    });
    async function fetchActivities() {
      try {
        let route = `activities/?plan_category_id=${searchFilter.value.planCategory}`;
        if (searchFilter.value.activityCategory) {
          route = route + `&activity_category_id=${searchFilter.value.activityCategory}`;
        }
        loading.value = true;
        rows.value = (await api.get(route)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchCategories() {
      try {
        loading.value = true;
        categories.value = (await api.get("plan_categories")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchSubcategories(planCategoryId = null) {
      planCategoryId = planCategoryId ?? searchFilter.value.planCategory;
      searchFilter.value.activityCategory = null;
      data.value.activity_category_id = null;
      try {
        loading.value = true;
        let results2 = (await api.get(`activity_categories/?plan_category_id=${planCategoryId}`)).data.data;
        results2.unshift({ label: "Seleccionar Clasificación", id: null });
        subcategories.value = results2;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function save() {
      try {
        loading.value = true;
        let route = data.value.id ? `activities/${data.value.id}` : "activities";
        let payload = data.value.id ? { ...data.value, _method: "PUT" } : { ...data.value };
        let response = (await api.post(route, payload)).data.data;
        let action = "registrada";
        if (data.value.id) {
          action = "actualizada";
          rows.value.splice(rows.value.indexOf(data.value), 1, response);
        } else {
          rows.value.push(response);
        }
        notify.positive(`Actividad ${action} exitosamente`);
        dialog.value = false;
      } catch (error) {
        notify.negative("Error al guardar los cambios");
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchCategories();
      await fetchSubcategories();
      await fetchActivities();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[20] || (_cache[20] = createBaseVNode("div", { class: "page-title" }, "Catálogo de Actividades", -1)),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Plan",
              modelValue: searchFilter.value.planCategory,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => searchFilter.value.planCategory = $event),
                _cache[1] || (_cache[1] = () => {
                  fetchActivities();
                  fetchSubcategories();
                })
              ],
              options: baseCategories.value,
              "option-value": "id",
              "option-label": "label",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue", "options"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Clasificación",
              modelValue: searchFilter.value.activityCategory,
              "onUpdate:modelValue": [
                _cache[2] || (_cache[2] = ($event) => searchFilter.value.activityCategory = $event),
                _cache[3] || (_cache[3] = () => {
                  fetchActivities();
                })
              ],
              options: subcategories.value,
              "option-value": "id",
              "option-label": "label",
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue", "options"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QInput, {
              outlined: "",
              type: "search",
              label: "Actividad",
              modelValue: searchFilter.value.text,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => searchFilter.value.text = $event)
            }, {
              append: withCtx(() => [
                createVNode(QIcon, { name: "sym_o_search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QBtn, {
              style: { "flex": "0 0 auto", "align-self": "end" },
              color: "primary",
              label: "Nueva actividad",
              icon: "sym_o_add",
              onClick: _cache[5] || (_cache[5] = () => {
                dialog.value = true;
                data.value = {};
              })
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(QTable, {
            flat: "",
            bordered: "",
            pagination: { rowsPerPage: 100 },
            columns: columns.value,
            rows: results.value,
            filter: searchFilter.value.text,
            loading: loading.value,
            class: "activities-table"
          }, {
            loading: withCtx(() => [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", null, [
                  createVNode(QSpinner, {
                    size: "30px",
                    color: "primary",
                    class: "q-mr-md"
                  }),
                  _cache[13] || (_cache[13] = createTextVNode(" Cargando... "))
                ])
              ])
            ]),
            "body-cell-actions": withCtx((props) => [
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "sym_o_edit",
                      onClick: () => {
                        data.value = props.row;
                        dialog.value = true;
                      }
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows", "filter", "loading"])
        ]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "420px" } }, {
              default: withCtx(() => [
                _cache[19] || (_cache[19] = createBaseVNode("div", { class: "q-px-md" }, [
                  createBaseVNode("h3", { class: "page-subtitle" }, "Nueva Actividad")
                ], -1)),
                createVNode(QMarkupTable, { flat: "" }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[14] || (_cache[14] = createBaseVNode("td", null, "Plan", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.plan_category_id,
                            "onUpdate:modelValue": [
                              _cache[6] || (_cache[6] = ($event) => data.value.plan_category_id = $event),
                              _cache[7] || (_cache[7] = ($event) => fetchSubcategories(data.value.plan_category_id))
                            ],
                            options: baseCategories.value,
                            "emit-value": "",
                            "map-options": "",
                            "option-value": "id",
                            "option-label": "label"
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[15] || (_cache[15] = createBaseVNode("td", null, "Clasificación", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.activity_category_id,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => data.value.activity_category_id = $event),
                            options: subcategories.value,
                            "emit-value": "",
                            "map-options": "",
                            "option-value": "id",
                            "option-label": "label"
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[16] || (_cache[16] = createBaseVNode("td", null, "Nombre", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            "stack-label": "",
                            modelValue: data.value.name,
                            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => data.value.name = $event)
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[17] || (_cache[17] = createBaseVNode("td", null, "Unidad de medida", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.measurement_unit,
                            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => data.value.measurement_unit = $event),
                            options: measurementUnits.value,
                            "emit-value": "",
                            "map-options": ""
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[18] || (_cache[18] = createBaseVNode("td", null, "Tipo de meta", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.goal_type,
                            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => data.value.goal_type = $event),
                            options: goalTypes.value,
                            "emit-value": "",
                            "map-options": ""
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, { class: "flex justify-end" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: save,
                      color: "primary",
                      label: "Guardar",
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
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
