import { Q as QTable } from "./QTable-CUmzaAn2.js";
import { Q as QPage } from "./QPage-BMIwFIc3.js";
import { r as ref, A as computed, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode } from "./index-CZCe8xRO.js";
import { _ as _sfc_main$2 } from "./EnlacDate-CxNkVIh9.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-BdkrautS.js";
import { n as notify } from "./notify-BqysXg7-.js";
import "./QVirtualScroll-CZUNTf8J.js";
import "./QList-C5bKDJ7H.js";
import "./QMarkupTable-DO3UXuPf.js";
import "./QSelect-ChwyA_6G.js";
import "./QItem-C0btFpr9.js";
import "./QMenu-DgHVTzjM.js";
import "./selection-h7BdV_rr.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-DdtlJimd.js";
import "./QDate-CVZs2IW6.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-C2rG9OVd.js";
import "./QPopupProxy-DlYsQC3U.js";
import "./ClosePopup-CM-AG3Zp.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-end" };
const _sfc_main = {
  __name: "IssuesReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const loading = ref(false);
    const rows = ref([]);
    const subjectsMap = computed(() => new Map(subjects.value.map((s) => [s.id, s.label])));
    const columns = ref([
      { name: "candidate.full_name", label: "Nombre del beneficiario", field: (row) => row.candidate.full_name, align: "left" },
      { name: "category", label: "Área", field: (row) => row.plan_category.label, align: "left" },
      { name: "date", label: "Fecha Reportada", field: "date", align: "left" },
      { name: "user", label: "Reportó", field: (row) => row.user.name, align: "left" },
      {
        name: "type",
        label: "Tipo",
        field: (row) => subjectsMap.value.get(row.type) || "Desconocido",
        align: "left"
      },
      { name: "comments", label: "Comentarios", field: "comments", align: "left" }
    ]);
    const subjects = ref([
      {
        id: 1,
        label: "Alimentación"
      },
      {
        id: 2,
        label: "Retardo"
      },
      {
        id: 3,
        label: "Higiene"
      },
      {
        id: 4,
        label: "Falta a Cita Médica"
      },
      {
        id: 5,
        label: "Falta a Cita Nutrición"
      },
      {
        id: 6,
        label: "Falta a Cita Psicología"
      },
      {
        id: 7,
        label: "Falta a Cita Comunicación"
      },
      {
        id: 8,
        label: "Falta a Capacitación"
      },
      {
        id: 9,
        label: "Falta a Reunión de Padres"
      },
      {
        id: 10,
        label: "Falta Actividades de Recaudación de Fondos"
      },
      {
        id: 11,
        label: "Indisciplina"
      },
      {
        id: 12,
        label: "Otro"
      }
    ]);
    async function fetchIssues() {
      try {
        loading.value = true;
        const params = {
          start_date: startDate.value,
          end_date: endDate.value
        };
        if (candidateId.value) {
          params.candidate_id = candidateId.value;
        }
        const response = await api.get("issues/", { params });
        rows.value = response.data.data;
        notify.positive("Incidencias cargadas con éxito");
      } catch (error) {
        console.error("Error fetching issues:", error);
        notify.negative("No se pudieron cargar las incidencias");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchIssues();
    });
    watch(candidateId, () => fetchIssues());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-md" }, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, "Incidencias", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: startDate.value,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                  fetchIssues
                ],
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => endDate.value = $event),
                  fetchIssues
                ]
              }, null, 8, ["modelValue"])
            ])
          ]),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            rows: rows.value,
            columns: columns.value,
            loading: loading.value,
            pagination: { rowsPerPage: 0 },
            "row-key": "id"
          }, null, 8, ["rows", "columns", "loading"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
