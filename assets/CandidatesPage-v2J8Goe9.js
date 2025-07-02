import { o as onMounted, r as ref, j as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, d as createVNode, Q as QBtn, g as createTextVNode } from "./index-BKlFzi9U.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { Q as QDialog } from "./QDialog-dSz5pi_j.js";
import { Q as QPage } from "./QPage-ByUg_F05.js";
import { api } from "./axios-DnBXXbR5.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-B6NiQ3z-.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
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
import "./QCard-ChwXMyjm.js";
import "./datetime-D36_sh8N.js";
import "./touch-CLsBvYSI.js";
import "./QInput-Cl4GFezJ.js";
import "./ClosePopup-1XzxlS47.js";
import "./notify-DpPex7WU.js";
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { class: "q-table__actions" };
const _sfc_main = {
  __name: "CandidatesPage",
  setup(__props) {
    onMounted(() => fetchCandidates());
    async function fetchCandidates() {
      rows.value = (await api.get("candidates/dashboard")).data.data;
    }
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
        field: (row) => row.evaluation_schedule.evaluator.name,
        sortable: true
      },
      {
        name: "is_candidate",
        label: "Candidato",
        align: "left",
        field: (row) => row.acceptance_status ? "Sí" : "No",
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-title" }, "Candidatos y Evaluaciones", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              color: "primary",
              icon: "description",
              outline: "",
              class: "q-mr-md",
              to: "/candidatos/reportes"
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("Reporte de candidatos ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "calendar_today",
              outline: "",
              onClick: _cache[0] || (_cache[0] = ($event) => appointmentDialog.value = true)
            }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("Programar cita ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "add",
              class: "q-ml-auto",
              unelevated: "",
              to: "/candidatos/registrar"
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode(" Nuevo Candidato ")
              ])),
              _: 1
            })
          ]),
          createVNode(QTable, {
            bordered: "",
            flat: "",
            "wrap-cells": "",
            "hide-bottom": "",
            columns: columns.value,
            rows: rows.value,
            pagination: { rowsPerPage: 0 }
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
                    }, null, 8, ["to"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows"]),
          createVNode(QDialog, {
            modelValue: appointmentDialog.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appointmentDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                candidates: rows.value,
                onClose: _cache[1] || (_cache[1] = ($event) => appointmentDialog.value = false)
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
