import { Q as QMarkupTable } from "./QMarkupTable-CfesoOzi.js";
import { Q as QPage } from "./QPage-D4Cnf6sh.js";
import { r as ref, o as onMounted, D as watch, q as createBlock, a as openBlock, w as withCtx, l as api, b as createBaseVNode, E as createCommentVNode, d as createVNode, t as toDisplayString } from "./index-vLy8_pvK.js";
import { _ as _sfc_main$1 } from "./EnlacDate-mOiI4jDF.js";
import "./QDate-BJKyPZEI.js";
import "./use-render-cache-DRJWLz-b.js";
import "./date-C86bb3JR.js";
import "./format-BC-UoHKJ.js";
import "./QPopupProxy-SjE1_vJl.js";
import "./QMenu-BEeWpOq4.js";
import "./selection-Ct_8e3za.js";
import "./ClosePopup-CRQ74T09.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md" };
const _hoisted_2 = { class: "col-md-4 flex" };
const _sfc_main = {
  __name: "GeneralReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const loading = ref(false);
    const data = ref(null);
    async function fetchData() {
      try {
        loading.value = true;
        let params = { start_date: startDate.value, end_date: endDate.value };
        data.value = (await api.get("reports/general", { params })).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => fetchData());
    watch(startDate, () => fetchData());
    watch(endDate, () => fetchData());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[51] || (_cache[51] = createBaseVNode("h1", { class: "page-title" }, "Tablero de indicadores operativos", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$1, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"])
            ])
          ]),
          data.value ? (openBlock(), createBlock(QMarkupTable, { key: 0 }, {
            default: withCtx(() => [
              _cache[50] || (_cache[50] = createBaseVNode("thead", null, [
                createBaseVNode("th", null, "Tipo"),
                createBaseVNode("th", null, "Indicador"),
                createBaseVNode("th", null, "Descripción"),
                createBaseVNode("th", null, "Dato"),
                createBaseVNode("th", null, "Cálculo")
              ], -1)),
              createBaseVNode("tbody", null, [
                createBaseVNode("tr", null, [
                  _cache[2] || (_cache[2] = createBaseVNode("td", null, "Candidatos", -1)),
                  _cache[3] || (_cache[3] = createBaseVNode("td", null, "Candidatos Evaluados", -1)),
                  _cache[4] || (_cache[4] = createBaseVNode("td", null, "Total de candidatos que tuvieron evaluacion Fisica", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["candidates"]["evaluations"]), 1),
                  _cache[5] || (_cache[5] = createBaseVNode("td", null, "(sumar numero de evaluaciones realizadas)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[6] || (_cache[6] = createBaseVNode("td", null, null, -1)),
                  _cache[7] || (_cache[7] = createBaseVNode("td", null, "Candidatos Aceptados", -1)),
                  _cache[8] || (_cache[8] = createBaseVNode("td", null, "Total de candidatos que fueron aceptados por ENLAC", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["candidates"]["accepted"]), 1),
                  _cache[9] || (_cache[9] = createBaseVNode("td", null, "(sumar numero de candidatos aceptados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[10] || (_cache[10] = createBaseVNode("td", null, null, -1)),
                  _cache[11] || (_cache[11] = createBaseVNode("td", null, "Candidatos No Aceptados", -1)),
                  _cache[12] || (_cache[12] = createBaseVNode("td", null, "Total de candidatos no fueron aceptados por ENLAC", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["candidates"]["rejected"]), 1),
                  _cache[13] || (_cache[13] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[14] || (_cache[14] = createBaseVNode("td", null, "Beneficiarios", -1)),
                  _cache[15] || (_cache[15] = createBaseVNode("td", null, "Beneficiarios activos", -1)),
                  _cache[16] || (_cache[16] = createBaseVNode("td", null, "Total de beneficiarios que tienen status Activo en el periodo de consulta", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["beneficiaries"]["active"]), 1),
                  _cache[17] || (_cache[17] = createBaseVNode("td", null, "(sumar numero de evaluaciones realizadas)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[18] || (_cache[18] = createBaseVNode("td", null, null, -1)),
                  _cache[19] || (_cache[19] = createBaseVNode("td", null, "Candidatos Atendidos", -1)),
                  _cache[20] || (_cache[20] = createBaseVNode("td", null, "Total de beneficiarios han sido atendidos por ENLAC", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["beneficiaries"]["programed"]), 1),
                  _cache[21] || (_cache[21] = createBaseVNode("td", null, "(sumar numero de candidatos aceptados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[22] || (_cache[22] = createBaseVNode("td", null, null, -1)),
                  _cache[23] || (_cache[23] = createBaseVNode("td", null, "% Asistencia diaria", -1)),
                  _cache[24] || (_cache[24] = createBaseVNode("td", null, "Promedio del % de asistencia diara que tienen los beneficiarios", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["beneficiaries"]["attendance"]), 1),
                  _cache[25] || (_cache[25] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[26] || (_cache[26] = createBaseVNode("td", null, "Procuración de fondos", -1)),
                  _cache[27] || (_cache[27] = createBaseVNode("td", null, "Padrinos ENLAC", -1)),
                  _cache[28] || (_cache[28] = createBaseVNode("td", null, "Total de padrinos que tiene ENLAC", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["sponsors"]["total"]), 1),
                  _cache[29] || (_cache[29] = createBaseVNode("td", null, "(sumar numero de evaluaciones realizadas)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[30] || (_cache[30] = createBaseVNode("td", null, null, -1)),
                  _cache[31] || (_cache[31] = createBaseVNode("td", null, "Beneficiarios con padrino", -1)),
                  _cache[32] || (_cache[32] = createBaseVNode("td", null, "Total de beneficiarios que tienen padrino", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["sponsors"]["beneficiaries"]), 1),
                  _cache[33] || (_cache[33] = createBaseVNode("td", null, "(sumar numero de candidatos aceptados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[34] || (_cache[34] = createBaseVNode("td", null, "Tesorería", -1)),
                  _cache[35] || (_cache[35] = createBaseVNode("td", null, "Aportaciones de padres de familia", -1)),
                  _cache[36] || (_cache[36] = createBaseVNode("td", null, "Monto total de aportaciones realizadas por padres de familia", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["payments"]["parent"]), 1),
                  _cache[37] || (_cache[37] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[38] || (_cache[38] = createBaseVNode("td", null, null, -1)),
                  _cache[39] || (_cache[39] = createBaseVNode("td", null, "Aportaciones de padrinos", -1)),
                  _cache[40] || (_cache[40] = createBaseVNode("td", null, "Monto total de aportaciones realizadas por padrinos", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["payments"]["sponsor"]), 1),
                  _cache[41] || (_cache[41] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[42] || (_cache[42] = createBaseVNode("td", null, "Traslados", -1)),
                  _cache[43] || (_cache[43] = createBaseVNode("td", null, "Traslados de Cuauthemoc-Rubio", -1)),
                  _cache[44] || (_cache[44] = createBaseVNode("td", null, "Numero de viajes que se han realizado Cuauthemoc-Rubio (ida y regreso)", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["rides"]["rubio"]), 1),
                  _cache[45] || (_cache[45] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ]),
                createBaseVNode("tr", null, [
                  _cache[46] || (_cache[46] = createBaseVNode("td", null, null, -1)),
                  _cache[47] || (_cache[47] = createBaseVNode("td", null, "Traslados Equinoterapia", -1)),
                  _cache[48] || (_cache[48] = createBaseVNode("td", null, "Numero de viajes que se han realizado a equinoterapia (ida y regreso)", -1)),
                  createBaseVNode("td", null, toDisplayString(data.value["rides"]["rubio"]), 1),
                  _cache[49] || (_cache[49] = createBaseVNode("td", null, "(sumar numero de candidatos rechazados despues de la evaluacion)", -1))
                ])
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
