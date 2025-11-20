import { Q as QImg } from "./QImg-DKYrHYl6.js";
import { r as ref, D as watch, c as createElementBlock, a as openBlock, d as createVNode, w as withCtx, l as QCard, m as QCardSection, b as createBaseVNode, E as createCommentVNode, Q as QInput, h as QBtn, H as Fragment, bQ as QCardActions, s as QDialog, j as createTextVNode, N as nextTick, o as onMounted, g as unref, t as toDisplayString, L as QRadio } from "./index-Dk-vfK7v.js";
import { Q as QExpansionItem } from "./QExpansionItem-DsCrMgbu.js";
import { u as useCandidateStore } from "./candidate-store-BJ5zmJy6.js";
import { u as useQuasar } from "./use-quasar-Db6bNxqq.js";
import { n as notify } from "./notify-qwVxQIpJ.js";
const _hoisted_1$1 = ["src"];
const _sfc_main$1 = {
  __name: "TransportModal",
  props: {
    modelValue: Boolean,
    requiresTransport: Number,
    transportAddress: String,
    transportLocationLink: String,
    curp: String
  },
  emits: ["update:modelValue", "save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const showMapHelpModal = ref(false);
    const openGoogleMapsSearch = () => {
      window.open("https://www.google.com/maps", "_blank");
    };
    const emit = __emit;
    const dialogVisible = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (val) => {
        dialogVisible.value = val;
      }
    );
    watch(dialogVisible, (val) => {
      emit("update:modelValue", val);
    });
    const $q = useQuasar();
    const candidateStore = useCandidateStore();
    const localRequiresTransport = ref(props.requiresTransport);
    const localTransportAddress = ref(props.transportAddress);
    const localTransportLocationLink = ref(props.transportLocationLink);
    const localCurp = ref(props.curp);
    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          localRequiresTransport.value = props.requiresTransport;
          localTransportAddress.value = props.transportAddress;
          localTransportLocationLink.value = props.transportLocationLink;
          localCurp.value = props.curp;
        }
      }
    );
    const isValidGoogleMapsLink = (url) => {
      return /^https?:\/\/(www\.)?google\.[a-z]+\/maps/.test(url);
    };
    const saveTransport = async () => {
      if (localRequiresTransport.value === 1 && !localCurp.value) {
        $q.notify({
          type: "negative",
          message: "CURP es obligatorio si requiere transporte."
        });
        return;
      }
      const payload = {
        requires_transport: localRequiresTransport.value === 1,
        transport_address: localTransportAddress.value,
        transport_location_link: localTransportLocationLink.value,
        curp: localCurp.value
      };
      try {
        const response = await candidateStore.updateTransport(payload);
        notify.positive(response.data.message || "Datos de transporte actualizados correctamente.");
        emit("save", payload);
        emit("update:modelValue", false);
      } catch (error) {
        console.error("Error al guardar:", error);
        const message = error?.response?.data?.message || error?.message || "Error al guardar los datos.";
        notify.negative(message);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QDialog, {
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => dialogVisible.value = $event),
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "500px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[9] || (_cache[9] = [
                    createBaseVNode("div", { class: "text-h6" }, "Datos de transporte", -1)
                  ])),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      modelValue: localTransportAddress.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localTransportAddress.value = $event),
                      label: "Dirección",
                      filled: "",
                      class: "q-mb-md"
                    }, null, 8, ["modelValue"]),
                    createVNode(QInput, {
                      modelValue: localTransportLocationLink.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localTransportLocationLink.value = $event),
                      label: "Ubicación (Google Maps)",
                      filled: "",
                      type: "url",
                      class: "q-mb-sm"
                    }, null, 8, ["modelValue"]),
                    createVNode(QBtn, {
                      label: "Buscar ubicación en Google Maps",
                      color: "primary",
                      flat: "",
                      size: "sm",
                      class: "q-mt-sm",
                      onClick: _cache[2] || (_cache[2] = ($event) => showMapHelpModal.value = true)
                    }),
                    isValidGoogleMapsLink(localTransportLocationLink.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      _cache[10] || (_cache[10] = createBaseVNode("div", { class: "form-label q-mt-md" }, "Vista previa del mapa", -1)),
                      createBaseVNode("iframe", {
                        src: localTransportLocationLink.value,
                        width: "100%",
                        height: "300",
                        style: { "border": "0" },
                        allowfullscreen: "",
                        loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade"
                      }, null, 8, _hoisted_1$1)
                    ], 64)) : createCommentVNode("", true),
                    createVNode(QInput, {
                      modelValue: localCurp.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => localCurp.value = $event),
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
                      onClick: _cache[4] || (_cache[4] = ($event) => emit("update:modelValue", false))
                    })
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
          modelValue: showMapHelpModal.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => showMapHelpModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "400px", "max-width": "90vw" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center justify-between" }, {
                  default: withCtx(() => [
                    _cache[11] || (_cache[11] = createBaseVNode("div", { class: "text-h6" }, "¿Cómo obtener el enlace?", -1)),
                    createVNode(QBtn, {
                      icon: "close",
                      flat: "",
                      round: "",
                      dense: "",
                      onClick: _cache[6] || (_cache[6] = ($event) => showMapHelpModal.value = false)
                    })
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[12] || (_cache[12] = [
                    createBaseVNode("p", null, "Haz clic en el botón para abrir Google Maps en una nueva pestaña.", -1),
                    createBaseVNode("p", null, [
                      createTextVNode(" Busca la dirección, haz clic derecho sobre el marcador y selecciona "),
                      createBaseVNode("strong", null, "“Compartir”"),
                      createTextVNode(". ")
                    ], -1),
                    createBaseVNode("p", null, "Copia el enlace y pégalo en el campo de ubicación.", -1)
                  ])),
                  _: 1
                }),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      label: "Abrir Google Maps",
                      color: "primary",
                      onClick: openGoogleMapsSearch
                    }),
                    createVNode(QBtn, {
                      label: "Cerrar",
                      flat: "",
                      onClick: _cache[7] || (_cache[7] = ($event) => showMapHelpModal.value = false)
                    })
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
const _hoisted_19 = { class: "form-group" };
const _hoisted_20 = { class: "form-group" };
const _hoisted_21 = { class: "form-row q-mt-md" };
const _hoisted_22 = { class: "form-group" };
const _hoisted_23 = { key: 0 };
const _hoisted_24 = {
  key: 0,
  class: "form-group q-mt-sm"
};
const _sfc_main = {
  __name: "BeneficiaryProfile",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const candidateStore = useCandidateStore();
    const showTransportModal = ref(false);
    const requiresTransport = ref(0);
    const transportAddress = ref("");
    const transportLocationLink = ref("");
    const curp = ref("");
    let originalValues = {
      requires_transport: false,
      transport_address: "",
      transport_location_link: "",
      curp: ""
    };
    const hasInteracted = ref(false);
    const isValidGoogleMapsLink = (url) => {
      return /^https?:\/\/(www\.)?google\.[a-z]+\/maps/.test(url) || /^https?:\/\/maps\.app\.goo\.gl/.test(url);
    };
    const openGoogleMaps = () => {
      if (isValidGoogleMapsLink(transportLocationLink.value)) {
        window.open(transportLocationLink.value, "_blank");
      }
    };
    const relationships = {
      abuelo: "Abuelo(a)",
      hermano: "Hermano(a)",
      hermanastro: "Hermanastro(a)",
      madre_padre: "Madre/Padre",
      padrastro_madrastra: "Padrastro/Madrastra",
      primo: "Primo(a)",
      tio: "Tío(a)"
    };
    watch(requiresTransport, async (newVal, oldVal) => {
      if (!hasInteracted.value) {
        hasInteracted.value = true;
        return;
      }
      if (newVal === 1 && oldVal !== 1) {
        await nextTick();
        showTransportModal.value = true;
      } else if (newVal === 0) {
        candidateStore.cancelTransport();
      }
    });
    onMounted(async () => {
      candidateStore.id = props.candidateId;
      await candidateStore.fetchCandidate();
      const isTransportRequired = parseInt(candidateStore.requires_transport) || 0;
      originalValues = {
        requires_transport: isTransportRequired,
        transport_address: candidateStore.transport_address ?? "",
        transport_location_link: candidateStore.transport_location_link ?? "",
        curp: candidateStore.curp ?? ""
      };
      requiresTransport.value = originalValues.requires_transport;
      transportAddress.value = originalValues.transport_address;
      transportLocationLink.value = originalValues.transport_location_link;
      curp.value = originalValues.curp;
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
              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "form-label" }, "Nombre del beneficiario", -1)),
              createBaseVNode("div", _hoisted_6, toDisplayString(unref(candidateStore).full_name), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[14] || (_cache[14] = createBaseVNode("div", { class: "form-label" }, "Fecha de ingreso", -1)),
              createBaseVNode("div", _hoisted_8, toDisplayString(unref(candidateStore).onboard_at), 1)
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[15] || (_cache[15] = createBaseVNode("div", { class: "form-label" }, "Folio", -1)),
              createBaseVNode("div", _hoisted_10, toDisplayString(unref(candidateStore).id), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [
              _cache[16] || (_cache[16] = createBaseVNode("div", { class: "form-label" }, "Responsable del beneficiario", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(unref(candidateStore).contact.first_name + " " + unref(candidateStore).contact.last_name), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_14, [
              _cache[17] || (_cache[17] = createBaseVNode("div", { class: "form-label" }, "Parentesco", -1)),
              unref(candidateStore).contact ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(relationships[unref(candidateStore).contact.relationship.toLowerCase()]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_16, [
              _cache[18] || (_cache[18] = createBaseVNode("div", { class: "form-label" }, "Programa", -1)),
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
                  _cache[19] || (_cache[19] = createBaseVNode("div", { class: "form-label" }, "Permiso para Equinoterapia por Médico", -1)),
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
                  _cache[20] || (_cache[20] = createBaseVNode("div", { class: "form-label" }, "Permiso para Equinoterapia por Tutor Legal", -1)),
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
                  _cache[21] || (_cache[21] = createBaseVNode("div", { class: "form-label" }, "¿Requiere transporte Cuauhtémoc - Rubio?", -1)),
                  createVNode(QRadio, {
                    label: "Sí",
                    val: 1,
                    modelValue: requiresTransport.value,
                    "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => requiresTransport.value = $event),
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"]),
                  createVNode(QRadio, {
                    label: "No",
                    val: 0,
                    modelValue: requiresTransport.value,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => requiresTransport.value = $event),
                    modelModifiers: { number: true }
                  }, null, 8, ["modelValue"])
                ]),
                requiresTransport.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_23, [
                  createVNode(QBtn, {
                    label: "Ver / Editar transporte",
                    color: "primary",
                    class: "q-mt-sm",
                    onClick: _cache[10] || (_cache[10] = ($event) => showTransportModal.value = true)
                  }),
                  isValidGoogleMapsLink(transportLocationLink.value) ? (openBlock(), createElementBlock("div", _hoisted_24, [
                    _cache[22] || (_cache[22] = createBaseVNode("div", { class: "form-label" }, "Ubicación en Google Maps", -1)),
                    createVNode(QBtn, {
                      label: "Ver ubicación",
                      color: "secondary",
                      flat: "",
                      size: "sm",
                      onClick: openGoogleMaps
                    })
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          })
        ]),
        createVNode(_sfc_main$1, {
          modelValue: showTransportModal.value,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => showTransportModal.value = $event),
          "requires-transport": requiresTransport.value,
          "transport-address": transportAddress.value,
          "transport-location-link": transportLocationLink.value,
          curp: curp.value,
          onSave: _cache[12] || (_cache[12] = (payload) => {
            requiresTransport.value = payload.requires_transport ? 1 : 0;
            transportAddress.value = payload.transport_address;
            transportLocationLink.value = payload.transport_location_link;
            curp.value = payload.curp;
          })
        }, null, 8, ["modelValue", "requires-transport", "transport-address", "transport-location-link", "curp"])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
