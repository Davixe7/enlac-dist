import { K as onMounted, r as ref, V as api, q as createBlock, t as withCtx, s as openBlock, N as createBaseVNode, v as createVNode, Y as QInput, Q as QIcon, G as QBtn, z as createTextVNode, D as toDisplayString, B as createElementBlock, F as Fragment, C as renderList, y as createCommentVNode } from "./index-CtX55rPg.js";
import { Q as QTd } from "./QTd-ZpcA2kyO.js";
import { Q as QTr } from "./QTr-WJtxBYo7.js";
import { Q as QTable } from "./QTable-BArZ68GN.js";
import { Q as QTooltip } from "./QTooltip-BBIaKQXF.js";
import { Q as QPage } from "./QPage-jVkVV77P.js";
import { u as useQuasar } from "./use-quasar-CuFmuoUo.js";
import { _ as _sfc_main$1 } from "./ProgramarIngresoDialog-DnHD5Ys1.js";
import "./QVirtualScroll-CgaK3aHY.js";
import "./QList-asbbNT06.js";
import "./QMarkupTable-HtlB0vwn.js";
import "./QSelect-bgEQ-w_V.js";
import "./QChip-DUrZdEPF.js";
import "./QItem-BV49-FNi.js";
import "./QMenu-CT9hGhHI.js";
import "./position-engine-DMMaRPIq.js";
import "./selection-BmM1jSsC.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-Bs8OmLDw.js";
const _hoisted_1 = { class: "row items-center" };
const _hoisted_2 = { class: "col-auto row items-center q-gutter-sm" };
const _hoisted_3 = { "q-table__actions": "" };
const _sfc_main = {
  __name: "BeneficiariesArchive",
  setup(__props) {
    onMounted(() => fetchBeneficiaries());
    async function fetchBeneficiaries() {
      errors.value = {};
      let params = { ...query.value };
      loading.value = true;
      let response = (await api.get("beneficiaries/reports", { params })).data;
      beneficiaries.value = response.data.beneficiaries;
      counts.value = response.data.counts;
      loading.value = false;
    }
    const $q = useQuasar();
    const errors = ref({});
    const loading = ref(false);
    const rows = ref([{}]);
    const query = ref({});
    const beneficiaries = ref([]);
    const counts = ref({});
    const beneficiaryColumns = ref([
      { name: "id", label: "Folio", field: "id" },
      { name: "name", label: "Nombre del Beneficiario", field: "name" },
      {
        name: "status",
        label: "Estado",
        field: (row) => row.status,
        format: (val) => val ? val.charAt(0).toUpperCase() + val.slice(1) : ""
      },
      { name: "reingresar", label: "Programar Reingreso", field: "reingresar" },
      { name: "actions", label: "Acciones", field: "actions", align: "right" }
    ]);
    const actions = ref([{ disable: false, icon: "visibility", route: "perfil", label: "Perfil" }]);
    const columns = ref([
      { align: "center", label: "Beneficiarios Graduados" },
      { align: "center", label: "Beneficiarios Fallecidos" },
      { align: "center", label: "Beneficiarios Ex-ENLAC" },
      { align: "center", label: "Beneficiarios Inactivos" },
      { align: "center", label: "Beneficiarios Rechazados" }
    ]);
    const onScheduleEntry = (row) => {
      const normalized = {
        id: row.id,
        name: row.name,
        programId: row.program.id
      };
      $q.dialog({
        component: _sfc_main$1,
        componentProps: { entry: normalized }
      }).onOk(async (payload) => {
        row.status = "programado";
        row.entry_date = payload.entryDate;
        row.program.id = payload.programId;
        if (counts.value[row.status]) {
          counts.value[row.status] = Math.max(0, counts.value[row.status] - 1);
        }
        beneficiaries.value = beneficiaries.value.filter((b) => b.id !== row.id);
        $q.notify({ type: "positive", message: "Ingreso programado correctamente" });
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "col q-my-xs" }, [
              createBaseVNode("h1", { class: "page-title" }, "Reporte de Beneficiarios Dados de Baja")
            ], -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre",
                modelValue: query.value.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value.name = $event),
                error: !!errors.value.name,
                "error-message": errors.value.name
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"]),
              createVNode(QBtn, {
                class: "q-mt-md",
                loading: loading.value,
                color: "primary",
                onClick: fetchBeneficiaries,
                label: "Buscar"
              }, null, 8, ["loading"])
            ])
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title q-mb-lg" }, "Información general", -1)),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            class: "q-mb-xl q-table-custom",
            rows: rows.value,
            columns: columns.value,
            "hide-bottom": ""
          }, {
            body: withCtx(() => [
              createVNode(QTr, null, {
                default: withCtx(() => [
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value["graduado"] ?? 0), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value["fallecido"] ?? 0), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value["exenlac"] ?? 0), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value["inactivo"] ?? 0), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value["rechazado"] ?? 0), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["rows", "columns"]),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "page-title q-my-lg" }, "Información en detalle", -1)),
          createVNode(QTable, {
            class: "q-table-custom-left",
            flat: "",
            bordered: "",
            "wrap-cells": "",
            columns: beneficiaryColumns.value,
            rows: beneficiaries.value,
            "row-key": "id"
          }, {
            "body-cell-reingresar": withCtx((props) => [
              createVNode(QTd, { class: "text-left q-py-xs" }, {
                default: withCtx(() => [
                  props.row.status.toLowerCase() !== "fallecido" ? (openBlock(), createBlock(QBtn, {
                    key: 0,
                    unelevated: "",
                    label: "Reingresar",
                    color: "primary",
                    dense: "",
                    onClick: ($event) => onScheduleEntry(props.row)
                  }, null, 8, ["onClick"])) : createCommentVNode("", true)
                ]),
                _: 2
              }, 1024)
            ]),
            "body-cell-actions": withCtx((props) => [
              createVNode(QTd, {
                class: "text-right q-py-xs",
                style: { "text-align": "center !important" }
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                      return openBlock(), createBlock(QBtn, {
                        key: action.icon,
                        disable: action.disable,
                        round: "",
                        unelevated: "",
                        dense: "",
                        icon: action.icon,
                        to: `${props.row.id}/${action.route}`
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
          }, 8, ["columns", "rows"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
