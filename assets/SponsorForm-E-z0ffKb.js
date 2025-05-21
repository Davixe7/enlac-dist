import { Q as QCard, a as QCardSection } from "./QCard-DUVQfyQw.js";
import { Q as QInput } from "./QInput-BgFiysGV.js";
import { Q as QSelect } from "./QSelect-gGbryZRL.js";
import { r as ref, j as onMounted, F as createBlock, G as openBlock, H as withCtx, K as createVNode, L as createBaseVNode, am as withModifiers, P as unref, N as QBtn, M as createTextVNode } from "./index-Do2UNGkK.js";
import { Q as QForm } from "./QForm-3KD2SpBK.js";
import { api } from "./axios--LrLQM_c.js";
import { u as useSponsorStore } from "./sponsor-store-AuREKALo.js";
import "./use-dark-DR5cwYKQ.js";
import "./use-key-composition-Cb3U_Tha.js";
import "./QItemLabel-WLy9p-qo.js";
import "./selection-r0vkVvJb.js";
import "./use-timeout-CzOVVImI.js";
import "./notify-Bh-ZzP7n.js";
const _hoisted_1 = { class: "flex" };
const _sfc_main = {
  __name: "SponsorForm",
  props: ["sponsorId"],
  setup(__props) {
    const store = useSponsorStore();
    const errors = store.errors;
    const props = __props;
    const maritalStatusOptions = [
      { label: "Soltero(a)", value: "Soltero(a)" },
      { label: "Casado(a)", value: "Casado(a)" },
      { label: "Divorciado(a)", value: "Divorciado(a)" },
      { label: "Viudo(a)", value: "Viudo(a)" },
      { label: "Unión Libre", value: "Union Libre" }
    ];
    const sponsor = ref({
      name: "",
      last_name: "",
      second_last_name: "",
      company_name: null,
      birthdate: "",
      marital_status: null
    });
    onMounted(async () => {
      if (!props.sponsorId) return;
      sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        style: { "width": "440px" },
        bordered: "",
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => _cache[7] || (_cache[7] = [
              createBaseVNode("div", {
                class: "page-title",
                style: { "margin-bottom": "0 !important" }
              }, "Formato de Padrino / Madrina", -1)
            ])),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QForm, {
                onSubmit: _cache[6] || (_cache[6] = withModifiers(($event) => unref(store).saveData(sponsor.value), ["prevent"])),
                class: "q-gutter-y-lg"
              }, {
                default: withCtx(() => [
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Nombre(s)",
                    modelValue: sponsor.value.name,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sponsor.value.name = $event),
                    "hide-bottom-space": "",
                    error: !!unref(errors).name,
                    "error-message": unref(errors).name
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Apellido paterno",
                    modelValue: sponsor.value.last_name,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sponsor.value.last_name = $event),
                    "hide-bottom-space": "",
                    error: !!unref(errors).last_name,
                    "error-message": unref(errors).last_name
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Apellido materno",
                    modelValue: sponsor.value.second_last_name,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sponsor.value.second_last_name = $event),
                    "hide-bottom-space": "",
                    error: !!unref(errors).second_last_name,
                    "error-message": unref(errors).second_last_name
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Razón social",
                    modelValue: sponsor.value.company_name,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sponsor.value.company_name = $event),
                    "hide-bottom-space": "",
                    error: !!unref(errors).company_name,
                    "error-message": unref(errors).company_name
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Fecha de nacimiento",
                    modelValue: sponsor.value.birthdate,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sponsor.value.birthdate = $event),
                    mask: "####-##-##",
                    type: "date",
                    "hide-bottom-space": "",
                    error: !!unref(errors).birthdate,
                    "error-message": unref(errors).birthdate
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createVNode(QSelect, {
                    outlined: "",
                    "stack-label": "",
                    label: "Estado civil",
                    modelValue: sponsor.value.marital_status,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sponsor.value.marital_status = $event),
                    options: maritalStatusOptions,
                    "hide-bottom-space": "",
                    "emit-value": "",
                    "map-options": "",
                    error: !!unref(errors).marital_status,
                    "error-message": unref(errors).marital_status
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createBaseVNode("div", _hoisted_1, [
                    createVNode(QBtn, {
                      type: "submit",
                      color: "primary",
                      loading: unref(store).loading,
                      class: "q-ml-auto"
                    }, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode(" Guardar")
                      ])),
                      _: 1
                    }, 8, ["loading"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
