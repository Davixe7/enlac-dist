import { o as onMounted, i as api, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, h as createTextVNode, Q as QBtn, F as Fragment } from "./index-B_bwoT8t.js";
import { Q as QTd } from "./QTd-D6a2K-nq.js";
import { Q as QTable } from "./QTable-D8tXojFp.js";
import { Q as QDialog } from "./QDialog-C-Ls8xlu.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-Db96z54S.js";
import "./QSeparator-BW8tlUZo.js";
import "./use-dark-DDE_KIFI.js";
import "./QVirtualScroll-E0KkX5Ku.js";
import "./QList-DrdoRXsz.js";
import "./QMarkupTable-GBm7hxEc.js";
import "./QSelect-Bb6ZnWlZ.js";
import "./use-key-composition-ihl9jEj-.js";
import "./QItem-DFvPMMde.js";
import "./selection-CQJ5exgf.js";
import "./use-timeout-megrCliV.js";
import "./QCheckbox-CsWL1rI4.js";
import "./use-checkbox-Dj1tA0EI.js";
import "./option-sizes-Bvq37fCe.js";
import "./use-fullscreen-CKoDl6p-.js";
import "./QInput-DlBCoLND.js";
import "./QRadio-CNBtZ_VM.js";
import "./QForm-kciIdtX7.js";
import "./QCard-DTdwX5EV.js";
import "./notify-Cw4iG4uu.js";
import "./QFile-Con0W853.js";
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
