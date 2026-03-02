const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BeneficiaryProfile-Btpp6j6q.js","assets/QImg-CVnAFh8i.js","assets/index-Dr8uhl4A.js","assets/index-DA00BWT3.css","assets/QExpansionItem-Do7ob-rQ.js","assets/QItem-XQlagMDu.js","assets/candidate-store-72OQaKFT.js","assets/notify-Cl6MN3dZ.js","assets/BeneficiaryProfile-BcAD6YyA.css"])))=>i.map(i=>d[i]);
import { r as ref, o as onMounted, w as watch, P as createElementBlock, I as openBlock, _ as createBaseVNode, H as createBlock, J as withCtx, M as createCommentVNode, O as unref, b4 as defineAsyncComponent, b_ as Suspense, K as createVNode, V as QBtn, R as Fragment, S as renderList, T as toDisplayString, aV as normalizeClass, ag as api, b5 as __vitePreload } from "./index-Dr8uhl4A.js";
import { Q as QMarkupTable } from "./QMarkupTable-AcFO8Xpc.js";
import { _ as _sfc_main$1 } from "./EnlacDate-ujxXssTv.js";
import "./QDate-C4AC4Lyq.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-KmTMzkKJ.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-DjTbUqa1.js";
import "./QMenu-DL2zsgOR.js";
import "./selection-1BKykHSs.js";
import "./ClosePopup-CEwmesbF.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row" };
const _hoisted_2 = { class: "col-12 q-mb-lg" };
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "col-12 col-md-4 flex q-mb-lg" };
const _hoisted_5 = { class: "q-ml-auto" };
const _hoisted_6 = { class: "page-title" };
const _sfc_main = {
  __name: "MonthlyReport",
  props: ["candidateId"],
  setup(__props) {
    const BeneficiaryProfile = defineAsyncComponent(() => __vitePreload(() => import("./BeneficiaryProfile-Btpp6j6q.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0));
    const props = __props;
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
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
    async function exportXls() {
      try {
        loading.value = true;
        let downloadurl = `beneficiaries/${props.candidateId}/reports/exportMonthly`;
        let response = await api({
          url: downloadurl,
          method: "GET",
          responseType: "blob",
          params: {
            start_date: startDate.value,
            end_date: endDate.value
          }
        });
        const contentDisposition = response.headers["content-disposition"];
        let filename = "reporte_descargado.xlsx";
        if (contentDisposition) {
          const filenameMatch = contentDisposition.match(/filename="(.+?)"/);
          if (filenameMatch && filenameMatch[1]) {
            filename = filenameMatch[1];
          }
        }
        const blob = new Blob([response.data], {
          type: response.headers["content-type"]
        });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log(`Descarga de ${filename} iniciada.`);
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchScores();
    });
    watch(startDate, () => fetchScores());
    watch(endDate, () => fetchScores());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                createBaseVNode("template", null, [
                  __props.candidateId ? (openBlock(), createBlock(unref(BeneficiaryProfile), {
                    key: 0,
                    candidateId: __props.candidateId
                  }, null, 8, ["candidateId"])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }))
          ])
        ]),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_sfc_main$1, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$1, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(QBtn, {
                outline: "",
                color: "primary",
                label: "Exportar Excel",
                onClick: exportXls
              })
            ])
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(plans.value, (plan) => {
            return openBlock(), createElementBlock(Fragment, {
              key: plan.id
            }, [
              createBaseVNode("h2", _hoisted_6, toDisplayString(plan.category.label) + " / " + toDisplayString(plan.name), 1),
              createVNode(QMarkupTable, { class: "q-mb-lg monthly-scores-table" }, {
                default: withCtx(() => [
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      _cache[2] || (_cache[2] = createBaseVNode("th", null, "Fecha", -1)),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(plan.activities, (activity) => {
                        return openBlock(), createElementBlock("th", {
                          key: activity.id
                        }, toDisplayString(activity.name), 1);
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
                      _cache[3] || (_cache[3] = createBaseVNode("td", null, "Numero de días", -1)),
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
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
