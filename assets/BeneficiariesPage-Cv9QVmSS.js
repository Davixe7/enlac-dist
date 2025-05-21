import { j as onMounted, r as ref, U as createElementBlock, G as openBlock, L as createBaseVNode, K as createVNode, H as withCtx, V as Fragment, N as QBtn } from "./index-Do2UNGkK.js";
import { Q as QTd } from "./QTd-CpvcY3fr.js";
import { Q as QTable } from "./QTable-C65yIXCw.js";
import { api } from "./axios--LrLQM_c.js";
import "./QSeparator-DZhmyG_f.js";
import "./use-dark-DR5cwYKQ.js";
import "./QList-CitW4czx.js";
import "./QMarkupTable-kHyEbSXb.js";
import "./QSelect-gGbryZRL.js";
import "./use-key-composition-Cb3U_Tha.js";
import "./QItemLabel-WLy9p-qo.js";
import "./selection-r0vkVvJb.js";
import "./use-timeout-CzOVVImI.js";
import "./QCheckbox-DXE74Rqj.js";
import "./use-fullscreen-DMaNYzjw.js";
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
