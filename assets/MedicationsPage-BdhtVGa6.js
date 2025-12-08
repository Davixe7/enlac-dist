import { r as ref, o as onMounted, q as createBlock, a as openBlock, l as api, D as watch, a2 as reactive, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, a3 as QToggle, Q as QInput, E as createCommentVNode, h as QBtn, m as QCard, n as QCardSection, s as QDialog, j as createTextVNode } from "./index-DnbucpnZ.js";
import { Q as QTd } from "./QTd-T4mZJgtB.js";
import { Q as QTr } from "./QTr-uixyWTWM.js";
import { Q as QTable } from "./QTable-wFGhB5St.js";
import { n as notify } from "./notify-ss2b1ea4.js";
function scrollToFirstError() {
  let firstFailedInput = document.querySelector(".q-field--error");
  if (firstFailedInput) {
    firstFailedInput.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
const _sfc_main$1 = {
  __name: "MedicationLogs",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "name", label: "Medicamento", field: (row) => row.medication.name },
      { align: "left", name: "dose", label: "Dosis", field: "dose" },
      {
        align: "left",
        name: "status",
        label: "Cambio a",
        field: (row) => row.status ? "activo" : "inactivo"
      },
      { align: "left", name: "created_at", label: "Fecha", field: "created_at" }
    ]);
    async function fetchLogs() {
      try {
        loading.value = true;
        rows.value = (await api.get(`medication_logs/${props.candidateId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchLogs();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QTable, {
        bordered: "",
        flat: "",
        rows: rows.value,
        columns: columns.value,
        pagination: { rowsPerPage: 0 },
        "hide-bottom": ""
      }, null, 8, ["rows", "columns"]);
    };
  }
};
const _hoisted_1 = { class: "form-section" };
const _hoisted_2 = { class: "q-table__actions" };
const _hoisted_3 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "MedicationsPage",
  props: {
    readonly: { type: Boolean, default: false },
    errors: { type: Object, required: false, default: () => ({}) },
    candidateId: { type: Number, required: false, default: null },
    modelValue: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const loading = ref(false);
    const localMedications = ref([...props.modelValue]);
    const logsDialog = ref(false);
    watch(
      () => props.modelValue,
      (newValue) => {
        localMedications.value = newValue;
      },
      { deep: true }
    );
    watch(
      () => localMedications.value,
      (newValue) => {
        emits("update:modelValue", newValue);
      },
      { deep: true }
    );
    const medication = reactive({
      status: 1,
      name: "",
      dose: "",
      frequency: "",
      duration: ""
    });
    function addMedication() {
      medication.status = 1;
      medication.name = "";
      medication.dose = "";
      medication.frequency = "";
      medication.duration = "";
      medication.observations = "";
      localMedications.value.push({ ...medication });
    }
    async function logStatus(status, med) {
      if (!med.id) {
        return;
      }
      try {
        loading.value = true;
        let route = `/medication_logs/${med.id}`;
        let data = { ...med, status };
        await api.post(route, data);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function saveMedication(med) {
      try {
        loading.value = true;
        let route = med.id ? `/medications/${med.id}` : "medications";
        let data = { ...med, _method: med.id ? "PUT" : "POST", candidate_id: props.candidateId };
        let action = med.id ? "actualizado" : "guardado";
        let response = (await api.post(route, data)).data.data;
        localMedications.value.splice(localMedications.value.indexOf(med), 1, response);
        notify.positive(`Medicamento ${action} exitosamente`);
      } catch (error) {
        console.log(error);
        notify.negative(`No se pudo guardar`);
      } finally {
        loading.value = false;
      }
    }
    async function deleteMedication(med) {
      if (!med.id) {
        localMedications.value.splice(localMedications.value.indexOf(med, 1), 1);
        return;
      }
      try {
        loading.value = true;
        await api.post(`medications/${med.id}`, { _method: "DELETE" });
        localMedications.value.splice(localMedications.value.indexOf(med), 1);
      } catch (error) {
        console.log(error);
        notify.negative(`No se pudo actualizar`);
      } finally {
        loading.value = false;
      }
    }
    const columns = ref([
      {
        name: "status",
        field: "status",
        label: "Estado",
        align: "left"
      },
      {
        name: "name",
        field: "name",
        label: "Nombre del medicamento",
        align: "left"
      },
      { name: "dosis", field: "dose", label: "Dosis", align: "left" },
      {
        name: "frecuencia",
        field: "frequency",
        label: "Frecuencia",
        align: "left"
      },
      {
        name: "tiempo",
        field: "duration",
        label: "Tiempo de tomarlo",
        align: "left"
      },
      {
        name: "observaciones",
        field: () => "Lörem ipsum orade kövis då antivaxxare. Sanys infrafede de stenosamma plagen. ",
        label: "Observaciones",
        align: "left"
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "page-title" }, "Tabla de Medicamentos", -1)),
        createVNode(QTable, {
          class: "q-mb-lg",
          "hide-bottom": "",
          "wrap-cells": "",
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: localMedications.value,
          pagination: { rowsPerPage: 0 }
        }, {
          body: withCtx((props2) => [
            createVNode(QTr, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QToggle, {
                      "onUpdate:modelValue": [(value, event) => logStatus(value, props2.row), ($event) => props2.row.status = $event],
                      modelValue: props2.row.status,
                      "true-value": 1,
                      "false-value": 0,
                      color: "positive"
                    }, null, 8, ["onUpdate:modelValue", "modelValue"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: Paracetamol",
                      modelValue: props2.row.name,
                      "onUpdate:modelValue": ($event) => props2.row.name = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.name`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.name`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 500 mg",
                      modelValue: props2.row.dose,
                      "onUpdate:modelValue": ($event) => props2.row.dose = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.dose`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.dose`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 2 Veces al dia",
                      modelValue: props2.row.frequency,
                      "onUpdate:modelValue": ($event) => props2.row.frequency = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.frequency`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.frequency`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 1 Semana",
                      modelValue: props2.row.duration,
                      "onUpdate:modelValue": ($event) => props2.row.duration = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.duration`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.duration`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      type: "textarea",
                      outlined: "",
                      modelValue: props2.row.observations,
                      "onUpdate:modelValue": ($event) => props2.row.observations = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        icon: "delete",
                        onClick: ($event) => deleteMedication(props2.row)
                      }, null, 8, ["onClick"]),
                      __props.candidateId ? (openBlock(), createBlock(QBtn, {
                        key: 0,
                        flat: "",
                        round: "",
                        icon: "save",
                        onClick: ($event) => saveMedication(props2.row)
                      }, null, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: logsDialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => logsDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "460px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[2] || (_cache[2] = [
                    createBaseVNode("div", { class: "page-subtitle" }, "Historial de Medicacion", -1)
                  ])),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  candidateId: props.candidateId
                }, null, 8, ["candidateId"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(QBtn, {
            outline: "",
            color: "primary",
            onClick: _cache[1] || (_cache[1] = ($event) => logsDialog.value = true),
            label: "Ver historial",
            class: "q-mr-md"
          }),
          createVNode(QBtn, {
            disable: props.readonly,
            color: "primary",
            icon: "add",
            onClick: addMedication
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode(" Agregar Medicamento ")
            ])),
            _: 1
          }, 8, ["disable"])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _,
  scrollToFirstError as s
};
