import { r as ref, w as watch, x as onMounted, O as createElementBlock, Z as createBaseVNode, G as createBlock, L as createCommentVNode, J as createVNode, U as QBtn, I as withCtx, P as Fragment, a4 as api, H as openBlock, a9 as QCheckbox, $ as normalizeStyle } from "./index-D6yGbtmC.js";
import { Q as QTd } from "./QTd-Ddh6u6dy.js";
import { Q as QTable } from "./QTable-DIKmnI7r.js";
import { _ as _sfc_main$1 } from "./EnlacDate-hKb-1xJO.js";
import { n as notify } from "./notify-n2Z0CrY2.js";
import { u as useCategoryStore } from "./category-store-D1zWQLGu.js";
import "./QVirtualScroll-CErNhyIW.js";
import "./QList-B0T9uv7o.js";
import "./QMarkupTable-DQeRRSoe.js";
import "./QSelect-BazkB39m.js";
import "./QItem-wHrLANdD.js";
import "./QMenu-BgFDig5Y.js";
import "./selection-CUF06PLZ.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-CzAi1HsK.js";
import "./QDate-BJvW3caF.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-BXa7ZoPg.js";
import "./date-CE1cDjkK.js";
import "./QPopupProxy-CRY-XhtD.js";
import "./ClosePopup-jO11K8EB.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "flex items-center q-mb-md" };
const _hoisted_2 = { class: "flex justify-end q-mt-md" };
const _sfc_main = {
  __name: "AttendancePage",
  props: ["categoryName"],
  setup(__props) {
    const props = __props;
    const workAreaId = ref(null);
    const categoryStore = useCategoryStore();
    const candidates = ref([]);
    const currentAttendances = ref([]);
    const loading = ref(false);
    const dateISO = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    watch(dateISO, async function() {
      await fetchCandidates();
      await fetchAttendances();
      mapAttendances();
    });
    function mapAttendances() {
      currentAttendances.value = candidates.value.map(function(iCandidate) {
        let matchAttendance = currentAttendances.value.find(
          (attendance) => attendance.candidate_id == iCandidate.id
        );
        return {
          candidate_id: iCandidate.id,
          name: iCandidate.name,
          done_activities: iCandidate.done_activities,
          total_activities: iCandidate.total_activities,
          plan_category_id: workAreaId.value,
          status: matchAttendance ? matchAttendance.status : "absent"
        };
      });
    }
    async function fetchAttendances() {
      let params = {
        plan_category_id: workAreaId.value,
        date: dateISO.value
      };
      currentAttendances.value = (await api.get("attendances", { params })).data.data;
    }
    async function fetchCandidates() {
      let params = {
        plan_category_id: workAreaId.value,
        date: dateISO.value
      };
      candidates.value = (await api.get(`attendances/candidates`, { params })).data.data;
    }
    onMounted(async () => {
      workAreaId.value = (await categoryStore.getCategoryByName(props.categoryName)).id;
      await fetchCandidates();
      await fetchAttendances();
      mapAttendances();
    });
    const columns = ref([
      { align: "left", name: "name", label: "Beneficiario", field: "name" },
      {
        align: "left",
        name: "activitiesCount",
        label: "Actividades Programadas",
        field: "total_activities"
      },
      {
        align: "left",
        name: "activitiesMade",
        label: "Actividades Realizadas",
        field: "done_activities"
      },
      { align: "left", name: "actions", label: "Asistencia" }
    ]);
    async function storeAttendances() {
      try {
        loading.value = true;
        let data = { attendances: currentAttendances.value };
        await api.post("attendances", data);
        notify.positive("Lista de asistencia actualizada.");
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo actualizar la lista de asistencia");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title q-mb-none" }, "Control de Asistencias", -1)),
          createVNode(_sfc_main$1, {
            modelValue: dateISO.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dateISO.value = $event),
            class: "q-ml-auto q-mr-md"
          }, null, 8, ["modelValue"]),
          createVNode(QBtn, {
            color: "primary",
            loading: loading.value,
            onClick: storeAttendances,
            label: "Guardar lista"
          }, null, 8, ["loading"])
        ]),
        candidates.value && candidates.value.length ? (openBlock(), createBlock(QTable, {
          key: 0,
          flat: "",
          bordered: "",
          dense: "",
          loading: loading.value,
          columns: columns.value,
          rows: currentAttendances.value,
          pagination: { rowsPerPage: 0 }
        }, {
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QCheckbox, {
                  modelValue: props2.row.status,
                  "onUpdate:modelValue": ($event) => props2.row.status = $event,
                  "false-value": "absent",
                  "true-value": "present",
                  style: normalizeStyle({ "pointer-events": props2.row.done_activities ? "none" : "all" })
                }, null, 8, ["modelValue", "onUpdate:modelValue", "style"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["loading", "columns", "rows"])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_2, [
          createVNode(QBtn, {
            color: "primary",
            loading: loading.value,
            onClick: storeAttendances,
            label: "Guardar lista."
          }, null, 8, ["loading"])
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
