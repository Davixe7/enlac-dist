import { r as ref, K as onMounted, q as createBlock, s as openBlock, t as withCtx, N as createBaseVNode, v as createVNode, Y as QInput, Q as QIcon, a9 as QSpinner, G as QBtn, V as api, B as createElementBlock, a2 as QCheckbox, F as Fragment, aa as addFocusout, ab as removeFocusout, a as computed, y as createCommentVNode, a1 as QCard, D as toDisplayString, a3 as QDialog, L as useRoute, X as QCardSection, O as QAvatar, z as createTextVNode, _ as normalizeClass, x as withDirectives, ac as QCardActions } from "./index-CKbYB40P.js";
import { Q as QChip } from "./QChip-C7aczF42.js";
import { Q as QTd } from "./QTd-CC735HEK.js";
import { Q as QTooltip } from "./QTooltip-Bgw2Pdyv.js";
import { Q as QTable } from "./QTable-kZy2CN08.js";
import { Q as QSpace } from "./QSpace-CJtDkOm6.js";
import { Q as QBanner } from "./QBanner-BoYdZb94.js";
import { Q as QSelect } from "./QSelect-CRWVdTzU.js";
import { Q as QBadge } from "./QBadge-DYSZxBgV.js";
import { C as ClosePopup } from "./ClosePopup-CA4vzDEV.js";
import { n as notify } from "./notify-BnbxmtN1.js";
import { Q as QMarkupTable } from "./QMarkupTable-BPJpp9JF.js";
import { _ as _sfc_main$3 } from "./ApplyDonationDialog-BhnspEKE.js";
import { e as exportXlsFile } from "./exportXls-BnHE2Xtb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./position-engine-DlA4O3Ti.js";
import "./selection-BIEcezoc.js";
import "./QVirtualScroll-Cp_Wyc8w.js";
import "./QList-HIKTVqtW.js";
import "./use-fullscreen-Cs4A3cyd.js";
import "./QItem-CFEJs2Nw.js";
import "./QMenu-onc-S44f.js";
import "./format-CnAOSoyw.js";
import "./QForm-FczhIUg0.js";
import "./date-sjBg8Kfy.js";
const _hoisted_1$2 = {
  colspan: "2",
  style: { "height": "100px" }
};
const _sfc_main$2 = {
  __name: "SellerForm",
  props: ["raffleId"],
  emits: ["saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const loading = ref(false);
    const form = ref({
      raffle_id: props.raffleId,
      starts_at: 0,
      ends_at: 0,
      seller: { id: null, first_name: "", phone: "" }
    });
    async function fetchStart() {
      try {
        loading.value = true;
        let response = (await api.get(`raffles/${props.raffleId}/startsAt`)).data.data;
        form.value.starts_at = response;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar el punto de partida");
      } finally {
        loading.value = false;
      }
    }
    const fetchSeller = async () => {
      if (!form.value.seller.phone) return;
      try {
        loading.value = true;
        let response = (await api.get(`raffle_sellers/?phone=${form.value.seller.phone}`)).data.data;
        if (response.id) {
          form.value.seller = response;
        }
      } catch (error) {
        console.log(error);
        form.value.seller.id = null;
        form.value.seller.first_name = "";
        notify.negative("Error al cargar los datos del vendedor");
      } finally {
        loading.value = false;
      }
    };
    const assignTickets = async () => {
      try {
        loading.value = true;
        let route = `raffles/${props.raffleId}/assignTickets`;
        let response = (await api.post(route, { ...form.value })).data.data;
        console.log(response);
        notify.positive("Tickets asignados exitosamente");
        emit("saved");
      } catch (error) {
        console.log(error);
        notify.negative("Error al asignar tickets");
      } finally {
        loading.value = false;
      }
    };
    onMounted(() => {
      fetchStart();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QMarkupTable, { flat: "" }, {
        default: withCtx(() => [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              _cache[6] || (_cache[6] = createBaseVNode("td", null, "Teléfono del vendedor", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  type: "tel",
                  modelValue: form.value.seller.phone,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => form.value.seller.phone = $event),
                    _cache[1] || (_cache[1] = () => fetchSeller())
                  ],
                  "hide-bottom-space": "",
                  debounce: "500"
                }, {
                  append: withCtx(() => [
                    !loading.value ? (openBlock(), createBlock(QIcon, {
                      key: 0,
                      name: "search"
                    })) : (openBlock(), createBlock(QSpinner, { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[7] || (_cache[7] = createBaseVNode("td", null, "Nombre del vendedor", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  type: "text",
                  modelValue: form.value.seller.first_name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.seller.first_name = $event),
                  "hide-bottom-space": "",
                  disable: !!form.value.seller.id
                }, null, 8, ["modelValue", "disable"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[8] || (_cache[8] = createBaseVNode("td", null, "Boleto inicio", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  type: "number",
                  modelValue: form.value.starts_at,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.starts_at = $event),
                  "hide-bottom-space": "",
                  disable: true
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[9] || (_cache[9] = createBaseVNode("td", null, "Boleto fin", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  type: "number",
                  modelValue: form.value.ends_at,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.value.ends_at = $event),
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", _hoisted_1$2, [
                createVNode(QBtn, {
                  color: "primary",
                  loading: loading.value,
                  onClick: _cache[5] || (_cache[5] = () => assignTickets()),
                  class: "full-width",
                  label: "Asignar Tickets"
                }, null, 8, ["loading"])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$1 = { class: "q-pa-sm" };
const _hoisted_2$1 = { class: "flex q-gutter-x-sm" };
const _hoisted_3$1 = { class: "flex justify-end q-px-sm" };
const _sfc_main$1 = {
  __name: "ApplyTicket",
  props: ["ticket"],
  emits: ["saved"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const localTicket = ref({ ...props.ticket });
    const loading = ref(false);
    const fetchingBuyer = ref(false);
    async function fetchBuyer() {
      try {
        fetchingBuyer.value = true;
        let route = `donors/?cellphone=${localTicket.value.buyer.cellphone}`;
        let response = (await api.get(route)).data.data;
        localTicket.value.buyer = response;
      } catch (error) {
        if (error.response.status) {
          localTicket.value.buyer.first_name = "";
          localTicket.value.buyer.personal_email = "";
        }
      } finally {
        fetchingBuyer.value = false;
      }
    }
    async function fetchSeller() {
      try {
        fetchingBuyer.value = true;
        let route = `raffle_sellers/?phone=${localTicket.value.seller.phone}`;
        let response = (await api.get(route)).data.data;
        localTicket.value.seller = response;
      } catch (error) {
        if (error.response.status) {
          localTicket.value.seller.first_name = "";
          localTicket.value.seller.email = "";
        }
      } finally {
        fetchingBuyer.value = false;
      }
    }
    async function ApplyTicket() {
      try {
        loading.value = true;
        let route = `raffle_tickets/${localTicket.value.id}`;
        let response = (await api.post(route, { ...localTicket.value, _method: "PUT" })).data.data;
        console.log(response);
        emits("saved");
        notify.positive("Boleto capturado exitosamente");
      } catch (error) {
        console.log(error);
        notify.negative("Error al aplicar el boleto");
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(QMarkupTable, { flat: "" }, {
          default: withCtx(() => [
            createBaseVNode("tr", null, [
              _cache[11] || (_cache[11] = createBaseVNode("td", null, "# Boleto", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.number,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localTicket.value.number = $event),
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: ""
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[12] || (_cache[12] = createBaseVNode("td", { style: { "width": "300px", "white-space": "wrap" } }, " Celular del comprador / Responsable de vaquita ", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.buyer.cellphone,
                  "onUpdate:modelValue": [
                    _cache[1] || (_cache[1] = ($event) => localTicket.value.buyer.cellphone = $event),
                    fetchBuyer
                  ],
                  "hide-bottom-space": "",
                  outlined: "",
                  debounce: "500"
                }, {
                  append: withCtx(() => [
                    !fetchingBuyer.value ? (openBlock(), createBlock(QIcon, {
                      key: 0,
                      name: "sym_o_search"
                    })) : (openBlock(), createBlock(QSpinner, { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[13] || (_cache[13] = createBaseVNode("td", null, "Nombre", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.buyer.first_name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localTicket.value.buyer.first_name = $event),
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !!localTicket.value.buyer.id
                }, null, 8, ["modelValue", "disable"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[14] || (_cache[14] = createBaseVNode("td", null, "Correo Electrónico", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.buyer.personal_email,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => localTicket.value.buyer.personal_email = $event),
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: !!localTicket.value.buyer.id
                }, null, 8, ["modelValue", "disable"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[15] || (_cache[15] = createBaseVNode("td", null, "Teléfono vendedor:", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.seller.phone,
                  "onUpdate:modelValue": [
                    _cache[4] || (_cache[4] = ($event) => localTicket.value.seller.phone = $event),
                    fetchSeller
                  ],
                  "hide-bottom-space": "",
                  outlined: "",
                  debounce: "500",
                  disable: true
                }, {
                  append: withCtx(() => [
                    !fetchingBuyer.value ? (openBlock(), createBlock(QIcon, {
                      key: 0,
                      name: "sym_o_search"
                    })) : (openBlock(), createBlock(QSpinner, { key: 1 }))
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[16] || (_cache[16] = createBaseVNode("td", null, "Vendido por:", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.seller.first_name,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => localTicket.value.seller.first_name = $event),
                  outlined: "",
                  "hide-bottom-space": "",
                  disable: true
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[17] || (_cache[17] = createBaseVNode("td", null, "Fecha de venta", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  dense: "",
                  type: "date",
                  modelValue: localTicket.value.sold_at,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => localTicket.value.sold_at = $event),
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("tr", null, [
              _cache[18] || (_cache[18] = createBaseVNode("td", null, "Comentarios", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  outlined: "",
                  dense: "",
                  type: "text",
                  modelValue: localTicket.value.comments,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => localTicket.value.comments = $event),
                  "hide-bottom-space": ""
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createVNode(QCheckbox, {
              modelValue: localTicket.value.cow,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => localTicket.value.cow = $event),
              modelModifiers: { number: true },
              label: "Vaquita",
              "true-value": 1,
              "false-value": 0
            }, null, 8, ["modelValue"]),
            createVNode(QCheckbox, {
              modelValue: localTicket.value.deductible_receipt,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => localTicket.value.deductible_receipt = $event),
              modelModifiers: { number: true },
              label: "Recibo Deducible",
              "true-value": 1,
              "false-value": 0
            }, null, 8, ["modelValue"]),
            createVNode(QCheckbox, {
              modelValue: localTicket.value.enlac_collection,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => localTicket.value.enlac_collection = $event),
              modelModifiers: { number: true },
              label: "Cobranza ENLAC",
              "true-value": 1,
              "false-value": 0
            }, null, 8, ["modelValue"])
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(QBtn, {
              color: "primary",
              label: "Guardar",
              loading: loading.value,
              onClick: ApplyTicket
            }, null, 8, ["loading"])
          ])
        ])
      ], 64);
    };
  }
};
function fallback(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.contentEditable = "true";
  area.style.position = "fixed";
  const fn = () => {
  };
  addFocusout(fn);
  document.body.appendChild(area);
  area.focus();
  area.select();
  const res = document.execCommand("copy");
  area.remove();
  removeFocusout(fn);
  return res;
}
function copyToClipboard(text) {
  return navigator.clipboard !== void 0 ? navigator.clipboard.writeText(text) : new Promise((resolve, reject) => {
    const res = fallback(text);
    if (res) {
      resolve(true);
    } else {
      reject(res);
    }
  });
}
const _hoisted_1 = { class: "row items-center q-gutter-x-md" };
const _hoisted_2 = { class: "text-h6 text-weight-bolder leading-tight" };
const _hoisted_3 = { class: "row items-center q-gutter-x-lg text-right gt-xs" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { class: "text-subtitle2 text-weight-bold" };
const _hoisted_6 = { class: "row items-center justify-between q-mb-md" };
const _hoisted_7 = { class: "filter" };
const _hoisted_8 = { class: "flex q-gutter-x-sm q-py-xs" };
const _hoisted_9 = { class: "row q-col-gutter-sm q-my-xs" };
const _hoisted_10 = { class: "col-12 col-sm-6" };
const _hoisted_11 = { class: "col-12 col-sm-6" };
const _hoisted_12 = { style: { "font-size": "0.9rem", "color": "#404040" } };
const _hoisted_13 = { class: "row q-gutter-x-xs items-center" };
const _hoisted_14 = { class: "text-h6" };
const _hoisted_15 = { class: "q-mb-md text-caption text-grey-8" };
const _hoisted_16 = { class: "page-title row items-center q-gutter-x-sm" };
const _hoisted_17 = { class: "text-h6 row items-center q-gutter-x-sm" };
const _hoisted_18 = { class: "text-subtitle2 text-primary q-mb-xs" };
const _hoisted_19 = { class: "row q-col-gutter-sm text-caption" };
const _hoisted_20 = { class: "col-6" };
const _hoisted_21 = { class: "col-6" };
const _hoisted_22 = { class: "col-6" };
const _hoisted_23 = { class: "col-6" };
const _hoisted_24 = { class: "row justify-end q-gutter-x-sm" };
const _hoisted_25 = { class: "text-h6 row items-center q-gutter-x-sm" };
const _hoisted_26 = { class: "row justify-end q-gutter-x-sm" };
const _sfc_main = {
  __name: "RafflePage",
  props: ["raffleId"],
  setup(__props) {
    const props = __props;
    const raffle = ref({});
    const loading = ref(false);
    const rows = ref([]);
    const route = useRoute();
    const sellerDialog = ref(false);
    const ticketDialog = ref(false);
    const ticket = ref({});
    const donationDialog = ref(null);
    const linkDialog = ref(false);
    const resultsDialog = ref(false);
    const selectedTicketId = ref(null);
    const confirmDialog = ref(false);
    const submittingWinner = ref(false);
    const showDetailModal = ref(false);
    const loadingDetail = ref(false);
    const selectedTicket = ref(null);
    const ticketDonations = ref([]);
    function formatCurrency(value) {
      const amount = parseFloat(value) || 0;
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN"
      }).format(amount);
    }
    const detailColumns = [
      {
        align: "left",
        name: "folio_number",
        field: (row) => row.folio_number || "N/A",
        label: "Folio"
      },
      {
        align: "left",
        name: "payment_date",
        field: (row) => formatDate(row.payment_date),
        label: "Fecha"
      },
      {
        align: "left",
        name: "payment_method",
        field: (row) => row.payment_method || "N/A",
        label: "Método de Pago"
      },
      {
        align: "right",
        name: "amount",
        field: (row) => formatCurrency(row.amount),
        label: "Monto"
      }
    ];
    function formatDate(dateStr) {
      if (!dateStr) return "N/A";
      if (dateStr.includes("/")) return dateStr;
      const [year, month, day] = dateStr.split("T")[0].split("-");
      if (year && month && day) {
        return `${day}/${month}/${year}`;
      }
      return dateStr;
    }
    const buyerFilter = ref("");
    const sellerFilter = ref("");
    const publicUrl = computed(() => {
      if (!raffle.value?.id) return "";
      return `${window.location.origin}/#/public/raffles/${raffle.value.id}`;
    });
    function selectTicket(row) {
      ticket.value = row;
      ticket.value.buyer = ticket.value.buyer ? ticket.value.buyer : { id: null, first_name: "", cellphone: "" };
      ticket.value.seller = ticket.value.seller ? ticket.value.seller : { id: null, first_name: "", phone: "" };
      ticketDialog.value = true;
    }
    async function fetchRaffle() {
      let apiRoute = props.raffleId ? `raffles/${props.raffleId}` : `raffles/?procuration_activity_id=${route.query.procuration_activity_id}`;
      try {
        loading.value = true;
        raffle.value = (await api.get(apiRoute)).data.data;
        rows.value = raffle.value.tickets;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los datos de la rifa");
      } finally {
        loading.value = false;
      }
    }
    async function openPaymentHistory(row) {
      selectedTicket.value = row;
      showDetailModal.value = true;
      ticketDonations.value = [];
      if (row.donations && row.donations.length > 0) {
        ticketDonations.value = row.donations.map((d) => ({
          ...d,
          payment_date: formatDate(d.payment_date)
        }));
        return;
      }
      if (row.donor_id) {
        try {
          loadingDetail.value = true;
          const res = await api.get(`donations/?raffle_ticket_id=${row.id}`);
          const rawDonations = res.data.data || [];
          const currentActivityId = raffle.value?.procuration_activity_id;
          const list = rawDonations.filter((d) => {
            if (!currentActivityId) return true;
            return !d.procuration_activity_id || String(d.procuration_activity_id) === String(currentActivityId);
          });
          ticketDonations.value = list.map((d) => ({
            ...d,
            payment_date: formatDate(d.payment_date)
          }));
        } catch (error) {
          console.error(error);
          notify.negative("Error al cargar el detalle de pagos");
        } finally {
          loadingDetail.value = false;
        }
      }
    }
    function openStreamWindow() {
      if (!raffle.value?.id) return;
      window.open(`/#/admin/raffles/${raffle.value.id}/live-draw`, "_blank");
    }
    onMounted(() => fetchRaffle());
    const columns = ref([
      {
        align: "left",
        name: "number",
        label: "#",
        field: "number"
      },
      {
        align: "left",
        name: "status",
        label: "Estatus",
        field: "status"
      },
      {
        align: "left",
        name: "seller",
        label: "Vendedor",
        field: (row) => row.seller ? row.seller.first_name : ""
      },
      {
        align: "left",
        name: "sold_at",
        label: "Fecha de venta",
        field: (row) => row.sold_at ?? "pendiente"
      },
      {
        align: "left",
        name: "buyer",
        label: "Nombre del Comprador",
        field: (row) => row.buyer ? row.buyer.first_name : ""
      },
      { align: "left", name: "cow", label: "Vaquita", field: (row) => row.cow ? "Sí" : "No" },
      {
        align: "left",
        name: "deductible_receipt",
        label: "Recibo deducible",
        field: (row) => row.deductible_receipt ? "Sí" : "No"
      },
      {
        align: "left",
        name: "enlac_collection",
        label: "Cobranza ENLAC",
        field: (row) => row.enlac_collection ? "Sí" : "No"
      },
      {
        align: "left",
        name: "paid_amount",
        label: "Monto pagado",
        field: (row) => row.donations_sum_amount ? formatCurrency(row.donations_sum_amount) : "$0.00"
      },
      {
        align: "center",
        name: "detail",
        label: "Detalle"
      },
      {
        align: "right",
        name: "actions",
        label: ""
      }
    ]);
    const selectedFilterOption = ref("");
    const ticketStatuses = {
      "": { value: "", label: "Todos", color: "white" },
      "available": { value: "available", label: "Disponible", color: "positive" },
      "sold": { value: "sold", label: "Vendido", color: "negative" },
      "won": { value: "won", label: "Ganador", color: "amber-7" },
      "discarded": { value: "discarded", label: "Descartado", color: "grey-5" }
    };
    const pagination = ref({
      sortBy: "number",
      descending: false,
      page: 1,
      rowsPerPage: 50
    });
    const results = computed(() => {
      let filtered = [...rows.value];
      if (selectedFilterOption.value === "available" || selectedFilterOption.value === "sold" || selectedFilterOption.value === "won" || selectedFilterOption.value === "discarded") {
        filtered = filtered.filter((row) => row.status === selectedFilterOption.value);
      } else if (selectedFilterOption.value === "partial") {
        filtered = filtered.filter(
          (t) => t.donations_sum_amount > 0 && t.donations_sum_amount < raffle.value.ticket_price
        );
      } else if (selectedFilterOption.value === "total") {
        filtered = filtered.filter((t) => t.donations_sum_amount >= raffle.value.ticket_price);
      }
      if (buyerFilter.value.trim() !== "") {
        const query = buyerFilter.value.toLowerCase().trim();
        filtered = filtered.filter((row) => {
          const buyerName = row.buyer ? `${row.buyer.first_name || ""} ${row.buyer.last_name || ""}`.toLowerCase() : "";
          return buyerName.includes(query);
        });
      }
      if (sellerFilter.value.trim() !== "") {
        const query = sellerFilter.value.toLowerCase().trim();
        filtered = filtered.filter((row) => {
          const sellerName = row.seller ? `${row.seller.first_name || ""} ${row.seller.last_name || ""}`.toLowerCase() : "";
          return sellerName.includes(query);
        });
      }
      return filtered;
    });
    const soldCount = computed(() => {
      return rows.value.filter((t) => t.status === "sold").length;
    });
    const wonCount = computed(() => {
      return rows.value.filter((t) => t.status === "won").length;
    });
    const discardedCount = computed(() => {
      return rows.value.filter((t) => t.status === "discarded").length;
    });
    const partialCount = computed(() => {
      return rows.value.filter(
        (t) => t.donations_sum_amount > 0 && t.donations_sum_amount < raffle.value.ticket_price
      ).length;
    });
    const totalCount = computed(() => {
      return rows.value.filter((t) => t.donations_sum_amount >= raffle.value.ticket_price).length;
    });
    const soldTicketsOptions = computed(() => {
      return rows.value.filter((t) => t.status === "sold").map((t) => ({
        label: `Boleto #${t.number} - ${t.buyer ? t.buyer.first_name : "Sin Nombre"}`,
        value: t.id,
        ticket: t
      }));
    });
    const selectedTicketData = computed(() => {
      if (!selectedTicketId.value) return null;
      const option = soldTicketsOptions.value.find((opt) => opt.value === selectedTicketId.value);
      return option ? option.ticket : null;
    });
    function payTicket(row) {
      ticket.value = row;
      ticket.value.raffle = raffle.value;
      donationDialog.value = true;
    }
    function openLink() {
      linkDialog.value = true;
    }
    function copyLink() {
      copyToClipboard(publicUrl.value).then(() => {
        notify.positive("Enlace copiado al portapapeles");
      }).catch(() => {
        notify.negative("Error al copiar el enlace");
      });
    }
    function shareWhatsapp() {
      const text = encodeURIComponent(
        `Consulta la disponibilidad de boletos de la rifa "${raffle.value.name || "Rifa"}": ${publicUrl.value}`
      );
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
    async function handleSetWinner() {
      if (!selectedTicketId.value) return;
      try {
        submittingWinner.value = true;
        await api.post(`raffles/${raffle.value.id}/set-winner`, {
          raffle_ticket_id: selectedTicketId.value
        });
        notify.positive("Ganador capturado y boletos descartados correctamente");
        confirmDialog.value = false;
        resultsDialog.value = false;
        selectedFilterOption.value = "";
        await fetchRaffle();
      } catch (error) {
        console.error(error);
        notify.negative("Error al capturar los resultados de la rifa");
      } finally {
        submittingWinner.value = false;
      }
    }
    async function exportData() {
      if (!raffle.value?.id) return;
      try {
        loading.value = true;
        await exportXlsFile(
          `raffles/${raffle.value.id}/export`,
          {},
          `reporte_rifa_${raffle.value.name || raffle.value.id}.xlsx`
        );
        notify.positive("Reporte descargado correctamente");
      } catch (error) {
        console.error(error);
        notify.negative("Error al descargar el reporte de la rifa");
      } finally {
        loading.value = false;
      }
    }
    async function onSellerSaved() {
      await fetchRaffle();
      sellerDialog.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        raffle.value.winning_ticket ? (openBlock(), createBlock(QCard, {
          key: 0,
          flat: "",
          class: "bg-amber-1 text-amber-10 q-mb-md border-amber"
        }, {
          default: withCtx(() => [
            createVNode(QCardSection, { class: "row items-center justify-between q-py-sm" }, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(QAvatar, {
                    color: "amber-8",
                    "text-color": "white",
                    icon: "emoji_events",
                    size: "42px"
                  }),
                  createBaseVNode("div", null, [
                    _cache[22] || (_cache[22] = createBaseVNode("div", {
                      class: "text-caption text-weight-bold text-uppercase text-amber-9",
                      style: { "letter-spacing": "0.5px" }
                    }, " ¡Rifa Finalizada — Ganador Registrado! ", -1)),
                    createBaseVNode("div", _hoisted_2, " Boleto #" + toDisplayString(raffle.value.winning_ticket) + " — " + toDisplayString(raffle.value.winner_name || "Comprador Desconocido"), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_3, [
                  raffle.value.seller_winner_name ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    _cache[23] || (_cache[23] = createBaseVNode("div", { class: "text-caption text-grey-8" }, "Vendedor:", -1)),
                    createBaseVNode("div", _hoisted_5, toDisplayString(raffle.value.seller_winner_name), 1)
                  ])) : createCommentVNode("", true),
                  createVNode(QChip, {
                    color: "amber-8",
                    "text-color": "white",
                    icon: "stars",
                    class: "text-weight-bold"
                  }, {
                    default: withCtx(() => _cache[24] || (_cache[24] = [
                      createTextVNode(" Ganador ")
                    ])),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            _cache[25] || (_cache[25] = createBaseVNode("label", null, "Filtrar por:", -1)),
            createBaseVNode("div", _hoisted_8, [
              createVNode(QChip, {
                clickable: "",
                label: "Todos",
                onClick: _cache[0] || (_cache[0] = ($event) => selectedFilterOption.value = ""),
                color: "" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["color"]),
              createVNode(QChip, {
                clickable: "",
                label: `Vendidos ${soldCount.value}`,
                onClick: _cache[1] || (_cache[1] = ($event) => selectedFilterOption.value = "sold"),
                color: "sold" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"]),
              wonCount.value > 0 ? (openBlock(), createBlock(QChip, {
                key: 0,
                clickable: "",
                label: `Ganador ${wonCount.value}`,
                onClick: _cache[2] || (_cache[2] = ($event) => selectedFilterOption.value = "won"),
                color: "won" == selectedFilterOption.value ? "amber-3" : "grey-2"
              }, null, 8, ["label", "color"])) : createCommentVNode("", true),
              discardedCount.value > 0 ? (openBlock(), createBlock(QChip, {
                key: 1,
                clickable: "",
                label: `Descartados ${discardedCount.value}`,
                onClick: _cache[3] || (_cache[3] = ($event) => selectedFilterOption.value = "discarded"),
                color: "discarded" == selectedFilterOption.value ? "grey-4" : "grey-2"
              }, null, 8, ["label", "color"])) : createCommentVNode("", true),
              createVNode(QChip, {
                clickable: "",
                label: `Pago parcial ${partialCount.value}`,
                onClick: _cache[4] || (_cache[4] = ($event) => selectedFilterOption.value = "partial"),
                color: "partial" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"]),
              createVNode(QChip, {
                clickable: "",
                label: `Pago total ${totalCount.value}`,
                onClick: _cache[5] || (_cache[5] = ($event) => selectedFilterOption.value = "total"),
                color: "total" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(QInput, {
                  modelValue: buyerFilter.value,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => buyerFilter.value = $event),
                  outlined: "",
                  dense: "",
                  clearable: "",
                  placeholder: "Buscar por comprador..."
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createVNode(QInput, {
                  modelValue: sellerFilter.value,
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => sellerFilter.value = $event),
                  outlined: "",
                  dense: "",
                  clearable: "",
                  placeholder: "Buscar por vendedor..."
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "search" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("div", _hoisted_12, "Mostrando: " + toDisplayString(results.value.length) + " boletos", 1)
          ]),
          createBaseVNode("div", _hoisted_13, [
            createVNode(QBtn, {
              flat: "",
              rounded: "",
              icon: "folder_shared",
              label: "Armar Carpetas",
              onClick: _cache[8] || (_cache[8] = ($event) => sellerDialog.value = true)
            }),
            createVNode(QBtn, {
              flat: "",
              rounded: "",
              icon: "link",
              label: "Link",
              onClick: openLink
            }),
            createVNode(QBtn, {
              flat: "",
              rounded: "",
              icon: "live_tv",
              label: "Capturar Resultados",
              onClick: openStreamWindow
            }),
            createVNode(QBtn, {
              flat: "",
              rounded: "",
              icon: "file_download",
              label: "Exportar",
              onClick: exportData
            })
          ])
        ]),
        createVNode(QTable, {
          columns: columns.value,
          rows: results.value,
          pagination: pagination.value,
          "onUpdate:pagination": _cache[9] || (_cache[9] = ($event) => pagination.value = $event),
          "row-key": "id",
          "rows-per-page-label": "Registros por página:"
        }, {
          "body-cell-status": withCtx((props2) => [
            createVNode(QTd, {
              class: normalizeClass([`bg-${ticketStatuses[props2.row.status]?.color || "white"}`, "cursor-pointer"]),
              onClick: ($event) => selectTicket(props2.row)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(ticketStatuses[props2.row.status]?.label || props2.row.status), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"])
          ]),
          "body-cell-detail": withCtx((props2) => [
            createVNode(QTd, { class: "text-center" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  color: "info",
                  icon: "visibility",
                  disable: !props2.row.donations_sum_amount || Number(props2.row.donations_sum_amount) === 0,
                  onClick: ($event) => openPaymentHistory(props2.row)
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => _cache[26] || (_cache[26] = [
                        createTextVNode("Ver historial de pagos")
                      ])),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1032, ["disable", "onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, { class: "text-right" }, {
              default: withCtx(() => [
                createVNode(QBtn, {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "attach_money",
                  disable: !props2.row.donor_id,
                  onClick: ($event) => payTicket(props2.row)
                }, null, 8, ["disable", "onClick"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["columns", "rows", "pagination"]),
        createVNode(QDialog, {
          modelValue: showDetailModal.value,
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => showDetailModal.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "min-width": "550px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_14, "Historial de Pagos - Boleto #" + toDisplayString(selectedTicket.value?.number), 1),
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
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("span", null, [
                        _cache[27] || (_cache[27] = createBaseVNode("b", null, "Comprador:", -1)),
                        createTextVNode(" " + toDisplayString(selectedTicket.value?.buyer?.first_name || "Sin registrar") + " | ", 1)
                      ]),
                      createBaseVNode("span", null, [
                        _cache[28] || (_cache[28] = createBaseVNode("b", null, "Precio Boleto:", -1)),
                        createTextVNode(" " + toDisplayString(formatCurrency(raffle.value?.ticket_price || 0)) + " | ", 1)
                      ]),
                      _cache[29] || (_cache[29] = createBaseVNode("b", null, "Total Pagado:", -1)),
                      createTextVNode(" " + toDisplayString(formatCurrency(selectedTicket.value?.donations_sum_amount || 0)), 1)
                    ]),
                    createVNode(QTable, {
                      flat: "",
                      bordered: "",
                      dense: "",
                      rows: ticketDonations.value,
                      columns: detailColumns,
                      loading: loadingDetail.value,
                      "row-key": "id",
                      "no-data-label": "No hay registros de pagos disponibles"
                    }, null, 8, ["rows", "loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: sellerDialog.value,
          "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => sellerDialog.value = $event),
          position: "right",
          "full-height": ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, null, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(QIcon, {
                        name: "folder_shared",
                        color: "primary",
                        size: "28px"
                      }),
                      _cache[30] || (_cache[30] = createBaseVNode("span", null, "Armar Carpetas", -1))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$2, {
                  raffleId: raffle.value.id,
                  onSaved: onSellerSaved
                }, null, 8, ["raffleId"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: ticketDialog.value,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => ticketDialog.value = $event),
          position: "bottom"
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "620px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[31] || (_cache[31] = [
                    createBaseVNode("div", { class: "page-title" }, "Venta de Boleto", -1)
                  ])),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  ticket: ticket.value,
                  onSaved: _cache[12] || (_cache[12] = () => {
                    fetchRaffle();
                    ticketDialog.value = false;
                  })
                }, null, 8, ["ticket"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: donationDialog.value,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => donationDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              "raffle-ticket-id": ticket.value.id,
              onSaved: _cache[14] || (_cache[14] = () => {
                fetchRaffle();
                donationDialog.value = false;
              })
            }, null, 8, ["raffle-ticket-id"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: resultsDialog.value,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => resultsDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "550px", "max-width": "90vw" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_17, [
                      createVNode(QIcon, {
                        name: "emoji_events",
                        color: "amber-8",
                        size: "28px"
                      }),
                      _cache[32] || (_cache[32] = createBaseVNode("span", null, "Capturar Resultado de Rifa", -1))
                    ]),
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
                createVNode(QCardSection, { class: "q-pt-md" }, {
                  default: withCtx(() => [
                    raffle.value.winning_ticket ? (openBlock(), createBlock(QBanner, {
                      key: 0,
                      class: "bg-amber-2 text-amber-10 q-mb-md rounded-borders"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Esta rifa ya cuenta con un boleto ganador registrado (#" + toDisplayString(raffle.value.winning_ticket) + " - " + toDisplayString(raffle.value.winner_name) + "). ", 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _cache[37] || (_cache[37] = createBaseVNode("label", { class: "text-subtitle2 text-weight-bold" }, "Seleccionar Boleto Ganador:", -1)),
                    createVNode(QSelect, {
                      modelValue: selectedTicketId.value,
                      "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => selectedTicketId.value = $event),
                      options: soldTicketsOptions.value,
                      "option-value": "value",
                      "option-label": "label",
                      "emit-value": "",
                      "map-options": "",
                      outlined: "",
                      dense: "",
                      placeholder: "Buscar o seleccionar boleto vendido...",
                      class: "q-mt-xs q-mb-md"
                    }, null, 8, ["modelValue", "options"]),
                    selectedTicketData.value ? (openBlock(), createBlock(QCard, {
                      key: 1,
                      flat: "",
                      bordered: "",
                      class: "bg-grey-1 q-pa-sm q-mb-md"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", _hoisted_18, " Detalles del Boleto #" + toDisplayString(selectedTicketData.value.number), 1),
                        createBaseVNode("div", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            _cache[33] || (_cache[33] = createBaseVNode("strong", null, "Comprador:", -1)),
                            createTextVNode(" " + toDisplayString(selectedTicketData.value.buyer?.first_name || "N/A"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_21, [
                            _cache[34] || (_cache[34] = createBaseVNode("strong", null, "Teléfono:", -1)),
                            createTextVNode(" " + toDisplayString(selectedTicketData.value.buyer?.cellphone || "N/A"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_22, [
                            _cache[35] || (_cache[35] = createBaseVNode("strong", null, "Vendedor:", -1)),
                            createTextVNode(" " + toDisplayString(selectedTicketData.value.seller?.first_name || "N/A"), 1)
                          ]),
                          createBaseVNode("div", _hoisted_23, [
                            _cache[36] || (_cache[36] = createBaseVNode("strong", null, "Estatus Actual:", -1)),
                            createVNode(QBadge, {
                              color: ticketStatuses[selectedTicketData.value.status]?.color || "negative",
                              class: "q-ml-xs"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(ticketStatuses[selectedTicketData.value.status]?.label || selectedTicketData.value.status), 1)
                              ]),
                              _: 1
                            }, 8, ["color"])
                          ])
                        ])
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_24, [
                      withDirectives(createVNode(QBtn, {
                        flat: "",
                        label: "Cancelar"
                      }, null, 512), [
                        [ClosePopup]
                      ]),
                      createVNode(QBtn, {
                        color: "amber-8",
                        "text-color": "dark",
                        icon: "emoji_events",
                        label: "Marcar como Ganador",
                        disable: !selectedTicketId.value,
                        onClick: _cache[17] || (_cache[17] = ($event) => confirmDialog.value = true)
                      }, null, 8, ["disable"])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: confirmDialog.value,
          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => confirmDialog.value = $event),
          persistent: ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "400px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center" }, {
                  default: withCtx(() => [
                    createVNode(QAvatar, {
                      icon: "warning",
                      color: "amber-8",
                      "text-color": "white",
                      class: "q-mr-sm"
                    }),
                    _cache[38] || (_cache[38] = createBaseVNode("span", { class: "text-subtitle1 text-weight-bold" }, "¿Confirmar Ganador?", -1))
                  ]),
                  _: 1
                }),
                createVNode(QCardSection, { class: "q-pt-none text-body2" }, {
                  default: withCtx(() => [
                    _cache[39] || (_cache[39] = createTextVNode(" Al confirmar, el ")),
                    createBaseVNode("strong", null, "Boleto #" + toDisplayString(selectedTicketData.value?.number), 1),
                    _cache[40] || (_cache[40] = createTextVNode(" será marcado como ")),
                    _cache[41] || (_cache[41] = createBaseVNode("strong", { class: "text-amber-9" }, "GANADOR", -1)),
                    _cache[42] || (_cache[42] = createTextVNode(" y todos los demás boletos de la rifa pasarán a estatus ")),
                    _cache[43] || (_cache[43] = createBaseVNode("strong", { class: "text-grey-7" }, "DESCARTADOS", -1)),
                    _cache[44] || (_cache[44] = createTextVNode(". Esta acción no se puede deshacer de forma masiva. "))
                  ]),
                  _: 1
                }),
                createVNode(QCardActions, { align: "right" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(QBtn, {
                      flat: "",
                      label: "Atrás",
                      disable: submittingWinner.value
                    }, null, 8, ["disable"]), [
                      [ClosePopup]
                    ]),
                    createVNode(QBtn, {
                      color: "negative",
                      label: "Sí, Finalizar Rifa",
                      loading: submittingWinner.value,
                      onClick: handleSetWinner
                    }, null, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: linkDialog.value,
          "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => linkDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "500px", "max-width": "90vw" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, { class: "row items-center q-pb-none" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(QIcon, {
                        name: "link",
                        color: "primary",
                        size: "24px"
                      }),
                      _cache[45] || (_cache[45] = createBaseVNode("span", null, "Enlace Público de Boletos", -1))
                    ]),
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
                createVNode(QCardSection, { class: "q-pt-md" }, {
                  default: withCtx(() => [
                    _cache[47] || (_cache[47] = createBaseVNode("p", { class: "text-caption text-grey-7" }, " Comparte este enlace para que los Vendedores puedan ver el estatus de los Boletos Disponibles. ", -1)),
                    createVNode(QInput, {
                      modelValue: publicUrl.value,
                      "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => publicUrl.value = $event),
                      readonly: "",
                      outlined: "",
                      dense: "",
                      class: "q-mb-md"
                    }, {
                      append: withCtx(() => [
                        createVNode(QBtn, {
                          flat: "",
                          round: "",
                          dense: "",
                          icon: "content_copy",
                          color: "primary",
                          onClick: copyLink
                        }, {
                          default: withCtx(() => [
                            createVNode(QTooltip, null, {
                              default: withCtx(() => _cache[46] || (_cache[46] = [
                                createTextVNode("Copiar Enlace")
                              ])),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(QBtn, {
                        outline: "",
                        color: "positive",
                        icon: "share",
                        label: "Enviar por WhatsApp",
                        onClick: shareWhatsapp
                      }),
                      createVNode(QBtn, {
                        unelevated: "",
                        color: "primary",
                        icon: "content_copy",
                        label: "Copiar Link",
                        onClick: copyLink
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
const RafflePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d703a245"]]);
export {
  RafflePage as default
};
