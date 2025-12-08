import { I as defineStore, l as api, a4 as storeToRefs, a2 as reactive, A as computed, r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, m as QCard, H as Fragment, K as renderList, g as unref, h as QBtn, a as openBlock, n as QCardSection, k as QIcon, e as withModifiers, E as createCommentVNode, q as createBlock, L as QRadio, Q as QInput, t as toDisplayString } from "./index-ByC9LpzG.js";
import { Q as QImg } from "./QImg-CLOeK5NX.js";
import { Q as QFile } from "./QFile-C_kZFkkT.js";
import { Q as QSelect } from "./QSelect-Clffd_Qu.js";
import { Q as QForm } from "./QForm-CMSoQ-vd.js";
import { n as notify } from "./notify-CW-opdH0.js";
import { _ as _sfc_main$1 } from "./BeneficiariesPicker-D8us3Boh.js";
import "./QItem--Axh1EJ1.js";
import "./selection-y4p1ARiF.js";
const useSponsorStore = defineStore("sponsor", {
  state: () => ({
    loading: false,
    errors: {},
    sponsors: []
  }),
  actions: {
    validateAddresses(addresses) {
      const requiredFields = [
        "street",
        "inner_number",
        "outer_number",
        "neighborhood",
        "city",
        "state",
        "country",
        "email",
        "phone",
        "whatsapp"
      ];
      return addresses.filter(
        (address) => Object.values(requiredFields).some((field) => !!address[field])
      );
    },
    async saveData(sponsor) {
      this.loading = true;
      this.errors = {};
      let data = new FormData();
      Object.keys(sponsor).forEach((key) => {
        if (sponsor[key] == null || key == "addresses") return;
        data.append(key, sponsor[key]);
      });
      let addresses = this.validateAddresses(sponsor.addresses);
      addresses.forEach((address, i) => {
        Object.keys(address).forEach((key) => {
          console.log(address[key]);
          data.append(`addresses[${i}][${key}]`, address[key]);
        });
      });
      if (sponsor.id) {
        data.append("_method", "PUT");
      }
      try {
        let route = sponsor.id ? `/sponsors/${sponsor.id}` : "/sponsors";
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
const _hoisted_1 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_2 = { class: "row items-center" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = {
  key: 0,
  class: "row items-center"
};
const _hoisted_6 = { class: "row items-center" };
const _hoisted_7 = { class: "row items-center" };
const _hoisted_8 = { class: "row items-center" };
const _hoisted_9 = { class: "row items-center" };
const _hoisted_10 = { class: "row items-center" };
const _hoisted_11 = { class: "row items-center" };
const _hoisted_12 = { class: "row items-center" };
const _hoisted_13 = { class: "row items-center" };
const _hoisted_14 = { class: "row items-center" };
const _hoisted_15 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_16 = { class: "page-subtitle q-my-none" };
const _hoisted_17 = { class: "row items-center" };
const _hoisted_18 = { class: "row items-center" };
const _hoisted_19 = { class: "row items-center" };
const _hoisted_20 = { class: "row items-center" };
const _hoisted_21 = { class: "row items-center" };
const _hoisted_22 = { class: "row items-center" };
const _hoisted_23 = { class: "row items-center" };
const _hoisted_24 = { class: "row items-center" };
const _hoisted_25 = { class: "row items-center" };
const _hoisted_26 = { class: "row items-center" };
const _hoisted_27 = { class: "flex justify-end" };
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
    const mediaId = computed(() => {
      if (!sponsor.value.profile_picture) return null;
      let regex = /\/storage\/(\d+)\//;
      let matches = regex.exec(sponsor.value.profile_picture);
      if (!matches || matches.length < 1) {
        return null;
      }
      return parseInt(matches[1], 10);
    });
    const sponsor = ref({
      candidate_id: props.candidateId ? props.candidateId : null,
      is_anonymous: 0,
      name: "",
      last_name: "",
      second_last_name: "",
      gender: null,
      company_name: null,
      birthdate: "",
      marital_status: null,
      profile_picture: null,
      profilePicture: null,
      addresses: [
        { ...defaultAddress, type: "home" },
        { ...defaultAddress, type: "office" }
      ],
      contact_by: "parent"
    });
    const genderOptions = [
      { label: "Hombre", value: "male" },
      { label: "Mujer", value: "female" },
      { label: "Entidad Comercial", value: "entity" }
    ];
    const profilePictureInput = ref(null);
    async function deletePicture() {
      if (!window.confirm("Seguro que desea eliminar la foto de perfil del padrino?")) return;
      try {
        await api.post(`media/${mediaId.value}`, { _method: "DELETE" });
        sponsor.value.profile_picture = "";
      } catch (error) {
        console.log(error);
      }
    }
    onMounted(async () => {
      if (!props.sponsorId) return;
      sponsor.value = (await api.get(`/sponsors/${props.sponsorId}`)).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[41] || (_cache[41] = createBaseVNode("h1", { class: "page-title" }, "Formato Padrino/Madrina", -1)),
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
                  _cache[18] || (_cache[18] = createBaseVNode("div", { class: "text-primary" }, "Informacion personal", -1))
                ]),
                createVNode(QForm, {
                  onSubmit: _cache[15] || (_cache[15] = withModifiers(($event) => unref(store).saveData(sponsor.value), ["prevent"])),
                  class: "q-gutter-y-md"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      !sponsor.value.profile_picture ? (openBlock(), createElementBlock("div", _hoisted_3, [
                        _cache[19] || (_cache[19] = createBaseVNode("label", {
                          for: "#",
                          class: "q-mb-md block"
                        }, "Foto de perfil / Logo", -1)),
                        createVNode(QImg, {
                          width: "120px",
                          style: { "border": "1px solid var(--primary)", "border-radius": "3px" },
                          src: "/profile_placeholder.jpg",
                          onClick: _cache[0] || (_cache[0] = () => profilePictureInput.value.pickFiles())
                        })
                      ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                        _cache[20] || (_cache[20] = createBaseVNode("label", {
                          for: "#",
                          class: "q-mb-md block"
                        }, "Foto de perfil / Logo", -1)),
                        createVNode(QImg, {
                          width: "120px",
                          src: sponsor.value.profile_picture,
                          style: { "border": "1px solid var(--primary)", "border-radius": "3px" }
                        }, null, 8, ["src"])
                      ])),
                      createVNode(QFile, {
                        ref_key: "profilePictureInput",
                        ref: profilePictureInput,
                        class: "col-12 col-md-6 q-ml-auto",
                        dense: "",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.profilePicture,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => sponsor.value.profilePicture = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).profilePicture,
                        "error-message": unref(errors).profilePicture
                      }, {
                        append: withCtx(() => [
                          sponsor.value.profile_picture ? (openBlock(), createBlock(QBtn, {
                            key: 0,
                            unelevated: "",
                            dense: "",
                            color: "negative",
                            label: "Eliminar actual",
                            class: "bg-red-3 text-red-10",
                            onClick: _cache[1] || (_cache[1] = ($event) => deletePicture())
                          })) : createCommentVNode("", true),
                          createVNode(QIcon, { name: "attach_file" })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "error", "error-message"])
                    ]),
                    !props.sponsorId ? (openBlock(), createElementBlock("div", _hoisted_5, [
                      _cache[21] || (_cache[21] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Seleccione Candidato", -1)),
                      createVNode(_sfc_main$1, {
                        disable: !!props.candidateId,
                        class: "col-12 col-md-6",
                        modelValue: sponsor.value.candidate_id,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sponsor.value.candidate_id = $event)
                      }, null, 8, ["disable", "modelValue"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_6, [
                      _cache[22] || (_cache[22] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Es anónimo", -1)),
                      createVNode(QRadio, {
                        val: 1,
                        label: "Sí",
                        modelValue: sponsor.value.is_anonymous,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sponsor.value.is_anonymous = $event),
                        error: !!unref(errors).is_anonymous,
                        "error-message": unref(errors).nais_anonymousme
                      }, null, 8, ["modelValue", "error", "error-message"]),
                      createVNode(QRadio, {
                        val: 0,
                        label: "No",
                        modelValue: sponsor.value.is_anonymous,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sponsor.value.is_anonymous = $event),
                        error: !!unref(errors).is_anonymous,
                        "error-message": unref(errors).nais_anonymousme
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      _cache[23] || (_cache[23] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Nombre(s)", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.name,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sponsor.value.name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).name,
                        "error-message": unref(errors).name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      _cache[24] || (_cache[24] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Apellido paterno", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.last_name,
                        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sponsor.value.last_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).last_name,
                        "error-message": unref(errors).last_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_9, [
                      _cache[25] || (_cache[25] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Apellido materno", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.second_last_name,
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => sponsor.value.second_last_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).second_last_name,
                        "error-message": unref(errors).second_last_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_10, [
                      _cache[26] || (_cache[26] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Género (optional)", -1)),
                      createVNode(QSelect, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        dense: "",
                        modelValue: sponsor.value.gender,
                        "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sponsor.value.gender = $event),
                        options: genderOptions,
                        "hide-bottom-space": "",
                        "emit-value": "",
                        "map-options": "",
                        error: !!unref(errors).gender,
                        "error-message": unref(errors).gender
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_11, [
                      _cache[27] || (_cache[27] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Razón o Denominación Social", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.company_name,
                        "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => sponsor.value.company_name = $event),
                        "hide-bottom-space": "",
                        error: !!unref(errors).company_name,
                        "error-message": unref(errors).company_name
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      _cache[28] || (_cache[28] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Fecha de nacimiento", -1)),
                      createVNode(QInput, {
                        class: "col-12 col-md-6",
                        outlined: "",
                        "stack-label": "",
                        modelValue: sponsor.value.birthdate,
                        "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => sponsor.value.birthdate = $event),
                        mask: "####-##-##",
                        type: "date",
                        "hide-bottom-space": "",
                        error: !!unref(errors).birthdate,
                        "error-message": unref(errors).birthdate
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_13, [
                      _cache[29] || (_cache[29] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Estado civil", -1)),
                      createVNode(QSelect, {
                        class: "col-12 col-md-6 col-md-4",
                        outlined: "",
                        "stack-label": "",
                        dense: "",
                        modelValue: sponsor.value.marital_status,
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => sponsor.value.marital_status = $event),
                        options: maritalStatusOptions,
                        "hide-bottom-space": "",
                        "emit-value": "",
                        "map-options": "",
                        error: !!unref(errors).marital_status,
                        "error-message": unref(errors).marital_status
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      _cache[30] || (_cache[30] = createBaseVNode("label", { class: "col-12 col-md-6" }, "¿Quién lo consiguió?", -1)),
                      createBaseVNode("div", null, [
                        createVNode(QRadio, {
                          label: "ENLAC",
                          val: "enlac",
                          modelValue: sponsor.value.contact_by,
                          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => sponsor.value.contact_by = $event),
                          error: !!unref(errors).contact_by,
                          "error-message": unref(errors).contact_by,
                          "hide-bottom-space": ""
                        }, null, 8, ["modelValue", "error", "error-message"]),
                        createVNode(QRadio, {
                          label: "Padre de Familia",
                          val: "parent",
                          modelValue: sponsor.value.contact_by,
                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => sponsor.value.contact_by = $event),
                          error: !!unref(errors).contact_by,
                          "error-message": unref(errors).contact_by,
                          "hide-bottom-space": ""
                        }, null, 8, ["modelValue", "error", "error-message"])
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
        }),
        (openBlock(true), createElementBlock(Fragment, null, renderList(sponsor.value.addresses, (address, i) => {
          return openBlock(), createBlock(QCard, {
            class: "q-mb-lg",
            key: i
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_15, [
                    createVNode(QIcon, {
                      size: "24px",
                      name: `sym_o_${address.type == "home" ? "home" : "domain"}`,
                      class: "q-mr-md"
                    }, null, 8, ["name"]),
                    createBaseVNode("h1", _hoisted_16, " Domicilio " + toDisplayString(address.type == "home" ? "Local" : "Oficina"), 1)
                  ]),
                  createVNode(QForm, {
                    onSubmit: _cache[16] || (_cache[16] = withModifiers(($event) => _ctx.step = 3, ["prevent"])),
                    class: "q-gutter-y-md"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_17, [
                        _cache[31] || (_cache[31] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Calle", -1)),
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
                      createBaseVNode("div", _hoisted_18, [
                        _cache[32] || (_cache[32] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Número interior", -1)),
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
                      createBaseVNode("div", _hoisted_19, [
                        _cache[33] || (_cache[33] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Número exterior", -1)),
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
                      createBaseVNode("div", _hoisted_20, [
                        _cache[34] || (_cache[34] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Colonia", -1)),
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
                      createBaseVNode("div", _hoisted_21, [
                        _cache[35] || (_cache[35] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Ciudad", -1)),
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
                      createBaseVNode("div", _hoisted_22, [
                        _cache[36] || (_cache[36] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Estado", -1)),
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
                      createBaseVNode("div", _hoisted_23, [
                        _cache[37] || (_cache[37] = createBaseVNode("label", { class: "col-12 col-md-6" }, "País", -1)),
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
                      createBaseVNode("div", _hoisted_24, [
                        _cache[38] || (_cache[38] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Correo electrónico", -1)),
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
                      createBaseVNode("div", _hoisted_25, [
                        _cache[39] || (_cache[39] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Teléfono", -1)),
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
                      createBaseVNode("div", _hoisted_26, [
                        _cache[40] || (_cache[40] = createBaseVNode("label", { class: "col-12 col-md-6" }, "WhatsApp", -1)),
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
        createBaseVNode("div", _hoisted_27, [
          createVNode(QBtn, {
            onClick: _cache[17] || (_cache[17] = ($event) => unref(store).saveData(sponsor.value)),
            color: "primary",
            loading: unref(store).loading,
            type: "submit",
            label: "Enviar"
          }, null, 8, ["loading"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
