import { r as ref, a as computed, w as watch, x as onMounted, G as createBlock, H as openBlock, I as withCtx, Z as createBaseVNode, J as createVNode, U as QBtn, O as createElementBlock, M as createTextVNode, Q as QIcon, S as toDisplayString, a5 as QCard, a6 as QCardSection, K as withDirectives, R as renderList, ae as QCardActions, P as Fragment, aa as QDialog, a4 as api } from "./index-Lpbv6tCz.js";
import { Q as QBadge } from "./QBadge-BF2oxqEK.js";
import { Q as QTd } from "./QTd-BAwC8nlh.js";
import { Q as QTable } from "./QTable-CtmmXpKr.js";
import { Q as QSpace } from "./QSpace-DDJHlChA.js";
import { Q as QImg } from "./QImg-Dg3-E4FR.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-hGGqEP0j.js";
import { Q as QPage } from "./QPage-C8CB305j.js";
import { C as ClosePopup } from "./ClosePopup-FQHseU-J.js";
import { _ as _sfc_main$2 } from "./EnlacDate-yz6lrqZ0.js";
import { _ as _sfc_main$1 } from "./BeneficiarySelect-BC1_ylbw.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { e as exportXlsFile } from "./exportXls-DB6FsJFI.js";
import "./QVirtualScroll-Bl8DQEh1.js";
import "./QList-VjDLrJpF.js";
import "./QMarkupTable-CAF8YLQ6.js";
import "./QSelect-A9ZZmmDT.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./format-BC-UoHKJ.js";
import "./use-fullscreen-BZnGS6Ms.js";
import "./QDate-DenJkZYt.js";
import "./use-render-cache-DRJWLz-b.js";
import "./use-datetime-ulFL8mFR.js";
import "./date-s2hr6oY7.js";
import "./QPopupProxy-BBdHAWWY.js";
import "./datetime-Dvln09A7.js";
const _hoisted_1 = { class: "row q-mb-md justify-between items-end" };
const _hoisted_2 = { class: "col-4 col-md-8 flex items-end" };
const _hoisted_3 = {
  key: 1,
  class: "text-grey-5"
};
const _hoisted_4 = { class: "row q-col-gutter-sm" };
const _sfc_main = {
  __name: "IssuesReport",
  setup(__props) {
    const startDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const endDate = ref((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
    const candidateId = ref(null);
    const loading = ref(false);
    const rows = ref([]);
    const showAttachmentsModal = ref(false);
    const selectedAttachments = ref([]);
    const subjectsMap = computed(() => new Map(subjects.value.map((s) => [s.id, s.label])));
    const columns = ref([
      {
        name: "candidate.full_name",
        label: "Beneficiario",
        field: (row) => row.candidate.full_name,
        align: "left",
        sortable: true
      },
      {
        name: "category",
        label: "Área",
        field: (row) => row.plan_category.label,
        align: "left",
        sortable: true
      },
      { name: "date", label: "Fecha", field: "date", align: "left", sortable: true },
      { name: "user", label: "Reportó", field: (row) => row.user.name, align: "left", sortable: true },
      {
        name: "type",
        label: "Tipo",
        field: (row) => subjectsMap.value.get(row.type) || "Desconocido",
        align: "left",
        sortable: true
      },
      { name: "comments", label: "Comentarios", field: "comments", align: "left", sortable: true },
      {
        name: "attachments",
        label: "Adjuntos",
        field: (row) => row.attachments || [],
        align: "center",
        sortable: true
      }
    ]);
    const subjects = ref([
      { id: 1, label: "Alimentación" },
      { id: 2, label: "Retardo" },
      { id: 3, label: "Higiene" },
      { id: 4, label: "Falta a Cita Médica" },
      { id: 5, label: "Falta a Cita Nutrición" },
      { id: 6, label: "Falta a Cita Psicología" },
      { id: 7, label: "Falta a Cita Comunicación" },
      { id: 8, label: "Falta a Capacitación" },
      { id: 9, label: "Falta a Reunión de Padres" },
      { id: 10, label: "Falta Actividades de Recaudación de Fondos" },
      { id: 11, label: "Indisciplina" },
      { id: 12, label: "Otro" }
    ]);
    function isImage(file) {
      return file.mime_type && file.mime_type.startsWith("image/");
    }
    function openAttachments(attachments) {
      if (attachments && attachments.length > 0) {
        selectedAttachments.value = attachments;
        showAttachmentsModal.value = true;
      } else {
        notify.warning("Esta incidencia no tiene archivos adjuntos");
      }
    }
    async function fetchIssues() {
      if (startDate.value > endDate.value) {
        notify.warning("La fecha inicial no puede ser mayor a la final");
        return;
      }
      try {
        loading.value = true;
        const params = { start_date: startDate.value, end_date: endDate.value };
        if (candidateId.value) params.candidate_id = candidateId.value;
        const response = await api.get("issues/", { params });
        rows.value = response.data.data;
      } catch (error) {
        console.error("Error:", error);
        notify.negative("No se pudieron cargar las incidencias");
      } finally {
        loading.value = false;
      }
    }
    watch([startDate, endDate, candidateId], () => fetchIssues());
    onMounted(() => fetchIssues());
    async function exportXls() {
      loading.value = true;
      try {
        const params = { start_date: startDate.value, end_date: endDate.value };
        if (candidateId.value) params.candidate_id = candidateId.value;
        await exportXlsFile("issues/export", params, `reporte_incidencias_${startDate.value}.xlsx`);
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { class: "q-pa-md" }, {
        default: withCtx(() => [
          _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title" }, "Incidencias", -1)),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_sfc_main$1, {
                modelValue: candidateId.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidateId.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: startDate.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => startDate.value = $event),
                class: "q-mr-md"
              }, null, 8, ["modelValue"]),
              createVNode(_sfc_main$2, {
                modelValue: endDate.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => endDate.value = $event)
              }, null, 8, ["modelValue"])
            ]),
            createVNode(QBtn, {
              outline: "",
              color: "primary",
              icon: "file_download",
              label: "Exportar",
              onClick: exportXls
            })
          ]),
          createVNode(QTable, {
            flat: "",
            bordered: "",
            rows: rows.value,
            columns: columns.value,
            loading: loading.value,
            pagination: { rowsPerPage: 10 },
            "row-key": "id"
          }, {
            "body-cell-attachments": withCtx((props) => [
              createVNode(QTd, {
                props,
                class: "cursor-pointer",
                onClick: ($event) => openAttachments(props.value)
              }, {
                default: withCtx(() => [
                  props.value.length > 0 ? (openBlock(), createBlock(QBadge, {
                    key: 0,
                    color: "secondary"
                  }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: "attach_file",
                        size: "xs",
                        class: "q-mr-xs"
                      }),
                      createTextVNode(" " + toDisplayString(props.value.length), 1)
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createElementBlock("span", _hoisted_3, "N/A"))
                ]),
                _: 2
              }, 1032, ["props", "onClick"])
            ]),
            _: 1
          }, 8, ["rows", "columns", "loading"]),
          createVNode(QDialog, {
            modelValue: showAttachmentsModal.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => showAttachmentsModal.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { style: { "min-width": "400px", "max-width": "600px" } }, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                    default: withCtx(() => [
                      _cache[4] || (_cache[4] = createBaseVNode("div", { class: "text-h6" }, "Archivos Adjuntos", -1)),
                      createVNode(QSpace),
                      withDirectives(createVNode(QBtn, {
                        icon: "close",
                        flat: "",
                        round: "",
                        dense: ""
                      }, null, 512), [
                        [ClosePopup]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_4, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(selectedAttachments.value, (file) => {
                          return openBlock(), createElementBlock("div", {
                            key: file.id,
                            class: "col-12"
                          }, [
                            isImage(file) ? (openBlock(), createBlock(QCard, {
                              key: 0,
                              bordered: "",
                              flat: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(QImg, {
                                  src: file.original_url,
                                  ratio: 16 / 9,
                                  "spinner-color": "primary"
                                }, null, 8, ["src"]),
                                createVNode(QCardActions, { align: "center" }, {
                                  default: withCtx(() => [
                                    createVNode(QBtn, {
                                      flat: "",
                                      label: "Ver original",
                                      color: "primary",
                                      type: "a",
                                      href: file.original_url,
                                      target: "_blank"
                                    }, null, 8, ["href"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024)) : (openBlock(), createBlock(QItem, {
                              key: 1,
                              clickable: "",
                              tag: "a",
                              href: file.original_url,
                              target: "_blank",
                              bordered: "",
                              class: "rounded-borders"
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, { avatar: "" }, {
                                  default: withCtx(() => [
                                    createVNode(QIcon, {
                                      name: "description",
                                      color: "grey-8"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(file.file_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(QItemLabel, { caption: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString((file.size / 1024).toFixed(2)) + " KB", 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["href"]))
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
