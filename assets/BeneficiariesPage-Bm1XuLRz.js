import { bR as mergeModels, bS as useModel, r as ref, q as createBlock, a as openBlock, w as withCtx, d as createVNode, m as QCardSection, b as createBaseVNode, h as QBtn, t as toDisplayString, E as createCommentVNode, Q as QInput, n as QIcon, l as QCard, k as api, u as useAuthStore, o as onMounted, c as createElementBlock, s as QDialog, H as Fragment, j as createTextVNode, K as renderList, aE as QSpinner } from "./index-Dk-vfK7v.js";
import { Q as QSelect } from "./QSelect-BW1ZBX55.js";
import { Q as QTd } from "./QTd-DKOvs576.js";
import { Q as QTooltip } from "./QTooltip-DT5YCFhi.js";
import { Q as QTable } from "./QTable-DokQwqb9.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import { u as useQuasar } from "./use-quasar-Db6bNxqq.js";
import { Q as QBadge } from "./QBadge-LLfmZ58o.js";
import { Q as QFile } from "./QFile-DYy0HRyr.js";
import { n as notify } from "./notify-qwVxQIpJ.js";
import { _ as _sfc_main$2 } from "./ProgramarIngresoDialog-BxEooljS.js";
import "./QItem-DE7d-lgy.js";
import "./selection-DEaGGDNT.js";
import "./QVirtualScroll-CejCbXay.js";
import "./QList-BNUCwZx5.js";
import "./QMarkupTable-z16xpCIW.js";
import "./use-fullscreen-r4BMIhU0.js";
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
    const entryStatuses = {
      pendiente_ingresar: "Pendiente de ingresar",
      ingreso_programado: "Ingreso programado",
      listo_ingresar: "Listo para ingresar",
      activo: "Activo",
      permiso_temporal: "Permiso temporal",
      prueba_vida: "Prueba de vida",
      inactivo: "Inactivo",
      exenlac: "Ex-ENLAC",
      graduado: "Graduado",
      fallecido: "Fallecido"
    };
    async function update() {
      try {
        loading.value = true;
        let data = {
          status: model.value.newStatus,
          comment: model.value.comment
        };
        await api.post(`beneficiaries/${model.value.id}/status`, data);
        notify.positive("Estado actualizado exitosamente.");
        model.value.status = model.value.newStatus;
        emits("close");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo actualizar el estado");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "360px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "page-subtitle" }, "Actualizar estado", -1)),
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
                  label: entryStatuses[model.value.newStatus]
                }, null, 8, ["label"])
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QInput, {
                class: "q-mb-md",
                type: "textarea",
                outlined: "",
                "stack-label": "",
                label: "Comentario",
                modelValue: model.value.comment,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.comment = $event)
              }, null, 8, ["modelValue"]),
              model.value.newStatus == "inactivo" ? (openBlock(), createBlock(QFile, {
                key: 0,
                outlined: "",
                "stack-label": "",
                label: "Archivo adjunto",
                modelValue: model.value.statusChangeFile,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.statusChangeFile = $event)
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
                onClick: _cache[3] || (_cache[3] = ($event) => emits("close")),
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
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "q-ml-auto flex" };
const _hoisted_3 = { class: "flex q-my-lg justify-center" };
const _hoisted_4 = { "q-table__actions": "" };
const sortable = true;
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    const $q = useQuasar();
    const authStore = useAuthStore();
    const searchQuery = ref("");
    const loading = ref(false);
    onMounted(async () => {
      loading.value = true;
      rows.value = (await api.get("beneficiaries")).data.data;
      loading.value = false;
    });
    const statusDialog = ref(false);
    const selectedRow = ref(null);
    function openStatusDialog(row, newStatus) {
      selectedRow.value = row;
      selectedRow.value.newStatus = newStatus;
      statusDialog.value = true;
    }
    const rows = ref([]);
    const columns = ref([
      { name: "name", label: "Nombre del Beneficiario", field: "name", align: "left", sortable },
      { name: "sheet", label: "Folio", field: "id", align: "left", sortable },
      { name: "status", label: "Estatus", field: "status", align: "left", sortable },
      { name: "entry_date", label: "Fecha de ingreso", field: "scheduled_entry_date", sortable },
      { name: "program_name", label: "Programa", field: "program_name", align: "left", sortable },
      { name: "actions", label: "Acciones", field: "actions", align: "right" }
    ]);
    const entryStatuses = [
      { value: "pendiente_ingresar", label: "Pendiente de ingresar" },
      { value: "ingreso_programado", label: "Ingreso programado" },
      { value: "listo_ingresar", label: "Listo para ingresar" },
      { value: "activo", label: "Activo" },
      { value: "permiso_temporal", label: "Permiso temporal" },
      { value: "prueba_vida", label: "Prueba de vida" },
      { value: "inactivo", label: "Inactivo" },
      { value: "exenlac", label: "Ex-ENLAC" },
      { value: "graduado", label: "Graduado" },
      { value: "fallecido", label: "Fallecido" }
    ];
    const actions = ref([
      { disable: false, icon: "visibility", route: "perfil", label: "Perfil" },
      { disable: false, icon: "content_paste", route: "evaluar", label: "Evaluar" },
      { disable: !authStore.can("kardexes.update"), icon: "folder", route: "kardex", label: "Kardex" },
      { disable: false, icon: "calendar_month", route: "citas", label: "Citas" },
      { disable: false, icon: "attach_money", route: "cuotas", label: "Control de Cuotas" },
      { disable: false, icon: "list_alt_check", route: "planes", label: "Programacion Individual" }
    ]);
    const onProgramarIngreso = (row) => {
      $q.dialog({
        component: _sfc_main$2,
        componentProps: { row }
      }).onOk(async (payload) => {
        await api.post(`beneficiaries/${row.id}/status`, {
          status: "programar_ingreso",
          comment: "Programar ingreso",
          program_id: payload.programId,
          scheduled_entry_date: payload.entryDate,
          observations: payload.observations
        });
        row.status = "ingreso_programado";
        row.scheduled_entry_date = formatDate(payload.entryDate);
        $q.notify({ type: "positive", message: "Ingreso programado correctamente" });
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title" }, "Admisiones y Beneficiarios", -1)),
          createBaseVNode("div", _hoisted_2, [
            createVNode(QInput, {
              outlined: "",
              modelValue: searchQuery.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              debounce: "500",
              clearable: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        createVNode(QTable, {
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
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createVNode(QSpinner, {
                  size: "30px",
                  color: "primary",
                  class: "q-mr-md"
                }),
                _cache[5] || (_cache[5] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-status": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QSelect, {
                  dense: "",
                  outlined: "",
                  "hide-bottom-space": "",
                  "emit-value": "",
                  "map-options": "",
                  options: entryStatuses,
                  disable: props.row.status === "fallecido",
                  "model-value": props.row.status,
                  "onUpdate:modelValue": (val) => openStatusDialog(props.row, val)
                }, null, 8, ["disable", "model-value", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right q-py-xs" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(QBtn, {
                    round: "",
                    unelevated: "",
                    dense: "",
                    icon: "sym_o_event",
                    onClick: ($event) => onProgramarIngreso(props.row)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => _cache[6] || (_cache[6] = [
                          createTextVNode("Programar ingreso")
                        ])),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
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
