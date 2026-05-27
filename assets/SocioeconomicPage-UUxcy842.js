import { a7 as mergeModels, a8 as useModel, x as onMounted, r as ref, a4 as api, a as computed, w as watch, O as createElementBlock, H as openBlock, J as createVNode, Z as createBaseVNode, I as withCtx, U as QBtn, M as createTextVNode, S as toDisplayString, N as unref, a5 as QCard, a6 as QCardSection, a9 as QInput, ac as QCardActions, K as withDirectives, aa as QDialog, ah as QRadio, aH as vShow, G as createBlock, L as createCommentVNode, ae as QCheckbox, P as Fragment, R as renderList } from "./index-73seMa9c.js";
import { Q as QSelect, d as QField } from "./QSelect-D7YhNIyE.js";
import { Q as QMarkupTable } from "./QMarkupTable-sgUXJ8ii.js";
import { Q as QTd } from "./QTd-CCVTlGjB.js";
import { Q as QTr } from "./QTr-CZ4UZ8Hr.js";
import { Q as QTable } from "./QTable-Dp0TbDg4.js";
import { Q as QForm } from "./QForm-CdVxlQot.js";
import { C as ClosePopup } from "./ClosePopup-CmjI8Typ.js";
import { n as notify } from "./notify-CI1eDtFr.js";
import { m as money } from "./filters-D1Zn_vC9.js";
import "./QItem-BL3QQOOm.js";
import "./QMenu-D9n7yBBB.js";
import "./selection-Cvw69qQU.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-Dtr5Im6o.js";
import "./QList-COXbN_4Y.js";
import "./use-fullscreen-CpLfyNqN.js";
const _hoisted_1$1 = { class: "" };
const _hoisted_2$1 = { class: "flex justify-end" };
const _hoisted_3$1 = { class: "q-gutter-y-md" };
const _sfc_main$1 = {
  __name: "FamilyMembers",
  props: /* @__PURE__ */ mergeModels(["candidateId"], {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const model = useModel(__props, "modelValue");
    onMounted(() => {
      fetchRows();
    });
    const columns = [
      { name: "name", label: "Nombre completo", field: "name", align: "left" },
      { name: "age", label: "Edad", field: "age", align: "left" },
      { name: "relationship", label: "Parentesco", field: "relationship", align: "left" },
      { name: "marital_status", label: "Estado civil", field: "marital_status", align: "left" },
      { name: "scolarship", label: "Escolaridad", field: "scolarship", align: "left" },
      { name: "ocupation", label: "Ocupación", field: "ocupation", align: "left" },
      {
        name: "monthly_income",
        label: "Ingresos mensuales",
        field: "monthly_income",
        align: "left",
        format: (val) => money(val)
      },
      {
        name: "monthly_contribution",
        label: "Aportación mensual",
        field: "monthly_contribution",
        align: "left",
        format: (val) => money(val)
      },
      { name: "actions", label: "Acciones", align: "right" }
    ];
    const rows = ref([
      {
        name: "",
        age: 0,
        relationship: "",
        marital_status: "",
        scolarship: "",
        ocupation: "",
        monthly_income: 0,
        monthly_contribution: 0
      }
    ]);
    async function fetchRows() {
      try {
        loading.value = true;
        rows.value = (await api.get(`family_members/?candidate_id=${props.candidateId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const showDialog = ref(false);
    const formData = ref({
      name: "",
      age: "",
      relationship: "",
      marital_status: "",
      scolarship: "",
      ocupation: "",
      monthly_income: 0,
      monthly_contribution: 0,
      candidate_id: props.candidateId
    });
    const monthlyIncomeSum = computed(() => {
      return rows.value.reduce((sum, row) => Number(row.monthly_income) + sum, 0).toFixed(2);
    });
    const monthlyContributionSum = computed(() => {
      return rows.value.reduce((sum, row) => Number(row.monthly_contribution) + sum, 0).toFixed(2);
    });
    const loading = ref(false);
    const onSave = async () => {
      try {
        loading.value = true;
        let route = formData.value.id ? `family_members/${formData.value.id}` : "family_members";
        let data = formData.value.id ? { ...formData.value, _method: "PUT" } : { ...formData.value };
        let response = (await api.post(route, data)).data.data;
        let index = formData.value.id ? rows.value.indexOf((item) => item.id == formData.value.id) : null;
        index ? rows.value.splice(index - 1, 1, response) : rows.value.push(response);
        let message = formData.value.id ? "Actualizado" : "Registrado";
        notify.positive(message + " exitosamente");
        showDialog.value = false;
        clearForm();
      } catch (error) {
        notify.negative("Error al guardar el miembro familiar");
        console.log(error);
      } finally {
        loading.value = false;
      }
    };
    function clearForm() {
      formData.value = {
        name: "",
        age: "",
        relationship: "",
        marital_status: "",
        scolarship: "",
        ocupation: "",
        monthly_income: 0,
        monthly_contribution: 0,
        candidate_id: props.candidateId
      };
    }
    const relationshipOptions = [
      "Madre/Padre",
      "Hijo / Hija",
      "Hermano(a)",
      "Abuelo(a)",
      "Padrastro/Madrastra",
      "Hermanastro/Hermanastra",
      "Primo(a)",
      "Tío(a)"
    ];
    const maritalStatusOptions = [
      "Soltero(a)",
      "Casado(a)",
      "Divorciado(a)",
      "Viudo(a)",
      "Unión Libre",
      "Desconocido"
    ];
    watch(monthlyIncomeSum, (newVal) => {
      model.value = { income: newVal, contribution: monthlyContributionSum.value };
    });
    watch(monthlyContributionSum, (newVal) => {
      model.value = { income: monthlyIncomeSum.value, contribution: newVal };
    });
    function editMember(row) {
      showDialog.value = true;
      formData.value = { ...row };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(QTable, {
          columns,
          rows: rows.value,
          "row-key": "name",
          bordered: "",
          "hide-bottom": "",
          flat: "",
          class: "q-mb-md"
        }, {
          "bottom-row": withCtx(() => [
            createVNode(QTr, { class: "bg-grey-2 text-weight-bold" }, {
              default: withCtx(() => [
                createVNode(QTd, {
                  colspan: "6",
                  class: "text-right"
                }, {
                  default: withCtx(() => _cache[10] || (_cache[10] = [
                    createTextVNode(" Totales: ")
                  ])),
                  _: 1
                }),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(money)(monthlyIncomeSum.value)), 1)
                  ]),
                  _: 1
                }),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(money)(monthlyContributionSum.value)), 1)
                  ]),
                  _: 1
                }),
                createVNode(QTd)
              ]),
              _: 1
            })
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  icon: "sym_o_edit",
                  onClick: ($event) => editMember(props2.row)
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows"]),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(QBtn, {
            label: "Agregar Familiar",
            color: "primary",
            icon: "add",
            onClick: _cache[0] || (_cache[0] = ($event) => showDialog.value = true),
            class: "q-mb-md"
          })
        ]),
        createVNode(QDialog, {
          modelValue: showDialog.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => showDialog.value = $event),
          persistent: "",
          position: "right",
          "full-height": ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "400px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createBaseVNode("div", { class: "text-h6" }, "Nuevo Registro", -1)
                  ])),
                  _: 1
                }),
                createVNode(QForm, { onSubmit: onSave }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { class: "q-pt-none" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_3$1, [
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: formData.value.name,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.name = $event),
                            label: "Nombre completo",
                            required: ""
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: formData.value.age,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.age = $event),
                            modelModifiers: { number: true },
                            type: "number",
                            label: "Edad"
                          }, null, 8, ["modelValue"]),
                          createVNode(QSelect, {
                            outlined: "",
                            options: relationshipOptions,
                            modelValue: formData.value.relationship,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.relationship = $event),
                            label: "Parentesco"
                          }, null, 8, ["modelValue"]),
                          createVNode(QSelect, {
                            outlined: "",
                            options: maritalStatusOptions,
                            modelValue: formData.value.marital_status,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.marital_status = $event),
                            label: "Estado civil"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: formData.value.scolarship,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.scolarship = $event),
                            label: "Escolaridad"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            modelValue: formData.value.ocupation,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.ocupation = $event),
                            label: "Ocupación",
                            outlined: ""
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: formData.value.monthly_income,
                            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.value.monthly_income = $event),
                            modelModifiers: { number: true },
                            type: "number",
                            label: "Ingresos",
                            prefix: "$"
                          }, null, 8, ["modelValue"]),
                          createVNode(QInput, {
                            outlined: "",
                            modelValue: formData.value.monthly_contribution,
                            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.value.monthly_contribution = $event),
                            modelModifiers: { number: true },
                            type: "number",
                            label: "Aportación",
                            prefix: "$"
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(QCardActions, {
                      align: "right",
                      class: "text-primary"
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(QBtn, {
                          flat: "",
                          label: "Cancelar"
                        }, null, 512), [
                          [ClosePopup]
                        ]),
                        createVNode(QBtn, {
                          color: "primary",
                          label: "Guardar",
                          type: "submit",
                          loading: loading.value
                        }, null, 8, ["loading"])
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
      ]);
    };
  }
};
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _hoisted_2 = { class: "col-12" };
const _hoisted_3 = { class: "col-12 col-md-4" };
const _hoisted_4 = { class: "col-12 col-md-4" };
const _hoisted_5 = { class: "col-12 col-md-4" };
const _hoisted_6 = { class: "col-12 col-md-4" };
const _hoisted_7 = { class: "col-12 col-md-4" };
const _hoisted_8 = { class: "col-12 col-md-4" };
const _hoisted_9 = { class: "col-12 col-md-4" };
const _hoisted_10 = { class: "col-12 col-md-4" };
const _hoisted_11 = { class: "col-12 col-md-4" };
const _hoisted_12 = { class: "col-12" };
const _hoisted_13 = { class: "col-12" };
const _hoisted_14 = { class: "col-12 col-md-4" };
const _hoisted_15 = { class: "col-12 col-md-4" };
const _hoisted_16 = { class: "col-12 col-md-4" };
const _hoisted_17 = { class: "row q-col-gutter-md" };
const _hoisted_18 = { class: "col-12 col-md-8" };
const _hoisted_19 = { class: "col-12 col-md-4" };
const _hoisted_20 = { class: "col-12 col-md" };
const _hoisted_21 = { class: "col-12 col-md" };
const _hoisted_22 = { class: "col-12 col-md" };
const _hoisted_23 = { class: "col-12 col-md" };
const _hoisted_24 = { class: "col-12 col-md" };
const _hoisted_25 = { class: "col-12" };
const _hoisted_26 = { class: "col-12 col-md-6" };
const _hoisted_27 = { class: "col-12 col-md-2" };
const _hoisted_28 = { class: "col-12 col-md-4" };
const _hoisted_29 = { class: "col-12 col-md-3" };
const _hoisted_30 = { class: "col-12 col-md-3" };
const _hoisted_31 = { class: "col-12 col-md-3" };
const _hoisted_32 = { class: "col-12 col-md-3" };
const _hoisted_33 = { class: "col-12 col-md-6" };
const _hoisted_34 = { class: "col-12 col-md-6" };
const _hoisted_35 = { class: "col-12 col-md-6" };
const _hoisted_36 = { class: "col-12 col-md-6" };
const _hoisted_37 = { class: "row q-col-gutter-md" };
const _hoisted_38 = { class: "col-12 col-md-6" };
const _hoisted_39 = { class: "col-12 col-md-6" };
const _hoisted_40 = { class: "col-12 col-md-6" };
const _hoisted_41 = { class: "col-12 col-md-3" };
const _hoisted_42 = { class: "col-12 col-md-3" };
const _hoisted_43 = { class: "col-12 col-md-6" };
const _hoisted_44 = { class: "col-12 col-md-6" };
const _hoisted_45 = { class: "col-12" };
const _hoisted_46 = { class: "row q-col-gutter-md" };
const _hoisted_47 = { class: "col-12 col-md-4" };
const _hoisted_48 = { class: "col-12 col-md-6" };
const _hoisted_49 = { class: "col-12 col-md-6" };
const _hoisted_50 = { class: "col-12 col-md-3" };
const _hoisted_51 = { class: "col-12 col-md-9" };
const _hoisted_52 = { class: "col-12 col-md-6" };
const _hoisted_53 = { class: "col-12 col-md-3" };
const _hoisted_54 = { class: "col-12 col-md-3" };
const _hoisted_55 = { class: "col-12 col-md-6" };
const _hoisted_56 = { class: "col-12 col-md-6" };
const _hoisted_57 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "SocioeconomicPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const today = (/* @__PURE__ */ new Date()).toISOString().substr(0, 10);
    const form = ref({
      date: today,
      facility_tour_notes: "",
      attends_regular_school: 0,
      previously_attended_regular_school: 0,
      regular_school_grade: "",
      attends_specialized_school: 0,
      previously_attended_specialized_school: 0,
      specialized_school_cost: 0,
      financial_provider_name: "",
      has_formal_employment: 0,
      workplace: "",
      childcare_provider: "",
      has_more_children: 0,
      other_children_details: "",
      other_children_schools: "",
      other_children_occupations: "",
      //Requester
      requester_name: "",
      requester_relationship: null,
      requester_age: null,
      requester_birth_date: "",
      requester_gender: "",
      requester_marital_status: null,
      requester_phone: "",
      requester_origin: "",
      address_street: "",
      address_ext_num: "",
      address_colony: "",
      address_zip_code: "",
      address_country: "",
      address_state: "",
      address_city: "",
      has_medical_service: 0,
      medical_institution: "",
      has_specialized_medical_access: 0,
      specialized_medical_type: "",
      //Vivienda
      wall_material: "Ladrillo",
      roof_material: "Losa",
      housing_status: "Propia",
      bathroom_count: "",
      bedroom_count: "",
      service_water: 0,
      service_drainage: 0,
      service_electricity: 0,
      service_phone: 0,
      service_internet: 0,
      has_vehicle: 0,
      transport_method: "",
      expense_rent: 0,
      expense_electricity: 0,
      expense_water: 0,
      expense_food: 0,
      expense_special_supplies: 0,
      expense_phone: 0,
      expense_school: 0,
      expense_gas: 0,
      expense_gasoline: 0,
      expense_medical: 0,
      expense_debts: 0,
      expense_others: 0,
      total_expenses: 0,
      total_income: 0,
      income_expense_difference: 0,
      monthly_contribution_amount: 0,
      solvency_notes: "",
      economic_level: "",
      candidate_id: props.candidateId
    });
    const expensesFormFields = [
      { field: "expense_rent", label: "Renta" },
      { field: "expense_electricity", label: "Luz" },
      { field: "expense_water", label: "Agua" },
      { field: "expense_food", label: "Alimentos" },
      { field: "expense_special_supplies", label: "Alimento especial y pañales" },
      { field: "expense_phone", label: "Teléfono" },
      { field: "expense_school", label: "Escuela" },
      { field: "expense_gas", label: "Gas" },
      { field: "expense_gasoline", label: "Gasolina" },
      { field: "expense_medical", label: "Medicamentos y servicios médicos" },
      { field: "expense_debts", label: "Deudas" },
      { field: "expense_others", label: "Otros" }
    ];
    const totalExpenses = computed(() => {
      return expensesFormFields.reduce(
        (accumulator, field) => Number(form.value[field.field]) + accumulator,
        0
      );
    });
    const familyData = ref({ income: 0, contribution: 0 });
    const relationshipOptions = [
      "Madre/Padre",
      "Hijo / Hija",
      "Hermano(a)",
      "Abuelo(a)",
      "Padrastro/Madrastra",
      "Hermanastro/Hermanastra",
      "Primo(a)",
      "Tío(a)"
    ];
    const maritalStatusOptions = [
      "Soltero(a)",
      "Casado(a)",
      "Divorciado(a)",
      "Viudo(a)",
      "Unión Libre",
      "Desconocido"
    ];
    const customWall = ref("");
    const customRoof = ref("");
    const customHousing = ref("");
    const loading = ref(false);
    async function storeProfile() {
      try {
        loading.value = true;
        let data = form.value.id ? { ...form.value, _method: "PUT" } : { ...form.value };
        let route = form.value.id ? `socioeconomic_profiles/${form.value.id}` : "socioeconomic_profiles";
        await api.post(route, data);
        notify.positive("Guardado con éxito");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo guardar el perfil");
      } finally {
        loading.value = false;
      }
    }
    async function fetchProfile() {
      try {
        loading.value = true;
        let route = `socioeconomic_profiles/?candidate_id=${props.candidateId}`;
        let response = (await api.get(route)).data.data;
        form.value = response?.id ? response : form.value;
        console.log(form.value);
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo cargar el perfil");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchProfile();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QCard, {
          flat: "",
          outlined: "",
          class: "q-pa-md"
        }, {
          default: withCtx(() => [
            _cache[86] || (_cache[86] = createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Datos del Candidato", -1)),
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QInput, {
                  modelValue: form.value.facility_tour_notes,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => form.value.facility_tour_notes = $event),
                  label: "1. ¿Se le dio recorrido por las instalaciones?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createVNode(QField, {
                  label: "2. ¿Asiste actualmente a una escuela regular?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.attends_regular_school,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.attends_regular_school = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.attends_regular_school,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.attends_regular_school = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(QField, {
                  label: "3. ¿Asistió anteriormente?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.previously_attended_regular_school,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.previously_attended_regular_school = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.previously_attended_regular_school,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.previously_attended_regular_school = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(QInput, {
                  modelValue: form.value.regular_school_grade,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.value.regular_school_grade = $event),
                  label: "4. ¿A qué grado?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_6, [
                createVNode(QField, {
                  label: "5. ¿Asiste actualmente a otra institución o escuela especializada?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.attends_specialized_school,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.value.attends_specialized_school = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.attends_specialized_school,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => form.value.attends_specialized_school = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_7, [
                createVNode(QField, {
                  label: "6. ¿Asistió anteriormente?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.previously_attended_specialized_school,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => form.value.previously_attended_specialized_school = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.previously_attended_specialized_school,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => form.value.previously_attended_specialized_school = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_8, [
                createVNode(QInput, {
                  modelValue: form.value.specialized_school_cost,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => form.value.specialized_school_cost = $event),
                  type: "number",
                  prefix: "$",
                  label: "7. ¿Cuál es o era el costo de esa institución?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createVNode(QInput, {
                  modelValue: form.value.financial_provider_name,
                  "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => form.value.financial_provider_name = $event),
                  label: "8. ¿Quién es la persona encargada del sostenimiento del Candidato?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_10, [
                createVNode(QField, {
                  label: "9. ¿Tiene un empleo formal?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.has_formal_employment,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => form.value.has_formal_employment = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.has_formal_employment,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => form.value.has_formal_employment = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_11, [
                createVNode(QInput, {
                  modelValue: form.value.workplace,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => form.value.workplace = $event),
                  label: "10. ¿Dónde labora?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createVNode(QInput, {
                  modelValue: form.value.childcare_provider,
                  "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => form.value.childcare_provider = $event),
                  type: "textarea",
                  label: "11. ¿Quién se encarga de cuidar a sus hijos cuando usted no está disponible?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(QField, {
                  label: "12. ¿Tiene más hijos?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.has_more_children,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => form.value.has_more_children = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.has_more_children,
                      "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => form.value.has_more_children = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              withDirectives(createBaseVNode("div", _hoisted_14, [
                createVNode(QInput, {
                  modelValue: form.value.other_children_details,
                  "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => form.value.other_children_details = $event),
                  type: "textarea",
                  label: "13. ¿Cuántos y de qué edades?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ], 512), [
                [vShow, form.value.has_more_children]
              ]),
              withDirectives(createBaseVNode("div", _hoisted_15, [
                createVNode(QInput, {
                  modelValue: form.value.other_children_schools,
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => form.value.other_children_schools = $event),
                  type: "textarea",
                  label: "14. ¿A qué escuela(s) asiste(n)?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ], 512), [
                [vShow, form.value.has_more_children]
              ]),
              withDirectives(createBaseVNode("div", _hoisted_16, [
                createVNode(QInput, {
                  modelValue: form.value.other_children_occupations,
                  "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => form.value.other_children_occupations = $event),
                  type: "textarea",
                  label: "15. O, ¿a qué se dedican?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ], 512), [
                [vShow, form.value.has_more_children]
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(QCard, {
          flat: "",
          outlined: "",
          class: "q-pa-md q-mt-md"
        }, {
          default: withCtx(() => [
            _cache[88] || (_cache[88] = createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Datos Generales del Solicitante del Estudio Socio-Económico", -1)),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(QInput, {
                  modelValue: form.value.requester_name,
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => form.value.requester_name = $event),
                  label: "1. Nombre de quien solicita",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createVNode(QSelect, {
                  modelValue: form.value.requester_relationship,
                  "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => form.value.requester_relationship = $event),
                  options: relationshipOptions,
                  label: "2. Parentesco",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  "emit-value": "",
                  "map-options": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createVNode(QInput, {
                  modelValue: form.value.requester_age,
                  "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => form.value.requester_age = $event),
                  modelModifiers: { number: true },
                  type: "number",
                  label: "3. Edad",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_21, [
                createVNode(QInput, {
                  modelValue: form.value.requester_birth_date,
                  "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => form.value.requester_birth_date = $event),
                  type: "date",
                  label: "4. Fecha de Nacimiento",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_22, [
                createVNode(QInput, {
                  modelValue: form.value.requester_gender,
                  "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => form.value.requester_gender = $event),
                  label: "5. Sexo",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_23, [
                createVNode(QSelect, {
                  modelValue: form.value.requester_marital_status,
                  "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => form.value.requester_marital_status = $event),
                  options: maritalStatusOptions,
                  label: "6. Estado Civil",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  "emit-value": "",
                  "map-options": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_24, [
                createVNode(QInput, {
                  modelValue: form.value.requester_phone,
                  "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => form.value.requester_phone = $event),
                  label: "7. Teléfono",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_25, [
                createVNode(QInput, {
                  modelValue: form.value.requester_origin,
                  "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => form.value.requester_origin = $event),
                  label: "Originario de",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              _cache[87] || (_cache[87] = createBaseVNode("div", { class: "col-12" }, [
                createBaseVNode("div", { class: "text-subtitle2" }, "8. Domicilio")
              ], -1)),
              createBaseVNode("div", _hoisted_26, [
                createVNode(QInput, {
                  modelValue: form.value.address_street,
                  "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => form.value.address_street = $event),
                  label: "Calle",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_27, [
                createVNode(QInput, {
                  modelValue: form.value.address_ext_num,
                  "onUpdate:modelValue": _cache[30] || (_cache[30] = ($event) => form.value.address_ext_num = $event),
                  label: "Núm. Exterior",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_28, [
                createVNode(QInput, {
                  modelValue: form.value.address_colony,
                  "onUpdate:modelValue": _cache[31] || (_cache[31] = ($event) => form.value.address_colony = $event),
                  label: "Colonia",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_29, [
                createVNode(QInput, {
                  modelValue: form.value.address_zip_code,
                  "onUpdate:modelValue": _cache[32] || (_cache[32] = ($event) => form.value.address_zip_code = $event),
                  label: "Código Postal",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_30, [
                createVNode(QInput, {
                  modelValue: form.value.address_country,
                  "onUpdate:modelValue": _cache[33] || (_cache[33] = ($event) => form.value.address_country = $event),
                  label: "País",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_31, [
                createVNode(QInput, {
                  modelValue: form.value.address_state,
                  "onUpdate:modelValue": _cache[34] || (_cache[34] = ($event) => form.value.address_state = $event),
                  label: "Estado",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_32, [
                createVNode(QInput, {
                  modelValue: form.value.address_city,
                  "onUpdate:modelValue": _cache[35] || (_cache[35] = ($event) => form.value.address_city = $event),
                  label: "Ciudad",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_33, [
                createVNode(QField, {
                  label: "9. ¿Cuenta con servicio médico?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.has_medical_service,
                      "onUpdate:modelValue": _cache[36] || (_cache[36] = ($event) => form.value.has_medical_service = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.has_medical_service,
                      "onUpdate:modelValue": _cache[37] || (_cache[37] = ($event) => form.value.has_medical_service = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_34, [
                createVNode(QInput, {
                  modelValue: form.value.medical_institution,
                  "onUpdate:modelValue": _cache[38] || (_cache[38] = ($event) => form.value.medical_institution = $event),
                  label: "10. ¿Con qué institución?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.has_medical_service
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_35, [
                createVNode(QField, {
                  label: "11. ¿Tiene acceso a atención médica especializada?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.has_specialized_medical_access,
                      "onUpdate:modelValue": _cache[39] || (_cache[39] = ($event) => form.value.has_specialized_medical_access = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.has_specialized_medical_access,
                      "onUpdate:modelValue": _cache[40] || (_cache[40] = ($event) => form.value.has_specialized_medical_access = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_36, [
                createVNode(QInput, {
                  modelValue: form.value.specialized_medical_type,
                  "onUpdate:modelValue": _cache[41] || (_cache[41] = ($event) => form.value.specialized_medical_type = $event),
                  label: "12. ¿De qué tipo?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.has_specialized_medical_access
                }, null, 8, ["modelValue", "disable"])
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(QCard, {
          flat: "",
          outlined: "",
          class: "q-pa-md q-mt-md"
        }, {
          default: withCtx(() => [
            _cache[89] || (_cache[89] = createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Datos de Vivienda", -1)),
            createBaseVNode("div", _hoisted_37, [
              createBaseVNode("div", _hoisted_38, [
                createVNode(QField, {
                  label: "1. Casa construida de:",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.wall_material,
                      "onUpdate:modelValue": _cache[42] || (_cache[42] = ($event) => form.value.wall_material = $event),
                      val: "Ladrillo",
                      label: "Ladrillo"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.wall_material,
                      "onUpdate:modelValue": _cache[43] || (_cache[43] = ($event) => form.value.wall_material = $event),
                      val: "Block",
                      label: "Block"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.wall_material,
                      "onUpdate:modelValue": _cache[44] || (_cache[44] = ($event) => form.value.wall_material = $event),
                      val: customWall.value,
                      label: "Otro:"
                    }, null, 8, ["modelValue", "val"]),
                    !["Ladrillo", "Block"].includes(form.value.wall_material) || form.value.wall_material === customWall.value ? (openBlock(), createBlock(QInput, {
                      key: 0,
                      modelValue: customWall.value,
                      "onUpdate:modelValue": [
                        _cache[45] || (_cache[45] = ($event) => customWall.value = $event),
                        _cache[46] || (_cache[46] = ($event) => form.value.wall_material = customWall.value)
                      ],
                      dense: "",
                      placeholder: "Especifique material",
                      "stack-label": "",
                      outlined: "",
                      "hide-bottom-space": ""
                    }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_39, [
                createVNode(QField, {
                  label: "2. Techo de:",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.roof_material,
                      "onUpdate:modelValue": _cache[47] || (_cache[47] = ($event) => form.value.roof_material = $event),
                      val: "Losa",
                      label: "Losa"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.roof_material,
                      "onUpdate:modelValue": _cache[48] || (_cache[48] = ($event) => form.value.roof_material = $event),
                      val: "Lámina",
                      label: "Lámina"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.roof_material,
                      "onUpdate:modelValue": _cache[49] || (_cache[49] = ($event) => form.value.roof_material = $event),
                      val: "Cartón",
                      label: "Cartón"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.roof_material,
                      "onUpdate:modelValue": _cache[50] || (_cache[50] = ($event) => form.value.roof_material = $event),
                      val: customRoof.value,
                      label: "Otro:"
                    }, null, 8, ["modelValue", "val"]),
                    !["Losa", "Lámina", "Cartón"].includes(form.value.roof_material) || form.value.roof_material === customRoof.value ? (openBlock(), createBlock(QInput, {
                      key: 0,
                      modelValue: customRoof.value,
                      "onUpdate:modelValue": [
                        _cache[51] || (_cache[51] = ($event) => customRoof.value = $event),
                        _cache[52] || (_cache[52] = ($event) => form.value.roof_material = customRoof.value)
                      ],
                      dense: "",
                      placeholder: "Especifique material de techo",
                      "stack-label": "",
                      outlined: "",
                      "hide-bottom-space": ""
                    }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_40, [
                createVNode(QField, {
                  label: "3. Casa:",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.housing_status,
                      "onUpdate:modelValue": _cache[53] || (_cache[53] = ($event) => form.value.housing_status = $event),
                      val: "Propia",
                      label: "Propia"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.housing_status,
                      "onUpdate:modelValue": _cache[54] || (_cache[54] = ($event) => form.value.housing_status = $event),
                      val: "Renta",
                      label: "Renta"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.housing_status,
                      "onUpdate:modelValue": _cache[55] || (_cache[55] = ($event) => form.value.housing_status = $event),
                      val: "Prestada",
                      label: "Prestada"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.housing_status,
                      "onUpdate:modelValue": _cache[56] || (_cache[56] = ($event) => form.value.housing_status = $event),
                      val: customHousing.value,
                      label: "Otro:"
                    }, null, 8, ["modelValue", "val"]),
                    !["Propia", "Renta", "Prestada"].includes(form.value.housing_status) || form.value.housing_status === customHousing.value ? (openBlock(), createBlock(QInput, {
                      key: 0,
                      modelValue: customHousing.value,
                      "onUpdate:modelValue": [
                        _cache[57] || (_cache[57] = ($event) => customHousing.value = $event),
                        _cache[58] || (_cache[58] = ($event) => form.value.housing_status = customHousing.value)
                      ],
                      dense: "",
                      placeholder: "Especifique situación",
                      "stack-label": "",
                      outlined: "",
                      "hide-bottom-space": ""
                    }, null, 8, ["modelValue"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_41, [
                createVNode(QInput, {
                  modelValue: form.value.bathroom_count,
                  "onUpdate:modelValue": _cache[59] || (_cache[59] = ($event) => form.value.bathroom_count = $event),
                  label: "4. Número de baños",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_42, [
                createVNode(QInput, {
                  modelValue: form.value.bedroom_count,
                  "onUpdate:modelValue": _cache[60] || (_cache[60] = ($event) => form.value.bedroom_count = $event),
                  label: "5. Número de recámaras",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_43, [
                createVNode(QField, {
                  label: "6. Servicios con los que cuenta:",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QCheckbox, {
                      modelValue: form.value.service_water,
                      "onUpdate:modelValue": _cache[61] || (_cache[61] = ($event) => form.value.service_water = $event),
                      label: "Agua",
                      class: "q-mr-sm",
                      "true-value": 1
                    }, null, 8, ["modelValue"]),
                    createVNode(QCheckbox, {
                      modelValue: form.value.service_drainage,
                      "onUpdate:modelValue": _cache[62] || (_cache[62] = ($event) => form.value.service_drainage = $event),
                      label: "Drenaje",
                      class: "q-mr-sm",
                      "true-value": 1
                    }, null, 8, ["modelValue"]),
                    createVNode(QCheckbox, {
                      modelValue: form.value.service_electricity,
                      "onUpdate:modelValue": _cache[63] || (_cache[63] = ($event) => form.value.service_electricity = $event),
                      label: "Luz",
                      class: "q-mr-sm",
                      "true-value": 1
                    }, null, 8, ["modelValue"]),
                    createVNode(QCheckbox, {
                      modelValue: form.value.service_phone,
                      "onUpdate:modelValue": _cache[64] || (_cache[64] = ($event) => form.value.service_phone = $event),
                      label: "Teléfono",
                      class: "q-mr-sm",
                      "true-value": 1
                    }, null, 8, ["modelValue"]),
                    createVNode(QCheckbox, {
                      modelValue: form.value.service_internet,
                      "onUpdate:modelValue": _cache[65] || (_cache[65] = ($event) => form.value.service_internet = $event),
                      label: "Internet",
                      "true-value": 1
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_44, [
                createVNode(QField, {
                  label: "7. ¿Tiene vehículo propio?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.has_vehicle,
                      "onUpdate:modelValue": _cache[66] || (_cache[66] = ($event) => form.value.has_vehicle = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.has_vehicle,
                      "onUpdate:modelValue": _cache[67] || (_cache[67] = ($event) => form.value.has_vehicle = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_45, [
                createVNode(QInput, {
                  modelValue: form.value.transport_method,
                  "onUpdate:modelValue": _cache[68] || (_cache[68] = ($event) => form.value.transport_method = $event),
                  label: "8. Si no cuenta con vehículo propio, ¿cuál es su medio de transporte?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.has_vehicle
                }, null, 8, ["modelValue", "disable"])
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(QCard, {
          flat: "",
          outlined: "",
          class: "q-pa-md q-mt-md"
        }, {
          default: withCtx(() => [
            _cache[91] || (_cache[91] = createBaseVNode("div", { class: "text-h6 q-mb-md" }, "Personas que Habitan en el Hogar e Ingresos Mensuales", -1)),
            createVNode(_sfc_main$1, {
              candidateId: props.candidateId,
              modelValue: familyData.value,
              "onUpdate:modelValue": _cache[69] || (_cache[69] = ($event) => familyData.value = $event)
            }, null, 8, ["candidateId", "modelValue"]),
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("div", _hoisted_47, [
                createVNode(QInput, {
                  modelValue: form.value.household_members_count,
                  "onUpdate:modelValue": _cache[70] || (_cache[70] = ($event) => form.value.household_members_count = $event),
                  modelModifiers: { number: true },
                  type: "number",
                  label: "1. Número de personas que habitan en el hogar",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ]),
              _cache[90] || (_cache[90] = createBaseVNode("div", { class: "col-md-8" }, null, -1)),
              createBaseVNode("div", _hoisted_48, [
                createVNode(QField, {
                  label: "7. ¿Viven en casa otras personas con discapacidad?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.other_disabled_members,
                      "onUpdate:modelValue": _cache[71] || (_cache[71] = ($event) => form.value.other_disabled_members = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.other_disabled_members,
                      "onUpdate:modelValue": _cache[72] || (_cache[72] = ($event) => form.value.other_disabled_members = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_49, [
                createVNode(QInput, {
                  modelValue: form.value.disabled_members_type,
                  "onUpdate:modelValue": _cache[73] || (_cache[73] = ($event) => form.value.disabled_members_type = $event),
                  label: "8. Tipo de discapacidad",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.other_disabled_members
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createVNode(QInput, {
                  modelValue: form.value.disabled_members_count,
                  "onUpdate:modelValue": _cache[74] || (_cache[74] = ($event) => form.value.disabled_members_count = $event),
                  label: "9. ¿Cuántas?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.other_disabled_members
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_51, [
                createVNode(QInput, {
                  modelValue: form.value.disabled_members_ages,
                  "onUpdate:modelValue": _cache[75] || (_cache[75] = ($event) => form.value.disabled_members_ages = $event),
                  label: "10. ¿De qué edades?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.other_disabled_members
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_52, [
                createVNode(QField, {
                  label: "2. ¿Recibe algún tipo de apoyo gubernamental o institucional?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.receives_govt_support,
                      "onUpdate:modelValue": _cache[76] || (_cache[76] = ($event) => form.value.receives_govt_support = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.receives_govt_support,
                      "onUpdate:modelValue": _cache[77] || (_cache[77] = ($event) => form.value.receives_govt_support = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_53, [
                createVNode(QInput, {
                  modelValue: form.value.govt_support_institution,
                  "onUpdate:modelValue": _cache[78] || (_cache[78] = ($event) => form.value.govt_support_institution = $event),
                  label: "3. ¿De qué institución?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.receives_govt_support
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_54, [
                createVNode(QInput, {
                  modelValue: form.value.govt_support_amount,
                  "onUpdate:modelValue": _cache[79] || (_cache[79] = ($event) => form.value.govt_support_amount = $event),
                  modelModifiers: { number: true },
                  type: "number",
                  prefix: "$",
                  label: "4. ¿Cuál es el monto?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.receives_govt_support
                }, null, 8, ["modelValue", "disable"])
              ]),
              createBaseVNode("div", _hoisted_55, [
                createVNode(QField, {
                  label: "5. ¿Recibe algún ingreso adicional?",
                  "stack-label": "",
                  outlined: ""
                }, {
                  control: withCtx(() => [
                    createVNode(QRadio, {
                      modelValue: form.value.receives_additional_income,
                      "onUpdate:modelValue": _cache[80] || (_cache[80] = ($event) => form.value.receives_additional_income = $event),
                      val: 1,
                      label: "Sí"
                    }, null, 8, ["modelValue"]),
                    createVNode(QRadio, {
                      modelValue: form.value.receives_additional_income,
                      "onUpdate:modelValue": _cache[81] || (_cache[81] = ($event) => form.value.receives_additional_income = $event),
                      val: 0,
                      label: "No"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              createBaseVNode("div", _hoisted_56, [
                createVNode(QInput, {
                  modelValue: form.value.additional_income_amount,
                  "onUpdate:modelValue": _cache[82] || (_cache[82] = ($event) => form.value.additional_income_amount = $event),
                  modelModifiers: { number: true },
                  type: "number",
                  prefix: "$",
                  label: "6. ¿Cuál es el monto?",
                  "stack-label": "",
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !form.value.receives_additional_income
                }, null, 8, ["modelValue", "disable"])
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(QCard, { flat: "" }, {
          default: withCtx(() => [
            createVNode(QCardSection, {
              class: "flex items-center",
              style: { "flex-flow": "column" }
            }, {
              default: withCtx(() => [
                _cache[99] || (_cache[99] = createBaseVNode("div", { class: "text-h6 q-mb-md text-center" }, "Gastos Mensuales", -1)),
                createVNode(QMarkupTable, {
                  flat: "",
                  bordered: "",
                  style: { "width": "800px", "margin": "0 auto" }
                }, {
                  default: withCtx(() => [
                    _cache[98] || (_cache[98] = createBaseVNode("thead", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("th", null, "Concepto"),
                        createBaseVNode("th", null, "Monto")
                      ])
                    ], -1)),
                    createBaseVNode("tbody", null, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(expensesFormFields, (field) => {
                        return createBaseVNode("tr", { key: field }, [
                          createBaseVNode("td", null, toDisplayString(field.label) + ":", 1),
                          createBaseVNode("td", null, [
                            createVNode(QInput, {
                              modelValue: form.value[field.field],
                              "onUpdate:modelValue": ($event) => form.value[field.field] = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              prefix: "$",
                              outlined: "",
                              "hide-bottom-space": ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]);
                      }), 64)),
                      createBaseVNode("tr", null, [
                        _cache[92] || (_cache[92] = createBaseVNode("td", null, "Total de gastos:", -1)),
                        createBaseVNode("td", null, toDisplayString(unref(money)(totalExpenses.value)), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[93] || (_cache[93] = createBaseVNode("td", null, "Total de ingresos:", -1)),
                        createBaseVNode("td", null, toDisplayString(unref(money)(familyData.value.income)), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[94] || (_cache[94] = createBaseVNode("td", null, "Diferencia:", -1)),
                        createBaseVNode("td", null, toDisplayString(unref(money)(familyData.value.income - totalExpenses.value)), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[95] || (_cache[95] = createBaseVNode("td", null, "Solvencia económica:", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            modelValue: form.value.solvency_notes,
                            "onUpdate:modelValue": _cache[83] || (_cache[83] = ($event) => form.value.solvency_notes = $event),
                            modelModifiers: { number: true },
                            outlined: "",
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[96] || (_cache[96] = createBaseVNode("td", null, "Nivel:", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            modelValue: form.value.economic_level,
                            "onUpdate:modelValue": _cache[84] || (_cache[84] = ($event) => form.value.economic_level = $event),
                            modelModifiers: { number: true },
                            outlined: "",
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue"])
                        ])
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[97] || (_cache[97] = createBaseVNode("td", null, "Cantidad que podría aportar/mes:", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QInput, {
                            modelValue: form.value.monthly_contribution_amount,
                            "onUpdate:modelValue": _cache[85] || (_cache[85] = ($event) => form.value.monthly_contribution_amount = $event),
                            modelModifiers: { number: true },
                            type: "number",
                            prefix: "$",
                            outlined: "",
                            "hide-bottom-space": ""
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_57, [
          createVNode(QBtn, {
            label: "Guardar",
            loading: loading.value,
            onClick: storeProfile,
            color: "primary"
          }, null, 8, ["loading"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
