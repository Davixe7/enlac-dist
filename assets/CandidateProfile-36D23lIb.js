import { Q as QImg } from "./QImg-u9OOrRwI.js";
import { u as useCandidateStore } from "./candidate-store-BF7llngL.js";
import { x as onMounted, O as createElementBlock, H as openBlock, J as createVNode, Z as createBaseVNode, aF as renderSlot, N as unref, M as createTextVNode, S as toDisplayString } from "./index-CZ0dY6Fq.js";
const _hoisted_1 = {
  class: "flex",
  style: { "margin-bottom": "65px" }
};
const _hoisted_2 = { class: "flex column justify-between q-px-md" };
const _sfc_main = {
  __name: "CandidateProfile",
  props: {
    candidateId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "interview"
    },
    errors: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const store = useCandidateStore();
    onMounted(async () => {
      if (!props.candidateId) {
        return;
      }
      if (!store.full_name) {
        store.id = props.candidateId;
        store.fetchCandidate();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(QImg, {
          width: "174px",
          height: "169px",
          color: "grey",
          class: "bg-grey-4",
          style: { "margin-right": "20px", "object-fit": "cover" },
          src: unref(store).picture
        }, null, 8, ["src"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", null, [
            _cache[0] || (_cache[0] = createBaseVNode("label", { class: "text-weight-bold" }, "Nombre:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).full_name), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[1] || (_cache[1] = createBaseVNode("label", { class: "text-weight-bold" }, "Fecha:", -1)),
            createTextVNode(" " + toDisplayString(unref(store).birth_date), 1)
          ]),
          createBaseVNode("div", null, [
            _cache[2] || (_cache[2] = createBaseVNode("label", { class: "text-weight-bold" }, "Edad cronológica", -1)),
            createTextVNode(" " + toDisplayString(unref(store).chronological_age) + " meses ", 1)
          ]),
          createBaseVNode("div", null, [
            _cache[3] || (_cache[3] = createBaseVNode("label", { class: "text-weight-bold" }, "Edad cronológica ", -1)),
            createTextVNode(" " + toDisplayString(unref(store).chronological_age2) + " años ", 1)
          ])
        ]),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
};
export {
  _sfc_main as _
};
