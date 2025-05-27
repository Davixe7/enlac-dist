import { j as onMounted, r as ref, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, K as withCtx, X as Fragment, P as QBtn, O as createTextVNode } from "./index-cCQoerBE.js";
import { Q as QTd } from "./QTd-DvptlpfK.js";
import { Q as QTable } from "./QTable-BFy7GktN.js";
import { api } from "./axios-ByMy53kN.js";
import "./QSeparator-BP1E2Kcs.js";
import "./use-dark-C8v3QwmZ.js";
import "./QList-Bqgej6v_.js";
import "./QMarkupTable-D1U2wsrV.js";
import "./QSelect-CtZdKzvL.js";
import "./use-key-composition-Cm9vnODB.js";
import "./QItemLabel-BM-XPiQp.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./QCheckbox-BMrw9OGo.js";
import "./use-fullscreen-BhYJh7gg.js";
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
        align: "right"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title" }, "Beneficiarios", -1)),
        createVNode(QTable, {
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          "hide-bottom": ""
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  icon: "sym_o_attach_money",
                  to: `beneficiarios/${props.row.id}/cuotas`
                }, null, 8, ["to"]),
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  style: { "font-weight": "600", "font-size": "1.5rem", "width": "45px !important", "height": "45px !important", "min-width": "initial", "min-height": "initial" },
                  to: `beneficiarios/${props.row.id}/kardex`
                }, {
                  default: withCtx(() => _cache[0] || (_cache[0] = [
                    createTextVNode("K")
                  ])),
                  _: 2
                }, 1032, ["to"]),
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  icon: "sym_o_calendar_month",
                  to: `beneficiarios/${props.row.id}/citas`
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
