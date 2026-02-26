import { r as ref, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode, h as QBtn, c as createElementBlock, H as Fragment, K as renderList, t as toDisplayString } from "./index-Bj0d6EJy.js";
import { Q as QMarkupTable } from "./QMarkupTable-mbj9NiyW.js";
import { Q as QPage } from "./QPage-DLLies9N.js";
import { _ as _sfc_main$2 } from "./EnlacDate-BCjmqnM7.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-DW04Yv2_.js";
import "./QDate-DDWNpOhk.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DzvY6g4E.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-BkZiMT5O.js";
import "./QMenu-DJC6B_Cs.js";
import "./selection-W867SDax.js";
import "./ClosePopup-3JX1s3it.js";
import "./datetime-Dvln09A7.js";
import "./QSelect-l1dRAC3Q.js";
import "./QItem-BdujNBmC.js";
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
