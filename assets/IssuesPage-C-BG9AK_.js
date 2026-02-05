import { Q as QTable } from "./QTable-BlWVfU6P.js";
import { Q as QPage } from "./QPage-CbXJqtYF.js";
import { r as ref, o as onMounted, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode } from "./index-CIixvMyj.js";
import { _ as _sfc_main$1 } from "./EnlacDate-ub136tD-.js";
import { n as notify } from "./notify-ZDb5L8uG.js";
import "./QVirtualScroll-J6CPfoR2.js";
import "./QList-Cyz_qr_Z.js";
import "./QMarkupTable-NScijyJm.js";
import "./QSelect-CUr3bFcr.js";
import "./QItem-DBnEobVN.js";
import "./selection-DNuwEDNn.js";
import "./use-fullscreen-CVrPsPK4.js";
import "./QDate-D8yx90lf.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-E-vefwTg.js";
import "./QPopupProxy-eT_UQeup.js";
import "./ClosePopup-CthmGlTf.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "flex q-mb-md" };
const _sfc_main = {
  __name: "IssuesPage",
  setup(__props) {
    const dateISO = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const loading = ref(false);
    const rows = ref([]);
    const columns = ref([
      { name: "category", label: "Area", field: (row) => row.plan_category.label, align: "left" },
      {
        name: "type",
        label: "Asunto",
        field: (row) => subjects.value[row.type - 1]?.label || "Desconocido",
        align: "left"
      },
      { name: "date", label: "Fecha Reportada", field: "date", align: "left" },
      { name: "user", label: "Reporto", field: (row) => row.user.name, align: "left" },
      { name: "comments", label: "Comentarios", field: "comments", align: "left" },
      { name: "status", label: "Estado", align: "left" }
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
        rows.value = (await api.get(`issues/?date=${dateISO.value}`)).data.data;
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
            _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Incidencias", -1)),
            createVNode(_sfc_main$1, {
              modelValue: dateISO.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => dateISO.value = $event),
                fetchIssues
              ],
              class: "q-ml-auto"
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
