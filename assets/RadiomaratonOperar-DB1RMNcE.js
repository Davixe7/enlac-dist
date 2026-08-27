import { c as createComponent, R as useFormProps, a as computed, S as getBtnDesignAttr, h, G as QBtn, T as useFormInject, j as hMergeSlot, U as useModel, r as ref, K as onMounted, q as createBlock, s as openBlock, V as api, W as mergeModels, w as watch, t as withCtx, v as createVNode, X as QCardSection, B as createElementBlock, y as createCommentVNode, N as createBaseVNode, F as Fragment, C as renderList, D as toDisplayString, A as unref, Y as QInput, Z as withModifiers, _ as normalizeClass, $ as resolveDynamicComponent, a0 as mergeProps, a1 as QCard, a2 as QCheckbox, Q as QIcon, z as createTextVNode, a3 as QDialog, x as withDirectives, O as QAvatar } from "./index-CUa4PFcQ.js";
import { Q as QBtnGroup } from "./QBtnGroup-zsTFShNC.js";
import { Q as QTabPanels, a as QTabPanel } from "./QTabPanels-KZiB6tAr.js";
import { n as notify } from "./notify-BIZRiP1H.js";
import { Q as QMarkupTable } from "./QMarkupTable-AhtL3pNF.js";
import { Q as QTd } from "./QTd-2LofphGu.js";
import { Q as QTable } from "./QTable-BImjmEzL.js";
import { d as date } from "./date-CUGASz2L.js";
import { Q as QForm } from "./QForm-jfMExOJi.js";
import { Q as QSelect } from "./QSelect-BfJQYCtT.js";
import { _ as _sfc_main$a } from "./EnlacDate-Ddldx6LI.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import { Q as QChip } from "./QChip-NUOlNc53.js";
import { e as exportXlsFile } from "./exportXls-ytrD-MRM.js";
import { Q as QBadge } from "./QBadge-tSavdzdu.js";
import { Q as QTooltip } from "./QTooltip-BeTHAHYv.js";
import { Q as QSpace } from "./QSpace-BzZMS-Pa.js";
import { C as ClosePopup } from "./ClosePopup-zBtZnMDU.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./use-panel-v_TG1wLl.js";
import "./touch-BscSWsHh.js";
import "./selection-BEkjxQeg.js";
import "./use-render-cache-DRJWLz-b.js";
import "./QVirtualScroll-DDfqby5d.js";
import "./QList-6zBlnV8Y.js";
import "./use-fullscreen-Cat246-e.js";
import "./format-CnAOSoyw.js";
import "./QItem-DN4uMRfM.js";
import "./QMenu-xTmjVZlF.js";
import "./position-engine-B-CHZPXC.js";
import "./QDate-C9rJgth9.js";
import "./use-datetime-BAUwG-UY.js";
import "./QPopupProxy-Qt5WWYEn.js";
import "./datetime-Dvln09A7.js";
const QBtnToggle = createComponent({
  name: "QBtnToggle",
  props: {
    ...useFormProps,
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator: (v) => v.every(
        (opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt
      )
    },
    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    color: String,
    textColor: String,
    toggleColor: {
      type: String,
      default: "primary"
    },
    toggleTextColor: String,
    outline: Boolean,
    flat: Boolean,
    unelevated: Boolean,
    rounded: Boolean,
    push: Boolean,
    glossy: Boolean,
    size: String,
    padding: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    readonly: Boolean,
    disable: Boolean,
    stack: Boolean,
    stretch: Boolean,
    spread: Boolean,
    clearable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "clear", "click"],
  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find((opt) => opt.value === props.modelValue) !== void 0
    );
    const formAttrs = computed(() => ({
      type: "hidden",
      name: props.name,
      value: props.modelValue
    }));
    const injectFormInput = useFormInject(formAttrs);
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnOptionDesign = computed(() => ({
      rounded: props.rounded,
      dense: props.dense,
      ...btnDesignAttr.value
    }));
    const btnOptions = computed(() => props.options.map((item, i) => {
      const { attrs, value, slot, ...opt } = item;
      return {
        slot,
        props: {
          key: i,
          "aria-pressed": value === props.modelValue ? "true" : "false",
          ...attrs,
          ...opt,
          ...btnOptionDesign.value,
          disable: props.disable === true || opt.disable === true,
          // Options that come from the button specific options first, then from general props
          color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
          textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
          noCaps: mergeOpt(opt, "noCaps") === true,
          noWrap: mergeOpt(opt, "noWrap") === true,
          size: mergeOpt(opt, "size"),
          padding: mergeOpt(opt, "padding"),
          ripple: mergeOpt(opt, "ripple"),
          stack: mergeOpt(opt, "stack") === true,
          stretch: mergeOpt(opt, "stretch") === true,
          onClick(e) {
            set(value, item, e);
          }
        }
      };
    }));
    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit("update:modelValue", null, null);
            emit("clear");
          }
        } else {
          emit("update:modelValue", value, opt);
        }
        emit("click", e);
      }
    }
    function mergeOpt(opt, key) {
      return opt[key] === void 0 ? props[key] : opt[key];
    }
    function getContent() {
      const child = btnOptions.value.map((opt) => {
        return h(QBtn, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0);
      });
      if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) {
        injectFormInput(child, "push");
      }
      return hMergeSlot(slots.default, child);
    }
    return () => h(QBtnGroup, {
      class: "q-btn-toggle",
      ...btnDesignAttr.value,
      rounded: props.rounded,
      stretch: props.stretch,
      glossy: props.glossy,
      spread: props.spread
    }, getContent);
  }
});
const _sfc_main$9 = {
  __name: "RadiomarathonKeyPicker",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const loading = ref(false);
    const keys = ref([]);
    function optionLabel(option) {
      return `${option.code} - ${option.concept}`;
    }
    async function fetchKeys() {
      try {
        loading.value = false;
        keys.value = (await api.get("radiomarathon-keys")).data.data;
      } catch (error) {
        console.log(error);
        notify.error("Error al cargar las claves de radiomaraton");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchKeys();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        outlined: "",
        "hide-bottom-space": "",
        options: keys.value,
        "option-label": optionLabel,
        "option-value": "id",
        "emit-value": "",
        "map-options": "",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event)
      }, null, 8, ["options", "modelValue"]);
    };
  }
};
const _hoisted_1$8 = {
  key: 0,
  class: "row q-col-gutter-x-md"
};
const _hoisted_2$5 = { class: "col-6" };
const _hoisted_3$5 = { class: "col-6" };
const _hoisted_4$2 = { class: "flex items-center" };
const _hoisted_5$2 = { class: "page-subtitle" };
const _hoisted_6$2 = { key: 0 };
const _sfc_main$8 = {
  __name: "RadiomarathonDonationForm",
  props: /* @__PURE__ */ mergeModels(["paymentPromise", "source"], {
    "modelValue": {
      procuration_activity_id: null,
      activity_type: "radiomarathon",
      source: "prospecto",
      donor_id: null,
      full_name: "",
      donor_name: "",
      company_name: "",
      payment_date: date.formatDate(/* @__PURE__ */ new Date(), "YYYY-MM-DD"),
      donation_type: "Efectivo",
      amount: 0,
      payment_method: "Efectivo",
      currency: "MXN",
      exchange_rate: 0,
      equivalent_amount_mxn: 0,
      radiomarathon_key_id: null,
      reference: null,
      has_tax_receipt: false,
      tax_receipt_number: null
    },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["saved", "close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const formLabels = {
      prospecto: "Aplicar pago prospecto previo",
      boteo: "Boteo",
      others: "Donativo"
    };
    const sources = ref([
      { label: "Prospecto Previo", value: "prospecto" },
      { label: "Boteo", value: "boteo" },
      { label: "Llamadas", value: "llamadas" },
      { label: "Redes Sociales", value: "rrss" },
      { label: "Templete", value: "templete" },
      { label: "Bazar", value: "bazar" },
      { label: "Otros", value: "others" }
    ]);
    const props = __props;
    const emits = __emit;
    const loading = ref(false);
    const errors = ref({});
    const model = useModel(__props, "modelValue");
    const billsCount = ref({
      1e3: 0,
      500: 0,
      200: 0,
      100: 0,
      50: 0,
      20: 0
    });
    const coinsCount = ref({
      10: 0,
      5: 0,
      2: 0,
      1: 0,
      0.5: 0
    });
    const coinsTotal = computed(() => {
      return Object.keys(coinsCount.value).reduce((acc, item) => {
        return acc + coinsCount.value[item] * Number(item);
      }, 0);
    });
    const billsTotal = computed(() => {
      return Object.keys(billsCount.value).reduce((acc, item) => {
        return acc + billsCount.value[item] * Number(item);
      }, 0);
    });
    watch(
      () => billsCount.value,
      () => model.value.amount = billsTotal.value + coinsTotal.value,
      { deep: true }
    );
    watch(
      () => coinsCount.value,
      () => model.value.amount = billsTotal.value + coinsTotal.value,
      { deep: true }
    );
    watch(
      () => [model.value.currency, model.value.amount, model.value.exchange_rate],
      ([newCurrency, newAmount, newExchangeRate]) => {
        const amountNum = parseFloat(newAmount) || 0;
        const rateNum = parseFloat(newExchangeRate) || 0;
        if (newCurrency === "USD") {
          model.value.equivalent_amount_mxn = (amountNum * rateNum).toFixed(2);
        } else {
          model.value.exchange_rate = 1;
          model.value.equivalent_amount_mxn = amountNum.toFixed(2);
        }
      },
      { immediate: true }
    );
    async function store() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = {
          ...model.value,
          donor_name: model.value.full_name || model.value.donor_name,
          procuration_activity_id: model.value.procuration_activity_id || props.paymentPromise?.procuration_activity_id
        };
        if (props.source === "others") {
          delete payload.donor_id;
        }
        model.value = (await api.post("donations", payload)).data.data;
        notify.positive("Donativo registrado exitosamente");
        emits("saved");
      } catch (error) {
        errors.value = error.status == "422" ? error.formatted : errors.value;
        notify.negative("Error al guardar el pago");
      } finally {
        loading.value = false;
      }
    }
    async function storeAndPrint() {
      try {
        loading.value = true;
        errors.value = {};
        const payload = {
          ...model.value,
          donor_name: model.value.full_name || model.value.donor_name,
          procuration_activity_id: model.value.procuration_activity_id || props.paymentPromise?.procuration_activity_id
        };
        delete payload.full_name;
        if (props.source === "others") {
          delete payload.donor_id;
        }
        const response = await api.post("/donations/store-and-print-radiomarathon", payload, {
          responseType: "blob"
        });
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `recibo_radiomarathon_${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        notify.positive("Donativo registrado y recibo generado");
        emits("saved");
      } catch (error) {
        console.error(error);
        if (error.response?.status === "422" || error.response?.status === 422) {
          errors.value = error.response.data.errors;
        }
        notify.negative("Error al guardar o generar el PDF");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      if (props.source === "boteo") {
        model.value.boteo_can_number = "001";
        model.value.boteo_responsible_name = "John Doe";
        model.value.boteo_counter_name = "Jane Doe";
      }
    });
    const fields = computed(() => [
      {
        field: "q-input",
        model: "full_name",
        label: "Nombre del Donante",
        disable: props.source !== "others" && model.value.source !== "others",
        required: true,
        hide: props.source === "boteo" || model.value.source === "boteo"
      },
      {
        field: "q-input",
        model: "company_name",
        label: "Empresa",
        disable: props.source !== "others" && model.value.source !== "others",
        hide: props.source === "boteo" || model.value.source === "boteo"
      },
      {
        field: "q-select",
        model: "source",
        label: "Fuente",
        disable: model.value.source === "prospecto" || model.value.source === "boteo",
        options: sources.value,
        emitValue: true,
        mapOptions: true,
        dense: true
      },
      {
        field: "q-input",
        model: "boteo_can_number",
        label: "No. Bote",
        required: true,
        hide: props.source !== "boteo"
      },
      {
        field: "q-input",
        model: "boteo_responsible_name",
        label: "Responsable del bote",
        required: true,
        hide: props.source !== "boteo"
      },
      {
        field: "q-input",
        model: "boteo_counter_name",
        label: "Nombre del que contó",
        required: true,
        hide: props.source !== "boteo"
      },
      {
        field: "EnlacDate",
        model: "payment_date",
        label: "Fecha de pago",
        required: true,
        limitToPast: false
      },
      {
        field: "q-select",
        model: "donation_type",
        label: "Tipo de donativo",
        options: ["Efectivo", "Especie"],
        disable: model.value.source === "boteo",
        dense: true
      },
      {
        field: "q-select",
        model: "payment_method",
        label: "Forma de pago",
        options: ["Efectivo", "Cheque", "Transferencia", "Depósito", "Paypal"],
        dense: true,
        disable: model.value.source === "boteo"
      },
      {
        field: "q-input",
        model: "amount",
        label: "Monto a pagar",
        type: "number",
        disable: model.value.source === "boteo"
      },
      {
        field: "q-select",
        model: "currency",
        label: "Moneda",
        options: ["MXN", "USD"],
        dense: true,
        required: true
      },
      {
        field: "q-input",
        model: "exchange_rate",
        label: "Tipo de cambio",
        type: "number",
        disable: model.value.currency !== "USD"
        // Deshabilitado si no es USD
      },
      {
        field: "q-input",
        model: "equivalent_amount_mxn",
        label: "Equivalencia en pesos",
        type: "number",
        disable: true
        // Siempre de solo lectura ya que se calcula automáticamente
      },
      {
        field: "RadiomarathonKeyPicker",
        model: "radiomarathon_key_id",
        label: "Clave Radiomaraton",
        dense: true,
        required: true
      },
      {
        field: "q-input",
        model: "reference",
        label: "Referencia"
      },
      {
        field: "q-checkbox",
        model: "has_tax_receipt",
        label: "Recibo deducible"
      },
      {
        field: "q-input",
        model: "tax_receipt_number",
        label: "No. Recibo Deducible",
        required: true,
        hide: !model.value.has_tax_receipt
      }
    ]);
    const componentMap = {
      "q-input": QInput,
      "q-select": QSelect,
      "q-checkbox": QCheckbox,
      "EnlacDate": _sfc_main$a,
      "RadiomarathonKeyPicker": _sfc_main$9
    };
    function getComponent(field) {
      return typeof field === "string" ? componentMap[field] || field : field;
    }
    function getProps(fieldConfig) {
      const { ...restProps } = fieldConfig;
      return restProps;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              props.source == "boteo" ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
                createBaseVNode("div", _hoisted_2$5, [
                  _cache[3] || (_cache[3] = createBaseVNode("h6", { style: { "font-size": "1rem", "margin": "1rem 0" } }, "Billetes", -1)),
                  createVNode(QMarkupTable, {
                    separator: "cell",
                    flat: "",
                    bordered: ""
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(billsCount.value), (denom) => {
                          return openBlock(), createElementBlock("tr", { key: denom }, [
                            createBaseVNode("th", null, toDisplayString(denom), 1),
                            createBaseVNode("td", null, [
                              createVNode(unref(QInput), {
                                modelValue: billsCount.value[denom],
                                "onUpdate:modelValue": ($event) => billsCount.value[denom] = $event,
                                "hide-bottom-space": "",
                                borderless: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createBaseVNode("td", null, toDisplayString(billsCount.value[denom] * Number(denom)), 1)
                          ]);
                        }), 128)),
                        createBaseVNode("tr", null, [
                          _cache[2] || (_cache[2] = createBaseVNode("th", { colspan: "2" }, "Total", -1)),
                          createBaseVNode("td", null, toDisplayString(billsTotal.value), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_3$5, [
                  _cache[5] || (_cache[5] = createBaseVNode("h6", { style: { "font-size": "1rem", "margin": "1rem 0" } }, "Monedas", -1)),
                  createVNode(QMarkupTable, {
                    separator: "cell",
                    flat: "",
                    bordered: ""
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("tbody", null, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(coinsCount.value), (denom) => {
                          return openBlock(), createElementBlock("tr", { key: denom }, [
                            createBaseVNode("th", null, toDisplayString(denom), 1),
                            createBaseVNode("td", null, [
                              createVNode(unref(QInput), {
                                modelValue: coinsCount.value[denom],
                                "onUpdate:modelValue": ($event) => coinsCount.value[denom] = $event,
                                "hide-bottom-space": "",
                                borderless: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createBaseVNode("td", null, toDisplayString(coinsCount.value[denom] * Number(denom)), 1)
                          ]);
                        }), 128)),
                        createBaseVNode("tr", null, [
                          _cache[4] || (_cache[4] = createBaseVNode("th", { colspan: "2" }, "Total", -1)),
                          createBaseVNode("td", null, toDisplayString(coinsTotal.value), 1)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_4$2, [
                createBaseVNode("h2", _hoisted_5$2, toDisplayString(formLabels[props.source]), 1),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
                  class: "q-ml-auto"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(QForm, {
            onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(QMarkupTable, {
                flat: "",
                bordered: "",
                separator: "cell"
              }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, (field) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: field.model
                      }, [
                        !field.hide ? (openBlock(), createElementBlock("tr", _hoisted_6$2, [
                          createBaseVNode("th", {
                            class: normalizeClass([{ "required-label": field.required }, "text-left"])
                          }, toDisplayString(field.label), 3),
                          createBaseVNode("td", null, [
                            (openBlock(), createBlock(resolveDynamicComponent(getComponent(field.field)), mergeProps({
                              outlined: "",
                              modelValue: model.value[field.model],
                              "onUpdate:modelValue": ($event) => model.value[field.model] = $event,
                              ref_for: true
                            }, getProps(field), {
                              error: !!errors.value[field.model],
                              "error-message": errors.value[field.model],
                              "hide-bottom-space": ""
                            }), null, 16, ["modelValue", "onUpdate:modelValue", "error", "error-message"]))
                          ])
                        ])) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end q-gutter-x-sm" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                unelevated: "",
                color: "primary",
                icon: "print",
                label: "Guardar e Imprimir",
                loading: loading.value,
                onClick: storeAndPrint
              }, null, 8, ["loading"]),
              createVNode(QBtn, {
                unelevated: "",
                color: "primary",
                icon: "save",
                label: "Guardar",
                loading: loading.value,
                onClick: store
              }, null, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const formatCurrency = (val) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(val || 0);
};
const _hoisted_1$7 = { class: "row q-col-gutter-md q-mb-md items-center" };
const _hoisted_2$4 = { class: "col-12 col-sm-5" };
const _hoisted_3$4 = { class: "col-12 col-sm-5" };
const _hoisted_4$1 = { class: "col-12 col-sm-2 text-right" };
const _hoisted_5$1 = { class: "flex items-center q-mb-md" };
const _hoisted_6$1 = { class: "flex" };
const _hoisted_7$1 = { class: "text-bold text-primary" };
const _hoisted_8$1 = {
  key: 0,
  class: "text-caption text-grey-8 q-ml-xs"
};
const _hoisted_9$1 = { style: { "vertical-align": "middle", "text-align": "right" } };
const _hoisted_10$1 = { class: "text-right text-bold text-primary" };
const _hoisted_11 = { class: "row q-col-gutter-x-md" };
const _hoisted_12 = { class: "col-6" };
const _hoisted_13 = { class: "col-6" };
const _sfc_main$7 = {
  __name: "BoteosTable",
  props: ["procurationActivityId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const filterResponsible = ref("");
    const filterDate = ref("");
    function clearFilters() {
      filterResponsible.value = "";
      filterDate.value = "";
    }
    const rows = ref([]);
    const filteredRows = computed(() => {
      return rows.value.filter((row) => {
        if (filterResponsible.value.trim() !== "") {
          const term = filterResponsible.value.toLowerCase();
          const responsible = (row.boteo_responsible_name || "").toLowerCase();
          if (!responsible.includes(term)) return false;
        }
        if (filterDate.value) {
          const targetDate = filterDate.value;
          const rowPaymentDate = row.payment_date || "";
          const formattedRowDate = formatDate(rowPaymentDate);
          const [y, m, d] = targetDate.split("-");
          const targetFormatted = `${d}/${m}/${y}`;
          if (!rowPaymentDate.includes(targetDate) && formattedRowDate !== targetFormatted) {
            return false;
          }
        }
        return true;
      });
    });
    const columns = ref([
      { name: "boteo_can_number", field: "boteo_can_number", label: "Nro. Bote", align: "left" },
      {
        name: "boteo_responsible_name",
        field: "boteo_responsible_name",
        label: "Responsable Bote",
        align: "left"
      },
      {
        name: "boteo_counter_name",
        field: "boteo_counter_name",
        label: "Nombre del que conto",
        align: "left"
      },
      {
        name: "amount",
        field: (row) => formatCurrency(row.amount),
        label: "Monto a pagar",
        align: "left"
      },
      {
        name: "usd_amount",
        label: "Monto en dolares",
        field: (row) => row.currency == "USD" ? formatCurrency(row.amount) : 0,
        align: "left"
      },
      {
        name: "payment_date",
        field: (row) => formatDate(row.payment_date),
        label: "Fecha de pago",
        align: "left"
      },
      {
        name: "radiomarathon_key",
        field: (row) => row.radiomarathon_key?.code || "N/A",
        label: "Clave de Radiomaratón",
        align: "left"
      }
    ]);
    const dialog = ref(false);
    const publishDialog = ref(false);
    const payment = ref({});
    function setPayment() {
      payment.value = {
        procuration_activity_id: props.procurationActivityId,
        activity_type: "boteo",
        source: "boteo",
        payment_date: date.formatDate(/* @__PURE__ */ new Date(), "YYYY-MM-DD"),
        donation_type: "Efectivo",
        amount: 69,
        payment_method: "Efectivo",
        currency: "MXN",
        exchange_rate: 1,
        equivalent_amount_mxn: 0,
        radiomarathon_key_id: null,
        reference: null,
        has_tax_receipt: false
      };
      dialog.value = true;
    }
    async function fetchBoteos() {
      try {
        loading.value = true;
        rows.value = (await api.get(`radiomarathon/${props.procurationActivityId}/boteos`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los boteos del evento");
      } finally {
        loading.value = false;
      }
    }
    async function onSave() {
      await fetchBoteos();
      notify.positive("Bote guardado con exito");
      dialog.value = false;
    }
    const amountToPublish = ref(0);
    const totalPublished = ref(0);
    const totalAmount = computed(() => {
      return filteredRows.value.reduce((acc, row) => Number(row.amount) + acc, 0);
    });
    const totalAvailable = computed(() => {
      const avail = Number(totalAmount.value) - Number(totalPublished.value);
      return avail > 0 ? avail : 0;
    });
    async function publishAmount() {
      const amount = Number(amountToPublish.value);
      if (amount <= 0) {
        notify.negative("El monto a publicar debe ser mayor a 0");
        return;
      }
      if (amount > totalAvailable.value) {
        notify.negative(`El monto no puede ser mayor al disponible ($ ${totalAvailable.value})`);
        return;
      }
      try {
        loading.value = true;
        let data = {
          procuration_activity_id: props.procurationActivityId,
          amount
        };
        let response = await api.post(`boteo-published-amounts`, data);
        console.log(response);
        await fetchPublished();
        amountToPublish.value = totalAvailable.value;
        publishDialog.value = false;
        notify.positive("Monto publicado exitosamente");
      } catch (error) {
        console.log(error);
        notify.negative("Error al publicar el monto");
      } finally {
        loading.value = false;
      }
    }
    async function fetchPublished() {
      try {
        loading.value = true;
        totalPublished.value = (await api.get(
          `boteo-published-amounts/?procuration_activity_id=${props.procurationActivityId}&amount=1`
        )).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const errors = ref({});
    onMounted(async () => {
      await fetchBoteos();
      await fetchPublished();
      amountToPublish.value = totalAvailable.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$7, [
          createBaseVNode("div", _hoisted_2$4, [
            createVNode(QInput, {
              modelValue: filterResponsible.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterResponsible.value = $event),
              label: "Responsable del bote",
              outlined: "",
              clearable: ""
            }, {
              append: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3$4, [
            createVNode(_sfc_main$a, {
              modelValue: filterDate.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterDate.value = $event),
              label: "Fecha de pago",
              outlined: "",
              filled: false,
              clearable: "",
              "limit-to-past": false
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(QBtn, {
              flat: "",
              color: "primary",
              icon: "clear_all",
              label: "Limpiar",
              onClick: clearFilters
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          createVNode(QMarkupTable, null, {
            default: withCtx(() => [
              createBaseVNode("tbody", null, [
                createBaseVNode("tr", null, [
                  _cache[9] || (_cache[9] = createBaseVNode("th", null, "Total:", -1)),
                  createBaseVNode("td", null, "$ " + toDisplayString(totalAmount.value), 1),
                  _cache[10] || (_cache[10] = createBaseVNode("th", null, "Publicado:", -1)),
                  createBaseVNode("td", null, "$ " + toDisplayString(totalPublished.value), 1),
                  _cache[11] || (_cache[11] = createBaseVNode("th", null, "Disponible:", -1)),
                  createBaseVNode("td", null, "$ " + toDisplayString(totalAvailable.value), 1),
                  createBaseVNode("td", null, [
                    createBaseVNode("div", _hoisted_6$1, [
                      createVNode(QInput, {
                        modelValue: amountToPublish.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => amountToPublish.value = $event),
                        "hide-bottom-space": "",
                        outlined: "",
                        dense: "",
                        class: "q-mr-sm",
                        error: !!errors.value["amount_to_publish"] || Number(amountToPublish.value) > totalAvailable.value,
                        "error-message": errors.value["amount_to_publish"]
                      }, null, 8, ["modelValue", "error", "error-message"]),
                      createVNode(QBtn, {
                        unelevated: "",
                        color: "primary",
                        label: "Publicar",
                        disabled: Number(amountToPublish.value) <= 0 || Number(amountToPublish.value) > totalAvailable.value,
                        onClick: _cache[3] || (_cache[3] = ($event) => publishDialog.value = true)
                      }, null, 8, ["disabled"])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(QBtn, {
            unelevated: "",
            color: "primary",
            icon: "sym_o_add_circle",
            label: "Bote",
            onClick: setPayment,
            class: "q-ml-auto"
          })
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: filteredRows.value,
          loading: loading.value,
          "row-key": "id"
        }, {
          "body-cell-radiomarathon_key": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                props2.row.radiomarathon_key ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("span", _hoisted_7$1, toDisplayString(props2.row.radiomarathon_key.code), 1),
                  props2.row.radiomarathon_key.concept ? (openBlock(), createElementBlock("span", _hoisted_8$1, " - " + toDisplayString(props2.row.radiomarathon_key.concept), 1)) : createCommentVNode("", true)
                ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(" N/A ")
                ], 64))
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["columns", "rows", "loading"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "500px" } }, {
              default: withCtx(() => [
                createVNode(_sfc_main$8, {
                  modelValue: payment.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => payment.value = $event),
                  source: "boteo",
                  onSaved: onSave,
                  onClose: _cache[5] || (_cache[5] = ($event) => dialog.value = false)
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: publishDialog.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => publishDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, null, {
              default: withCtx(() => [
                _cache[13] || (_cache[13] = createBaseVNode("div", { class: "q-px-md q-pt-md" }, [
                  createBaseVNode("h2", { class: "text-h6 q-ma-none" }, "¿Estás seguro que deseas publicar este monto?")
                ], -1)),
                createVNode(QMarkupTable, {
                  separator: "cell",
                  bordered: "",
                  class: "q-mt-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[12] || (_cache[12] = createBaseVNode("th", null, "Monto a publicar:", -1)),
                        createBaseVNode("td", _hoisted_9$1, [
                          createBaseVNode("div", _hoisted_10$1, "$ " + toDisplayString(amountToPublish.value) + ",00", 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_11, [
                      createBaseVNode("div", _hoisted_12, [
                        createVNode(QBtn, {
                          flat: "",
                          color: "negative",
                          label: "No",
                          class: "full-width bg-red-1",
                          onClick: _cache[7] || (_cache[7] = ($event) => publishDialog.value = false)
                        })
                      ]),
                      createBaseVNode("div", _hoisted_13, [
                        createVNode(QBtn, {
                          color: "primary",
                          label: "Publicar",
                          class: "full-width",
                          onClick: publishAmount
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
const _hoisted_1$6 = { class: "flex items-center" };
const _hoisted_2$3 = { class: "text-left" };
const _hoisted_3$3 = { class: "flex justify-end q-pa-md q-gutter-x-sm" };
const _sfc_main$6 = {
  __name: "CallForm",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["saved", "close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const model = useModel(__props, "modelValue");
    const loading = ref(false);
    const errors = ref({});
    const fields = ref([
      {
        field: "q-input",
        label: "Nombre del donante",
        model: "donor_name",
        required: true
      },
      {
        field: "q-input",
        label: "Dirección / Señas particulares",
        model: "address",
        required: true
      },
      {
        field: "q-select",
        label: "Tipo de donativo",
        model: "donation_type",
        options: ["Efectivo", "Especie"],
        dense: true,
        required: true
      },
      {
        field: "q-input",
        label: "Monto o Descripción del Donativo",
        model: "amount"
      },
      {
        field: "q-input",
        label: "Cobrador Designado",
        model: "collector"
      },
      {
        field: "q-checkbox",
        label: "Recibo deducible",
        model: "has_tax_receipt",
        trueValue: 1,
        falseValue: 0
      }
    ]);
    const componentMap = {
      "q-input": QInput,
      "q-select": QSelect,
      "q-checkbox": QCheckbox,
      "EnlacDate": _sfc_main$a,
      "RadiomarathonKeyPicker": _sfc_main$9
    };
    function getComponent(field) {
      return typeof field === "string" ? componentMap[field] || field : field;
    }
    function getProps(fieldConfig) {
      const { label, ...restProps } = fieldConfig;
      console.log(label);
      return restProps;
    }
    async function store() {
      try {
        loading.value = true;
        errors.value = {};
        let data = { ...model.value };
        let response = (await api.post("radiomarathon-calls", data)).data.data;
        console.log(response);
        notify.positive("Llamada registrada con éxito");
        emits("saved");
      } catch (error) {
        console.error(error);
        if (error.response?.status === 422) {
          errors.value = error.response.data.errors;
        }
        notify.negative("Error al guardar los datos de la llamada");
      } finally {
        loading.value = false;
      }
    }
    async function storeAndPrint() {
      try {
        loading.value = true;
        errors.value = {};
        let data = { ...model.value };
        const response = await api.post("radiomarathon-calls/print", data, {
          responseType: "blob"
        });
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `folio_llamada_${Date.now()}.pdf`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        notify.positive("Llamada registrada e impresa con éxito");
        emits("saved");
      } catch (error) {
        console.error(error);
        if (error.response?.status === 422) {
          errors.value = error.response.data.errors;
        }
        notify.negative("Error al guardar o generar el comprobante");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, null, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$6, [
                _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-subtitle" }, "Servicio a Domicilio", -1)),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
                  class: "q-ml-auto"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(QForm, {
            onSubmit: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, {
            default: withCtx(() => [
              createVNode(QMarkupTable, {
                flat: "",
                bordered: "",
                separator: "cell"
              }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, (field) => {
                      return openBlock(), createElementBlock("tr", {
                        key: field.model
                      }, [
                        createBaseVNode("th", _hoisted_2$3, toDisplayString(field.label), 1),
                        createBaseVNode("td", null, [
                          (openBlock(), createBlock(resolveDynamicComponent(getComponent(field.field)), mergeProps({
                            outlined: "",
                            ref_for: true
                          }, getProps(field), {
                            error: !!errors.value[field.model],
                            "error-message": errors.value[field.model],
                            "hide-bottom-space": "",
                            modelValue: model.value[field.model],
                            "onUpdate:modelValue": ($event) => model.value[field.model] = $event
                          }), null, 16, ["error", "error-message", "modelValue", "onUpdate:modelValue"]))
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3$3, [
                createVNode(QBtn, {
                  unelevated: "",
                  color: "primary",
                  icon: "print",
                  label: "Guardar e Imprimir",
                  loading: loading.value,
                  onClick: storeAndPrint
                }, null, 8, ["loading"]),
                createVNode(QBtn, {
                  unelevated: "",
                  color: "primary",
                  icon: "save",
                  label: "Guardar",
                  loading: loading.value,
                  onClick: store
                }, null, 8, ["loading"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$5 = { class: "flex justify-end q-mb-md" };
const _sfc_main$5 = {
  __name: "CallsPage",
  props: ["radiomarathonId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    const columns = ref([
      { align: "left", label: "Folio", field: "id", name: "id" },
      {
        align: "left",
        label: "Nombre del donante",
        field: "donor_name",
        name: "donor_name"
      },
      {
        align: "left",
        label: "Dirección / Señas particulares",
        field: "address",
        name: "address"
      },
      { align: "left", label: "Tipo de donativo", field: "donation_type", name: "donation_type" },
      {
        align: "left",
        label: "Monto o descripción del donativo",
        field: "amount",
        name: "amount",
        format: (val) => !isNaN(val) && val !== null && val !== "" ? `$${Number(val).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "--"
      },
      { align: "left", label: "Cobrador Designado", field: "collector", name: "collector" },
      {
        align: "left",
        label: "Recibo Deducible",
        field: "has_tax_receipt",
        name: "has_tax_receipt",
        format: (val) => Number(val) ? "Sí" : "No"
      },
      { align: "left", label: "¿Entró a caja?", field: "paid", name: "paid" }
    ]);
    async function fetchCalls() {
      try {
        loading.value = true;
        rows.value = (await api.get(`radiomarathon-calls/?procuration_activity_id=${props.radiomarathonId}`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar las llamadas del evento");
      } finally {
        loading.value = false;
      }
    }
    function onSave() {
      callDialog.value = false;
      fetchCalls();
    }
    const callDialog = ref(false);
    const callData = ref({
      procuration_activity_id: props.radiomarathonId,
      donor_name: "Juan Perez",
      amount: "5000",
      address: "Somewhere over the rainbow",
      collector: "John Doe",
      donation_type: "Efectivo",
      has_tax_receipt: 0,
      paid: 0
    });
    function setCall() {
      callDialog.value = true;
    }
    async function markAsPaid(row) {
      try {
        loading.value = true;
        let route = `radiomarathon-calls/${row.id}`;
        let data = { paid: row.paid, _method: "PUT" };
        let response = (await api.post(route, data)).data.data;
        notify.positive("Llamada actualizada exitosamente");
        console.log(response);
      } catch (error) {
        console.log(error);
        notify.negative("Error al actualizar el estado de la llamada");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      fetchCalls();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$5, [
          createVNode(QBtn, {
            color: "primary",
            label: "Llamada",
            icon: "sym_o_add_circle",
            onClick: setCall
          })
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: rows.value
        }, {
          "body-cell-has_tax_receipt": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QChip, {
                  dense: "",
                  size: "12px",
                  color: Boolean(Number(props2.value)) ? "positive" : "grey-4",
                  "text-color": Boolean(Number(props2.value)) ? "white" : "grey-8",
                  icon: Boolean(Number(props2.value)) ? "check_circle" : "cancel"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(Boolean(Number(props2.value)) ? "Sí" : "No"), 1)
                  ]),
                  _: 2
                }, 1032, ["color", "text-color", "icon"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-paid": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QCheckbox, {
                  modelValue: props2.row.paid,
                  "onUpdate:modelValue": [($event) => props2.row.paid = $event, ($event) => markAsPaid(props2.row)],
                  "true-value": 1,
                  "false-value": 0
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: callDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => callDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              modelValue: callData.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => callData.value = $event),
              onSaved: onSave,
              onClose: _cache[1] || (_cache[1] = ($event) => callDialog.value = false)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const _hoisted_1$4 = { class: "flex q-mb-md" };
const _sfc_main$4 = {
  __name: "GeneralDonations",
  props: ["radiomarathonId"],
  setup(__props) {
    onMounted(async () => {
      fetchPayments();
    });
    const props = __props;
    const dialog = ref(false);
    const loading = ref(false);
    const sources = ref([
      { label: "Prospecto Previo", value: "prospecto" },
      { label: "Boteo", value: "boteo" },
      { label: "Llamadas", value: "llamadas" },
      { label: "Redes Sociales", value: "rrss" },
      { label: "Templete", value: "templete" },
      { label: "Bazar", value: "bazar" },
      { label: "Otros", value: "others" }
    ]);
    const totalsBySource = computed(() => {
      let totals = {};
      rows.value.forEach((row) => totals[row.source] = row.amount);
      return totals;
    });
    function sourceLabel(val) {
      return sources.value.find((s) => s.value == val)?.label ?? "N/A";
    }
    const rows = ref([]);
    const typeFilter = ref("todos");
    const results = computed(() => {
      if (typeFilter.value == "todos") {
        return [...rows.value];
      }
      return rows.value.filter((row) => row.donation_type == typeFilter.value);
    });
    const columns = ref([
      { align: "left", label: "Fuente", field: (row) => sourceLabel(row.source), name: "source" },
      {
        align: "left",
        label: "Nombre del donante",
        field: (row) => row.donor_name || row.full_name || row.donor?.name || row.donor?.full_name || "Público General",
        name: "donor_name"
      },
      {
        align: "left",
        label: "Total donativo",
        field: () => "--",
        name: "donation_total",
        format: (val) => !isNaN(val) && val !== null && val !== "" ? `$${Number(val).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "--"
      },
      {
        align: "left",
        label: "Monto donativo",
        field: "amount",
        name: "amount",
        format: (val) => val ? `$${Number(val).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "$0.00"
      },
      { align: "left", label: "Tipo de donativo", field: "donation_type", name: "donation_type" },
      { align: "left", label: "Fecha de pago", field: "payment_date", name: "payment_date" },
      { align: "left", label: "Referencia", field: "reference", name: "reference" }
    ]);
    const payment = ref({});
    async function fetchPayments() {
      try {
        loading.value = true;
        rows.value = (await api.get(`radiomarathon/${props.radiomarathonId}/others`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los donativos del evento");
      } finally {
        loading.value = false;
      }
    }
    function setPayment() {
      payment.value = {
        procuration_activity_id: props.radiomarathonId,
        activity_type: "radiomarathon",
        source: "others",
        donor_id: "",
        full_name: "",
        payment_date: date.formatDate(/* @__PURE__ */ new Date(), "YYYY-MM-DD"),
        donation_type: "Efectivo",
        amount: 1e3,
        payment_method: "Efectivo",
        currency: "MXN",
        exchange_rate: 1,
        equivalent_amount_mxn: 0,
        radiomarathon_key_id: null,
        reference: null,
        has_tax_receipt: false
      };
      dialog.value = true;
    }
    function onSave() {
      dialog.value = true;
      fetchPayments();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QMarkupTable, {
          flat: "",
          bordered: "",
          class: "q-mb-md",
          separator: "cell"
        }, {
          default: withCtx(() => [
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(totalsBySource.value), (sourceTotal) => {
                return openBlock(), createElementBlock("tr", { key: sourceTotal }, [
                  createBaseVNode("th", null, toDisplayString(sourceLabel(sourceTotal)), 1),
                  createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(totalsBySource.value[sourceTotal])), 1)
                ]);
              }), 128))
            ])
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_1$4, [
          createVNode(QSelect, {
            label: "Filtrar por tipo",
            "stack-label": "",
            class: "q-mr-md",
            outlined: "",
            modelValue: typeFilter.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => typeFilter.value = $event),
            options: [
              { label: "Efectivo", value: "Efectivo" },
              { label: "Especie", value: "Especie" },
              { label: "Todos", value: "todos" }
            ],
            "emit-value": "",
            "map-options": ""
          }, null, 8, ["modelValue"]),
          createVNode(QBtn, {
            color: "primary",
            label: "Donativo",
            icon: "sym_o_add_circle",
            onClick: setPayment
          })
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: results.value,
          class: "q-mb-lg"
        }, null, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$8, {
              modelValue: payment.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => payment.value = $event),
              source: "others",
              onSaved: onSave
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(_sfc_main$5, { "radiomarathon-id": __props.radiomarathonId }, null, 8, ["radiomarathon-id"])
      ], 64);
    };
  }
};
const _hoisted_1$3 = { class: "row q-col-gutter-md q-mb-lg items-center" };
const _hoisted_2$2 = { class: "col-12 col-sm-3" };
const _hoisted_3$2 = { class: "col-12 col-sm-4" };
const _hoisted_4 = { class: "col-12 col-sm-3" };
const _hoisted_5 = { class: "col-12 col-sm-2 text-right" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = {
  key: 1,
  class: "text-grey-6"
};
const _hoisted_8 = { class: "text-h6" };
const _hoisted_9 = { class: "q-mb-md text-caption text-grey-8" };
const _hoisted_10 = { key: 0 };
const _sfc_main$3 = {
  __name: "CollectionTracking",
  props: {
    radiomarathonId: {
      type: [Number, String],
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const rows = ref([]);
    const filterSource = ref(null);
    const filterDonorName = ref("");
    const filterPaymentDate = ref("");
    const sources = ref([
      { label: "Todos", value: null },
      { label: "Prospecto Previo", value: "prospecto" },
      { label: "Boteo", value: "boteo" },
      { label: "Llamadas", value: "llamadas" },
      { label: "Redes Sociales", value: "rrss" },
      { label: "Templete", value: "templete" },
      { label: "Bazar", value: "bazar" },
      { label: "Otros", value: "others" }
    ]);
    function sourceLabel(val) {
      const s = sources.value.find((item) => item.value === val);
      return s ? s.label : val;
    }
    function formatDonorName(row) {
      if (!row) return "Público General";
      const name = row.donor_name || "";
      if (!name || name === "Sin registrar" || name.toLowerCase() === "sin registrar") {
        return "Público General";
      }
      return name;
    }
    function clearFilters() {
      filterSource.value = null;
      filterDonorName.value = "";
      filterPaymentDate.value = "";
    }
    const filteredRows = computed(() => {
      return rows.value.filter((row) => {
        if (filterSource.value && row.source !== filterSource.value) {
          return false;
        }
        if (filterDonorName.value.trim() !== "") {
          const term = filterDonorName.value.toLowerCase();
          const donorName = formatDonorName(row).toLowerCase();
          const companyName = (row.company_name || "").toLowerCase();
          if (!donorName.includes(term) && !companyName.includes(term)) {
            return false;
          }
        }
        if (filterPaymentDate.value) {
          const [y, m, d] = filterPaymentDate.value.split("-");
          const targetFormatted = `${d}/${m}/${y}`;
          const paymentDate = row.payment_date || "";
          const rawDate = row.raw_payment_date || "";
          if (!paymentDate.includes(targetFormatted) && !rawDate.includes(filterPaymentDate.value)) {
            return false;
          }
        }
        return true;
      });
    });
    function getRowKey(row) {
      if (row.donor_id) return `donor_${row.donor_id}`;
      if (row.id) return `donation_${row.id}`;
      return `source_${row.source}_${Math.random()}`;
    }
    function formatDate2(dateStr) {
      if (!dateStr) return "N/A";
      if (dateStr.includes("/")) return dateStr;
      const [year, month, day] = dateStr.split("T")[0].split("-");
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
      return dateStr;
    }
    function getStatusBadge(row) {
      const status = row.status ? row.status.toLowerCase() : "";
      if (status === "pendiente") {
        return { label: "Pendiente", color: "orange-7" };
      }
      if (status === "parcial") {
        return { label: "Parcial", color: "blue-6" };
      }
      if (status === "total") {
        return { label: "Total", color: "positive" };
      }
      return { label: "Recibido", color: "positive" };
    }
    const columns = ref([
      {
        align: "left",
        name: "source",
        field: (row) => sourceLabel(row.source),
        label: "Fuente",
        sortable: true
      },
      {
        align: "left",
        name: "donor_name",
        field: (row) => formatDonorName(row),
        label: "Nombre del donante",
        sortable: true
      },
      { align: "left", name: "company_name", field: "company_name", label: "Empresa", sortable: true },
      {
        align: "right",
        name: "promised_amount",
        field: "promised_amount",
        label: "Monto Prometido",
        sortable: true
      },
      {
        align: "right",
        name: "total_donated",
        field: (row) => row.total_donated ?? row.amount ?? 0,
        label: "Monto Pagado",
        sortable: true
      },
      {
        align: "center",
        name: "payment_date",
        field: (row) => row.payment_date || "N/A",
        label: "Última fecha de pago",
        sortable: true
      },
      { align: "center", name: "status", field: "status", label: "Estatus de pago", sortable: true },
      { align: "center", name: "actions", label: "Acciones" }
    ]);
    const showDetailModal = ref(false);
    const loadingDetail = ref(false);
    const selectedRow = ref(null);
    const donorDonations = ref([]);
    const detailColumns = [
      {
        align: "left",
        name: "folio_number",
        field: (row) => row.folio_number || "N/A",
        label: "Folio"
      },
      {
        align: "left",
        name: "payment_date",
        field: (row) => formatDate2(row.payment_date),
        label: "Fecha"
      },
      {
        align: "left",
        name: "payment_method",
        field: (row) => row.payment_method || "N/A",
        label: "Método de Pago"
      },
      {
        align: "right",
        name: "amount",
        field: (row) => formatCurrency(row.amount ?? row.total_donated),
        label: "Monto"
      }
    ];
    async function openDetailModal(row) {
      selectedRow.value = row;
      showDetailModal.value = true;
      donorDonations.value = [];
      if (row.donor_id) {
        try {
          loadingDetail.value = true;
          const res = await api.get(`donations/donor/${row.donor_id}`);
          const list = (res.data.data || []).filter(
            (d) => String(d.procuration_activity_id) === String(props.radiomarathonId)
          );
          donorDonations.value = list.map((d) => ({
            ...d,
            payment_date: formatDate2(d.payment_date)
          }));
        } catch (error) {
          console.error(error);
          notify.negative("Error al cargar el detalle de pagos");
        } finally {
          loadingDetail.value = false;
        }
        return;
      }
      donorDonations.value = [row];
    }
    const showPaymentModal = ref(false);
    const paymentModel = ref({});
    function openPaymentForm(row) {
      paymentModel.value = {
        procuration_activity_id: props.radiomarathonId,
        activity_type: "radiomarathon",
        source: row.source || "prospecto",
        donor_id: row.donor_id || null,
        full_name: formatDonorName(row),
        company_name: row.company_name || "",
        payment_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
        donation_type: "Efectivo",
        amount: row.promised_amount ? Math.max(0, Number(row.promised_amount) - Number(row.total_donated || 0)) : 0,
        payment_method: "Efectivo",
        currency: "MXN",
        exchange_rate: 1,
        equivalent_amount_mxn: 0,
        reference: null,
        has_tax_receipt: false
      };
      showPaymentModal.value = true;
    }
    async function fetchData() {
      try {
        loading.value = true;
        const response = await api.get(`radiomarathon/${props.radiomarathonId}/all`);
        rows.value = response.data.data || [];
      } catch (error) {
        console.error(error);
        notify.negative("Error al cargar los donativos");
      } finally {
        loading.value = false;
      }
    }
    async function onPaymentSaved() {
      showPaymentModal.value = false;
      await fetchData();
    }
    onMounted(async () => {
      await fetchData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$2, [
            createVNode(QSelect, {
              modelValue: filterSource.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterSource.value = $event),
              options: sources.value,
              label: "Fuente",
              outlined: "",
              "emit-value": "",
              "map-options": "",
              clearable: ""
            }, null, 8, ["modelValue", "options"])
          ]),
          createBaseVNode("div", _hoisted_3$2, [
            createVNode(QInput, {
              modelValue: filterDonorName.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterDonorName.value = $event),
              label: "Nombre de donante",
              outlined: "",
              clearable: ""
            }, {
              append: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(_sfc_main$a, {
              modelValue: filterPaymentDate.value,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterPaymentDate.value = $event),
              label: "Fecha de pago",
              outlined: "",
              filled: false,
              clearable: "",
              "limit-to-past": false
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(QBtn, {
              flat: "",
              color: "primary",
              icon: "clear_all",
              label: "Limpiar",
              onClick: clearFilters
            })
          ])
        ]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: filteredRows.value,
          columns: columns.value,
          loading: loading.value,
          "row-key": getRowKey
        }, {
          "body-cell-source": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  color: "primary",
                  outline: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(sourceLabel(props2.row.source)), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-donor_name": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass({ "text-grey-6": formatDonorName(props2.row) === "Público General" })
                }, toDisplayString(formatDonorName(props2.row)), 3)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-company_name": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass({ "text-grey-6": props2.row.company_name === "N/A" })
                }, toDisplayString(props2.row.company_name || "N/A"), 3)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-promised_amount": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                props2.row.promised_amount ? (openBlock(), createElementBlock("span", _hoisted_6, toDisplayString(unref(formatCurrency)(props2.row.promised_amount)), 1)) : (openBlock(), createElementBlock("span", _hoisted_7, " - "))
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-total_donated": withCtx((props2) => [
            createVNode(QTd, {
              props: props2,
              class: "text-weight-bold text-positive"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(formatCurrency)(props2.row.total_donated ?? props2.row.amount ?? 0)), 1)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-payment_date": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass({ "text-grey-6": !props2.row.payment_date })
                }, toDisplayString(props2.row.payment_date || "Sin pagos"), 3)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-status": withCtx((props2) => [
            createVNode(QTd, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  label: getStatusBadge(props2.row).label,
                  color: getStatusBadge(props2.row).color,
                  class: "text-bold"
                }, null, 8, ["label", "color"])
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, {
              props: props2,
              class: "q-gutter-xs"
            }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  color: "info",
                  icon: "visibility",
                  onClick: ($event) => openDetailModal(props2.row)
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[7] || (_cache[7] = [
                        createTextVNode("Ver detalle")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"]),
                props2.row.source === "prospecto" ? (openBlock(), createBlock(QBtn, {
                  key: 0,
                  flat: "",
                  round: "",
                  dense: "",
                  color: "primary",
                  icon: "add_card",
                  onClick: ($event) => openPaymentForm(props2.row)
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[8] || (_cache[8] = [
                        createTextVNode("Registrar nuevo pago")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["rows", "columns", "loading"]),
        createVNode(QDialog, {
          modelValue: showDetailModal.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showDetailModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "550px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_8, " Detalle - " + toDisplayString(selectedRow.value?.source === "boteo" ? "Boteo" : formatDonorName(selectedRow.value)), 1),
                    createVNode(QSpace),
                    withDirectives(createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: ""
                    }, null, 512), [
                      [ClosePopup]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_9, [
                      selectedRow.value?.promised_amount ? (openBlock(), createElementBlock("span", _hoisted_10, [
                        _cache[9] || (_cache[9] = createBaseVNode("b", null, "Monto Prometido:", -1)),
                        createTextVNode(" " + toDisplayString(unref(formatCurrency)(selectedRow.value?.promised_amount)) + " | ", 1)
                      ])) : createCommentVNode("", true),
                      _cache[10] || (_cache[10] = createBaseVNode("b", null, "Total Pagado:", -1)),
                      createTextVNode(" " + toDisplayString(unref(formatCurrency)(selectedRow.value?.total_donated ?? selectedRow.value?.amount ?? 0)), 1)
                    ]),
                    createVNode(QTable, {
                      flat: "",
                      bordered: "",
                      dense: "",
                      rows: donorDonations.value,
                      columns: detailColumns,
                      loading: loadingDetail.value,
                      "row-key": "id",
                      "no-data-label": "No hay registros disponibles"
                    }, null, 8, ["rows", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: showPaymentModal.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => showPaymentModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$8, {
              modelValue: paymentModel.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => paymentModel.value = $event),
              source: paymentModel.value.source,
              onClose: _cache[5] || (_cache[5] = ($event) => showPaymentModal.value = false),
              onSaved: onPaymentSaved
            }, null, 8, ["modelValue", "source"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "flex items-center" };
const _sfc_main$2 = {
  __name: "PaymentPromiseForm",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["saved", "close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    const emits = __emit;
    const loading = ref(false);
    const keys = ref([]);
    async function store() {
      try {
        loading.value = true;
        model.value = (await api.post("payment-promises", { ...model.value })).data.data;
        emits("saved");
      } catch (error) {
        console.log(error);
        notify.error("Error al guardar la promesa de pago");
      } finally {
        loading.value = false;
      }
    }
    async function fetchKeys() {
      try {
        loading.value = true;
        keys.value = (await api.get("radiomarathon-keys")).data.data;
      } catch (error) {
        console.log(error);
        notify.error("Error al cargar las claves de radiomaraton");
      } finally {
        loading.value = false;
      }
    }
    function optionLabel(option) {
      return `${option.code} - ${option.concept}`;
    }
    onMounted(() => {
      fetchKeys();
      if (!["Efectivo", "Especie"].includes(model.value?.payment_type)) {
        model.value.payment_type = "Efectivo";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "min-width": "400px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$2, [
                _cache[7] || (_cache[7] = createBaseVNode("h2", { class: "page-subtitle" }, "Configurar Promesa Actual", -1)),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "close",
                  onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
                  class: "q-ml-auto"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(QForm, {
            onSubmit: withModifiers(store, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(QMarkupTable, {
                flat: "",
                separator: "none"
              }, {
                default: withCtx(() => [
                  createBaseVNode("tbody", null, [
                    createBaseVNode("tr", null, [
                      _cache[8] || (_cache[8] = createBaseVNode("th", null, "Nombre del donante", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          outlined: "",
                          dense: "",
                          readonly: "",
                          "model-value": model.value.donor?.full_name
                        }, null, 8, ["model-value"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[9] || (_cache[9] = createBaseVNode("th", null, "Empresa", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          outlined: "",
                          dense: "",
                          readonly: "",
                          "model-value": model.value.donor?.company_name
                        }, null, 8, ["model-value"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[10] || (_cache[10] = createBaseVNode("th", null, "Tipo de donativo", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QSelect, {
                          dense: "",
                          outlined: "",
                          "hide-bottom-space": "",
                          options: ["Efectivo", "Especie"],
                          modelValue: model.value.payment_type,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.payment_type = $event)
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[11] || (_cache[11] = createBaseVNode("th", null, "Monto promesa actual", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QInput, {
                          dense: "",
                          outlined: "",
                          "hide-bottom-space": "",
                          type: "number",
                          step: "0.01",
                          modelValue: model.value.amount,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.amount = $event)
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[12] || (_cache[12] = createBaseVNode("th", null, "Fecha promesa de pago", -1)),
                      createBaseVNode("td", null, [
                        createVNode(_sfc_main$a, {
                          modelValue: model.value.date,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => model.value.date = $event),
                          outlined: "",
                          dense: "",
                          "limit-to-past": false
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[13] || (_cache[13] = createBaseVNode("th", null, "Clave Radiomaratón", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QSelect, {
                          dense: "",
                          outlined: "",
                          "hide-bottom-space": "",
                          options: keys.value,
                          "option-label": optionLabel,
                          "option-value": "id",
                          "emit-value": "",
                          "map-options": "",
                          modelValue: model.value.radiomarathon_key_id,
                          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => model.value.radiomarathon_key_id = $event)
                        }, null, 8, ["options", "modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[14] || (_cache[14] = createBaseVNode("th", null, "Recibo deducible", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QCheckbox, {
                          dense: "",
                          modelValue: model.value.deductible_receipt,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => model.value.deductible_receipt = $event),
                          label: "Sí, requiere recibo deducible"
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    createBaseVNode("tr", null, [
                      _cache[15] || (_cache[15] = createBaseVNode("th", null, "Donante anónimo", -1)),
                      createBaseVNode("td", null, [
                        createVNode(QCheckbox, {
                          dense: "",
                          modelValue: model.value.anonymous,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => model.value.anonymous = $event),
                          label: "Sí, mantener anónimo"
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                loading: loading.value,
                class: "q-ml-auto",
                color: "primary",
                label: "Guardar",
                onClick: store
              }, null, 8, ["loading"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const PaymentPromiseForm = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-93367516"]]);
const _hoisted_1$1 = { class: "flex no-wrap" };
const _hoisted_2$1 = { class: "flex justify-center" };
const _hoisted_3$1 = { class: "flex justify-center q-gutter-x-sm" };
const _sfc_main$1 = {
  __name: "ProspectosPage",
  props: ["radiomarathonId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const donors = ref([]);
    const dialog = ref(false);
    const paymentDialog = ref(false);
    const publishDialog = ref(false);
    const donor = ref({});
    const columns = [
      {
        name: "id",
        required: true,
        label: "#",
        align: "left",
        field: "id",
        sortable: true
      },
      {
        name: "full_name",
        required: true,
        label: "Nombre donante",
        align: "left",
        field: "full_name",
        sortable: true
      },
      {
        name: "company_name",
        label: "Empresa",
        align: "left",
        field: (row) => row.company_name || "N/A",
        sortable: true
      },
      {
        name: "status",
        label: "Estatus Prospecto",
        align: "left",
        field: "published",
        sortable: true
      },
      {
        name: "promise_amount",
        label: "Monto Promesa",
        align: "left",
        field: (row) => row.payment_promises?.[0]?.amount ?? 0,
        format: (val) => formatCurrency(val),
        sortable: true
      },
      {
        name: "promise_date",
        label: "Fecha promesa de pago",
        align: "left",
        field: (row) => row.payment_promises?.[0]?.date ?? "-",
        sortable: true
      },
      {
        name: "published_at",
        label: "Publicado",
        align: "left",
        field: (row) => row.payment_promises?.[0]?.published_at ?? "Sin fecha",
        sortable: true
      },
      {
        name: "donations_sum_amount_format",
        label: "Monto Pagado",
        align: "left",
        field: (row) => row.donations_sum_amount_format ?? 0,
        sortable: true
      },
      {
        name: "payment_status",
        label: "Estatus de Pago",
        align: "left",
        field: "payment_status",
        sortable: true
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right"
      }
    ];
    async function fetchDonors() {
      try {
        loading.value = true;
        donors.value = (await api.get(`radiomarathon/${props.radiomarathonId}/donors`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los prospectos del evento");
      } finally {
        loading.value = false;
      }
    }
    const paymentPromise = ref({});
    function setPromise(row) {
      dialog.value = true;
      paymentPromise.value = {
        procuration_activity_id: props.radiomarathonId,
        donor_id: row.id,
        payment_type: "radiomaraton",
        amount: 0,
        date: Date.now(),
        radiomarathon_key_id: null,
        deductible_receipt: false,
        anonymous: false,
        donor: row
      };
    }
    const payment = ref({});
    function setDonor(row) {
      donor.value = row;
      paymentPromise.value = row.payment_promises?.[0] || {
        id: null,
        amount: 0,
        payment_type: "-",
        anonymous: false
      };
      publishDialog.value = true;
    }
    function setPayment(row) {
      const promise = row.payment_promises?.[0] || {};
      payment.value = {
        procuration_activity_id: props.radiomarathonId,
        activity_type: "radiomarathon",
        source: "prospecto",
        donor_id: row.id,
        full_name: row.full_name,
        company_name: row.company_name || "",
        payment_date: date.formatDate(/* @__PURE__ */ new Date(), "YYYY-MM-DD"),
        donation_type: "Efectivo",
        amount: promise.amount || 1e3,
        payment_method: "Efectivo",
        currency: "MXN",
        exchange_rate: 1,
        equivalent_amount_mxn: promise.amount || 0,
        radiomarathon_key_id: promise.radiomarathon_key_id,
        reference: null,
        has_tax_receipt: false
      };
      paymentPromise.value = {
        ...promise,
        donor: row
      };
      paymentDialog.value = true;
    }
    async function onSave() {
      await fetchDonors();
      notify.positive("Guardado exitosamente");
      dialog.value = false;
      paymentDialog.value = false;
    }
    const totalPromiseAmount = computed(() => {
      return donors.value.reduce((acc, donor2) => {
        const amount = Number(donor2.payment_promises?.[0]?.amount) || 0;
        return acc + amount;
      }, 0);
    });
    const totalPaidAmount = computed(() => {
      return donors.value.reduce((acc, donor2) => {
        const amount = Number(donor2.donations_sum_amount) || 0;
        return acc + amount;
      }, 0);
    });
    const totalPublishedAmount = computed(() => {
      return donors.value.reduce((acc, donor2) => {
        let promise = donor2.payment_promises?.[0];
        let published = !!promise?.published_at;
        let amount = published ? promise.amount : 0;
        return acc + Number(amount);
      }, 0);
    });
    const totalUnpublishedAmount = computed(() => {
      return totalPromiseAmount.value - totalPublishedAmount.value;
    });
    async function publishPromise() {
      if (!paymentPromise.value?.id || !paymentPromise.value?.amount || paymentPromise.value.amount <= 0) {
        notify.negative(
          "No se puede publicar: El prospecto no tiene una promesa de pago configurada o el monto es cero."
        );
        publishDialog.value = false;
        return;
      }
      try {
        loading.value = true;
        let data = {
          _method: "PUT",
          published_at: 1,
          anonymous: paymentPromise.value.anonymous
        };
        await api.post(`payment-promises/${paymentPromise.value.id}`, data);
        notify.positive("Monto promesa publicado exitosamente");
        await fetchDonors();
        publishDialog.value = false;
      } catch (error) {
        console.error(error);
        notify.negative("Error al publicar la promesa de pago");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchDonors();
    });
    function getPaymentStatus(row) {
      const paid = Number(row.donations_sum_amount) || 0;
      const promised = Number(row.payment_promises?.[0]?.amount) || 0;
      if (paid <= 0) {
        return { label: "Pendiente", color: "orange-4" };
      }
      if (promised > 0 && paid >= promised) {
        return { label: "Total", color: "green-5" };
      }
      return { label: "Parcial", color: "blue-4" };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QMarkupTable, {
          separator: "cell",
          bordered: "",
          flat: "",
          class: "q-mb-md"
        }, {
          default: withCtx(() => [
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                _cache[8] || (_cache[8] = createBaseVNode("th", null, "Monto total promesas", -1)),
                createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(totalPromiseAmount.value)), 1)
              ]),
              createBaseVNode("tr", null, [
                _cache[9] || (_cache[9] = createBaseVNode("th", null, "Monto total publicado", -1)),
                createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(totalPublishedAmount.value)), 1)
              ]),
              createBaseVNode("tr", null, [
                _cache[10] || (_cache[10] = createBaseVNode("th", null, "Total pendiente de publicar", -1)),
                createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(totalUnpublishedAmount.value)), 1)
              ]),
              createBaseVNode("tr", null, [
                _cache[11] || (_cache[11] = createBaseVNode("th", null, "Monto total pagado", -1)),
                createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(totalPaidAmount.value)), 1)
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          rows: donors.value,
          columns
        }, {
          "body-cell-status": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  label: props2.row.payment_promises[0]?.published ? "Publicado" : "Prospecto",
                  color: props2.row.payment_promises[0]?.published_at ? "green-3" : "yellow-3",
                  icon: props2.row.payment_promises[0]?.published_at ? "sym_o_timer" : "sym_o_timer"
                }, null, 8, ["label", "color", "icon"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-full_name": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  label: props2.row.full_name,
                  onClick: ($event) => setPromise(props2.row)
                }, null, 8, ["label", "onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$1, [
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "sym_o_check_circle",
                    disable: !props2.row.payment_promises?.[0]?.id || !!props2.row.payment_promises?.[0]?.published_at,
                    onClick: ($event) => setDonor(props2.row)
                  }, {
                    default: withCtx(() => [
                      !props2.row.payment_promises?.[0]?.id ? (openBlock(), createBlock(QTooltip, { key: 0 }, {
                        default: withCtx(() => _cache[12] || (_cache[12] = [
                          createTextVNode(" Sin promesa de pago registrada ")
                        ])),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["disable", "onClick"]),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "sym_o_attach_money",
                    onClick: ($event) => setPayment(props2.row)
                  }, null, 8, ["onClick"])
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-payment_status": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBadge, {
                  label: getPaymentStatus(props2.row).label,
                  color: getPaymentStatus(props2.row).color
                }, null, 8, ["label", "color"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows"]),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(PaymentPromiseForm, {
              onClose: _cache[0] || (_cache[0] = ($event) => dialog.value = false),
              onSaved: onSave,
              modelValue: paymentPromise.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => paymentPromise.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: paymentDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => paymentDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$8, {
              onClose: _cache[3] || (_cache[3] = ($event) => paymentDialog.value = false),
              onSaved: onSave,
              modelValue: payment.value,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => payment.value = $event),
              "payment-promise": payment.value,
              source: "prospecto"
            }, null, 8, ["modelValue", "payment-promise"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: publishDialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => publishDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "400px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$1, [
                      createVNode(QAvatar, {
                        color: "grey-3",
                        "text-color": "primary",
                        icon: "question_mark"
                      })
                    ]),
                    _cache[13] || (_cache[13] = createBaseVNode("h2", { class: "text-h6 text-center" }, "¿Esta seguro de que desea publicar este donativo?", -1))
                  ]),
                  _: 1
                }),
                createVNode(QMarkupTable, { separator: "cell" }, {
                  default: withCtx(() => [
                    createBaseVNode("tbody", null, [
                      createBaseVNode("tr", null, [
                        _cache[14] || (_cache[14] = createBaseVNode("th", null, "Nombre del donante:", -1)),
                        createBaseVNode("td", null, toDisplayString(paymentPromise.value.anonymous ? "Anónimo" : donor.value.full_name || "Anónimo"), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[15] || (_cache[15] = createBaseVNode("th", null, "Empresa:", -1)),
                        createBaseVNode("td", null, toDisplayString(paymentPromise.value.anonymous ? "Anónimo" : donor.value.company_name || "Anónimo"), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[16] || (_cache[16] = createBaseVNode("th", null, "Monto promesa actual:", -1)),
                        createBaseVNode("td", null, toDisplayString(unref(formatCurrency)(paymentPromise.value.amount || 0)), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[17] || (_cache[17] = createBaseVNode("th", null, "Tipo de donativo:", -1)),
                        createBaseVNode("td", null, toDisplayString(paymentPromise.value.payment_type || "-"), 1)
                      ]),
                      createBaseVNode("tr", null, [
                        _cache[18] || (_cache[18] = createBaseVNode("th", null, "Es anónimo:", -1)),
                        createBaseVNode("td", null, [
                          createVNode(QCheckbox, {
                            modelValue: paymentPromise.value.anonymous,
                            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => paymentPromise.value.anonymous = $event)
                          }, null, 8, ["modelValue"])
                        ])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_3$1, [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancelar",
                        icon: "close"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      createVNode(QBtn, {
                        color: "primary",
                        label: "Publicar",
                        icon: "check",
                        loading: loading.value,
                        disable: !paymentPromise.value.id || !paymentPromise.value.amount || paymentPromise.value.amount <= 0,
                        onClick: publishPromise
                      }, null, 8, ["loading", "disable"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
const _hoisted_1 = { class: "page-title" };
const _hoisted_2 = { class: "flex q-gutter-x-md q-mb-md" };
const _hoisted_3 = { class: "q-ml-auto q-gutter-x-sm q-mb-md" };
const _sfc_main = {
  __name: "RadiomaratonOperar",
  props: ["radiomarathonId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const radioMaraton = ref({});
    const loadingExport = ref(false);
    async function fetchRadioMaraton() {
      try {
        loading.value = true;
        radioMaraton.value = (await api.get(`procuration-activities/${props.radiomarathonId}`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar la informacion del evento");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchRadioMaraton();
    });
    const tabs = ref([
      { label: "Prospectos", value: "operar" },
      { label: "Boteo", value: "boteo" },
      { label: "Donativos varios", value: "otros" },
      { label: "Seguimiento a cobranza", value: "cobranza" }
    ]);
    const tab = ref("operar");
    const exportCategory = computed(() => {
      const categoryMap = {
        operar: "prospecto",
        boteo: "boteo",
        otros: "others",
        cobranza: "cobranza"
      };
      return categoryMap[tab.value] || "prospecto";
    });
    async function exportXls() {
      loading.value = true;
      try {
        const url = `/donations/export?category=${exportCategory.value}&procuration_activity_id=${props.radiomarathonId}`;
        await exportXlsFile(url);
      } catch (error) {
        console.error(error);
        notify.negative("Error al descargar el archivo Excel");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", _hoisted_1, toDisplayString(radioMaraton.value.name), 1),
        createBaseVNode("div", _hoisted_2, [
          createVNode(QBtnToggle, {
            modelValue: tab.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
            "toggle-color": "primary",
            options: tabs.value
          }, null, 8, ["modelValue", "options"]),
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              icon: "file_download",
              label: "Exportar Excel",
              loading: loadingExport.value,
              onClick: exportXls
            }, null, 8, ["loading"]),
            createVNode(QBtn, {
              color: "primary",
              icon: "sym_o_cast",
              to: "stream",
              label: "Stream"
            })
          ])
        ]),
        createVNode(QTabPanels, {
          modelValue: tab.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tab.value = $event),
          animated: "",
          class: "rounded-borders"
        }, {
          default: withCtx(() => [
            createVNode(QTabPanel, {
              name: "operar",
              class: "q-pa-none"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$1, {
                  "radiomarathon-id": props.radiomarathonId
                }, null, 8, ["radiomarathon-id"])
              ]),
              _: 1
            }),
            createVNode(QTabPanel, {
              name: "boteo",
              class: "q-pa-none"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$7, {
                  "procuration-activity-id": props.radiomarathonId
                }, null, 8, ["procuration-activity-id"])
              ]),
              _: 1
            }),
            createVNode(QTabPanel, {
              name: "otros",
              class: "q-pa-none"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$4, {
                  "radiomarathon-id": props.radiomarathonId
                }, null, 8, ["radiomarathon-id"])
              ]),
              _: 1
            }),
            createVNode(QTabPanel, {
              name: "cobranza",
              class: "q-pa-none"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$3, {
                  "radiomarathon-id": props.radiomarathonId
                }, null, 8, ["radiomarathon-id"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
