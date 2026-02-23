import { r as ref, q as createBlock, a as openBlock, w as withCtx, J as useRouter, b as createBaseVNode, c as createElementBlock, H as Fragment, K as renderList, d as createVNode, m as QCard, g as unref, n as QCardSection, j as createTextVNode, t as toDisplayString } from "./index-CZCe8xRO.js";
import { Q as QPage } from "./QPage-BMIwFIc3.js";
const _hoisted_1 = { class: "row q-col-gutter-md" };
const _sfc_main = {
  __name: "ReportsIndex",
  setup(__props) {
    const links = ref([
      { label: "Tablero de Indicadores Operativos", path: "reportes/operativo" },
      { label: "Reporte de Asistencias y Faltas Diarias", path: "reportes/asistencias" },
      { label: "Reporte Ejecutivo", path: "reportes/ejecutivo" },
      { label: "Bitácora Individual del Beneficiario", path: "reportes/individual" },
      { label: "Reporte de Incidencias", path: "reportes/incidencias" },
      { label: "Bitácora de Servicios y Traslados", path: "reportes/traslados/rubio" }
    ]);
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title" }, " Reportes de Programas ", -1)),
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(links.value, (link) => {
              return openBlock(), createElementBlock("div", {
                class: "col-md-6",
                key: link.path
              }, [
                createVNode(QCard, {
                  style: { "cursor": "pointer" },
                  clickable: "",
                  onClick: ($event) => unref(router).push(link.path)
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(link.label), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["onClick"])
              ]);
            }), 128))
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
