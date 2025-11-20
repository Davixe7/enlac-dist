import { Q as QImg } from "./QImg-DKYrHYl6.js";
import { o as onMounted, r as ref, c as createElementBlock, a as openBlock, d as createVNode, b as createBaseVNode, E as createCommentVNode, g as unref, j as createTextVNode, t as toDisplayString, Q as QInput, L as QRadio } from "./index-Dk-vfK7v.js";
import { Q as QSelect } from "./QSelect-BW1ZBX55.js";
import { u as useCandidateStore } from "./candidate-store-BJ5zmJy6.js";
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
            _cache[8] || (_cache[8] = createBaseVNode("label", { class: "text-weight-bold" }, "Edad cronológica ", -1)),
            createTextVNode(" " + toDisplayString(unref(store).chronological_age2) + " años ", 1)
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
  _sfc_main as _
};
