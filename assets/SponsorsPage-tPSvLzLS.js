import { j as onMounted, r as ref, U as createElementBlock, G as openBlock, L as createBaseVNode, K as createVNode, H as withCtx, N as QBtn, V as Fragment, J as resolveComponent, M as createTextVNode } from "./index-Do2UNGkK.js";
import { Q as QTd } from "./QTd-CpvcY3fr.js";
import { Q as QTable } from "./QTable-C65yIXCw.js";
import { h as QDialog } from "./QSelect-gGbryZRL.js";
import { api } from "./axios--LrLQM_c.js";
import { _ as _sfc_main$1 } from "./PaymentConfigForm-BiaXLVek.js";
import "./QSeparator-DZhmyG_f.js";
import "./use-dark-DR5cwYKQ.js";
import "./QList-CitW4czx.js";
import "./QMarkupTable-kHyEbSXb.js";
import "./QCheckbox-DXE74Rqj.js";
import "./use-key-composition-Cb3U_Tha.js";
import "./use-fullscreen-DMaNYzjw.js";
import "./QItemLabel-WLy9p-qo.js";
import "./selection-r0vkVvJb.js";
import "./use-timeout-CzOVVImI.js";
import "./QCard-DUVQfyQw.js";
import "./QInput-BgFiysGV.js";
import "./QRadio-CUireVVM.js";
import "./QForm-3KD2SpBK.js";
import "./notify-Bh-ZzP7n.js";
import "./sponsor-store-AuREKALo.js";
const _hoisted_1 = { class: "flex items-center" };
const _sfc_main = {
  __name: "SponsorsPage",
  setup(__props) {
    onMounted(async () => {
      sponsors.value = (await api.get("sponsors")).data.data;
    });
    const dialog = ref(false);
    const dialog2 = ref(false);
    const sponsorId = ref(null);
    const sponsors = ref([]);
    const columns = ref([
      { name: "name", field: "name", label: "Nombre del Padrino", sortable: true, align: "left" },
      { name: "id", field: "id", label: "Folio", sortable: true, align: "left" },
      { name: "created_at", field: "entry_date", label: "Fecha de ingreso", sortable: true, align: "left" },
      { name: "candidates_count", field: "candidates_count", label: "Beneficiarios que apoya", sortable: true, align: "left" },
      { name: "actions", label: "Acciones", sortable: false, align: "right" }
    ]);
    function createSponsor() {
      sponsorId.value = null;
      dialog.value = true;
    }
    function editSponsor(id) {
      sponsorId.value = id;
      dialog.value = true;
    }
    function addCandidate(id) {
      sponsorId.value = id;
      dialog2.value = true;
    }
    return (_ctx, _cache) => {
      const _component_SponsorForm = resolveComponent("SponsorForm");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, " Padrinos ", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add",
            onClick: createSponsor
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
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
                  icon: "sym_o_edit",
                  onClick: ($event) => editSponsor(props.row.id)
                }, null, 8, ["onClick"]),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  icon: "sym_o_diversity_1",
                  onClick: ($event) => addCandidate(props.row.id)
                }, null, 8, ["onClick"])
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
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_component_SponsorForm, { "sponsor-id": sponsorId.value }, null, 8, ["sponsor-id"])
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
