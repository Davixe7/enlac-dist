import { r as ref, o as onMounted, m as computed, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, Q as QBtn, F as Fragment, a as openBlock, g as createTextVNode } from "./index-BKlFzi9U.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { Q as QDialog } from "./QDialog-dSz5pi_j.js";
import { api } from "./axios-DnBXXbR5.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-B6NiQ3z-.js";
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
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
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
    const appointmentTypes = ref(["Evaluacion", "Médico", "Nutrición", "Psicología", "Comunicación", "Programa Escucha"]);
    const columns = ref([
      { name: "type", label: "Tipo de cita", field: (row) => appointmentTypes.value[row.type_id], align: "left" },
      { name: "evaluator.name", label: "Persona", field: (row) => row.evaluator.full_name, align: "left" },
      { name: "date", label: "Fecha", field: (row) => row.frontendDate, align: "left" },
      { name: "time", label: "Horario", field: (row) => row.frontendTime, align: "left" }
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
          _cache[3] || (_cache[3] = createBaseVNode("h1", {
            class: "page-title",
            style: { "margin-bottom": "0" }
          }, " Registro de citas ", -1)),
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
