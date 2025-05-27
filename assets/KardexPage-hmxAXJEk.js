import { Q as QCheckbox } from "./QCheckbox-BMrw9OGo.js";
import { Q as QTd } from "./QTd-DvptlpfK.js";
import { j as onMounted, r as ref, W as createElementBlock, J as openBlock, N as createBaseVNode, X as Fragment, Y as renderList, M as createVNode, U as toDisplayString, K as withCtx, Q as QIcon, P as QBtn, O as createTextVNode } from "./index-cCQoerBE.js";
import { Q as QFile } from "./QFile-2WvUNLpG.js";
import { Q as QTable } from "./QTable-BFy7GktN.js";
import { api } from "./axios-ByMy53kN.js";
import "./use-dark-C8v3QwmZ.js";
import "./use-key-composition-Cm9vnODB.js";
import "./QSelect-CtZdKzvL.js";
import "./QItemLabel-BM-XPiQp.js";
import "./selection-Bd5i_6-Y.js";
import "./use-timeout-NE9gHm0p.js";
import "./use-file-dom-props-DxWClpik.js";
import "./QSeparator-BP1E2Kcs.js";
import "./QList-Bqgej6v_.js";
import "./QMarkupTable-D1U2wsrV.js";
import "./use-fullscreen-BhYJh7gg.js";
const _hoisted_1 = { class: "page-subtitle" };
const _hoisted_2 = ["href"];
const _hoisted_3 = {
  key: 0,
  class: "flex items-center justify-end q-ml-auto"
};
const _hoisted_4 = { key: 1 };
const _sfc_main = {
  __name: "KardexPage",
  props: ["candidateId"],
  setup(__props) {
    const props = __props;
    onMounted(async () => {
      candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
      media.value = (await api.get(`candidates/${props.candidateId}/kardexes`)).data.data;
      rows.value = (await api.get("kardexes")).data.data;
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
      "default": "Documentos a Solicitar",
      "tutor": "Documentos a Descargar y Firmar por Responsable del Beneficiario y Tutor Legal",
      "doctor": "Documentos a Descargar y Firmar por Médico",
      "externo": "Documentos a Descargar y Firmar por Externos"
    };
    async function uploadFile(collectionName) {
      try {
        loading.value = true;
        let data = new FormData();
        data.append("collection_name", collectionName);
        data.append("upload", kardex.value[collectionName]);
        let response = (await api.post(`candidates/${props.candidateId}/kardexes`, data)).data.data;
        media.value[response.collection_name] = response;
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    async function deleteFile(collectionName) {
      if (!window.confirm("Seguro que desea eliminar el documento adjunto?")) return;
      try {
        loading.value = true;
        await api.post(`candidates/${props.candidateId}/kardexes`, { collection_name: collectionName, _method: "DELETE" });
        delete media.value["kardex_" + collectionName];
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
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
                    createBaseVNode("a", {
                      href: props2.row.template,
                      target: "_blank"
                    }, " descargar ", 8, _hoisted_2)
                  ]),
                  _: 2
                }, 1024)
              ]),
              "body-cell-upload": withCtx((props2) => [
                createVNode(QTd, { style: { "width": "320px" } }, {
                  default: withCtx(() => [
                    !media.value["kardex_" + props2.row.slug] ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      createVNode(QFile, {
                        style: { "width": "240px" },
                        clearable: "",
                        dense: "",
                        outlined: "",
                        placeholder: "Adjuntar archivo",
                        modelValue: kardex.value[props2.row.slug],
                        "onUpdate:modelValue": ($event) => kardex.value[props2.row.slug] = $event,
                        class: "q-mr-sm"
                      }, {
                        prepend: withCtx(() => [
                          createVNode(QIcon, { name: "sym_o_attach_file" })
                        ]),
                        _: 2
                      }, 1032, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(QBtn, {
                        disable: !kardex.value[props2.row.slug],
                        onClick: ($event) => uploadFile(props2.row.slug),
                        color: "primary",
                        round: "",
                        dense: "",
                        icon: "sym_o_upload",
                        loading: loading.value
                      }, null, 8, ["disable", "onClick", "loading"])
                    ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
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
