import { o as onMounted, i as api, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, Q as QBtn, F as Fragment, h as createTextVNode } from "./index-SPihmL4j.js";
import { Q as QTd } from "./QTd-3HatVcou.js";
import { Q as QTable } from "./QTable-D8eRzXfk.js";
import { Q as QDialog } from "./QDialog-y9E-04rI.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-CVB7OCjp.js";
import "./QSeparator-BEuoRhy8.js";
import "./use-dark-BzDTrRl4.js";
import "./QList-HrA-8bKd.js";
import "./QMarkupTable-ArqECrZD.js";
import "./QSelect-BwWblSDD.js";
import "./use-key-composition-DUFFmK9W.js";
import "./QItemLabel-D_0HnZj_.js";
import "./selection-DRsVDt-b.js";
import "./use-timeout-xVUlrfQi.js";
import "./QCheckbox-CCYU-rV6.js";
import "./option-sizes-TwU3Ft3M.js";
import "./use-fullscreen-Bna5gbI9.js";
import "./QInput-DV-Rfkou.js";
import "./QRadio-BnMFhbos.js";
import "./QForm-CIUMPmNx.js";
import "./QCard-BH9zYwWL.js";
import "./notify-BUfyFQf6.js";
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
        field: "entry_date",
        label: "Fecha de ingreso",
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
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title q-my-none" }, "Padrinos", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add",
            to: "/padrinos/registrar"
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Agregar Padrino ")
            ])),
            _: 1
          })
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          "hide-bottom": "",
          rows: sponsors.value,
          columns: columns.value
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
