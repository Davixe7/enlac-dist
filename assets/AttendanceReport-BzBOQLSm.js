import { r as ref, o as onMounted, w as watch, H as createBlock, I as openBlock, J as withCtx, _ as createBaseVNode, K as createVNode, V as QBtn, P as createElementBlock, S as renderList, R as Fragment, T as toDisplayString, ag as api } from "./index-jjbrZD2b.js";
import { Q as QMarkupTable } from "./QMarkupTable-DwWEsJMM.js";
import { Q as QPage } from "./QPage-LVtxJ0hY.js";
import { _ as _sfc_main$2 } from "./EnlacDate-T7JgOw_i.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-BxLh4lu4.js";
import "./QDate-DKWfYCbR.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-BKe2O-mS.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-BcFgy87V.js";
import "./QMenu-CyjHXslh.js";
import "./selection-fhLsiU0Z.js";
import "./ClosePopup-urT4E2d4.js";
import "./datetime-Dvln09A7.js";
import "./QSelect-C4ys67zQ.js";
import "./QItem-CueSYjnM.js";
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
      try {
        loading.value = true;
        let downloadurl = `reports/attendances/export`;
        let response = await api({
          url: downloadurl,
          method: "GET",
          responseType: "blob",
          params: {
            start_date: startDate.value,
            end_date: endDate.value
          }
        });
        const contentDisposition = response.headers["content-disposition"];
        let filename = "reporte_de_asistencias_y_faltas_diarias_" + startDate.value + "_" + endDate.value + ".xlsx";
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+?)"/);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
          // Usar el tipo MIME correcto
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log(`Descarga de ${filename} iniciada.`);
      } catch (error) {
        console.log(error);
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
