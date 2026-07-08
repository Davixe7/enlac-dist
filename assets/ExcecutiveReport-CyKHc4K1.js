import { r as ref, a as computed, x as onMounted, w as watch, G as createBlock, H as openBlock, I as withCtx, Z as createBaseVNode, J as createVNode, U as QBtn, c1 as createSlots, R as renderList, O as createElementBlock, a4 as api } from "./index-7AOIawlZ.js";
import { Q as QBadge } from "./QBadge-nekfDHfP.js";
import { Q as QTd } from "./QTd-AUuWNKtJ.js";
import { Q as QTable } from "./QTable-hNyDMtuU.js";
import { Q as QPage } from "./QPage-8W8pgweH.js";
import { _ as _sfc_main$2 } from "./EnlacDate-BLbDu4dY.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-eb0fu12m.js";
import { e as exportXlsFile } from "./exportXls-B0MsxGiy.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QVirtualScroll-DWDJBn0H.js";
import "./QList-C5Or0C77.js";
import "./QMarkupTable-Dzg7c5ei.js";
import "./QSelect-dUV2_Zts.js";
import "./QItem-CANGy5CK.js";
import "./QMenu-CUUu2kI9.js";
import "./selection-CRdJwsu6.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-C1cCkiqj.js";
import "./QDate-C3fZC4NO.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-IPoBhm-C.js";
import "./date-DAZjCVpT.js";
import "./QPopupProxy-Bkja14Zh.js";
import "./ClosePopup-BvD-30NV.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md justify-between items-end" };
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
    const mesesNombres = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ];
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
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(
          `reports/excecutive/export`,
          {
            start_date: startDate.value,
            end_date: endDate.value
          },
          "reporte_ejecutivo_" + startDate.value + "_" + endDate.value + ".xlsx"
        );
      } finally {
        loading.value = false;
      }
    }
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
            ]),
            createBaseVNode("div", null, [
              createVNode(QBtn, {
                outline: "",
                color: "primary",
                icon: "file_download",
                label: "Exportar Excel",
                onClick: exportXls
              })
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
                      ])) : (openBlock(), createElementBlock("div", _hoisted_4, " - "))
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
const ExcecutiveReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18791385"]]);
export {
  ExcecutiveReport as default
};
