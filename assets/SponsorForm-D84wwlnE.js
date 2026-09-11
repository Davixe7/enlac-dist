import { al as defineStore, V as api, c8 as storeToRefs, r as ref, aj as reactive, a as computed, K as onMounted, B as createElementBlock, s as openBlock, v as createVNode, a9 as QSpinner, N as createBaseVNode, t as withCtx, a1 as QCard, X as QCardSection, Q as QIcon, y as createCommentVNode, A as unref, q as createBlock, G as QBtn, am as QRadio, z as createTextVNode, D as toDisplayString, Y as QInput, F as Fragment, C as renderList, Z as withModifiers } from "./index-B7tPiqN-.js";
import { Q as QImg } from "./QImg-BmlWRIZf.js";
import { Q as QFile } from "./QFile-GZQCdwEX.js";
import { Q as QBadge } from "./QBadge-DbNF5D_2.js";
import { Q as QSelect } from "./QSelect-CUurwLMN.js";
import { Q as QDate } from "./QDate-q-7Ddj7U.js";
import { Q as QPopupProxy } from "./QPopupProxy-BZtWPk0W.js";
import { Q as QForm } from "./QForm--z1TR4pL.js";
import { n as notify } from "./notify-BcfrBe6Y.js";
import { _ as _sfc_main$1 } from "./BeneficiariesPicker-GKuzw3k0.js";
import "./QChip-CruC5Tdr.js";
import "./format-CnAOSoyw.js";
import "./QItem-CYkyv03z.js";
import "./QMenu-BUnDS-UP.js";
import "./position-engine-BwUEZbGD.js";
import "./selection-Cznkojii.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime--dMKS0p0.js";
import "./date-wWhx9f-X.js";
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
      if (sponsor.type == "link" && !sponsor.candidate_id) {
        alert("Debe seleccionar un candidato");
        return;
      }
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
        let routeName = this.router.currentRoute.value.name;
        let redirectTo = routeName == "sponsors.edit" || routeName == "sponsor.create" && !sponsor.candidate_id ? `/padrinos/${sponsor.id}` : `/beneficiarios/${sponsor.candidate_id}/padrinos/${newSponsor.id}`;
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
const _hoisted_1 = {
  key: 0,
  class: "flex flex-center q-pa-xl"
};
const _hoisted_2 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_3 = { class: "q-gutter-y-md" };
const _hoisted_4 = { class: "row items-center" };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { class: "row items-center" };
const _hoisted_8 = { key: 0 };
const _hoisted_9 = {
  key: 1,
  class: "col-12 col-md-6 flex items-center"
};
const _hoisted_10 = {
  key: 0,
  class: "row items-center"
};
const _hoisted_11 = {
  key: 1,
  class: "row items-center"
};
const _hoisted_12 = { class: "col-12 col-md-6 offset-md-6 text-caption text-grey-7" };
const _hoisted_13 = { class: "row items-center" };
const _hoisted_14 = { class: "row items-center" };
const _hoisted_15 = { class: "row items-center" };
const _hoisted_16 = { class: "row items-center" };
const _hoisted_17 = { class: "row items-center" };
const _hoisted_18 = { class: "row items-center" };
const _hoisted_19 = { class: "row items-center" };
const _hoisted_20 = { class: "row items-center" };
const _hoisted_21 = { class: "row items-center" };
const _hoisted_22 = { class: "flex items-center q-pb-lg q-mr-md" };
const _hoisted_23 = { class: "page-subtitle q-my-none" };
const _hoisted_24 = { class: "q-col-gutter-y-sm" };
const _hoisted_25 = { class: "row items-center q-py-xs" };
const _hoisted_26 = { class: "row items-center q-py-xs" };
const _hoisted_27 = { class: "row items-center q-py-xs" };
const _hoisted_28 = { class: "row items-center q-py-xs" };
const _hoisted_29 = { class: "row items-center q-py-xs" };
const _hoisted_30 = { class: "row items-center q-py-xs" };
const _hoisted_31 = { class: "row items-center q-py-xs" };
const _hoisted_32 = { class: "row items-center q-py-xs" };
const _hoisted_33 = { class: "row items-center q-py-xs" };
const _hoisted_34 = { class: "row items-center q-py-xs" };
const _hoisted_35 = { class: "row items-center q-py-xs" };
const _hoisted_36 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "SponsorForm",
  props: ["candidateId", "sponsorId"],
  setup(__props) {
    const store = useSponsorStore();
    const { errors } = storeToRefs(store);
    const props = __props;
    const loadingData = ref(false);
    const maritalStatusOptions = [
      { label: "Soltero(a)", value: "Soltero(a)" },
      { label: "Casado(a)", value: "Casado(a)" },
      { label: "Divorciado(a)", value: "Divorciado(a)" },
      { label: "Viudo(a)", value: "Viudo(a)" },
      { label: "Unión Libre", value: "Union Libre" },
      { label: "Desconocido", value: "Desconocido" }
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
      postal_code: "",
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
      type: "link",
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
    const birthDate = computed({
      get() {
        if (!sponsor.value.birthdate) return "";
        const [, month, day] = sponsor.value.birthdate.split("-");
        return `${day}/${month}`;
      },
      set(val) {
        if (!val || val.length < 5) return;
        const [day, month] = val.split("/");
        sponsor.value.birthdate = `2000-${month}-${day}`;
      }
    });
    onMounted(async () => {
      if (!props.sponsorId) return;
      loadingData.value = true;
      try {
        const { data } = await api.get(`/sponsors/${props.sponsorId}`);
        sponsor.value = {
          ...sponsor.value,
          ...data.data,
          addresses: data.data.addresses?.length ? data.data.addresses : sponsor.value.addresses
        };
      } catch (error) {
        console.error("Error al cargar la información del padrino:", error);
      } finally {
        loadingData.value = false;
      }
    });
    return (_ctx, _cache) => {
      return loadingData.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QSpinner, {
          color: "primary",
          size: "3em"
        })
      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        _cache[45] || (_cache[45] = createBaseVNode("h1", { class: "page-title" }, "Formato Padrino/Madrina", -1)),
        createVNode(QForm, {
          onSubmit: _cache[18] || (_cache[18] = withModifiers(($event) => unref(store).saveData(sponsor.value), ["prevent"]))
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "q-mb-lg" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createVNode(QIcon, {
                        size: "16px",
                        name: "sym_o_edit",
                        class: "q-mr-sm"
                      }),
                      _cache[19] || (_cache[19] = createBaseVNode("div", { class: "text-primary" }, "Informacion personal", -1))
                    ]),
                    createBaseVNode("div", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, [
                        !sponsor.value.profile_picture ? (openBlock(), createElementBlock("div", _hoisted_5, [
                          _cache[20] || (_cache[20] = createBaseVNode("label", { class: "q-mb-md block" }, "Foto de perfil / Logo", -1)),
                          createVNode(QImg, {
                            width: "120px",
                            style: { "border": "1px solid var(--primary)", "border-radius": "3px" },
                            src: "/profile_placeholder.jpg",
                            onClick: _cache[0] || (_cache[0] = () => profilePictureInput.value.pickFiles())
                          })
                        ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
                          _cache[21] || (_cache[21] = createBaseVNode("label", { class: "q-mb-md block" }, "Foto de perfil / Logo", -1)),
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
                      createBaseVNode("div", _hoisted_7, [
                        _cache[22] || (_cache[22] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Tipo de padrino", -1)),
                        !props.sponsorId ? (openBlock(), createElementBlock("div", _hoisted_8, [
                          createVNode(QRadio, {
                            modelValue: sponsor.value.type,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => sponsor.value.type = $event),
                            label: "Enlázate",
                            val: "link",
                            class: "q-mr-md"
                          }, null, 8, ["modelValue"]),
                          createVNode(QRadio, {
                            modelValue: sponsor.value.type,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => sponsor.value.type = $event),
                            label: "General",
                            val: "general"
                          }, null, 8, ["modelValue"])
                        ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
                          createVNode(QBadge, {
                            color: sponsor.value.type === "link" ? "primary" : "teal",
                            class: "q-pa-xs text-subtitle2"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(sponsor.value.type === "link" ? "Enlázate" : "General"), 1)
                            ]),
                            _: 1
                          }, 8, ["color"])
                        ]))
                      ]),
                      !props.sponsorId && sponsor.value.type === "link" ? (openBlock(), createElementBlock("div", _hoisted_10, [
                        _cache[23] || (_cache[23] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                          createTextVNode(" Seleccione Candidato "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createVNode(_sfc_main$1, {
                          disable: !!props.candidateId,
                          class: "col-12 col-md-6",
                          modelValue: sponsor.value.candidate_id,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sponsor.value.candidate_id = $event),
                          error: !!unref(errors).candidate_id,
                          "error-message": unref(errors).candidate_id
                        }, null, 8, ["disable", "modelValue", "error", "error-message"])
                      ])) : createCommentVNode("", true),
                      props.sponsorId && sponsor.value.type === "link" ? (openBlock(), createElementBlock("div", _hoisted_11, [
                        createBaseVNode("div", _hoisted_12, [
                          createVNode(QIcon, {
                            name: "info",
                            size: "14px",
                            class: "q-mr-xs text-primary"
                          }),
                          _cache[24] || (_cache[24] = createTextVNode(" Este padrino tiene asignado(s) beneficiario(s) apoyado(s). "))
                        ])
                      ])) : createCommentVNode("", true),
                      createBaseVNode("div", _hoisted_13, [
                        _cache[25] || (_cache[25] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Es anónimo", -1)),
                        createVNode(QRadio, {
                          val: 1,
                          label: "Sí",
                          modelValue: sponsor.value.is_anonymous,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => sponsor.value.is_anonymous = $event)
                        }, null, 8, ["modelValue"]),
                        createVNode(QRadio, {
                          val: 0,
                          label: "No",
                          modelValue: sponsor.value.is_anonymous,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sponsor.value.is_anonymous = $event)
                        }, null, 8, ["modelValue"])
                      ]),
                      createBaseVNode("div", _hoisted_14, [
                        _cache[26] || (_cache[26] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                          createTextVNode("Nombre(s) "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.name,
                          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => sponsor.value.name = $event),
                          "hide-bottom-space": "",
                          error: !!unref(errors).name,
                          "error-message": unref(errors).name
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_15, [
                        _cache[27] || (_cache[27] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                          createTextVNode("Apellido paterno "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.last_name,
                          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => sponsor.value.last_name = $event),
                          "hide-bottom-space": "",
                          error: !!unref(errors).last_name,
                          "error-message": unref(errors).last_name
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_16, [
                        _cache[28] || (_cache[28] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                          createTextVNode("Apellido materno "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.second_last_name,
                          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => sponsor.value.second_last_name = $event),
                          "hide-bottom-space": "",
                          error: !!unref(errors).second_last_name,
                          "error-message": unref(errors).second_last_name
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_17, [
                        _cache[29] || (_cache[29] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Género (opcional)", -1)),
                        createVNode(QSelect, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          dense: "",
                          modelValue: sponsor.value.gender,
                          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => sponsor.value.gender = $event),
                          options: genderOptions,
                          "hide-bottom-space": "",
                          "emit-value": "",
                          "map-options": "",
                          error: !!unref(errors).gender,
                          "error-message": unref(errors).gender
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_18, [
                        _cache[30] || (_cache[30] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Razón o Denominación Social", -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: sponsor.value.company_name,
                          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => sponsor.value.company_name = $event),
                          "hide-bottom-space": "",
                          error: !!unref(errors).company_name,
                          "error-message": unref(errors).company_name
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_19, [
                        _cache[31] || (_cache[31] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                          createTextVNode("Fecha de nacimiento "),
                          createBaseVNode("span", { class: "text-negative" }, "*")
                        ], -1)),
                        createVNode(QInput, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          modelValue: birthDate.value,
                          "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => birthDate.value = $event),
                          mask: "##/##",
                          placeholder: "DD/MM",
                          "hide-bottom-space": "",
                          error: !!unref(errors).birthdate,
                          "error-message": unref(errors).birthdate
                        }, {
                          append: withCtx(() => [
                            createVNode(QIcon, { name: "sym_o_event" }, {
                              default: withCtx(() => [
                                createVNode(QPopupProxy, null, {
                                  default: withCtx(() => [
                                    createVNode(QDate, {
                                      modelValue: sponsor.value.birthdate,
                                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => sponsor.value.birthdate = $event),
                                      mask: "YYYY-MM-DD"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_20, [
                        _cache[32] || (_cache[32] = createBaseVNode("label", { class: "col-12 col-md-6" }, "Estado civil", -1)),
                        createVNode(QSelect, {
                          class: "col-12 col-md-6",
                          outlined: "",
                          "stack-label": "",
                          dense: "",
                          modelValue: sponsor.value.marital_status,
                          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => sponsor.value.marital_status = $event),
                          options: maritalStatusOptions,
                          "hide-bottom-space": "",
                          "emit-value": "",
                          "map-options": "",
                          error: !!unref(errors).marital_status,
                          "error-message": unref(errors).marital_status
                        }, null, 8, ["modelValue", "error", "error-message"])
                      ]),
                      createBaseVNode("div", _hoisted_21, [
                        _cache[33] || (_cache[33] = createBaseVNode("label", { class: "col-12 col-md-6" }, "¿Quién lo consiguió?", -1)),
                        createBaseVNode("div", null, [
                          createVNode(QRadio, {
                            label: "ENLAC",
                            val: "enlac",
                            modelValue: sponsor.value.contact_by,
                            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => sponsor.value.contact_by = $event)
                          }, null, 8, ["modelValue"]),
                          createVNode(QRadio, {
                            label: "Padre de Familia",
                            val: "parent",
                            modelValue: sponsor.value.contact_by,
                            "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => sponsor.value.contact_by = $event)
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
            (openBlock(true), createElementBlock(Fragment, null, renderList(sponsor.value.addresses, (address, i) => {
              return openBlock(), createBlock(QCard, {
                class: "q-mb-lg",
                key: address.id || address.type || i
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_22, [
                        createVNode(QIcon, {
                          size: "24px",
                          name: `sym_o_${address.type === "home" ? "home" : "domain"}`,
                          class: "q-mr-md"
                        }, null, 8, ["name"]),
                        createBaseVNode("h1", _hoisted_23, " Domicilio " + toDisplayString(address.type === "home" ? "Local" : "Oficina"), 1)
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("div", _hoisted_25, [
                          _cache[34] || (_cache[34] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Calle "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_26, [
                          _cache[35] || (_cache[35] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Número interior "),
                            createBaseVNode("span", { class: "text-caption text-grey-7" }, "(opcional)")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_27, [
                          _cache[36] || (_cache[36] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Número exterior "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_28, [
                          _cache[37] || (_cache[37] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Colonia "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_29, [
                          _cache[38] || (_cache[38] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Código Postal "),
                            createBaseVNode("span", { class: "text-caption text-grey-7" }, "(opcional)")
                          ], -1)),
                          createVNode(QInput, {
                            class: "col-12 col-md-6",
                            outlined: "",
                            "stack-label": "",
                            modelValue: sponsor.value.addresses[i].postal_code,
                            "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].postal_code = $event,
                            "hide-bottom-space": "",
                            error: !!unref(errors)[`addresses.${i}.postal_code`],
                            "error-message": unref(errors)[`addresses.${i}.postal_code`]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                        ]),
                        createBaseVNode("div", _hoisted_30, [
                          _cache[39] || (_cache[39] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Ciudad "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_31, [
                          _cache[40] || (_cache[40] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Estado "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_32, [
                          _cache[41] || (_cache[41] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("País "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
                          createVNode(QInput, {
                            class: "col-12 col-md-6",
                            outlined: "",
                            "stack-label": "",
                            modelValue: sponsor.value.addresses[i].country,
                            "onUpdate:modelValue": ($event) => sponsor.value.addresses[i].country = $event,
                            "hide-bottom-space": "",
                            error: !!unref(errors)[`addresses.${i}.country`],
                            "error-message": unref(errors)[`addresses.${i}.country`]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                        ]),
                        createBaseVNode("div", _hoisted_33, [
                          _cache[42] || (_cache[42] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Correo electrónico "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_34, [
                          _cache[43] || (_cache[43] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("Teléfono "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                        createBaseVNode("div", _hoisted_35, [
                          _cache[44] || (_cache[44] = createBaseVNode("label", { class: "col-12 col-md-6" }, [
                            createTextVNode("WhatsApp "),
                            createBaseVNode("span", { class: "text-negative" }, "*")
                          ], -1)),
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
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128)),
            createBaseVNode("div", _hoisted_36, [
              createVNode(QBtn, {
                color: "primary",
                loading: unref(store).loading,
                type: "submit",
                label: "Enviar"
              }, null, 8, ["loading"])
            ])
          ]),
          _: 1
        })
      ], 64));
    };
  }
};
export {
  _sfc_main as default
};
