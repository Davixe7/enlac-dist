import { j as onMounted, r as ref, I as createBlock, J as openBlock, K as withCtx, N as createBaseVNode, M as createVNode, P as QBtn, O as createTextVNode } from "./index-cCQoerBE.js";
import { Q as QTd } from "./QTd-DvptlpfK.js";
import { Q as QTable } from "./QTable-BFy7GktN.js";
import { h as QDialog } from "./QSelect-CtZdKzvL.js";
import { Q as QPage } from "./QPage-Bs1iI1XP.js";
import { api } from "./axios-ByMy53kN.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-DmvsGuCk.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QSeparator-BP1E2Kcs.js";
import "./use-dark-C8v3QwmZ.js";
import "./QList-Bqgej6v_.js";
import "./QMarkupTable-D1U2wsrV.js";
import "./QCheckbox-BMrw9OGo.js";
import "./use-key-composition-Cm9vnODB.js";
import "./use-fullscreen-BhYJh7gg.js";
import "./QItemLabel-BM-XPiQp.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./QCard-hZAF9mJo.js";
import "./datetime-D3M9Tjak.js";
import "./use-render-cache-BA_W40LL.js";
import "./QInput-BzETij5i.js";
import "./use-file-dom-props-DxWClpik.js";
import "./ClosePopup-CVMW4Ps2.js";
import "./notify-DMNPTzhM.js";
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "CandidatosPage",
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
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.date : "NO DISPONIBLE",
        sortable: true
      },
      {
        name: "evaluator",
        label: "Evaluador",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.evaluator.name : "No disponible",
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
            "wrap-cells": "",
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
                      icon: "edit",
                      to: `candidatos/${props.row.id}/editar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "chat",
                      to: `candidatos/${props.row.id}/entrevistar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "list",
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
const CandidatosPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b2d4e9e5"]]);
export {
  CandidatosPage as default
};
