import { r as ref, x as onMounted, a4 as api, O as createElementBlock, Z as createBaseVNode, J as createVNode, I as withCtx, a7 as QInput, aa as QDialog, P as Fragment, H as openBlock, Q as QIcon, U as QBtn, M as createTextVNode, a8 as QSpinner, a5 as QCard, a6 as QCardSection, K as withDirectives } from "./index-Lpbv6tCz.js";
import { Q as QTime } from "./QTime-B5UPCIVe.js";
import { Q as QPopupProxy } from "./QPopupProxy-BBdHAWWY.js";
import { Q as QTd } from "./QTd-BAwC8nlh.js";
import { Q as QTable } from "./QTable-CtmmXpKr.js";
import { C as ClosePopup } from "./ClosePopup-FQHseU-J.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { d as date } from "./date-s2hr6oY7.js";
import "./touch-BscSWsHh.js";
import "./selection-DAp7_Zui.js";
import "./use-datetime-ulFL8mFR.js";
import "./format-BC-UoHKJ.js";
import "./QMenu-D3LWUHDp.js";
import "./QVirtualScroll-Bl8DQEh1.js";
import "./QList-VjDLrJpF.js";
import "./QMarkupTable-CAF8YLQ6.js";
import "./QSelect-A9ZZmmDT.js";
import "./QItem-hGGqEP0j.js";
import "./use-fullscreen-BZnGS6Ms.js";
const _hoisted_1 = { class: "flex" };
const _hoisted_2 = { class: "q-ml-auto flex" };
const _hoisted_3 = { class: "flex q-my-lg justify-center" };
const _hoisted_4 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "RidesEquinetherapy",
  setup(__props) {
    const searchQuery = ref("");
    const loading = ref(false);
    const commentDialog = ref(false);
    const selectedRow = ref(null);
    const commentText = ref("");
    function formatAmPm(time) {
      if (!time) return "-";
      return date.formatDate(`2026-01-01 ${time}`, "hh:mm A");
    }
    function formatRange(start, end) {
      if (!start || !end) return "-";
      const s = date.formatDate(`2026-01-01 ${start}`, "hh:mm A");
      const e = date.formatDate(`2026-01-01 ${end}`, "hh:mm A");
      return `${s} - ${e}`;
    }
    function openCommentDialog(row) {
      selectedRow.value = row;
      commentText.value = row.comments || "";
      commentDialog.value = true;
    }
    async function saveComment() {
      if (!selectedRow.value) return;
      try {
        ;
        (await api.post(`rides/${selectedRow.value.id}`, {
          ...selectedRow.value,
          _method: "PUT"
        })).data.data;
        notify.positive("Comentario guardado exitosamente");
        commentDialog.value = false;
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo guardar el comentario");
      }
    }
    onMounted(async () => {
      await fetchRides();
    });
    const rows = ref([]);
    const columns = ref([
      {
        name: "candidate.name",
        label: "Beneficiario",
        field: (row) => row.candidate.full_name,
        align: "left"
      },
      {
        name: "schedule",
        label: "Horario",
        field: (row) => formatRange(row.start_time, row.end_time),
        align: "center",
        style: "font-size: 1.6rem !important; font-weight: bold !important;"
      },
      {
        name: "departure_time",
        label: "Ida",
        field: "departure_time",
        align: "left",
        headerStyle: "font-weight: bold; color: #2e7d32; font-size: 1.1rem;"
      },
      {
        name: "return_time",
        label: "Regreso",
        field: "return_time",
        align: "left",
        headerStyle: "font-weight: bold; color: #c62828; font-size: 1.1rem;"
      },
      { name: "comment" }
    ]);
    async function fetchRides() {
      try {
        loading.value = true;
        rows.value = (await api.get("rides/?type=equine")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    async function saveRide(row) {
      try {
        loading.value = true;
        let route = row.id ? `rides/${row.id}` : `rides`;
        let data = row.id ? { ...row, _method: "PUT" } : { ...row };
        let response = (await api.post(route, data)).data.data;
        Object.assign(row, response);
        notify.positive("Información guardada exitosamente");
      } catch (error) {
        console.error(error);
        notify.negative("No se pudo guardar la información");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "column" }, [
            createBaseVNode("h1", { class: "page-title" }, "Traslados a Equinoterapia"),
            createBaseVNode("div", { class: "subtitle q-mb-lg" }, "Captura Ida o Regreso según corresponda:")
          ], -1)),
          createBaseVNode("div", _hoisted_2, [
            createVNode(QInput, {
              outlined: "",
              modelValue: searchQuery.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              debounce: "500",
              clearable: ""
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        createVNode(QTable, {
          bordered: "",
          flat: "",
          "hide-bottom": "",
          rows: rows.value,
          columns: columns.value,
          pagination: { rowsPerPage: 0 },
          loading: loading.value,
          filter: searchQuery.value
        }, {
          loading: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createVNode(QSpinner, {
                  size: "30px",
                  color: "primary",
                  class: "q-mr-md"
                }),
                _cache[4] || (_cache[4] = createTextVNode(" Cargando... "))
              ])
            ])
          ]),
          "body-cell-departure_time": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QInput, {
                  color: "positive",
                  filled: "",
                  "model-value": formatAmPm(props.row.departure_time),
                  readonly: "",
                  disable: !!props.row.departure_time,
                  class: "time-input-large col-ida"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "access_time",
                      class: "cursor-pointer text-green-8"
                    }),
                    createVNode(QPopupProxy, null, {
                      default: withCtx(() => [
                        createVNode(QTime, {
                          modelValue: props.row.departure_time,
                          "onUpdate:modelValue": [($event) => props.row.departure_time = $event, (val) => saveRide(props.row)],
                          "with-seconds": "false",
                          format24h: "false"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["model-value", "disable"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-return_time": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QInput, {
                  filled: "",
                  color: "negative",
                  "model-value": formatAmPm(props.row.return_time),
                  readonly: "",
                  disable: !!props.row.return_time,
                  class: "time-input-large col-regreso"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "access_time",
                      class: "cursor-pointer text-red-8"
                    }),
                    createVNode(QPopupProxy, null, {
                      default: withCtx(() => [
                        createVNode(QTime, {
                          modelValue: props.row.return_time,
                          "onUpdate:modelValue": [($event) => props.row.return_time = $event, (val) => saveRide(props.row)],
                          "with-seconds": "false",
                          format24h: "false"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["model-value", "disable"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-comment": withCtx((props) => [
            createVNode(QTd, null, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  color: "primary",
                  onClick: ($event) => openCommentDialog(props.row),
                  label: "Comentario"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["rows", "columns", "loading", "filter"]),
        createVNode(QDialog, {
          modelValue: commentDialog.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => commentDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { class: "comment-card" }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    _cache[5] || (_cache[5] = createBaseVNode("div", { class: "page-subtitle q-mb-md" }, "Observaciones del traslado", -1)),
                    createVNode(QInput, {
                      outlined: "",
                      modelValue: selectedRow.value.comments,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedRow.value.comments = $event),
                      label: "Comentario",
                      type: "textarea",
                      autogrow: "",
                      class: "q-mb-md comment-textarea"
                    }, null, 8, ["modelValue"]),
                    createBaseVNode("div", _hoisted_4, [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancelar"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      createVNode(QBtn, {
                        color: "primary",
                        label: "Guardar",
                        onClick: saveComment
                      })
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
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
