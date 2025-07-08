import { r as ref, o as onMounted, c as createElementBlock, d as createVNode, w as withCtx, F as Fragment, a as openBlock, b as createBaseVNode, Q as QBtn, g as createTextVNode, e as withModifiers, t as toDisplayString } from "./index-D6w-cXuQ.js";
import { Q as QTd } from "./QTd-DKJWU2A4.js";
import { Q as QTable } from "./QTable-Bp4bRbRZ.js";
import { Q as QPage } from "./QPage-QnDthPP1.js";
import { Q as QCard, a as QCardSection } from "./QCard-iKpX3XMK.js";
import { Q as QInput } from "./QInput-wxw_kogA.js";
import { Q as QCheckbox } from "./QCheckbox-BMnj2b1-.js";
import { Q as QForm } from "./QForm-BDWuRyxm.js";
import { Q as QDialog } from "./QDialog-Bi4NORAY.js";
import { n as notify } from "./notify-BZ2TjmhX.js";
import { api } from "./axios-DOaUvPJw.js";
import "./QSeparator-DY803WMm.js";
import "./use-dark-3OGnIsE7.js";
import "./QList-D_uMUYMB.js";
import "./QMarkupTable-Bmy7cnK1.js";
import "./QSelect-CDZ-81F1.js";
import "./use-key-composition-BP8jtq2e.js";
import "./QItemLabel-BELvJCJR.js";
import "./selection-GX1L8RjI.js";
import "./use-timeout-tcy2aUTk.js";
import "./use-fullscreen-D4QZmw0H.js";
import "./option-sizes-B3TZgULG.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "q-page-titlte" };
const _sfc_main = {
  __name: "WorkAreasPage",
  setup(__props) {
    const workArea = ref({ name: "", allows_appointments: 0, id: null });
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
      let data = workArea.value.id ? { ...workArea.value, _method: "PUT" } : { ...workArea.value };
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
              _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title q-mb-0" }, "Áreas de Trabajo", -1)),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = () => {
                  workArea.value = { name: "", allows_appointments: 0, id: null };
                  dialog.value = true;
                }),
                color: "primary",
                icon: "add",
                class: "q-ml-auto"
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
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
                createVNode(QTd, { class: "q-table__actions" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: () => {
                        workArea.value = props.row;
                        dialog.value = true;
                      },
                      icon: "sym_o_edit",
                      dense: "",
                      flat: "",
                      round: ""
                    }, null, 8, ["onClick"]),
                    createVNode(QBtn, {
                      onClick: () => removeArea(props.rowIndex),
                      icon: "sym_o_delete",
                      dense: "",
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
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dialog.value = $event)
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
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => workArea.value.name = $event),
                          class: "q-mb-sm"
                        }, null, 8, ["modelValue"]),
                        createVNode(QCheckbox, {
                          dense: "",
                          label: "Admite citas",
                          modelValue: workArea.value.allows_appointments,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => workArea.value.allows_appointments = $event),
                          "false-value": 0,
                          "true-value": 1,
                          val: "1"
                        }, null, 8, ["modelValue"]),
                        createVNode(QCardSection, { class: "flex justify-end q-px-none" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              type: "submit",
                              color: "primary",
                              loading: loading.value
                            }, {
                              default: withCtx(() => _cache[6] || (_cache[6] = [
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
