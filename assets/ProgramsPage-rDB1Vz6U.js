import { r as ref, x as onMounted, a4 as api, O as createElementBlock, Z as createBaseVNode, J as createVNode, I as withCtx, aa as QDialog, P as Fragment, H as openBlock, U as QBtn, a5 as QCard, a6 as QCardSection, S as toDisplayString, a9 as QInput, ae as QCheckbox } from "./index-73seMa9c.js";
import { Q as QTd } from "./QTd-CCVTlGjB.js";
import { Q as QTable } from "./QTable-Dp0TbDg4.js";
import { Q as QMarkupTable } from "./QMarkupTable-sgUXJ8ii.js";
import { Q as QForm } from "./QForm-CdVxlQot.js";
import { m as money } from "./filters-D1Zn_vC9.js";
import { _ as _sfc_main$1 } from "./EnlacDate-BT6skHmd.js";
import { n as notify } from "./notify-CI1eDtFr.js";
import "./QVirtualScroll-Dtr5Im6o.js";
import "./QList-COXbN_4Y.js";
import "./QSelect-D7YhNIyE.js";
import "./QItem-BL3QQOOm.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CpLfyNqN.js";
import "./QDate-DQ8LX-NX.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-Bv9PVHNT.js";
import "./date-CTzZl-qi.js";
import "./QPopupProxy-C9TkLIMm.js";
import "./ClosePopup-CmjI8Typ.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "page-subtitle" };
const _hoisted_3 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "ProgramsPage",
  setup(__props) {
    const loading = ref(false);
    const errors = ref({});
    const row = ref(null);
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "order", label: "#", field: "order" },
      { align: "left", name: "name", label: "Nombre del programa", field: "name" },
      { align: "left", name: "price", label: "Precio Vigente", field: (row2) => money(row2.price) },
      {
        align: "right",
        name: "status",
        label: "Estatus",
        field: (row2) => row2.is_active ? "Activo" : "Inactivo"
      },
      { align: "right", name: "actions", label: "Acciones" }
    ]);
    const dialog = ref(false);
    function editProgram(newRow) {
      row.value = newRow;
      dialog.value = true;
    }
    function addProgram() {
      row.value = {
        name: "",
        price: 0,
        is_active: 1
      };
      dialog.value = true;
    }
    async function saveProgram() {
      try {
        loading.value = true;
        let route = row.value.id ? `/programs/${row.value.id}` : "programs";
        let data = row.value.id ? { ...row.value, _method: "PUT" } : { ...row.value };
        await api.post(route, data);
        if (!row.value.id) {
          rows.value.unshift(row.value);
        }
        notify.positive("Guardado con éxito");
        dialog.value = false;
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo actualizar");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      rows.value = (await api.get(`/admin/programs`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Programas", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            icon: "sym_o_add",
            onClick: addProgram,
            color: "primary",
            label: "Agregar programa"
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
                  onClick: ($event) => editProgram(props.row)
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
                    createBaseVNode("div", _hoisted_2, toDisplayString(`${row.value.id ? "Actualizar" : "Nuevo"}`) + " programa", 1),
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "sym_o_close",
                      onClick: _cache[0] || (_cache[0] = ($event) => dialog.value = false),
                      class: "q-ml-auto"
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QForm, { class: "q-gutter-y-md" }, {
                      default: withCtx(() => [
                        createVNode(QMarkupTable, {
                          flat: "",
                          class: "program-form"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("tbody", null, [
                              createBaseVNode("tr", null, [
                                _cache[7] || (_cache[7] = createBaseVNode("td", null, "Nombre del programa", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    modelValue: row.value.name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => row.value.name = $event),
                                    "hide-bottom-space": "",
                                    error: !!errors.value["name"],
                                    "error-message": errors.value["name"]
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[8] || (_cache[8] = createBaseVNode("td", null, "Precio", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(QInput, {
                                    outlined: "",
                                    modelValue: row.value.price,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => row.value.price = $event),
                                    "hide-bottom-space": "",
                                    error: !!errors.value["price"],
                                    "error-message": errors.value["price"],
                                    type: "number",
                                    prefix: "$"
                                  }, null, 8, ["modelValue", "error", "error-message"])
                                ])
                              ]),
                              createBaseVNode("tr", null, [
                                _cache[9] || (_cache[9] = createBaseVNode("td", null, "A partir del", -1)),
                                createBaseVNode("td", null, [
                                  createVNode(_sfc_main$1, {
                                    outlined: "",
                                    modelValue: row.value.valid_since,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => row.value.valid_since = $event),
                                    "hide-bottom-space": "",
                                    error: !!errors.value["valid_since"],
                                    "error-message": errors.value["valid_since"]
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
                            onClick: saveProgram,
                            label: `${row.value.id ? "Actualizar" : "Agregar"} programa`,
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
