import { r as ref, A as computed, q as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, d as createVNode, h as QBtn, l as api } from "./index-CnPCrPcs.js";
import { Q as QTable } from "./QTable-5_0AeQ_Q.js";
import { Q as QPage } from "./QPage-gdN3Nbwe.js";
import { _ as _sfc_main$1 } from "./EnlacDate-qMk6pUnv.js";
import "./QVirtualScroll-DnzmeAgO.js";
import "./QList-B0uO-GP0.js";
import "./QMarkupTable-BQ20kKCe.js";
import "./QSelect-2bl5SHtH.js";
import "./QItem-Ce5rFAfg.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-Be43hROf.js";
import "./QDate-7g8-8pOA.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
import "./QPopupProxy-B2IRhZfT.js";
import "./ClosePopup-c30KicH8.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "q-ml-auto flex q-mb-md" };
const _sfc_main = {
  __name: "RidesReport",
  setup(__props) {
    const loading = ref(false);
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
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
        rawRows.value = (await api.get("rides", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title q-mb-md" }, " Bitácora de Servicios de Traslados ", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$1, {
              modelValue: startDate.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
              class: "q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(_sfc_main$1, {
              modelValue: endDate.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event),
              class: "q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(QBtn, {
              icon: "sym_o_search",
              color: "primary",
              unelevated: "",
              onClick: fetchRides,
              loading: loading.value
            }, null, 8, ["loading"])
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
