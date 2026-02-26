import { Q as QSelect } from "./QSelect-l1dRAC3Q.js";
import { r as ref, aF as useModel, o as onMounted, q as createBlock, a as openBlock, l as api } from "./index-Bj0d6EJy.js";
const _sfc_main = {
  __name: "BeneficiarySelect",
  props: {
    "modelValue": {},
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const loading = ref(false);
    const options = ref([]);
    const model = useModel(__props, "modelValue");
    const filterOptions = ref([]);
    async function fetchCandidates() {
      try {
        loading.value = true;
        options.value = (await api.get("beneficiaries/?type=search")).data.data;
        filterOptions.value = [...options.value, { value: null, label: "Seleccione una opcion" }];
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    function filterFn(val, update) {
      update(() => {
        if (val === "" || val === null) {
          filterOptions.value = [...options.value];
        } else {
          const needle = val.toLowerCase();
          filterOptions.value = options.value.filter((v) => v.label.toLowerCase().indexOf(needle) > -1);
        }
      });
    }
    onMounted(() => {
      fetchCandidates();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QSelect, {
        outlined: "",
        modelValue: model.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
        "use-input": "",
        "fill-input": "",
        "hide-selected": "",
        options: filterOptions.value,
        "input-debounce": "300",
        loading: loading.value,
        onFilter: filterFn,
        label: "Beneficiario",
        "emit-value": "",
        "map-options": "",
        clearable: ""
      }, null, 8, ["modelValue", "options", "loading"]);
    };
  }
};
export {
  _sfc_main as _
};
