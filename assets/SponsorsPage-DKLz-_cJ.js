import { K as onMounted, V as api, r as ref, B as createElementBlock, s as openBlock, N as createBaseVNode, v as createVNode, G as QBtn, t as withCtx, a3 as QDialog, F as Fragment } from "./index-CHo5VICr.js";
import { Q as QTd } from "./QTd-B7mwC4UJ.js";
import { Q as QTable } from "./QTable-Dp07eZUT.js";
import { e as exportXlsFile } from "./exportXls-C6NVoorB.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BhoTf4ly.js";
import "./QVirtualScroll-CMf9pHQ_.js";
import "./QList-PEd6ETT3.js";
import "./QMarkupTable-ihdeFX5Y.js";
import "./QSelect-BdGTA1FO.js";
import "./QChip-o2sYrAfm.js";
import "./QItem-CDM0OUtz.js";
import "./QMenu-CAA8Iaid.js";
import "./position-engine-D8kD5zik.js";
import "./selection-CeFN8aZv.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-Cal-NAE8.js";
import "./QForm-Boc3Qq5H.js";
import "./notify-uWCQJ6k7.js";
import "./QFile-D4XAMLdf.js";
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
