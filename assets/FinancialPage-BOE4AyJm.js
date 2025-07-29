import { r as ref, p as computed, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, i as api, f as resolveComponent, j as QIcon, H as normalizeClass, h as createTextVNode, x as createCommentVNode, t as toDisplayString } from "./index-Bw7koZRs.js";
import { Q as QInput } from "./QInput-DpLq7x8-.js";
import { Q as QSelect } from "./QSelect-BpBR3LGj.js";
import { Q as QTd } from "./QTd-Bg3cDkgV.js";
import { Q as QTable } from "./QTable-DzPYxmCS.js";
import "./use-key-composition-CcNkFKJ3.js";
import "./use-dark-QoPeQzjR.js";
import "./QItemLabel-DAkXD4my.js";
import "./selection-CHZ-_4p5.js";
import "./QDialog-DifZ5hVn.js";
import "./use-timeout-CgolyZjO.js";
import "./QSeparator-ByJwh8qk.js";
import "./QList-C0MQyPVs.js";
import "./QMarkupTable-CnTuEiS2.js";
import "./QCheckbox-C8n8UXWX.js";
import "./option-sizes-B9ECE9ZJ.js";
import "./use-fullscreen-K1Zw5JV1.js";
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _sfc_main = {
  __name: "FinancialPage",
  setup(__props) {
    const loading = ref(false);
    const search = ref("");
    const rows = ref([]);
    const columns = ref([
      { name: "name", label: "Beneficiario", field: "full_name", align: "left", sortable: true },
      { name: "id", label: "Folio", field: "id", align: "left", sortable: true },
      { name: "program", label: "Programa", field: (row) => row.program.name, align: "left" },
      { name: "parents", label: "Cuota Padres (mes)", align: "left" },
      { name: "sponsors", label: "Cuota Padrinos (mes)", align: "left" },
      { name: "enlac", label: "Beca ENLAC (mes)", field: (row) => row.enlacs_amount, align: "left" }
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
        loading.value = true;
      }
    }
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
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title" }, "Tesoreria", -1)),
          createVNode(QInput, {
            outlined: "",
            modelValue: search.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event),
            "hide-bottom-space": "",
            clearable: "",
            class: "q-ml-auto q-mr-md"
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
              _cache[1] || (_cache[1] = ($event) => month.value = $event),
              fetchFinancial
            ],
            options: mesesDisponibles.value
          }, null, 8, ["modelValue", "options"])
        ]),
        createVNode(QTable, {
          bordered: "",
          "hide-bottom": "",
          filter: search.value,
          rows: rows.value,
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
          _: 1
        }, 8, ["filter", "rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
