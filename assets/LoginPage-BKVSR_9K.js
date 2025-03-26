import { Q as QInput, a as QCheckbox } from "./QCheckbox-zqFzncTP.js";
import { c as createComponent, r as ref, o as onDeactivated, a as onActivated, b as onMounted, g as getCurrentInstance, h, d as hSlot, v as vmIsDestroyed, s as stopAndPrevent, n as nextTick, p as provide, f as formKey, e as createElementBlock, i as openBlock, j as createBaseVNode, k as createVNode, w as withCtx, l as withModifiers, u as unref, Q as QBtn, m as createTextVNode } from "./index-CZkFWdkm.js";
import { a as addFocusFn } from "./use-key-composition-D21ScK9P.js";
import { u as useAuthStore } from "./user-store-ByXvh9Ro.js";
import "./use-dark-CEqs_S-x.js";
import "./axios-8Xgxg1Su.js";
const QForm = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit(`validation${res === true ? "Success" : "Error"}`, ref2);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null) return;
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex !== -1);
        target !== null && target !== void 0 && target.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index !== -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
const _imports_0 = "/assets/logo_white-Bh4kAwXm.png";
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
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "subtitle" }, "Portal web para la administración y gestión", -1)),
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
                    _cache[5] || (_cache[5] = createBaseVNode("a", { href: "#" }, "¿Olvidó su contraseña?", -1))
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
