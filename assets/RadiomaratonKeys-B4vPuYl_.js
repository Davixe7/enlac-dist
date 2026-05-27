import { r as ref, x as onMounted, a4 as api, O as createElementBlock, Z as createBaseVNode, J as createVNode, I as withCtx, aa as QDialog, P as Fragment, H as openBlock, U as QBtn, a5 as QCard, a6 as QCardSection, K as withDirectives, S as toDisplayString, a9 as QInput, ae as QCheckbox } from "./index-73seMa9c.js";
import { Q as QTd } from "./QTd-CCVTlGjB.js";
import { Q as QTable } from "./QTable-Dp0TbDg4.js";
import { Q as QMarkupTable } from "./QMarkupTable-sgUXJ8ii.js";
import { Q as QForm } from "./QForm-CdVxlQot.js";
import { C as ClosePopup } from "./ClosePopup-CmjI8Typ.js";
import { n as notify } from "./notify-CI1eDtFr.js";
import "./QVirtualScroll-Dtr5Im6o.js";
import "./QList-COXbN_4Y.js";
import "./QSelect-D7YhNIyE.js";
import "./QItem-BL3QQOOm.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CpLfyNqN.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "page-subtitle" };
const _hoisted_3 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "RadiomaratonKeys",
  setup(__props) {
    const loading = ref(false);
    const errors = ref({});
    const row = ref(null);
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "code", label: "Clave", field: "code" },
      { align: "left", name: "classification", label: "Categoría", field: "classification" },
      { align: "left", name: "concept", label: "Concepto", field: "concept" },
      {
        align: "right",
        name: "status",
        label: "Estatus",
        field: (row2) => row2.is_active ? "Activo" : "Inactivo"
      },
      { align: "right", name: "actions", label: "Acciones" }
    ]);
    const dialog = ref(false);
    function editKey(newRow) {
      row.value = { ...newRow, is_active: newRow.is_active ? 1 : 0 };
      errors.value = {};
      dialog.value = true;
    }
    function addKey() {
      row.value = {
        code: "",
        classification: "",
        concept: "",
        is_active: 1
      };
      errors.value = {};
      dialog.value = true;
    }
    async function saveKey() {
      try {
        loading.value = true;
        errors.value = {};
        let route = row.value.id ? `/radiomarathon-keys/${row.value.id}` : "/radiomarathon-keys";
        let data = row.value.id ? { ...row.value, _method: "PUT" } : { ...row.value };
        const response = await api.post(route, data);
        const savedData = response.data.data || response.data;
        if (row.value.id) {
          const index = rows.value.findIndex((item) => item.id === row.value.id);
          if (index !== -1) rows.value[index] = savedData;
        } else {
          rows.value.unshift(savedData);
        }
        rows.value.sort(
          (a, b) => a.code.localeCompare(b.code, void 0, { numeric: true, sensitivity: "base" })
        );
        notify.positive("Guardado con éxito");
        dialog.value = false;
      } catch (error) {
        console.log(error);
        if (error.response?.status === 422) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach((key) => {
            errors.value[key] = serverErrors[key][0];
          });
        } else {
          notify.negative("No se pudo actualizar");
        }
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      const response = await api.get("/radiomarathon-keys");
      rows.value = response.data.data || response.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Catálogo de Claves Radiomaratón", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            icon: "sym_o_add",
            onClick: addKey,
            color: "primary",
            label: "Agregar clave"
          })
        ]),
        createVNode(QTable, {
          columns: columns.value,
          rows: rows.value,
          pagination: { rowsPerPage: 0 }
        }, {
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "flex justify-end" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  icon: "sym_o_edit",
                  round: "",
                  flat: "",
                  onClick: ($event) => editKey(props.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "480px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "flex items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, toDisplayString(`${row.value.id ? "Actualizar" : "Nueva"}`) + " clave", 1),
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "sym_o_close",
                      onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false),
                      class: "q-ml-auto"
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QForm, { class: "q-gutter-y-md" }, {
                      default: withCtx(() => [
                        createVNode(QMarkupTable, {
                          flat: "",
                          class: "key-form"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("tbody", null, [
                              createBaseVNode("tr", null, [
                                _cache[7] || (_cache[7] = createBaseVNode("td", null, "Código / Clave", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    modelValue: row.value.code,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => row.value.code = $event),
                                    placeholder: "Ej: 1.1",
                                    "hide-bottom-space": "",
                                    error: !!errors.value["code"],
                                    "error-message": errors.value["code"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[8] || (_cache[8] = createBaseVNode("td", null, "Clasificación / Categoría", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    modelValue: row.value.classification,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => row.value.classification = $event),
                                    placeholder: "Ej: Día Evento",
                                    "hide-bottom-space": "",
                                    error: !!errors.value["classification"],
                                    "error-message": errors.value["classification"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[9] || (_cache[9] = createBaseVNode("td", null, "Concepto", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    modelValue: row.value.concept,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => row.value.concept = $event),
                                    type: "textarea",
                                    rows: "2",
                                    placeholder: "Descripción del concepto",
                                    "hide-bottom-space": "",
                                    error: !!errors.value["concept"],
                                    "error-message": errors.value["concept"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[10] || (_cache[10] = createBaseVNode("td", null, "Activo", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QCheckbox, {
                                    modelValue: row.value.is_active,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => row.value.is_active = $event),
                                    "true-value": 1,
                                    "false-value": 0
                                  }, null, 8, ["modelValue"])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createBaseVNode("div", _hoisted_3, [
                          createVNode(QBtn, {
                            loading: loading.value,
                            onClick: saveKey,
                            label: `${row.value.id ? "Actualizar" : "Agregar"} clave`,
                            color: "primary"
                          }, null, 8, ["loading", "label"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
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
