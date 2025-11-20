import { o as onMounted, r as ref, k as api, c as createElementBlock, b as createBaseVNode, H as Fragment, K as renderList, a as openBlock, d as createVNode, t as toDisplayString, w as withCtx, q as createBlock, Q as QInput, n as QIcon, h as QBtn, E as createCommentVNode, O as normalizeClass, i as QCheckbox } from "./index-Dk-vfK7v.js";
import { Q as QTd } from "./QTd-DKOvs576.js";
import { Q as QFile } from "./QFile-DYy0HRyr.js";
import { Q as QTable } from "./QTable-DokQwqb9.js";
import "./QSelect-BW1ZBX55.js";
import "./QItem-DE7d-lgy.js";
import "./selection-DEaGGDNT.js";
import "./QVirtualScroll-CejCbXay.js";
import "./QList-BNUCwZx5.js";
import "./QMarkupTable-z16xpCIW.js";
import "./use-fullscreen-r4BMIhU0.js";
const _hoisted_1 = { class: "page-subtitle" };
const _hoisted_2 = { for: "" };
const _hoisted_3 = ["href"];
const _hoisted_4 = {
  key: 0,
  class: "flex items-center justify-end q-ml-auto"
};
const _hoisted_5 = { key: 1 };
const _hoisted_6 = { class: "flex items-center justify-end q-ml-auto" };
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
              columns: columns.value,
              pagination: { rowsPerPage: 0 }
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
                    props2.row.template ? (openBlock(), createElementBlock("a", {
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
                      props2.row.has_detail ? (openBlock(), createBlock(QInput, {
                        key: 0,
                        style: { "width": "240px" },
                        clearable: "",
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
                      }, 1032, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createBlock(QFile, {
                        key: 1,
                        style: { "width": "240px" },
                        clearable: "",
                        dense: "",
                        outlined: "",
                        placeholder: "Adjuntar archivo",
                        modelValue: kardex.value[props2.row.slug].file,
                        "onUpdate:modelValue": ($event) => kardex.value[props2.row.slug].file = $event,
                        class: "q-mr-sm q-field--kardex"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(QIcon, { name: "sym_o_attach_file" })
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"])),
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
                        props2.row.has_detail ? (openBlock(), createBlock(QInput, {
                          key: 0,
                          style: { "width": "240px" },
                          clearable: "",
                          dense: "",
                          outlined: "",
                          readonly: "",
                          "model-value": media.value["kardex_" + props2.row.slug].detail,
                          class: "q-mr-sm"
                        }, {
                          prepend: withCtx(() => [
                            createVNode(QIcon, {
                              name: "sym_o_edit",
                              class: "no-pointer-events"
                            })
                          ]),
                          _: 2
                        }, 1032, ["model-value"])) : (openBlock(), createBlock(QBtn, {
                          key: 1,
                          style: { "width": "240px" },
                          color: "primary",
                          icon: "sym_o_download",
                          target: "_blank",
                          class: "q-mr-sm",
                          href: media.value["kardex_" + props2.row.slug].original_url,
                          label: media.value["kardex_" + props2.row.slug].file_name
                        }, null, 8, ["href", "label"])),
                        createVNode(QBtn, {
                          style: { "flex": "0 0", "align-self": "center" },
                          onClick: ($event) => deleteFile(props2.row.slug),
                          color: "negative",
                          round: "",
                          dense: "",
                          icon: "sym_o_delete"
                        }, null, 8, ["onClick"])
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
