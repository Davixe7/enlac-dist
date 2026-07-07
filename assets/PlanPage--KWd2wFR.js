import { Q as QMarkupTable } from "./QMarkupTable-DQeRRSoe.js";
import { r as ref, x as onMounted, O as createElementBlock, H as openBlock, Z as createBaseVNode, L as createCommentVNode, M as createTextVNode, S as toDisplayString, G as createBlock, I as withCtx, P as Fragment, R as renderList, a4 as api } from "./index-D6yGbtmC.js";
const _hoisted_1 = {
  key: 0,
  class: "page-subtitle q-mb-lg text-center"
};
const _hoisted_2 = { class: "row" };
const _hoisted_3 = { class: "col-md-10 q-mx-auto" };
const _sfc_main = {
  __name: "PlanPage",
  props: ["planId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const program = ref(null);
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
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "flex items-center" }, [
          createBaseVNode("div", { class: "page-title" }, "Detalles del Programa")
        ], -1)),
        program.value && program.value.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createTextVNode(toDisplayString(program.value.category.label) + " ", 1),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "text-grey" }, "/", -1)),
          createTextVNode(" " + toDisplayString(program.value.plan_type.label) + " ", 1),
          _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-grey" }, "/", -1)),
          createTextVNode(" " + toDisplayString(program.value.name), 1)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            program.value && program.value.id ? (openBlock(), createBlock(QMarkupTable, {
              key: 0,
              flat: "",
              bordered: ""
            }, {
              default: withCtx(() => [
                _cache[2] || (_cache[2] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "text-left" }, "Actividad"),
                    createBaseVNode("th", { class: "text-left" }, "Unidad"),
                    createBaseVNode("th", { class: "text-left" }, "Tipo de Meta"),
                    createBaseVNode("th", { class: "text-left" }, "Meta Diaria"),
                    createBaseVNode("th", { class: "text-left" }, "Meta Final"),
                    createBaseVNode("th", { class: "text-left" }, "Intensidad"),
                    createBaseVNode("th", { class: "text-left" }, "Frecuencia"),
                    createBaseVNode("th", { class: "text-left" }, "Duración")
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
                      createBaseVNode("td", null, toDisplayString(activity.daily_goal || "N/A"), 1),
                      createBaseVNode("td", null, toDisplayString((activity.final_goal ?? activity.pivot?.final_goal) || "N/A"), 1),
                      createBaseVNode("td", null, toDisplayString((activity.intensity ?? activity.pivot?.intensity) || "N/A"), 1),
                      createBaseVNode("td", null, toDisplayString((activity.frequency ?? activity.pivot?.frequency) || "N/A"), 1),
                      createBaseVNode("td", null, toDisplayString((activity.duration ?? activity.pivot?.duration) || "N/A"), 1)
                    ]);
                  }), 128))
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
