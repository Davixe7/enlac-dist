import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx, W as Fragment, b as createBaseVNode, Q as QBtn, g as createTextVNode, e as withModifiers, U as toDisplayString } from "./index-VJVtHb4i.js";
import { Q as QTd } from "./QTd-wL_YKhjV.js";
import { Q as QTable } from "./QTable-BgjmYekS.js";
import { Q as QPage } from "./QPage-CQxXHsnb.js";
import { Q as QCard, a as QCardSection } from "./QCard-IbRGW94K.js";
import { Q as QInput } from "./QInput-C8-EAPmV.js";
import { Q as QForm } from "./QForm-B1Ir1lx0.js";
import { h as QDialog } from "./QSelect-Dw9jouLP.js";
import { n as notify } from "./notify-DX5pIhuI.js";
import { api } from "./axios-BgrPseWt.js";
import "./QSeparator-B44-Ogzk.js";
import "./use-dark-DYVVyhjM.js";
import "./QList-BEwuppmH.js";
import "./QCheckbox-D1Zqx8H0.js";
import "./use-key-composition-DoKllCYK.js";
import "./use-fullscreen-BaWGg6j_.js";
import "./QItemLabel-JKpEpf5_.js";
import "./selection-BPWdDBn3.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "q-page-titlte" };
const _sfc_main = {
  __name: "RolesPage",
  setup(__props) {
    const role = ref({ name: "", id: null });
    const loading = ref(false);
    const dialog = ref(false);
    const rows = ref([]);
    const columns = ref([
      {
        field: "name",
        label: "Nombre del puesto",
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
    async function save() {
      loading.value = true;
      let route = role.value.id ? `roles/${role.value.id}` : "roles";
      let data = role.value.id ? { name: role.value.name, _method: "PUT" } : { name: role.value.name };
      let actionLabel = role.value.id ? "actualizado" : "creado";
      try {
        let newRole = (await api.post(route, data)).data.data;
        console.log(newRole);
        role.value.id ? rows.value.splice(rows.value.indexOf(role.value), 1, newRole) : rows.value.push(newRole);
        dialog.value = false;
        notify.positive(`Puesto ${actionLabel} exitosamente`);
      } catch (error) {
        console.log(error);
        notify.negative(`No se pudo guardar`);
      }
      loading.value = false;
    }
    onMounted(async () => {
      rows.value = (await api.get("roles")).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QPage, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title q-mb-0" }, " Puestos ", -1)),
              createVNode(QBtn, {
                onClick: _cache[0] || (_cache[0] = () => {
                  role.value = { name: "" };
                  dialog.value = true;
                }),
                color: "primary",
                icon: "add",
                class: "q-ml-auto"
              }, {
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("Agregar Puesto")
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
                        role.value = props.row;
                        dialog.value = true;
                      },
                      icon: "edit",
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
                        createBaseVNode("div", _hoisted_2, toDisplayString(role.value.id ? "Actualizar" : "Agregar") + " puesto ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Nombre del puesto",
                          modelValue: role.value.name,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => role.value.name = $event)
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
