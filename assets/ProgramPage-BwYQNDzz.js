import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, x as createCommentVNode, Q as QBtn, h as createTextVNode, t as toDisplayString, e as withModifiers, w as withCtx, F as Fragment, i as api, C as renderList } from "./index-C2KXjwrR.js";
import { Q as QMarkupTable } from "./QMarkupTable-DClwcSyL.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BB4NiWxj.js";
import { u as useCandidateStore } from "./candidate-store-XsB87pK3.js";
import "./use-dark-BFshqYza.js";
import "./QImg-BYM3DPnR.js";
import "./use-timeout-C7Vsd41J.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = {
  key: 0,
  class: "page-subtitle q-mb-lg text-center"
};
const _hoisted_3 = { class: "row" };
const _sfc_main = {
  __name: "ProgramPage",
  props: ["programId"],
  setup(__props) {
    const store = useCandidateStore();
    const props = __props;
    const loading = ref(false);
    const program = ref({
      activities: []
    });
    async function fetchProgram() {
      try {
        loading.value = true;
        program.value = (await api.get(`personal_programs/${props.programId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await store.fetchCandidate();
      fetchProgram();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title" }, "Programa Individual", -1)),
          createVNode(QBtn, {
            outline: "",
            class: "q-ml-auto",
            color: "primary",
            label: "Nuevo",
            icon: "sym_o_add"
          })
        ]),
        createVNode(_sfc_main$1, {
          candidateId: program.value.candidate_id,
          class: "q-mb-lg"
        }, null, 8, ["candidateId"]),
        program.value && program.value.id ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createTextVNode(toDisplayString(program.value.plan_type.label) + " ", 1),
          _cache[3] || (_cache[3] = createBaseVNode("span", { class: "text-grey" }, "/", -1)),
          createTextVNode(" " + toDisplayString(program.value.plan.name) + " ", 1),
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
            createVNode(QMarkupTable, {
              flat: "",
              bordered: ""
            }, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", { class: "text-left" }, "Nombre"),
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
            })
          ], 32)
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
