import { o as onMounted, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, W as Fragment, Q as QBtn } from "./index-DU7WQZxj.js";
import { Q as QTd } from "./QTd-G_aCvPPW.js";
import { Q as QTable } from "./QTable-CLdJnKpd.js";
import { api } from "./axios-eZUNxOzX.js";
import "./QSeparator-Cy5dZ9-W.js";
import "./use-dark-C2VKfivn.js";
import "./QList-5dBAPxOr.js";
import "./QSelect-Q3sOnmo4.js";
import "./use-key-composition-BKfn5I0Y.js";
import "./QItemLabel-ppsdJfqW.js";
import "./selection-B9Xmlxbu.js";
import "./QCheckbox-BKzbuvUV.js";
import "./use-fullscreen-B10dsazK.js";
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    onMounted(async () => {
      rows.value = (await api.get("beneficiaries")).data.data;
    });
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre del Beneficiario",
        field: "name",
        align: "left",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        field: "sheet",
        align: "left",
        sortable: true
      },
      {
        name: "status",
        label: "Estatus",
        field: "status",
        align: "left",
        sortable: true
      },
      {
        name: "onboard_at",
        label: "Fecha de ingreso",
        field: "onboard_at",
        align: "left",
        sortable: true
      },
      {
        name: "program_name",
        label: "Programa",
        field: "program_name",
        align: "left",
        sortable: true
      },
      {
        name: "actions",
        label: "Acciones",
        field: "actions",
        align: "center"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title" }, "Beneficiarios", -1)),
        createVNode(QTable, {
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          "hide-bottom": ""
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  icon: "sym_o_attach_money",
                  to: `beneficiarios/${props.row.id}/cuotas`
                }, null, 8, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
