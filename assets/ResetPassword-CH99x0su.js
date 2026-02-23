import { l as api, p as useRoute, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, m as QCard, f as resolveComponent, n as QCardSection, k as QIcon, Q as QInput, h as QBtn } from "./index-vLy8_pvK.js";
import { Q as QForm } from "./QForm-D3Cct3Sa.js";
import { _ as _imports_0 } from "./logo_white-BH37Hy5F.js";
import { n as notify } from "./notify-DeHCx5VC.js";
const _hoisted_1 = { class: "row login-row" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-center login-form-column" };
const _sfc_main = {
  __name: "ResetPassword",
  setup(__props) {
    const baseUrl = new URL(api.defaults.baseURL).origin;
    const route = useRoute();
    var { token, email } = route.query;
    const newPassword = ref("");
    const confirmPassword = ref("");
    const loading = ref(false);
    const submitForm = async () => {
      if (!newPassword.value || !confirmPassword.value || !token || !email) return;
      let data = {
        token,
        email,
        password: newPassword.value,
        password_confirmation: confirmPassword.value
      };
      try {
        loading.value = true;
        await api.post(`${baseUrl}/reset-password`, data);
        notify.positive("Contraseña restablecida correctamente");
        newPassword.value = "";
        confirmPassword.value = "";
        token = "";
        email = "";
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[4] || (_cache[4] = createBaseVNode("div", { class: "col-12 col-md-6 login-brand-column" }, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createVNode(QCard, { flat: "" }, {
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
                  _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "title" }, "ENLAC", -1)),
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "subtitle" }, "Restablecer Contraseña", -1))
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(QForm, {
                    onSubmit: submitForm,
                    class: "q-gutter-y-md"
                  }, {
                    default: withCtx(() => [
                      createVNode(QInput, {
                        modelValue: newPassword.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newPassword.value = $event),
                        label: "Nueva Contraseña",
                        "stack-label": "",
                        outlined: "",
                        type: "password",
                        rules: [(val) => val.length >= 8 || "Debe tener al menos 8 caracteres"],
                        clearable: "",
                        "hide-bottom-space": ""
                      }, null, 8, ["modelValue", "rules"]),
                      createVNode(QInput, {
                        modelValue: confirmPassword.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => confirmPassword.value = $event),
                        label: "Confirmar Contraseña",
                        "stack-label": "",
                        outlined: "",
                        type: "password",
                        rules: [(val) => val === newPassword.value || "Las contraseñas deben coincidir"],
                        clearable: "",
                        "hide-bottom-space": ""
                      }, null, 8, ["modelValue", "rules"]),
                      createVNode(QBtn, {
                        label: "Restablecer Contraseña",
                        color: "primary",
                        class: "full-width q-mt-md",
                        type: "submit"
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
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
