import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, Q as QBtn, w as withCtx, F as Fragment, i as api, t as toDisplayString } from "./index-C2KXjwrR.js";
import { Q as QTd } from "./QTd-DFuziUxV.js";
import { Q as QTable } from "./QTable-CrWK76Ct.js";
import { _ as _sfc_main$1 } from "./BeneficiaryProfile-BB4NiWxj.js";
import "./QSeparator-YeKVg7Wj.js";
import "./use-dark-BFshqYza.js";
import "./QVirtualScroll-CzWfFMoU.js";
import "./QList-CYozlWX4.js";
import "./QMarkupTable-DClwcSyL.js";
import "./QSelect-BuVzIreX.js";
import "./use-key-composition-Ca6_HCPy.js";
import "./QItemLabel-DhGrTSlq.js";
import "./selection-RQZgDHX3.js";
import "./QDialog-CDPZ16vR.js";
import "./use-timeout-C7Vsd41J.js";
import "./QCheckbox-Io3ISonT.js";
import "./use-checkbox-DZGZYNIT.js";
import "./option-sizes-DU4gasAy.js";
import "./use-fullscreen-CY4ZFYMg.js";
import "./QImg-BYM3DPnR.js";
import "./candidate-store-XsB87pK3.js";
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = { class: "q-table__actions" };
const _hoisted_3 = { class: "flex justify-end full-width" };
const _sfc_main = {
  __name: "ProgramsPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const columns = ref([
      { name: "plan_type", label: "Plan", field: (row) => row.plan_type.label, align: "left" },
      { name: "plan", label: "Tipo de plan", field: (row) => row.plan.name, align: "left" },
      { name: "name", label: "Nombre del plan", field: "name", align: "left" },
      { name: "created_at", label: "Fecha de Elaboración", field: "created_at", align: "left" },
      {
        name: "status",
        label: "Estatus",
        field: (row) => row.status ? "Activo" : "Inactivo",
        align: "left"
      },
      { name: "actions", label: "Acciones", align: "right" }
    ]);
    const rows = ref([]);
    async function fetchPrograms() {
      try {
        loading.value = true;
        rows.value = (await api.get(`personal_programs/?candidate_id=${props.candidateId}`)).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchPrograms();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "page-title" }, "Programa Individual", -1)),
          createVNode(QBtn, {
            class: "q-ml-auto",
            color: "primary",
            icon: "sym_o_add",
            label: "Nuevo",
            to: `/beneficiarios/${props.candidateId}/crear-programa`
          }, null, 8, ["to"])
        ]),
        createVNode(_sfc_main$1, {
          candidateId: props.candidateId,
          class: "q-mb-md"
        }, null, 8, ["candidateId"]),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: rows.value,
          pagination: { rowsPerPage: 0 }
        }, {
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "sym_o_edit",
                    onClick: ($event) => _ctx.alert(props2.row.id)
                  }, null, 8, ["onClick"]),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    dense: "",
                    icon: "sym_o_visibility",
                    to: `/programas/${props2.row.id}`
                  }, null, 8, ["to"])
                ])
              ]),
              _: 2
            }, 1024)
          ]),
          bottom: withCtx(() => [
            createBaseVNode("div", _hoisted_3, " Mostrando un total de: " + toDisplayString(rows.value.length) + " resultados ", 1)
          ]),
          _: 1
        }, 8, ["columns", "rows"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
