import { o as onMounted, l as api, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, h as QBtn, w as withCtx, s as QDialog, H as Fragment } from "./index-Bj0d6EJy.js";
import { Q as QTd } from "./QTd-BlkBnRbD.js";
import { Q as QTable } from "./QTable-BRxQDYTK.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-C28KNrcc.js";
import "./QVirtualScroll-O9ZvhSfU.js";
import "./QList-B0WbKoMu.js";
import "./QMarkupTable-mbj9NiyW.js";
import "./QSelect-l1dRAC3Q.js";
import "./QItem-BdujNBmC.js";
import "./QMenu-DJC6B_Cs.js";
import "./selection-W867SDax.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-YBN6V5Rk.js";
import "./QForm-CRX4wAvS.js";
import "./notify-DSQRBAOh.js";
import "./QFile-BxHSH_bt.js";
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
