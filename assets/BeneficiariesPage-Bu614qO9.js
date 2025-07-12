import { u as useAuthStore, r as ref, o as onMounted, i as api, c as createElementBlock, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, a as openBlock, D as renderList, l as createBlock, Q as QBtn, h as createTextVNode, t as toDisplayString, aK as QSpinner } from "./index-BXqY0shX.js";
import { Q as QSelect } from "./QSelect-IM5jyk2g.js";
import { Q as QTd } from "./QTd--wV9C4XD.js";
import { Q as QTooltip } from "./QTooltip-BrY4Db05.js";
import { Q as QTable } from "./QTable-DSrFCOxR.js";
import { f as formatDate } from "./formatDate-CyuHyaHX.js";
import "./use-key-composition-BKbfOFw1.js";
import "./use-dark-DjMuuakh.js";
import "./QItemLabel-tzmo7QJQ.js";
import "./selection-B--_r8qR.js";
import "./QDialog-oeqTLSLP.js";
import "./use-timeout-CrK4RhEz.js";
import "./QSeparator-BbmvWgd-.js";
import "./QList-BeN9cPCv.js";
import "./QMarkupTable-DkEupggY.js";
import "./QCheckbox-1shOM7b_.js";
import "./option-sizes-CENjnHKS.js";
import "./use-fullscreen-myPsEZNv.js";
const _hoisted_1 = { class: "flex q-my-lg justify-center" };
const _sfc_main = {
  __name: "BeneficiariesPage",
  setup(__props) {
    const authStore = useAuthStore();
    const loading = ref(false);
    onMounted(async () => {
      loading.value = true;
      rows.value = (await api.get("beneficiaries")).data.data;
      loading.value = false;
    });
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre del Beneficiario",
        field: "name",
        align: "left",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        field: "id",
        align: "left",
        sortable: true
      },
      {
        name: "entry_status",
        label: "Estatus",
        field: "entry_status",
        align: "left",
        sortable: true
      },
      {
        name: "entry_date",
        label: "Fecha de ingreso",
        field: (row) => row.onboard_at ? formatDate(row.entry_date) : "--",
        align: "left",
        sortable: true
      },
      {
        name: "program_name",
        label: "Programa",
        field: "program_name",
        align: "left",
        sortable: true
      },
      {
        name: "actions",
        label: "Acciones",
        field: "actions",
        align: "right"
      }
    ]);
    const entryStatuses = [
      { value: "pendiente_ingresar", label: "Pendiente de ingresar" },
      { value: "listo_ingresar", label: "Listo para ingresar" },
      { value: "programar_ingreso", label: "Programar ingreso" },
      { value: "activo", label: "Activo" },
      { value: "permiso_temporal", label: "Permiso temporal" },
      { value: "prueba_vida", label: "Prueba de vida" },
      { value: "inactivo", label: "Inactivo" }
    ];
    const actions = ref([
      { disable: false, icon: "visibility", route: "perfil", label: "Perfil" },
      { disable: !authStore.can("kardexes.update"), icon: "folder", route: "kardex", label: "Kardex" },
      { disable: false, icon: "calendar_month", route: "citas", label: "Citas" },
      { disable: false, icon: "attach_money", route: "cuotas", label: "Control de Cuotas" }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[1] || (_cache[1] = createBaseVNode("h1", { class: "page-title" }, "Admisiones y Beneficiarios", -1)),
        createVNode(QTable, {
          bordered: "",
          flat: "",
          "hide-bottom": "",
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          loading: loading.value
        }, {
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", null, [
                createVNode(QSpinner, {
                  size: "30px",
                  color: "primary",
                  class: "q-mr-md"
                }),
                _cache[0] || (_cache[0] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-entry_status": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QSelect, {
                  dense: "",
                  outlined: "",
                  "hide-bottom-space": "",
                  options: entryStatuses,
                  modelValue: props.row.entry_status,
                  "onUpdate:modelValue": ($event) => props.row.entry_status = $event,
                  "emit-value": "",
                  "map-options": ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props) => [
            createVNode(QTd, { class: "text-right q-table__actions q-py-xs" }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(actions.value, (action) => {
                  return openBlock(), createBlock(QBtn, {
                    key: action.icon,
                    disable: action.disable,
                    round: "",
                    unelevated: "",
                    dense: "",
                    icon: `sym_o_${action.icon}`,
                    to: `beneficiarios/${props.row.id}/${action.route}`
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, {
                        offset: [0, 0],
                        anchor: "top middle",
                        self: "bottom middle"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(action.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["disable", "icon", "to"]);
                }), 128))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns", "loading"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
