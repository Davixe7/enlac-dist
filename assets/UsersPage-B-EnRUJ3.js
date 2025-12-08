import { r as ref, o as onMounted, l as api, c as createElementBlock, d as createVNode, w as withCtx, s as QDialog, H as Fragment, a as openBlock, b as createBaseVNode, Q as QInput, k as QIcon, h as QBtn, j as createTextVNode, aE as QSpinner, m as QCard, e as withModifiers, n as QCardSection, t as toDisplayString, L as QRadio } from "./index-Ca5-ciyA.js";
import { Q as QTd } from "./QTd-ByJo4ffg.js";
import { Q as QTable } from "./QTable-C0Jh40jm.js";
import { Q as QPage } from "./QPage-BxyvOzV3.js";
import { Q as QSelect } from "./QSelect-PRgMmb3S.js";
import { Q as QForm } from "./QForm-EUjnsDRR.js";
import { n as notify } from "./notify-dGu9DWRJ.js";
import "./QVirtualScroll-BWW-5zOR.js";
import "./QList-CMmeXu_V.js";
import "./QMarkupTable-BimuUJQd.js";
import "./use-fullscreen-s0KkdCH7.js";
import "./QItem-C9mpBGOT.js";
import "./selection-C_rEmdl2.js";
const _hoisted_1 = { class: "flex items-center q-mb-lg" };
const _hoisted_2 = { class: "flex q-my-lg justify-center" };
const _hoisted_3 = { class: "q-page-titlte" };
const _hoisted_4 = { class: "flex justify-between items-center" };
const _hoisted_5 = { class: "flex justify-between items-center" };
const _hoisted_6 = { class: "flex justify-between items-center" };
const _sfc_main = {
  __name: "UsersPage",
  setup(__props) {
    const search = ref("");
    const errors = ref({});
    const loading = ref(false);
    const dialog = ref(false);
    const workAreas = ref([]);
    const roles = ref([]);
    const users = ref([]);
    const user = ref({});
    const rows = ref([]);
    const columns = ref([
      {
        field: "full_name",
        label: "Nombre",
        sortable: true,
        align: "left"
      },
      {
        field: "email",
        label: "Email",
        sortable: true,
        align: "left"
      },
      {
        field: (row) => row.work_area.name,
        label: "Area",
        sortable: true,
        align: "left"
      },
      {
        field: (row) => row.role ? row.role.name : "",
        label: "Puesto",
        sortable: true,
        align: "left"
      },
      {
        field: (row) => row.leader ? row.leader.name : "Ninguno",
        label: "Lider",
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
      errors.value = {};
      let route = user.value.id ? `users/${user.value.id}` : "users";
      let data = user.value.id ? { ...user.value, _method: "PUT" } : { ...user.value };
      let actionLabel = user.value.id ? "actualizado" : "creado";
      try {
        let newUser = (await api.post(route, data)).data.data;
        user.value.id ? rows.value.splice(rows.value.indexOf(user.value), 1, newUser) : rows.value.push(newUser);
        dialog.value = false;
        notify.positive(`Usuario ${actionLabel} exitosamente`);
      } catch (error) {
        errors.value = error.status == 422 && error.formatted ? error.formatted : {};
        notify.negative(`No se pudo guardar`);
      }
      loading.value = false;
    }
    function createUser() {
      user.value = { name: "" };
      dialog.value = true;
    }
    onMounted(async () => {
      workAreas.value = (await api.get("work_areas")).data.data;
      roles.value = (await api.get("roles")).data.data;
      users.value = (await api.get("users")).data.data;
      rows.value = (await api.get("users")).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QPage, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              _cache[20] || (_cache[20] = createBaseVNode("h1", {
                class: "page-title",
                style: { "margin": "0" }
              }, " Usuarios ", -1)),
              createVNode(QInput, {
                class: "q-ml-auto q-mr-md",
                outlined: "",
                type: "search",
                clearable: "",
                modelValue: search.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => search.value = $event)
              }, {
                prepend: withCtx(() => [
                  createVNode(QIcon, { name: "search" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              createVNode(QBtn, {
                onClick: createUser,
                color: "primary",
                icon: "add",
                label: "Agregar usuario"
              })
            ]),
            createVNode(QTable, {
              flat: "",
              bordered: "",
              rows: rows.value,
              columns: columns.value,
              pagination: { rowsPerPage: 0 },
              filter: search.value,
              "hide-bottom": ""
            }, {
              loading: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createBaseVNode("div", null, [
                    createVNode(QSpinner, {
                      size: "30px",
                      color: "primary",
                      class: "q-mr-md"
                    }),
                    _cache[21] || (_cache[21] = createTextVNode(" Cargando... "))
                  ])
                ])
              ]),
              "body-cell-actions": withCtx((props) => [
                createVNode(QTd, { class: "justify-end text-right" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      onClick: () => {
                        user.value = props.row;
                        dialog.value = true;
                        errors.value = {};
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
            }, 8, ["rows", "columns", "filter"])
          ]),
          _: 1
        }),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "520px" } }, {
              default: withCtx(() => [
                createVNode(QForm, {
                  onSubmit: withModifiers(save, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3, toDisplayString(user.value.id ? "Actualizar" : "Agregar") + " usuario ", 1)
                      ]),
                      _: 1
                    }),
                    createVNode(QCardSection, { class: "q-gutter-y-lg" }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Número de Empleado",
                          modelValue: user.value.employee_number,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => user.value.employee_number = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.employee_number,
                          "error-message": errors.value.employee_number
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Nombre",
                          modelValue: user.value.name,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => user.value.name = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.name,
                          "error-message": errors.value.name
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Apellido Paterno",
                          modelValue: user.value.last_name,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => user.value.last_name = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.last_name,
                          "error-message": errors.value.last_name
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Apellido Materno",
                          modelValue: user.value.second_last_name,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => user.value.second_last_name = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.second_last_name,
                          "error-message": errors.value.second_last_name
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          type: "tel",
                          label: "Teléfono",
                          modelValue: user.value.phone,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => user.value.phone = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.phone,
                          "error-message": errors.value.phone,
                          mask: "##########"
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QSelect, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Área",
                          modelValue: user.value.work_area_id,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => user.value.work_area_id = $event),
                          options: workAreas.value,
                          "option-value": "id",
                          "option-label": "name",
                          "map-options": "",
                          "emit-value": "",
                          "hide-bottom-space": "",
                          error: !!errors.value.work_area_id,
                          "error-message": errors.value.work_area_id
                        }, null, 8, ["modelValue", "options", "error", "error-message"]),
                        createVNode(QSelect, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Puesto",
                          modelValue: user.value.role_id,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => user.value.role_id = $event),
                          options: roles.value,
                          "option-value": "id",
                          "option-label": "label",
                          "map-options": "",
                          "emit-value": "",
                          "hide-bottom-space": "",
                          error: !!errors.value.role_id,
                          "error-message": errors.value.role_id
                        }, null, 8, ["modelValue", "options", "error", "error-message"]),
                        createVNode(QSelect, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          label: "Líder",
                          modelValue: user.value.leader_id,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => user.value.leader_id = $event),
                          options: users.value,
                          "option-value": "id",
                          "option-label": "name",
                          "map-options": "",
                          "emit-value": "",
                          "hide-bottom-space": "",
                          error: !!errors.value.leader_id,
                          "error-message": errors.value.leader_id
                        }, null, 8, ["modelValue", "options", "error", "error-message"]),
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          type: "date",
                          label: "Fecha de ingreso",
                          modelValue: user.value.entry_date,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => user.value.entry_date = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.entry_date,
                          "error-message": errors.value.entry_date
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          required: "",
                          outlined: "",
                          "stack-label": "",
                          type: "email",
                          label: "Email",
                          modelValue: user.value.email,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => user.value.email = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.email,
                          "error-message": errors.value.email
                        }, {
                          append: withCtx(() => [
                            createVNode(QBtn, {
                              flat: "",
                              dense: "",
                              round: "",
                              icon: "sym_o_alternate_email",
                              onClick: _cache[10] || (_cache[10] = () => user.value.email = user.value.email + "@")
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          type: "password",
                          label: "Contraseña",
                          modelValue: user.value.password,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => user.value.password = $event),
                          "hide-bottom-space": "",
                          error: !!errors.value.password,
                          "error-message": errors.value.password,
                          autocomplete: "new-password"
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createBaseVNode("div", _hoisted_4, [
                          _cache[22] || (_cache[22] = createBaseVNode("label", { for: "#" }, "Estatus", -1)),
                          createBaseVNode("div", null, [
                            createVNode(QRadio, {
                              class: "q-mr-md",
                              modelValue: user.value.status,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => user.value.status = $event),
                              val: 1,
                              label: "Activo"
                            }, null, 8, ["modelValue"]),
                            createVNode(QRadio, {
                              modelValue: user.value.status,
                              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => user.value.status = $event),
                              val: 0,
                              label: "Inactivo"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          _cache[23] || (_cache[23] = createBaseVNode("label", { for: "#" }, "Es administrador", -1)),
                          createBaseVNode("div", null, [
                            createVNode(QRadio, {
                              class: "q-mr-md",
                              modelValue: user.value.is_admin,
                              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => user.value.is_admin = $event),
                              val: 1,
                              label: "Si"
                            }, null, 8, ["modelValue"]),
                            createVNode(QRadio, {
                              modelValue: user.value.is_admin,
                              "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => user.value.is_admin = $event),
                              val: 0,
                              label: "No"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_6, [
                          _cache[24] || (_cache[24] = createBaseVNode("label", { for: "#" }, "Es evaluador", -1)),
                          createBaseVNode("div", null, [
                            createVNode(QRadio, {
                              modelValue: user.value.is_evaluator,
                              "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => user.value.is_evaluator = $event),
                              class: "q-mr-md",
                              val: 1,
                              label: "Si"
                            }, null, 8, ["modelValue"]),
                            createVNode(QRadio, {
                              modelValue: user.value.is_evaluator,
                              "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => user.value.is_evaluator = $event),
                              val: 0,
                              label: "No"
                            }, null, 8, ["modelValue"])
                          ])
                        ]),
                        createVNode(QCardSection, { class: "flex justify-end q-px-none" }, {
                          default: withCtx(() => [
                            createVNode(QBtn, {
                              type: "submit",
                              color: "primary",
                              loading: loading.value
                            }, {
                              default: withCtx(() => _cache[25] || (_cache[25] = [
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
