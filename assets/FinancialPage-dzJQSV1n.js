import { Q as QSelect } from "./QSelect-Clqo_yiO.js";
import { r as ref, a as computed, o as onMounted, P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode, J as withCtx, Q as QIcon, al as QInput, an as QSpinner, aV as normalizeClass, N as createTextVNode, M as createCommentVNode, T as toDisplayString, Z as resolveComponent, R as Fragment, ag as api } from "./index-BZblXE-E.js";
import { Q as QTd } from "./QTd-DrME39BD.js";
import { Q as QTable } from "./QTable-BOV3mGZJ.js";
import "./QItem-6zJESPmB.js";
import "./QMenu-9qbUxvdB.js";
import "./selection-OXxlx03J.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-Cs8D56Hq.js";
import "./QList-1tXEse44.js";
import "./QMarkupTable-CCn9_g8A.js";
import "./use-fullscreen-BzyPznNQ.js";
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "q-pa-md text-center text-weight-medium" };
const _sfc_main = {
  __name: "FinancialPage",
  setup(__props) {
    const loading = ref(false);
    const search = ref("");
    const rows = ref([]);
    const columns = ref([
      { name: "id", label: "Folio", field: "id", align: "left", sortable: true },
      { name: "name", label: "Beneficiario", field: "full_name", align: "left", sortable: true },
      { name: "program", label: "Programa", field: (row) => row.program.name, align: "left" },
      { name: "parents", label: "Cuota Padres (mes)", align: "left" },
      { name: "sponsors", label: "Aportación de Padrinos (mes)", align: "left" },
      { name: "enlac", label: "Cuota ENLAC (mes)", field: (row) => row.enlacs_amount, align: "left" }
    ]);
    const fecha = /* @__PURE__ */ new Date();
    const mesActual = fecha.getMonth() + 1;
    const anioActual = fecha.getFullYear();
    const inicioCiclo = mesActual < 8 ? anioActual - 1 : anioActual;
    const nombresMeses = [
      "",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const mesesDisponibles = computed(() => {
      const opciones = [];
      for (let i = 8; i < 20; i++) {
        let labelIndex = i > 12 ? i - 12 : i;
        let inicioCicloIndex = i > 12 ? inicioCiclo + 1 : inicioCiclo;
        opciones.push({
          label: `${inicioCicloIndex} - ${nombresMeses[labelIndex]}`,
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
        results2 = results2.filter((row) => row.parent_status == parentStatusFilter.value);
      }
      if (sponsorStatusFilter.value) {
        results2 = results2.filter((row) => row.sponsr_status == sponsorStatusFilter.value);
      }
      return results2;
    });
    onMounted(async () => {
      month.value = {
        value: { month: mesActual, year: anioActual },
        label: nombresMeses[mesActual]
      };
      fetchFinancial();
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "page-title" }, "Tesorería", -1)),
          createVNode(QSelect, {
            style: { "width": "150px" },
            class: "q-ml-auto q-mr-md",
            dense: "",
            outlined: "",
            modelValue: parentStatusFilter.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => parentStatusFilter.value = $event),
            "emit-value": "",
            "map-options": "",
            clearable: "",
            options: [
              { label: "Solvente", value: "green-2" },
              { label: "Pendiente", value: "red-2" },
              { label: "Todos", value: null }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(QSelect, {
            dense: "",
            outlined: "",
            class: "q-mr-md",
            modelValue: sponsorStatusFilter.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sponsorStatusFilter.value = $event),
            "emit-value": "",
            "map-options": "",
            clearable: "",
            options: [
              { label: "Solvente", value: "green-2" },
              { label: "Pendiente", value: "red-2" },
              { label: "Todos", value: null }
            ]
          }, null, 8, ["modelValue"]),
          createVNode(QInput, {
            outlined: "",
            modelValue: search.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.value = $event),
            "hide-bottom-space": "",
            clearable: "",
            class: "q-mr-md"
          }, {
            prepend: withCtx(() => [
              createVNode(QIcon, { name: "search" })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QSelect, {
            dense: "",
            outlined: "",
            modelValue: month.value,
            "onUpdate:modelValue": [
              _cache[3] || (_cache[3] = ($event) => month.value = $event),
              fetchFinancial
            ],
            options: mesesDisponibles.value
          }, null, 8, ["modelValue", "options"])
        ]),
        createVNode(QTable, {
          loading: loading.value,
          bordered: "",
          "hide-bottom": "",
          filter: search.value,
          rows: results.value,
          columns: columns.value,
          pagination: { rowsPerPage: -1 }
        }, {
          "body-cell-name": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(_component_router_link, {
                  to: { name: "financial.control", params: { candidateId: props.row.id } }
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props.row.full_name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-parents": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass([`bg-${props.row.parent_status}`])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`${props.row.parent_paid} / ${props.row.parent_amount}`) + " ", 1),
                props.row.last_parent_payment_date ? (openBlock(), createElementBlock("div", _hoisted_2, [
                  createBaseVNode("small", null, toDisplayString(props.row.last_parent_payment_date), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          "body-cell-sponsors": withCtx((props) => [
            createVNode(QTd, {
              class: normalizeClass([`bg-${props.row.sponsr_status}`])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(`${props.row.sponsr_paid} / ${props.row.sponsr_amount}`) + " ", 1),
                props.row.last_sponsr_payment_date ? (openBlock(), createElementBlock("div", _hoisted_3, [
                  createBaseVNode("small", null, toDisplayString(props.row.last_sponsr_payment_date), 1)
                ])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["class"])
          ]),
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createVNode(QSpinner, {
                color: "primary",
                class: "q-mr-sm"
              }),
              _cache[5] || (_cache[5] = createBaseVNode("span", { style: { "font-size": "18px" } }, " Cargando... ", -1))
            ])
          ]),
          _: 1
        }, 8, ["loading", "filter", "rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
