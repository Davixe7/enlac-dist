import { r as ref, A as computed, o as onMounted, q as createBlock, a as openBlock, w as withCtx, l as api, J as useRouter, d as createVNode, m as QCard, b as createBaseVNode, n as QCardSection, t as toDisplayString, Q as QInput, k as QIcon, i as QCheckbox, h as QBtn } from "./index-vLy8_pvK.js";
import { Q as QSelect } from "./QSelect-VW--WBjF.js";
import { a as QItem, Q as QItemSection } from "./QItem-CygvGfQx.js";
import { Q as QVirtualScroll } from "./QVirtualScroll-DMECT2OX.js";
import { Q as QPage } from "./QPage-D4Cnf6sh.js";
import { n as notify } from "./notify-DeHCx5VC.js";
import "./QMenu-BEeWpOq4.js";
import "./selection-Ct_8e3za.js";
import "./format-BC-UoHKJ.js";
import "./QList-fZyZnnby.js";
import "./QMarkupTable-CfesoOzi.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 col-md-4" };
const _hoisted_3 = { class: "page-title page-title--no-margin q-pb-md" };
const _hoisted_4 = { class: "q-gutter-y-md" };
const _hoisted_5 = { class: "col-12 col-md-8" };
const _hoisted_6 = { class: "flex justify-end q-pa-md" };
const _sfc_main = {
  __name: "GroupsForm",
  props: ["groupId"],
  setup(__props) {
    const props = __props;
    const router = useRouter();
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
    const enlacUsers = ref([]);
    async function fetchEnlacUsers() {
      try {
        const response = await api.get("/users");
        enlacUsers.value = response.data.data;
      } catch (error) {
        console.error(error);
        notify.negative("No se pudieron cargar los usuarios ENLAC");
      }
    }
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
    async function save() {
      try {
        loading.value = true;
        group.value.candidates = [...picked.value];
        let route = props.groupId ? `/groups/${props.groupId}` : "/groups";
        let data2 = props.groupId ? { ...group.value, _method: "PUT" } : { ...group.value };
        let action = props.groupId ? "actualizado" : "creado";
        await api.post(route, data2);
        notify.positive(`Grupo ${action} exitosamente`);
        router.push("/grupos");
      } catch (error) {
        console.log(error);
        notify.negative("Error al crear el grupo");
      } finally {
        loading.value = false;
      }
    }
    async function fetchGroup() {
      if (!props.groupId) return;
      try {
        loading.value = true;
        const response = await api.get(`/groups/${props.groupId}`);
        group.value = response.data.data;
        picked.value = (group.value.candidates || []).map((candidate) => candidate.id);
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar el grupo");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchGroup();
      fetchData();
      fetchPrograms();
      fetchEnlacUsers();
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
                      createBaseVNode("h1", _hoisted_3, toDisplayString(props.groupId ? "Actualizar" : "Crear") + " grupo ", 1),
                      _cache[6] || (_cache[6] = createBaseVNode("div", { style: { "font-size": "18px", "padding-bottom": "16px" } }, "Información Básica", -1)),
                      createBaseVNode("div", _hoisted_4, [
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
                          "option-label": "name",
                          "option-value": "id",
                          "emit-value": "",
                          "map-options": ""
                        }, null, 8, ["modelValue", "options"]),
                        createVNode(QSelect, {
                          outlined: "",
                          "stack-label": "",
                          label: "Titular del Grupo",
                          modelValue: group.value.group_leader_id,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => group.value.group_leader_id = $event),
                          options: enlacUsers.value,
                          "option-label": "full_name",
                          "option-value": "id",
                          "emit-value": "",
                          "map-options": ""
                        }, null, 8, ["modelValue", "options"]),
                        createVNode(QSelect, {
                          outlined: "",
                          "stack-label": "",
                          label: "Asistente",
                          modelValue: group.value.assistant_id,
                          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => group.value.assistant_id = $event),
                          options: enlacUsers.value,
                          "option-label": "full_name",
                          "option-value": "id",
                          "emit-value": "",
                          "map-options": ""
                        }, null, 8, ["modelValue", "options"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createVNode(QInput, {
                        type: "search",
                        clearable: "",
                        "stack-label": "",
                        label: "Buscar por nombre",
                        modelValue: search.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => search.value = $event),
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
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => picked.value = $event),
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
                      }, 8, ["items"])
                    ]),
                    _: 1
                  }),
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(QBtn, {
                      color: "primary",
                      label: "Continuar",
                      loading: loading.value,
                      onClick: save
                    }, null, 8, ["loading"])
                  ])
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
