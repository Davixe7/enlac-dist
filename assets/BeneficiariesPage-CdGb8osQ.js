import { o as onMounted, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, W as Fragment, Q as QBtn } from "./index-VJVtHb4i.js";
import { Q as QTd } from "./QTd-wL_YKhjV.js";
import { Q as QTable } from "./QTable-BgjmYekS.js";
import { api } from "./axios-BgrPseWt.js";
import "./QSeparator-B44-Ogzk.js";
import "./use-dark-DYVVyhjM.js";
import "./QList-BEwuppmH.js";
import "./QSelect-Dw9jouLP.js";
import "./use-key-composition-DoKllCYK.js";
import "./QItemLabel-JKpEpf5_.js";
import "./selection-BPWdDBn3.js";
import "./QCheckbox-D1Zqx8H0.js";
import "./use-fullscreen-BaWGg6j_.js";
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
