import { r as ref, a as computed, K as onMounted, w as watch, q as createBlock, s as openBlock, t as withCtx, N as createBaseVNode, v as createVNode, G as QBtn, z as createTextVNode, D as toDisplayString, V as api } from "./index-CE1zmWGJ.js";
import { Q as QTd } from "./QTd-BJI3d1eN.js";
import { Q as QTable } from "./QTable-BLM97Tu4.js";
import { Q as QPage } from "./QPage-CTQQJjx9.js";
import { _ as _sfc_main$2 } from "./EnlacDate-DRuInoew.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-BVqEGtyh.js";
import { e as exportXlsFile } from "./exportXls-0pxHcR_x.js";
import "./QVirtualScroll-JId1MvTZ.js";
import "./QList-BRxHnoW5.js";
import "./QMarkupTable-Bq0VUxtd.js";
import "./QSelect-l-CLCyhG.js";
import "./QChip-Dz88ilID.js";
import "./QItem-CeLkB8Sc.js";
import "./QMenu-DIfJt6Zs.js";
import "./position-engine-BOhbfp_x.js";
import "./selection-jvQtztp3.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-BUj3aItY.js";
import "./QDate-BAND17Hp.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-DZ8w5uy_.js";
import "./date-Bfxludcf.js";
import "./QPopupProxy-Dn_P-_za.js";
import "./ClosePopup-wps1puYv.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md justify-between items-end" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-end" };
const _sfc_main = {
  __name: "RidesReport",
  setup(__props) {
    const loading = ref(false);
    const startDate = ref("");
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const rawRows = ref([]);
    const rows = computed(() => {
      const newRows = [];
      rawRows.value.forEach((row) => {
        if (row.departure_time) {
          newRows.push({
            ...row,
            destino: "ENLAC",
            rowId: `${row.id}-ida`
          });
        }
        if (row.return_time) {
          newRows.push({
            ...row,
            destino: "DOMICILIO",
            rowId: `${row.id}-regreso`
          });
        }
      });
      return newRows;
    });
    const columns = [
      {
        name: "index",
        label: "NO",
        align: "left",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha",
        field: "date",
        align: "left",
        sortable: true
      },
      {
        name: "candidate_name",
        label: "Beneficiario",
        field: (row) => row.candidate?.full_name || "N/A",
        align: "left"
      },
      {
        name: "curp",
        label: "CURP del Beneficiario",
        field: (row) => row.candidate?.location_detail?.curp || "N/A",
        align: "left"
      },
      {
        name: "address",
        label: "Localidad o Domicilio",
        field: (row) => row.candidate?.location_detail?.transport_address || "Sin dirección",
        align: "left"
      },
      {
        name: "destino",
        label: "Destino",
        field: "destino",
        align: "center",
        format: (val) => val.toUpperCase()
      },
      {
        name: "phones",
        label: "Celular del beneficiario y/o de su familiar",
        field: "phones",
        align: "left"
      },
      {
        name: "diagnosis",
        label: "Nombre discapacidad del beneficiario",
        field: (row) => row.candidate.diagnosis,
        align: "left"
      }
    ];
    async function fetchRides() {
      try {
        loading.value = true;
        let params = {
          type: "rubio",
          start_date: startDate.value,
          end_date: endDate.value
        };
        if (candidateId.value) params.candidate_id = candidateId.value;
        rawRows.value = (await api.get("reports/rides", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => fetchRides());
    watch(candidateId, () => fetchRides());
    watch(startDate, () => fetchRides());
    watch(endDate, () => fetchRides());
    async function exportXls() {
      loading.value = true;
      try {
        const params = {
          start_date: startDate.value,
          end_date: endDate.value
        };
        if (candidateId.value) {
          params.candidate_id = candidateId.value;
        }
        await exportXlsFile(
          "reports/rides/export",
          params,
          "reporte_de_traslados_" + startDate.value + "_" + endDate.value + ".xlsx"
        );
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      const start = /* @__PURE__ */ new Date();
      start.setDate(start.getDate() - 30);
      startDate.value = start.toISOString().split("T")[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title q-mb-md" }, "Bitácora de Servicios de Traslados", -1)),
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
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event)
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
            rows: rows.value,
            columns
          }, {
            "body-cell-index": withCtx((props) => [
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.rowIndex + 1), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["rows"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
