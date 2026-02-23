import { Q as QSelect } from "./QSelect-ChwyA_6G.js";
import { Q as QMarkupTable } from "./QMarkupTable-DO3UXuPf.js";
import { Q as QBadge } from "./QBadge-Bk2vpN05.js";
import { Q as QPage } from "./QPage-BMIwFIc3.js";
import { r as ref, A as computed, o as onMounted, p as useRoute, l as api, D as watch, q as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, d as createVNode, E as createCommentVNode, g as unref, t as toDisplayString, c as createElementBlock, H as Fragment, K as renderList, j as createTextVNode } from "./index-CZCe8xRO.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-BdkrautS.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QItem-C0btFpr9.js";
import "./QMenu-DgHVTzjM.js";
import "./selection-h7BdV_rr.js";
import "./format-BC-UoHKJ.js";
const _hoisted_1 = { class: "flex items-end q-mb-md" };
const _hoisted_2 = { key: 0 };
const _sfc_main = {
  __name: "IndividualReport",
  setup(__props) {
    const route = useRoute();
    const candidateId = ref(null);
    const candidateData = ref({});
    const month = ref(1);
    const issuesCount = ref(null);
    const attendances = ref({});
    const periodLabel = ref(null);
    const daysCount = ref(null);
    const rides = ref({});
    const areaAttendances = ref([]);
    const appointments = ref([]);
    const totalsRow = ref({});
    const scores = ref([]);
    const loading = ref(false);
    const months = [
      { label: "Enero", value: 1 },
      { label: "Febrero", value: 2 },
      { label: "Marzo", value: 3 },
      { label: "Abril", value: 4 },
      { label: "Mayo", value: 5 },
      { label: "Junio", value: 6 },
      { label: "Julio", value: 7 },
      { label: "Agosto", value: 8 },
      { label: "Septiembre", value: 9 },
      { label: "Octubre", value: 10 },
      { label: "Noviembre", value: 11 },
      { label: "Diciembre", value: 12 }
    ];
    const monthOptions = [...months].splice(0, 7);
    const mapMonthLabels = computed(() => {
      let monthLabels = {};
      let start = month.value - 1;
      let end = month.value + 5;
      for (let i = start; i < end; i++) {
        monthLabels[`m${i}`] = months[i].label;
      }
      return monthLabels;
    });
    async function fetchCandidateData() {
      try {
        loading.value = true;
        let params = {
          month: month.value
        };
        let response = (await api.get(`beneficiaries/${candidateId.value}/individual`, { params })).data.data;
        candidateData.value = response.candidate;
        issuesCount.value = response.issues;
        attendances.value = response.attendances;
        areaAttendances.value = response.areaAttendances;
        periodLabel.value = response.periodLabel;
        daysCount.value = response.daysCount;
        rides.value = response.rides;
        appointments.value = response.appointments;
        totalsRow.value = response.totalsRow;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchScores() {
      try {
        loading.value = true;
        let params = {
          month: month.value
        };
        scores.value = (await api.get(`beneficiaries/${candidateId.value}/scores`, { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const ridesTypeLabels = {
      equine: "Traslados a equinoterapia",
      rubio: "Traslados de Cuauhtemoc - Rubio"
    };
    const appointmentTypes = [
      { id: 1, label: "Consultas Médicas" },
      { id: 2, label: "Consultas Psicología" },
      { id: 3, label: "Consultas Nutrición" }
    ];
    const planCategories = ref([]);
    function update() {
      fetchCandidateData();
      fetchScores();
    }
    onMounted(async () => {
      if (route.params.candidate_id) {
        candidateId.value = route.params.candidate_id;
        fetchCandidateData();
      }
      planCategories.value = (await api.get("plan_categories/?base_only=1")).data.data;
      planCategories.value.push({ label: "Totals", id: "totals" });
    });
    watch(candidateId, () => candidateId.value ? update() : null);
    watch(month, () => candidateId.value ? update() : null);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[27] || (_cache[27] = createBaseVNode("h1", { class: "page-title q-mb-lg" }, "Bitácora Individual del Beneficiario", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$1, {
              modelValue: candidateId.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
              class: "q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(QSelect, {
              outlined: "",
              options: unref(monthOptions),
              modelValue: month.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => month.value = $event),
              label: "Primer mes a mostrar",
              "emit-value": "",
              "map-options": "",
              class: "q-mr-md",
              style: { "min-width": "230px" }
            }, null, 8, ["options", "modelValue"])
          ]),
          createVNode(QMarkupTable, {
            class: "q-mb-lg",
            separator: "vertical",
            flat: "",
            bordered: ""
          }, {
            default: withCtx(() => [
              _cache[15] || (_cache[15] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    colspan: "8",
                    class: "text-center"
                  }, " Datos Base ")
                ])
              ], -1)),
              createBaseVNode("tr", null, [
                _cache[2] || (_cache[2] = createBaseVNode("th", null, "Nombre:", -1)),
                createBaseVNode("td", null, toDisplayString(candidateData.value.full_name), 1),
                _cache[3] || (_cache[3] = createBaseVNode("th", null, "Fecha de Ingreso:", -1)),
                createBaseVNode("td", null, toDisplayString(candidateData.value.entry_date), 1),
                _cache[4] || (_cache[4] = createBaseVNode("th", null, "Folio:", -1)),
                createBaseVNode("td", null, toDisplayString(candidateData.value.id), 1)
              ]),
              createBaseVNode("tr", null, [
                _cache[5] || (_cache[5] = createBaseVNode("th", null, "Responsable ENLAC:", -1)),
                createBaseVNode("td", null, toDisplayString(candidateData.value.enlac_responsible?.full_name), 1),
                _cache[6] || (_cache[6] = createBaseVNode("th", null, "Programa:", -1)),
                createBaseVNode("td", null, toDisplayString(candidateData.value.program?.name), 1),
                _cache[7] || (_cache[7] = createBaseVNode("th", null, "Grupo:", -1)),
                _cache[8] || (_cache[8] = createBaseVNode("td", null, "?", -1))
              ]),
              createBaseVNode("tr", null, [
                _cache[9] || (_cache[9] = createBaseVNode("th", null, "Periodo que Reporta:", -1)),
                createBaseVNode("td", null, toDisplayString(periodLabel.value), 1),
                _cache[10] || (_cache[10] = createBaseVNode("th", null, "Total de Días Laborados:", -1)),
                createBaseVNode("td", null, toDisplayString(daysCount.value), 1),
                _cache[11] || (_cache[11] = createBaseVNode("th", null, "Total de Asistencias Diarias", -1)),
                createBaseVNode("td", null, toDisplayString(attendances.value?.present ?? 0), 1)
              ]),
              createBaseVNode("tr", null, [
                _cache[12] || (_cache[12] = createBaseVNode("th", null, "Total de Faltas Justificadas Diarias", -1)),
                createBaseVNode("td", null, toDisplayString(attendances.value?.justified ?? 0), 1),
                _cache[13] || (_cache[13] = createBaseVNode("th", null, "Total de Faltas Injustificadas Diarias:", -1)),
                createBaseVNode("td", null, toDisplayString(attendances.value?.unjustified ?? 0), 1),
                _cache[14] || (_cache[14] = createBaseVNode("th", null, "Total de incidencias:", -1)),
                createBaseVNode("td", null, toDisplayString(issuesCount.value ?? 0), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(QMarkupTable, { class: "q-mb-lg" }, {
            default: withCtx(() => [
              _cache[18] || (_cache[18] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    colspan: "8",
                    class: "text-center"
                  }, " Resumen de Traslados ")
                ])
              ], -1)),
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  _cache[16] || (_cache[16] = createBaseVNode("th", null, "Tipo", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(mapMonthLabels.value), (m) => {
                    return openBlock(), createElementBlock("th", { key: m }, toDisplayString(m), 1);
                  }), 128)),
                  _cache[17] || (_cache[17] = createBaseVNode("th", null, "Total", -1))
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(ridesTypeLabels), (type) => {
                  return openBlock(), createElementBlock("tr", { key: type }, [
                    createBaseVNode("td", null, toDisplayString(ridesTypeLabels[type]), 1),
                    rides.value[type] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
                        return createBaseVNode("td", { key: n }, toDisplayString(rides.value[type][`m${n}`]), 1);
                      }), 64)),
                      createBaseVNode("td", null, toDisplayString(rides.value[type]["total"]), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(6, (n) => {
                      return createBaseVNode("td", { key: n }, " N/A ");
                    }), 64))
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          }),
          createVNode(QMarkupTable, { class: "q-mb-lg" }, {
            default: withCtx(() => [
              _cache[23] || (_cache[23] = createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    colspan: "8",
                    class: "text-center"
                  }, " Sesiones, Claes o Consultas Recibidas ")
                ])
              ], -1)),
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  _cache[19] || (_cache[19] = createBaseVNode("th", null, "Tipo", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(mapMonthLabels.value), (m) => {
                    return openBlock(), createElementBlock("th", { key: m }, toDisplayString(m), 1);
                  }), 128)),
                  _cache[20] || (_cache[20] = createBaseVNode("th", null, "Total", -1))
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(planCategories.value, (category) => {
                  return openBlock(), createElementBlock("tr", {
                    key: category.id
                  }, [
                    createBaseVNode("td", null, toDisplayString(category.label), 1),
                    areaAttendances.value[category.id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
                        return createBaseVNode("td", { key: n }, toDisplayString(areaAttendances.value[category.id][`m${n}`]), 1);
                      }), 64)),
                      createBaseVNode("td", null, toDisplayString(areaAttendances.value[category.id]["total"]), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(7, (n) => {
                      return createBaseVNode("td", { key: n }, " N/A ");
                    }), 64))
                  ]);
                }), 128)),
                (openBlock(), createElementBlock(Fragment, null, renderList(appointmentTypes, (appointmentType) => {
                  return createBaseVNode("tr", {
                    key: appointmentType.id
                  }, [
                    createBaseVNode("td", null, toDisplayString(appointmentType.label), 1),
                    appointments.value[appointmentType.id] ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
                        return createBaseVNode("td", { key: n }, toDisplayString(appointments.value[appointmentType.id][`m${n}`]), 1);
                      }), 64)),
                      createBaseVNode("td", null, toDisplayString(appointments.value[appointmentType.id]["total"]), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(7, (n) => {
                      return createBaseVNode("td", { key: n }, " N/A ");
                    }), 64))
                  ]);
                }), 64)),
                createBaseVNode("tr", null, [
                  _cache[21] || (_cache[21] = createBaseVNode("th", { class: "text-right" }, "Total", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(totalsRow.value), (value) => {
                    return openBlock(), createElementBlock("td", { key: value }, toDisplayString(value), 1);
                  }), 128)),
                  _cache[22] || (_cache[22] = createBaseVNode("td", null, null, -1))
                ])
              ])
            ]),
            _: 1
          }),
          scores.value ? (openBlock(), createBlock(QMarkupTable, { key: 0 }, {
            default: withCtx(() => [
              createBaseVNode("thead", null, [
                _cache[26] || (_cache[26] = createBaseVNode("tr", null, [
                  createBaseVNode("th", {
                    colspan: "8",
                    class: "text-center"
                  }, " Resultados ")
                ], -1)),
                createBaseVNode("tr", null, [
                  _cache[24] || (_cache[24] = createBaseVNode("th", null, "Area", -1)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(Object.values(mapMonthLabels.value), (m) => {
                    return openBlock(), createElementBlock("th", { key: m }, toDisplayString(m), 1);
                  }), 128)),
                  _cache[25] || (_cache[25] = createBaseVNode("th", null, "Total", -1))
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(planCategories.value, (category) => {
                  return openBlock(), createElementBlock("tr", {
                    key: category.id
                  }, [
                    createBaseVNode("td", null, toDisplayString(category.label), 1),
                    scores.value.hasOwnProperty(category.id) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(6, (n) => {
                        return createBaseVNode("td", { key: n }, [
                          createVNode(QBadge, { color: "positive" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(scores.value[category.id][n].positive), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QBadge, { color: "warning" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(scores.value[category.id][n].warning), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QBadge, { color: "negative" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(scores.value[category.id][n].negative), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 64)),
                      category.id != "totals" ? (openBlock(), createElementBlock("td", _hoisted_2, [
                        createVNode(QBadge, { color: "positive" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(scores.value[category.id]["total"].positive), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QBadge, { color: "warning" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(scores.value[category.id]["total"].warning), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(QBadge, { color: "negative" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(scores.value[category.id]["total"].negative), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ])) : createCommentVNode("", true)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(7, (n) => {
                      return createBaseVNode("td", { key: n });
                    }), 64))
                  ]);
                }), 128))
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
const IndividualReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-82a1661f"]]);
export {
  IndividualReport as default
};
