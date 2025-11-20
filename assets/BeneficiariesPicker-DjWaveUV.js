import { Q as QSelect } from "./QSelect-BW1ZBX55.js";
import { p as useRoute, A as computed, r as ref, o as onMounted, k as api, q as createBlock, a as openBlock } from "./index-Dk-vfK7v.js";
const _sfc_main = {
  __name: "BeneficiariesPicker",
  props: ["modelValue", "disable"],
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const props = __props;
    const emits = __emit;
    const fetchRoute = computed(() => {
      return route.path == "/horarios-equinoterapia" ? `/beneficiaries/equinetherapy` : "/beneficiaries";
    });
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
      options.value = (await api.get(fetchRoute.value)).data.data;
      loading.value = false;
    }
    const buscarOpciones = async (val, update, abort) => {
      console.log("Buscando opciones");
      if (loading.value) return;
      try {
        loading.value = true;
        const data = (await api.get(`${fetchRoute.value}/?name=${val}`)).data.data;
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
