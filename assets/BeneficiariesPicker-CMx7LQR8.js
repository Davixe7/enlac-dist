import { Q as QSelect } from "./QSelect-ChwyA_6G.js";
import { r as ref, o as onMounted, l as api, q as createBlock, a as openBlock } from "./index-CZCe8xRO.js";
const _sfc_main = {
  __name: "BeneficiariesPicker",
  props: {
    modelValue: {
      required: true
    },
    disable: {
      type: Boolean
    },
    fetchRoute: {
      type: String,
      default: "/beneficiaries"
    },
    params: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const selectedId = ref(null);
    const options = ref([]);
    const page = ref(1);
    const loading = ref(false);
    onMounted(async () => {
      if (!props.modelValue) {
        await fetchBeneficiaries();
        return;
      }
      options.value.push((await api.get(`/beneficiaries/${props.modelValue}`)).data.data);
      selectedId.value = Number(props.modelValue);
    });
    async function fetchBeneficiaries() {
      loading.value = true;
      options.value = (await api.get(props.fetchRoute, { params: props.params })).data.data;
      loading.value = false;
    }
    const buscarOpciones = async (val, update, abort) => {
      console.log("Buscando opciones");
      if (loading.value) return;
      try {
        let params = { ...props.params, name: val };
        loading.value = true;
        const data = (await api.get(`${props.fetchRoute}`, { params })).data.data;
        update(() => options.value = data);
      } catch (error) {
        console.error("Error al buscar:", error);
        abort();
      } finally {
        loading.value = false;
      }
    };
    const cargarMasOpciones = async (evt) => {
      if (loading.value) return;
      if (evt.target.scrollTop + evt.target.clientHeight >= evt.target.scrollHeight - 50) {
        loading.value = true;
        try {
          const { data } = (await api.get(`/beneficiaries/?page=${page.value}`)).data;
          options.value.push(...data);
          page.value++;
        } catch (error) {
          console.error("Error al cargar más opciones:", error);
        } finally {
          loading.value = false;
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        disable: props.disable,
        outlined: "",
        dense: "",
        "model-value": selectedId.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (val) => {
          emits("update:modelValue", val);
          selectedId.value = val;
        }),
        "use-input": "",
        key: selectedId.value,
        "input-debounce": "500",
        options: options.value,
        "option-value": "id",
        "option-label": "name",
        "emit-value": "",
        "map-options": "",
        onFilter: buscarOpciones,
        onScroll: cargarMasOpciones,
        "hide-bottom-space": ""
      }, null, 8, ["disable", "model-value", "options"]);
    };
  }
};
export {
  _sfc_main as _
};
