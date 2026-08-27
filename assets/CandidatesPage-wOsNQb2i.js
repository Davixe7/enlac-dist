import { r as ref, q as createBlock, s as openBlock, t as withCtx, v as createVNode, X as QCardSection, N as createBaseVNode, G as QBtn, Q as QIcon, D as toDisplayString, Y as QInput, a1 as QCard, V as api, K as onMounted, a3 as QDialog } from "./index-wM11jDk3.js";
import { Q as QTd } from "./QTd-DxePg_B_.js";
import { Q as QTable } from "./QTable-B8jvDOaB.js";
import { Q as QPage } from "./QPage-DTnmuxcE.js";
import { _ as _sfc_main$2 } from "./AppointmentForm-DF9ZjxEJ.js";
import { n as notify } from "./notify-CdEneTud.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import "./QVirtualScroll-BTLt2pXl.js";
import "./QList-I7wt001i.js";
import "./QMarkupTable-BJkI4Y2C.js";
import "./QSelect-CcgipNm1.js";
import "./QChip-9wwIEELM.js";
import "./QItem-ouM2WTqi.js";
import "./QMenu-DlCJLyq4.js";
import "./position-engine-C00F9T-k.js";
import "./selection-CttaKPaT.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-BxCH9Rwu.js";
import "./QDate-C_j4urII.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-BRYqZhj4.js";
import "./date-F-ikrccM.js";
import "./QPopupProxy-fzUKWPIG.js";
import "./QTime-6YQqYgqw.js";
import "./TouchPan-CyZL0enM.js";
import "./touch-BscSWsHh.js";
import "./ClosePopup-DnliY8Ma.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1$1 = { class: "flex items-center justify-between" };
const _hoisted_2$1 = { class: "flex items-center" };
const _hoisted_3 = { class: "text-grey" };
const _hoisted_4 = { class: "flex justify-end" };
const _sfc_main$1 = {
  __name: "CandidateReviewForm",
  props: ["candidate"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const loading = ref(false);
    const data = ref(props.candidate.review);
    async function save() {
      try {
        loading.value = true;
        await api.post(`candidates/${props.candidate.id}/review`, {
          review: data.value,
          _method: "PUT"
        });
        notify.positive("Reseña actualizada");
        emits("saved", data.value);
      } catch (error) {
        notify.negative("No se pudo actualizar la reseña");
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "400px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "q-pb-none" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-subtitle q-mb-xs" }, "Reseña del Candidato", -1)),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
                })
              ]),
              createBaseVNode("div", _hoisted_2$1, [
                createVNode(QIcon, {
                  name: "person",
                  class: "q-mr-xs text-primary"
                }),
                createBaseVNode("div", _hoisted_3, toDisplayString(props.candidate.full_name), 1)
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QInput, {
                outlined: "",
                type: "textarea",
                modelValue: data.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => data.value = $event),
                "hide-bottom-space": "",
                class: "q-mb-md",
                rows: "15"
              }, null, 8, ["modelValue"]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(QBtn, {
                  loading: loading.value,
                  color: "primary",
                  label: "Guardar",
                  onClick: save
                }, null, 8, ["loading"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { class: "q-table__actions" };
const _sfc_main = {
  __name: "CandidatesPage",
  setup(__props) {
    onMounted(() => fetchCandidates());
    async function fetchCandidates() {
      rows.value = (await api.get("candidates")).data.data;
    }
    const search = ref("");
    const appointmentDialog = ref(false);
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre de Candidato",
        align: "left",
        field: "full_name",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        align: "left",
        field: "sheet",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha de Evaluación",
        align: "left",
        field: (row) => formatDate(row.evaluation_schedule.date),
        sortable: true
      },
      {
        name: "evaluator",
        label: "Evaluador",
        align: "left",
        field: (row) => row.evaluation_schedule.evaluator?.name,
        sortable: true
      },
      {
        name: "notes",
        label: "Observaciones",
        align: "left",
        field: "diagnosis",
        sortable: false
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right",
        sortable: false
      }
    ]);
    const candidate = ref(null);
    const reviewDialog = ref(false);
    function editReview(row) {
      candidate.value = row;
      reviewDialog.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(QDialog, {
            modelValue: reviewDialog.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => reviewDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                candidate: candidate.value,
                onSaved: _cache[0] || (_cache[0] = (r) => {
                  candidate.value.review = r;
                  reviewDialog.value = false;
                }),
                onClose: _cache[1] || (_cache[1] = ($event) => reviewDialog.value = false)
              }, null, 8, ["candidate"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "page-title" }, "Candidatos y Evaluaciones", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              color: "primary",
              icon: "description",
              outline: "",
              class: "q-mr-md",
              to: "/candidatos/reportes",
              label: "Reporte de candidatos"
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "calendar_today",
              outline: "",
              onClick: _cache[3] || (_cache[3] = ($event) => appointmentDialog.value = true),
              label: "Programar cita"
            }),
            createVNode(QInput, {
              class: "q-ml-auto q-mr-md",
              modelValue: search.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => search.value = $event),
              debounce: 500,
              placeholder: "Buscar",
              "hide-bottom-space": "",
              outlined: "",
              clearable: ""
            }, {
              append: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(QBtn, {
              color: "primary",
              icon: "add",
              unelevated: "",
              to: "/candidatos/registrar",
              label: "Nuevo Candidato"
            })
          ]),
          createVNode(QTable, {
            bordered: "",
            flat: "",
            "wrap-cells": "",
            "hide-bottom": "",
            columns: columns.value,
            rows: rows.value,
            pagination: { rowsPerPage: 0 },
            filter: search.value
          }, {
            "body-cell-actions": withCtx((props) => [
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "sym_o_edit",
                      to: `candidatos/${props.row.id}/editar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "sym_o_chat",
                      to: `candidatos/${props.row.id}/entrevistar`,
                      class: "q-mx-xs"
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "sym_o_content_paste",
                      to: `candidatos/${props.row.id}/evaluar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "sym_o_note_alt",
                      onClick: ($event) => editReview(props.row)
                    }, null, 8, ["onClick"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows", "filter"]),
          createVNode(QDialog, {
            modelValue: appointmentDialog.value,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => appointmentDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$2, {
                candidates: rows.value,
                onClose: _cache[5] || (_cache[5] = ($event) => appointmentDialog.value = false)
              }, null, 8, ["candidates"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
