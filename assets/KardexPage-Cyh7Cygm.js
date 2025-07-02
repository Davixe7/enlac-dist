import { Q as QCheckbox } from "./QCheckbox-s2Kvsmmx.js";
import { Q as QTd } from "./QTd-DdBxDCGy.js";
import { o as onMounted, r as ref, c as createElementBlock, b as createBaseVNode, F as Fragment, B as renderList, a as openBlock, d as createVNode, t as toDisplayString, w as withCtx, s as createCommentVNode, j as createBlock, h as QIcon, Q as QBtn, g as createTextVNode } from "./index-BKlFzi9U.js";
import { Q as QFile } from "./QFile-DQhGavV5.js";
import { Q as QInput } from "./QInput-Cl4GFezJ.js";
import { Q as QTable } from "./QTable-DHoGyjN5.js";
import { api } from "./axios-DnBXXbR5.js";
import "./use-dark-hk5G9xUE.js";
import "./option-sizes-CfP0-6il.js";
import "./use-key-composition-Cryiiwp5.js";
import "./QSelect-DKl0wMy2.js";
import "./QItemLabel-TX7ESzio.js";
import "./selection-C0xLdPSq.js";
import "./QDialog-dSz5pi_j.js";
import "./use-timeout-GW2bv9wv.js";
import "./QSeparator-2_Z6TE3i.js";
import "./QList-BwwRjKko.js";
import "./QMarkupTable-fuDnew7J.js";
import "./use-fullscreen-NQbe2Wgy.js";
const _hoisted_1 = { class: "page-subtitle" };
const _hoisted_2 = ["href"];
const _hoisted_3 = {
  key: 0,
  class: "flex items-center justify-end q-ml-auto"
};
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { style: { "display": "flex", "flex-flow": "column" } };
const _hoisted_7 = { class: "flex" };
const _sfc_main = {
  __name: "KardexPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    onMounted(async () => {
      loading.value = true;
      candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
      media.value = (await api.get(`candidates/${props.candidateId}/kardexes`)).data.data;
      rows.value = (await api.get("kardexes")).data.data;
      Object.keys(rows.value).forEach((category) => {
        rows.value[category].forEach((item) => kardex.value[item.slug] = { file: null, detail: null });
      });
      loading.value = false;
    });
    const loading = ref(false);
    const kardex = ref({});
    const media = ref({});
    const candidate = ref({});
    const rows = ref([]);
    const columns = ref([
      { name: "check", label: "", align: "left" },
      { name: "name", label: "", field: "name", align: "left" },
      { name: "download", label: "", align: "right" },
      { name: "upload", label: "", align: "right" }
    ]);
    const categoryLabels = {
      default: "Documentos a Solicitar",
      tutor: "Documentos a Descargar y Firmar por Responsable del Beneficiario y Tutor Legal",
      doctor: "Documentos a Descargar y Firmar por Médico",
      external: "Documentos a Descargar y Firmar por Externos"
    };
    async function uploadFile(collectionName) {
      try {
        loading.value = true;
        let data = new FormData();
        data.append("collection_name", collectionName);
        data.append("upload", kardex.value[collectionName].file);
        data.append("detail", kardex.value[collectionName].detail);
        let response = (await api.post(`candidates/${props.candidateId}/kardexes`, data)).data.data;
        media.value[response.collection_name] = response;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function deleteFile(collectionName) {
      if (!window.confirm("Seguro que desea eliminar el documento adjunto?")) return;
      try {
        loading.value = true;
        await api.post(`candidates/${props.candidateId}/kardexes`, {
          collection_name: collectionName,
          _method: "DELETE"
        });
        delete media.value["kardex_" + collectionName];
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title" }, "Kardex del Beneficiario", -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(rows.value), (category) => {
          return openBlock(), createElementBlock(Fragment, { key: category }, [
            createBaseVNode("h2", _hoisted_1, toDisplayString(categoryLabels[category]), 1),
            createVNode(QTable, {
              flat: "",
              "hide-header": "",
              "hide-bottom": "",
              rows: rows.value[category],
              columns: columns.value
            }, {
              "body-cell-check": withCtx((props2) => [
                createVNode(QTd, { style: { "width": "60px", "max-width": "60px" } }, {
                  default: withCtx(() => [
                    createVNode(QCheckbox, {
                      "model-value": !!media.value["kardex_" + props2.row.slug],
                      "true-value": true,
                      "false-value": false
                    }, null, 8, ["model-value"])
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-download": withCtx((props2) => [
                createVNode(QTd, { class: "text-right" }, {
                  default: withCtx(() => [
                    props2.row.has_template ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: props2.row.template,
                      target: "_blank"
                    }, " descargar ", 8, _hoisted_2)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-upload": withCtx((props2) => [
                createVNode(QTd, { style: { "width": "320px" } }, {
                  default: withCtx(() => [
                    !media.value["kardex_" + props2.row.slug] ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      kardex.value[props2.row.slug] ? (openBlock(), createElementBlock("div", _hoisted_4, [
                        createVNode(QFile, {
                          style: { "width": "240px" },
                          clearable: "",
                          dense: "",
                          outlined: "",
                          placeholder: "Adjuntar archivo",
                          modelValue: kardex.value[props2.row.slug].file,
                          "onUpdate:modelValue": ($event) => kardex.value[props2.row.slug].file = $event,
                          class: "q-mr-sm"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(QIcon, { name: "sym_o_attach_file" })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"]),
                        props2.row.has_detail ? (openBlock(), createBlock(QInput, {
                          key: 0,
                          dense: "",
                          outlined: "",
                          modelValue: kardex.value[props2.row.slug].detail,
                          "onUpdate:modelValue": ($event) => kardex.value[props2.row.slug].detail = $event,
                          class: "q-mr-sm"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(QIcon, { name: "sym_o_edit" })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode(QBtn, {
                        style: { "flex": "0 0" },
                        disable: !kardex.value[props2.row.slug],
                        onClick: ($event) => uploadFile(props2.row.slug),
                        color: "primary",
                        round: "",
                        dense: "",
                        icon: "sym_o_upload",
                        loading: loading.value
                      }, null, 8, ["disable", "onClick", "loading"])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
                      createBaseVNode("div", _hoisted_6, [
                        createBaseVNode("div", _hoisted_7, [
                          createVNode(QBtn, {
                            style: { "width": "240px" },
                            color: "primary",
                            icon: "sym_o_download",
                            target: "_blank",
                            class: "q-mr-sm",
                            href: media.value["kardex_" + props2.row.slug].original_url
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(media.value["kardex_" + props2.row.slug].file_name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(QBtn, {
                            onClick: ($event) => deleteFile(props2.row.slug),
                            color: "negative",
                            round: "",
                            dense: "",
                            icon: "sym_o_delete"
                          }, null, 8, ["onClick"])
                        ]),
                        createVNode(QInput, {
                          readonly: "",
                          outlined: "",
                          "model-value": media.value["kardex_" + props2.row.slug].detail
                        }, null, 8, ["model-value"])
                      ])
                    ]))
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["rows", "columns"])
          ], 64);
        }), 128))
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
