import { Q as QTable } from "./QTable-DxPL-1hW.js";
import { Q as QPage } from "./QPage-DrhS5Iru.js";
import { r as ref, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode } from "./index-CrF4bxHZ.js";
import { _ as _sfc_main$1 } from "./EnlacDate-gr81Ic04.js";
import { _ as _sfc_main$2 } from "./BeneficiarySelect-C-WRzfLX.js";
import "./QVirtualScroll-BqtiGMxf.js";
import "./QList-DH7YEijs.js";
import "./QMarkupTable-CuxbvqH2.js";
import "./QSelect-CtuOYSfN.js";
import "./QItem-HobJXZdD.js";
import "./QMenu-CvLQFkC2.js";
import "./selection-J9BZJDbU.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-Crpxg2vo.js";
import "./QDate-B9IQ5j7B.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-BT9OLhSX.js";
import "./QPopupProxy-C4YhzFeU.js";
import "./ClosePopup-DF4PLPjE.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-lg" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-end q-gutter-x-md" };
const _sfc_main = {
  __name: "StatusHistory",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const statuses = ref({});
    const loading = ref(false);
    const rows = ref([]);
    const columns = [
      { name: "date", label: "Fecha", field: "created_at", align: "left" },
      { name: "name", label: "Beneficiario", field: (row) => row.candidate?.full_name, align: "left" },
      { name: "name", label: "Autor", field: (row) => row.author?.full_name ?? "No disponible", align: "left" },
      { name: "status", label: "Estatus", field: (row) => statuses.value.get(row.status), align: "left" }
    ];
    async function fetchRows() {
      try {
        loading.value = true;
        let params = {
          start_date: startDate.value,
          end_date: endDate.value,
          candidate_id: candidateId.value
        };
        let response = (await api.get("candidate_statuses")).data.data;
        statuses.value = new Map(response.map((s) => [s.value, s.label]));
        rows.value = (await api.get("candidate_status_logs", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchRows();
    });
    watch(startDate, () => fetchRows());
    watch(endDate, () => fetchRows());
    watch(candidateId, () => fetchRows());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, "Historico de Cambios de Estado del Beneficiario", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event)
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$1, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event)
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => candidateId.value = $event)
              }, null, 8, ["modelValue"])
            ])
          ]),
          createVNode(QTable, {
            pagination: { rowsPerPage: 0 },
            rows: rows.value,
            columns,
            flat: "",
            bordered: ""
          }, null, 8, ["rows"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
