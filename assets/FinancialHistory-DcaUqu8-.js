import { r as ref, x as onMounted, a4 as api, O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode, U as QBtn, P as Fragment } from "./index-73seMa9c.js";
import { Q as QTable } from "./QTable-Dp0TbDg4.js";
import { e as exportXlsFile } from "./exportXls-9t8TbW2p.js";
import "./QVirtualScroll-Dtr5Im6o.js";
import "./QList-COXbN_4Y.js";
import "./QMarkupTable-sgUXJ8ii.js";
import "./QSelect-D7YhNIyE.js";
import "./QItem-BL3QQOOm.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CpLfyNqN.js";
const _hoisted_1 = { class: "flex q-py-md items-center" };
const _sfc_main = {
  __name: "FinancialHistory",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(true);
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "date", label: "Fecha", field: "date" },
      {
        align: "left",
        name: "user",
        label: "Registrado por",
        field: (row) => `${row.user.name} ${row.user.last_name}`
      },
      { align: "left", name: "payment_type", label: "Concepto", field: "payment_type" },
      { align: "left", name: "amount", label: "Monto", field: "amount" },
      { align: "left", name: "scope", label: "Cobertura", field: "scope" },
      { align: "left", name: "ref", label: "Referencia", field: "ref" },
      { align: "left", name: "comments", label: "Comentarios", field: "comments" },
      { align: "right", name: "payment_method", label: "Metodo de pago", field: "payment_method" }
    ]);
    onMounted(async () => {
      rows.value = (await api.get(`/payments/?candidate_id=${props.candidateId}`)).data.data;
    });
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(`payments/${props.candidateId}/export`);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title q-mb-none page-title--no-margin" }, "Tesorería / Historial de Pagos", -1)),
          createVNode(QBtn, {
            class: "q-mr-md q-ml-auto",
            onClick: exportXls,
            label: "Exportar a Excel",
            color: "green",
            icon: "sym_o_file_export",
            unelevated: "",
            outline: ""
          }),
          createVNode(QBtn, {
            class: "",
            to: `/tesoreria`,
            label: "Regresar",
            flat: ""
          })
        ]),
        createVNode(QTable, {
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
