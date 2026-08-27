import { r as ref, K as onMounted, w as watch, q as createBlock, s as openBlock, t as withCtx, N as createBaseVNode, v as createVNode, G as QBtn, B as createElementBlock, C as renderList, D as toDisplayString, F as Fragment, V as api } from "./index-CtX55rPg.js";
import { Q as QMarkupTable } from "./QMarkupTable-HtlB0vwn.js";
import { Q as QPage } from "./QPage-jVkVV77P.js";
import { _ as _sfc_main$2 } from "./EnlacDate-C2INBmRH.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-CESrSf8v.js";
import { e as exportXlsFile } from "./exportXls-w3Uh9NIA.js";
import "./QDate-B-pJQXYD.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-Bu3hoGtp.js";
import "./date-C83J5LFZ.js";
import "./format-CnAOSoyw.js";
import "./QPopupProxy-DP1dQi68.js";
import "./QMenu-CT9hGhHI.js";
import "./position-engine-DMMaRPIq.js";
import "./selection-BmM1jSsC.js";
import "./ClosePopup-C2YI1RGi.js";
import "./datetime-Dvln09A7.js";
import "./QSelect-bgEQ-w_V.js";
import "./QChip-DUrZdEPF.js";
import "./QItem-BV49-FNi.js";
const _hoisted_1 = { class: "row q-mb-md justify-between items-end" };
const _hoisted_2 = { class: "flex items-end" };
const _sfc_main = {
  __name: "AttendanceReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const loading = ref(false);
    const rows = ref([]);
    const daysCount = ref(0);
    const average = ref(0);
    async function fetchData() {
      try {
        loading.value = true;
        let params = { start_date: startDate.value, end_date: endDate.value };
        if (candidateId.value) params.candidate_id = candidateId.value;
        let response = (await api.get("reports/attendances", { params })).data.data;
        rows.value = response.rows;
        daysCount.value = response.days;
        average.value = response.average;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => fetchData());
    watch(candidateId, () => fetchData());
    watch(startDate, () => fetchData());
    watch(endDate, () => fetchData());
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(
          `reports/attendances/export`,
          {
            start_date: startDate.value,
            end_date: endDate.value
          },
          "reporte_de_asistencias_y_faltas_diarias_" + startDate.value + "_" + endDate.value + ".xlsx"
        );
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title" }, "Reporte de Asistencias y Faltas Diarias", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", null, [
              createVNode(QBtn, {
                outline: "",
                color: "primary",
                icon: "file_download",
                label: "Exportar Excel",
                onClick: exportXls
              })
            ])
          ]),
          createVNode(QMarkupTable, null, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", { class: "text-left" }, "Nombre del beneficiario"),
                  createBaseVNode("th", { class: "text-left" }, "Total de días laborados"),
                  createBaseVNode("th", { class: "text-left" }, "Asistencias diarias"),
                  createBaseVNode("th", { class: "text-left" }, "Faltas justificadas diarias"),
                  createBaseVNode("th", { class: "text-left" }, "Faltas injustificadas diarias"),
                  createBaseVNode("th", { class: "text-left" }, "% Asistencia")
                ])
              ], -1)),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
                  return openBlock(), createElementBlock("tr", {
                    key: row.candidate_id
                  }, [
                    createBaseVNode("td", null, toDisplayString(row.full_name), 1),
                    createBaseVNode("td", null, toDisplayString(daysCount.value), 1),
                    createBaseVNode("td", null, toDisplayString(row.present), 1),
                    createBaseVNode("td", null, toDisplayString(row.justified), 1),
                    createBaseVNode("td", null, toDisplayString(row.unjustified), 1),
                    createBaseVNode("td", null, toDisplayString(row.percentage) + " %", 1)
                  ]);
                }), 128)),
                createBaseVNode("tr", null, [
                  _cache[3] || (_cache[3] = createBaseVNode("td", { colspan: "5" }, null, -1)),
                  createBaseVNode("td", null, toDisplayString(average.value) + " %", 1)
                ])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
