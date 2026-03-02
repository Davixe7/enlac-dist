const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MonthlyReport-W0bt296J.js","assets/index-Y0a2SGnG.js","assets/index-DA00BWT3.css","assets/QMarkupTable-D03qu01D.js","assets/EnlacDate-Vq2AF1Zl.js","assets/QDate-D-EI4NFb.js","assets/use-render-cache-DRJWLz-b.js","assets/date-DuhRamMl.js","assets/format-BC-UoHKJ.js","assets/QPopupProxy-CyPHYA0j.js","assets/QMenu-Bhi7Fnly.js","assets/selection-C8FNrCNV.js","assets/ClosePopup-Bx30VQAi.js","assets/datetime-Dvln09A7.js","assets/MonthlyReport-Ai6OGP8m.css"])))=>i.map(i=>d[i]);
import { r as ref, o as onMounted, P as createElementBlock, I as openBlock, _ as createBaseVNode, K as createVNode, J as withCtx, V as QBtn, ah as QCard, ai as QCardSection, ap as withModifiers, T as toDisplayString, al as QInput, an as QDialog, ag as api, w as watch, R as Fragment, S as renderList, aV as normalizeClass, N as createTextVNode, H as createBlock, M as createCommentVNode, O as unref, as as QRadio, Q as QIcon, c as createComponent, h, L as withDirectives, am as QCardActions, a as computed, aR as resolveDynamicComponent, b4 as defineAsyncComponent, b5 as __vitePreload } from "./index-Y0a2SGnG.js";
import { _ as _sfc_main$7 } from "./EnlacDate-Vq2AF1Zl.js";
import { Q as QBadge } from "./QBadge-C7C-r4Ae.js";
import { Q as QTd } from "./QTd-ZnLd8peK.js";
import { Q as QTable } from "./QTable-BghAzwU4.js";
import { Q as QSelect, a as QChip } from "./QSelect-BJp1SiYJ.js";
import { Q as QMarkupTable } from "./QMarkupTable-D03qu01D.js";
import { Q as QForm } from "./QForm-PMlWH-wP.js";
import { n as notify } from "./notify-B8FCsw9t.js";
import { _ as _sfc_main$8 } from "./IssuesForm-BEvc6Ry3.js";
import { u as useCandidateStore } from "./candidate-store-Drbh0Znd.js";
import { Q as QBanner } from "./QBanner-BXcNlX0r.js";
import { Q as QExpansionItem } from "./QExpansionItem-CYn3u7UD.js";
import { Q as QItem, a as QItemSection } from "./QItem-DC2gNDJ1.js";
import { Q as QList } from "./QList-CqFseLV9.js";
import { C as ClosePopup } from "./ClosePopup-Bx30VQAi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QDate-D-EI4NFb.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuhRamMl.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-CyPHYA0j.js";
import "./QMenu-Bhi7Fnly.js";
import "./selection-C8FNrCNV.js";
import "./datetime-Dvln09A7.js";
import "./QVirtualScroll-CCQxzWLE.js";
import "./use-fullscreen-CJljuRcJ.js";
import "./QFile-FfMREq0t.js";
import "./category-store-NyC5KcHf.js";
const _hoisted_1$5 = { class: "flex items-center" };
const _hoisted_2$4 = { class: "flex justify-end q-pa-md" };
const _sfc_main$6 = {
  __name: "DailyAttendance",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    const attendance = ref(null);
    const date = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const attendanceDialog = ref(false);
    const columns = [
      { align: "left", name: "area_name", label: "Area", field: "area_name" },
      { align: "left", name: "status", label: "STATUS" },
      { align: "left", name: "date", label: "Fecha", field: "attendance_date" },
      { align: "left", name: "justified", label: "Justificada", field: (row) => row.absence_justification_type ? "Si" : "No" },
      { align: "left", name: "absence_justification_type", label: "Tipo", field: (row) => row.absence_justification_type ?? "N/A" },
      { align: "right", name: "actions" }
    ];
    async function fetchAttendances() {
      console.log("Consultando asistencias del dia para " + props.candidateId);
      try {
        let params = {
          candidate_id: props.candidateId,
          date: date.value
        };
        loading.value = true;
        rows.value = (await api.get("reports/attendances/daily", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function updateAttendance() {
      try {
        loading.value = true;
        let data = { absence_justification_type: attendance.value.absence_justification_type, _method: "PUT" };
        await api.post(`attendances/${attendance.value.attendance_id}`, data);
        attendanceDialog.value = false;
        fetchAttendances();
        notify.positive("Justicada con exito");
      } catch (error) {
        console.log(error);
        notify.positive("No se pudo actualizar");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      console.log("Fetching attendances");
      fetchAttendances();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[9] || (_cache[9] = createBaseVNode("h1", { class: "page-title" }, "Asistencias por Área", -1)),
        createVNode(QTable, {
          "hide-bottom": "",
          columns,
          rows: rows.value,
          class: "q-mb-xl"
        }, {
          "body-cell-status": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  color: props2.row.attendance_status == "present" ? "positive" : "negative",
                  label: props2.row.attendance_status == "present" ? "Asistente" : "Ausente"
                }, null, 8, ["color", "label"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, { class: "flex justify-end" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  disable: props2.row.attendance_status == "present",
                  dense: "",
                  flat: "",
                  round: "",
                  icon: "sym_o_edit",
                  onClick: () => {
                    attendance.value = props2.row;
                    attendanceDialog.value = true;
                  }
                }, null, 8, ["disable", "onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows"]),
        createVNode(QDialog, {
          modelValue: attendanceDialog.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => attendanceDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$5, [
                      _cache[4] || (_cache[4] = createBaseVNode("div", { class: "page-title q-mb-none" }, "Justificar inasistencia", -1)),
                      createVNode(QBtn, {
                        dense: "",
                        flat: "",
                        round: "",
                        icon: "sym_o_close",
                        onClick: _cache[0] || (_cache[0] = ($event) => attendanceDialog.value = false),
                        class: "q-ml-auto"
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QForm, {
                  onSubmit: withModifiers(updateAttendance, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(QMarkupTable, {
                      flat: "",
                      bordered: "",
                      separator: "cell"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("tbody", null, [
                          createBaseVNode("tr", null, [
                            _cache[5] || (_cache[5] = createBaseVNode("th", null, "Fecha:", -1)),
                            createBaseVNode("td", null, [
                              createVNode(_sfc_main$7, {
                                modelValue: attendance.value.date,
                                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => attendance.value.date = $event)
                              }, null, 8, ["modelValue"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[6] || (_cache[6] = createBaseVNode("th", null, "Justificada:", -1)),
                            createBaseVNode("td", null, toDisplayString(attendance.value.absence_justification_type == null ? "No" : "Si"), 1)
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[7] || (_cache[7] = createBaseVNode("th", null, "Tipo:", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QSelect, {
                                outlined: "",
                                dense: "",
                                modelValue: attendance.value.absence_justification_type,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => attendance.value.absence_justification_type = $event),
                                options: ["Enfermedad", "Citas Medicas", "Vacaciones", "Tramite Legal", "Otra"]
                              }, null, 8, ["modelValue"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[8] || (_cache[8] = createBaseVNode("th", null, "Comentarios:", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QInput, {
                                outlined: "",
                                type: "textarea"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createBaseVNode("div", _hoisted_2$4, [
                      createVNode(QBtn, {
                        type: "submit",
                        color: "primary",
                        loading: loading.value,
                        label: "Guardar"
                      }, null, 8, ["loading"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "page-title q-mb-md" };
const _sfc_main$5 = {
  __name: "DailyScores",
  props: ["candidateId", "date"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    watch(() => props.date, (newDate) => {
      if (newDate !== props.date) {
        fetchScores();
      }
    });
    async function fetchScores() {
      loading.value = true;
      try {
        let params = {
          candidate_id: props.candidateId,
          date: props.date
        };
        rows.value = (await api.get(`beneficiaries/${props.candidateId}/reports/daily`, { params })).data.data;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    }
    const columns = [
      { align: "left", name: "activity_name", label: "Actividad", field: "activity_name" },
      { align: "left", name: "measurement_unit", label: "Unidad", field: "measurement_unit" },
      { align: "left", name: "goal_type", label: "Tipo de Meta", field: "goal_type" },
      { align: "left", name: "daily_goal", label: "Meta diaria", field: "daily_goal" },
      { align: "left", name: "score", label: "Dato Real", field: "score" }
    ];
    onMounted(() => {
      fetchScores();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row) => {
          return openBlock(), createElementBlock("div", {
            key: row.id
          }, [
            createBaseVNode("div", _hoisted_1$4, toDisplayString(row.category_name) + " / " + toDisplayString(row.plan_name), 1),
            createVNode(QTable, {
              pagination: { rowsPerPage: 0 },
              rows: row.activities,
              columns,
              class: "q-mb-xl"
            }, {
              "body-cell-score": withCtx((props2) => [
                createVNode(QTd, {
                  class: normalizeClass(`text-${props2.row.color}`)
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props2.row.score), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              _: 2
            }, 1032, ["rows"])
          ]);
        }), 128))
      ]);
    };
  }
};
const _sfc_main$4 = {
  __name: "DailyIssues",
  props: ["candidateId", "date"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    async function fetchIssues() {
      try {
        console.log("Consultando incidencias del dia para " + props.candidateId + " " + props.date);
        loading.value = true;
        let params = {
          candidate_id: props.candidateId,
          date: props.date
        };
        rows.value = (await api.get("issues", { params })).data.data;
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    }
    watch(() => props.date, (newDate, oldDate) => {
      if (newDate !== oldDate) {
        fetchIssues();
      }
    });
    const subjects = [
      {
        id: 1,
        label: "Alimentación"
      },
      {
        id: 2,
        label: "Retardo"
      },
      {
        id: 3,
        label: "Higiene"
      },
      {
        id: 4,
        label: "Falta a Cita Médica"
      },
      {
        id: 5,
        label: "Falta a Cita Nutrición"
      },
      {
        id: 6,
        label: "Falta a Cita Psicología"
      },
      {
        id: 7,
        label: "Falta a Cita Comunicación"
      },
      {
        id: 8,
        label: "Falta a Capacitación"
      },
      {
        id: 9,
        label: "Falta a Reunión de Padres"
      },
      {
        id: 10,
        label: "Falta Actividades de Recaudación de Fondos"
      },
      {
        id: 11,
        label: "Indisciplina"
      },
      {
        id: 12,
        label: "Otro"
      }
    ];
    const columns = [
      { name: "category", label: "Área", field: (row) => row.plan_category?.label, align: "left" },
      {
        name: "type",
        label: "Asunto",
        field: (row) => subjects[row.type - 1]?.label || "Desconocido",
        align: "left"
      },
      { name: "date", label: "Fecha Reportada", field: "date", align: "left" },
      { name: "user", label: "Reportó", field: (row) => row.user?.name, align: "left" },
      { name: "comments", label: "Comentarios", field: "comments", align: "left" },
      { name: "status", label: "Estado", align: "left" }
    ];
    onMounted(() => fetchIssues());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "flex q-mb-md" }, [
          createBaseVNode("h1", { class: "page-title q-mb-none" }, "Incidencias")
        ], -1)),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: rows.value,
          columns,
          loading: loading.value,
          pagination: { rowsPerPage: 0 },
          "row-key": "id",
          class: "q-mb-xl"
        }, null, 8, ["rows", "loading"])
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "full-width custom-table" };
const _hoisted_2$3 = { class: "q-pa-sm" };
const _hoisted_3$3 = { class: "q-pa-sm" };
const _hoisted_4$1 = { class: "q-pa-sm" };
const _hoisted_5 = { class: "q-pa-sm" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { class: "q-pa-sm" };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { class: "q-pa-sm" };
const _hoisted_10 = { class: "q-pa-sm" };
const _hoisted_11 = { class: "q-pa-md flex justify-end" };
const _sfc_main$3 = {
  __name: "AbsenceForm",
  props: ["candidateId"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const candidateStore = useCandidateStore();
    watch(() => props.candidateId, () => {
      candidateStore.$state.id = props.candidateId;
      candidateStore.fetchCandidate();
    });
    const attendance = ref({
      status: "absent",
      type: "daily",
      candidate_id: props.candidateId,
      date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      absence_justification_type: null,
      absence_justification_comment: null
    });
    const justified = ref(false);
    const type = ref(null);
    const other = ref("");
    const loading = ref(false);
    const errors = ref({});
    const types = [
      { id: "enfermedad", label: "Enfermedad" },
      { id: "cita_medica", label: "Cita Medica" },
      { id: "vacaciones", label: "Vacaciones" },
      { id: "tramite_legal", label: "Tramite Legal" },
      { id: "otra", label: "Otra" }
    ];
    async function storeAbsence() {
      try {
        loading.value = true;
        errors.value = {};
        if (justified.value && !attendance.value.absence_justification_type) {
          notify.negative("Seleccione el tipo de justificación");
          return;
        }
        await api.post("attendances/daily", { ...attendance.value });
        notify.positive("Falta registrada con éxito");
        emit("close");
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo registrar la falta");
        if (error.formatted) errors.value = error.formatted;
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      if (props.candidateId) {
        candidateStore.$state.id = props.candidateId;
        candidateStore.fetchCandidate();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QForm, null, {
        default: withCtx(() => [
          createVNode(QMarkupTable, {
            flat: "",
            bordered: "",
            square: "",
            separator: "cell",
            dense: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("table", _hoisted_1$3, [
                createBaseVNode("tbody", null, [
                  createBaseVNode("tr", null, [
                    _cache[7] || (_cache[7] = createBaseVNode("td", null, "Beneficiario", -1)),
                    createBaseVNode("td", _hoisted_2$3, [
                      createBaseVNode("div", _hoisted_3$3, toDisplayString(unref(candidateStore) ? unref(candidateStore).full_name : "Cargando..."), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[8] || (_cache[8] = createBaseVNode("td", null, "Fecha", -1)),
                    createBaseVNode("td", _hoisted_4$1, [
                      createVNode(_sfc_main$7, {
                        modelValue: attendance.value.date,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => attendance.value.date = $event)
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("td", null, "Justificada", -1)),
                    createBaseVNode("td", _hoisted_5, [
                      createVNode(QRadio, {
                        modelValue: justified.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => justified.value = $event),
                        val: true,
                        label: "Sí"
                      }, null, 8, ["modelValue"]),
                      createVNode(QRadio, {
                        modelValue: justified.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => justified.value = $event),
                        val: false,
                        label: "No",
                        onClick: _cache[3] || (_cache[3] = ($event) => attendance.value.absence_justification_type = null)
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  justified.value ? (openBlock(), createElementBlock("tr", _hoisted_6, [
                    _cache[10] || (_cache[10] = createBaseVNode("td", null, "Tipo", -1)),
                    createBaseVNode("td", _hoisted_7, [
                      createVNode(QSelect, {
                        modelValue: attendance.value.absence_justification_type,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => attendance.value.absence_justification_type = $event),
                        filled: "",
                        options: types,
                        "option-label": "label",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": ""
                      }, null, 8, ["modelValue"])
                    ])
                  ])) : createCommentVNode("", true),
                  justified.value && type.value === "otra" ? (openBlock(), createElementBlock("tr", _hoisted_8, [
                    _cache[11] || (_cache[11] = createBaseVNode("td", null, "Detalle", -1)),
                    createBaseVNode("td", _hoisted_9, [
                      createVNode(QInput, {
                        modelValue: other.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => other.value = $event),
                        outlined: ""
                      }, null, 8, ["modelValue"])
                    ])
                  ])) : createCommentVNode("", true),
                  createBaseVNode("tr", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("td", null, "Comentarios", -1)),
                    createBaseVNode("td", _hoisted_10, [
                      createVNode(QInput, {
                        type: "textarea",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: attendance.value.absence_justification_comment,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => attendance.value.absence_justification_comment = $event),
                        error: !!errors.value["absence_justification_comment"],
                        "error-message": errors.value["absence_justification_comment"]
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_11, [
            createVNode(QBtn, {
              color: "primary",
              label: "Guardar",
              loading: loading.value,
              onClick: storeAbsence
            }, null, 8, ["loading"])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$2 = { class: "col-12" };
const _hoisted_2$2 = { class: "flex items-center q-mb-lg" };
const _hoisted_3$2 = { class: "q-gutter-x-md q-ml-auto flex" };
const _sfc_main$2 = {
  __name: "DailyReport",
  props: ["candidateId"],
  setup(__props) {
    const loading = ref(true);
    const props = __props;
    const selectedDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const issuesDialog = ref(false);
    const absenceDialog = ref(false);
    async function exportXls() {
      try {
        loading.value = true;
        let downloadurl = `beneficiaries/${props.candidateId}/reports/export`;
        let response = await api({
          url: downloadurl,
          method: "GET",
          responseType: "blob",
          params: {
            start_date: selectedDate.value,
            end_date: selectedDate.value
          }
        });
        const contentDisposition = response.headers["content-disposition"];
        let filename = "reporte_descargado.xlsx";
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(QDialog, {
          modelValue: issuesDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => issuesDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "sym_o_siren",
                      class: "q-mr-sm",
                      size: "1.25rem"
                    }),
                    _cache[9] || (_cache[9] = createBaseVNode("h1", { class: "page-subtitle q-my-none" }, "Registrar Incidencia", -1)),
                    createVNode(QBtn, {
                      onClick: _cache[0] || (_cache[0] = ($event) => issuesDialog.value = false),
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: "",
                      class: "q-ml-auto"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$8, {
                  "candidate-id": __props.candidateId,
                  onClose: _cache[1] || (_cache[1] = ($event) => issuesDialog.value = false)
                }, null, 8, ["candidate-id"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: absenceDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => absenceDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: "sym_o_event_busy",
                      class: "q-mr-sm",
                      size: "1.25rem"
                    }),
                    _cache[10] || (_cache[10] = createBaseVNode("h1", { class: "page-subtitle q-my-none" }, "Registrar Falta del Día", -1)),
                    createVNode(QBtn, {
                      onClick: _cache[3] || (_cache[3] = ($event) => absenceDialog.value = false),
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: "",
                      class: "q-ml-auto"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$3, {
                  "candidate-id": __props.candidateId,
                  onClose: _cache[4] || (_cache[4] = ($event) => absenceDialog.value = false)
                }, null, 8, ["candidate-id"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_2$2, [
          createVNode(_sfc_main$7, {
            modelValue: selectedDate.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => selectedDate.value = $event),
            class: "q-mr-md"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              label: "Exportar Excel",
              onClick: exportXls
            }),
            createVNode(QBtn, {
              color: "primary",
              label: "(+) Falta del día",
              onClick: _cache[7] || (_cache[7] = ($event) => absenceDialog.value = true)
            }),
            createVNode(QBtn, {
              color: "primary",
              label: "(+) Incidencia",
              onClick: _cache[8] || (_cache[8] = ($event) => issuesDialog.value = true)
            })
          ])
        ]),
        createVNode(_sfc_main$5, {
          "candidate-id": __props.candidateId,
          date: selectedDate.value,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id", "date"]),
        createVNode(_sfc_main$6, {
          "candidate-id": __props.candidateId,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id"]),
        createVNode(_sfc_main$4, {
          "candidate-id": __props.candidateId,
          date: selectedDate.value,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id", "date"])
      ]);
    };
  }
};
const QSpace = createComponent({
  name: "QSpace",
  setup() {
    const space = h("div", { class: "q-space" });
    return () => space;
  }
});
const _hoisted_1$1 = { class: "text-h6 text-weight-bold text-primary flex items-center" };
const _hoisted_2$1 = { class: "row q-gutter-sm q-mb-md" };
const _hoisted_3$1 = { class: "row q-gutter-xs" };
const _sfc_main$1 = {
  __name: "ModalCriterios",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        "model-value": __props.modelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => _ctx.$emit("update:modelValue", val))
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            style: { "width": "700px", "max-width": "90vw" },
            class: "q-pa-md shadow-2"
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$1, [
                    createVNode(QIcon, {
                      name: "traffic",
                      size: "md",
                      class: "q-mr-sm",
                      color: "warning"
                    }),
                    _cache[1] || (_cache[1] = createTextVNode(" Criterios de Semáforo "))
                  ]),
                  createVNode(QSpace),
                  withDirectives(createVNode(QBtn, {
                    icon: "close",
                    flat: "",
                    round: "",
                    dense: ""
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pt-md" }, {
                default: withCtx(() => [
                  _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-subtitle2 q-mb-md text-grey-7" }, " Consulta cómo se calculan los colores de cumplimiento para cada tipo de meta. ", -1)),
                  createVNode(QList, {
                    bordered: "",
                    separator: "",
                    class: "rounded-borders"
                  }, {
                    default: withCtx(() => [
                      createVNode(QExpansionItem, {
                        group: "metas",
                        icon: "trending_up",
                        label: "1. Meta Normal",
                        caption: "Porcentaje de cumplimiento",
                        "header-class": "text-bold text-primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, { class: "bg-grey-1" }, {
                            default: withCtx(() => [
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  _cache[7] || (_cache[7] = createBaseVNode("p", null, [
                                    createBaseVNode("strong", null, "Descripción:"),
                                    createTextVNode(" Se evalúa qué tanto se acercó el Dato Real a la Meta Diaria fija.")
                                  ], -1)),
                                  createBaseVNode("div", _hoisted_2$1, [
                                    createVNode(QBadge, {
                                      color: "positive",
                                      class: "q-pa-xs"
                                    }, {
                                      default: withCtx(() => _cache[2] || (_cache[2] = [
                                        createTextVNode("Verde: 66.67% - 100%")
                                      ])),
                                      _: 1
                                    }),
                                    createVNode(QBadge, {
                                      color: "warning",
                                      "text-color": "black",
                                      class: "q-pa-xs"
                                    }, {
                                      default: withCtx(() => _cache[3] || (_cache[3] = [
                                        createTextVNode("Amarillo: 33.34% - 66.66%")
                                      ])),
                                      _: 1
                                    }),
                                    createVNode(QBadge, {
                                      color: "negative",
                                      class: "q-pa-xs"
                                    }, {
                                      default: withCtx(() => _cache[4] || (_cache[4] = [
                                        createTextVNode("Rojo: 0% - 33.33%")
                                      ])),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(QBanner, {
                                    dense: "",
                                    class: "bg-blue-1 text-caption rounded-borders border-blue"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QIcon, {
                                        name: "calculate",
                                        color: "blue"
                                      }),
                                      _cache[5] || (_cache[5] = createBaseVNode("strong", null, "Cálculo:", -1)),
                                      _cache[6] || (_cache[6] = createTextVNode(" (Dato Real / Meta Diaria) "))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QExpansionItem, {
                        group: "metas",
                        icon: "leaderboard",
                        label: "2. Meta Incremental",
                        caption: "Superar el desempeño anterior",
                        "header-class": "text-bold text-teal"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, { class: "bg-grey-1" }, {
                            default: withCtx(() => [
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  _cache[11] || (_cache[11] = createBaseVNode("p", null, [
                                    createBaseVNode("strong", null, "Lógica:"),
                                    createTextVNode(" El objetivo es mejorar el resultado del día previo. La meta diaria es (Ayer + 1).")
                                  ], -1)),
                                  createVNode(QList, { dense: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QItem, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, { avatar: "" }, {
                                            default: withCtx(() => [
                                              createVNode(QIcon, {
                                                name: "check_circle",
                                                color: "positive"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => _cache[8] || (_cache[8] = [
                                              createBaseVNode("strong", null, "Verde:", -1),
                                              createTextVNode(" Dato Real mayor que ayer.")
                                            ])),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItem, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, { avatar: "" }, {
                                            default: withCtx(() => [
                                              createVNode(QIcon, {
                                                name: "remove_circle",
                                                color: "warning"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => _cache[9] || (_cache[9] = [
                                              createBaseVNode("strong", null, "Amarillo:", -1),
                                              createTextVNode(" Dato Real igual a ayer.")
                                            ])),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItem, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemSection, { avatar: "" }, {
                                            default: withCtx(() => [
                                              createVNode(QIcon, {
                                                name: "cancel",
                                                color: "negative"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemSection, null, {
                                            default: withCtx(() => _cache[10] || (_cache[10] = [
                                              createBaseVNode("strong", null, "Rojo:", -1),
                                              createTextVNode(" Dato Real menor que ayer.")
                                            ])),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QExpansionItem, {
                        group: "metas",
                        icon: "functions",
                        label: "3. Meta Acumulada",
                        caption: "Suma total del progreso",
                        "header-class": "text-bold text-orange-9"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, { class: "bg-grey-1" }, {
                            default: withCtx(() => [
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  _cache[15] || (_cache[15] = createBaseVNode("p", null, [
                                    createTextVNode("El "),
                                    createBaseVNode("strong", null, "Acumulado Real"),
                                    createTextVNode(" es la suma de todo lo logrado hasta hoy.")
                                  ], -1)),
                                  _cache[16] || (_cache[16] = createBaseVNode("div", { class: "text-subtitle2 q-mb-sm italic text-grey-8" }, "Tendencia de hoy vs ayer:", -1)),
                                  createBaseVNode("div", _hoisted_3$1, [
                                    createVNode(QChip, {
                                      outline: "",
                                      color: "positive",
                                      icon: "north",
                                      size: "sm"
                                    }, {
                                      default: withCtx(() => _cache[12] || (_cache[12] = [
                                        createTextVNode("Más que ayer")
                                      ])),
                                      _: 1
                                    }),
                                    createVNode(QChip, {
                                      outline: "",
                                      color: "warning",
                                      icon: "remove",
                                      size: "sm"
                                    }, {
                                      default: withCtx(() => _cache[13] || (_cache[13] = [
                                        createTextVNode("Igual que ayer")
                                      ])),
                                      _: 1
                                    }),
                                    createVNode(QChip, {
                                      outline: "",
                                      color: "negative",
                                      icon: "south",
                                      size: "sm"
                                    }, {
                                      default: withCtx(() => _cache[14] || (_cache[14] = [
                                        createTextVNode("Menos que ayer")
                                      ])),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(QExpansionItem, {
                        group: "metas",
                        icon: "stars",
                        label: "4. Meta Dominio",
                        caption: "Escala de calidad",
                        "header-class": "text-bold text-purple"
                      }, {
                        default: withCtx(() => [
                          createVNode(QCard, { class: "bg-grey-1" }, {
                            default: withCtx(() => [
                              createVNode(QCardSection, null, {
                                default: withCtx(() => [
                                  _cache[18] || (_cache[18] = createBaseVNode("p", null, "Se basa en el nivel de habilidad o estado alcanzado.", -1)),
                                  createVNode(QMarkupTable, {
                                    dense: "",
                                    flat: "",
                                    bordered: "",
                                    class: "bg-white"
                                  }, {
                                    default: withCtx(() => _cache[17] || (_cache[17] = [
                                      createBaseVNode("thead", { class: "bg-grey-2" }, [
                                        createBaseVNode("tr", null, [
                                          createBaseVNode("th", { class: "text-left" }, "Estado (Dato Real)"),
                                          createBaseVNode("th", { class: "text-center" }, "Color Indicador")
                                        ])
                                      ], -1),
                                      createBaseVNode("tbody", null, [
                                        createBaseVNode("tr", null, [
                                          createBaseVNode("td", { class: "text-weight-bold" }, "Dominada"),
                                          createBaseVNode("td", { class: "bg-positive text-white text-center text-bold" }, "Verde")
                                        ]),
                                        createBaseVNode("tr", null, [
                                          createBaseVNode("td", null, "En Proceso"),
                                          createBaseVNode("td", { class: "bg-warning text-center text-bold" }, "Amarillo")
                                        ]),
                                        createBaseVNode("tr", null, [
                                          createBaseVNode("td", null, "Presentada / Ninguna"),
                                          createBaseVNode("td", { class: "bg-negative text-white text-center text-bold" }, "Rojo")
                                        ])
                                      ], -1)
                                    ])),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(QCardActions, {
                align: "right",
                class: "q-pa-md"
              }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    unelevated: "",
                    label: "Entendido",
                    color: "primary",
                    class: "q-px-lg"
                  }, null, 512), [
                    [ClosePopup]
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
const ModalCriterios = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e63f8ba1"]]);
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = {
  class: "page-title",
  style: { "margin-bottom": "0" }
};
const _hoisted_3 = { class: "row q-mb-lg" };
const _hoisted_4 = { class: "col-md-6" };
const _sfc_main = {
  __name: "BeneficiaryReports",
  props: ["candidateId"],
  setup(__props) {
    const MonthlyReport = defineAsyncComponent(() => __vitePreload(() => import("./MonthlyReport-W0bt296J.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0));
    const mode = ref("daily");
    const showModal = ref(false);
    const modeLabel = computed(() => mode.value == "daily" ? "Diario" : "Mensual");
    const currentComponent = computed(() => mode.value === "daily" ? _sfc_main$2 : MonthlyReport);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("h1", _hoisted_2, "Reporte " + toDisplayString(modeLabel.value) + " del beneficiario", 1),
          createVNode(QBtn, {
            flat: "",
            class: "q-ml-auto",
            onClick: _cache[0] || (_cache[0] = ($event) => showModal.value = true)
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createTextVNode(" Criterios de Semáforo ")),
              createVNode(QIcon, {
                name: "info",
                color: "warning",
                class: "q-ml-md"
              })
            ]),
            _: 1
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(QRadio, {
              modelValue: mode.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => mode.value = $event),
              label: "Diario",
              val: "daily"
            }, null, 8, ["modelValue"]),
            createVNode(QRadio, {
              modelValue: mode.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => mode.value = $event),
              label: "Mensual",
              val: "monthly"
            }, null, 8, ["modelValue"])
          ])
        ]),
        (openBlock(), createBlock(resolveDynamicComponent(currentComponent.value), { candidateId: __props.candidateId }, null, 8, ["candidateId"])),
        createVNode(ModalCriterios, {
          modelValue: showModal.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showModal.value = $event)
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
