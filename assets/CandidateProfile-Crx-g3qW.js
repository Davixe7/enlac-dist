import { Q as QImg } from "./QImg-D_LRyYx-.js";
import { Q as QInput } from "./QCheckbox-3hjpgU3N.js";
import { i as QSelect } from "./QList-Dq4JXP21.js";
import { Q as QRadio } from "./QRadio-Cmy-fFx8.js";
import { _ as defineStore, b as onMounted, r as ref, e as createElementBlock, i as openBlock, k as createVNode, j as createBaseVNode, u as unref, m as createTextVNode, a9 as toDisplayString } from "./index-DWL17PYf.js";
import { api } from "./axios-eEqpDAX4.js";
const useCandidateStore = defineStore("candidate", {
  state: () => ({
    id: null,
    full_name: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    birth_date: null,
    age: null,
    chronological_age: null,
    diagnosis: "",
    info_channel: null,
    sheet: 1,
    loading: false,
    contacts: [],
    interviewee: {},
    errors: {}
  }),
  actions: {
    async fetchCandidate() {
      if (!this.id) return;
      let data = (await api.get(`candidates/${this.id}`)).data.data;
      this.$patch(data);
    }
  }
});
const _hoisted_1 = {
  class: "flex",
  style: { "margin-bottom": "65px" }
};
const _hoisted_2 = { class: "flex column justify-between q-px-md" };
const _hoisted_3 = { class: "flex column justify-between q-px-md q-gutter-y-md" };
const _hoisted_4 = { style: { "margin-left": "-8px" } };
const _sfc_main = {
  __name: "CandidateProfile",
  props: {
    candidateId: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const store = useCandidateStore();
    onMounted(async () => {
      if (!props.candidateId) {
        return;
      }
    });
    const errors = ref({});
    const relationships = [
      { label: "Abuelo(a)", value: "abuelo" },
      { label: "Cuñado(a)", value: "cunado" },
      { label: "Esposo(a)", value: "esposo" },
      { label: "Hermano(a)", value: "hermano" },
      { label: "Hijo(a)", value: "hijo" },
      { label: "Hermanastro(a)", value: "hermanastro" },
      { label: "Madre/Padre", value: "madre_padre" },
      { label: "Nieto(a)", value: "nieto" },
      { label: "Padrastro/Madrastra", value: "padrastro_madrastra" },
      { label: "Pareja", value: "pareja" },
      { label: "Primo(a)", value: "primo" },
      { label: "Sobrino(a)", value: "sobrino" },
      { label: "Suegro(a)", value: "suegro" },
      { label: "Tío(a)", value: "tio" },
      { label: "Yerno/Nuera", value: "yerno_nuera" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QImg, {
          width: "174px",
          height: "169px",
          color: "grey",
          class: "bg-grey-4",
          style: { "margin-right": "20px" },
          src: unref(store).picture
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            _cache[4] || (_cache[4] = createBaseVNode("label", { class: "text-weight-bold" }, "Nombre:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).full_name), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("label", { class: "text-weight-bold" }, "Fecha:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).birth_date), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[6] || (_cache[6] = createBaseVNode("label", { class: "text-weight-bold" }, "Edad cronologica", -1)),
            createTextVNode(" " + toDisplayString(unref(store).chronological_age) + " meses ", 1)
          ]),
          createBaseVNode("div", null, [
            _cache[7] || (_cache[7] = createBaseVNode("label", { class: "text-weight-bold" }, "Folio:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).sheet), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", null, [
            createVNode(QInput, {
              label: "Nombre del entrevistado",
              outlined: "",
              "stack-label": "",
              modelValue: unref(store).interviewee.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(store).interviewee.name = $event),
              error: errors.value.name,
              "error-message": errors.value.name
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", null, [
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Parentesco",
              modelValue: unref(store).interviewee.relationship,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(store).interviewee.relationship = $event),
              error: !!errors.value.relationship,
              "error-message": errors.value.relationship,
              options: relationships,
              "emit-value": ""
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QRadio, {
              modelValue: unref(store).interviewee.legal_relationship,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(store).interviewee.legal_relationship = $event),
              val: "biologico",
              label: "Hijo Biológico",
              class: "q-mr-md"
            }, null, 8, ["modelValue"]),
            createVNode(QRadio, {
              modelValue: unref(store).interviewee.legal_relationship,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(store).interviewee.legal_relationship = $event),
              val: "adoptivo",
              label: "Hijo Adoptivo"
            }, null, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _,
  useCandidateStore as u
};
