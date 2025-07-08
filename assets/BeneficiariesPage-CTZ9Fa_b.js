import { r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, a as openBlock, Q as QBtn, g as createTextVNode, aI as QSpinner } from "./index-D6w-cXuQ.js";
import { Q as QTd } from "./QTd-DKJWU2A4.js";
import { Q as QTable } from "./QTable-Bp4bRbRZ.js";
import { api } from "./axios-DOaUvPJw.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import "./QSeparator-DY803WMm.js";
import "./use-dark-3OGnIsE7.js";
import "./QList-D_uMUYMB.js";
import "./QMarkupTable-Bmy7cnK1.js";
import "./QSelect-CDZ-81F1.js";
import "./use-key-composition-BP8jtq2e.js";
import "./QItemLabel-BELvJCJR.js";
import "./selection-GX1L8RjI.js";
import "./QDialog-Bi4NORAY.js";
import "./use-timeout-tcy2aUTk.js";
import "./QCheckbox-BMnj2b1-.js";
import "./option-sizes-B3TZgULG.js";
import "./use-fullscreen-D4QZmw0H.js";
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
