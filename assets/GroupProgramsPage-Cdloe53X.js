import { r as ref, o as onMounted, c as createElementBlock, a as openBlock, b as createBaseVNode, E as createCommentVNode, d as createVNode, t as toDisplayString, h as QBtn, H as Fragment, k as api } from "./index-Dk-vfK7v.js";
import { n as notify } from "./notify-qwVxQIpJ.js";
import { _ as _sfc_main$1 } from "./ProgramsTable-CFsx5QGa.js";
import "./QTd-DKOvs576.js";
import "./QTable-DokQwqb9.js";
import "./QVirtualScroll-CejCbXay.js";
import "./QList-BNUCwZx5.js";
import "./QMarkupTable-z16xpCIW.js";
import "./QSelect-BW1ZBX55.js";
import "./QItem-DE7d-lgy.js";
import "./selection-DEaGGDNT.js";
import "./use-fullscreen-r4BMIhU0.js";
const _hoisted_1 = {
  key: 0,
  style: { "border": "1px solid var(--primary)", "border-radius": "3px", "margin-bottom": "2rem" }
};
const _hoisted_2 = { class: "row bordered" };
const _hoisted_3 = { class: "col-12 col-md-3" };
const _hoisted_4 = { class: "col-12 col-md-3" };
const _hoisted_5 = { class: "col-12 col-md-2" };
const _hoisted_6 = { class: "col-12 col-md-2" };
const _hoisted_7 = { class: "col-12 col-md-2 flex justify-end table-btn-group" };
const _hoisted_8 = { class: "row items-center" };
const _sfc_main = {
  __name: "GroupProgramsPage",
  props: ["groupId"],
  setup(__props) {
    const props = __props;
    const group = ref({});
    const loading = ref(false);
    async function fetchGroup() {
      try {
        loading.value = true;
        group.value = (await api.get(`/groups/${props.groupId}`)).data.data;
      } catch (error) {
        console.log(error);
        notify.negative("Error al cargar el grupo");
      } finally {
        loading.value = false;
      }
    }
    onMounted(() => fetchGroup());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "page-title" }, "Detalles del grupo", -1)),
        group.value && group.value.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "text-weight-bold" }, "Nombre del grupo", -1)),
              createBaseVNode("div", null, toDisplayString(group.value.name), 1)
            ]),
            createBaseVNode("div", _hoisted_4, [
              _cache[1] || (_cache[1] = createBaseVNode("div", { class: "text-weight-bold" }, "Programa", -1)),
              createBaseVNode("div", null, toDisplayString(group.value.program.name), 1)
            ]),
            createBaseVNode("div", _hoisted_5, [
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "text-weight-bold" }, "Fecha de creacion", -1)),
              createBaseVNode("div", null, toDisplayString(new Date(group.value.created_at).toLocaleDateString()), 1)
            ]),
            createBaseVNode("div", _hoisted_6, [
              _cache[3] || (_cache[3] = createBaseVNode("div", { class: "text-weight-bold" }, "Miembros", -1)),
              createBaseVNode("div", null, toDisplayString(group.value.candidates.length), 1)
            ]),
            createBaseVNode("div", _hoisted_7, [
              createVNode(QBtn, {
                outline: "",
                color: "primary",
                icon: "sym_o_edit",
                class: "q-mr-sm",
                to: `/grupos/${props.groupId}/editar`
              }, null, 8, ["to"]),
              createVNode(QBtn, {
                outline: "",
                color: "negative",
                icon: "sym_o_delete",
                label: ""
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_8, [
          _cache[4] || (_cache[4] = createBaseVNode("h3", { class: "page-subtitle" }, "Planes", -1)),
          createVNode(QBtn, {
            color: "primary",
            label: "Agregar plan",
            icon: "add",
            class: "q-ml-auto",
            to: `/grupos/${group.value.id}/planes/crear`
          }, null, 8, ["to"])
        ]),
        createVNode(_sfc_main$1, { groupId: __props.groupId }, null, 8, ["groupId"])
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
