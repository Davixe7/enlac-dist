import { r as ref, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, K as withCtx, L as resolveComponent, Q as QIcon, P as QBtn } from "./index-cCQoerBE.js";
import { Q as QCard, a as QCardSection } from "./QCard-hZAF9mJo.js";
import { Q as QInput } from "./QInput-BzETij5i.js";
import { Q as QForm } from "./QForm-BEQZLlyt.js";
import { _ as _imports_0 } from "./logo_white-BH37Hy5F.js";
import { n as notify } from "./notify-DMNPTzhM.js";
import { api } from "./axios-ByMy53kN.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./use-dark-C8v3QwmZ.js";
import "./use-key-composition-Cm9vnODB.js";
import "./use-file-dom-props-DxWClpik.js";
const _hoisted_1 = { class: "row login-row" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-center login-form-column" };
const _hoisted_3 = { class: "flex q-pt-md" };
const _sfc_main = {
  __name: "ForgotPassword",
  setup(__props) {
    const loading = ref(false);
    const email = ref("");
    const baseUrl = new URL(api.defaults.baseURL).origin;
    const submitForm = async () => {
      if (!email.value) return;
      try {
        loading.value = true;
        await api.post(`${baseUrl}/forgot-password`, { email: email.value });
        notify.positive("Enlace de recuperación enviado");
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "col-12 col-md-6 login-brand-column" }, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(QCard, {
            unelevated: "",
            flat: ""
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(_component_router_link, { to: "/login" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: "arrow_back",
                        size: "32px"
                      })
                    ]),
                    _: 1
                  }),
                  _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "title" }, "ENLAC", -1)),
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "subtitle" }, " Olvidé mi contraseña ", -1))
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QForm, { onSubmit: submitForm }, {
                    default: withCtx(() => [
                      createVNode(QInput, {
                        "stack-label": "",
                        clearable: "",
                        bordered: "",
                        outlined: "",
                        modelValue: email.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
                        label: "Correo Electrónico",
                        type: "email",
                        rules: [(val) => !!val || "El correo es obligatorio"]
                      }, null, 8, ["modelValue", "rules"]),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QBtn, {
                          label: "Enviar Enlace",
                          color: "primary",
                          type: "submit"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04a4ec37"]]);
export {
  ForgotPassword as default
};
