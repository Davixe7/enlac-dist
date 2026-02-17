import { Q as QTable } from "./QTable-5_0AeQ_Q.js";
import { Q as QPage } from "./QPage-gdN3Nbwe.js";
import { r as ref, o as onMounted, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode } from "./index-CnPCrPcs.js";
import { _ as _sfc_main$1 } from "./EnlacDate-qMk6pUnv.js";
import { n as notify } from "./notify-CvtyHu7z.js";
import "./QVirtualScroll-DnzmeAgO.js";
import "./QList-B0uO-GP0.js";
import "./QMarkupTable-BQ20kKCe.js";
import "./QSelect-2bl5SHtH.js";
import "./QItem-Ce5rFAfg.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-Be43hROf.js";
import "./QDate-7g8-8pOA.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
import "./QPopupProxy-B2IRhZfT.js";
import "./ClosePopup-c30KicH8.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "flex q-mb-md" };
const _sfc_main = {
  __name: "IssuesReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(55);
    const loading = ref(false);
    const rows = ref([]);
    const columns = ref([
      { name: "candidate.full_name", label: "Nombre del beneficiario", field: (row) => row.candidate.full_name, align: "left" },
      { name: "category", label: "Área", field: (row) => row.plan_category.label, align: "left" },
      { name: "date", label: "Fecha Reportada", field: "date", align: "left" },
      { name: "user", label: "Reportó", field: (row) => row.user.name, align: "left" },
      {
        name: "type",
        label: "Tipo",
        field: (row) => subjects.value[row.type - 1]?.label || "Desconocido",
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
        rows.value = (await api.get(`issues/?start_date=${startDate.value}&end_date=${endDate.value}&candidate_id=${candidateId.value}`)).data.data;
        notify.positive("Incidencias cargadas con exito");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudieron cargar las incidencias");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchIssues();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Incidencias", -1)),
            createVNode(_sfc_main$1, {
              modelValue: startDate.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
                fetchIssues
              ],
              class: "q-ml-auto q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(_sfc_main$1, {
              modelValue: endDate.value,
              "onUpdate:modelValue": [
                _cache[1] || (_cache[1] = ($event) => endDate.value = $event),
                fetchIssues
              ]
            }, null, 8, ["modelValue"])
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
