import { Q as QBadge } from "./QBadge-CUfVjbvh.js";
import { Q as QTd } from "./QTd-DGhsCQi-.js";
import { Q as QTable } from "./QTable-BiUH5gVB.js";
import { Q as QPage } from "./QPage-D4Cnf6sh.js";
import { r as ref, A as computed, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode, aE as createSlots, K as renderList, c as createElementBlock } from "./index-vLy8_pvK.js";
import { _ as _sfc_main$2 } from "./EnlacDate-mOiI4jDF.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-i-E4IH8H.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QVirtualScroll-DMECT2OX.js";
import "./QList-fZyZnnby.js";
import "./QMarkupTable-CfesoOzi.js";
import "./QSelect-VW--WBjF.js";
import "./QItem-CygvGfQx.js";
import "./QMenu-BEeWpOq4.js";
import "./selection-Ct_8e3za.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CUXHstRc.js";
import "./QDate-BJKyPZEI.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-C86bb3JR.js";
import "./QPopupProxy-SjE1_vJl.js";
import "./ClosePopup-CRQ74T09.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md" };
const _hoisted_2 = { class: "col-md-6 flex items-end" };
const _hoisted_3 = {
  key: 0,
  class: "row no-wrap q-gutter-x-xs"
};
const _hoisted_4 = {
  key: 1,
  class: "text-grey-4"
};
const _sfc_main = {
  __name: "ExcecutiveReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const loading = ref(false);
    const rows = ref([]);
    async function fetchData() {
      try {
        loading.value = true;
        let params = { start_date: startDate.value, end_date: endDate.value };
        if (candidateId.value) params.candidate_id = candidateId.value;
        rows.value = (await api.get("reports/excecutive", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const mesesNombres = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const columns = computed(() => {
      let cols = [
        { align: "left", name: "full_name", label: "Beneficiario", field: "full_name" },
        { align: "left", name: "present", label: "Asistencias", field: "present" },
        { align: "left", name: "justified", label: "Faltas Justificadas", field: "justified" },
        { align: "left", name: "unjustified", label: "Faltas Injustificadas", field: "unjustified" },
        { align: "left", name: "issues", label: "Incidencias", field: "issues" },
        { align: "left", name: "rubio", label: "Traslados Cuauhtémoc-Rubio", field: "rubio" },
        { align: "left", name: "equine", label: "Traslados Equinoterapia", field: "equine" }
      ];
      for (let i = 1; i < 13; i++) {
        let monthKey = i.toString().padStart(2, "0");
        cols.push({
          align: "left",
          name: mesesNombres[i - 1],
          label: mesesNombres[i - 1],
          field: (row) => row.months[monthKey] ?? { positive: 0, warning: 0, negative: 0 }
        });
      }
      return cols;
    });
    onMounted(() => fetchData());
    watch(candidateId, () => fetchData());
    watch(startDate, () => fetchData());
    watch(endDate, () => fetchData());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, "Reporte Ejecutivo", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"])
            ])
          ]),
          createVNode(QTable, {
            columns: columns.value,
            rows: rows.value
          }, createSlots({ _: 2 }, [
            renderList(mesesNombres, (mes) => {
              return {
                name: `body-cell-${mes}`,
                fn: withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      props.value.positive > 0 || props.value.warning > 0 || props.value.negative > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                        createVNode(QBadge, {
                          color: "positive",
                          outline: "",
                          label: props.value.positive
                        }, null, 8, ["label"]),
                        createVNode(QBadge, {
                          color: "warning",
                          outline: "",
                          "text-color": "orange-10",
                          label: props.value.warning
                        }, null, 8, ["label"]),
                        createVNode(QBadge, {
                          color: "negative",
                          outline: "",
                          label: props.value.negative
                        }, null, 8, ["label"])
                      ])) : (openBlock(), createElementBlock("div", _hoisted_4, "-"))
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ])
              };
            })
          ]), 1032, ["columns", "rows"])
        ]),
        _: 1
      });
    };
  }
};
const ExcecutiveReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43c8d347"]]);
export {
  ExcecutiveReport as default
};
