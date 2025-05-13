import { o as onMounted, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, W as Fragment, Q as QBtn } from "./index-DNzcpddl.js";
import { Q as QTd } from "./QTd-D_yne8jU.js";
import { Q as QTable } from "./QTable-BF17cnq0.js";
import { api } from "./axios-rEY_Jecr.js";
import "./QSeparator-DQ_sL_0t.js";
import "./use-dark-WkhccWQ1.js";
import "./QList-CrD9GAVD.js";
import "./QSelect-Dfccb1zM.js";
import "./use-key-composition-DOj7cCcL.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
import "./QCheckbox-DHyNCU4l.js";
import "./use-fullscreen-C2morA89.js";
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
