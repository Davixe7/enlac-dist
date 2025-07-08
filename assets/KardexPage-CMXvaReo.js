import { Q as QCheckbox } from "./QCheckbox-BMnj2b1-.js";
import { Q as QTd } from "./QTd-DKJWU2A4.js";
import { o as onMounted, r as ref, c as createElementBlock, b as createBaseVNode, F as Fragment, B as renderList, a as openBlock, d as createVNode, t as toDisplayString, w as withCtx, s as createCommentVNode, j as createBlock, h as QIcon, Q as QBtn, g as createTextVNode, E as normalizeClass } from "./index-D6w-cXuQ.js";
import { Q as QFile } from "./QFile-D1KWT9Yi.js";
import { Q as QInput } from "./QInput-wxw_kogA.js";
import { Q as QTable } from "./QTable-Bp4bRbRZ.js";
import { api } from "./axios-DOaUvPJw.js";
import "./use-dark-3OGnIsE7.js";
import "./option-sizes-B3TZgULG.js";
import "./use-key-composition-BP8jtq2e.js";
import "./QSelect-CDZ-81F1.js";
import "./QItemLabel-BELvJCJR.js";
import "./selection-GX1L8RjI.js";
import "./QDialog-Bi4NORAY.js";
import "./use-timeout-tcy2aUTk.js";
import "./QSeparator-DY803WMm.js";
import "./QList-D_uMUYMB.js";
import "./QMarkupTable-Bmy7cnK1.js";
import "./use-fullscreen-D4QZmw0H.js";
const _hoisted_1 = { class: "page-subtitle" };
const _hoisted_2 = { for: "" };
const _hoisted_3 = ["href"];
const _hoisted_4 = {
  key: 0,
  class: "flex items-center justify-end q-ml-auto"
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { style: { "display": "flex", "flex-flow": "column" } };
const _hoisted_8 = { class: "flex" };
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
      { name: "check", align: "left" },
      { name: "name", field: "name", align: "left" },
      { name: "download", align: "right" },
      { name: "upload", align: "right" }
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
              "body-cell-name": withCtx((props2) => [
                createVNode(QTd, {
                  class: normalizeClass({ "kardex--required": props2.row.required })
                }, {
                  default: withCtx(() => [
                    createBaseVNode("label", _hoisted_2, toDisplayString(props2.row.name), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])
              ]),
              "body-cell-download": withCtx((props2) => [
                createVNode(QTd, { class: "text-right" }, {
                  default: withCtx(() => [
                    props2.row.has_template ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: props2.row.template,
                      target: "_blank"
                    }, " descargar ", 8, _hoisted_3)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-upload": withCtx((props2) => [
                createVNode(QTd, { style: { "width": "320px" } }, {
                  default: withCtx(() => [
                    !media.value["kardex_" + props2.row.slug] ? (openBlock(), createElementBlock("div", _hoisted_4, [
                      kardex.value[props2.row.slug] ? (openBlock(), createElementBlock("div", _hoisted_5, [
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
                    ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
                      createBaseVNode("div", _hoisted_7, [
                        createBaseVNode("div", _hoisted_8, [
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
                        props2.row.has_detail ? (openBlock(), createBlock(QInput, {
                          key: 0,
                          readonly: "",
                          outlined: "",
                          "model-value": media.value["kardex_" + props2.row.slug].detail
                        }, null, 8, ["model-value"])) : createCommentVNode("", true)
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
