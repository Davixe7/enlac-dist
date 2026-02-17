import { r as ref, o as onMounted, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode, h as QBtn, c as createElementBlock, H as Fragment, K as renderList, t as toDisplayString } from "./index-CnPCrPcs.js";
import { Q as QMarkupTable } from "./QMarkupTable-BQ20kKCe.js";
import { Q as QPage } from "./QPage-gdN3Nbwe.js";
import { _ as _sfc_main$1 } from "./EnlacDate-qMk6pUnv.js";
import "./QDate-7g8-8pOA.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-B2IRhZfT.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./ClosePopup-c30KicH8.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md" };
const _hoisted_2 = { class: "col-md-4 flex" };
const _sfc_main = {
  __name: "AttendanceReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const loading = ref(false);
    const rows = ref([]);
    const daysCount = ref(0);
    const average = ref(0);
    async function fetchData() {
      try {
        loading.value = true;
        let params = { start_date: startDate.value, end_date: endDate.value };
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title" }, "Reporte de Asistencias y Faltas Diarias", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$1, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                color: "primary",
                unelevated: "",
                icon: "sym_o_search",
                onClick: fetchData,
                loading: loading.value,
                label: "Buscar"
              }, null, 8, ["loading"])
            ])
          ]),
          createVNode(QMarkupTable, null, {
            default: withCtx(() => [
              _cache[3] || (_cache[3] = createBaseVNode("thead", null, [
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
                  _cache[2] || (_cache[2] = createBaseVNode("td", { colspan: "5" }, null, -1)),
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
