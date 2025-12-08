import { r as ref, o as onMounted, q as createBlock, a as openBlock, w as withCtx, c as createElementBlock, H as Fragment, d as createVNode, n as QCardSection, b as createBaseVNode, j as createTextVNode, k as QIcon, h as QBtn, Q as QInput, K as renderList, t as toDisplayString, m as QCard, l as api, E as createCommentVNode, s as QDialog, g as unref } from "./index-Ca5-ciyA.js";
import { u as useCandidateStore } from "./candidate-store-BDc3Tx_x.js";
import { _ as _sfc_main$2 } from "./ProgramsTable-y678hSvx.js";
import { a as QItem, Q as QItemSection, b as QItemLabel } from "./QItem-C9mpBGOT.js";
import { Q as QList } from "./QList-CMmeXu_V.js";
import { n as notify } from "./notify-dGu9DWRJ.js";
import "./QTd-ByJo4ffg.js";
import "./QTable-C0Jh40jm.js";
import "./QVirtualScroll-BWW-5zOR.js";
import "./QMarkupTable-BimuUJQd.js";
import "./QSelect-PRgMmb3S.js";
import "./selection-C_rEmdl2.js";
import "./use-fullscreen-s0KkdCH7.js";
const _hoisted_1$1 = { class: "page-subtitle page-title--no-margin flex items-center" };
const _hoisted_2$1 = { class: "page-subtitle" };
const _hoisted_3$1 = { class: "q-mb-md" };
const _hoisted_4$1 = { class: "flex justify-center q-mt-xl" };
const _sfc_main$1 = {
  __name: "ProgramCopy",
  props: ["groupId"],
  emits: ["save"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const plans = ref([]);
    const selectedPlan = ref(null);
    const loading = ref(false);
    const name = ref("");
    async function fetchPrograms() {
      try {
        loading.value = true;
        plans.value = (await api.get(`personal_programs`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los programas");
      } finally {
        loading.value = false;
      }
    }
    async function copy() {
      try {
        loading.value = true;
        let data = { name: name.value, group_id: props.groupId };
        let result = (await api.post(`personal_programs/${selectedPlan.value.id}/copy`, data)).data.data;
        notify.positive("Programa copiado exitosamente.");
        emits("save", result);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => fetchPrograms());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "480px" } }, {
        default: withCtx(() => [
          !selectedPlan.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1$1, [
                  createVNode(QIcon, {
                    name: "sym_o_content_copy",
                    class: "q-mr-sm"
                  }),
                  _cache[3] || (_cache[3] = createTextVNode(" Copiar programa individual ")),
                  createVNode(QBtn, {
                    dense: "",
                    flat: "",
                    round: "",
                    icon: "close",
                    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
                    class: "q-ml-auto"
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createVNode(QInput, {
                  bordered: "",
                  outlined: "",
                  "stack-label": "",
                  label: "Buscar por nombre del beneficiario",
                  "hide-bottom": ""
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(QList, { class: "q-mb-md" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
                  return openBlock(), createBlock(QItem, {
                    key: plan.id,
                    onClick: ($event) => selectedPlan.value = plan,
                    clickable: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QItemSection, null, {
                        default: withCtx(() => [
                          createVNode(QItemLabel, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(plan.group.candidates[0].first_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(QItemLabel, { caption: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(plan.name) + " • " + toDisplayString(plan.activities.length) + " actividades", 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ]),
              _: 1
            })
          ], 64)) : (openBlock(), createBlock(QCardSection, {
            key: 1,
            class: "text-center"
          }, {
            default: withCtx(() => [
              _cache[4] || (_cache[4] = createBaseVNode("h2", { class: "page-title" }, "Seguro que desea copiar el plan?", -1)),
              createBaseVNode("div", _hoisted_2$1, toDisplayString(selectedPlan.value.name), 1),
              createBaseVNode("div", _hoisted_3$1, " de " + toDisplayString(selectedPlan.value.group.candidates[0].first_name + " " + selectedPlan.value.group.candidates[0].last_name), 1),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Ingresa nombre para la copia del plan",
                modelValue: name.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => name.value = $event)
              }, null, 8, ["modelValue"]),
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(QBtn, {
                  outline: "",
                  color: "primary",
                  label: "Cancelar",
                  class: "q-mr-md",
                  onClick: _cache[2] || (_cache[2] = ($event) => selectedPlan.value = null)
                }),
                createVNode(QBtn, {
                  color: "primary",
                  label: "Confirmar copia",
                  onClick: copy
                })
              ])
            ]),
            _: 1
          }))
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "flex items-center justify-between" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "text-h6" };
const _hoisted_5 = { class: "text-subtitle1 flex items-center" };
const _sfc_main = {
  __name: "BeneficiaryProgramsPage",
  props: {
    candidateId: { required: true }
  },
  setup(__props) {
    const loading = ref(true);
    const props = __props;
    const store = useCandidateStore();
    const groups = ref([]);
    const copyDialog = ref(false);
    const newCopy = ref(null);
    function appendCopy(data) {
      newCopy.value = data;
      copyDialog.value = false;
    }
    onMounted(async () => {
      store.id = props.candidateId;
      await store.fetchCandidate("beneficiary");
      groups.value = (await api.get(`groups/?candidate_id=${props.candidateId}`)).data.data;
      loading.value = false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "page-title" }, "Programa Individual", -1)),
          createBaseVNode("div", null, [
            !loading.value && groups.value.length < 1 ? (openBlock(), createBlock(QBtn, {
              key: 0,
              outline: "",
              class: "q-mr-md",
              color: "primary",
              icon: "sym_o_content_copy",
              label: "Copiar",
              onClick: _cache[0] || (_cache[0] = ($event) => copyDialog.value = true)
            })) : createCommentVNode("", true),
            !loading.value && groups.value.length < 1 ? (openBlock(), createBlock(QBtn, {
              key: 1,
              color: "primary",
              icon: "sym_o_add",
              label: "Nuevo",
              to: { name: "programs.create", params: { candidateId: props.candidateId } }
            }, null, 8, ["to"])) : createCommentVNode("", true)
          ])
        ]),
        createVNode(QDialog, {
          modelValue: copyDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => copyDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1, {
              groupId: unref(store).group_id,
              onSave: appendCopy,
              onClose: _cache[1] || (_cache[1] = ($event) => copyDialog.value = false)
            }, null, 8, ["groupId"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        !loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_sfc_main$2, {
            newCopy: newCopy.value,
            groupId: unref(store).group_id,
            candidateId: props.candidateId
          }, null, 8, ["newCopy", "groupId", "candidateId"]),
          !loading.value && groups.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(QCard, {
              flat: "",
              bordered: "",
              class: "q-pa-md q-mt-md"
            }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_4, [
                      _cache[4] || (_cache[4] = createTextVNode(" Este beneficiario pertenece al grupo ")),
                      createBaseVNode("span", null, toDisplayString(groups.value[0].name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(QIcon, {
                        name: "groups",
                        color: "secondary",
                        class: "q-mr-sm"
                      }),
                      createVNode(QBtn, {
                        flat: "",
                        color: "primary",
                        label: "Ver grupo",
                        href: `/#/grupos/${groups.value[0].id}`,
                        target: "_blank",
                        class: "q-mr-sm"
                      }, null, 8, ["href"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
