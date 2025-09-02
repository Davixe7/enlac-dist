import { o as onMounted, i as api, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, Q as QBtn, F as Fragment, h as createTextVNode } from "./index-C2KXjwrR.js";
import { Q as QTd } from "./QTd-DFuziUxV.js";
import { Q as QTable } from "./QTable-CrWK76Ct.js";
import { Q as QDialog } from "./QDialog-CDPZ16vR.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-B3qVFx99.js";
import "./QSeparator-YeKVg7Wj.js";
import "./use-dark-BFshqYza.js";
import "./QVirtualScroll-CzWfFMoU.js";
import "./QList-CYozlWX4.js";
import "./QMarkupTable-DClwcSyL.js";
import "./QSelect-BuVzIreX.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./use-timeout-C7Vsd41J.js";
import "./QCheckbox-Io3ISonT.js";
import "./use-checkbox-DZGZYNIT.js";
import "./option-sizes-DU4gasAy.js";
import "./use-fullscreen-CY4ZFYMg.js";
import "./QInput-C-mtqO6Q.js";
import "./QRadio-_wj-w-mt.js";
import "./QForm-BXTj23Ur.js";
import "./QCard-CI6b1UjI.js";
import "./notify-3cR8ls6a.js";
import "./QFile-glgdxd_w.js";
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
