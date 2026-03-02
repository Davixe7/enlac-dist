import { r as ref, a as computed, o as onMounted, w as watch, H as createBlock, I as openBlock, J as withCtx, _ as createBaseVNode, K as createVNode, V as QBtn, ag as api } from "./index-Dr8uhl4A.js";
import { Q as QTable } from "./QTable-BHkoiD8P.js";
import { Q as QPage } from "./QPage-BfMx99W6.js";
import { _ as _sfc_main$2 } from "./EnlacDate-ujxXssTv.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-C9lWYdGX.js";
import "./QVirtualScroll-D88oDorD.js";
import "./QList-CaIrn4H5.js";
import "./QMarkupTable-AcFO8Xpc.js";
import "./QSelect-Cogda66a.js";
import "./QItem-XQlagMDu.js";
import "./QMenu-DL2zsgOR.js";
import "./selection-1BKykHSs.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-Cd5vZpLI.js";
import "./QDate-C4AC4Lyq.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-KmTMzkKJ.js";
import "./QPopupProxy-DjTbUqa1.js";
import "./ClosePopup-CEwmesbF.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md justify-between items-end" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-end" };
const _sfc_main = {
  __name: "RidesReport",
  setup(__props) {
    const loading = ref(false);
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
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
        rawRows.value = (await api.get("rides", { params })).data.data;
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
      try {
        loading.value = true;
        let downloadurl = "rides/export";
        const params = {
          start_date: startDate.value,
          end_date: endDate.value
        };
        if (candidateId.value) {
          params.candidate_id = candidateId.value;
        }
        let response = await api({
          url: downloadurl,
          method: "GET",
          responseType: "blob",
          params
        });
        const contentDisposition = response.headers["content-disposition"];
        let filename = "reporte_de_traslados_" + startDate.value + "_" + endDate.value + ".xlsx";
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+?)"/);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
          // Usar el tipo MIME correcto
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log(`Descarga de ${filename} iniciada.`);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title q-mb-md" }, " Bitácora de Servicios de Traslados ", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: startDate.value,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                  _ctx.fetchIssues
                ],
                class: "q-mr-md"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": [
                  _cache[2] || (_cache[2] = ($event) => endDate.value = $event),
                  _ctx.fetchIssues
                ]
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
          }, null, 8, ["rows"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
