import { r as ref, w as watch, x as onMounted, G as createBlock, I as withCtx, a4 as api, af as useRouter, H as openBlock, Z as createBaseVNode, J as createVNode, U as QBtn, N as unref, a5 as QCard, a6 as QCardSection, a9 as QInput, Q as QIcon, M as createTextVNode, S as toDisplayString } from "./index-73seMa9c.js";
import { Q as QSpace } from "./QSpace-BKmdIqjc.js";
import { Q as QTd } from "./QTd-CCVTlGjB.js";
import { Q as QBadge } from "./QBadge-CGw92e5K.js";
import { Q as QTable } from "./QTable-Dp0TbDg4.js";
import { Q as QPage } from "./QPage-CVA-KSVe.js";
import { n as notify } from "./notify-CI1eDtFr.js";
import { e as exportXlsFile } from "./exportXls-9t8TbW2p.js";
import "./QVirtualScroll-Dtr5Im6o.js";
import "./QList-COXbN_4Y.js";
import "./QMarkupTable-sgUXJ8ii.js";
import "./QSelect-D7YhNIyE.js";
import "./QItem-BL3QQOOm.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CpLfyNqN.js";
const _hoisted_1 = { class: "row items-center q-mb-md" };
const _hoisted_2 = { class: "col-12 col-md-5" };
const _hoisted_3 = { class: "col-12 col-sm-6 col-md-2" };
const _hoisted_4 = { class: "col-12 col-sm-6 col-md-2" };
const _hoisted_5 = { class: "col-12 col-md-3 text-right" };
const _hoisted_6 = { class: "text-grey-6" };
const _hoisted_7 = { class: "full-width row flex-center text-grey-6 q-py-xl" };
const _sfc_main = {
  __name: "DonationsReport",
  setup(__props) {
    const loading = ref(false);
    const rows = ref([]);
    const $router = useRouter();
    function clearFilters() {
      dateFrom.value = "";
      dateTo.value = "";
      searchDonor.value = "";
    }
    const dateFrom = ref("");
    const dateTo = ref("");
    const searchDonor = ref("");
    const columns = [
      {
        name: "donor_name",
        label: "NOMBRE DEL DONANTE / PADRINO",
        align: "left",
        field: (row) => {
          if (row.donor) {
            return row.donor.full_name || `${row.donor.first_name || ""} ${row.donor.last_name || ""} ${row.donor.second_last_name || ""}`.trim();
          }
          if (row.sponsor) {
            return `${row.sponsor.name || ""} ${row.sponsor.last_name || ""} ${row.sponsor.second_last_name || ""}`.trim() || "Sponsor sin nombre";
          }
          return "N/A";
        },
        sortable: true
      },
      {
        name: "activity_type",
        label: "TIPO DE ACTIVIDAD",
        align: "left",
        field: "activity_type",
        sortable: true
      },
      {
        name: "concept",
        label: "NOMBRE ACTIVIDAD / CONCEPTO",
        align: "left",
        field: "concept",
        sortable: true
      },
      {
        name: "folio_number",
        label: "NO. FOLIO",
        align: "left",
        field: "folio_number",
        sortable: true
      },
      {
        name: "tax_receipt",
        label: "NO. RECIBO DEDUCIBLE",
        align: "left",
        field: (row) => row.has_tax_receipt ? row.tax_receipt_number || "Sí (Sin folio)" : "No",
        sortable: true
      },
      {
        name: "payment_date",
        label: "FECHA DE PAGO",
        align: "left",
        field: "payment_date",
        sortable: true
      },
      {
        name: "payment_method",
        label: "FORMA DE PAGO",
        align: "left",
        field: "payment_method",
        sortable: true
      },
      { name: "amount", label: "MONTO PAGADO", align: "right", field: "amount", sortable: true }
    ];
    function formatPaymentDate(isoString) {
      if (!isoString) return "N/A";
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return isoString;
      return date.toLocaleDateString("es-MX", { year: "numeric", month: "2-digit", day: "2-digit" });
    }
    async function fetchDonationsReport() {
      try {
        loading.value = true;
        const params = {};
        if (dateFrom.value) params.date_from = dateFrom.value;
        if (dateTo.value) params.date_to = dateTo.value;
        if (searchDonor.value) params.search_donor = searchDonor.value;
        const response = await api.get("/reports/donations", { params });
        rows.value = response.data.data || response.data || [];
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo obtener el reporte de donativos");
      } finally {
        loading.value = false;
      }
    }
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(
          "/reports/donations/export",
          {
            date_from: dateFrom.value,
            date_to: dateTo.value,
            search_donor: searchDonor.value
          },
          "Reporte_Donativos.xlsx"
        );
      } finally {
        loading.value = false;
      }
    }
    watch([dateFrom, dateTo, searchDonor], () => {
      fetchDonationsReport();
    });
    onMounted(() => {
      fetchDonationsReport();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-lg bg-grey-3" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              flat: "",
              round: "",
              color: "grey-7",
              icon: "arrow_back",
              onClick: _cache[0] || (_cache[0] = ($event) => unref($router).go(-1)),
              class: "q-mr-sm"
            }),
            _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "text-h5 text-weight-bold q-my-none text-dark" }, "Reporte General de Donativos", -1)),
            createVNode(QSpace),
            createVNode(QBtn, {
              unelevated: "",
              color: "primary",
              icon: "sym_o_file_download",
              label: "Exportar Excel",
              onClick: exportXls,
              loading: loading.value
            }, null, 8, ["loading"])
          ]),
          createVNode(QCard, {
            flat: "",
            bordered: "",
            class: "q-mb-lg"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row q-col-gutter-md items-center" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QInput, {
                      modelValue: searchDonor.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchDonor.value = $event),
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      placeholder: "Buscar por nombre de donante o padrino...",
                      hint: "Escribe el nombre de un Donante o Padrino",
                      debounce: "400",
                      clearable: ""
                    }, {
                      append: withCtx(() => [
                        createVNode(QIcon, { name: "sym_o_search" })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QInput, {
                      modelValue: dateFrom.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dateFrom.value = $event),
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      type: "date",
                      hint: "Fecha inicio (Desde)",
                      clearable: "",
                      "stack-label": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(QInput, {
                      modelValue: dateTo.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dateTo.value = $event),
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      type: "date",
                      hint: "Fecha fin (Hasta)",
                      clearable: "",
                      "stack-label": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(QBtn, {
                      flat: "",
                      color: "negative",
                      label: "Limpiar Filtros",
                      icon: "sym_o_filter_alt_off",
                      onClick: clearFilters,
                      disable: !dateFrom.value && !dateTo.value && !searchDonor.value
                    }, null, 8, ["disable"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCard, {
            flat: "",
            bordered: ""
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pa-none" }, {
                default: withCtx(() => [
                  createVNode(QTable, {
                    rows: rows.value,
                    columns,
                    loading: loading.value,
                    pagination: { rowsPerPage: 15 },
                    flat: ""
                  }, {
                    "body-cell-payment_date": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formatPaymentDate(props.row.payment_date)), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-tax_receipt": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createVNode(QBadge, {
                            color: props.row.has_tax_receipt ? "positive" : "grey-5"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.value), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-amount": withCtx((props) => [
                      createVNode(QTd, {
                        props,
                        class: "text-weight-bold text-primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" $ " + toDisplayString(props.row.amount) + " ", 1),
                          createBaseVNode("small", _hoisted_6, toDisplayString(props.row.currency), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "no-data": withCtx(() => [
                      createBaseVNode("div", _hoisted_7, [
                        createVNode(QIcon, {
                          name: "sym_o_money_off",
                          size: "md",
                          class: "q-mr-sm"
                        }),
                        _cache[5] || (_cache[5] = createBaseVNode("span", null, "No se encontraron donativos con los filtros seleccionados.", -1))
                      ])
                    ]),
                    _: 1
                  }, 8, ["rows", "loading"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
