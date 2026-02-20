import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, h as QBtn, w as withCtx, H as Fragment, l as api, k as QIcon } from "./index-BMx8ZhBX.js";
import { Q as QTd } from "./QTd-CL4qoWL4.js";
import { Q as QTable } from "./QTable-D-DRE4eg.js";
import "./QVirtualScroll-BtJrDZT_.js";
import "./QList-D-jDIEtg.js";
import "./QMarkupTable-DKRI_D2Y.js";
import "./QSelect-B0MGoxqs.js";
import "./QItem-Br0oypuR.js";
import "./QMenu-9gvivH3V.js";
import "./selection-D-nz9tJE.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-9XLzQgwy.js";
const _hoisted_1 = { class: "flex justify-between items-center q-mb-md" };
const _hoisted_2 = { class: "q-table__actions" };
const _hoisted_3 = { class: "full-width row flex-center q-py-lg" };
const _sfc_main = {
  __name: "GroupsPage",
  setup(__props) {
    const loading = ref(false);
    const data = ref([]);
    async function fetchData() {
      try {
        loading.value = true;
        data.value = (await api.get("groups")).data.data;
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
        field: "candidates_count",
        sortable: false,
        align: "left"
      },
      {
        name: "leader",
        label: "Titular",
        field: (row) => row.titular,
        sortable: false,
        align: "left"
      },
      {
        name: "assistant",
        label: "Asistente",
        field: (row) => row.asistente,
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
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "visibility",
                    to: `/grupos/${props.row.id}`
                  }, null, 8, ["to"]),
                  createVNode(QBtn, {
                    flat: "",
                    dense: "",
                    round: "",
                    icon: "edit",
                    to: `/grupos/${props.row.id}/editar`
                  }, null, 8, ["to"])
                ])
              ]),
              _: 2
            }, 1024)
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
