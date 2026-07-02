import { x as onMounted, a4 as api, r as ref, O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode, U as QBtn, I as withCtx, aa as QDialog, P as Fragment } from "./index-CyP9JFdC.js";
import { Q as QTd } from "./QTd-BL_Q3vB3.js";
import { Q as QTable } from "./QTable-BXgji3lM.js";
import { e as exportXlsFile } from "./exportXls-MNnC6npM.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-CYYGo_-B.js";
import "./QVirtualScroll-1BFqeq3Y.js";
import "./QList-BjNhhijf.js";
import "./QMarkupTable-BBXZAxNg.js";
import "./QSelect-U0HMsLQF.js";
import "./QItem--cneNo7k.js";
import "./QMenu-Ci9jBKA2.js";
import "./selection-C2Qa576V.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-3u607Sg4.js";
import "./QForm-DuGKLKE0.js";
import "./notify-BMqCstfe.js";
import "./QFile-MOIYYyHP.js";
const _hoisted_1 = { class: "flex items-center q-mb-md" };
const _hoisted_2 = { class: "q-ml-auto q-gutter-x-sm" };
const _sfc_main = {
  __name: "SponsorsPage",
  setup(__props) {
    onMounted(async () => {
      sponsors.value = (await api.get("sponsors")).data.data;
    });
    const dialog2 = ref(false);
    const sponsorId = ref(null);
    const sponsors = ref([]);
    const loadingExport = ref(false);
    async function exportXls() {
      loadingExport.value = true;
      try {
        await exportXlsFile("sponsors/export");
      } finally {
        loadingExport.value = false;
      }
    }
    const columns = ref([
      {
        name: "name",
        field: "full_name",
        label: "Nombre del Padrino",
        sortable: true,
        align: "left"
      },
      { name: "id", field: "id", label: "Folio", sortable: true, align: "left" },
      {
        name: "created_at",
        field: "created_at",
        label: "Fecha de registro",
        sortable: true,
        align: "left"
      },
      {
        name: "candidates_count",
        field: "candidates_count",
        label: "Beneficiarios que apoya",
        sortable: true,
        align: "left"
      },
      { name: "actions", label: "Acciones", sortable: false, align: "right" }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Padrinos", -1)),
          createBaseVNode("div", _hoisted_2, [
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              icon: "file_download",
              label: "Exportar Excel",
              loading: loadingExport.value,
              onClick: exportXls
            }, null, 8, ["loading"]),
            createVNode(QBtn, {
              color: "primary",
              icon: "sym_o_add",
              to: "/padrinos/registrar",
              label: "Agregar Padrino"
            })
          ])
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: sponsors.value,
          columns: columns.value,
          pagination: { rowsPerPage: 10 }
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  icon: "sym_o_visibility",
                  to: `/padrinos/${props.row.id}`
                }, null, 8, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns"]),
        createVNode(QDialog, {
          modelValue: dialog2.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog2.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, { "sponsor-id": sponsorId.value }, null, 8, ["sponsor-id"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
