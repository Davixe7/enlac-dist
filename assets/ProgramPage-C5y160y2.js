import { r as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, E as createCommentVNode, d as createVNode, j as createTextVNode, t as toDisplayString, e as withModifiers, q as createBlock, w as withCtx, H as Fragment, k as api, a as openBlock, h as QBtn, K as renderList } from "./index-Dk-vfK7v.js";
import { Q as QMarkupTable } from "./QMarkupTable-z16xpCIW.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = {
  key: 0,
  class: "page-subtitle q-mb-lg text-center"
};
const _hoisted_3 = { class: "row" };
const _sfc_main = {
  __name: "ProgramPage",
  props: ["planId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const program = ref({
      activities: []
    });
    async function fetchProgram() {
      try {
        loading.value = true;
        program.value = (await api.get(`personal_programs/${props.planId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchProgram();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title" }, "Detalles del Programa", -1)),
          createVNode(QBtn, {
            outline: "",
            class: "q-ml-auto",
            color: "primary",
            label: "Nuevo",
            icon: "sym_o_add"
          })
        ]),
        program.value && program.value.id ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createTextVNode(toDisplayString(program.value.category.label) + " ", 1),
          _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-grey" }, "/", -1)),
          createTextVNode(" " + toDisplayString(program.value.subcategory.label) + " ", 1),
          _cache[4] || (_cache[4] = createBaseVNode("span", { class: "text-grey" }, "/", -1)),
          createTextVNode(" " + toDisplayString(program.value.name), 1)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", {
            class: "col-md-10 q-mx-auto",
            onDrop: _cache[0] || (_cache[0] = (...args) => _ctx.onDrop && _ctx.onDrop(...args)),
            onDragover: _cache[1] || (_cache[1] = withModifiers(() => {
            }, ["prevent"]))
          }, [
            program.value && program.value.id ? (openBlock(), createBlock(QMarkupTable, {
              key: 0,
              flat: "",
              bordered: ""
            }, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "text-left" }, "Actividad"),
                    createBaseVNode("th", { class: "text-left" }, "Unidad"),
                    createBaseVNode("th", {
                      class: "text-left",
                      style: { "white-space": "nowrap" }
                    }, " Tipo de Meta "),
                    createBaseVNode("th", { class: "text-left" }, "Meta diaria")
                  ])
                ], -1)),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(program.value.activities, (activity) => {
                    return openBlock(), createElementBlock("tr", {
                      key: activity.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(activity.name), 1),
                      createBaseVNode("td", null, toDisplayString(activity.measurement_unit), 1),
                      createBaseVNode("td", null, toDisplayString(activity.goal_type), 1),
                      createBaseVNode("td", null, toDisplayString(activity.daily_goal), 1)
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 32)
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
