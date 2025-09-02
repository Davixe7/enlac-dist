import { Q as QInput } from "./QInput-C-mtqO6Q.js";
import { Q as QSelect } from "./QSelect-BuVzIreX.js";
import { Q as QCard, a as QCardSection } from "./QCard-CI6b1UjI.js";
import { r as ref, p as computed, o as onMounted, l as createBlock, a as openBlock, w as withCtx, i as api, d as createVNode, b as createBaseVNode, j as QIcon, Q as QBtn } from "./index-C2KXjwrR.js";
import { Q as QCheckbox } from "./QCheckbox-Io3ISonT.js";
import { a as QItem, Q as QItemSection } from "./QItemLabel-DhGrTSlq.js";
import { Q as QVirtualScroll } from "./QVirtualScroll-CzWfFMoU.js";
import { Q as QPage } from "./QPage-BOgct_EC.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./use-dark-BFshqYza.js";
import "./selection-RQZgDHX3.js";
import "./QDialog-CDPZ16vR.js";
import "./use-timeout-C7Vsd41J.js";
import "./use-checkbox-DZGZYNIT.js";
import "./option-sizes-DU4gasAy.js";
import "./QList-CYozlWX4.js";
import "./QMarkupTable-DClwcSyL.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 col-md-4" };
const _hoisted_3 = { class: "q-gutter-y-md" };
const _hoisted_4 = { class: "col-12 col-md-8" };
const _hoisted_5 = { class: "flex justify-end q-pt-md" };
const _sfc_main = {
  __name: "GroupMembers",
  props: ["groupId"],
  setup(__props) {
    const programs = ref([]);
    const data = ref([]);
    const loading = ref(false);
    const search = ref("");
    const picked = ref([]);
    const group = ref({});
    const items = computed(() => {
      if (!search.value) return [...data.value];
      return data.value.filter((item) => item.name.toLowerCase().includes(search.value.toLowerCase()));
    });
    async function fetchData() {
      try {
        loading.value = true;
        data.value = (await api.get("beneficiaries")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function fetchPrograms() {
      try {
        loading.value = true;
        programs.value = (await api.get("programs")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchData();
      fetchPrograms();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(QCard, {
            flat: "",
            bordered: "",
            style: { "margin-top": "-16px" }
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _cache[4] || (_cache[4] = createBaseVNode("h1", { class: "page-title page-title--no-margin q-pb-md" }, "Crear grupo", -1)),
                      _cache[5] || (_cache[5] = createBaseVNode("div", { style: { "font-size": "18px", "padding-bottom": "16px" } }, "Informacion Basica", -1)),
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(QInput, {
                          outlined: "",
                          "stack-label": "",
                          label: "Nombre del grupo",
                          modelValue: group.value.name,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => group.value.name = $event)
                        }, null, 8, ["modelValue"]),
                        createVNode(QSelect, {
                          outlined: "",
                          "stack-label": "",
                          label: "Programa",
                          modelValue: group.value.program_id,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => group.value.program_id = $event),
                          options: programs.value,
                          "option-label": "name"
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_4, [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QInput, {
                        type: "search",
                        clearable: "",
                        "stack-label": "",
                        label: "Buscar por nombre",
                        modelValue: search.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => search.value = $event),
                        outlined: "",
                        class: "q-mb-md"
                      }, {
                        append: withCtx(() => [
                          createVNode(QIcon, { name: "sym_o_search" })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(QVirtualScroll, {
                        style: { "max-height": "195px", "border-top": "1px solid rgba(0, 0, 0, 0.07)", "border-bottom": "1px solid rgba(0, 0, 0, 0.07)" },
                        items: items.value,
                        separator: "",
                        dense: ""
                      }, {
                        default: withCtx(({ item, index }) => [
                          (openBlock(), createBlock(QItem, {
                            key: index,
                            dense: "",
                            class: "q-px-none"
                          }, {
                            default: withCtx(() => [
                              createVNode(QItemSection, { side: "" }, {
                                default: withCtx(() => [
                                  createVNode(QCheckbox, {
                                    modelValue: picked.value,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => picked.value = $event),
                                    val: item.id,
                                    label: item.name,
                                    dense: ""
                                  }, null, 8, ["modelValue", "val", "label"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))
                        ]),
                        _: 1
                      }, 8, ["items"]),
                      createBaseVNode("div", _hoisted_5, [
                        createVNode(QBtn, {
                          color: "primary",
                          label: "Continuar"
                        })
                      ])
                    ]),
                    _: 1
                  })
                ])
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
export {
  _sfc_main as default
};
