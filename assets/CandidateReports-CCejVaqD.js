import { b as onMounted, r as ref, U as createBlock, i as openBlock, w as withCtx, j as createBaseVNode, k as createVNode, C as QIcon, Q as QBtn, m as createTextVNode, a9 as toDisplayString } from "./index-DFLanZ1z.js";
import { Q as QInput } from "./QCheckbox-IpF3v89G.js";
import { Q as QTable, a as QTd } from "./QTable-DR7K-ZY-.js";
import { Q as QTr } from "./QTr-BFO1DP6e.js";
import { Q as QPage } from "./QPage-hAE_yv6U.js";
import { api } from "./axios-CONCEpaH.js";
import "./use-key-composition-B7KFeawS.js";
import "./use-dark-CgBzdHOB.js";
import "./QSeparator-BrS_xjnn.js";
import "./QList-CZRjyixm.js";
import "./selection-LH5GgUwm.js";
const _hoisted_1 = { class: "row q-col-gutter-lg items-end q-mb-xl" };
const _hoisted_2 = { class: "col-12 col-md-auto" };
const _hoisted_3 = { class: "col-12 col-md-auto" };
const _hoisted_4 = { class: "col-12 col-md-auto" };
const _hoisted_5 = { class: "col-12 col-md-auto" };
const _hoisted_6 = { class: "col-12 col-md-auto" };
const _sfc_main = {
  __name: "CandidateReports",
  setup(__props) {
    onMounted(() => fetchCandidates());
    async function fetchCandidates() {
      errors.value = {};
      let params = { ...query.value };
      let fields = ["name", "birth_date", "date_from", "date_to"];
      fields.forEach((key) => {
        if (!query[key]) {
          delete query[key];
        }
      });
      if (params.date_from && !params.date_to) {
        errors.value = { date_to: "Debes seleccionar una fecha de fin" };
        return;
      }
      if (params.date_to && !params.date_from) {
        errors.value = { date_from: "Debes seleccionar una fecha de inicio" };
        return;
      }
      loading.value = true;
      let response = (await api.get("candidates", { params })).data;
      candidates.value = response.data;
      counts.value = response.counts;
      loading.value = false;
    }
    const errors = ref({});
    const loading = ref(false);
    const rows = ref([{}]);
    const query = ref({});
    const candidates = ref([]);
    const counts = ref({});
    const candidateColumns = ref([
      {
        name: "name",
        label: "Nombre de Candidato",
        align: "left",
        field: "full_name",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        align: "left",
        field: "sheet",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha de Evaluación",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.date : "NO DISPONIBLE",
        sortable: true
      },
      {
        name: "evaluator",
        label: "Evaluador",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.evaluator.name : "No disponible",
        sortable: true
      },
      {
        name: "is_candidate",
        label: "Candidato",
        align: "left",
        field: (row) => {
          if (row.acceptance_status === 1) {
            return "Si";
          }
          if (row.acceptance_status === 0) {
            return "No";
          }
          if (row.acceptance_status === null) {
            return "Pendiente";
          }
        },
        sortable: true
      },
      {
        name: "notes",
        label: "Observaciones",
        align: "right",
        field: (row) => row.acceptance_status == 0 ? row.rejection_comment : row.program ? row.program.name : "Pendiente",
        sortable: true
      }
    ]);
    const columns = ref([
      { align: "center", label: "Candidatos en proceso" },
      { align: "center", label: "No fueron aceptados" },
      { align: "center", label: "Si fueron aceptados pero no han ingresado" },
      { align: "center", label: "Nuevos ingresos" },
      { align: "center", label: "Candidatos en total" }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "page-title q-mb-lg" }, "Reporte de candidatos", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "label-alt-2" }, " Fecha a consultar ", -1)),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Desde",
                type: "date",
                modelValue: query.value.date_from,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => query.value.date_from = $event),
                error: !!errors.value.date_from,
                "error-message": errors.value.date_from
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "calendar_today" })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Hasta",
                type: "date",
                modelValue: query.value.date_to,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => query.value.date_to = $event),
                error: !!errors.value.date_to,
                "error-message": errors.value.date_to
              }, null, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "label-alt-2" }, " Buscar por ", -1)),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre",
                modelValue: query.value.name,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => query.value.name = $event),
                error: !!errors.value.name,
                "error-message": errors.value.name
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Fecha de nacimiento",
                modelValue: query.value.birth_date,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => query.value.birth_date = $event),
                type: "date",
                error: !!errors.value.birth_date,
                "error-message": errors.value.birth_date
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "calendar_today" })
                ]),
                _: 1
              }, 8, ["modelValue", "error", "error-message"])
            ]),
            createBaseVNode("div", _hoisted_6, [
              createVNode(QBtn, {
                loading: loading.value,
                color: "primary",
                style: { "margin-bottom": "20px" },
                onClick: fetchCandidates
              }, {
                default: withCtx(() => _cache[6] || (_cache[6] = [
                  createTextVNode("Buscar")
                ])),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          _cache[8] || (_cache[8] = createBaseVNode("div", { class: "page-title q-mb-lg" }, " Información general ", -1)),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            class: "q-mb-xl",
            rows: rows.value,
            columns: columns.value,
            "hide-bottom": ""
          }, {
            body: withCtx(() => [
              createVNode(QTr, null, {
                default: withCtx(() => [
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value.en_proceso), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value.rechazados), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value.aceptados_no_ingresados), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value.aceptados_ingresados), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QTd, { class: "number" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(counts.value.total), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["rows", "columns"]),
          _cache[9] || (_cache[9] = createBaseVNode("div", { class: "page-title q-my-lg" }, " Información en detalle ", -1)),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            "wrap-cells": "",
            columns: candidateColumns.value,
            rows: candidates.value
          }, null, 8, ["columns", "rows"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
