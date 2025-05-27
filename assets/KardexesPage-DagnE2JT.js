import { Q as QCheckbox } from "./QCheckbox-BMrw9OGo.js";
import { Q as QItem, b as QItemSection } from "./QItemLabel-BM-XPiQp.js";
import { r as ref, j as onMounted, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, K as withCtx, P as QBtn, X as Fragment, Y as renderList, I as createBlock, O as createTextVNode, U as toDisplayString, Q as QIcon } from "./index-cCQoerBE.js";
import { Q as QFile } from "./QFile-2WvUNLpG.js";
import { Q as QList } from "./QList-Bqgej6v_.js";
import { api } from "./axios-ByMy53kN.js";
import { _ as _sfc_main$1 } from "./CandidateProfile-D8EhceqO.js";
import "./use-dark-C8v3QwmZ.js";
import "./use-key-composition-Cm9vnODB.js";
import "./QSelect-CtZdKzvL.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./use-file-dom-props-DxWClpik.js";
import "./QImg-CAI-Ir8u.js";
import "./QInput-BzETij5i.js";
import "./QRadio-CeSDzXzk.js";
const _hoisted_1 = { class: "flex q-py-lg justify-end" };
const _sfc_main = {
  __name: "KardexesPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    const kardexes = ref([]);
    const candidateKardexes = ref([]);
    const uploads = ref({});
    function guardar() {
      let formData = new FormData();
      formData.append("candidate_id", props.candidateId);
      Object.keys(uploads.value).forEach((key) => {
        formData.append(`kardexes[${key}]`, uploads.value[key]);
      });
      api.post("kardexes", formData);
    }
    onMounted(async () => {
      candidateKardexes.value = (await api.get(`candidates/${props.candidateId}/kardexes`)).data.data;
      kardexes.value = (await api.get("kardexes")).data.data;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[2] || (_cache[2] = createBaseVNode("h1", { class: "page-title" }, "Kardex del Beneficiario", -1)),
        createVNode(_sfc_main$1, {
          "candidate-id": __props.candidateId,
          type: "interview"
        }, null, 8, ["candidate-id"]),
        createVNode(QList, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(kardexes.value, (kardex) => {
              return openBlock(), createBlock(QItem, {
                key: kardex.id
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QCheckbox, {
                        readonly: "",
                        disable: true,
                        modelValue: candidateKardexes.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateKardexes.value = $event),
                        val: "kardex_" + kardex.slug
                      }, null, 8, ["modelValue", "val"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(kardex.name), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, {
                    side: "",
                    right: ""
                  }, {
                    default: withCtx(() => [
                      createVNode(QFile, {
                        style: { "width": "300px", "height": "40px" },
                        outlined: "",
                        modelValue: uploads.value[kardex.slug],
                        "onUpdate:modelValue": ($event) => uploads.value[kardex.slug] = $event
                      }, {
                        prepend: withCtx(() => [
                          createVNode(QIcon, { name: "sym_o_attach_file" })
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_1, [
          createVNode(QBtn, {
            color: "primary",
            onClick: guardar
          }, {
            default: withCtx(() => _cache[1] || (_cache[1] = [
              createTextVNode("Guardar")
            ])),
            _: 1
          })
        ])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
