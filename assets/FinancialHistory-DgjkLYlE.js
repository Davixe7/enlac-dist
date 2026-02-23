import { r as ref, o as onMounted, l as api, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, h as QBtn, H as Fragment } from "./index-vLy8_pvK.js";
import { Q as QTable } from "./QTable-BiUH5gVB.js";
import "./QVirtualScroll-DMECT2OX.js";
import "./QList-fZyZnnby.js";
import "./QMarkupTable-CfesoOzi.js";
import "./QSelect-VW--WBjF.js";
import "./QItem-CygvGfQx.js";
import "./QMenu-BEeWpOq4.js";
import "./selection-Ct_8e3za.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CUXHstRc.js";
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
      try {
        loading.value = true;
        let downloadurl = `payments/${props.candidateId}/export`;
        let response = await api({
          url: downloadurl,
          method: "GET",
          responseType: "blob"
        });
        const contentDisposition = response.headers["content-disposition"];
        let filename = "reporte_descargado.xlsx";
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
