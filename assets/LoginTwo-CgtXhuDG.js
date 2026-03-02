import { Q as QImg } from "./QImg-BntzgVKX.js";
import { G as useAuthStore, r as ref, o as onMounted, P as createElementBlock, _ as createBaseVNode, K as createVNode, J as withCtx, ap as withModifiers, Z as resolveComponent, I as openBlock, al as QInput, O as unref, V as QBtn, N as createTextVNode, Q as QIcon } from "./index-jjbrZD2b.js";
import { Q as QForm } from "./QForm-o24Un34o.js";
import { _ as _imports_0 } from "./logo_white-BH37Hy5F.js";
import { n as notify } from "./notify--3o81CEj.js";
const _hoisted_1 = { class: "row login-row" };
const _hoisted_2 = { class: "col-12 col-md-6 login-brand-column" };
const _hoisted_3 = { class: "col-12 col-md-6 flex items-center q-pa-md login-form-column" };
const _hoisted_4 = { class: "flex q-py-md" };
const _sfc_main = {
  __name: "LoginTwo",
  setup(__props) {
    const authStore = useAuthStore();
    const employee_number = ref(null);
    onMounted(() => authStore.csrfCookie());
    async function attemptLogin() {
      try {
        await authStore.attemptLogin({ employee_number: employee_number.value });
      } catch (error) {
        if (!error.formatted) {
          notify.negative("Error al intentar ingresar");
        }
      }
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QImg, {
            src: _imports_0,
            "spinner-color": "white",
            style: { "max-width": "260px" }
          })
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", null, [
            _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "title" }, "ENLAC", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "subtitle q-pb-lg" }, "Ingresa tu Número de Empleado:", -1)),
            createVNode(QForm, {
              onSubmit: withModifiers(attemptLogin, ["prevent"]),
              class: "q-gutter-y-lg"
            }, {
              default: withCtx(() => [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  label: "Número",
                  modelValue: employee_number.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => employee_number.value = $event),
                  "hide-bottom-space": "",
                  class: "employee-number-input",
                  error: !!unref(authStore).errors.email,
                  "error-message": "Código de empleado inválido",
                  clearable: "",
                  type: "number"
                }, null, 8, ["modelValue", "error"]),
                createVNode(QBtn, {
                  unelevated: "",
                  color: "primary",
                  label: "Ingresar",
                  type: "submit",
                  loading: unref(authStore).loading
                }, null, 8, ["loading"])
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_router_link, {
                to: "/login",
                class: "back-link"
              }, {
                default: withCtx(() => [
                  createVNode(QIcon, {
                    name: "arrow_back",
                    size: "xs",
                    class: "q-mr-sm"
                  }),
                  _cache[1] || (_cache[1] = createTextVNode(" Regresar "))
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
