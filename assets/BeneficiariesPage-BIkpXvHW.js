import { a7 as mergeModels, a8 as useModel, r as ref, a as computed, x as onMounted, G as createBlock, H as openBlock, I as withCtx, J as createVNode, a6 as QCardSection, Z as createBaseVNode, U as QBtn, S as toDisplayString, L as createCommentVNode, a9 as QInput, Q as QIcon, a5 as QCard, a4 as api, F as useAuthStore, O as createElementBlock, aa as QDialog, P as Fragment, Y as resolveComponent, M as createTextVNode, R as renderList, ab as QSpinner } from "./index-CZ0dY6Fq.js";
import { Q as QSelect } from "./QSelect-BLRcqzn0.js";
import { Q as QTd } from "./QTd-D99-3jad.js";
import { Q as QTooltip } from "./QTooltip-BhFMA4Vj.js";
import { Q as QTable } from "./QTable-B1EsM7Ij.js";
import { u as useQuasar } from "./use-quasar-DCMMAxAH.js";
import { Q as QBadge } from "./QBadge-Bd6BmU1l.js";
import { Q as QFile } from "./QFile-CtkFAH_0.js";
import { n as notify } from "./notify-wpUyCu9G.js";
import { _ as _sfc_main$2 } from "./ProgramarIngresoDialog-DJ0R49Eh.js";
import "./QItem-B_syubG1.js";
import "./QMenu-dxqgFgtl.js";
import "./selection-CzAX6PqU.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-DQITCk6V.js";
import "./QList-Ku1hg-XC.js";
import "./QMarkupTable-DFRJdOTL.js";
import "./use-fullscreen-DlLM7bjK.js";
const _hoisted_1$1 = { class: "flex items-center" };
const _sfc_main$1 = {
  __name: "BeneficiaryStatusChangeForm",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    const emits = __emit;
    const loading = ref(false);
    const entryStatuses = ref([]);
    const entryStatusesMap = computed(() => {
      return new Map(entryStatuses.value.map((status) => [status.value, status.label]));
    });
    async function fetchStatuses() {
      try {
        entryStatuses.value = (await api.get("candidate_statuses")).data.data;
      } catch (error) {
        console.log(error);
      }
    }
    async function update() {
      try {
        loading.value = true;
        let data = {
          status: model.value.newStatus,
          comment: model.value.comment,
          _method: "PUT"
        };
        await api.post(`candidatestatuses/${model.value.id}`, data);
        notify.positive("Estado actualizado exitosamente.");
        model.value.status = model.value.newStatus;
        emits("status-updated", { id: model.value.id, status: model.value.newStatus });
        emits("close");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo actualizar el estado");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchStatuses();
      model.value.newStatus = model.value.newStatus ?? model.value.status;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "360px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "page-subtitle" }, "Actualizar estado", -1)),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  class: "q-ml-auto",
                  onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
                })
              ]),
              createBaseVNode("div", null, toDisplayString(model.value.name), 1),
              createBaseVNode("div", null, [
                createVNode(QBadge, {
                  color: "positive",
                  label: entryStatusesMap.value.get(model.value.status)
                }, null, 8, ["label"])
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "field-label" }, "Seleccionar Status", -1)),
              createVNode(QSelect, {
                dense: "",
                outlined: "",
                "hide-bottom-space": "",
                "emit-value": "",
                "map-options": "",
                "option-value": "value",
                "option-label": "label",
                options: entryStatuses.value,
                modelValue: model.value.newStatus,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.newStatus = $event),
                class: "q-mb-md"
              }, null, 8, ["options", "modelValue"]),
              createVNode(QInput, {
                class: "q-mb-md custom-textarea",
                type: "textarea",
                outlined: "",
                "stack-label": "",
                label: "Comentario",
                modelValue: model.value.comment,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.comment = $event),
                autogrow: ""
              }, null, 8, ["modelValue"]),
              model.value.newStatus == "inactivo" ? (openBlock(), createBlock(QFile, {
                key: 0,
                outlined: "",
                "stack-label": "",
                label: "Archivo adjunto",
                modelValue: model.value.statusChangeFile,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.statusChangeFile = $event)
              }, {
                append: withCtx(() => [
                  createVNode(QIcon, { name: "sym_o_attach_file" })
                ]),
                _: 1
              }, 8, ["modelValue"])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                flat: "",
                label: "Cancelar",
                onClick: _cache[4] || (_cache[4] = ($event) => emits("close")),
                class: "q-mr-md"
              }),
              createVNode(QBtn, {
                color: "primary",
                label: "Guardar",
                loading: loading.value,
                onClick: update
              }, null, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "column q-my-sm" };
const _hoisted_2 = { class: "row items-center q-my-sm" };
const _hoisted_3 = { class: "col-auto q-gutter-x-md" };
const _hoisted_4 = { class: "col-auto q-ml-auto flex items-start" };
const _hoisted_5 = { class: "flex q-my-lg justify-center" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { "q-table__actions": "" };
const sortable = true;
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    const searchQuery = ref("");
    const statusFilter = ref(null);
    const results = computed(() => {
      if (statusFilter.value == null) {
        return [...rows.value];
      }
      return rows.value.filter((row) => row.status == statusFilter.value);
    });
    const statusesOptions = ref([{ value: null, label: "Todos los estados" }]);
    const $q = useQuasar();
    const authStore = useAuthStore();
    const loading = ref(false);
    const entryStatuses = ref([]);
    const entryStatusesMap = computed(
      () => new Map(entryStatuses.value.map((status) => [status.value, status.label]))
    );
    async function fetchStatuses() {
      try {
        let route = "candidate_statuses/?exclude=pendiente,rechazado";
        entryStatuses.value = (await api.get(route)).data.data;
        statusesOptions.value = [{ value: null, label: "Todos los estados" }, ...entryStatuses.value];
      } catch (error) {
        console.log(error);
      }
    }
    const statusDialog = ref(false);
    const selectedRow = ref(null);
    function openStatusDialog(row) {
      selectedRow.value = row;
      statusDialog.value = true;
    }
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre del Beneficiario",
        field: "name",
        align: "left",
        sortable: true,
        sort: (a, b) => a.localeCompare(b)
      },
      { name: "sheet", label: "Folio", field: "id", align: "left", sortable },
      { name: "status", label: "Estado del beneficiario", align: "left", sortable },
      { name: "program_name", label: "Programa", field: "program_name", align: "left", sortable },
      { name: "entry_date", label: "Fecha de ingreso", field: "entry_date", sortable },
      { name: "actions", label: "Acciones", field: "actions", align: "right" }
    ]);
    const actions = ref([
      { disable: false, icon: "visibility", route: "perfil", label: "Perfil" },
      { disable: false, icon: "content_paste", route: "evaluar", label: "Evaluar" },
      { disable: !authStore.can("kardexes.update"), icon: "folder", route: "kardex", label: "Kardex" },
      { disable: false, icon: "calendar_month", route: "citas", label: "Citas" },
      { disable: false, icon: "attach_money", route: "cuotas", label: "Control de Cuotas" },
      { disable: false, icon: "list_alt_check", route: "planes", label: "Programacion Individual" },
      { disable: false, icon: "chat", route: "entrevistar", label: "Entrevistar" },
      { disable: false, icon: "local_parking", route: "socioeconomico", label: "Socioeconomico" }
    ]);
    const onScheduleEntry = (row) => {
      const normalized = {
        id: row.id,
        name: row.name,
        programId: row.program.id
      };
      $q.dialog({
        component: _sfc_main$2,
        componentProps: { entry: normalized }
      }).onOk(async (payload) => {
        console.log(payload);
        refreshBeneficiary(row);
        $q.notify({ type: "positive", message: "Ingreso programado correctamente" });
      });
    };
    async function refreshBeneficiary(row) {
      let newRow = (await api.get(`/beneficiaries/${row.id}`)).data.data;
      rows.value.splice(rows.value.indexOf(row), 1, newRow);
    }
    function onStatusUpdated({ id, status }) {
      if ([7, 8, 9].includes(status)) {
        rows.value = rows.value.filter((row) => row.id !== id);
        notify.positive("Movido a la tabla de reportes.");
      }
    }
    const planTypes = ref([]);
    const planTypeFilter = ref(null);
    const groups = ref([]);
    const groupFilter = ref(null);
    async function fetchPlanTypes() {
      try {
        loading.value = true;
        planTypes.value = (await api.get("plan_types")).data.data.map((planType) => ({
          label: planType.plan_category.label + " - " + planType.label,
          value: planType.id
        }));
        planTypes.value.unshift({ label: "Todos los tipos", value: null });
      } catch (error) {
        console.log(error);
        notify.negative("Error al obtener los tipos de plan");
      } finally {
        loading.value = false;
      }
    }
    async function fetchGroups() {
      try {
        loading.value = true;
        groups.value = (await api.get("groups")).data.data.map((group) => ({
          label: group.name,
          value: group.id
        }));
        groups.value.unshift({ label: "Todos los grupos", value: null });
      } catch (error) {
        console.log(error);
        notify.negative("Error al obtener los grupos");
      } finally {
        loading.value = false;
      }
    }
    async function fetchRows() {
      try {
        loading.value = true;
        let route = "beneficiaries";
        if (planTypeFilter.value) {
          route = route + `?plan_type_id=${planTypeFilter.value}`;
        }
        if (groupFilter.value) {
          route = route + `?group_id=${groupFilter.value}`;
        }
        rows.value = (await api.get(route)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al obtener los tipos de plan");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      loading.value = true;
      await fetchStatuses();
      await fetchPlanTypes();
      await fetchGroups();
      await fetchRows();
      loading.value = false;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[9] || (_cache[9] = createBaseVNode("h1", { class: "page-title" }, "Admisiones y Beneficiarios", -1)),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QBtn, {
                loading: loading.value,
                color: "primary",
                icon: "description",
                outline: "",
                to: "/beneficiarios/archivados",
                label: "Reporte de Bajas"
              }, null, 8, ["loading"]),
              createVNode(QBtn, {
                loading: loading.value,
                color: "primary",
                icon: "history",
                outline: "",
                to: { name: "logs" },
                label: "Reportes de cambio de Estado"
              }, null, 8, ["loading"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(QInput, {
                outlined: "",
                modelValue: searchQuery.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                debounce: "500",
                clearable: "",
                style: { "width": "250px" },
                class: "q-mr-md",
                "hide-bottom-space": ""
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QSelect, {
                class: "q-mr-md",
                outlined: "",
                "hide-bottom-space": "",
                options: statusesOptions.value,
                modelValue: statusFilter.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => statusFilter.value = $event),
                "stack-label": "",
                dense: "",
                style: { "width": "250px" },
                "emit-value": "",
                "map-options": "",
                clearable: ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QSelect, {
                class: "q-mr-md",
                outlined: "",
                "hide-bottom-space": "",
                options: groups.value,
                modelValue: groupFilter.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => groupFilter.value = $event),
                  _cache[3] || (_cache[3] = ($event) => fetchRows())
                ],
                "stack-label": "",
                dense: "",
                style: { "width": "250px" },
                "emit-value": "",
                "map-options": "",
                clearable: ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "hide-bottom-space": "",
                options: planTypes.value,
                modelValue: planTypeFilter.value,
                "onUpdate:modelValue": [
                  _cache[4] || (_cache[4] = ($event) => planTypeFilter.value = $event),
                  _cache[5] || (_cache[5] = ($event) => fetchRows())
                ],
                "stack-label": "",
                dense: "",
                style: { "width": "250px" },
                "emit-value": "",
                "map-options": "",
                clearable: ""
              }, null, 8, ["options", "modelValue"])
            ])
          ])
        ]),
        createVNode(QTable, {
          "row-key": "id",
          bordered: "",
          flat: "",
          "hide-bottom": "",
          rows: results.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          loading: loading.value,
          filter: searchQuery.value
        }, {
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", null, [
                createVNode(QSpinner, {
                  size: "30px",
                  color: "primary",
                  class: "q-mr-md"
                }),
                _cache[10] || (_cache[10] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-status": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  onClick: ($event) => openStatusDialog(props.row),
                  style: { "border": "1px solid rgba(0, 0, 0, 0.25)", "border-radius": "3px", "padding": "8px 12px" }
                }, toDisplayString(entryStatusesMap.value.get(props.row.status)), 9, _hoisted_6)
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-name": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(_component_router_link, {
                  to: { name: "beneficiary.reports", params: { candidateId: props.row.id } }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right q-py-xs" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  createVNode(QBtn, {
                    disable: props.row.status !== "listo",
                    round: "",
                    unelevated: "",
                    dense: "",
                    icon: "sym_o_event",
                    onClick: ($event) => onScheduleEntry(props.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => _cache[11] || (_cache[11] = [
                          createTextVNode("Programar ingreso")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["disable", "onClick"]),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                    return openBlock(), createBlock(QBtn, {
                      key: action.icon,
                      disable: action.disable,
                      round: "",
                      unelevated: "",
                      dense: "",
                      icon: `sym_o_${action.icon}`,
                      to: `beneficiarios/${props.row.id}/${action.route}`
                    }, {
                      default: withCtx(() => [
                        createVNode(QTooltip, {
                          offset: [0, 0],
                          anchor: "top middle",
                          self: "bottom middle"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(action.label), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1032, ["disable", "icon", "to"]);
                  }), 128))
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns", "loading", "filter"]),
        createVNode(QDialog, {
          modelValue: statusDialog.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => statusDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              modelValue: selectedRow.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedRow.value = $event),
              onStatusUpdated,
              onClose: _cache[7] || (_cache[7] = ($event) => statusDialog.value = false)
            }, null, 8, ["modelValue"])
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
