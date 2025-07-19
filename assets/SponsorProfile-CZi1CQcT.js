import { Q as QImg } from "./QImg-BqXmW5pJ.js";
import { r as ref, o as onMounted, i as api, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, t as toDisplayString } from "./index-SPihmL4j.js";
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
const _hoisted_11 = { class: "form-group" };
const _hoisted_12 = { class: "form-value" };
const _sfc_main = {
  __name: "SponsorProfile",
  props: ["sponsorId"],
  setup(__props) {
    const props = __props;
    const sponsor = ref({});
    onMounted(async () => {
      sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QImg, {
            color: "grey",
            width: "100%",
            height: "100%",
            style: { "background": "lightgrey" }
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "form-label" }, "Nombre del Padrino", -1)),
              createBaseVNode("div", _hoisted_6, toDisplayString(sponsor.value.full_name), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "form-label" }, "Razón o Denominación Social", -1)),
              createBaseVNode("div", _hoisted_8, toDisplayString(sponsor.value.company_name), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "form-label" }, "Fecha de Nacimiento", -1)),
              createBaseVNode("div", _hoisted_10, toDisplayString(sponsor.value.birthdate), 1)
            ]),
            createBaseVNode("div", _hoisted_11, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "form-label" }, "Estado Civil", -1)),
              createBaseVNode("div", _hoisted_12, toDisplayString(sponsor.value.marital_status), 1)
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
