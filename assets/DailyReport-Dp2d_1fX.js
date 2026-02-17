import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, h as QBtn, m as QCard, n as QCardSection, e as withModifiers, t as toDisplayString, Q as QInput, s as QDialog, l as api, D as watch, H as Fragment, K as renderList, O as normalizeClass, j as createTextVNode } from "./index-CnPCrPcs.js";
import { Q as QSelect } from "./QSelect-2bl5SHtH.js";
import { _ as _sfc_main$4 } from "./BeneficiaryProfile-C-6LnmTc.js";
import { Q as QBadge } from "./QBadge-BA9dLEnq.js";
import { Q as QTd } from "./QTd-BQhkgjsC.js";
import { Q as QTable } from "./QTable-5_0AeQ_Q.js";
import { Q as QMarkupTable } from "./QMarkupTable-BQ20kKCe.js";
import { Q as QForm } from "./QForm-BuNZxJpY.js";
import { _ as _sfc_main$3 } from "./EnlacDate-qMk6pUnv.js";
import { n as notify } from "./notify-CvtyHu7z.js";
import _sfc_main$5 from "./IssuesReport-B4quahhe.js";
import "./QItem-Ce5rFAfg.js";
import "./QMenu-C7Id-3IR.js";
import "./selection-vlRiI8JY.js";
import "./format-BC-UoHKJ.js";
import "./QImg-YGiRXtAr.js";
import "./QExpansionItem-CiSVY7DL.js";
import "./candidate-store-DkkgXyHj.js";
import "./QVirtualScroll-DnzmeAgO.js";
import "./QList-B0uO-GP0.js";
import "./use-fullscreen-Be43hROf.js";
import "./QDate-7g8-8pOA.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-DuzYuWdG.js";
import "./QPopupProxy-B2IRhZfT.js";
import "./ClosePopup-c30KicH8.js";
import "./datetime-Dvln09A7.js";
import "./QPage-gdN3Nbwe.js";
const _hoisted_1$2 = { class: "flex items-center" };
const _hoisted_2$1 = { class: "flex justify-end q-pa-md" };
const _sfc_main$2 = {
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
                    createBaseVNode("div", _hoisted_1$2, [
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
                              createVNode(_sfc_main$3, {
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
                    createBaseVNode("div", _hoisted_2$1, [
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
const _hoisted_1$1 = { class: "page-title q-mb-md" };
const _sfc_main$1 = {
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
            createBaseVNode("div", _hoisted_1$1, toDisplayString(row.category_name) + " / " + toDisplayString(row.plan_name), 1),
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
const _hoisted_1 = { class: "flex justify-between q-mb-md" };
const _hoisted_2 = { class: "flex items-center q-mb-lg" };
const _hoisted_3 = { class: "q-gutter-x-md q-ml-auto flex" };
const _sfc_main = {
  __name: "DailyReport",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const candidates = ref([]);
    const selectedCandidate = ref(props.candidateId);
    const selectedDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title q-mb-none" }, " Reporte Diario ", -1)),
          createVNode(QBtn, {
            flat: "",
            label: "Criterios de Semáforo",
            icon: "info"
          })
        ]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(QSelect, {
            modelValue: selectedCandidate.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedCandidate.value = $event),
            options: candidates.value,
            "option-value": "id",
            "option-label": "full_name",
            label: "Selecciona beneficiario",
            dense: "",
            outlined: "",
            class: "q-mb-md",
            "emit-value": "",
            "map-options": ""
          }, null, 8, ["modelValue", "options"]),
          createVNode(_sfc_main$3, {
            modelValue: selectedDate.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedDate.value = $event),
            class: "q-mr-md"
          }, null, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              label: "Exportar Excel"
            }),
            createVNode(QBtn, {
              color: "primary",
              label: "(+) Falta del día"
            }),
            createVNode(QBtn, {
              color: "primary",
              label: "(+) Incidencia"
            })
          ])
        ]),
        createVNode(_sfc_main$4, { "candidate-id": selectedCandidate.value }, null, 8, ["candidate-id"]),
        createVNode(_sfc_main$1, {
          "candidate-id": selectedCandidate.value,
          date: selectedDate.value,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id", "date"]),
        createVNode(_sfc_main$2, {
          "candidate-id": selectedCandidate.value,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id"]),
        createVNode(_sfc_main$5, {
          "candidate-id": selectedCandidate.value,
          date: selectedDate.value,
          class: "q-mb-xl"
        }, null, 8, ["candidate-id", "date"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
