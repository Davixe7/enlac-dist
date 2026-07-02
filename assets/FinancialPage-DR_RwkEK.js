import { a as QSelect } from "./QSelect-U0HMsLQF.js";
import { r as ref, a as computed, x as onMounted, O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode, I as withCtx, Q as QIcon, a7 as QInput, ab as normalizeClass, M as createTextVNode, S as toDisplayString, P as Fragment, a4 as api } from "./index-CyP9JFdC.js";
import { Q as QTd } from "./QTd-BL_Q3vB3.js";
import { Q as QTable } from "./QTable-BXgji3lM.js";
import "./QItem--cneNo7k.js";
import "./QMenu-Ci9jBKA2.js";
import "./selection-C2Qa576V.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-1BFqeq3Y.js";
import "./QList-BjNhhijf.js";
import "./QMarkupTable-BBXZAxNg.js";
import "./use-fullscreen-3u607Sg4.js";
const _hoisted_1 = { class: "flex q-mb-lg" };
const _sfc_main = {
  __name: "FinancialPage",
  setup(__props) {
    const loading = ref(false);
    const search = ref("");
    const rows = ref([]);
    const columns = ref([
      { field: "sheet", label: "Folio", align: "left", sortable: true },
      { field: "candidateName", label: "Beneficiario", align: "left" },
      { field: "programName", label: "Programa", align: "left" },
      { field: "parents", label: "Cuota Padres (mes)", align: "left", name: "parents" },
      { field: "sponsors", label: "Aportación de Padrinos (mes)", align: "left", name: "sponsors" },
      { field: "enlac", label: "Cuota ENLAC (mes)", align: "left" }
    ]);
    const fecha = /* @__PURE__ */ new Date();
    const mesActual = fecha.getMonth() + 1;
    const anioActual = fecha.getFullYear();
    const inicioCiclo = mesActual >= 8 ? anioActual : anioActual - 1;
    const calendarMonths = [
      {},
      { label: "Agosto", month: 1 },
      { label: "Septiembre", month: 2 },
      { label: "Octubre", month: 3 },
      { label: "Noviembre", month: 4 },
      { label: "Diciembre", month: 5 },
      { label: "Enero", month: 6 },
      { label: "Febrero", month: 7 },
      { label: "Marzo", month: 8 },
      { label: "Abril", month: 9 },
      { label: "Mayo", month: 10 },
      { label: "Junio", month: 11 },
      { label: "Julio", month: 12 }
    ];
    function toSchoolMonth(calendarMonth) {
      return calendarMonth >= 8 ? calendarMonth - 7 : calendarMonth + 5;
    }
    const mesesDisponibles = computed(() => {
      const opciones = [];
      for (let i = 1; i <= 12; i++) {
        let monthYear = i <= 5 ? inicioCiclo : inicioCiclo + 1;
        opciones.push({
          label: `${monthYear} - ${calendarMonths[i].label}`,
          value: { year: inicioCiclo, month: i }
        });
      }
      return opciones;
    });
    const month = ref(null);
    async function fetchFinancial() {
      try {
        loading.value = true;
        rows.value = (await api.get(`financial/?month=${month.value.value.month}&year=${month.value.value.year}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const sponsorStatusFilter = ref(null);
    const parentStatusFilter = ref(null);
    const results = computed(() => {
      let results2 = [...rows.value];
      if (parentStatusFilter.value) {
        results2 = results2.filter((row) => row.parentStatus == parentStatusFilter.value);
      }
      if (sponsorStatusFilter.value) {
        results2 = results2.filter((row) => row.sponsorStatus == sponsorStatusFilter.value);
      }
      return results2;
    });
    onMounted(async () => {
      console.log(mesActual);
      console.log(toSchoolMonth(mesActual));
      month.value = {
        value: { month: toSchoolMonth(mesActual), year: inicioCiclo },
        label: calendarMonths[toSchoolMonth(mesActual)].label
      };
      fetchFinancial();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "page-title" }, "Tesorería", -1)),
          createVNode(QSelect, {
            style: { "width": "200px" },
            outlined: "",
            "stack-label": "",
            label: "Cuota de Padres",
            class: "q-ml-auto q-mr-md",
            modelValue: parentStatusFilter.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => parentStatusFilter.value = $event),
            "emit-value": "",
            "map-options": "",
            clearable: "",
            options: [
              { label: "Solvente", value: "green-3" },
              { label: "Pendiente", value: "red-3" },
              { label: "Todos", value: null }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(QSelect, {
            style: { "width": "200px" },
            label: "Cuota de Padrinos",
            outlined: "",
            class: "q-mr-md",
            modelValue: sponsorStatusFilter.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sponsorStatusFilter.value = $event),
            "emit-value": "",
            "map-options": "",
            clearable: "",
            options: [
              { label: "Solvente", value: "green-3" },
              { label: "Pendiente", value: "red-3" },
              { label: "Todos", value: null }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(QInput, {
            outlined: "",
            modelValue: search.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.value = $event),
            "hide-bottom-space": "",
            clearable: "",
            class: "q-mr-md",
            "stack-label": "",
            label: "Beneficiario"
          }, {
            prepend: withCtx(() => [
              createVNode(QIcon, { name: "search" })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QSelect, {
            outlined: "",
            "stack-label": "",
            label: "Mes",
            modelValue: month.value,
            "onUpdate:modelValue": [
              _cache[3] || (_cache[3] = ($event) => month.value = $event),
              fetchFinancial
            ],
            options: mesesDisponibles.value
          }, null, 8, ["modelValue", "options"])
        ]),
        createVNode(QTable, {
          rows: results.value,
          columns: columns.value,
          pagination: { rowsPerPage: -1 },
          filter: search.value
        }, {
          "body-cell-parents": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass(`bg-${props.row.parentStatus}`)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.row.parents), 1)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          "body-cell-sponsors": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass(`bg-${props.row.sponsorStatus}`)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(props.row.sponsors), 1)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          _: 1
        }, 8, ["rows", "columns", "filter"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
