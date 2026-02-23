import { Q as QSelect } from "./QSelect-CtuOYSfN.js";
import { r as ref, D as watch, p as useRoute, o as onMounted, q as createBlock, a as openBlock, w as withCtx, d as createVNode, b as createBaseVNode, g as unref, t as toDisplayString, Q as QInput, k as QIcon, F as withDirectives, h as QBtn, l as api } from "./index-CrF4bxHZ.js";
import { Q as QDate } from "./QDate-B9IQ5j7B.js";
import { Q as QPopupProxy } from "./QPopupProxy-C4YhzFeU.js";
import { Q as QFile } from "./QFile-Breka9Yt.js";
import { Q as QMarkupTable } from "./QMarkupTable-CuxbvqH2.js";
import { Q as QForm } from "./QForm-B6b9O197.js";
import { C as ClosePopup } from "./ClosePopup-DF4PLPjE.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
import { u as useCategoryStore } from "./category-store-TMOuo7mr.js";
import { u as useCandidateStore } from "./candidate-store-Dk5_xf9E.js";
import { n as notify } from "./notify-BOCa2Zwo.js";
const _hoisted_1 = { class: "full-width custom-table" };
const _hoisted_2 = { class: "q-pa-sm" };
const _hoisted_3 = { class: "q-py-lg" };
const _hoisted_4 = { class: "q-pa-sm" };
const _hoisted_5 = { class: "q-pa-sm" };
const _hoisted_6 = { class: "row items-center justify-end" };
const _hoisted_7 = { class: "q-pa-sm" };
const _hoisted_8 = { class: "q-pa-sm" };
const _hoisted_9 = { class: "q-pa-sm" };
const _hoisted_10 = { class: "row" };
const _hoisted_11 = { class: "q-pa-md flex justify-end" };
const _sfc_main = {
  __name: "IssuesForm",
  props: ["candidateId"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const candidateStore = useCandidateStore();
    const props = __props;
    const categoryStore = useCategoryStore();
    const categories = ref(categoryStore.categories);
    watch(() => props.candidateId, () => {
      fetchCandidate();
    });
    async function fetchCandidate() {
      if (!props.candidateId) return;
      candidateStore.$state.id = props.candidateId;
      await candidateStore.fetchCandidate();
    }
    const route = useRoute();
    const category = ref(null);
    const subjects = ref([
      {
        id: 1,
        label: "Alimentación"
      },
      {
        id: 2,
        label: "Retardo"
      },
      {
        id: 3,
        label: "Higiene"
      },
      {
        id: 4,
        label: "Falta a Cita Médica"
      },
      {
        id: 5,
        label: "Falta a Cita Nutrición"
      },
      {
        id: 6,
        label: "Falta a Cita Psicología"
      },
      {
        id: 7,
        label: "Falta a Cita Comunicación"
      },
      {
        id: 8,
        label: "Falta a Capacitación"
      },
      {
        id: 9,
        label: "Falta a Reunión de Padres"
      },
      {
        id: 10,
        label: "Falta Actividades de Recaudación de Fondos"
      },
      {
        id: 11,
        label: "Indisciplina"
      },
      {
        id: 12,
        label: "Otro"
      }
    ]);
    const date = ref(DateTime.now().toFormat("dd/MM/yyyy"));
    const comments = ref("");
    const type = ref(null);
    const userId = ref(null);
    const users = ref([]);
    const loading = ref(false);
    const files = ref([]);
    const emit = __emit;
    async function fetchUsers() {
      try {
        loading.value = true;
        users.value = (await api.get("users")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    const errors = ref([]);
    async function storeIssue() {
      try {
        loading.value = false;
        errors.value = {};
        let data = new FormData();
        data.append("candidate_id", props.candidateId);
        data.append("plan_category_id", category.value.id);
        data.append("user_id", userId.value);
        data.append("type", type.value);
        data.append("date", DateTime.fromFormat(date.value, "dd/MM/yyyy").toISODate());
        data.append("comments", comments.value);
        files.value.forEach((file) => {
          data.append("media[]", file);
        });
        await api.post("issues", data);
        notify.positive("Incidencia registrada con exito");
        emit("close");
      } catch (error) {
        if (error.formatted) {
          errors.value = error.formatted;
        }
        notify.negative("No se pudo registrar la incidencia");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchCandidate();
      await useCategoryStore().fetchCategories({ base_only: true });
      let categoryName = route.params.categoryName;
      if (categoryName) {
        category.value = await categoryStore.getCategoryByName(categoryName);
      }
      fetchUsers();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QForm, null, {
        default: withCtx(() => [
          createVNode(QMarkupTable, {
            flat: "",
            bordered: "",
            square: "",
            separator: "cell",
            dense: ""
          }, {
            default: withCtx(() => [
              createBaseVNode("table", _hoisted_1, [
                createBaseVNode("tbody", null, [
                  createBaseVNode("tr", null, [
                    _cache[8] || (_cache[8] = createBaseVNode("td", null, "Área", -1)),
                    createBaseVNode("td", _hoisted_2, [
                      createVNode(QSelect, {
                        dense: "",
                        "stack-label": "",
                        "hide-bottom-space": "",
                        outlined: "",
                        modelValue: category.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => category.value = $event),
                        readonly: !!unref(route).params.categoryName,
                        options: categories.value
                      }, null, 8, ["modelValue", "readonly", "options"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[9] || (_cache[9] = createBaseVNode("td", null, "Beneficiario", -1)),
                    createBaseVNode("td", _hoisted_3, [
                      createBaseVNode("div", _hoisted_4, toDisplayString(unref(candidateStore) ? unref(candidateStore).full_name : "Cargando..."), 1)
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[10] || (_cache[10] = createBaseVNode("td", null, "Fecha", -1)),
                    createBaseVNode("td", _hoisted_5, [
                      createVNode(QInput, {
                        outlined: "",
                        "stack-label": "",
                        modelValue: date.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => date.value = $event),
                        class: "q-field--required"
                      }, {
                        append: withCtx(() => [
                          createVNode(QIcon, {
                            name: "event",
                            class: "cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode(QPopupProxy, {
                                cover: "",
                                "transition-show": "scale",
                                "transition-hide": "scale"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QDate, {
                                    modelValue: date.value,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => date.value = $event),
                                    mask: "DD/MM/YYYY"
                                  }, {
                                    default: withCtx(() => [
                                      createBaseVNode("div", _hoisted_6, [
                                        withDirectives(createVNode(QBtn, {
                                          label: "Cerrar",
                                          color: "primary",
                                          flat: "",
                                          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.dialog = false)
                                        }, null, 512), [
                                          [ClosePopup]
                                        ])
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[11] || (_cache[11] = createBaseVNode("td", null, "Reportó", -1)),
                    createBaseVNode("td", _hoisted_7, [
                      createVNode(QSelect, {
                        dense: "",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: userId.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => userId.value = $event),
                        options: users.value,
                        "option-label": "name",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": "",
                        error: !!errors.value["user_id"],
                        "error-message": errors.value["user_id"]
                      }, null, 8, ["modelValue", "options", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[12] || (_cache[12] = createBaseVNode("td", null, "Tipo", -1)),
                    createBaseVNode("td", _hoisted_8, [
                      createVNode(QSelect, {
                        dense: "",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: type.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => type.value = $event),
                        options: subjects.value,
                        "option-label": "label",
                        "option-value": "id",
                        "emit-value": "",
                        "map-options": "",
                        error: !!errors.value["type"],
                        "error-message": errors.value["type"]
                      }, null, 8, ["modelValue", "options", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[13] || (_cache[13] = createBaseVNode("td", null, "Comentarios", -1)),
                    createBaseVNode("td", _hoisted_9, [
                      createVNode(QInput, {
                        type: "textarea",
                        "stack-label": "",
                        outlined: "",
                        "hide-bottom-space": "",
                        modelValue: comments.value,
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => comments.value = $event),
                        error: !!errors.value["comments"],
                        "error-message": errors.value["comments"]
                      }, null, 8, ["modelValue", "error", "error-message"])
                    ])
                  ]),
                  createBaseVNode("tr", null, [
                    _cache[14] || (_cache[14] = createBaseVNode("td", null, "Adjuntos", -1)),
                    createBaseVNode("td", null, [
                      createBaseVNode("div", _hoisted_10, [
                        createVNode(QFile, {
                          ref: "filePicker",
                          modelValue: files.value,
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => files.value = $event),
                          append: "",
                          multiple: "",
                          "use-chips": "",
                          outlined: "",
                          class: "full-width"
                        }, null, 8, ["modelValue"])
                      ])
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createBaseVNode("div", _hoisted_11, [
            createVNode(QBtn, {
              color: "primary",
              label: "Guardar",
              loading: loading.value,
              onClick: storeIssue
            }, null, 8, ["loading"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as _
};
