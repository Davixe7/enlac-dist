import { j as onMounted, W as createElementBlock, J as openBlock, N as createBaseVNode, M as createVNode, K as withCtx, X as Fragment, Y as renderList, S as unref, I as createBlock, V as QAvatar, Q as QIcon, O as createTextVNode, U as toDisplayString, P as QBtn } from "./index-cCQoerBE.js";
import { Q as QItem, b as QItemSection, a as QItemLabel } from "./QItemLabel-BM-XPiQp.js";
import { Q as QList } from "./QList-Bqgej6v_.js";
import { u as useNotificationStore } from "./notification-store-CEtfr02x.js";
import "./use-dark-C8v3QwmZ.js";
import "./axios-ByMy53kN.js";
const _sfc_main = {
  __name: "NotificationsPage",
  setup(__props) {
    const store = useNotificationStore();
    onMounted(() => setTimeout(() => store.markAllAsRead(), 5e3));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[0] || (_cache[0] = createBaseVNode("h1", { class: "page-title" }, "Notificaciones", -1)),
        createVNode(QList, {
          bordered: "",
          separator: ""
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).notifications, (notification) => {
              return openBlock(), createBlock(QItem, {
                key: notification.id
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QAvatar, {
                        size: "42px",
                        color: "green-1",
                        class: "q-mr-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode(QIcon, {
                            name: "sym_o_calendar_add_on",
                            size: "28px"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(notification.data.title) + " - " + toDisplayString(notification.data.created_at), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(QItemLabel, { caption: "" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(notification.data.description), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        round: "",
                        flat: "",
                        icon: "sym_o_delete"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
