import { Q as QInput } from "./QInput-wxw_kogA.js";
import { o as onMounted, r as ref, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, e as withModifiers, f as resolveComponent, u as unref, Q as QBtn, g as createTextVNode } from "./index-D6w-cXuQ.js";
import { Q as QCheckbox } from "./QCheckbox-BMnj2b1-.js";
import { Q as QForm } from "./QForm-BDWuRyxm.js";
import { _ as _imports_0 } from "./logo_white-BH37Hy5F.js";
import { u as useAuthStore } from "./user-store-CBPwkhCu.js";
import "./use-key-composition-BP8jtq2e.js";
import "./use-dark-3OGnIsE7.js";
import "./option-sizes-B3TZgULG.js";
import "./axios-DOaUvPJw.js";
const _hoisted_1 = { class: "row login-row" };
const _hoisted_2 = { class: "col-12 col-md-6 flex items-center q-pa-md login-form-column" };
const _hoisted_3 = { class: "flex justify-between items-center q-py-sm" };
const _sfc_main = {
  __name: "LoginPage",
  setup(__props) {
    onMounted(() => authStore.csrfCookie());
    const authStore = useAuthStore();
    const email = ref("");
    const password = ref("");
    const remeberme = ref(false);
    const showPassword = ref(false);
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[9] || (_cache[9] = createBaseVNode("div", { class: "col-12 col-md-6 login-brand-column" }, [
          createBaseVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            _cache[7] || (_cache[7] = createBaseVNode("h1", { class: "title" }, "ENLAC", -1)),
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "subtitle q-pb-lg" }, "Portal web para la administración y gestión", -1)),
            createBaseVNode("div", null, [
              createVNode(QForm, {
                class: "q-gutter-y-lg",
                onSubmit: _cache[4] || (_cache[4] = withModifiers(($event) => unref(authStore).attemptLogin({ email: email.value, password: password.value }), ["prevent"]))
              }, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Correo electrónico",
                    type: "email",
                    modelValue: email.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => email.value = $event),
                    "hide-bottom-space": "",
                    error: !!unref(authStore).errors.email,
                    "error-message": unref(authStore).errors.email
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Contraseña",
                    type: showPassword.value ? "text" : "password",
                    modelValue: password.value,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
                    "hide-bottom-space": "",
                    error: !!unref(authStore).errors.email,
                    "error-message": unref(authStore).errors.email
                  }, {
                    append: withCtx(() => [
                      createVNode(QBtn, {
                        onClick: _cache[1] || (_cache[1] = ($event) => showPassword.value = !showPassword.value),
                        flat: "",
                        round: "",
                        icon: !showPassword.value ? "visibility" : "visibility_off",
                        dense: ""
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }, 8, ["type", "modelValue", "error", "error-message"]),
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(QCheckbox, {
                      label: "Recuérdame",
                      modelValue: remeberme.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => remeberme.value = $event),
                      style: { "margin-left": "-10px" }
                    }, null, 8, ["modelValue"]),
                    createVNode(_component_router_link, { to: "/recuperar-contrasena" }, {
                      default: withCtx(() => _cache[5] || (_cache[5] = [
                        createTextVNode("¿Olvidó su contraseña?")
                      ])),
                      _: 1
                    })
                  ]),
                  createVNode(QBtn, {
                    unelevated: "",
                    loading: unref(authStore).loading,
                    color: "primary",
                    type: "submit"
                  }, {
                    default: withCtx(() => _cache[6] || (_cache[6] = [
                      createTextVNode("Iniciar sesión")
                    ])),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ])
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
