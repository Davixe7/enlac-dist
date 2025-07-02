import { r as ref, o as onMounted, c as createElementBlock, d as createVNode, w as withCtx, F as Fragment, a as openBlock, b as createBaseVNode, Q as QBtn, g as createTextVNode, e as withModifiers, t as toDisplayString } from "./index-BKlFzi9U.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { Q as QPage } from "./QPage-ByUg_F05.js";
import { Q as QCard, a as QCardSection } from "./QCard-ChwXMyjm.js";
import { Q as QInput } from "./QInput-Cl4GFezJ.js";
import { Q as QForm } from "./QForm-P-BH0S5t.js";
import { Q as QDialog } from "./QDialog-dSz5pi_j.js";
import { n as notify } from "./notify-DpPex7WU.js";
import { api } from "./axios-DnBXXbR5.js";
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
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "q-page-titlte" };
const _sfc_main = {
  __name: "WorkAreasPage",
  setup(__props) {
    const workArea = ref({ name: "", id: null });
    const loading = ref(false);
    const dialog = ref(false);
    const rows = ref([]);
    const columns = ref([
      {
        field: "name",
        label: "Nombre del Área",
        sortable: true,
        align: "left"
      },
      {
        name: "actions",
        label: "Acciones",
        sortable: false,
        align: "right"
      }
    ]);
    async function removeArea(areaIndex) {
      if (!window.confirm("Seguro que desea eliminar el area?")) return;
      try {
        let id = rows.value[areaIndex].id;
        await api.post(`work_areas/${id}`, { _method: "DELETE" });
        rows.value.splice(areaIndex, 1);
        notify.positive(`Área de trabajo eliminada exitosamente`);
      } catch (e) {
        notify.negative(`No se pudo eliminar`);
        console.log(e);
      }
    }
    async function save() {
      loading.value = true;
      let route = workArea.value.id ? `work_areas/${workArea.value.id}` : "work_areas";
      let data = workArea.value.id ? { name: workArea.value.name, _method: "PUT" } : { name: workArea.value.name };
      let actionLabel = workArea.value.id ? "actualizada" : "creada";
      try {
        let newWorkArea = (await api.post(route, data)).data.data;
        workArea.value.id ? rows.value.splice(rows.value.indexOf(workArea.value), 1, newWorkArea) : rows.value.push(newWorkArea);
        dialog.value = false;
        notify.positive(`Área de trabajo ${actionLabel} exitosamente`);
      } catch (error) {
        console.log(error);
        notify.negative(`No se pudo guardar`);
      }
      loading.value = false;
    }
    onMounted(async () => {
      rows.value = (await api.get("work_areas")).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QPage, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title q-mb-0" }, " Áreas de Trabajo ", -1)),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = () => {
                  workArea.value = { name: "" };
                  dialog.value = true;
                }),
                color: "primary",
                icon: "add",
                class: "q-ml-auto"
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Agregar área de trabajo")
                ])),
                _: 1
              })
            ]),
            createVNode(QTable, {
              flat: "",
              bordered: "",
              rows: rows.value,
              columns: columns.value,
              pagination: { rowsPerPage: 0 },
              "hide-bottom": ""
            }, {
              "body-cell-actions": withCtx((props) => [
                createVNode(QTd, { class: "justify-end text-right" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: () => {
                        workArea.value = props.row;
                        dialog.value = true;
                      },
                      icon: "edit",
                      flat: "",
                      round: ""
                    }, null, 8, ["onClick"]),
                    createVNode(QBtn, {
                      onClick: () => removeArea(props.rowIndex),
                      icon: "delete",
                      flat: "",
                      round: ""
                    }, null, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 1
            }, 8, ["rows", "columns"])
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "420px" } }, {
              default: withCtx(() => [
                createVNode(QForm, {
                  onSubmit: withModifiers(save, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_2, toDisplayString(workArea.value.id ? "Actualizar" : "Agregar") + " Área de trabajo ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Nombre del área de trabajo",
                          modelValue: workArea.value.name,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => workArea.value.name = $event)
                        }, null, 8, ["modelValue"]),
                        createVNode(QCardSection, { class: "flex justify-end q-px-none" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              type: "submit",
                              color: "primary",
                              loading: loading.value
                            }, {
                              default: withCtx(() => _cache[5] || (_cache[5] = [
                                createTextVNode("Guardar")
                              ])),
                              _: 1
                            }, 8, ["loading"])
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
