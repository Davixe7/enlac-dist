import { Q as QMarkupTable } from "./QMarkupTable-BQ20kKCe.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, H as Fragment, K as renderList, l as api, d as createVNode, t as toDisplayString, w as withCtx, O as normalizeClass } from "./index-CnPCrPcs.js";
const _hoisted_1 = { class: "page-title" };
const _sfc_main = {
  __name: "MonthlyScores",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const startDate = ref("2026-01-01");
    const endDate = ref("2026-02-28");
    const plans = ref({});
    const loading = ref(false);
    async function fetchScores() {
      try {
        loading.value = true;
        let params = {
          start_date: startDate.value,
          end_date: endDate.value
        };
        plans.value = (await api.get(`beneficiaries/${props.candidateId}/reports/monthly`, { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchScores();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title" }, "Reporte Mensual", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
          return openBlock(), createElementBlock(Fragment, {
            key: plan.id
          }, [
            createBaseVNode("h2", _hoisted_1, toDisplayString(plan.category.label) + " / " + toDisplayString(plan.name), 1),
            createVNode(QMarkupTable, { class: "q-mb-lg monthly-scores-table" }, {
              default: withCtx(() => [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    _cache[0] || (_cache[0] = createBaseVNode("th", null, "Fecha", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                      return openBlock(), createElementBlock("th", {
                        key: activity.id
                      }, toDisplayString(activity.name) + "\\" + toDisplayString(activity.goal_type), 1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities[0].scores.length, (n) => {
                    return openBlock(), createElementBlock("tr", { key: n }, [
                      createBaseVNode("td", null, toDisplayString(plan.activities[0].scores[n - 1].date), 1),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                        return openBlock(), createElementBlock("td", {
                          key: activity.id,
                          class: normalizeClass(`text-${activity.scores[n - 1].color}`)
                        }, toDisplayString(activity.scores[n - 1].score) + " / " + toDisplayString(activity.pivot.daily_goal), 3);
                      }), 128))
                    ]);
                  }), 128)),
                  createBaseVNode("tr", null, [
                    _cache[1] || (_cache[1] = createBaseVNode("td", null, "Numero de días", -1)),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities.length, (n) => {
                      return openBlock(), createElementBlock("td", { key: n }, " Total ");
                    }), 128))
                  ]),
                  createBaseVNode("tr", null, [
                    createBaseVNode("td", null, toDisplayString(plan.activities[0].scores.length), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                      return openBlock(), createElementBlock("td", {
                        key: activity.id
                      }, toDisplayString(activity.total), 1);
                    }), 128))
                  ])
                ])
              ]),
              _: 2
            }, 1024)
          ], 64);
        }), 128))
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
