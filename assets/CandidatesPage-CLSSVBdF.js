import { o as onMounted, r as ref, j as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, d as createVNode, Q as QBtn, g as createTextVNode } from "./index-D6w-cXuQ.js";
import { Q as QTd } from "./QTd-DKJWU2A4.js";
import { Q as QTable } from "./QTable-Bp4bRbRZ.js";
import { Q as QDialog } from "./QDialog-Bi4NORAY.js";
import { Q as QPage } from "./QPage-QnDthPP1.js";
import { api } from "./axios-DOaUvPJw.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-BbCRPUjr.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import "./QSeparator-DY803WMm.js";
import "./use-dark-3OGnIsE7.js";
import "./QList-D_uMUYMB.js";
import "./QMarkupTable-Bmy7cnK1.js";
import "./QSelect-CDZ-81F1.js";
import "./use-key-composition-BP8jtq2e.js";
import "./QItemLabel-BELvJCJR.js";
import "./selection-GX1L8RjI.js";
import "./use-timeout-tcy2aUTk.js";
import "./QCheckbox-BMnj2b1-.js";
import "./option-sizes-B3TZgULG.js";
import "./use-fullscreen-D4QZmw0H.js";
import "./QCard-iKpX3XMK.js";
import "./datetime-yluM17Mq.js";
import "./touch-CLsBvYSI.js";
import "./QInput-wxw_kogA.js";
import "./ClosePopup-ByZ8KzbA.js";
import "./notify-BZ2TjmhX.js";
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
