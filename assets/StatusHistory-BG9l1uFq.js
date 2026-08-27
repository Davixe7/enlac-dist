import { Q as QTable } from "./QTable-B8jvDOaB.js";
import { Q as QPage } from "./QPage-DTnmuxcE.js";
import { r as ref, K as onMounted, w as watch, q as createBlock, t as withCtx, V as api, s as openBlock, N as createBaseVNode, v as createVNode } from "./index-wM11jDk3.js";
import { d as date } from "./date-F-ikrccM.js";
import { _ as _sfc_main$1 } from "./EnlacDate-BHAqVlDh.js";
import { _ as _sfc_main$2 } from "./BeneficiarySelect-BmYE5n7u.js";
import "./QVirtualScroll-BTLt2pXl.js";
import "./QList-I7wt001i.js";
import "./QMarkupTable-BJkI4Y2C.js";
import "./QSelect-CcgipNm1.js";
import "./QChip-9wwIEELM.js";
import "./QItem-ouM2WTqi.js";
import "./QMenu-DlCJLyq4.js";
import "./position-engine-C00F9T-k.js";
import "./selection-CttaKPaT.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-BxCH9Rwu.js";
import "./QDate-C_j4urII.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-BRYqZhj4.js";
import "./QPopupProxy-fzUKWPIG.js";
import "./ClosePopup-DnliY8Ma.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-lg" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-end q-gutter-x-md" };
const _sfc_main = {
  __name: "StatusHistory",
  setup(__props) {
    const today = /* @__PURE__ */ new Date();
    const startDate = ref(date.formatDate(date.subtractFromDate(today, { months: 1 })));
    const endDate = ref(date.formatDate(today, "YYYY-MM-DD"));
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
