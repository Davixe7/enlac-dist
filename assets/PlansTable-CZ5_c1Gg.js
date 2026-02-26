import { r as ref, p as useRoute, D as watch, o as onMounted, q as createBlock, a as openBlock, w as withCtx, b as createBaseVNode, t as toDisplayString, d as createVNode, h as QBtn, O as normalizeClass, l as api } from "./index-Bj0d6EJy.js";
import { Q as QTd } from "./QTd-BlkBnRbD.js";
import { Q as QTable } from "./QTable-BRxQDYTK.js";
import { n as notify } from "./notify-DSQRBAOh.js";
const _hoisted_1 = { class: "q-table__actions" };
const _hoisted_2 = { class: "flex justify-end full-width" };
const _sfc_main = {
  __name: "PlansTable",
  props: ["groupId", "candidateId", "newCopy"],
  setup(__props) {
    const route = useRoute();
    const props = __props;
    const loading = ref(false);
    const recentId = ref(route.query.recent ? route.query.recent : null);
    watch(
      () => props.newCopy,
      (newVal) => {
        console.log("newcopy");
        rows.value.push(newVal);
      }
    );
    const columns = ref([
      { name: "category", label: "Plan", field: (row) => row.category.label },
      { name: "subcategory", label: "Tipo de Plan", field: (row) => row.subcategory.label },
      { name: "name", label: "Nombre del plan", field: "name" },
      { name: "created_at", label: "Fecha de Elaboración", field: "created_at" },
      { name: "status", label: "Estatus", field: (row) => row.status ? "Activo" : "Inactivo" },
      { name: "actions", label: "Acciones", align: "right" }
    ]);
    const rows = ref([]);
    async function fetchPrograms() {
      try {
        loading.value = true;
        let route2 = props.groupId ? `plans/?group_id=${props.groupId}` : `personal_programs/?candidate_id=${props.candidateId}`;
        rows.value = (await api.get(route2)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los programas");
      } finally {
        loading.value = false;
      }
    }
    onMounted(async () => {
      await fetchPrograms();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QTable, {
        flat: "",
        bordered: "",
        columns: columns.value,
        rows: rows.value,
        pagination: { rowsPerPage: 0 }
      }, {
        "body-cell-actions": withCtx((props2) => [
          createVNode(QTd, {
            class: normalizeClass({ highlight: props2.row.id == recentId.value })
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "sym_o_edit",
                  to: __props.candidateId ? `/beneficiarios/${__props.candidateId}/planes/${props2.row.id}/editar` : `/grupos/${__props.groupId}/planes/${props2.row.id}/editar`
                }, null, 8, ["to"]),
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "sym_o_visibility",
                  to: __props.candidateId ? `/beneficiarios/${__props.candidateId}/planes/${props2.row.id}` : `/grupos/${__props.groupId}/planes/${props2.row.id}`
                }, null, 8, ["to"])
              ])
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        bottom: withCtx(() => [
          createBaseVNode("div", _hoisted_2, " Mostrando un total de: " + toDisplayString(rows.value.length) + " resultados ", 1)
        ]),
        _: 1
      }, 8, ["columns", "rows"]);
    };
  }
};
export {
  _sfc_main as _
};
