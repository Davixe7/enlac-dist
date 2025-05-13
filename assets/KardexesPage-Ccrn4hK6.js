import { Q as QCheckbox } from "./QCheckbox-DHyNCU4l.js";
import { Q as QItem, b as QItemSection } from "./QItemLabel-DJe5mLYW.js";
import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, Q as QBtn, W as Fragment, X as renderList, R as createBlock, g as createTextVNode, U as toDisplayString, h as QIcon } from "./index-DNzcpddl.js";
import { Q as QFile } from "./QFile-CmQjWh56.js";
import { Q as QList } from "./QList-CrD9GAVD.js";
import { api } from "./axios-rEY_Jecr.js";
import { _ as _sfc_main$1 } from "./CandidateProfile-B7ODg-2n.js";
import "./use-dark-WkhccWQ1.js";
import "./use-key-composition-DOj7cCcL.js";
import "./QSelect-Dfccb1zM.js";
import "./selection-C5hjpiYK.js";
import "./QInput-uKsO-mcd.js";
import "./QImg-BbTPpAvD.js";
import "./QRadio-B8b3MSsK.js";
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
