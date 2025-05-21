import { Q as QImg } from "./QImg-CSzy5wcK.js";
import { Q as QInput } from "./QInput-BgFiysGV.js";
import { Q as QSelect } from "./QSelect-gGbryZRL.js";
import { Q as QRadio } from "./QRadio-CUireVVM.js";
import { ao as defineStore, j as onMounted, r as ref, U as createElementBlock, G as openBlock, K as createVNode, L as createBaseVNode, O as createCommentVNode, P as unref, M as createTextVNode, R as toDisplayString } from "./index-Do2UNGkK.js";
import { api } from "./axios--LrLQM_c.js";
const farClosedCaptioning = "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V118c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-211.1-85.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7zm190.4 0c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.9-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 220.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6 2.8-2.5 7.1-2.1 9.2.9l19.6 27.7z|0 0 512 512";
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
    loading: farClosedCaptioning,
    contacts: [],
    picture: null,
    evaluation_schedule: null,
    interviewee: {},
    errors: {}
  }),
  actions: {
    async fetchCandidate() {
      if (!this.id) return;
      try {
        this.loading = true;
        let data = (await api.get(`candidates/${this.id}`)).data.data;
        this.$patch(data);
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    }
  }
});
const _hoisted_1 = {
  class: "flex",
  style: { "margin-bottom": "65px" }
};
const _hoisted_2 = { class: "flex column justify-between q-px-md" };
const _hoisted_3 = {
  key: 0,
  class: "flex column justify-between q-px-md q-gutter-y-md"
};
const _hoisted_4 = { style: { "margin-left": "-8px" } };
const _hoisted_5 = {
  key: 1,
  class: "flex column justify-between q-px-md q-gutter-y-md"
};
const _sfc_main = {
  __name: "CandidateProfile",
  props: {
    candidateId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "interview"
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(async () => {
      if (!props.candidateId) {
        return;
      }
      if (!store.full_name) {
        store.id = props.candidateId;
        store.fetchCandidate();
      }
    });
    const store = useCandidateStore();
    const errors = ref({});
    const relationships = [
      { label: "Abuelo(a)", value: "abuelo" },
      { label: "Hermano(a)", value: "hermano" },
      { label: "Hermanastro(a)", value: "hermanastro" },
      { label: "Madre/Padre", value: "madre_padre" },
      { label: "Padrastro/Madrastra", value: "padrastro_madrastra" },
      { label: "Primo(a)", value: "primo" },
      { label: "Tío(a)", value: "tio" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QImg, {
          width: "174px",
          height: "169px",
          color: "grey",
          class: "bg-grey-4",
          style: { "margin-right": "20px", "object-fit": "cover" },
          src: unref(store).picture
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            _cache[5] || (_cache[5] = createBaseVNode("label", { class: "text-weight-bold" }, "Nombre:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).full_name), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[6] || (_cache[6] = createBaseVNode("label", { class: "text-weight-bold" }, "Fecha:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).birth_date), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[7] || (_cache[7] = createBaseVNode("label", { class: "text-weight-bold" }, "Edad cronológica", -1)),
            createTextVNode(" " + toDisplayString(unref(store).chronological_age) + " meses ", 1)
          ]),
          createBaseVNode("div", null, [
            _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-weight-bold" }, "Folio:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).sheet), 1)
          ])
        ]),
        __props.type == "interview" ? (openBlock(), createElementBlock("div", _hoisted_3, [
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
              "emit-value": "",
              "map-options": ""
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
        ])) : unref(store).evaluation_schedule ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createVNode(QInput, {
            label: "Nombre del Evaluador",
            outlined: "",
            "stack-label": "",
            modelValue: unref(store).evaluation_schedule.evaluator.name,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(store).evaluation_schedule.evaluator.name = $event)
          }, null, 8, ["modelValue"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as _,
  useCandidateStore as u
};
