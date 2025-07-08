import { Q as QTd } from "./QTd-DKJWU2A4.js";
import { Q as QTable } from "./QTable-Bp4bRbRZ.js";
import { api } from "./axios-DOaUvPJw.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, f as resolveComponent, E as normalizeClass, g as createTextVNode, s as createCommentVNode, t as toDisplayString } from "./index-D6w-cXuQ.js";
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
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
const _sfc_main = {
  __name: "FinancialPage",
  setup(__props) {
    const rows = ref([]);
    const columns = ref([
      { name: "name", label: "Beneficiario", align: "left", sortable: true },
      { name: "id", label: "Folio", field: "id", align: "left", sortable: true },
      { name: "program", label: "Programa", field: (row) => row.program.name, align: "left" },
      { name: "parents", label: "Cuota Padres (mes)", align: "left" },
      { name: "sponsors", label: "Cuota Padrinos (mes)", align: "left" },
      { name: "enlac", label: "Beca ENLAC (mes)", field: (row) => row.enlacs_amount, align: "left" }
    ]);
    onMounted(async () => {
      rows.value = (await api.get("financial")).data.data;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "page-title" }, "Tesoreria", -1)),
        createVNode(QTable, {
          bordered: "",
          "hide-bottom": "",
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: -1 }
        }, {
          "body-cell-name": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(_component_router_link, {
                  to: `/beneficiarios/${props.row.id}/configs`
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.full_name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-parents": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass([`bg-${props.row.parent_status}`])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`${props.row.parent_paid} / ${props.row.parent_amount}`) + " ", 1),
                props.row.last_parent_payment_date ? (openBlock(), createElementBlock("div", _hoisted_1, [
                  createBaseVNode("small", null, toDisplayString(props.row.last_parent_payment_date), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          "body-cell-sponsors": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass([`bg-${props.row.sponsr_status}`])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`${props.row.sponsr_paid} / ${props.row.sponsr_amount}`) + " ", 1),
                props.row.last_sponsr_payment_date ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("small", null, toDisplayString(props.row.last_sponsr_payment_date), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"])
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
