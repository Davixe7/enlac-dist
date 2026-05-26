import { r as ref, x as onMounted, a4 as api, a as computed, O as createElementBlock, H as openBlock, Z as createBaseVNode, J as createVNode, U as QBtn, I as withCtx, aa as QDialog, G as createBlock, L as createCommentVNode, a6 as QCardSection, a9 as QInput, a5 as QCard, P as Fragment } from "./index-BtlleyNg.js";
import { Q as QTable } from "./QTable-CzBJPEB1.js";
import { Q as QTd } from "./QTd-A-JBdP7S.js";
import { _ as _sfc_main$1 } from "./AppointmentForm-TrE5rtu0.js";
import { n as notify } from "./notify-DLhM6q4g.js";
import "./QVirtualScroll-CusdomfO.js";
import "./QList-DyILp-GS.js";
import "./QMarkupTable-DvOTOLBy.js";
import "./QSelect-Br-RFt5-.js";
import "./QItem-BysEJ2EE.js";
import "./QMenu-Df-u1lML.js";
import "./selection-8PfsjyT0.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-j85J4bbe.js";
import "./QDate-ADzq1bEN.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-_WuYxqmK.js";
import "./date-CqEQ1wlP.js";
import "./QPopupProxy-DdFrrj_i.js";
import "./QTime-BAO8O1tt.js";
import "./touch-BscSWsHh.js";
import "./ClosePopup-BgUON_Th.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "row q-col-gutter-x-lg" };
const _hoisted_3 = { class: "col-5 q-gutter-y-md" };
const _hoisted_4 = { class: "col-7" };
const _sfc_main = {
  __name: "AppointmentsPage",
  props: {
    candidateId: { required: true },
    readonly: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const candidate = ref();
    const appointment = ref(null);
    const appointments = ref([]);
    const appointmentTypes = ref([]);
    const dialog = ref(false);
    const dialog2 = ref(false);
    const loading = ref(false);
    onMounted(async () => {
      candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
      let response = (await api.get("work_areas")).data.data;
      response.map((item) => appointmentTypes.value[item.id] = { label: item.name, value: item.id });
      appointmentTypes.value[0] = { label: "Evaluación", value: 0 };
      appointments.value = (await api.get(`appointments/?candidate_id=${props.candidateId}`)).data.data;
    });
    function setAppointment(target) {
      appointment.value = target;
      dialog2.value = true;
    }
    async function updateAppointment() {
      try {
        loading.value = true;
        await api.post(`appointments/${appointment.value.id}`, { ...appointment.value, _method: "PUT" });
        notify.positive("Actualizado exitosamente");
        dialog2.value = false;
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo actualizar");
      } finally {
        loading.value = false;
      }
    }
    const columns = ref([
      {
        name: "type",
        label: "Tipo de cita",
        field: (row) => appointmentTypes.value[row.type_id].label,
        align: "left"
      },
      {
        name: "evaluator.name",
        label: "Persona",
        field: (row) => row.evaluator.full_name,
        align: "left"
      },
      { name: "date", label: "Fecha", field: (row) => row.frontendDate, align: "left" },
      { name: "time", label: "Horario", field: (row) => row.frontendTime, align: "left" },
      { name: "actions", label: "Acciones" }
    ]);
    const pastAppointments = computed(() => {
      return appointments.value.filter((appointment2) => new Date(appointment2.date) <= /* @__PURE__ */ new Date());
    });
    const pendingAppointments = computed(() => {
      return appointments.value.filter((appointment2) => new Date(appointment2.date) > /* @__PURE__ */ new Date());
    });
    function updateAppointments(appointment2) {
      dialog.value = false;
      appointments.value.push(appointment2);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[8] || (_cache[8] = createBaseVNode("h1", {
            class: "page-title",
            style: { "margin-bottom": "0" }
          }, " Registro de citas ", -1)),
          createVNode(QBtn, {
            disable: props.readonly,
            onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = true),
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add",
            label: "Programar cita"
          }, null, 8, ["disable"])
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas pendientes", -1)),
        createVNode(QTable, {
          class: "q-mb-xl",
          rows: pendingAppointments.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          "no-data-label": "No hay citas pendientes para mostrar",
          "row-key": "id",
          "hide-bottom": pendingAppointments.value.length > 0
        }, null, 8, ["rows", "columns", "hide-bottom"]),
        _cache[11] || (_cache[11] = createBaseVNode("h1", { class: "page-subtitle" }, "Citas previas", -1)),
        createVNode(QTable, {
          rows: pastAppointments.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          "no-data-label": "No hay citas para mostrar",
          "row-key": "id",
          "hide-bottom": pastAppointments.value.length > 0
        }, {
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  icon: "sym_o_comment",
                  flat: "",
                  round: "",
                  dense: "",
                  onClick: ($event) => setAppointment(props2.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns", "hide-bottom"]),
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
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: dialog2.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialog2.value = $event)
        }, {
          default: withCtx(() => [
            appointment.value ? (openBlock(), createBlock(QCard, {
              key: 0,
              style: { "min-width": "680px" }
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center" }, {
                  default: withCtx(() => [
                    _cache[9] || (_cache[9] = createBaseVNode("div", { class: "page-subtitle" }, "Detalles de la cita", -1)),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      dense: "",
                      icon: "sym_o_close",
                      class: "q-pa-none q-ml-auto",
                      onClick: _cache[3] || (_cache[3] = ($event) => dialog2.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          label: "Nombre del Candidato / Beneficiario",
                          "model-value": candidate.value.full_name,
                          readonly: ""
                        }, null, 8, ["model-value"]),
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          label: "Tipo de Cita",
                          "model-value": appointmentTypes.value[appointment.value.type_id],
                          readonly: ""
                        }, null, 8, ["model-value"]),
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          label: "Atenderá",
                          modelValue: appointment.value.evaluator.name,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => appointment.value.evaluator.name = $event),
                          readonly: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      createBaseVNode("div", _hoisted_4, [
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          "hide-bottom-space": "",
                          label: "Comentarios / Observaciones",
                          modelValue: appointment.value.comments,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => appointment.value.comments = $event),
                          type: "textarea",
                          rows: 8
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, { class: "flex justify-end" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      outline: "",
                      color: "primary",
                      onClick: _cache[6] || (_cache[6] = ($event) => dialog2.value = false),
                      label: "Cerrar",
                      class: "q-mr-sm"
                    }),
                    createVNode(QBtn, {
                      color: "primary",
                      label: "Guardar comentarios",
                      style: { "flex": "none" },
                      onClick: updateAppointment
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
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
