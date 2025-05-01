import { o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, d as createVNode, w as withCtx, W as Fragment, X as renderList, u as unref, R as createBlock, V as QAvatar, h as QIcon, g as createTextVNode, U as toDisplayString, Q as QBtn } from "./index-XVUxbwAj.js";
import { Q as QItem, b as QItemSection, a as QItemLabel } from "./QItemLabel-DpR4ih5u.js";
import { Q as QList } from "./QList-CKgMNYKZ.js";
import { u as useNotificationStore } from "./notification-store-CM8Nxwb8.js";
import "./use-dark-C0G2Ox9U.js";
import "./axios-BaazhBMR.js";
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
