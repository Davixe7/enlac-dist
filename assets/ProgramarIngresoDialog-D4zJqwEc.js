import { y as getCurrentInstance, r as ref, o as onMounted, q as createBlock, a as openBlock, w as withCtx, d as createVNode, m as QCard, n as QCardSection, b as createBaseVNode, Q as QInput, bX as QCardActions, h as QBtn, g as unref, s as QDialog, l as api } from "./index-vLy8_pvK.js";
import { Q as QSelect } from "./QSelect-VW--WBjF.js";
const trueFn = () => true;
function getEmitsObject(emitsArray) {
  const emitsObject = {};
  emitsArray.forEach((val) => {
    emitsObject[val] = trueFn;
  });
  return emitsObject;
}
function useDialogPluginComponent() {
  const { emit, proxy } = getCurrentInstance();
  const dialogRef = ref(null);
  function show() {
    dialogRef.value.show();
  }
  function hide() {
    dialogRef.value.hide();
  }
  function onDialogOK(payload) {
    emit("ok", payload);
    hide();
  }
  function onDialogHide() {
    emit("hide");
  }
  Object.assign(proxy, { show, hide });
  return {
    dialogRef,
    onDialogHide,
    onDialogOK,
    onDialogCancel: hide
  };
}
const emits = ["ok", "hide"];
useDialogPluginComponent.emits = emits;
useDialogPluginComponent.emitsObject = getEmitsObject(emits);
const _sfc_main = {
  __name: "ProgramarIngresoDialog",
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  emits: [...useDialogPluginComponent.emits],
  setup(__props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent();
    const props = __props;
    const loading = ref(false);
    const form = ref({
      id: props.entry.id,
      name: props.entry.name,
      programId: props.entry.programId,
      entryDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      observations: ""
    });
    const programOptions = ref([]);
    async function fetchPrograms() {
      try {
        const { data } = await api.get("/programs");
        const programs = Array.isArray(data.data) ? data.data : data;
        programOptions.value = programs.map((p) => ({
          label: p.name,
          value: Number(p.id)
        }));
      } catch (e) {
        console.error("Error cargando programas", e);
      }
    }
    onMounted(async () => {
      await fetchPrograms();
      if (form.value.programId) {
        const exists = programOptions.value.some((opt) => opt.value === form.value.programId);
        if (!exists) {
          console.log("Program does not exist");
          form.value.programId = null;
        }
      }
    });
    async function onSave() {
      try {
        loading.value = true;
        await api.post(`candidatestatuses/${form.value.id}`, {
          program_id: form.value.programId,
          entry_date: form.value.entryDate,
          status: "programado",
          _method: "PUT"
        });
        onDialogOK({
          id: form.value.id,
          programId: form.value.programId,
          entryDate: form.value.entryDate,
          observations: form.value.observations
        });
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    function onCancel() {
      onDialogCancel();
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        ref_key: "dialogRef",
        ref: dialogRef,
        onHide: unref(onDialogHide)
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "min-width": "450px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, { class: "q-pa-md" }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createBaseVNode("div", { class: "text-h6" }, "Programar ingreso", -1)
                ])),
                _: 1
              }),
              createVNode(QCardSection, { class: "q-pa-md q-gutter-md" }, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    outlined: "",
                    modelValue: form.value.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.name = $event),
                    label: "Nombre",
                    readonly: ""
                  }, null, 8, ["modelValue"]),
                  createVNode(QSelect, {
                    outlined: "",
                    modelValue: form.value.programId,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.programId = $event),
                    options: programOptions.value,
                    label: "Programa",
                    "emit-value": "",
                    "map-options": ""
                  }, null, 8, ["modelValue", "options"]),
                  createVNode(QInput, {
                    outlined: "",
                    modelValue: form.value.entryDate,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.entryDate = $event),
                    type: "date",
                    label: "Fecha de ingreso"
                  }, null, 8, ["modelValue"]),
                  createVNode(QInput, {
                    outlined: "",
                    modelValue: form.value.observations,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.observations = $event),
                    type: "textarea",
                    label: "Observaciones"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(QCardActions, {
                align: "right",
                class: "q-pa-md"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    label: "Cancelar",
                    color: "primary",
                    onClick: onCancel
                  }),
                  createVNode(QBtn, {
                    unelevated: "",
                    label: "Guardar",
                    color: "primary",
                    onClick: onSave
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["onHide"]);
    };
  }
};
export {
  _sfc_main as _
};
