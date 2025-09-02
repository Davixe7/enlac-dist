import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, Q as QBtn, w as withCtx, F as Fragment, j as QIcon } from "./index-C2KXjwrR.js";
import { Q as QTd } from "./QTd-DFuziUxV.js";
import { Q as QTable } from "./QTable-CrWK76Ct.js";
import "./QSeparator-YeKVg7Wj.js";
import "./use-dark-BFshqYza.js";
import "./QVirtualScroll-CzWfFMoU.js";
import "./QList-CYozlWX4.js";
import "./QMarkupTable-DClwcSyL.js";
import "./QSelect-BuVzIreX.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./QDialog-CDPZ16vR.js";
import "./use-timeout-C7Vsd41J.js";
import "./QCheckbox-Io3ISonT.js";
import "./use-checkbox-DZGZYNIT.js";
import "./option-sizes-DU4gasAy.js";
import "./use-fullscreen-CY4ZFYMg.js";
const _hoisted_1 = { class: "flex justify-between items-center q-mb-md" };
const _hoisted_2 = { class: "q-table__actions" };
const _hoisted_3 = { class: "full-width row flex-center q-py-lg" };
const _sfc_main = {
  __name: "GroupPrograms",
  setup(__props) {
    const loading = ref(false);
    const data = ref([]);
    async function fetchData() {
      try {
        loading.value = true;
        data.value = [];
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const columns = ref([
      { name: "name", label: "Nombre", field: "name", sortable: false, align: "left" },
      {
        name: "program.name",
        label: "Programa",
        field: (row) => row.program?.name,
        sortable: false,
        align: "left"
      },
      {
        name: "candidates_count",
        label: "Número de Beneficiarios",
        field: "beneficiaries_count",
        sortable: false,
        align: "left"
      },
      {
        name: "actions",
        label: "Acciones",
        sortable: false,
        align: "right"
      }
    ]);
    onMounted(() => fetchData());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Catálogo de Grupos", -1)),
          createVNode(QBtn, {
            icon: "sym_o_add",
            color: "primary",
            to: "/grupos/crear",
            label: "Nuevo grupo"
          })
        ]),
        createVNode(QTable, {
          rows: data.value,
          columns: columns.value,
          flat: "",
          bordered: ""
        }, {
          "body-cell-actions": withCtx(() => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "edit"
                  })
                ])
              ]),
              _: 1
            })
          ]),
          "no-data": withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QIcon, {
                size: "3em",
                name: "sym_o_info",
                class: "q-pr-md"
              }),
              _cache[1] || (_cache[1] = createBaseVNode("div", null, [
                createBaseVNode("h6", { class: "q-my-none" }, "Sin grupos"),
                createBaseVNode("div", null, [
                  createBaseVNode("span", null, " No hay resultados para mostrar. ")
                ])
              ], -1))
            ])
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
