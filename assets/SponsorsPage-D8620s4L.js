import { o as onMounted, l as api, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, h as QBtn, w as withCtx, s as QDialog, H as Fragment } from "./index-BMx8ZhBX.js";
import { Q as QTd } from "./QTd-CL4qoWL4.js";
import { Q as QTable } from "./QTable-D-DRE4eg.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-Dd0U91jn.js";
import "./QVirtualScroll-BtJrDZT_.js";
import "./QList-D-jDIEtg.js";
import "./QMarkupTable-DKRI_D2Y.js";
import "./QSelect-B0MGoxqs.js";
import "./QItem-Br0oypuR.js";
import "./QMenu-9gvivH3V.js";
import "./selection-D-nz9tJE.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-9XLzQgwy.js";
import "./QForm-M_cI1vlI.js";
import "./notify-DbcNKswI.js";
import "./QFile-DO3DL9Bn.js";
const _hoisted_1 = { class: "flex items-center q-mb-md" };
const _sfc_main = {
  __name: "SponsorsPage",
  setup(__props) {
    onMounted(async () => {
      sponsors.value = (await api.get("sponsors")).data.data;
    });
    const dialog2 = ref(false);
    const sponsorId = ref(null);
    const sponsors = ref([]);
    const columns = ref([
      {
        name: "name",
        field: "name",
        label: "Nombre del Padrino",
        sortable: true,
        align: "left"
      },
      { name: "id", field: "id", label: "Folio", sortable: true, align: "left" },
      {
        name: "created_at",
        field: "created_at",
        label: "Fecha de registro",
        sortable: true,
        align: "left"
      },
      {
        name: "candidates_count",
        field: "candidates_count",
        label: "Beneficiarios que apoya",
        sortable: true,
        align: "left"
      },
      { name: "actions", label: "Acciones", sortable: false, align: "right" }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Padrinos", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add",
            to: "/padrinos/registrar",
            label: "Agregar Padrino"
          })
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          "hide-bottom": "",
          rows: sponsors.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 }
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  icon: "sym_o_visibility",
                  to: `/padrinos/${props.row.id}`
                }, null, 8, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns"]),
        createVNode(QDialog, {
          modelValue: dialog2.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog2.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, { "sponsor-id": sponsorId.value }, null, 8, ["sponsor-id"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
