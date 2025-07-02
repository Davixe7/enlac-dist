import { r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, a as openBlock, Q as QBtn, g as createTextVNode, aI as QSpinner } from "./index-BKlFzi9U.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { api } from "./axios-DnBXXbR5.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import "./QSeparator-2_Z6TE3i.js";
import "./use-dark-hk5G9xUE.js";
import "./QList-BwwRjKko.js";
import "./QMarkupTable-fuDnew7J.js";
import "./QSelect-DKl0wMy2.js";
import "./use-key-composition-Cryiiwp5.js";
import "./QItemLabel-TX7ESzio.js";
import "./selection-C0xLdPSq.js";
import "./QDialog-dSz5pi_j.js";
import "./use-timeout-GW2bv9wv.js";
import "./QCheckbox-s2Kvsmmx.js";
import "./option-sizes-CfP0-6il.js";
import "./use-fullscreen-NQbe2Wgy.js";
const _hoisted_1 = { class: "flex q-my-lg justify-center" };
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    const loading = ref(false);
    onMounted(async () => {
      loading.value = true;
      rows.value = (await api.get("beneficiaries")).data.data;
      loading.value = false;
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
        field: (row) => row.onboard_at ? formatDate(row.onboard_at) : "Pendiente",
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
        _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title" }, "Admisiones y Beneficiarios", -1)),
        createVNode(QTable, {
          bordered: "",
          flat: "",
          "hide-bottom": "",
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          loading: loading.value
        }, {
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", null, [
                createVNode(QSpinner, {
                  size: "30px",
                  color: "primary",
                  class: "q-mr-md"
                }),
                _cache[0] || (_cache[0] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right q-table__actions q-py-xs" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  dense: "",
                  icon: "sym_o_visibility",
                  to: `beneficiarios/${props.row.id}/perfil`
                }, null, 8, ["to"]),
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  dense: "",
                  icon: "sym_o_folder",
                  to: `beneficiarios/${props.row.id}/kardex`
                }, null, 8, ["to"]),
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  dense: "",
                  icon: "sym_o_calendar_month",
                  to: `beneficiarios/${props.row.id}/citas`
                }, null, 8, ["to"]),
                createVNode(QBtn, {
                  round: "",
                  unelevated: "",
                  dense: "",
                  icon: "sym_o_attach_money",
                  to: `beneficiarios/${props.row.id}/cuotas`
                }, null, 8, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns", "loading"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
