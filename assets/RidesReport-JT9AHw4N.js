import { r as ref, a as computed, K as onMounted, w as watch, q as createBlock, s as openBlock, t as withCtx, N as createBaseVNode, v as createVNode, G as QBtn, z as createTextVNode, D as toDisplayString, V as api } from "./index-D0yVl0M9.js";
import { Q as QTd } from "./QTd-4-vy3fSa.js";
import { Q as QTable } from "./QTable-CcLov7La.js";
import { Q as QPage } from "./QPage-DiIAaO1c.js";
import { _ as _sfc_main$2 } from "./EnlacDate-CE4aO3FD.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-CWlwROs9.js";
import { e as exportXlsFile } from "./exportXls-CTNzAOOo.js";
import "./QVirtualScroll-BGm9rVdS.js";
import "./QList-Cj1k6RAS.js";
import "./QMarkupTable-CCVnFDiZ.js";
import "./QSelect-CwJvHACA.js";
import "./QChip-Cy60p0iO.js";
import "./QItem-C8aOaOe3.js";
import "./QMenu-CIo5_UHo.js";
import "./position-engine-vWW3KZVo.js";
import "./selection-C4on8VW7.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-B_ddPXjN.js";
import "./QDate-D9Z62Ed-.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-D0gG5zpB.js";
import "./date-DeJtwreW.js";
import "./QPopupProxy-3ZFlhPgj.js";
import "./ClosePopup-49zmzn8a.js";
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
