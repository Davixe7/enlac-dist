import { m as computed, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, u as unref, F as Fragment, B as renderList, t as toDisplayString, j as createBlock, r as ref, o as onMounted, s as createCommentVNode, w as withCtx, Q as QBtn, E as normalizeClass, v as withDirectives, g as createTextVNode, x as vShow, A as useRouter, G as normalizeStyle, h as QIcon } from "./index-BKlFzi9U.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { Q as QDialog } from "./QDialog-dSz5pi_j.js";
import { Q as QPage } from "./QPage-ByUg_F05.js";
import { api } from "./axios-DnBXXbR5.js";
import { u as useCandidateStore } from "./candidate-store-c63mDLc6.js";
import { _ as _sfc_main$5 } from "./CandidateProfile-B-2y4qYY.js";
import { Q as QInput } from "./QInput-Cl4GFezJ.js";
import { a as QCardSection, Q as QCard } from "./QCard-ChwXMyjm.js";
import { Q as QRadio } from "./QRadio-CaSQ0QVf.js";
import { n as notify } from "./notify-DpPex7WU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QSeparator-2_Z6TE3i.js";
import "./use-dark-hk5G9xUE.js";
import "./QList-BwwRjKko.js";
import "./QMarkupTable-fuDnew7J.js";
import "./QSelect-DKl0wMy2.js";
import "./use-key-composition-Cryiiwp5.js";
import "./QItemLabel-TX7ESzio.js";
import "./selection-C0xLdPSq.js";
import "./use-timeout-GW2bv9wv.js";
import "./QCheckbox-s2Kvsmmx.js";
import "./option-sizes-CfP0-6il.js";
import "./use-fullscreen-NQbe2Wgy.js";
import "./QImg-BHpEaJZk.js";
const _hoisted_1$4 = {
  class: "row q-col-gutter-xl q-mb-xl",
  style: { "padding-top": "1px" }
};
const _hoisted_2$3 = { class: "col-12 col-md-3" };
const _hoisted_3$2 = { class: "col-12 col-md-3" };
const _hoisted_4$2 = { class: "col-12 col-md-3" };
const _hoisted_5$1 = { class: "col-12 col-md-3" };
const _hoisted_6 = { class: "col-12 col-md-3" };
const _hoisted_7 = { class: "col-12 col-md-3" };
const _hoisted_8 = { class: "row q-col-gutter-xl q-mb-xl" };
const _hoisted_9 = { class: "col-12 col-md-3" };
const _hoisted_10 = { class: "col-12 col-md-3" };
const _hoisted_11 = { style: { "margin": "0", "padding": "0 0 0 1rem" } };
const _sfc_main$4 = {
  __name: "EvaluationResults",
  props: ["ranks", "evaluationFields"],
  setup(__props) {
    const props = __props;
    const store = useCandidateStore();
    const chronologicalAge = store.chronological_age ? store.chronological_age.split(".")[0] + " meses" : 0;
    const neurologicalAge = computed(() => props.ranks.reduce((age, rank) => rank.caracteristic == "0" ? age : age + 1, 0));
    const developmentRate = computed(() => (neurologicalAge.value / store.chronological_age * 100).toFixed(2));
    const damageExtension = computed(() => {
      let brainFunctions = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false };
      props.ranks.map((rank) => {
        if (!["F", "0"].includes(rank.caracteristic)) return;
        brainFunctions[rank.brain_function_id] = true;
      });
      let count = Object.values(brainFunctions).filter((val) => val).length;
      return {
        0: "No hay daño",
        1: "Focal",
        2: "Relativamente Focal",
        3: "Semifocal",
        4: "Semidifusa",
        5: "Relativamente Difusa",
        6: "Difusa"
      }[count];
    });
    const damageGrade = computed(() => {
      let damageGrades = {
        "Completa": [0],
        "Profunda": [1e-4, 25],
        "Severa": [25.0001, 50],
        "Moderada": [50.0001, 75],
        "Leve": [75.0001, 99]
      };
      if (developmentRate.value <= 0) {
        return "Completa";
      }
      if (developmentRate.value > 99) {
        return "Leve";
      }
      for (const clave in damageGrades) {
        const rango = damageGrades[clave];
        if (rango.length === 1 && developmentRate.value === rango[0]) {
          return clave;
        } else if (rango.length === 2 && developmentRate.value >= rango[0] && developmentRate.value <= rango[1]) {
          return clave;
        }
      }
      return null;
    });
    const damageLaterality = computed(() => {
      var lateralities = { "l": false, "r": false };
      props.ranks.map((rank) => {
        if (!["F", "0"].includes(rank.caracteristic)) return;
        lateralities[rank.laterality_impact] = true;
      });
      return Object.values(lateralities).filter((val) => val).length > 1 ? "Bilateral" : "Unilateral";
    });
    const damageLevel = computed(() => {
      let damageLog = { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false };
      props.ranks.map((rank) => ["F", "0"].includes(rank.caracteristic) ? damageLog[rank.brain_level_id] = true : "");
      let damagedLevelIds = Object.keys(damageLog).filter((key) => damageLog[key]);
      return props.evaluationFields.filter((level) => damagedLevelIds.includes(String(level.id)));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "page-title q-mb-md" }, "Diagnostico Funcional", -1)),
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("div", _hoisted_2$3, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Edad cronológica (meses)",
              modelValue: unref(chronologicalAge)
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Edad neurológica (meses)(*)",
              modelValue: neurologicalAge.value + " meses"
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Extension de la lesion(*)",
              modelValue: damageExtension.value
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Grado de la lesion(*)",
              modelValue: damageGrade.value
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_6, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Tasa de desarrollo (por formula)(*)",
              value: developmentRate.value
            }, null, 8, ["value"])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Tasa de desarrollo (por conteo)(*)",
              modelValue: developmentRate.value + "%"
            }, null, 8, ["modelValue"])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              label: "Lateralidad",
              modelValue: damageLaterality.value
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_10, [
            _cache[0] || (_cache[0] = createBaseVNode("label", {
              for: "#",
              style: { "font-weight": "400", "font-size": "14px", "margin-bottom": ".5rem" }
            }, "Nivel de la lesion", -1)),
            createBaseVNode("ul", _hoisted_11, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(damageLevel.value, (item) => {
                return openBlock(), createElementBlock("li", {
                  key: item.id
                }, toDisplayString(item.name), 1);
              }), 128))
            ])
          ])
        ])
      ], 64);
    };
  }
};
const _hoisted_1$3 = { class: "q-gutter-y-xl" };
const _sfc_main$3 = {
  __name: "EvaluationComments",
  props: ["rows", "brainFunctions"],
  setup(__props) {
    const props = __props;
    const commentsByFunction = computed(() => {
      let comments = {};
      props.rows.forEach((row) => {
        props.brainFunctions.forEach((brainFunc) => {
          if (row.ranks[brainFunc.id].comments) {
            comments[brainFunc.id] = comments[brainFunc.id] ? comments[brainFunc.id] + "," + row.ranks[brainFunc.id].comments : row.ranks[brainFunc.id].comments;
          }
        });
      });
      return comments;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("div", { class: "page-title" }, "Comentarios de la evaluación", -1)),
        createBaseVNode("div", _hoisted_1$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(commentsByFunction.value), (brainFunctionId) => {
            return openBlock(), createBlock(QInput, {
              key: brainFunctionId,
              type: "textarea",
              label: __props.brainFunctions.find((func) => func.id == brainFunctionId).name,
              "stack-label": "",
              outlined: "",
              modelValue: commentsByFunction.value[brainFunctionId],
              "onUpdate:modelValue": ($event) => commentsByFunction.value[brainFunctionId] = $event,
              class: "q-mb-lg"
            }, null, 8, ["label", "modelValue", "onUpdate:modelValue"]);
          }), 128))
        ])
      ], 64);
    };
  }
};
const _hoisted_1$2 = { class: "page-title page-title--no-margin" };
const _hoisted_2$2 = { class: "flex justify-between q-mb-lg" };
const _hoisted_3$1 = {
  key: 0,
  class: "q-pt-lg q-pl-none"
};
const _hoisted_4$1 = { style: { "margin-left": "-10px" } };
const _hoisted_5 = { class: "q-field__bottom text-negative" };
const _sfc_main$2 = {
  __name: "RankForm",
  props: ["rank"],
  emits: ["rankUpdated", "close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const errors = ref({});
    const loading = ref(false);
    const brainFunction = ref({});
    const localRank = ref({ ...props.rank });
    onMounted(async () => {
      brainFunction.value = (await api.get(`brain_functions/${props.rank.brain_function_id}`)).data.data;
    });
    async function storeRank() {
      loading.value = true;
      errors.value = {};
      let route = props.rank.id ? `brain_function_ranks/${props.rank.id}` : "brain_function_ranks";
      let data = props.rank.id ? { ...localRank.value, "_method": "PUT" } : { ...localRank.value };
      try {
        let response = (await api.post(route, data)).data.data;
        notify.positive("Guardado con exito");
        emits("rankUpdated", response);
      } catch (error) {
        errors.value = error.formatted ? error.formatted : {};
        notify.negative("No se pudo guardar");
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return __props.rank ? (openBlock(), createBlock(QCard, {
        key: 0,
        style: { "width": "500px" }
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "flex justify-between items-center q-pr-sm" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, toDisplayString(__props.rank.brain_level_id) + " " + toDisplayString(brainFunction.value.name), 1),
              createVNode(QBtn, {
                style: { "flex": "0 0 auto" },
                flat: "",
                round: "",
                dense: "",
                icon: "close",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close"))
              })
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$2, [
                createBaseVNode("div", {
                  onClick: _cache[1] || (_cache[1] = ($event) => localRank.value.caracteristic = "0"),
                  class: normalizeClass(["impact-btn", { "impact-btn--active": localRank.value.caracteristic == "0" }]),
                  style: {}
                }, "0", 2),
                createBaseVNode("div", {
                  onClick: _cache[2] || (_cache[2] = ($event) => localRank.value.caracteristic = "F"),
                  class: normalizeClass(["impact-btn", { "impact-btn--active": localRank.value.caracteristic == "F" }]),
                  style: { "background-color": "#EE8b00" }
                }, "F", 2),
                createBaseVNode("div", {
                  onClick: _cache[3] || (_cache[3] = ($event) => localRank.value.caracteristic = "P"),
                  class: normalizeClass(["impact-btn", { "impact-btn--active": localRank.value.caracteristic == "P" }]),
                  style: { "background-color": "#8DAF12" }
                }, "P", 2)
              ]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Comentarios",
                type: "textarea",
                modelValue: localRank.value.comments,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => localRank.value.comments = $event),
                error: !!errors.value.comments,
                "error-message": errors.value.comments
              }, null, 8, ["modelValue", "error", "error-message"]),
              localRank.value.caracteristic != "P" ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                _cache[9] || (_cache[9] = createBaseVNode("label", {
                  for: "#",
                  style: { "margin-bottom": "14px", "display": "block" }
                }, [
                  createTextVNode("¿Impacto en Lateridad? ("),
                  createBaseVNode("span", { class: "text--negative" }, "*"),
                  createTextVNode(") ")
                ], -1)),
                createBaseVNode("div", _hoisted_4$1, [
                  createVNode(QRadio, {
                    modelValue: localRank.value.laterality_impact,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => localRank.value.laterality_impact = $event),
                    val: "l",
                    label: "Izquierda"
                  }, null, 8, ["modelValue"]),
                  createVNode(QRadio, {
                    modelValue: localRank.value.laterality_impact,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => localRank.value.laterality_impact = $event),
                    val: "r",
                    label: "Derecha"
                  }, null, 8, ["modelValue"]),
                  createVNode(QRadio, {
                    modelValue: localRank.value.laterality_impact,
                    "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => localRank.value.laterality_impact = $event),
                    val: "b",
                    label: "Ambos"
                  }, null, 8, ["modelValue"])
                ]),
                withDirectives(createBaseVNode("div", _hoisted_5, " Seleccione lateralidad del impacto ", 512), [
                  [vShow, !!errors.value.laterality_impact]
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                loading: loading.value,
                onClick: _cache[8] || (_cache[8] = ($event) => emits("close")),
                class: "q-mr-sm",
                unelevated: "",
                outline: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("Cerrar")
                ])),
                _: 1
              }, 8, ["loading"]),
              createVNode(QBtn, {
                loading: loading.value,
                onClick: storeRank,
                unelevated: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("Guardar")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$1 = { style: { "padding-bottom": "40px", "margin-left": "-10px" } };
const _hoisted_2$1 = { class: "row q-col-gutter-lg" };
const _sfc_main$1 = {
  __name: "AdmissionForm",
  props: ["candidate", "candidateId"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const store = useCandidateStore();
    const router = useRouter();
    const loading = ref(false);
    const errors = ref({});
    const programs = ref([]);
    const localCandidate = ref({ ...props.candidate });
    onMounted(async () => {
      programs.value = (await api.get("programs")).data.data;
      localCandidate.value = { ...store.$state };
      localCandidate.value.acceptance_status = localCandidate.value.acceptance_status == null ? 1 : localCandidate.value.acceptance_status;
    });
    async function updateAcceptance() {
      errors.value = {};
      loading.value = true;
      try {
        let data = {
          acceptance_status: localCandidate.value.acceptance_status,
          rejection_comment: localCandidate.value.rejection_comment,
          program_id: localCandidate.value.program_id,
          _method: "PUT"
        };
        localCandidate.value = (await api.post(`candidates/${props.candidateId}/admission`, data)).data.data;
        notify.positive("Guardado con exito");
        emits("close");
        setTimeout(() => router.push("/candidatos"), 2500);
      } catch (error) {
        errors.value = error.formatted ? error.formatted : {};
        notify.negative("Por favor, valide la informacion");
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("div", { class: "page-title q-mb-none" }, "Es candidato para formar parte del instituto ENLAC?", -1)
            ])),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(QRadio, {
                  label: "Si",
                  val: 1,
                  modelValue: localCandidate.value.acceptance_status,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localCandidate.value.acceptance_status = $event)
                }, null, 8, ["modelValue"]),
                createVNode(QRadio, {
                  label: "No",
                  val: 0,
                  modelValue: localCandidate.value.acceptance_status,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localCandidate.value.acceptance_status = $event)
                }, null, 8, ["modelValue"])
              ]),
              localCandidate.value.acceptance_status ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _cache[6] || (_cache[6] = createBaseVNode("div", { class: "text-weight-bold q-pb-lg" }, "Seleccione las opciones del programa", -1)),
                createBaseVNode("div", _hoisted_2$1, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(programs.value, (program) => {
                    return openBlock(), createBlock(QRadio, {
                      class: "col-6",
                      key: program.id,
                      label: program.name,
                      val: program.id,
                      modelValue: localCandidate.value.program_id,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localCandidate.value.program_id = $event)
                    }, null, 8, ["label", "val", "modelValue"]);
                  }), 128))
                ])
              ], 64)) : (openBlock(), createBlock(QInput, {
                key: 1,
                outlined: "",
                "stack-label": "",
                type: "textarea",
                label: "¿Por qué no?",
                modelValue: localCandidate.value.rejection_comment,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => localCandidate.value.rejection_comment = $event),
                error: !!errors.value.rejection_comment,
                "error-message": errors.value.rejection_comment
              }, null, 8, ["modelValue", "error", "error-message"]))
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[4] || (_cache[4] = ($event) => emits("close")),
                class: "q-mr-sm",
                unelevated: "",
                outline: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[7] || (_cache[7] = [
                  createTextVNode("Cerrar")
                ])),
                _: 1
              }),
              createVNode(QBtn, {
                loading: loading.value,
                onClick: updateAcceptance,
                unelevated: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[8] || (_cache[8] = [
                  createTextVNode("Guardar")
                ])),
                _: 1
              }, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "flex justify-between items-center q-mb-xl" };
const _hoisted_2 = { class: "text-weight-bold" };
const _hoisted_3 = {
  key: 1,
  class: "spl-list"
};
const _hoisted_4 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "EvaluationForm",
  props: ["candidateId"],
  setup(__props) {
    const store = useCandidateStore();
    const props = __props;
    const brainFunctions = ref([]);
    const evaluationFields = ref([]);
    const rank = ref({});
    const columns = ref([]);
    const rows = ref([]);
    const dialog = ref(false);
    const dialog2 = ref(false);
    onMounted(async () => {
      store.id = props.candidateId;
      await store.fetchCandidate();
      evaluationFields.value = (await api.get("evaluation_fields", { params: { candidate_id: props.candidateId } })).data.data;
      brainFunctions.value = (await api.get("brain_functions")).data.data;
      setColumns();
    });
    function setColumns() {
      let cols = [
        {
          name: "name",
          label: "Nivel Cerebral",
          align: "left",
          sortable: false
        },
        {
          name: "growth",
          label: "Tiempo de Formación",
          align: "left",
          sortable: false
        }
      ];
      brainFunctions.value.forEach((func) => {
        cols.push({
          name: func.id,
          label: func.name,
          field: (row) => row.ranks[func.id],
          align: "left",
          sortable: false
        });
      });
      columns.value = [...cols];
      rows.value = Object.values(evaluationFields.value);
    }
    const allRanks = computed(() => {
      var newRanks = [];
      evaluationFields.value.map((level) => {
        if (level.P > store.chronological_age) return;
        newRanks = newRanks.concat(Object.values(level.ranks));
      });
      return newRanks;
    });
    function updateRank(updatedRank) {
      let level = rows.value.find((field) => field.id == updatedRank.brain_level_id);
      let levelIndex = rows.value.indexOf(level);
      let newLevel = { ...rows.value[levelIndex] };
      newLevel.ranks[updatedRank.brain_function_id] = updatedRank;
      rows.value.splice(levelIndex, 1, newLevel);
      dialog.value = false;
    }
    function editRank(param) {
      rank.value = param;
      dialog.value = true;
    }
    function print() {
      window.print();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[6] || (_cache[6] = createBaseVNode("h1", {
              class: "page-title",
              style: { "margin-bottom": "0" }
            }, " Evaluación ", -1)),
            createVNode(QBtn, {
              onClick: print,
              flat: "",
              style: { "color": "grey" }
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode("Exportar a PDF")
              ])),
              _: 1
            })
          ]),
          createVNode(_sfc_main$5, {
            candidateId: __props.candidateId,
            type: "evaluation"
          }, null, 8, ["candidateId"]),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            rows: rows.value,
            columns: columns.value,
            pagination: { rowsPerPage: -1 },
            class: "q-mb-xl",
            "wrap-cells": "",
            "hide-bottom": ""
          }, {
            "body-cell": withCtx((props2) => [
              createVNode(QTd, {
                props: props2,
                style: normalizeStyle({ backgroundColor: props2.col.name == "name" ? props2.row.color : "" })
              }, {
                default: withCtx(() => [
                  props2.col.name == "name" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createBaseVNode("div", _hoisted_2, toDisplayString(props2.row.grade), 1),
                    createTextVNode(" " + toDisplayString(props2.row.name), 1)
                  ], 64)) : props2.col.name == "growth" ? (openBlock(), createElementBlock("ul", _hoisted_3, [
                    createBaseVNode("li", null, "S = " + toDisplayString(props2.row.S) + " meses", 1),
                    createBaseVNode("li", null, "P = " + toDisplayString(props2.row.P) + " meses", 1),
                    createBaseVNode("li", null, "L = " + toDisplayString(props2.row.L) + " meses", 1)
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    props2.row.P <= unref(store).chronological_age ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      flat: "",
                      round: "",
                      label: props2.value.caracteristic ? props2.value.caracteristic : "",
                      onClick: ($event) => editRank(props2.value)
                    }, {
                      default: withCtx(() => [
                        !props2.value.caracteristic ? (openBlock(), createBlock(QIcon, {
                          key: 0,
                          name: "edit"
                        })) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1032, ["label", "onClick"])) : (openBlock(), createBlock(QBtn, {
                      key: 1,
                      flat: "",
                      round: "",
                      onClick: ($event) => editRank(props2.value),
                      label: "N/A"
                    }, null, 8, ["onClick"]))
                  ], 64))
                ]),
                _: 2
              }, 1032, ["props", "style"])
            ]),
            _: 1
          }, 8, ["rows", "columns"]),
          allRanks.value.length && evaluationFields.value ? (openBlock(), createBlock(_sfc_main$4, {
            key: 0,
            ranks: allRanks.value,
            evaluationFields: evaluationFields.value
          }, null, 8, ["ranks", "evaluationFields"])) : createCommentVNode("", true),
          createVNode(_sfc_main$3, {
            rows: rows.value,
            brainFunctions: brainFunctions.value
          }, null, 8, ["rows", "brainFunctions"]),
          createVNode(QDialog, {
            modelValue: dialog.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                rank: rank.value,
                onRankUpdated: updateRank,
                onClose: _cache[0] || (_cache[0] = ($event) => dialog.value = false)
              }, null, 8, ["rank"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QDialog, {
            modelValue: dialog2.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialog2.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                candidateId: __props.candidateId,
                onClose: _cache[2] || (_cache[2] = ($event) => dialog2.value = false)
              }, null, 8, ["candidateId"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QBtn, {
              color: "primary",
              onClick: _cache[4] || (_cache[4] = ($event) => dialog2.value = true)
            }, {
              default: withCtx(() => _cache[7] || (_cache[7] = [
                createTextVNode(" Guardar ")
              ])),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
};
const EvaluationForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0f36a34e"]]);
export {
  EvaluationForm as default
};
