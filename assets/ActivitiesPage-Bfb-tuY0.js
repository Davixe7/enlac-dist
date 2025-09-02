import { Q as QSelect } from "./QSelect-BuVzIreX.js";
import { Q as QInput } from "./QInput-C-mtqO6Q.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, Q as QBtn, w as withCtx, F as Fragment, i as api } from "./index-C2KXjwrR.js";
import { Q as QTd } from "./QTd-DFuziUxV.js";
import { Q as QTable } from "./QTable-CrWK76Ct.js";
import { Q as QMarkupTable } from "./QMarkupTable-DClwcSyL.js";
import { Q as QCard, a as QCardSection } from "./QCard-CI6b1UjI.js";
import { Q as QDialog } from "./QDialog-CDPZ16vR.js";
import { n as notify } from "./notify-3cR8ls6a.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./use-dark-BFshqYza.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./use-timeout-C7Vsd41J.js";
import "./QSeparator-YeKVg7Wj.js";
import "./QVirtualScroll-CzWfFMoU.js";
import "./QList-CYozlWX4.js";
import "./QCheckbox-Io3ISonT.js";
import "./use-checkbox-DZGZYNIT.js";
import "./option-sizes-DU4gasAy.js";
import "./use-fullscreen-CY4ZFYMg.js";
const _hoisted_1 = { class: "row q-col-gutter-x-md q-my-md" };
const _hoisted_2 = { class: "col-md-3" };
const _hoisted_3 = { class: "col-md-3" };
const _hoisted_4 = { class: "col-md-3 flex justify-end" };
const _hoisted_5 = { class: "q-table__actions" };
const _sfc_main = {
  __name: "ActivitiesPage",
  setup(__props) {
    const data = ref({
      id: null,
      plan_type_id: "",
      name: "",
      measurement_unit: "",
      goal_type: ""
    });
    const loading = ref(true);
    const dialog = ref(false);
    const search = ref("");
    const planTypes = ref([]);
    const planType = ref(null);
    const measurementUnits = ref([
      { label: "Cantidad", value: "cantidad" },
      { label: "Metros", value: "metros" },
      { label: "Minutos", value: "minutos" },
      { label: "Horas", value: "horas" },
      { label: "Sí / No", value: "si_no" },
      { label: "Mixta", value: "mixta" }
    ]);
    const goalTypes = ref([
      { label: "Incremental", value: "incremental" },
      { label: "Acumulada", value: "acumulada" },
      { label: "Dominación", value: "dominación" }
    ]);
    const columns = ref([
      {
        align: "left",
        name: "plan",
        label: "Plan",
        field: (row) => row.plan_type.label,
        sortable: true
      },
      { align: "left", name: "name", label: "Actividad", field: "name", sortable: true },
      { align: "left", name: "measurement_unit", label: "Unidad", field: "measurement_unit" },
      { align: "left", name: "goal_type", label: "Meta", field: "goal_type", sortable: true },
      { align: "right", name: "actions", label: "Acciones", sortable: false }
    ]);
    const rows = ref([]);
    async function fetchActivities() {
      try {
        loading.value = true;
        rows.value = (await api.get("activities")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchPlanTypes() {
      try {
        loading.value = true;
        planTypes.value = (await api.get("plan_types")).data.data;
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
        console.log(error);
        notify.positive("Error al guardar los cambios");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchActivities();
      fetchPlanTypes();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[14] || (_cache[14] = createBaseVNode("div", { class: "page-title" }, "Catálogo de Actividades", -1)),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              label: "Plan",
              modelValue: planType.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => planType.value = $event),
              options: planTypes.value
            }, null, 8, ["modelValue", "options"])
          ]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QInput, {
              outlined: "",
              type: "search",
              label: "Actividad",
              modelValue: search.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => search.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "col-md-3" }, null, -1)),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QBtn, {
              style: { "flex": "0 0 auto", "align-self": "end" },
              color: "primary",
              label: "Nueva actividad",
              icon: "sym_o_add",
              onClick: _cache[2] || (_cache[2] = ($event) => dialog.value = true)
            })
          ])
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          pagination: { rowsPerPage: 0 },
          columns: columns.value,
          rows: rows.value
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
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
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "420px" } }, {
              default: withCtx(() => [
                _cache[13] || (_cache[13] = createBaseVNode("div", { class: "q-px-md" }, [
                  createBaseVNode("h3", { class: "page-subtitle" }, "Nueva Actividad")
                ], -1)),
                createVNode(QMarkupTable, { flat: "" }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[9] || (_cache[9] = createBaseVNode("td", null, "Plan", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.plan_type_id,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => data.value.plan_type_id = $event),
                            options: planTypes.value,
                            "emit-value": "",
                            "map-options": "",
                            "option-value": "id",
                            "option-label": "label"
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[10] || (_cache[10] = createBaseVNode("td", null, "Nombre", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            outlined: "",
                            "stack-label": "",
                            modelValue: data.value.name,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => data.value.name = $event)
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[11] || (_cache[11] = createBaseVNode("td", null, "Unidad de medida", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.measurement_unit,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => data.value.measurement_unit = $event),
                            options: measurementUnits.value,
                            "emit-value": "",
                            "map-options": ""
                          }, null, 8, ["modelValue", "options"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("td", null, "Tipo de meta", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QSelect, {
                            dense: "",
                            outlined: "",
                            modelValue: data.value.goal_type,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => data.value.goal_type = $event),
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
