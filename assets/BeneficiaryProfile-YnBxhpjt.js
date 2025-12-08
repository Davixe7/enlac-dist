import { Q as QImg } from "./QImg-CLOeK5NX.js";
import { bq as mergeModels, br as useModel, r as ref, q as createBlock, a as openBlock, w as withCtx, d as createVNode, n as QCardSection, b as createBaseVNode, c as createElementBlock, E as createCommentVNode, Q as QInput, H as Fragment, bU as QCardActions, h as QBtn, m as QCard, o as onMounted, g as unref, t as toDisplayString, L as QRadio, s as QDialog } from "./index-ByC9LpzG.js";
import { Q as QExpansionItem } from "./QExpansionItem-CBOEDKea.js";
import { u as useCandidateStore } from "./candidate-store-COF2TvnU.js";
import { n as notify } from "./notify-CW-opdH0.js";
const _hoisted_1$1 = ["src"];
const _sfc_main$1 = {
  __name: "TransportModal",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: /* @__PURE__ */ mergeModels(["update:modelValue", "save"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    const loading = ref(false);
    const emit = __emit;
    const candidateStore = useCandidateStore();
    function isValidGoogleMapsLink(url) {
      return /^https?:\/\/(www\.)?google\.[a-z]+\/maps/.test(url) || /^https?:\/\/maps\.app\.goo\.gl/.test(url);
    }
    async function saveTransport() {
      try {
        loading.value = true;
        await candidateStore.saveLocation(model.value);
        notify.positive("Datos de transporte actualizados correctamente.");
        emit("close");
      } catch (error) {
        console.log(error);
        notify.negative("Error al guardar los datos.");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "min-width": "500px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createBaseVNode("div", { class: "text-h6" }, "Datos de transporte", -1)
            ])),
            _: 1
          }),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createVNode(QInput, {
                outlined: "",
                modelValue: model.value.transport_address,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value.transport_address = $event),
                label: "Dirección",
                filled: "",
                class: "q-mb-md"
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                modelValue: model.value.transport_location_link,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value.transport_location_link = $event),
                label: "Ubicación (Google Maps)",
                filled: "",
                type: "url",
                class: "q-mb-sm"
              }, null, 8, ["modelValue"]),
              isValidGoogleMapsLink(model.value.transport_location_link) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                _cache[5] || (_cache[5] = createBaseVNode("div", { class: "form-label q-mt-md" }, "Vista previa del mapa", -1)),
                createBaseVNode("iframe", {
                  src: model.value.transport_location_link,
                  width: "100%",
                  height: "300",
                  style: { "border": "0" },
                  allowfullscreen: "",
                  loading: "lazy",
                  referrerpolicy: "no-referrer-when-downgrade"
                }, null, 8, _hoisted_1$1)
              ], 64)) : createCommentVNode("", true),
              createVNode(QInput, {
                outlined: "",
                modelValue: model.value.curp,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value.curp = $event),
                label: "CURP",
                filled: "",
                class: "q-mt-md"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(QCardActions, { align: "right" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                label: "Guardar",
                color: "primary",
                onClick: saveTransport
              }),
              createVNode(QBtn, {
                label: "Cancelar",
                flat: "",
                onClick: _cache[3] || (_cache[3] = ($event) => emit("close"))
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
const _hoisted_11 = { class: "form-row" };
const _hoisted_12 = { class: "form-group" };
const _hoisted_13 = {
  key: 0,
  class: "form-value"
};
const _hoisted_14 = { class: "form-group" };
const _hoisted_15 = {
  key: 0,
  class: "form-value"
};
const _hoisted_16 = { class: "form-group" };
const _hoisted_17 = { class: "form-value" };
const _hoisted_18 = { class: "form-row q-mt-md" };
const _hoisted_19 = { class: "form-group form-group--half" };
const _hoisted_20 = { class: "form-group form-group--half" };
const _hoisted_21 = { class: "form-row q-mt-md" };
const _hoisted_22 = { class: "form-group form-group--full" };
const _hoisted_23 = { class: "row items-center justify-between q-gutter-sm" };
const _hoisted_24 = { key: 0 };
const _sfc_main = {
  __name: "BeneficiaryProfile",
  props: {
    candidateId: Number,
    locationId: Number
  },
  setup(__props) {
    const props = __props;
    const candidateStore = useCandidateStore();
    const transportDialog = ref(false);
    const relationships = {
      abuelo: "Abuelo(a)",
      hermano: "Hermano(a)",
      hermanastro: "Hermanastro(a)",
      madre_padre: "Madre/Padre",
      padrastro_madrastra: "Padrastro/Madrastra",
      primo: "Primo(a)",
      tio: "Tío(a)"
    };
    onMounted(async () => {
      candidateStore.id = props.candidateId;
      candidateStore.location_id = props.locationId;
      await candidateStore.fetchCandidate();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(QImg, {
            color: "grey",
            width: "100%",
            height: "100%",
            style: { "background": "lightgrey" },
            src: unref(candidateStore).picture
          }, null, 8, ["src"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              _cache[15] || (_cache[15] = createBaseVNode("div", { class: "form-label" }, "Nombre del beneficiario", -1)),
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(candidateStore).full_name), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[16] || (_cache[16] = createBaseVNode("div", { class: "form-label" }, "Fecha de ingreso", -1)),
              createBaseVNode("div", _hoisted_8, toDisplayString(unref(candidateStore).entry_date ?? "--"), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[17] || (_cache[17] = createBaseVNode("div", { class: "form-label" }, "Folio", -1)),
              createBaseVNode("div", _hoisted_10, toDisplayString(unref(candidateStore).id), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "form-label" }, "Responsable del beneficiario", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(candidateStore).contact.first_name + " " + unref(candidateStore).contact.last_name), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_14, [
              _cache[19] || (_cache[19] = createBaseVNode("div", { class: "form-label" }, "Parentesco", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(relationships[unref(candidateStore).contact.relationship.toLowerCase()]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_16, [
              _cache[20] || (_cache[20] = createBaseVNode("div", { class: "form-label" }, "Programa", -1)),
              createBaseVNode("div", _hoisted_17, toDisplayString(unref(candidateStore).program?.name), 1)
            ])
          ]),
          createVNode(QExpansionItem, {
            label: "Información adicional del beneficiario",
            icon: "expand_more",
            "expand-separator": "",
            dense: "",
            "header-class": "text-primary"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  _cache[21] || (_cache[21] = createBaseVNode("div", { class: "form-label" }, "Permiso para Equinoterapia por Médico", -1)),
                  createVNode(QRadio, {
                    label: "Sí",
                    val: 1,
                    modelValue: unref(candidateStore).equinetherapy_permission_medical,
                    "onUpdate:modelValue": [
                      _cache[0] || (_cache[0] = ($event) => unref(candidateStore).equinetherapy_permission_medical = $event),
                      _cache[1] || (_cache[1] = ($event) => unref(candidateStore).updateEquineTherapyPermission({
                        equinetherapy_permission_medical: unref(candidateStore).equinetherapy_permission_medical
                      }))
                    ],
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"]),
                  createVNode(QRadio, {
                    label: "No",
                    val: 0,
                    modelValue: unref(candidateStore).equinetherapy_permission_medical,
                    "onUpdate:modelValue": [
                      _cache[2] || (_cache[2] = ($event) => unref(candidateStore).equinetherapy_permission_medical = $event),
                      _cache[3] || (_cache[3] = ($event) => unref(candidateStore).updateEquineTherapyPermission({
                        equinetherapy_permission_medical: unref(candidateStore).equinetherapy_permission_medical
                      }))
                    ],
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"])
                ]),
                createBaseVNode("div", _hoisted_20, [
                  _cache[22] || (_cache[22] = createBaseVNode("div", { class: "form-label" }, "Permiso para Equinoterapia por Tutor Legal", -1)),
                  createVNode(QRadio, {
                    label: "Sí",
                    val: 1,
                    modelValue: unref(candidateStore).equinetherapy_permission_legal_guardian,
                    "onUpdate:modelValue": [
                      _cache[4] || (_cache[4] = ($event) => unref(candidateStore).equinetherapy_permission_legal_guardian = $event),
                      _cache[5] || (_cache[5] = ($event) => unref(candidateStore).updateEquineTherapyPermission({
                        equinetherapy_permission_legal_guardian: unref(candidateStore).equinetherapy_permission_legal_guardian
                      }))
                    ],
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"]),
                  createVNode(QRadio, {
                    label: "No",
                    val: 0,
                    modelValue: unref(candidateStore).equinetherapy_permission_legal_guardian,
                    "onUpdate:modelValue": [
                      _cache[6] || (_cache[6] = ($event) => unref(candidateStore).equinetherapy_permission_legal_guardian = $event),
                      _cache[7] || (_cache[7] = ($event) => unref(candidateStore).updateEquineTherapyPermission({
                        equinetherapy_permission_legal_guardian: unref(candidateStore).equinetherapy_permission_legal_guardian
                      }))
                    ],
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"])
                ])
              ]),
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  _cache[23] || (_cache[23] = createBaseVNode("div", { class: "form-label" }, "¿Requiere transporte Cuauhtémoc - Rubio?", -1)),
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("div", null, [
                      createVNode(QRadio, {
                        label: "Sí",
                        val: 1,
                        modelValue: unref(candidateStore).requires_transport,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(candidateStore).requires_transport = $event),
                        modelModifiers: { number: true }
                      }, null, 8, ["modelValue"]),
                      createVNode(QRadio, {
                        label: "No",
                        val: 0,
                        modelValue: unref(candidateStore).requires_transport,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(candidateStore).requires_transport = $event),
                        modelModifiers: { number: true },
                        onClick: _cache[10] || (_cache[10] = ($event) => unref(candidateStore).deleteLocation())
                      }, null, 8, ["modelValue"])
                    ]),
                    unref(candidateStore).requires_transport === 1 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                      createVNode(QBtn, {
                        label: "Ver / Editar transporte",
                        color: "primary",
                        onClick: _cache[11] || (_cache[11] = ($event) => transportDialog.value = true)
                      })
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ]),
        createVNode(QDialog, {
          modelValue: transportDialog.value,
          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => transportDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              modelValue: unref(candidateStore).location_detail,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(candidateStore).location_detail = $event),
              onClose: _cache[13] || (_cache[13] = ($event) => transportDialog.value = false)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
