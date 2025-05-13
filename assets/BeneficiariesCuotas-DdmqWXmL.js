import { Q as QTable, a as QTh } from "./QTable-BF17cnq0.js";
import { Q as QTr } from "./QTr-uhjFN1XO.js";
import { Q as QSelect } from "./QSelect-Dfccb1zM.js";
import { r as ref, o as onMounted, k as computed, c as createElementBlock, a as openBlock, S as createCommentVNode, d as createVNode, w as withCtx, W as Fragment, b as createBaseVNode, Q as QBtn, g as createTextVNode } from "./index-DNzcpddl.js";
import "./QImg-BbTPpAvD.js";
import "./QInput-uKsO-mcd.js";
import "./QRadio-B8b3MSsK.js";
import { api } from "./axios-rEY_Jecr.js";
import "./QSeparator-DQ_sL_0t.js";
import "./use-dark-WkhccWQ1.js";
import "./QList-CrD9GAVD.js";
import "./QCheckbox-DHyNCU4l.js";
import "./use-key-composition-DOj7cCcL.js";
import "./use-fullscreen-C2morA89.js";
import "./QItemLabel-DJe5mLYW.js";
import "./selection-C5hjpiYK.js";
const _hoisted_1 = { class: "flex items-center" };
const _sfc_main = {
  __name: "BeneficiariesCuotas",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const candidate = ref({});
    const season = ref("2024-2025");
    onMounted(async () => {
      candidate.value = props.candidateId ? (await api.get(`beneficiaries/${props.candidateId}`)).data.data : {};
      rows.value = (await api.get(`payment_configs/?candidate_id=${props.candidateId}`)).data.data;
    });
    const totales = computed(() => {
      let padres = Number(rows.value.reduce((total, row) => total + (row.sponsor_id ? 0 : Number(row.amount)), 0));
      let padrinos = Number(rows.value.reduce((total, row) => total + (row.sponsor_id ? Number(row.amount) : 0), 0));
      return [
        { label: "Cuota de Padres", amount: padres },
        { label: "Cuota de Padrinos", amount: padrinos },
        { label: "Beca ENLAC", amount: Number(candidate.value.program_price) - padres - padrinos },
        { label: "Total del Programa", amount: Number(candidate.value.program_price) }
      ];
    });
    const rows = ref([]);
    const columns = ref([
      {
        name: "label",
        label: "label",
        field: "label",
        align: "left",
        sortable: false
      },
      {
        name: "amount",
        label: "Monto",
        field: (row) => "$ " + row.amount.toFixed(2),
        align: "left"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createCommentVNode("", true),
        createVNode(QTable, {
          flat: "",
          bordered: "",
          title: "Configuracion de Cuotas",
          rows: totales.value,
          columns: columns.value,
          "hide-bottom": ""
        }, {
          header: withCtx(() => [
            createVNode(QTr, null, {
              default: withCtx(() => [
                createVNode(QTh, { colspan: "2" }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [
                    createTextVNode("Cuotas Mensuales")
                  ])),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          "top-right": withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(QSelect, {
                dense: "",
                outlined: "",
                options: ["2024-2025"],
                modelValue: season.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => season.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                color: "primary",
                icon: "sym_o_add",
                label: "Agregar Padrinos",
                to: "cuotas/registrar"
              })
            ])
          ]),
          _: 1
        }, 8, ["rows", "columns"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
