import { r as ref, l as api, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, m as QCard, f as resolveComponent, n as QCardSection, k as QIcon, Q as QInput, h as QBtn } from "./index-BMx8ZhBX.js";
import { Q as QForm } from "./QForm-M_cI1vlI.js";
import { n as notify } from "./notify-DbcNKswI.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
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
            src: "src/assets/logo_white.png",
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
                  _cache[2] || (_cache[2] = createBaseVNode("div", { class: "subtitle" }, "Olvidé mi contraseña", -1))
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
const ForgotPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebb251cc"]]);
export {
  ForgotPassword as default
};
