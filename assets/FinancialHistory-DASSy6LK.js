import { Q as QTable } from "./QTable-CrWK76Ct.js";
import { r as ref, o as onMounted, i as api, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, f as resolveComponent, F as Fragment, h as createTextVNode } from "./index-C2KXjwrR.js";
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
const _hoisted_1 = { class: "flex" };
const _sfc_main = {
  __name: "FinancialHistory",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const rows = ref([]);
    const columns = ref([
      { align: "left", name: "date", label: "Fecha", field: "date" },
      { align: "left", name: "payment_type", label: "Concepto", field: "payment_type" },
      { align: "left", name: "amount", label: "Monto", field: "amount" },
      { align: "left", name: "scope", label: "Cobertura", field: "scope" },
      { align: "right", name: "payment_method", label: "Metodo de pago", field: "payment_method" }
    ]);
    onMounted(async () => {
      rows.value = (await api.get(`/payments/?candidate_id=${props.candidateId}`)).data.data;
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title" }, "Tesoreria / Historial de Pagos", -1)),
          createVNode(_component_router_link, {
            class: "q-mr-md q-ml-auto",
            to: `/tesoreria/${props.candidateId}/historial`
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Exportar a Excel")
            ])),
            _: 1
          }, 8, ["to"]),
          createVNode(_component_router_link, { to: `/tesoreria` }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Regresar")
            ])),
            _: 1
          })
        ]),
        createVNode(QTable, {
          rows: rows.value,
          columns: columns.value,
          "hide-bottom": ""
        }, null, 8, ["rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
