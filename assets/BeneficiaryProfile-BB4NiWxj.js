import { Q as QImg } from "./QImg-BYM3DPnR.js";
import { u as useCandidateStore } from "./candidate-store-XsB87pK3.js";
import { o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, g as unref, t as toDisplayString, x as createCommentVNode } from "./index-C2KXjwrR.js";
const _hoisted_1 = { class: "profile" };
const _hoisted_2 = { class: "profile__avatar" };
const _hoisted_3 = { class: "profile__content" };
const _hoisted_4 = { class: "form-row" };
const _hoisted_5 = { class: "form-group" };
const _hoisted_6 = { class: "form-value" };
const _hoisted_7 = { class: "form-group" };
const _hoisted_8 = { class: "form-value" };
const _hoisted_9 = { class: "form-group" };
const _hoisted_10 = { class: "form-value" };
const _hoisted_11 = { class: "form-row" };
const _hoisted_12 = { class: "form-group" };
const _hoisted_13 = {
  key: 0,
  class: "form-value"
};
const _hoisted_14 = { class: "form-group" };
const _hoisted_15 = {
  key: 0,
  class: "form-value",
  style: { "text-transform": "capitalize" }
};
const _hoisted_16 = { class: "form-group" };
const _hoisted_17 = { class: "form-value" };
const _sfc_main = {
  __name: "BeneficiaryProfile",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const candidateStore = useCandidateStore();
    const relationships = {
      abuelo: "Abuelo(a)",
      hermano: "Hermano(a)",
      hermanastro: "Hermanastro(a)",
      madre_padre: "Madre/Padre",
      padrastro_madrastra: "Padrastro/Madrastra",
      primo: "Primo(a)",
      tio: "Tío(a)"
    };
    onMounted(async () => {
      candidateStore.id = props.candidateId;
      candidateStore.fetchCandidate();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QImg, {
            color: "grey",
            width: "100%",
            height: "100%",
            style: { "background": "lightgrey" },
            src: unref(candidateStore).picture
          }, null, 8, ["src"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "form-label" }, "Nombre del beneficiario", -1)),
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(candidateStore).full_name), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "form-label" }, "Fecha de ingreso", -1)),
              createBaseVNode("div", _hoisted_8, toDisplayString(unref(candidateStore).onboard_at), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "form-label" }, "Folio", -1)),
              createBaseVNode("div", _hoisted_10, toDisplayString(unref(candidateStore).id), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "form-label" }, "Responsable del beneficiario", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(candidateStore).contact.first_name + " " + unref(candidateStore).contact.last_name), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_14, [
              _cache[4] || (_cache[4] = createBaseVNode("div", { class: "form-label" }, "Parentesco", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(relationships[unref(candidateStore).contact.relationship.toLowerCase()]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_16, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "form-label" }, "Programa", -1)),
              createBaseVNode("div", _hoisted_17, toDisplayString(unref(candidateStore).program?.name), 1)
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
