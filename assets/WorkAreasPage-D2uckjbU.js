import { r as ref, o as onMounted, i as api, c as createElementBlock, d as createVNode, w as withCtx, F as Fragment, a as openBlock, b as createBaseVNode, Q as QBtn, h as createTextVNode, e as withModifiers, t as toDisplayString } from "./index-Bw7koZRs.js";
import { Q as QTd } from "./QTd-Bg3cDkgV.js";
import { Q as QTable } from "./QTable-DzPYxmCS.js";
import { Q as QPage } from "./QPage-DNvXFSup.js";
import { Q as QCard, a as QCardSection } from "./QCard-Uo2azhKQ.js";
import { Q as QInput } from "./QInput-DpLq7x8-.js";
import { Q as QCheckbox } from "./QCheckbox-C8n8UXWX.js";
import { Q as QForm } from "./QForm-BWe6Bvnx.js";
import { Q as QDialog } from "./QDialog-DifZ5hVn.js";
import { n as notify } from "./notify-DvT-hOLo.js";
import "./QSeparator-ByJwh8qk.js";
import "./use-dark-QoPeQzjR.js";
import "./QList-C0MQyPVs.js";
import "./QMarkupTable-CnTuEiS2.js";
import "./QSelect-BpBR3LGj.js";
import "./use-key-composition-CcNkFKJ3.js";
import "./QItemLabel-DAkXD4my.js";
import "./selection-CHZ-_4p5.js";
import "./use-timeout-CgolyZjO.js";
import "./use-fullscreen-K1Zw5JV1.js";
import "./option-sizes-B9ECE9ZJ.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "q-table__actions" };
const _hoisted_3 = { class: "q-page-titlte" };
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
    function setWorkArea(row) {
      workArea.value = row;
      dialog.value = true;
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
                onClick: _cache[0] || (_cache[0] = ($event) => setWorkArea({ name: "", allows_appointments: 0, id: null })),
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
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(QBtn, {
                        onClick: ($event) => setWorkArea(props.row),
                        icon: "sym_o_edit",
                        dense: "",
                        flat: "",
                        round: ""
                      }, null, 8, ["onClick"]),
                      createVNode(QBtn, {
                        onClick: ($event) => removeArea(props.rowIndex),
                        icon: "sym_o_delete",
                        dense: "",
                        flat: "",
                        round: ""
                      }, null, 8, ["onClick"])
                    ])
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
                        createBaseVNode("div", _hoisted_3, toDisplayString(workArea.value.id ? "Actualizar" : "Agregar") + " Área de trabajo ", 1)
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
