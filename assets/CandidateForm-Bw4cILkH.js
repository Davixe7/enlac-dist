import { Q as QInput } from "./QInput-uKsO-mcd.js";
import { Q as QRadio } from "./QRadio-B8b3MSsK.js";
import { Q as QSelect, h as QDialog } from "./QSelect-Dfccb1zM.js";
import { j as createComponent, t as getCurrentInstance, k as computed, l as h, m as hSlot, r as ref, v as watch, c as createElementBlock, a as openBlock, b as createBaseVNode, g as createTextVNode, R as createBlock, S as createCommentVNode, w as withCtx, d as createVNode, h as QIcon, x as withDirectives, y as vShow, Q as QBtn, W as Fragment, Y as defineStore, o as onMounted, O as reactive, a8 as useRouter, X as renderList, U as toDisplayString, V as QAvatar, C as nextTick } from "./index-DNzcpddl.js";
import { D as DateTime, Q as QPopupProxy, a as QDate, b as QTime } from "./datetime-CKOLMVco.js";
import { Q as QImg } from "./QImg-BbTPpAvD.js";
import { Q as QFile } from "./QFile-CmQjWh56.js";
import { Q as QPage } from "./QPage-CuM6Q6cW.js";
import { C as ClosePopup } from "./ClosePopup-BNKXf0TW.js";
import { api } from "./axios-rEY_Jecr.js";
import { Q as QTd } from "./QTd-D_yne8jU.js";
import { Q as QTable } from "./QTable-BF17cnq0.js";
import { Q as QCard, a as QCardSection } from "./QCard-NmYyN4JG.js";
import { u as useDarkProps, a as useDark } from "./use-dark-WkhccWQ1.js";
import { Q as QCheckbox } from "./QCheckbox-DHyNCU4l.js";
import { Q as QTr } from "./QTr-uhjFN1XO.js";
import { n as notify } from "./notify-ByjlCVX8.js";
import { s as scrollToFirstError } from "./focusError-DHV7BPiX.js";
import "./use-key-composition-DOj7cCcL.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
import "./use-render-cache-BA_W40LL.js";
import "./QSeparator-DQ_sL_0t.js";
import "./QList-CrD9GAVD.js";
import "./use-fullscreen-C2morA89.js";
const QBanner = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
const _hoisted_1$3 = { class: "col-12 q-pb-none page-title flex justify-between" };
const _hoisted_2$2 = { class: "row q-col-gutter-lg q-mb-xl" };
const _hoisted_3$1 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_4$1 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_5$1 = { class: "flex" };
const _hoisted_6$1 = { class: "row q-col-gutter-lg" };
const _hoisted_7$1 = { class: "col-12 col-md-6 q-gutter-y-md" };
const _hoisted_8$1 = { class: "col-12 col-md-6 q-gutter-y-md" };
const _hoisted_9$1 = { class: "col-12 flex justify-end" };
const _sfc_main$3 = {
  __name: "ContactForm",
  props: {
    candidateId: { default: null },
    hideBottomSpace: { type: Boolean, default: false },
    modelValue: { type: Object, required: true },
    errors: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const relationships = [
      { label: "Abuelo(a)", value: "abuelo" },
      { label: "Hermano(a)", value: "hermano" },
      { label: "Hermanastro(a)", value: "hermanastro" },
      { label: "Madre/Padre", value: "madre_padre" },
      { label: "Padrastro/Madrastra", value: "padrastro_madrastra" },
      { label: "Primo(a)", value: "primo" },
      { label: "Tío(a)", value: "tio" }
    ];
    const contact = ref({ ...props.modelValue });
    const localErrors = ref({ ...props.errors });
    watch(() => props.errors, (newValue) => localErrors.value = { ...newValue });
    watch(() => props.modelValue, (newValue) => Object.assign(contact.value, newValue));
    watch(() => contact.value, () => {
      props.hideBottomSpace ? emits("update:modelValue", { ...contact.value }) : "";
    }, { deep: true });
    async function save() {
      try {
        await api.post("contacts/validate", { ...contact.value });
        emits("update:modelValue", { ...contact.value });
      } catch (error) {
        if (error.status == 422) {
          localErrors.value = error.response.data.errors;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$3, [
          _cache[17] || (_cache[17] = createTextVNode(" Datos del Contacto ")),
          localErrors.value["contacts"] ? (openBlock(), createBlock(QBanner, {
            key: 0,
            "inline-actions": "",
            class: "text-red bg-white q-field--error",
            style: { "border": "1px solid red" }
          }, {
            action: withCtx(() => [
              createVNode(QIcon, {
                flat: "",
                color: "red",
                name: "sym_o_info"
              })
            ]),
            default: withCtx(() => [
              _cache[16] || (_cache[16] = createTextVNode(" Debe incluir por lo menos un contacto "))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Nombre (s)",
              modelValue: contact.value.first_name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => contact.value.first_name = $event),
              class: "q-field--required",
              error: !!localErrors.value[`first_name`],
              "error-message": localErrors.value[`first_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Apellido Paterno",
              modelValue: contact.value.last_name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => contact.value.last_name = $event),
              error: !!localErrors.value[`last_name`],
              "error-message": localErrors.value[`last_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Apellido Materno",
              modelValue: contact.value.middle_name,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => contact.value.middle_name = $event),
              error: !!localErrors.value[`middle_name`],
              "error-message": localErrors.value[`middle_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Parentesco",
              modelValue: contact.value.relationship,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => contact.value.relationship = $event),
              class: "q-field--required",
              error: !!localErrors.value[`relationship`],
              "error-message": localErrors.value[`relationship`],
              options: relationships,
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Correo",
              modelValue: contact.value.email,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => contact.value.email = $event),
              error: !!localErrors.value[`email`],
              "error-message": localErrors.value[`email`],
              type: "email"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "WhatsApp",
              modelValue: contact.value.whatsapp,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => contact.value.whatsapp = $event),
              error: !!localErrors.value[`whatsapp`],
              "error-message": localErrors.value[`whatsapp`],
              mask: "##########",
              type: "tel"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Teléfono casa",
              modelValue: contact.value.home_phone,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => contact.value.home_phone = $event),
              error: !!localErrors.value[`home_phone`],
              "error-message": localErrors.value[`home_phone`],
              mask: "##########",
              type: "tel"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(QCheckbox, {
                label: "Tutor legal",
                modelValue: contact.value.legal_guardian,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => contact.value.legal_guardian = $event),
                "true-value": 1,
                "false-value": 0
              }, null, 8, ["modelValue"]),
              createVNode(QCheckbox, {
                label: "Responsable del Beneficiario",
                modelValue: contact.value.enlac_responsible,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => contact.value.enlac_responsible = $event),
                "true-value": 1,
                "false-value": 0
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        _cache[19] || (_cache[19] = createBaseVNode("div", { class: "page-title" }, " Domicilio ", -1)),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Calle",
              modelValue: contact.value.street,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => contact.value.street = $event),
              error: !!localErrors.value[`street`],
              "error-message": localErrors.value[`street`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Colonia",
              modelValue: contact.value.neighborhood,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => contact.value.neighborhood = $event),
              error: !!localErrors.value[`neighborhood`],
              "error-message": localErrors.value[`neighborhood`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Estado",
              modelValue: contact.value.state,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => contact.value.state = $event),
              error: !!localErrors.value[`state`],
              "error-message": localErrors.value[`state`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Código Postal",
              modelValue: contact.value.postal_code,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => contact.value.postal_code = $event),
              error: !!localErrors.value[`postal_code`],
              "error-message": localErrors.value[`postal_code`],
              type: "number"
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Número exterior",
              modelValue: contact.value.exterior_number,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => contact.value.exterior_number = $event),
              error: !!localErrors.value[`exterior_number`],
              "error-message": localErrors.value[`exterior_number`],
              type: "number"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Ciudad",
              modelValue: contact.value.city,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => contact.value.city = $event),
              error: !!localErrors.value[`city`],
              "error-message": localErrors.value[`city`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "País",
              modelValue: contact.value.country,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => contact.value.country = $event),
              error: !!localErrors.value[`country`],
              "error-message": localErrors.value[`country`]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          withDirectives(createBaseVNode("div", _hoisted_9$1, [
            createVNode(QBtn, {
              color: "primary",
              onClick: save
            }, {
              default: withCtx(() => _cache[18] || (_cache[18] = [
                createTextVNode("Guardar Información")
              ])),
              _: 1
            })
          ], 512), [
            [vShow, !__props.hideBottomSpace]
          ])
        ])
      ], 64);
    };
  }
};
const useContactStore = defineStore("contact", {
  state: () => ({
    loading: false,
    errors: {}
  }),
  actions: {
    async validate(data) {
      try {
        await api.post(`contacts/validate`, data);
        this.errors = {};
        return true;
      } catch (error) {
        if (error.status == 422) {
          this.errors = error.response.data.errors;
        }
        return false;
      }
    }
  }
});
const _hoisted_1$2 = { class: "flex justify-end q-mt-lg q-mb-xl" };
const _sfc_main$2 = {
  __name: "ContactsPage",
  props: {
    candidateId: {
      type: [Number, String, null],
      required: true,
      default: null,
      nullable: true
    },
    errors: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const contactStore = useContactStore();
    const firstContactErrors = ref({});
    const emits = __emit;
    const props = __props;
    onMounted(async () => {
      await fetchContacts();
      contact.value = contacts.value[0];
      emits("update:modelValue", [...contacts.value]);
    });
    watch(() => props.errors, (newValue) => {
      let errors = {};
      if (newValue.contacts) {
        errors.contacts = "Debe incluir al menos 1 contacto.";
      }
      Object.keys(props.errors).filter((errorKey) => errorKey.includes(`contacts.0.`)).map((errorKey) => ({ old: errorKey, new: errorKey.replace(`contacts.0.`, "") })).map((errorKey) => errors[errorKey.new] = props.errors[errorKey.old]);
      firstContactErrors.value = { ...errors };
    });
    async function fetchContacts() {
      loading.value = true;
      try {
        contacts.value = (await api.get(`/contacts?candidate_id=${props.candidateId}`)).data.data;
        if (contacts.value.length != 0) {
          return;
        }
        contacts.value.push({ ...defaultContact.value });
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    async function addContact() {
      if (contacts.value.length != 1) {
        contact.value = { ...defaultContact.value };
        dialog.value = true;
        return;
      }
      firstContactErrors.value = {};
      if (!await contactStore.validate(contacts.value[0])) {
        firstContactErrors.value = { ...contactStore.errors };
        contactStore.errors = {};
        return;
      }
      contact.value = { ...defaultContact.value };
      dialog.value = true;
    }
    async function setContact(target) {
      contact.value = target;
      dialog.value = true;
    }
    async function saveContact(newValue) {
      if (contacts.value.includes(contact.value)) {
        contacts.value.splice(contacts.value.indexOf(contact.value), 1, newValue);
      } else {
        contacts.value.push(newValue);
      }
      contact.value = newValue;
      emits("update:modelValue", [...contacts.value]);
      dialog.value = false;
    }
    async function removeContact(target) {
      if (!target.id) {
        contacts.value.splice(contacts.value.indexOf(target), 1);
        return;
      }
      try {
        await api.post(`contacts/${target.id}`, { _method: "DELETE" });
        contacts.value.splice(contacts.value.indexOf(target), 1);
      } catch (error) {
        console.log(error);
      }
    }
    const loading = ref(false);
    const dialog = ref(false);
    const contacts = ref([]);
    const contact = ref(null);
    const defaultContact = ref({
      "first_name": "",
      "middle_name": "",
      "last_name": "",
      "relationship": "",
      "legal_guardian": 0,
      "enlac_responsible": 0,
      "email": "",
      "whatsapp": "",
      "home_phone": "",
      "street": "5",
      "neighborhood": "",
      "state": "",
      "postal_code": "",
      "exterior_number": "0",
      "city": "",
      "country": ""
    });
    const columns = ref([
      {
        name: "full_name",
        required: true,
        label: "Nombre Completo",
        align: "left",
        field: (row) => `${row.first_name} ${row.middle_name} ${row.last_name}`,
        format: (val) => val,
        sortable: true
      },
      {
        name: "state",
        label: "Estado",
        align: "left",
        field: "state",
        format: (val) => val,
        sortable: true
      },
      {
        name: "city",
        label: "Ciudad",
        align: "left",
        field: "city",
        format: (val) => val,
        sortable: true
      },
      {
        name: "legal_guardian",
        label: "Tutor Legal",
        align: "left",
        field: "legal_guardian",
        format: (val) => val === 1 ? "Sí" : "No",
        sortable: true
      },
      {
        name: "enlac_responsible",
        label: "Responsable Enlac",
        align: "left",
        field: "enlac_responsible",
        format: (val) => val === 1 ? "Sí" : "No",
        sortable: true
      },
      {
        name: "actions",
        align: "right",
        sortable: false
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        contacts.value.length <= 1 && contact.value && !dialog.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          "candidate-id": props.candidateId,
          "model-value": contacts.value[0],
          errors: firstContactErrors.value,
          "onUpdate:modelValue": saveContact,
          "hide-bottom-space": ""
        }, null, 8, ["candidate-id", "model-value", "errors"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title" }, "Datos del Contacto", -1)),
          createVNode(QTable, {
            bordered: "",
            flat: "",
            columns: columns.value,
            rows: contacts.value
          }, {
            "body-cell-actions": withCtx((props2) => [
              createVNode(QTd, { class: "text-right" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "edit",
                    onClick: ($event) => setContact(contacts.value[props2.rowIndex])
                  }, null, 8, ["onClick"]),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "delete",
                    onClick: ($event) => removeContact(contacts.value[props2.rowIndex])
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows"])
        ], 64)),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, null, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      "candidate-id": props.candidateId,
                      "model-value": contact.value,
                      "onUpdate:modelValue": saveContact
                    }, null, 8, ["candidate-id", "model-value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(QBtn, {
            color: "primary",
            icon: "add",
            onClick: _cache[1] || (_cache[1] = ($event) => addContact())
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Agregar nuevo contacto")
            ])),
            _: 1
          })
        ])
      ], 64);
    };
  }
};
const _hoisted_1$1 = { class: "form-section" };
const _hoisted_2$1 = { class: "flex justify-end" };
const _sfc_main$1 = {
  __name: "MedicationsPage",
  props: {
    errors: { type: Object, required: false, default: () => ({}) },
    candidateId: { type: Number, required: false, default: null },
    modelValue: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const loading = ref(false);
    const localMedications = ref([...props.modelValue]);
    watch(() => props.modelValue, (newValue) => {
      localMedications.value = newValue;
    }, { deep: true });
    watch(() => localMedications.value, (newValue) => {
      emits("update:modelValue", newValue);
    }, { deep: true });
    const medication = reactive({
      name: "",
      dose: "",
      frequency: "",
      duration: ""
    });
    function addMedication() {
      medication.name = "";
      medication.dose = "";
      medication.frequency = "";
      medication.duration = "";
      medication.observations = "";
      localMedications.value.push({ ...medication });
    }
    async function saveMedication(med) {
      try {
        loading.value = true;
        let route = med.id ? `/medications/${med.id}` : "medications";
        let data = { ...med, _method: med.id ? "PUT" : "POST", candidate_id: props.candidateId };
        let response = (await api.post(route, data)).data.data;
        localMedications.value.splice(localMedications.value.indexOf(med), 1, response);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    async function deleteMedication(med) {
      if (!med.id) {
        localMedications.value.splice(localMedications.value.indexOf(med, 1), 1);
        return;
      }
      try {
        loading.value = true;
        await api.post(`medications/${med.id}`, { "_method": "DELETE" });
        localMedications.value.splice(localMedications.value.indexOf(med), 1);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    const columns = ref([
      {
        name: "name",
        field: "name",
        label: "Nombre del medication",
        align: "left"
      },
      { name: "dosis", field: "dose", label: "Dosis", align: "left" },
      {
        name: "frecuencia",
        field: "frequency",
        label: "Frecuencia",
        align: "left"
      },
      {
        name: "tiempo",
        field: "duration",
        label: "Tiempo de tomarlo",
        align: "left"
      },
      {
        name: "observaciones",
        field: () => "Lörem ipsum orade kövis då antivaxxare. Sanys infrafede de stenosamma plagen. ",
        label: "Observaciones",
        align: "left"
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "page-title" }, "Tabla de Medicamentos", -1)),
        createVNode(QTable, {
          class: "q-mb-lg",
          "hide-bottom": "",
          "wrap-cells": "",
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: localMedications.value,
          pagination: { rowsPerPage: 0 }
        }, {
          body: withCtx((props2) => [
            createVNode(QTr, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: Paracetamol",
                      modelValue: props2.row.name,
                      "onUpdate:modelValue": ($event) => props2.row.name = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.name`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.name`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 500 mg",
                      modelValue: props2.row.dose,
                      "onUpdate:modelValue": ($event) => props2.row.dose = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.dose`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.dose`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 2 Veces al dia",
                      modelValue: props2.row.frequency,
                      "onUpdate:modelValue": ($event) => props2.row.frequency = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.frequency`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.frequency`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 1 Semana",
                      modelValue: props2.row.duration,
                      "onUpdate:modelValue": ($event) => props2.row.duration = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.duration`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.duration`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      type: "textarea",
                      outlined: "",
                      modelValue: props2.row.observations,
                      "onUpdate:modelValue": ($event) => props2.row.observations = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "delete",
                      onClick: ($event) => deleteMedication(props2.row)
                    }, null, 8, ["onClick"]),
                    __props.candidateId ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      flat: "",
                      round: "",
                      icon: "save",
                      onClick: ($event) => saveMedication(props2.row)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(QBtn, {
            color: "primary",
            icon: "add",
            onClick: addMedication
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" Agregar Medicamento ")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "form-section" };
const _hoisted_2 = { class: "row q-col-gutter-lg" };
const _hoisted_3 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_4 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_5 = { class: "form-section" };
const _hoisted_6 = { class: "row" };
const _hoisted_7 = { class: "col-12 col-md-7" };
const _hoisted_8 = { class: "flex" };
const _hoisted_9 = { class: "form-section" };
const _hoisted_10 = { class: "form-section" };
const _hoisted_11 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_12 = { class: "col-12 col-md-4" };
const _hoisted_13 = { class: "col-12 col-md-2" };
const _hoisted_14 = { class: "row items-center justify-end" };
const _hoisted_15 = { class: "col-12 col-md-2" };
const _hoisted_16 = { class: "row items-center justify-end" };
const _hoisted_17 = { class: "q-pl-md q-mt-none" };
const _hoisted_18 = { style: { "font-family": "monospace", "margin-right": "1rem" } };
const _hoisted_19 = { style: { "font-family": "monospace" } };
const _hoisted_20 = { class: "form-section" };
const _hoisted_21 = { class: "flex q-gutter-x-md q-mb-lg" };
const _hoisted_22 = { class: "flex q-gutter-x-md" };
const _hoisted_23 = { class: "form-section" };
const _hoisted_24 = { class: "row" };
const _hoisted_25 = { class: "col-12 col-md-4" };
const _hoisted_26 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "CandidateForm",
  props: ["candidateId"],
  setup(__props) {
    const router = useRouter();
    const props = __props;
    onMounted(async () => {
      evaluators.value = (await api.get("evaluators")).data.data;
      if (props.candidateId) {
        candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
        medications.value = candidate.value.medications;
        evaluation_schedule.value = candidate.value.evaluation_schedule ? candidate.value.evaluation_schedule : evaluation_schedule.value;
        evaluation_schedules.value = candidate.value.evaluation_schedules ? candidate.value.evaluation_schedules : [];
      }
      let datetime = DateTime.fromFormat(evaluation_schedule.value.date, "yyyy-MM-dd HH:mm:ss");
      evaluationDate.value = datetime.toFormat("dd/MM/yyyy");
      evaluationTime.value = datetime.toFormat("HH:mm");
    });
    function loadData() {
      let foreignColumns = ["first_name", "middle_name", "last_name", "birth_date", "info_channel", "diagnosis", "sheet"];
      let formdata = new FormData();
      if (candidate.value.id) {
        formdata.append("_method", "PUT");
      }
      Object.keys(candidate.value).forEach((attr) => {
        if (foreignColumns.includes(attr)) {
          formdata.append(`candidate[${attr}]`, candidate.value[attr]);
        }
      });
      evaluation_schedule.value.date = fulldatetime.value;
      Object.keys(evaluation_schedule.value).forEach((attr) => {
        let value = evaluation_schedule.value[attr] === null ? "" : evaluation_schedule.value[attr];
        formdata.append(`evaluation_schedule[${attr}]`, value);
      });
      contacts.value.forEach((contact, i) => {
        Object.keys(contact).forEach((contactAttr) => {
          formdata.append(`contacts[${i}][${contactAttr}]`, contacts.value[i][contactAttr] ? contacts.value[i][contactAttr] : "");
        });
      });
      medications.value.forEach((med, i) => {
        Object.keys(med).forEach((medKey) => {
          formdata.append(`medications[${i}][${medKey}]`, medications.value[i][medKey]);
        });
      });
      formdata.append("picture", picture.value);
      return formdata;
    }
    async function storeCandidate() {
      loading.value = true;
      errors.value = {};
      try {
        let endpoint = candidate.value.id ? `candidates/${candidate.value.id}` : "candidates";
        await api.post(endpoint, loadData());
        notify.positive("Guardado con éxito");
        setTimeout(() => router.push("/candidatos"), 3e3);
      } catch (error) {
        errors.value = error.status == 422 ? error.formatted : {};
        notify.negative("Por favor, valide la informacion");
        nextTick(() => scrollToFirstError());
      }
      loading.value = false;
    }
    const loading = ref(false);
    const errors = ref({});
    const evaluationDate = ref(null);
    const evaluationTime = ref(null);
    const fulldatetime = computed(() => {
      let newDate = DateTime.fromFormat(evaluationDate.value + " " + evaluationTime.value, "dd/MM/yyyy HH:mm");
      return newDate.toFormat("yyyy-MM-dd HH:mm:ss");
    });
    const infoChannels = ref(["Publicidad impresa", "Publicidad en radio", "Recomendación de escuela", "Recomendación de personal médico", "Recomendación de otra persona", "Otro"]);
    const evaluation_schedules = ref([]);
    const candidate = ref({ id: null, first_name: "", middle_name: "", last_name: "", birth_date: null, age: null, chronological_age: null, diagnosis: "", info_channel: infoChannels.value[infoChannels.value.length - 1], sheet: 1 });
    const contacts = ref([]);
    const medications = ref([]);
    const evaluators = ref([]);
    const evaluation_schedule = ref({ evaluator_id: null, date: DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss") });
    const picture = ref(null);
    const recepient = ref({ name: "", phone: "" });
    const age = computed(() => {
      if (!candidate.value.birth_date) {
        return null;
      }
      let birth_date = DateTime.fromISO(candidate.value.birth_date);
      let now = DateTime.now();
      let diff = now.diff(birth_date, ["years", "months", "days"]);
      let dateString = diff.years ? `${diff.years} años` : "";
      dateString += diff.months ? ` ${Math.floor(diff.months)} meses` : "";
      dateString += diff.days ? ` ${Math.floor(diff.days)} días` : "";
      return dateString;
    });
    const chronological_age = computed(() => {
      if (!candidate.value.birth_date) {
        return null;
      }
      let birth_date = DateTime.fromISO(candidate.value.birth_date);
      let now = DateTime.now();
      let diff = now.diff(birth_date, "months");
      return `${Math.floor(diff.months)} meses`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "page-title" }, "Datos del Candidato", -1)),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Nombre (s)",
                  modelValue: candidate.value.first_name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidate.value.first_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.first_name"],
                  "error-message": errors.value["candidate.first_name"]
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Apellido Paterno",
                  modelValue: candidate.value.last_name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => candidate.value.last_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.last_name"],
                  "error-message": errors.value["candidate.last_name"]
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Apellido Materno",
                  modelValue: candidate.value.middle_name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => candidate.value.middle_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.middle_name"],
                  "error-message": errors.value["candidate.middle_name"]
                }, null, 8, ["modelValue", "error", "error-message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Fecha de Nacimiento",
                  modelValue: candidate.value.birth_date,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => candidate.value.birth_date = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.birth_date"],
                  "error-message": errors.value["candidate.birth_date"],
                  type: "date"
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  readonly: "",
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Edad",
                  modelValue: age.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => age.value = $event),
                  modelModifiers: { number: true }
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  readonly: "",
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Edad Cronológica*",
                  modelValue: chronological_age.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => chronological_age.value = $event)
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          createVNode(_sfc_main$2, {
            candidateId: __props.candidateId,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = (newContacts) => contacts.value = [...newContacts]),
            errors: errors.value
          }, null, 8, ["candidateId", "errors"]),
          createBaseVNode("div", _hoisted_5, [
            _cache[21] || (_cache[21] = createBaseVNode("div", { class: "page-title" }, "¿Dónde obtuvo la información del Instituto?", -1)),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(infoChannels.value, (channel) => {
                    return openBlock(), createBlock(QRadio, {
                      key: channel,
                      label: channel,
                      val: channel,
                      modelValue: candidate.value.info_channel,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => candidate.value.info_channel = $event)
                    }, null, 8, ["label", "val", "modelValue"]);
                  }), 128))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "page-title" }, "Información Médica del Candidato", -1)),
            createVNode(QInput, {
              type: "textarea",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Diagnostico Médico / Síntomas *",
              modelValue: candidate.value.diagnosis,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => candidate.value.diagnosis = $event),
              error: !!errors.value["candidate.diagnosis"],
              "error-message": errors.value["candidate.diagnosis"]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createVNode(_sfc_main$1, {
            modelValue: medications.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => medications.value = $event),
            candidateId: candidate.value.id,
            errors: errors.value
          }, null, 8, ["modelValue", "candidateId", "errors"]),
          createBaseVNode("div", _hoisted_10, [
            _cache[23] || (_cache[23] = createBaseVNode("div", { class: "page-title" }, "Programar Evaluación", -1)),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(QSelect, {
                  outlined: "",
                  "stack-label": "",
                  label: "Seleccione Evaluador",
                  options: evaluators.value,
                  modelValue: evaluation_schedule.value.evaluator_id,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => evaluation_schedule.value.evaluator_id = $event),
                  "emit-value": "",
                  "option-label": "name",
                  "option-value": "id",
                  "map-options": "",
                  error: !!errors.value["evaluation_schedule.evaluator_id"],
                  "error-message": errors.value["evaluation_schedule.evaluator_id"]
                }, null, 8, ["options", "modelValue", "error", "error-message"])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  modelValue: evaluationDate.value,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => evaluationDate.value = $event),
                  class: "q-field--required",
                  label: "Seleccione fecha"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "event",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(QPopupProxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(QDate, {
                              modelValue: evaluationDate.value,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => evaluationDate.value = $event),
                              mask: "DD/MM/YYYY"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_14, [
                                  withDirectives(createVNode(QBtn, {
                                    label: "Cerrar",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  modelValue: evaluationTime.value,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => evaluationTime.value = $event),
                  class: "q-field--required",
                  label: "Horario"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "access_time",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(QPopupProxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(QTime, {
                              modelValue: evaluationTime.value,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => evaluationTime.value = $event)
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_16, [
                                  withDirectives(createVNode(QBtn, {
                                    label: "Cerrar",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            _cache[24] || (_cache[24] = createBaseVNode("div", { class: "subtitle" }, "Historial de Evaluaciones Re-programadas", -1)),
            createBaseVNode("ul", _hoisted_17, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(evaluation_schedules.value, (schedule) => {
                return openBlock(), createElementBlock("li", {
                  class: "q-py-md",
                  key: schedule.id
                }, [
                  createBaseVNode("span", _hoisted_18, toDisplayString(schedule.date), 1),
                  createBaseVNode("span", _hoisted_19, toDisplayString(schedule.evaluator.name), 1)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            _cache[27] || (_cache[27] = createBaseVNode("div", { class: "page-title" }, "Herramientas Adicionales", -1)),
            _cache[28] || (_cache[28] = createBaseVNode("div", { class: "subtitle q-my-md" }, "Envío de Formato Inicial por WhatsApp", -1)),
            createBaseVNode("div", _hoisted_21, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre de la persona",
                type: "text",
                modelValue: recepient.value.name,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => recepient.value.name = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Celular",
                type: "tel",
                mask: "##########",
                modelValue: recepient.value.phone,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => recepient.value.phone = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                style: { "width": "100px", "height": "48px", "align-self": "flex-end" },
                color: "primary"
              }, {
                default: withCtx(() => _cache[25] || (_cache[25] = [
                  createTextVNode("Enviar")
                ])),
                _: 1
              })
            ]),
            _cache[29] || (_cache[29] = createBaseVNode("div", { class: "subtitle q-my-md" }, "Envío de Encuesta de Satisfacción", -1)),
            createBaseVNode("div", _hoisted_22, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre de la persona",
                type: "text",
                modelValue: recepient.value.name,
                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => recepient.value.name = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Celular",
                type: "tel",
                mask: "##########",
                modelValue: recepient.value.phone,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => recepient.value.phone = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                style: { "width": "100px", "height": "48px", "align-self": "flex-end" },
                color: "primary"
              }, {
                default: withCtx(() => _cache[26] || (_cache[26] = [
                  createTextVNode("Enviar")
                ])),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            _cache[30] || (_cache[30] = createBaseVNode("div", { class: "subtitle q-mb-md" }, "Foto del candidato", -1)),
            createBaseVNode("div", _hoisted_24, [
              candidate.value.picture ? (openBlock(), createBlock(QAvatar, {
                key: 0,
                size: "64px",
                rounded: "",
                class: "q-mr-sm"
              }, {
                default: withCtx(() => [
                  createVNode(QImg, {
                    src: candidate.value.picture
                  }, null, 8, ["src"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_25, [
                createVNode(QFile, {
                  outlined: "",
                  "stack-label": "",
                  label: "Adjuntar archivo",
                  icon: "attach",
                  modelValue: picture.value,
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => picture.value = $event)
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "attachment" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createVNode(QBtn, {
              loading: loading.value,
              color: "primary",
              onClick: storeCandidate
            }, {
              default: withCtx(() => _cache[31] || (_cache[31] = [
                createTextVNode(" Guardar ")
              ])),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
