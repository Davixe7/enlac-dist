import { A as defineStore, i as api, r as ref, o as onMounted, l as createBlock, a as openBlock, T as storeToRefs, S as reactive, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, C as renderList, g as unref, Q as QBtn, j as QIcon, e as withModifiers, x as createCommentVNode, t as toDisplayString, h as createTextVNode } from "./index-C2KXjwrR.js";
import { Q as QInput } from "./QInput-C-mtqO6Q.js";
import { Q as QSelect } from "./QSelect-BuVzIreX.js";
import { Q as QForm } from "./QForm-BXTj23Ur.js";
import { Q as QCard, a as QCardSection } from "./QCard-CI6b1UjI.js";
import { n as notify } from "./notify-3cR8ls6a.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./use-dark-BFshqYza.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./QDialog-CDPZ16vR.js";
import "./use-timeout-C7Vsd41J.js";
const useSponsorStore = defineStore("sponsor", {
  state: () => ({
    loading: false,
    errors: {},
    sponsors: []
  }),
  actions: {
    validateAddresses(addresses) {
      const requiredFields = ["street", "inner_number", "outer_number", "neighborhood", "city", "state", "country", "email", "phone", "whatsapp"];
      return addresses.filter((address) => Object.values(requiredFields).some((field) => !!address[field]));
    },
    async saveData(sponsor) {
      this.loading = true;
      this.errors = {};
      try {
        let route = sponsor.id ? `/sponsors/${sponsor.id}` : "/sponsors";
        let data = sponsor.id ? { ...sponsor, _method: "PUT" } : { ...sponsor };
        data.addresses = this.validateAddresses(sponsor.addresses);
        let newSponsor = (await api.post(route, data)).data.data;
        if (!sponsor.id) {
          this.sponsors.push(newSponsor);
        } else {
          let index = this.sponsors.findIndex((i) => i.id == sponsor.id);
          this.sponsors.splice(index, 1, newSponsor);
        }
        notify.positive("Guardado con éxito");
        let redirectTo = this.router.currentRoute.value.name == "sponsors.edit" ? `/padrinos/${sponsor.id}` : `/beneficiarios/${sponsor.candidate_id}/padrinos/${newSponsor.id}`;
        this.router.push(redirectTo);
      } catch (error) {
        console.log(error);
        this.errors = error.status == 422 ? error.formatted : {};
        notify.negative("No se pudo guardar");
      } finally {
        this.loading = false;
      }
    },
    async fetchSponsors() {
      try {
        this.loading = true;
        this.sponsors = (await api.get("sponsors")).data.data;
      } catch (error) {
        this.errors = error.status == 422 && error.formatted ? error.formatted : {};
      }
      this.loading = false;
    }
  }
});
const _sfc_main$1 = {
  __name: "BeneficiariesPicker",
  props: ["modelValue", "disable"],
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const selectedId = ref(null);
    const options = ref([]);
    const page = ref(1);
    const loading = ref(false);
    onMounted(async () => {
      if (!props.modelValue) {
        await fetchBeneficiaries();
        return;
      }
      options.value.push((await api.get(`/beneficiaries/${props.modelValue}`)).data.data);
      selectedId.value = Number(props.modelValue);
    });
    async function fetchBeneficiaries() {
      console.log("Carga inicial de opciones");
      options.value = (await api.get("/beneficiaries")).data.data;
    }
    const buscarOpciones = async (val, update, abort) => {
      console.log("Buscando opciones");
      if (loading.value) return;
      loading.value = true;
      try {
        const { data } = (await api.get(`/beneficiaries/?name=${val}`)).data;
        update(() => options.value = data);
      } catch (error) {
        console.error("Error al buscar:", error);
        abort();
      } finally {
        loading.value = false;
      }
    };
    const cargarMasOpciones = async (evt) => {
      if (loading.value) return;
      if (evt.target.scrollTop + evt.target.clientHeight >= evt.target.scrollHeight - 50) {
        loading.value = true;
        try {
          const { data } = (await api.get(`/beneficiaries/?page=${page.value}`)).data;
          options.value.push(...data);
          page.value++;
        } catch (error) {
          console.error("Error al cargar más opciones:", error);
        } finally {
          loading.value = false;
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        disable: props.disable,
        outlined: "",
        dense: "",
        onChange: _cache[0] || (_cache[0] = ($event) => emits("update:modelValue", selectedId.value)),
        "use-input": "",
        key: selectedId.value,
        modelValue: selectedId.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedId.value = $event),
        "input-debounce": "500",
        options: options.value,
        "option-value": "id",
        "option-label": "name",
        "emit-value": "",
        "map-options": "",
        onFilter: buscarOpciones,
        onScroll: cargarMasOpciones,
        "hide-bottom-space": ""
      }, null, 8, ["disable", "modelValue", "options"]);
    };
  }
};
const _hoisted_1 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_2 = {
  key: 0,
  class: "row items-center"
};
const _hoisted_3 = { class: "row items-center" };
const _hoisted_4 = { class: "row items-center" };
const _hoisted_5 = { class: "row items-center" };
const _hoisted_6 = { class: "row items-center" };
const _hoisted_7 = { class: "row items-center" };
const _hoisted_8 = { class: "row items-center" };
const _hoisted_9 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_10 = { class: "page-subtitle q-my-none" };
const _hoisted_11 = { class: "row items-center" };
const _hoisted_12 = { class: "row items-center" };
const _hoisted_13 = { class: "row items-center" };
const _hoisted_14 = { class: "row items-center" };
const _hoisted_15 = { class: "row items-center" };
const _hoisted_16 = { class: "row items-center" };
const _hoisted_17 = { class: "row items-center" };
const _hoisted_18 = { class: "row items-center" };
const _hoisted_19 = { class: "row items-center" };
const _hoisted_20 = { class: "row items-center" };
const _hoisted_21 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "SponsorForm",
  props: ["candidateId", "sponsorId"],
  setup(__props) {
    const store = useSponsorStore();
    const { errors } = storeToRefs(store);
    const props = __props;
    const maritalStatusOptions = [
      { label: "Soltero(a)", value: "Soltero(a)" },
      { label: "Casado(a)", value: "Casado(a)" },
      { label: "Divorciado(a)", value: "Divorciado(a)" },
      { label: "Viudo(a)", value: "Viudo(a)" },
      { label: "Unión Libre", value: "Union Libre" }
    ];
    const defaultAddress = reactive({
      type: "home",
      street: "",
      inner_number: "",
      outer_number: "",
      neighborhood: "",
      city: "",
      state: "",
      country: "",
      email: "",
      phone: "",
      whatsapp: ""
    });
    const sponsor = ref({
      candidate_id: props.candidateId ? props.candidateId : null,
      name: "",
      last_name: "",
      second_last_name: "",
      company_name: null,
      birthdate: "",
      marital_status: null,
      addresses: [
        { ...defaultAddress, type: "home" },
        { ...defaultAddress, type: "office" }
      ]
    });
    onMounted(async () => {
      if (!props.sponsorId) return;
      sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[29] || (_cache[29] = createBaseVNode("h1", { class: "page-title" }, "Formato Padrino/Madrina", -1)),
        createVNode(QCard, { class: "q-mb-lg" }, {
          default: withCtx(() => [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(QIcon, {
                    size: "16px",
                    name: "sym_o_edit",
                    class: "q-mr-sm"
                  }),
                  _cache[10] || (_cache[10] = createBaseVNode("div", { class: "text-primary" }, "Informacion personal", -1))
                ]),
                createVNode(QForm, {
                  onSubmit: _cache[7] || (_cache[7] = withModifiers(($event) => unref(store).saveData(sponsor.value), ["prevent"])),
                  class: "q-gutter-y-md"
                }, {
                  default: withCtx(() => [
                    !props.sponsorId ? (openBlock(), createElementBlock("div", _hoisted_2, [
                      _cache[11] || (_cache[11] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Seleccione Candidato", -1)),
                      createVNode(_sfc_main$1, {
                        disable: !!props.candidateId,
                        class: "col-12 col-md-6",
                        modelValue: sponsor.value.candidate_id,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sponsor.value.candidate_id = $event)
                      }, null, 8, ["disable", "modelValue"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_3, [
                      _cache[12] || (_cache[12] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Nombre(s)", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.name,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => sponsor.value.name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).name,
                        "error-message": unref(errors).name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_4, [
                      _cache[13] || (_cache[13] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Apellido paterno", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.last_name,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sponsor.value.last_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).last_name,
                        "error-message": unref(errors).last_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      _cache[14] || (_cache[14] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Apellido materno", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.second_last_name,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sponsor.value.second_last_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).second_last_name,
                        "error-message": unref(errors).second_last_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      _cache[15] || (_cache[15] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Razón o Denominación Social", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.company_name,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sponsor.value.company_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).company_name,
                        "error-message": unref(errors).company_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      _cache[16] || (_cache[16] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Fecha de nacimiento", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.birthdate,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sponsor.value.birthdate = $event),
                        mask: "####-##-##",
                        type: "date",
                        "hide-bottom-space": "",
                        error: !!unref(errors).birthdate,
                        "error-message": unref(errors).birthdate
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      _cache[17] || (_cache[17] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Estado civil", -1)),
                      createVNode(QSelect, {
                        class: "col-12 col-md-6 col-md-4",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.marital_status,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sponsor.value.marital_status = $event),
                        options: maritalStatusOptions,
                        "hide-bottom-space": "",
                        "emit-value": "",
                        "map-options": "",
                        error: !!unref(errors).marital_status,
                        "error-message": unref(errors).marital_status
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(sponsor.value.addresses, (address, i) => {
          return openBlock(), createBlock(QCard, {
            class: "q-mb-lg",
            key: i
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(QIcon, {
                      size: "24px",
                      name: `sym_o_${address.type == "home" ? "home" : "domain"}`,
                      class: "q-mr-md"
                    }, null, 8, ["name"]),
                    createBaseVNode("h1", _hoisted_10, "Domicilio " + toDisplayString(address.type == "home" ? "Local" : "Oficina"), 1)
                  ]),
                  createVNode(QForm, {
                    onSubmit: _cache[8] || (_cache[8] = withModifiers(($event) => _ctx.step = 3, ["prevent"])),
                    class: "q-gutter-y-md"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        _cache[18] || (_cache[18] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Calle", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].street,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].street = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.street`],
                          "error-message": unref(errors)[`addresses.${i}.street`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_12, [
                        _cache[19] || (_cache[19] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Número interior", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].inner_number,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].inner_number = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.inner_number`],
                          "error-message": unref(errors)[`addresses.${i}.inner_number`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_13, [
                        _cache[20] || (_cache[20] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Número exterior", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].outer_number,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].outer_number = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.outer_number`],
                          "error-message": unref(errors)[`addresses.${i}.outer_number`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        _cache[21] || (_cache[21] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Colonia", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].neighborhood,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].neighborhood = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.neighborhood`],
                          "error-message": unref(errors)[`addresses.${i}.neighborhood`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        _cache[22] || (_cache[22] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Ciudad", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].city,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].city = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.city`],
                          "error-message": unref(errors)[`addresses.${i}.city`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        _cache[23] || (_cache[23] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Estado", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].state,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].state = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.state`],
                          "error-message": unref(errors)[`addresses.${i}.state`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        _cache[24] || (_cache[24] = createBaseVNode("label", { class: "col-12 col-md-6" }, "País", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].country,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].country = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.email`],
                          "error-message": unref(errors)[`addresses.${i}.email`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        _cache[25] || (_cache[25] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Correo electrónico", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].email,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].email = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.email`],
                          "error-message": unref(errors)[`addresses.${i}.email`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_19, [
                        _cache[26] || (_cache[26] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Teléfono", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].phone,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].phone = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.phone`],
                          "error-message": unref(errors)[`addresses.${i}.phone`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        _cache[27] || (_cache[27] = createBaseVNode("label", { class: "col-12 col-md-6" }, "WhatsApp", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.addresses[i].whatsapp,
                          "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].whatsapp = $event,
                          "hide-bottom-space": "",
                          error: !!unref(errors)[`addresses.${i}.whatsapp`],
                          "error-message": unref(errors)[`addresses.${i}.whatsapp`]
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128)),
        createBaseVNode("div", _hoisted_21, [
          createVNode(QBtn, {
            onClick: _cache[9] || (_cache[9] = ($event) => unref(store).saveData(sponsor.value)),
            color: "primary",
            loading: unref(store).loading,
            type: "submit"
          }, {
            default: withCtx(() => _cache[28] || (_cache[28] = [
              createTextVNode("Enviar")
            ])),
            _: 1
          }, 8, ["loading"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
