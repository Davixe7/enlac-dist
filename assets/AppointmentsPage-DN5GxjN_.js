import { r as ref, o as onMounted, i as api, p as computed, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, Q as QBtn, F as Fragment, a as openBlock, h as createTextVNode } from "./index-BXqY0shX.js";
import { Q as QTable } from "./QTable-DSrFCOxR.js";
import { Q as QDialog } from "./QDialog-oeqTLSLP.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-BmBHGzKP.js";
import "./QSeparator-BbmvWgd-.js";
import "./use-dark-DjMuuakh.js";
import "./QList-BeN9cPCv.js";
import "./QMarkupTable-DkEupggY.js";
import "./QSelect-IM5jyk2g.js";
import "./use-key-composition-BKbfOFw1.js";
import "./QItemLabel-tzmo7QJQ.js";
import "./selection-B--_r8qR.js";
import "./use-timeout-CrK4RhEz.js";
import "./QCheckbox-1shOM7b_.js";
import "./option-sizes-CENjnHKS.js";
import "./use-fullscreen-myPsEZNv.js";
import "./QCard-Ds7qAq6D.js";
import "./datetime-CGY2W0nB.js";
import "./touch-CLsBvYSI.js";
import "./QInput-D40gES8W.js";
import "./ClosePopup-D7wrnXTh.js";
import "./notify-X3dm3duL.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _sfc_main = {
  __name: "AppointmentsPage",
  props: {
    candidateId: { type: Number, required: true },
    readonly: { type: Boolean, default: false }
  },
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
      {
        name: "type",
        label: "Tipo de cita",
        field: (row) => appointmentTypes.value[row.type_id],
        align: "left"
      },
      {
        name: "evaluator.name",
        label: "Persona",
        field: (row) => row.evaluator.full_name,
        align: "left"
      },
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
          _cache[4] || (_cache[4] = createBaseVNode("h1", {
            class: "page-title",
            style: { "margin-bottom": "0" }
          }, " Registro de citas ", -1)),
          createVNode(QBtn, {
            disable: props.readonly,
            onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = true),
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add"
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Programar cita")
            ])),
            _: 1
          }, 8, ["disable"])
        ]),
        _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas pendientes", -1)),
        createVNode(QTable, {
          class: "q-mb-xl",
          rows: pendingAppointments.value,
          columns: columns.value,
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"]),
        _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas previas", -1)),
        createVNode(QTable, {
          rows: pastAppointments.value,
          columns: columns.value,
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              candidates: [candidate.value],
              onSave: updateAppointments,
              onClose: _cache[1] || (_cache[1] = ($event) => dialog.value = false)
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
