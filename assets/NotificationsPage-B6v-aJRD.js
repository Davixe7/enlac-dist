import { o as onMounted, P as createElementBlock, _ as createBaseVNode, K as createVNode, J as withCtx, R as Fragment, I as openBlock, S as renderList, O as unref, H as createBlock, $ as QAvatar, Q as QIcon, N as createTextVNode, T as toDisplayString, V as QBtn } from "./index-C_pgiTRk.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem-BDHnU4rl.js";
import { Q as QList } from "./QList-DlbgzUfO.js";
import { u as useNotificationStore } from "./notification-store-CLKuFISD.js";
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
