import { Q as QChip } from "./QSelect-A9ZZmmDT.js";
import { r as ref, x as onMounted, G as createBlock, H as openBlock, I as withCtx, Z as createBaseVNode, J as createVNode, a7 as QInput, Q as QIcon, a8 as QSpinner, U as QBtn, a4 as api, O as createElementBlock, a9 as QCheckbox, P as Fragment, a as computed, S as toDisplayString, aa as QDialog, X as useRoute, ab as normalizeClass, M as createTextVNode, a5 as QCard, a6 as QCardSection } from "./index-Lpbv6tCz.js";
import { Q as QTd } from "./QTd-BAwC8nlh.js";
import { Q as QTable } from "./QTable-CtmmXpKr.js";
import { n as notify } from "./notify-DG_2rm3w.js";
import { Q as QMarkupTable } from "./QMarkupTable-CAF8YLQ6.js";
import { _ as _sfc_main$3 } from "./ApplyDonationDialog-JHOWyqGT.js";
import "./QItem-hGGqEP0j.js";
import "./QMenu-D3LWUHDp.js";
import "./selection-DAp7_Zui.js";
import "./format-BC-UoHKJ.js";
import "./QVirtualScroll-Bl8DQEh1.js";
import "./QList-VjDLrJpF.js";
import "./use-fullscreen-BZnGS6Ms.js";
import "./QSpace-DDJHlChA.js";
import "./QBadge-BF2oxqEK.js";
import "./QForm-_kiBS9mb.js";
import "./ClosePopup-FQHseU-J.js";
import "./date-s2hr6oY7.js";
const _hoisted_1$2 = {
  colspan: "2",
  style: { "height": "100px" }
};
const _sfc_main$2 = {
  __name: "SellerForm",
  props: ["raffleId"],
  setup(__props) {
    const props = __props;
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
        console.log(response);
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar el punto de partida");
      } finally {
        loading.value = false;
      }
    }
    async function fetchSeller() {
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
    }
    async function assignTickets() {
      try {
        loading.value = true;
        let route = `raffles/${props.raffleId}/assignTickets`;
        let response = (await api.post(route, { ...form.value })).data.data;
        console.log(response);
        notify.positive("Tickets asignados exitosamente");
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar los datos del vendedor");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => {
      fetchStart();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QMarkupTable, { flat: "" }, {
        default: withCtx(() => [
          createBaseVNode("tr", null, [
            _cache[4] || (_cache[4] = createBaseVNode("td", null, "Teléfono del vendedor", -1)),
            createBaseVNode("td", null, [
              createVNode(QInput, {
                outlined: "",
                type: "tel",
                modelValue: form.value.seller.phone,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => form.value.seller.phone = $event),
                  fetchSeller
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
            _cache[5] || (_cache[5] = createBaseVNode("td", null, "Nombre del vendedor", -1)),
            createBaseVNode("td", null, [
              createVNode(QInput, {
                outlined: "",
                type: "text",
                modelValue: form.value.seller.first_name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => form.value.seller.first_name = $event),
                "hide-bottom-space": "",
                disable: !!form.value.seller.id
              }, null, 8, ["modelValue", "disable"])
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[6] || (_cache[6] = createBaseVNode("td", null, "Boleto inicio", -1)),
            createBaseVNode("td", null, [
              createVNode(QInput, {
                outlined: "",
                type: "number",
                modelValue: form.value.starts_at,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.value.starts_at = $event),
                "hide-bottom-space": "",
                disable: true
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("tr", null, [
            _cache[7] || (_cache[7] = createBaseVNode("td", null, "Boleto fin", -1)),
            createBaseVNode("td", null, [
              createVNode(QInput, {
                outlined: "",
                type: "number",
                modelValue: form.value.ends_at,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.value.ends_at = $event),
                "hide-bottom-space": ""
              }, null, 8, ["modelValue"])
            ])
          ]),
          createBaseVNode("tr", null, [
            createBaseVNode("td", _hoisted_1$2, [
              createVNode(QBtn, {
                color: "primary",
                loading: loading.value,
                onClick: assignTickets,
                class: "full-width",
                label: "Asignar Tickets"
              }, null, 8, ["loading"])
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
              _cache[16] || (_cache[16] = createBaseVNode("td", null, "Vendido por:", -1)),
              createBaseVNode("td", null, [
                createVNode(QInput, {
                  modelValue: localTicket.value.seller.first_name,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => localTicket.value.seller.first_name = $event),
                  outlined: "",
                  "hide-bottom-space": ""
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
const _hoisted_1 = { class: "flex items-center" };
const _hoisted_2 = { class: "filter" };
const _hoisted_3 = { class: "flex q-gutter-x-sm q-py-xs" };
const _hoisted_4 = {
  class: "q-mb-md",
  style: { "font-size": "0.9rem", "color": "#404040" }
};
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
        field: (row) => row.donations_sum_amount ? `$ ${row.donations_sum_amount}` : "$ 0"
      },
      {
        align: "left",
        name: "receipt_number",
        label: "Nro recibo",
        field: (row) => row.payment ? row.payment.id : ""
      },
      {
        align: "right",
        name: "actions",
        label: ""
      }
    ]);
    const selectedFilterOption = ref("available");
    const ticketStatuses = {
      "": { value: "", label: "Todos", color: "white" },
      "available": { value: "available", label: "Disponible", color: "positive" },
      "sold": { value: "sold", label: "Vendido", color: "negative" }
    };
    const results = computed(() => {
      if (selectedFilterOption.value == "") return [...rows.value];
      if (selectedFilterOption.value == "available" || selectedFilterOption.value == "sold") {
        return rows.value.filter((row) => row.status == selectedFilterOption.value);
      }
      if (selectedFilterOption.value == "partial") {
        return rows.value.filter(
          (t) => t.donations_sum_amount > 0 && t.donations_sum_amount < raffle.value.ticket_price
        );
      }
      if (selectedFilterOption.value == "total") {
        return rows.value.filter((t) => t.donations_sum_amount >= raffle.value.ticket_price);
      }
      return [...rows.value];
    });
    const soldCount = computed(() => {
      return rows.value.filter((t) => t.status == "sold").length;
    });
    const partialCount = computed(() => {
      return rows.value.filter(
        (t) => t.donations_sum_amount > 0 && t.donations_sum_amount < raffle.value.ticket_price
      ).length;
    });
    const totalCount = computed(() => {
      return rows.value.filter((t) => t.donations_sum_amount >= raffle.value.ticket_price).length;
    });
    function payTicket(row) {
      ticket.value = row;
      donationDialog.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            _cache[10] || (_cache[10] = createBaseVNode("label", { for: "" }, "Filtrar por:", -1)),
            createBaseVNode("div", _hoisted_3, [
              createVNode(QChip, {
                clickable: "",
                label: `Todos`,
                onClick: _cache[0] || (_cache[0] = ($event) => selectedFilterOption.value = ""),
                color: "" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["color"]),
              createVNode(QChip, {
                clickable: "",
                label: `Vendidos ${soldCount.value}`,
                onClick: _cache[1] || (_cache[1] = ($event) => selectedFilterOption.value = "sold"),
                color: "sold" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"]),
              createVNode(QChip, {
                clickable: "",
                label: `Pago parcial ${partialCount.value}`,
                onClick: _cache[2] || (_cache[2] = ($event) => selectedFilterOption.value = "partial"),
                color: "partial" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"]),
              createVNode(QChip, {
                clickable: "",
                label: `Pago total ${totalCount.value}`,
                onClick: _cache[3] || (_cache[3] = ($event) => selectedFilterOption.value = "total"),
                color: "total" == selectedFilterOption.value ? "blue-2" : "grey-2"
              }, null, 8, ["label", "color"])
            ]),
            createBaseVNode("div", _hoisted_4, " Mostrando: " + toDisplayString(results.value.length) + " boletos ", 1)
          ]),
          createVNode(QBtn, {
            flat: "",
            rounded: "",
            label: "Asignar boletos",
            onClick: _cache[4] || (_cache[4] = ($event) => sellerDialog.value = true),
            class: "q-ml-auto"
          })
        ]),
        createVNode(QTable, {
          columns: columns.value,
          rows: results.value,
          pagination: { rowsPerPage: 0 }
        }, {
          "body-cell-status": withCtx((props2) => [
            createVNode(QTd, {
              class: normalizeClass(`bg-${ticketStatuses[props2.row.status].color}`),
              onClick: ($event) => selectTicket(props2.row)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(ticketStatuses[props2.row.status].label), 1)
              ]),
              _: 2
            }, 1032, ["class", "onClick"])
          ]),
          "body-cell-actions": withCtx((props2) => [
            createVNode(QTd, null, {
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
        }, 8, ["columns", "rows"]),
        createVNode(QDialog, {
          modelValue: sellerDialog.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => sellerDialog.value = $event),
          position: "right",
          "full-height": ""
        }, {
          default: withCtx(() => [
            createVNode(QCard, null, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[11] || (_cache[11] = [
                    createBaseVNode("div", { class: "page-title" }, "Asignar Boletos", -1)
                  ])),
                  _: 1
                }),
                createVNode(_sfc_main$2, {
                  raffleId: raffle.value.id
                }, null, 8, ["raffleId"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(QDialog, {
          modelValue: ticketDialog.value,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ticketDialog.value = $event),
          position: "bottom"
        }, {
          default: withCtx(() => [
            createVNode(QCard, { style: { "width": "620px" } }, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => _cache[12] || (_cache[12] = [
                    createBaseVNode("div", { class: "page-title" }, "Captura de Boleto", -1)
                  ])),
                  _: 1
                }),
                createVNode(_sfc_main$1, {
                  ticket: ticket.value,
                  onSaved: _cache[6] || (_cache[6] = () => {
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
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => donationDialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              "raffle-ticket-id": ticket.value.id,
              onSaved: _cache[8] || (_cache[8] = () => {
                fetchRaffle();
                donationDialog.value = false;
              })
            }, null, 8, ["raffle-ticket-id"])
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
