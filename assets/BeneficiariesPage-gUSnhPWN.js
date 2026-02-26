import { bs as mergeModels, aF as useModel, r as ref, A as computed, o as onMounted, q as createBlock, a as openBlock, w as withCtx, d as createVNode, n as QCardSection, b as createBaseVNode, h as QBtn, t as toDisplayString, E as createCommentVNode, Q as QInput, k as QIcon, m as QCard, l as api, u as useAuthStore, c as createElementBlock, s as QDialog, H as Fragment, f as resolveComponent, j as createTextVNode, K as renderList, aG as QSpinner } from "./index-Bj0d6EJy.js";
import { Q as QTd } from "./QTd-BlkBnRbD.js";
import { Q as QTooltip } from "./QTooltip-D-so8_mu.js";
import { Q as QTable } from "./QTable-BRxQDYTK.js";
import { u as useQuasar } from "./use-quasar-BKtF-K4f.js";
import { Q as QBadge } from "./QBadge-BUUQBR6F.js";
import { Q as QSelect } from "./QSelect-l1dRAC3Q.js";
import { Q as QFile } from "./QFile-BxHSH_bt.js";
import { n as notify } from "./notify-DSQRBAOh.js";
import { _ as _sfc_main$2 } from "./ProgramarIngresoDialog-D2g1Xbrr.js";
import "./QMenu-DJC6B_Cs.js";
import "./selection-W867SDax.js";
import "./QVirtualScroll-O9ZvhSfU.js";
import "./QList-B0WbKoMu.js";
import "./QMarkupTable-mbj9NiyW.js";
import "./use-fullscreen-YBN6V5Rk.js";
import "./QItem-BdujNBmC.js";
import "./format-BC-UoHKJ.js";
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
const _hoisted_3 = { class: "col-auto" };
const _hoisted_4 = { class: "col-auto q-ml-auto" };
const _hoisted_5 = { class: "flex q-my-lg justify-center" };
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { "q-table__actions": "" };
const sortable = true;
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    const $q = useQuasar();
    const authStore = useAuthStore();
    const searchQuery = ref("");
    const loading = ref(false);
    const entryStatuses = ref([]);
    const entryStatusesMap = computed(() => new Map(entryStatuses.value.map((status) => [status.value, status.label])));
    async function fetchStatuses() {
      try {
        entryStatuses.value = (await api.get("candidate_statuses/?exclude=pendiente,rechazado")).data.data;
      } catch (error) {
        console.log(error);
      }
    }
    onMounted(async () => {
      loading.value = true;
      await fetchStatuses();
      rows.value = (await api.get("beneficiaries")).data.data;
      loading.value = false;
    });
    const statusDialog = ref(false);
    const selectedRow = ref(null);
    function openStatusDialog(row) {
      selectedRow.value = row;
      statusDialog.value = true;
    }
    const rows = ref([]);
    const columns = ref([
      { name: "name", label: "Nombre del Beneficiario", field: "name", align: "left", sortable },
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
      { disable: false, icon: "list_alt_check", route: "planes", label: "Programacion Individual" }
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
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title" }, "Admisiones y Beneficiarios", -1)),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QBtn, {
                loading: loading.value,
                color: "primary",
                icon: "description",
                outline: "",
                to: "/beneficiarios/reportes"
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode(" Reporte de Bajas ")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(QInput, {
                outlined: "",
                modelValue: searchQuery.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                debounce: "500",
                clearable: "",
                style: { "width": "250px" }
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])
        ]),
        createVNode(QTable, {
          "row-key": "id",
          bordered: "",
          flat: "",
          "hide-bottom": "",
          rows: rows.value,
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
                _cache[6] || (_cache[6] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-status": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", {
                  onClick: ($event) => openStatusDialog(props.row),
                  style: { "border": "1px solid rgba(0,0,0,.25)", "border-radius": "3px", "padding": "8px 12px" }
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
                        default: withCtx(() => _cache[7] || (_cache[7] = [
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
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => statusDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              modelValue: selectedRow.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedRow.value = $event),
              onStatusUpdated,
              onClose: _cache[2] || (_cache[2] = ($event) => statusDialog.value = false)
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
