import { Q as QTable } from "./QTable-BiUH5gVB.js";
import { Q as QPage } from "./QPage-D4Cnf6sh.js";
import { r as ref, A as computed, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, d as createVNode } from "./index-vLy8_pvK.js";
import { _ as _sfc_main$2 } from "./EnlacDate-mOiI4jDF.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-i-E4IH8H.js";
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
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event)
              }, null, 8, ["modelValue"])
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
