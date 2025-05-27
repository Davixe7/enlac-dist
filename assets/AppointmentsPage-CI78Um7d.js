import { r as ref, j as onMounted, a as computed, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, K as withCtx, P as QBtn, X as Fragment, O as createTextVNode } from "./index-cCQoerBE.js";
import { Q as QTable } from "./QTable-BFy7GktN.js";
import { h as QDialog } from "./QSelect-CtZdKzvL.js";
import { api } from "./axios-ByMy53kN.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-DmvsGuCk.js";
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
const _hoisted_1 = { class: "flex items-center" };
const _sfc_main = {
  __name: "AppointmentsPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const candidate = ref();
    onMounted(async () => {
      candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
      appointments.value = (await api.get(`appointments/?candidate_id=${props.candidateId}`)).data.data;
    });
    const appointmentTypes = ref([
      "Evaluacion",
      "Médico",
      "Nutrición",
      "Psicología",
      "Comunicación",
      "Programa Escucha"
    ]);
    const columns = ref([
      { name: "type", label: "Tipo de cita", field: (row) => appointmentTypes.value[row.type_id], align: "left" },
      { name: "evaluator.name", label: "Persona", field: (row) => row.evaluator.name, align: "left" },
      { name: "date", label: "Fecha", field: (row) => row.date.split(" ")[0], align: "left" },
      { name: "time", label: "Horario", field: (row) => row.date.split(" ")[1], align: "left" }
    ]);
    const dialog = ref(false);
    const appointments = ref([]);
    const pastAppointments = computed(() => {
      return appointments.value.filter((appointment) => new Date(appointment.date) <= /* @__PURE__ */ new Date());
    });
    const pendingAppointments = computed(() => {
      return appointments.value.filter((appointment) => new Date(appointment.date) > /* @__PURE__ */ new Date());
    });
    function updateAppointments(appointment) {
      dialog.value = false;
      appointments.value.push(appointment);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title" }, "Registro de citas", -1)),
          createVNode(QBtn, {
            onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = true),
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add"
          }, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("Programar cita")
            ])),
            _: 1
          })
        ]),
        _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas pendientes", -1)),
        createVNode(QTable, {
          class: "q-mb-xl",
          rows: pendingAppointments.value,
          columns: columns.value,
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"]),
        _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas previas", -1)),
        createVNode(QTable, {
          rows: pastAppointments.value,
          columns: columns.value,
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              candidates: [candidate.value],
              onSave: updateAppointments
            }, null, 8, ["candidates"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
