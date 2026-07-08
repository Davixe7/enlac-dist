import { r as ref, w as watch, x as onMounted, G as createBlock, I as withCtx, a4 as api, ag as useRouter, H as openBlock, Z as createBaseVNode, J as createVNode, U as QBtn, N as unref, a5 as QCard, a6 as QCardSection, a7 as QInput, Q as QIcon, O as createElementBlock, S as toDisplayString, M as createTextVNode } from "./index-7AOIawlZ.js";
import { Q as QSpace } from "./QSpace-ByGBkEdH.js";
import { a as QSelect } from "./QSelect-dUV2_Zts.js";
import { Q as QTd } from "./QTd-AUuWNKtJ.js";
import { Q as QTable } from "./QTable-hNyDMtuU.js";
import { Q as QPage } from "./QPage-8W8pgweH.js";
import { n as notify } from "./notify-CPeSi7Xy.js";
import { e as exportXlsFile } from "./exportXls-B0MsxGiy.js";
import "./QItem-CANGy5CK.js";
import "./QMenu-CUUu2kI9.js";
import "./selection-CRdJwsu6.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-DWDJBn0H.js";
import "./QList-C5Or0C77.js";
import "./QMarkupTable-Dzg7c5ei.js";
import "./use-fullscreen-C1cCkiqj.js";
const _hoisted_1 = { class: "row items-center q-mb-md" };
const _hoisted_2 = { class: "col-12 col-sm-6 col-md-3" };
const _hoisted_3 = { class: "col-12 col-sm-6 col-md-3" };
const _hoisted_4 = { class: "col-12 col-md-4" };
const _hoisted_5 = { class: "col-12 col-md-2 text-right" };
const _hoisted_6 = {
  key: 0,
  class: "text-positive"
};
const _hoisted_7 = {
  key: 1,
  class: "text-grey-5 text-weight-regular"
};
const _hoisted_8 = { class: "full-width row flex-center text-grey-6 q-py-xl" };
const _sfc_main = {
  __name: "VisitsReport",
  setup(__props) {
    const loading = ref(false);
    const rows = ref([]);
    const $router = useRouter();
    const dateFrom = ref("");
    const dateTo = ref("");
    const selectedActivity = ref(null);
    const activityTypes = [
      "Alcancía",
      "Alianza",
      "Boteo",
      "Donativos Varios",
      "Fundaciones",
      "Natación",
      "Obsequio entre Amigos",
      "Organismos de Gobierno",
      "Programa de Verano",
      "Proyecto Interno",
      "Radiomaratón"
    ];
    const columns = [
      {
        name: "responsible_name",
        label: "CONTACTO ENLAC RESPONSABLE",
        align: "left",
        field: (row) => row.responsible ? row.responsible.full_name : "N/A",
        sortable: true,
        sort: (a, b) => a.localeCompare(b)
      },
      {
        name: "sector",
        label: "SECTOR",
        align: "left",
        field: (row) => row.donor ? row.donor.sector : "N/A",
        sortable: true
      },
      {
        name: "donor_name",
        label: "DONANTE",
        align: "left",
        field: (row) => {
          if (!row.donor) return "N/A";
          return `${row.donor.first_name || ""} ${row.donor.last_name || ""}`.trim();
        },
        sortable: true
      },
      {
        name: "company_name",
        label: "EMPRESA",
        align: "left",
        field: (row) => row.donor ? row.donor.company_name : "N/A",
        sortable: true
      },
      {
        name: "visit_date",
        label: "FECHA DE LA VISITA",
        align: "left",
        field: "visit_date",
        sortable: true
      },
      {
        name: "received_by",
        label: "PERSONA QUE RECIBE",
        align: "left",
        field: "received_by",
        sortable: true
      },
      {
        name: "schedule_contact_phone",
        label: "TELÉFONO DEL CONTACTO",
        align: "left",
        field: "schedule_contact_phone"
      },
      {
        name: "last_radiomaraton",
        label: "ÚLTIMO DONATIVO RADIOMARATÓN",
        align: "right",
        field: "last_radiomaraton_amount",
        sortable: true
      }
    ];
    function formatVisitDate(isoString) {
      if (!isoString) return "N/A";
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return isoString;
      return date.toLocaleDateString("es-MX", { year: "numeric", month: "2-digit", day: "2-digit" });
    }
    async function fetchVisitsReport() {
      try {
        loading.value = true;
        const params = {};
        if (dateFrom.value) params.date_from = dateFrom.value;
        if (dateTo.value) params.date_to = dateTo.value;
        if (selectedActivity.value) params.activity_type = selectedActivity.value;
        const response = await api.get("/reports/visits", { params });
        rows.value = response.data.data || response.data || [];
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo obtener el reporte de visitas");
      } finally {
        loading.value = false;
      }
    }
    function clearFilters() {
      dateFrom.value = "";
      dateTo.value = "";
      selectedActivity.value = null;
    }
    async function exportXls() {
      loading.value = true;
      try {
        await exportXlsFile(
          "/reports/visits/export",
          {
            date_from: dateFrom.value,
            date_to: dateTo.value,
            activity_type: selectedActivity.value
          },
          `Reporte_Visitas_${dateFrom.value || "Inicio"}_al_${dateTo.value || "Fin"}.xlsx`
        );
      } catch (error) {
        notify.negative("Error al descargar el archivo Excel");
        console.error(error);
      } finally {
        loading.value = false;
      }
    }
    watch([dateFrom, dateTo, selectedActivity], () => {
      fetchVisitsReport();
    });
    onMounted(() => {
      fetchVisitsReport();
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
            _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "text-h5 text-weight-bold q-my-none text-dark" }, "Reporte de Visitas", -1)),
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
                      modelValue: dateFrom.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dateFrom.value = $event),
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      type: "date",
                      hint: "Fecha inicio (Desde)",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QInput, {
                      modelValue: dateTo.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dateTo.value = $event),
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      type: "date",
                      hint: "Fecha fin (Hasta)",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    createVNode(QSelect, {
                      modelValue: selectedActivity.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => selectedActivity.value = $event),
                      options: activityTypes,
                      outlined: "",
                      dense: "",
                      "bg-color": "white",
                      hint: "Seleccionar Tipo de Actividad",
                      clearable: ""
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    createVNode(QBtn, {
                      flat: "",
                      color: "negative",
                      label: "Limpiar Filtros",
                      icon: "sym_o_filter_alt_off",
                      onClick: clearFilters,
                      disable: !dateFrom.value && !dateTo.value && !selectedActivity.value
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
                    "body-cell-visit_date": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(formatVisitDate(props.row.visit_date)), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-last_radiomaraton": withCtx((props) => [
                      createVNode(QTd, {
                        props,
                        class: "text-weight-bold"
                      }, {
                        default: withCtx(() => [
                          props.value ? (openBlock(), createElementBlock("span", _hoisted_6, " $ " + toDisplayString(props.value), 1)) : (openBlock(), createElementBlock("span", _hoisted_7, " Sin historial "))
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "no-data": withCtx(() => [
                      createBaseVNode("div", _hoisted_8, [
                        createVNode(QIcon, {
                          name: "sym_o_calendar_today",
                          size: "md",
                          class: "q-mr-sm"
                        }),
                        _cache[5] || (_cache[5] = createBaseVNode("span", null, "No se encontraron bitácoras de visitas con los filtros aplicados.", -1))
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
