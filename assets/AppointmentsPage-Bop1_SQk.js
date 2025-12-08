import { r as ref, o as onMounted, l as api, A as computed, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, h as QBtn, s as QDialog, H as Fragment, a as openBlock, j as createTextVNode } from "./index-Ca5-ciyA.js";
import { Q as QTable } from "./QTable-C0Jh40jm.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-C8hPwcrL.js";
import "./QVirtualScroll-BWW-5zOR.js";
import "./QList-CMmeXu_V.js";
import "./QMarkupTable-BimuUJQd.js";
import "./QSelect-PRgMmb3S.js";
import "./QItem-C9mpBGOT.js";
import "./selection-C_rEmdl2.js";
import "./use-fullscreen-s0KkdCH7.js";
import "./QDate-DHC_MIY0.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-Bb1Uiq_-.js";
import "./QPopupProxy-CatH6M5w.js";
import "./QTime-QCqmVz3u.js";
import "./touch-BscSWsHh.js";
import "./ClosePopup-C7jC9Dw9.js";
import "./datetime-Dvln09A7.js";
import "./notify-dGu9DWRJ.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _sfc_main = {
  __name: "AppointmentsPage",
  props: {
    candidateId: { required: true },
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
          pagination: { rowsPerPage: 0 },
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"]),
        _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas previas", -1)),
        createVNode(QTable, {
          rows: pastAppointments.value,
          columns: columns.value,
          "hide-bottom": "",
          pagination: { rowsPerPage: 0 }
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
