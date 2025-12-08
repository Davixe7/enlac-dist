import { r as ref, A as computed, o as onMounted, q as createBlock, w as withCtx, l as api, a as openBlock, b as createBaseVNode, d as createVNode, m as QCard, n as QCardSection, j as createTextVNode, ap as QSeparator, c as createElementBlock, H as Fragment, K as renderList, t as toDisplayString, h as QBtn, s as QDialog, E as createCommentVNode } from "./index-DnbucpnZ.js";
import { Q as QDate } from "./QDate-ukCiHfXD.js";
import { Q as QMarkupTable } from "./QMarkupTable-HWmzYsao.js";
import { Q as QPage } from "./QPage-DlaNt5hV.js";
import { d as date } from "./date-zeHggk-t.js";
import { n as notify } from "./notify-ss2b1ea4.js";
import { _ as _sfc_main$1 } from "./BeneficiariesPicker-FSHHQBiE.js";
import "./use-render-cache-DRJWLz-b.js";
import "./QSelect-BMFRWVhp.js";
import "./QItem-rJjzgen_.js";
import "./selection-DyOCISqr.js";
const _hoisted_1 = { class: "row q-col-gutter-x-lg" };
const _hoisted_2 = { class: "col-md-3" };
const _hoisted_3 = { class: "col-md-9" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  style: { "width": "100%" },
  class: "schedule-table"
};
const _hoisted_7 = { class: "text-right" };
const _hoisted_8 = { class: "text-right" };
const _hoisted_9 = { class: "text-right" };
const _hoisted_10 = { class: "flex justify-end q-pt-md" };
const _sfc_main = {
  __name: "EquinetherapySchedule",
  setup(__props) {
    const loading = ref(false);
    const scheduleDialog = ref(false);
    const selectedDate = ref(date.formatDate(Date.now(), "YYYY-MM-DD"));
    const schedules = ref([]);
    const candidateId = ref(null);
    const slotTemplate = {
      candidate_id: null,
      date: null,
      comments: "",
      start_time: null,
      end_time: null,
      departure_time: null,
      return_time: null,
      type: "equine"
    };
    const defaultSlots = [
      { start_time: "09:00:00", end_time: "09:25:00" },
      { start_time: "09:25:00", end_time: "09:50:00" },
      { start_time: "09:50:00", end_time: "10:15:00" },
      { start_time: "10:15:00", end_time: "10:40:00" },
      { start_time: "10:40:00", end_time: "11:05:00" },
      { start_time: "11:05:00", end_time: "11:30:00" },
      { start_time: "11:30:00", end_time: "11:55:00" },
      { start_time: "11:55:00", end_time: "12:20:00" },
      { start_time: "12:20:00", end_time: "12:45:00" },
      { start_time: "12:45:00", end_time: "01:10:00" }
    ];
    const rows = computed(() => {
      return defaultSlots.map((slot) => {
        return schedules.value.find((schedule) => schedule.start_time == slot.start_time) || {
          ...slotTemplate,
          ...slot,
          candidate_id: candidateId.value,
          date: selectedDate.value
        };
      });
    });
    async function fetchSchedules() {
      if (!selectedDate.value) return;
      try {
        loading.value = true;
        schedules.value = (await api.get(`rides/?type=equine&date=${selectedDate.value}`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo cargar la agenda del día seleccionado");
      } finally {
        loading.value = false;
      }
    }
    const selectedRow = ref(null);
    function setSchedule(row) {
      selectedRow.value = row;
      scheduleDialog.value = true;
    }
    async function saveSchedule() {
      try {
        loading.value = true;
        let data = (await api.post("rides", selectedRow.value)).data.data;
        notify.positive("Guardado exitosamente");
        let rowIndex = rows.value.findIndex((row) => row.start_time == selectedRow.value.start_time);
        rows.value.splice(rowIndex, 1, data);
        scheduleDialog.value = false;
      } catch (error) {
        console.log(error);
        notify.negative("No se pudo guardar el horario");
      } finally {
        loading.value = false;
      }
    }
    const hourBlocks = [
      "09:00am - 09:25am",
      "09:25am - 09:50am",
      "09:50am - 10:15am",
      "10:15am - 10:40am",
      "10:40am - 11:05am",
      "11:05am - 11:30am",
      "11:30am - 11:55am",
      "11:55am - 12:20pm",
      "12:20pm - 12:45pm",
      "12:45pm - 01:10pm"
    ];
    onMounted(async () => {
      await fetchSchedules();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(QCard, null, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "text-h6" }, {
                    default: withCtx(() => _cache[3] || (_cache[3] = [
                      createTextVNode(" Seleccione el día ")
                    ])),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QDate, {
                    flat: "",
                    style: { "width": "100%" },
                    modelValue: selectedDate.value,
                    "onUpdate:modelValue": [
                      _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                      fetchSchedules
                    ],
                    mask: "YYYY-MM-DD"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QMarkupTable, { style: { "width": "100%" } }, {
                default: withCtx(() => [
                  _cache[7] || (_cache[7] = createBaseVNode("thead", null, [
                    createBaseVNode("th", null, "Horario"),
                    createBaseVNode("th", null, "Beneficiario"),
                    createBaseVNode("th", null, "Ida"),
                    createBaseVNode("th", null, "Regreso"),
                    createBaseVNode("th", null, "Comentarios")
                  ], -1)),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row, i) => {
                      return openBlock(), createElementBlock("tr", {
                        key: row.id
                      }, [
                        createBaseVNode("td", null, toDisplayString(hourBlocks[i]), 1),
                        createBaseVNode("td", null, [
                          row.id ? (openBlock(), createElementBlock("div", _hoisted_4, toDisplayString(row.candidate.full_name), 1)) : (openBlock(), createBlock(QBtn, {
                            key: 1,
                            unelevated: "",
                            label: "Seleccionar",
                            color: "grey-5",
                            dense: "",
                            onClick: ($event) => setSchedule(row)
                          }, null, 8, ["onClick"]))
                        ]),
                        _cache[4] || (_cache[4] = createBaseVNode("td", null, null, -1)),
                        _cache[5] || (_cache[5] = createBaseVNode("td", null, null, -1)),
                        _cache[6] || (_cache[6] = createBaseVNode("td", null, null, -1))
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          createVNode(QDialog, {
            modelValue: scheduleDialog.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => scheduleDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(QCard, { style: { "width": "400px" } }, {
                default: withCtx(() => [
                  createVNode(QCardSection, { class: "text-h6" }, {
                    default: withCtx(() => _cache[8] || (_cache[8] = [
                      createTextVNode(" Programar horario")
                    ])),
                    _: 1
                  }),
                  createVNode(QSeparator),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _cache[12] || (_cache[12] = createBaseVNode("div", { class: "q-pb-sm q-field__label" }, "Seleccionar beneficiario", -1)),
                      createVNode(_sfc_main$1, {
                        class: "q-mb-md",
                        modelValue: selectedRow.value.candidate_id,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedRow.value.candidate_id = $event),
                        params: { equinetherapy: 1 }
                      }, null, 8, ["modelValue"]),
                      selectedRow.value.candidate_id ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createBaseVNode("table", _hoisted_6, [
                          createBaseVNode("tr", null, [
                            _cache[9] || (_cache[9] = createBaseVNode("th", null, "Fecha:", -1)),
                            createBaseVNode("td", _hoisted_7, toDisplayString(selectedRow.value.date), 1)
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[10] || (_cache[10] = createBaseVNode("th", null, "Hora inicio:", -1)),
                            createBaseVNode("td", _hoisted_8, toDisplayString(selectedRow.value.start_time), 1)
                          ]),
                          createBaseVNode("tr", null, [
                            _cache[11] || (_cache[11] = createBaseVNode("th", null, "Hora fin:", -1)),
                            createBaseVNode("td", _hoisted_9, toDisplayString(selectedRow.value.end_time), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_10, [
                          createVNode(QBtn, {
                            unelevated: "",
                            color: "primary",
                            label: "Guardar",
                            onClick: saveSchedule,
                            loading: loading.value
                          }, null, 8, ["loading"])
                        ])
                      ])) : createCommentVNode("", true)
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
