import { W as mergeModels, r as ref, U as useModel, K as onMounted, V as api, q as createBlock, s as openBlock, t as withCtx, v as createVNode, X as QCardSection, N as createBaseVNode, D as toDisplayString, G as QBtn, B as createElementBlock, y as createCommentVNode, Y as QInput, F as Fragment, a2 as QCheckbox, a1 as QCard, a3 as QDialog } from "./index-D0yVl0M9.js";
import { Q as QTd } from "./QTd-4-vy3fSa.js";
import { Q as QTable } from "./QTable-CcLov7La.js";
import { m as money } from "./filters-D1Zn_vC9.js";
import { Q as QMarkupTable } from "./QMarkupTable-CCVnFDiZ.js";
import { Q as QForm } from "./QForm-CmO2K6b4.js";
import { n as notify } from "./notify-Bax-TIrS.js";
import { _ as _sfc_main$2 } from "./EnlacDate-CE4aO3FD.js";
import "./QVirtualScroll-BGm9rVdS.js";
import "./QList-Cj1k6RAS.js";
import "./QSelect-CwJvHACA.js";
import "./QChip-Cy60p0iO.js";
import "./QItem-C8aOaOe3.js";
import "./QMenu-CIo5_UHo.js";
import "./position-engine-vWW3KZVo.js";
import "./selection-C4on8VW7.js";
import "./format-CnAOSoyw.js";
import "./use-fullscreen-B_ddPXjN.js";
import "./QDate-D9Z62Ed-.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-D0gG5zpB.js";
import "./date-DeJtwreW.js";
import "./QPopupProxy-3ZFlhPgj.js";
import "./ClosePopup-49zmzn8a.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1$1 = { class: "page-subtitle" };
const _hoisted_2 = { style: { "position": "relative" } };
const _hoisted_3 = { class: "flex justify-end" };
const _sfc_main$1 = {
  __name: "ProgramForm",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["updated", "created", "close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const loading = ref(false);
    const model = useModel(__props, "modelValue");
    const errors = ref({});
    const updatePrice = ref(false);
    const priceUpdate = ref({
      program_id: model.value.id,
      price: 0,
      valid_since: null
    });
    onMounted(async () => {
      if (model.value.id == null) {
        return;
      }
      await fetchPriceUpdate();
    });
    async function saveProgram() {
      try {
        loading.value = true;
        errors.value = {};
        let route = model.value.id ? `/programs/${model.value.id}` : "/programs";
        let data = model.value.id ? { ...model.value, _method: "PUT" } : { ...model.value };
        const programResponse = await api.post(route, data);
        let updatedProgramData = { ...programResponse.data.data };
        if (!model.value.id) {
          emits("created", updatedProgramData);
          return;
        }
        if (updatePrice.value) {
          let priceRoute = priceUpdate.value.id ? `program_prices/${priceUpdate.value.id}` : "program_prices";
          let priceData = priceUpdate.value.id ? { ...priceUpdate.value, _method: "PUT" } : { ...priceUpdate.value };
          let isValid = priceUpdate.value.price && priceUpdate.value.valid_since;
          if (!isValid) {
            notify.negative("Precio y fecha de validez son obligatorios");
            return;
          }
          const priceResponse = (await api.post(priceRoute, priceData)).data.data;
          updatedProgramData.next_price = priceResponse.price;
          updatedProgramData.next_price_date = priceResponse.valid_since;
        }
        emits("updated", updatedProgramData);
        notify.positive("Guardado con éxito");
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 422) {
          errors.value = error.response.data.errors;
        }
        notify.negative("No se pudo actualizar");
      } finally {
        loading.value = false;
      }
    }
    async function fetchPriceUpdate() {
      loading.value = true;
      let response = (await api.get(`program_prices/?program_id=${model.value.id}&pending=1`)).data.data;
      priceUpdate.value = response ? response : priceUpdate.value;
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "480px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, { class: "flex items-center q-pb-none" }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, toDisplayString(`${model.value.id ? "Actualizar" : "Nuevo"}`) + " programa", 1),
              createVNode(QBtn, {
                flat: "",
                round: "",
                icon: "sym_o_close",
                onClick: _cache[0] || (_cache[0] = ($event) => emits("close")),
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
                              modelValue: model.value.name,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.name = $event),
                              "hide-bottom-space": "",
                              error: !!errors.value["name"],
                              "error-message": errors.value["name"]
                            }, null, 8, ["modelValue", "error", "error-message"])
                          ])
                        ]),
                        createBaseVNode("tr", null, [
                          _cache[8] || (_cache[8] = createBaseVNode("td", null, "Precio", -1)),
                          createBaseVNode("td", null, [
                            createBaseVNode("div", _hoisted_2, [
                              createVNode(QInput, {
                                outlined: "",
                                modelValue: model.value.price,
                                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.price = $event),
                                "hide-bottom-space": "",
                                error: !!errors.value["price"],
                                "error-message": errors.value["price"],
                                type: "number",
                                prefix: "$",
                                disable: !!model.value.id
                              }, null, 8, ["modelValue", "error", "error-message", "disable"]),
                              model.value.id ? (openBlock(), createBlock(QBtn, {
                                key: 0,
                                icon: "sym_o_edit",
                                flat: "",
                                round: "",
                                dense: "",
                                onClick: _cache[3] || (_cache[3] = ($event) => updatePrice.value = !updatePrice.value),
                                style: { "position": "absolute", "right": "2px", "top": "2px" }
                              })) : createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        updatePrice.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createBaseVNode("tr", null, [
                            _cache[9] || (_cache[9] = createBaseVNode("td", null, "Nuevo precio", -1)),
                            createBaseVNode("td", null, [
                              createVNode(QInput, {
                                outlined: "",
                                modelValue: priceUpdate.value.price,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => priceUpdate.value.price = $event),
                                "hide-bottom-space": "",
                                error: !!errors.value["new_price"],
                                "error-message": errors.value["new_price"],
                                type: "number",
                                prefix: "$"
                              }, null, 8, ["modelValue", "error", "error-message"])
                            ])
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[10] || (_cache[10] = createBaseVNode("td", null, "A partir del", -1)),
                            createBaseVNode("td", null, [
                              createVNode(_sfc_main$2, {
                                outlined: "",
                                modelValue: priceUpdate.value.valid_since,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => priceUpdate.value.valid_since = $event),
                                "hide-bottom-space": "",
                                "limit-to-past": false,
                                error: !!errors.value["valid_since"],
                                "error-message": errors.value["valid_since"]
                              }, null, 8, ["modelValue", "error", "error-message"])
                            ])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        createBaseVNode("tr", null, [
                          _cache[11] || (_cache[11] = createBaseVNode("td", null, "Activo", -1)),
                          createBaseVNode("td", null, [
                            createVNode(QCheckbox, {
                              modelValue: model.value.is_active,
                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.is_active = $event),
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
                      label: `${model.value.id ? "Actualizar" : "Agregar"} programa`,
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
      });
    };
  }
};
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _sfc_main = {
  __name: "ProgramsPage",
  setup(__props) {
    const row = ref({ name: "", price: 0, is_active: 1 });
    const rows = ref([]);
    const formatDate = (dateStr) => {
      if (!dateStr) return "N/A";
      const cleanDate = String(dateStr).split("T")[0];
      const parts = cleanDate.split("-");
      if (parts.length < 3) return dateStr;
      const [year, month, day] = parts;
      return `${day}/${month}/${year}`;
    };
    const columns = ref([
      { align: "left", name: "order", label: "#", field: "order" },
      { align: "left", name: "name", label: "Nombre del programa", field: "name" },
      { align: "left", name: "price", label: "Precio Vigente", field: (row2) => money(row2.price) },
      {
        align: "left",
        name: "valid_since",
        label: "Vigente desde",
        field: (row2) => formatDate(row2.valid_since)
      },
      {
        align: "left",
        name: "next_price",
        label: "Próximo cambio",
        field: (row2) => {
          if (!row2.next_price || !row2.next_price_date) return "Sin cambios pendientes";
          return `${money(row2.next_price)} (${formatDate(row2.next_price_date)})`;
        }
      },
      {
        align: "right",
        name: "status",
        label: "Estatus",
        field: (row2) => row2.is_active ? "Activo" : "Inactivo"
      },
      { align: "right", name: "actions", label: "Acciones" }
    ]);
    function onCreated(program) {
      rows.value.unshift(program);
      dialog.value = false;
    }
    function onUpdated(updatedData) {
      const programId = updatedData.program_id || updatedData.id;
      const index = rows.value.findIndex((p) => p.id === programId);
      if (index !== -1) {
        rows.value[index] = {
          ...rows.value[index],
          price: updatedData.price ?? rows.value[index].price,
          valid_since: updatedData.valid_since ?? rows.value[index].valid_since,
          next_price: updatedData.next_price ?? rows.value[index].next_price,
          next_price_date: updatedData.next_price_date ?? rows.value[index].next_price_date
        };
      }
      dialog.value = false;
    }
    const dialog = ref(false);
    function editProgram(newRow) {
      const data = { ...newRow };
      if (data.valid_since) {
        data.valid_since = data.valid_since.split("T")[0];
      }
      data.is_active = data.is_active ? 1 : 0;
      row.value = data;
      dialog.value = true;
    }
    function addProgram() {
      row.value = {
        id: null,
        name: "",
        price: 0,
        is_active: 1
      };
      dialog.value = true;
    }
    onMounted(async () => {
      rows.value = (await api.get(`/admin/programs`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Programas", -1)),
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
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              modelValue: row.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => row.value = $event),
              onUpdated,
              onCreated,
              onClose: _cache[1] || (_cache[1] = ($event) => dialog.value = false)
            }, null, 8, ["modelValue"])
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
