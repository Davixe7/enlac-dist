import { a as QCardSection, Q as QCard } from "./QCard-DUVQfyQw.js";
import { Q as QSelect } from "./QSelect-gGbryZRL.js";
import { Q as QInput } from "./QInput-BgFiysGV.js";
import { Q as QRadio } from "./QRadio-CUireVVM.js";
import { Q as QCheckbox } from "./QCheckbox-DXE74Rqj.js";
import { aV as storeToRefs, r as ref, a as computed, j as onMounted, F as createBlock, G as openBlock, H as withCtx, K as createVNode, L as createBaseVNode, am as withModifiers, e as withDirectives, P as unref, v as vShow, U as createElementBlock, W as renderList, V as Fragment, N as QBtn, M as createTextVNode, R as toDisplayString } from "./index-Do2UNGkK.js";
import { Q as QForm } from "./QForm-3KD2SpBK.js";
import { n as notify } from "./notify-Bh-ZzP7n.js";
import { api } from "./axios--LrLQM_c.js";
import { u as useSponsorStore } from "./sponsor-store-AuREKALo.js";
const _hoisted_1 = { class: "flex justify-end" };
const _hoisted_2 = { class: "flex justify-between" };
const _hoisted_3 = { class: "flex justify-between" };
const _hoisted_4 = { class: "flex justify-between" };
const _hoisted_5 = { class: "flex justify-between" };
const _hoisted_6 = { class: "flex justify-between" };
const _hoisted_7 = { class: "flex" };
const _sfc_main = {
  __name: "PaymentConfigForm",
  props: ["sponsorId", "candidateId", "paymentConfigId"],
  emits: ["requestSponsor"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const sponsorStore = useSponsorStore();
    const { sponsors } = storeToRefs(sponsorStore);
    const candidates = ref([]);
    const errors = ref({});
    const loading = ref(false);
    const paymentConfig = ref({
      sponsor_id: props.sponsorId ? props.sponsorId : null,
      candidate_id: props.candidateId ? props.candidateId : null,
      amount: 0,
      month_payday: 1,
      frequency: 1,
      address_type: "home",
      wants_pickup: false,
      wants_reminder: false,
      wants_deductable_receipt: false
    });
    async function saveData() {
      loading.value = true;
      try {
        let route = paymentConfig.value.id ? `/payment_configs/${paymentConfig.value.id}` : "/payment_configs";
        let data = paymentConfig.value.id ? { ...paymentConfig.value, _method: "PUT" } : { ...paymentConfig.value };
        await api.post(route, data);
        notify.positive("Guardado con éxito");
      } catch (error) {
        errors.value = error.status == 422 ? error.formatted : {};
        notify.negative("No se pudo guardar");
      }
      loading.value = false;
    }
    const frequencies = ref([
      { "label": "Mensual", "val": 1 },
      { "label": "Bimestral", "val": 2 },
      { "label": "Trimestral", "val": 3 },
      { "label": "Semestral", "val": 6 },
      { "label": "Anual", "val": 12 }
    ]);
    const yearlyAmount = computed(() => {
      return paymentConfig.value.amount * (12 / paymentConfig.value.frequency);
    });
    const monthlyAmount = computed(() => {
      return (yearlyAmount.value / 12).toFixed(2);
    });
    async function fetchCandidates() {
      candidates.value = (await api.get(`/candidates`)).data.data;
    }
    onMounted(async () => {
      await fetchCandidates();
      await sponsorStore.fetchSponsors();
      if (!props.paymentConfigId) return;
      paymentConfig.value = (await api.get(`/payment_configs/${props.paymentConfigId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, {
        style: { "width": "560px" },
        bordered: "",
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => _cache[11] || (_cache[11] = [
              createBaseVNode("div", {
                class: "page-title",
                style: { "margin-bottom": "0 !important" }
              }, "Configurar Ahijado(a)", -1)
            ])),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QForm, {
                onSubmit: _cache[10] || (_cache[10] = withModifiers(($event) => saveData(), ["prevent"])),
                class: "q-gutter-y-lg"
              }, {
                default: withCtx(() => [
                  createVNode(QSelect, {
                    disable: !!__props.sponsorId,
                    outlined: "",
                    "stack-label": "",
                    class: "q-field--required",
                    label: "Seleccione Padrino",
                    options: unref(sponsors),
                    modelValue: paymentConfig.value.sponsor_id,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => paymentConfig.value.sponsor_id = $event),
                    "emit-value": "",
                    "option-label": "name",
                    "option-value": "id",
                    "map-options": "",
                    "hide-bottom-space": ""
                  }, null, 8, ["disable", "options", "modelValue"]),
                  createBaseVNode("div", _hoisted_1, [
                    createBaseVNode("a", {
                      onClick: _cache[1] || (_cache[1] = withModifiers(() => emits("requestSponsor"), ["prevent"])),
                      style: { "font-size": ".8rem", "cursor": "pointer", "color": "var(--q-primary)", "margin-top": "-1rem" }
                    }, " Registrar nuevo ")
                  ]),
                  withDirectives(createVNode(QSelect, {
                    disable: !!__props.candidateId,
                    outlined: "",
                    "stack-label": "",
                    class: "q-field--required",
                    label: "Seleccione Ahijado",
                    options: candidates.value,
                    modelValue: paymentConfig.value.candidate_id,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => paymentConfig.value.candidate_id = $event),
                    "emit-value": "",
                    "option-label": "full_name",
                    "option-value": "id",
                    "map-options": ""
                  }, null, 8, ["disable", "options", "modelValue"]), [
                    [vShow, !__props.candidateId]
                  ]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    class: "q-field--required",
                    label: "Cantidad",
                    modelValue: paymentConfig.value.amount,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => paymentConfig.value.amount = $event),
                    "hide-bottom-space": "",
                    error: !!errors.value.amount,
                    "error-message": errors.value.amount
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createBaseVNode("div", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("label", {
                      class: "label q-field__label q-pb-sm",
                      style: { "display": "block" }
                    }, "Frecuencia del Donativo", -1)),
                    createBaseVNode("div", _hoisted_2, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(frequencies.value, (frequency) => {
                        return openBlock(), createElementBlock("div", {
                          key: frequency,
                          class: "flex column items-center"
                        }, [
                          createBaseVNode("div", null, toDisplayString(frequency.val), 1),
                          createVNode(QRadio, {
                            modelValue: paymentConfig.value.frequency,
                            "onUpdate:modelValue": ($event) => paymentConfig.value.frequency = $event,
                            val: frequency.val
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "val"]),
                          createBaseVNode("div", null, toDisplayString(frequency.label), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Aportacion Anual",
                    "model-value": yearlyAmount.value,
                    type: "number",
                    "hide-bottom-space": ""
                  }, null, 8, ["model-value"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Impacto mensual en cuota del beneficiario",
                    "model-value": monthlyAmount.value,
                    type: "number",
                    "hide-bottom-space": ""
                  }, null, 8, ["model-value"]),
                  createVNode(QInput, {
                    outlined: "",
                    "stack-label": "",
                    label: "Que dia del mes sera su aportacion?",
                    modelValue: paymentConfig.value.month_payday,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => paymentConfig.value.month_payday = $event),
                    type: "number",
                    "hide-bottom-space": "",
                    error: !!errors.value.month_payday,
                    "error-message": errors.value.month_payday
                  }, null, 8, ["modelValue", "error", "error-message"]),
                  createBaseVNode("div", _hoisted_3, [
                    _cache[13] || (_cache[13] = createBaseVNode("div", { class: "label" }, "Requiere que pasen a recoger su donativo?", -1)),
                    createVNode(QCheckbox, {
                      modelValue: paymentConfig.value.wants_pickup,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paymentConfig.value.wants_pickup = $event),
                      "true-value": 1,
                      "false-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_4, [
                    _cache[14] || (_cache[14] = createBaseVNode("div", { class: "label" }, "A cual domicilio", -1)),
                    createBaseVNode("div", null, [
                      createVNode(QRadio, {
                        modelValue: paymentConfig.value.address_type,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paymentConfig.value.address_type = $event),
                        val: "home"
                      }, null, 8, ["modelValue"]),
                      createVNode(QRadio, {
                        modelValue: paymentConfig.value.address_type,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => paymentConfig.value.address_type = $event),
                        val: "office"
                      }, null, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_5, [
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "label" }, "Desea un recordatorio?", -1)),
                    createVNode(QCheckbox, {
                      modelValue: paymentConfig.value.wants_reminder,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => paymentConfig.value.wants_reminder = $event),
                      "true-value": 1,
                      "false-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "label" }, "Desea un recibo deducible?", -1)),
                    createVNode(QCheckbox, {
                      modelValue: paymentConfig.value.wants_deductible_receipt,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => paymentConfig.value.wants_deductible_receipt = $event),
                      "true-value": 1,
                      "false-value": 0
                    }, null, 8, ["modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(QBtn, {
                      type: "submit",
                      color: "primary",
                      loading: loading.value,
                      class: "q-ml-auto"
                    }, {
                      default: withCtx(() => _cache[17] || (_cache[17] = [
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
  _sfc_main as _
};
