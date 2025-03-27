import { u as useFileFormDomProps, Q as QInput, a as QCheckbox } from "./QCheckbox-BxmFaGde.js";
import { Q as QRadio } from "./QRadio-CpZLYscZ.js";
import { m as humanStorageSize, n as QChip, i as QSelect, l as QDialog } from "./QList-B3AEJr1g.js";
import { g as getCurrentInstance, r as ref, q as computed, ac as stop, s as stopAndPrevent, a1 as client, h, c as createComponent, ad as injectProp, ae as prevent, d as hSlot, z as watch, e as createElementBlock, i as openBlock, j as createBaseVNode, m as createTextVNode, U as createBlock, af as createCommentVNode, w as withCtx, k as createVNode, C as QIcon, A as withDirectives, B as vShow, Q as QBtn, Y as Fragment, _ as defineStore, b as onMounted, R as reactive, ag as useRouter, Z as renderList, a9 as toDisplayString, X as QAvatar, ab as Notify, n as nextTick } from "./index-CAST7tag.js";
import { D as DateTime, Q as QPopupProxy, a as QDate, b as QTime } from "./datetime-BAv-tvQe.js";
import { Q as QImg } from "./QImg-BJgnFL-C.js";
import { c as useFieldEmits, d as useFormProps, e as useNonInputFieldProps, f as useFieldState, g as useFormInputNameAttr, h as fieldValueIsFilled, i as useField } from "./use-key-composition-DRPemRqP.js";
import { Q as QPage } from "./QPage-DabTm_1Y.js";
import { C as ClosePopup } from "./ClosePopup-BbIWwuBh.js";
import { api } from "./axios-9xnSQELn.js";
import { a as QTd, Q as QTable } from "./QTable-CFr3qnZv.js";
import { Q as QCard, a as QCardSection } from "./QCard-DNcoOIvY.js";
import { u as useDarkProps, a as useDark } from "./use-dark-DrYRdNo-.js";
import { Q as QTr } from "./QTr-DkVXdHjs.js";
import { s as scrollToFirstError } from "./focusError-DHV7BPiX.js";
import "./selection-B2--Yy0-.js";
import "./use-render-cache-BA_W40LL.js";
import "./QSeparator-DdcrkME_.js";
function filterFiles(files, rejectedFiles, failedPropValidation, filterFn) {
  const acceptedFiles = [];
  files.forEach((file) => {
    if (filterFn(file) === true) {
      acceptedFiles.push(file);
    } else {
      rejectedFiles.push({ failedPropValidation, file });
    }
  });
  return acceptedFiles;
}
function stopAndPreventDrag(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy");
  stopAndPrevent(e);
}
const useFileProps = {
  multiple: Boolean,
  accept: String,
  capture: String,
  maxFileSize: [Number, String],
  maxTotalSize: [Number, String],
  maxFiles: [Number, String],
  filter: Function
};
const useFileEmits = ["rejected"];
function useFile({
  editable,
  dnd,
  getFileInput,
  addFilesToQueue
}) {
  const { props, emit, proxy } = getCurrentInstance();
  const dndRef = ref(null);
  const extensions = computed(() => props.accept !== void 0 ? props.accept.split(",").map((ext) => {
    ext = ext.trim();
    if (ext === "*") {
      return "*/";
    } else if (ext.endsWith("/*")) {
      ext = ext.slice(0, ext.length - 1);
    }
    return ext.toUpperCase();
  }) : null);
  const maxFilesNumber = computed(() => parseInt(props.maxFiles, 10));
  const maxTotalSizeNumber = computed(() => parseInt(props.maxTotalSize, 10));
  function pickFiles(e) {
    if (editable.value) {
      if (e !== Object(e)) {
        e = { target: null };
      }
      if (e.target !== null && e.target.matches('input[type="file"]') === true) {
        e.clientX === 0 && e.clientY === 0 && stop(e);
      } else {
        const input = getFileInput();
        input && input !== e.target && input.click(e);
      }
    }
  }
  function addFiles(files) {
    if (editable.value && files) {
      addFilesToQueue(null, files);
    }
  }
  function processFiles(e, filesToProcess, currentFileList, append) {
    let files = Array.from(filesToProcess || e.target.files);
    const rejectedFiles = [];
    const done = () => {
      if (rejectedFiles.length !== 0) {
        emit("rejected", rejectedFiles);
      }
    };
    if (props.accept !== void 0 && extensions.value.indexOf("*/") === -1) {
      files = filterFiles(files, rejectedFiles, "accept", (file) => {
        return extensions.value.some((ext) => file.type.toUpperCase().startsWith(ext) || file.name.toUpperCase().endsWith(ext));
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.maxFileSize !== void 0) {
      const maxFileSize = parseInt(props.maxFileSize, 10);
      files = filterFiles(files, rejectedFiles, "max-file-size", (file) => {
        return file.size <= maxFileSize;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (props.multiple !== true && files.length !== 0) {
      files = [files[0]];
    }
    files.forEach((file) => {
      file.__key = file.webkitRelativePath + file.lastModified + file.name + file.size;
    });
    if (append === true) {
      const filenameMap = currentFileList.map((entry) => entry.__key);
      files = filterFiles(files, rejectedFiles, "duplicate", (file) => {
        return filenameMap.includes(file.__key) === false;
      });
    }
    if (files.length === 0) {
      return done();
    }
    if (props.maxTotalSize !== void 0) {
      let size = append === true ? currentFileList.reduce((total, file) => total + file.size, 0) : 0;
      files = filterFiles(files, rejectedFiles, "max-total-size", (file) => {
        size += file.size;
        return size <= maxTotalSizeNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    if (typeof props.filter === "function") {
      const filteredFiles = props.filter(files);
      files = filterFiles(files, rejectedFiles, "filter", (file) => {
        return filteredFiles.includes(file);
      });
    }
    if (props.maxFiles !== void 0) {
      let filesNumber = append === true ? currentFileList.length : 0;
      files = filterFiles(files, rejectedFiles, "max-files", () => {
        filesNumber++;
        return filesNumber <= maxFilesNumber.value;
      });
      if (files.length === 0) {
        return done();
      }
    }
    done();
    if (files.length !== 0) {
      return files;
    }
  }
  function onDragover(e) {
    stopAndPreventDrag(e);
    dnd.value !== true && (dnd.value = true);
  }
  function onDragleave(e) {
    stopAndPrevent(e);
    const gone = e.relatedTarget !== null || client.is.safari !== true ? e.relatedTarget !== dndRef.value : document.elementsFromPoint(e.clientX, e.clientY).includes(dndRef.value) === false;
    gone === true && (dnd.value = false);
  }
  function onDrop(e) {
    stopAndPreventDrag(e);
    const files = e.dataTransfer.files;
    if (files.length !== 0) {
      addFilesToQueue(null, files);
    }
    dnd.value = false;
  }
  function getDndNode(type) {
    if (dnd.value === true) {
      return h("div", {
        ref: dndRef,
        class: `q-${type}__dnd absolute-full`,
        onDragenter: stopAndPreventDrag,
        onDragover: stopAndPreventDrag,
        onDragleave,
        onDrop
      });
    }
  }
  Object.assign(proxy, { pickFiles, addFiles });
  return {
    pickFiles,
    addFiles,
    onDragover,
    onDragleave,
    processFiles,
    getDndNode,
    maxFilesNumber,
    maxTotalSizeNumber
  };
}
const QFile = createComponent({
  name: "QFile",
  inheritAttrs: false,
  props: {
    ...useNonInputFieldProps,
    ...useFormProps,
    ...useFileProps,
    /* SSR does not know about File & FileList */
    modelValue: [File, FileList, Array],
    append: Boolean,
    useChips: Boolean,
    displayValue: [String, Number],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    counterLabel: Function,
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object]
  },
  emits: [
    ...useFieldEmits,
    ...useFileEmits
  ],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const state = useFieldState();
    const inputRef = ref(null);
    const dnd = ref(false);
    const nameProp = useFormInputNameAttr(props);
    const {
      pickFiles,
      onDragover,
      onDragleave,
      processFiles,
      getDndNode
    } = useFile({ editable: state.editable, dnd, getFileInput, addFilesToQueue });
    const formDomProps = useFileFormDomProps(props);
    const innerValue = computed(() => Object(props.modelValue) === props.modelValue ? "length" in props.modelValue ? Array.from(props.modelValue) : [props.modelValue] : []);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const selectedString = computed(
      () => innerValue.value.map((file) => file.name).join(", ")
    );
    const totalSize = computed(
      () => humanStorageSize(
        innerValue.value.reduce((acc, file) => acc + file.size, 0)
      )
    );
    const counterProps = computed(() => ({
      totalSize: totalSize.value,
      filesNumber: innerValue.value.length,
      maxFiles: props.maxFiles
    }));
    const inputAttrs = computed(() => ({
      tabindex: -1,
      type: "file",
      title: "",
      // try to remove default tooltip,
      accept: props.accept,
      capture: props.capture,
      name: nameProp.value,
      ...attrs,
      id: state.targetUid.value,
      disabled: state.editable.value !== true
    }));
    const fieldClass = computed(
      () => "q-file q-field--auto-height" + (dnd.value === true ? " q-file--dnd" : "")
    );
    const isAppending = computed(
      () => props.multiple === true && props.append === true
    );
    function removeAtIndex(index) {
      const files = innerValue.value.slice();
      files.splice(index, 1);
      emitValue(files);
    }
    function removeFile(file) {
      const index = innerValue.value.indexOf(file);
      if (index !== -1) {
        removeAtIndex(index);
      }
    }
    function emitValue(files) {
      emit("update:modelValue", props.multiple === true ? files : files[0]);
    }
    function onKeydown(e) {
      e.keyCode === 13 && prevent(e);
    }
    function onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        pickFiles(e);
      }
    }
    function getFileInput() {
      return inputRef.value;
    }
    function addFilesToQueue(e, fileList) {
      const files = processFiles(e, fileList, innerValue.value, isAppending.value);
      const fileInput = getFileInput();
      if (fileInput !== void 0 && fileInput !== null) {
        fileInput.value = "";
      }
      if (files === void 0) return;
      if (props.multiple === true ? props.modelValue && files.every((f) => innerValue.value.includes(f)) : props.modelValue === files[0]) return;
      emitValue(
        isAppending.value === true ? innerValue.value.concat(files) : files
      );
    }
    function getFiller() {
      return [
        h("input", {
          class: [props.inputClass, "q-file__filler"],
          style: props.inputStyle
        })
      ];
    }
    function getSelection() {
      if (slots.file !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map(
          (file, index) => slots.file({ index, file, ref: this })
        );
      }
      if (slots.selected !== void 0) {
        return innerValue.value.length === 0 ? getFiller() : slots.selected({ files: innerValue.value, ref: this });
      }
      if (props.useChips === true) {
        return innerValue.value.length === 0 ? getFiller() : innerValue.value.map((file, i) => h(QChip, {
          key: "file-" + i,
          removable: state.editable.value,
          dense: true,
          textColor: props.color,
          tabindex: props.tabindex,
          onRemove: () => {
            removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          textContent: file.name
        })));
      }
      const textContent = props.displayValue !== void 0 ? props.displayValue : selectedString.value;
      return textContent.length !== 0 ? [
        h("div", {
          class: props.inputClass,
          style: props.inputStyle,
          textContent
        })
      ] : getFiller();
    }
    function getInput() {
      const data = {
        ref: inputRef,
        ...inputAttrs.value,
        ...formDomProps.value,
        class: "q-field__input fit absolute-full cursor-pointer",
        onChange: addFilesToQueue
      };
      if (props.multiple === true) {
        data.multiple = true;
      }
      return h("input", data);
    }
    Object.assign(state, {
      fieldClass,
      emitValue,
      hasValue,
      inputRef,
      innerValue,
      floatingLabel: computed(
        () => hasValue.value === true || fieldValueIsFilled(props.displayValue)
      ),
      computedCounter: computed(() => {
        if (props.counterLabel !== void 0) {
          return props.counterLabel(counterProps.value);
        }
        const max = props.maxFiles;
        return `${innerValue.value.length}${max !== void 0 ? " / " + max : ""} (${totalSize.value})`;
      }),
      getControlChild: () => getDndNode("file"),
      getControl: () => {
        const data = {
          ref: state.targetRef,
          class: "q-field__native row items-center cursor-pointer",
          tabindex: props.tabindex
        };
        if (state.editable.value === true) {
          Object.assign(data, { onDragover, onDragleave, onKeydown, onKeyup });
        }
        return h("div", data, [getInput()].concat(getSelection()));
      }
    });
    Object.assign(proxy, {
      removeAtIndex,
      removeFile,
      getNativeElement: () => inputRef.value
      // deprecated
    });
    injectProp(proxy, "nativeEl", () => inputRef.value);
    return useField(state);
  }
});
const QBanner = createComponent({
  name: "QBanner",
  props: {
    ...useDarkProps,
    inlineActions: Boolean,
    dense: Boolean,
    rounded: Boolean
  },
  setup(props, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const classes = computed(
      () => "q-banner row items-center" + (props.dense === true ? " q-banner--dense" : "") + (isDark.value === true ? " q-banner--dark q-dark" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const actionClass = computed(
      () => `q-banner__actions row items-center justify-end col-${props.inlineActions === true ? "auto" : "all"}`
    );
    return () => {
      const child = [
        h("div", {
          class: "q-banner__avatar col-auto row items-center self-start"
        }, hSlot(slots.avatar)),
        h("div", {
          class: "q-banner__content col text-body2"
        }, hSlot(slots.default))
      ];
      const actions = hSlot(slots.action);
      actions !== void 0 && child.push(
        h("div", { class: actionClass.value }, actions)
      );
      return h("div", {
        class: classes.value + (props.inlineActions === false && actions !== void 0 ? " q-banner--top-padding" : ""),
        role: "alert"
      }, child);
    };
  }
});
const _hoisted_1$3 = { class: "col-12 q-pb-none page-title flex justify-between" };
const _hoisted_2$2 = { class: "row q-col-gutter-lg q-mb-xl" };
const _hoisted_3$1 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_4$1 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_5$1 = { class: "flex" };
const _hoisted_6$1 = { class: "row q-col-gutter-lg" };
const _hoisted_7$1 = { class: "col-12 col-md-6 q-gutter-y-md" };
const _hoisted_8$1 = { class: "col-12 col-md-6 q-gutter-y-md" };
const _hoisted_9$1 = { class: "col-12 flex justify-end" };
const _sfc_main$3 = {
  __name: "ContactForm",
  props: {
    candidateId: { default: null },
    hideBottomSpace: { type: Boolean, default: false },
    modelValue: { type: Object, required: true },
    errors: { type: Object, required: false, default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const relationships = [
      { label: "Abuelo(a)", value: "abuelo" },
      { label: "Hermano(a)", value: "hermano" },
      { label: "Hermanastro(a)", value: "hermanastro" },
      { label: "Madre/Padre", value: "madre_padre" },
      { label: "Padrastro/Madrastra", value: "padrastro_madrastra" },
      { label: "Primo(a)", value: "primo" },
      { label: "Tío(a)", value: "tio" }
    ];
    const contact = ref({ ...props.modelValue });
    const localErrors = ref({ ...props.errors });
    watch(() => props.errors, (newValue) => localErrors.value = { ...newValue });
    watch(() => props.modelValue, (newValue) => Object.assign(contact.value, newValue));
    watch(() => contact.value, () => {
      props.hideBottomSpace ? emits("update:modelValue", { ...contact.value }) : "";
    }, { deep: true });
    async function save() {
      try {
        await api.post("contacts/validate", { ...contact.value });
        emits("update:modelValue", { ...contact.value });
      } catch (error) {
        if (error.status == 422) {
          localErrors.value = error.response.data.errors;
        }
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$3, [
          _cache[17] || (_cache[17] = createTextVNode(" Datos del Contacto ")),
          localErrors.value["contacts"] ? (openBlock(), createBlock(QBanner, {
            key: 0,
            "inline-actions": "",
            class: "text-red bg-white q-field--error",
            style: { "border": "1px solid red" }
          }, {
            action: withCtx(() => [
              createVNode(QIcon, {
                flat: "",
                color: "red",
                name: "sym_o_info"
              })
            ]),
            default: withCtx(() => [
              _cache[16] || (_cache[16] = createTextVNode(" Debe incluir por lo menos un contacto "))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Nombre (s)",
              modelValue: contact.value.first_name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => contact.value.first_name = $event),
              class: "q-field--required",
              error: !!localErrors.value[`first_name`],
              "error-message": localErrors.value[`first_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Apellido Paterno",
              modelValue: contact.value.last_name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => contact.value.last_name = $event),
              error: !!localErrors.value[`last_name`],
              "error-message": localErrors.value[`last_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Apellido Materno",
              modelValue: contact.value.middle_name,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => contact.value.middle_name = $event),
              error: !!localErrors.value[`middle_name`],
              "error-message": localErrors.value[`middle_name`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QSelect, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Parentesco",
              modelValue: contact.value.relationship,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => contact.value.relationship = $event),
              class: "q-field--required",
              error: !!localErrors.value[`relationship`],
              "error-message": localErrors.value[`relationship`],
              options: relationships,
              "emit-value": "",
              "map-options": ""
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Correo",
              modelValue: contact.value.email,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => contact.value.email = $event),
              error: !!localErrors.value[`email`],
              "error-message": localErrors.value[`email`],
              type: "email"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "WhatsApp",
              modelValue: contact.value.whatsapp,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => contact.value.whatsapp = $event),
              error: !!localErrors.value[`whatsapp`],
              "error-message": localErrors.value[`whatsapp`],
              mask: "##########",
              type: "tel"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Teléfono casa",
              modelValue: contact.value.home_phone,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => contact.value.home_phone = $event),
              error: !!localErrors.value[`home_phone`],
              "error-message": localErrors.value[`home_phone`],
              mask: "##########",
              type: "tel"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createBaseVNode("div", _hoisted_5$1, [
              createVNode(QCheckbox, {
                label: "Tutor legal",
                modelValue: contact.value.legal_guardian,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => contact.value.legal_guardian = $event),
                "true-value": 1,
                "false-value": 0
              }, null, 8, ["modelValue"]),
              createVNode(QCheckbox, {
                label: "Responsable ENLAC",
                modelValue: contact.value.enlac_responsible,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => contact.value.enlac_responsible = $event),
                "true-value": 1,
                "false-value": 0
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        _cache[19] || (_cache[19] = createBaseVNode("div", { class: "page-title" }, " Domicilio ", -1)),
        createBaseVNode("div", _hoisted_6$1, [
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Calle",
              modelValue: contact.value.street,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => contact.value.street = $event),
              error: !!localErrors.value[`street`],
              "error-message": localErrors.value[`street`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Colonia",
              modelValue: contact.value.neighborhood,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => contact.value.neighborhood = $event),
              error: !!localErrors.value[`neighborhood`],
              "error-message": localErrors.value[`neighborhood`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Estado",
              modelValue: contact.value.state,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => contact.value.state = $event),
              error: !!localErrors.value[`state`],
              "error-message": localErrors.value[`state`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Codigo Postal",
              modelValue: contact.value.postal_code,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => contact.value.postal_code = $event),
              error: !!localErrors.value[`postal_code`],
              "error-message": localErrors.value[`postal_code`],
              type: "number"
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createBaseVNode("div", _hoisted_8$1, [
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Numero exterior",
              modelValue: contact.value.exterior_number,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => contact.value.exterior_number = $event),
              error: !!localErrors.value[`exterior_number`],
              "error-message": localErrors.value[`exterior_number`],
              type: "number"
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Ciudad",
              modelValue: contact.value.city,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => contact.value.city = $event),
              error: !!localErrors.value[`city`],
              "error-message": localErrors.value[`city`]
            }, null, 8, ["modelValue", "error", "error-message"]),
            createVNode(QInput, {
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Pais",
              modelValue: contact.value.country,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => contact.value.country = $event),
              error: !!localErrors.value[`country`],
              "error-message": localErrors.value[`country`]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          withDirectives(createBaseVNode("div", _hoisted_9$1, [
            createVNode(QBtn, {
              color: "primary",
              onClick: save
            }, {
              default: withCtx(() => _cache[18] || (_cache[18] = [
                createTextVNode("Guardar Informacion")
              ])),
              _: 1
            })
          ], 512), [
            [vShow, !__props.hideBottomSpace]
          ])
        ])
      ], 64);
    };
  }
};
const useContactStore = defineStore("contact", {
  state: () => ({
    loading: false,
    errors: {}
  }),
  actions: {
    async validate(data) {
      try {
        await api.post(`contacts/validate`, data);
        this.errors = {};
        return true;
      } catch (error) {
        if (error.status == 422) {
          this.errors = error.response.data.errors;
        }
        return false;
      }
    }
  }
});
const _hoisted_1$2 = { class: "flex justify-end q-mt-lg q-mb-xl" };
const _sfc_main$2 = {
  __name: "ContactsPage",
  props: {
    candidateId: {
      type: [Number, String, null],
      required: true,
      default: null,
      nullable: true
    },
    errors: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const contactStore = useContactStore();
    const firstContactErrors = ref({});
    const emits = __emit;
    const props = __props;
    onMounted(async () => {
      await fetchContacts();
      contact.value = contacts.value[0];
      emits("update:modelValue", [...contacts.value]);
    });
    watch(() => props.errors, (newValue) => {
      let errors = {};
      if (newValue.contacts) {
        errors.contacts = "Debe incluir al menos 1 contacto.";
      }
      Object.keys(props.errors).filter((errorKey) => errorKey.includes(`contacts.0.`)).map((errorKey) => ({ old: errorKey, new: errorKey.replace(`contacts.0.`, "") })).map((errorKey) => errors[errorKey.new] = props.errors[errorKey.old]);
      firstContactErrors.value = { ...errors };
    });
    async function fetchContacts() {
      loading.value = true;
      try {
        contacts.value = (await api.get(`/contacts?candidate_id=${props.candidateId}`)).data.data;
        if (contacts.value.length != 0) {
          return;
        }
        contacts.value.push({ ...defaultContact.value });
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    async function addContact() {
      if (contacts.value.length != 1) {
        contact.value = { ...defaultContact.value };
        dialog.value = true;
        return;
      }
      firstContactErrors.value = {};
      if (!await contactStore.validate(contacts.value[0])) {
        firstContactErrors.value = { ...contactStore.errors };
        contactStore.errors = {};
        return;
      }
      contact.value = { ...defaultContact.value };
      dialog.value = true;
    }
    async function setContact(target) {
      contact.value = target;
      dialog.value = true;
    }
    async function saveContact(newValue) {
      if (contacts.value.includes(contact.value)) {
        contacts.value.splice(contacts.value.indexOf(contact.value), 1, newValue);
      } else {
        contacts.value.push(newValue);
      }
      contact.value = newValue;
      emits("update:modelValue", [...contacts.value]);
      dialog.value = false;
    }
    async function removeContact(target) {
      if (!target.id) {
        contacts.value.splice(contacts.value.indexOf(target), 1);
        return;
      }
      try {
        await api.post(`contacts/${target.id}`, { _method: "DELETE" });
        contacts.value.splice(contacts.value.indexOf(target), 1);
      } catch (error) {
        console.log(error);
      }
    }
    const loading = ref(false);
    const dialog = ref(false);
    const contacts = ref([]);
    const contact = ref(null);
    const defaultContact = ref({
      "first_name": "",
      "middle_name": "",
      "last_name": "",
      "relationship": "",
      "legal_guardian": 0,
      "enlac_responsible": 0,
      "email": "",
      "whatsapp": "",
      "home_phone": "",
      "street": "5",
      "neighborhood": "",
      "state": "",
      "postal_code": "",
      "exterior_number": "0",
      "city": "",
      "country": ""
    });
    const columns = ref([
      {
        name: "full_name",
        required: true,
        label: "Nombre Completo",
        align: "left",
        field: (row) => `${row.first_name} ${row.middle_name} ${row.last_name}`,
        format: (val) => val,
        sortable: true
      },
      {
        name: "state",
        label: "Estado",
        align: "left",
        field: "state",
        format: (val) => val,
        sortable: true
      },
      {
        name: "city",
        label: "Ciudad",
        align: "left",
        field: "city",
        format: (val) => val,
        sortable: true
      },
      {
        name: "legal_guardian",
        label: "Tutor Legal",
        align: "left",
        field: "legal_guardian",
        format: (val) => val === 1 ? "Sí" : "No",
        sortable: true
      },
      {
        name: "enlac_responsible",
        label: "Responsable Enlac",
        align: "left",
        field: "enlac_responsible",
        format: (val) => val === 1 ? "Sí" : "No",
        sortable: true
      },
      {
        name: "actions",
        align: "right",
        sortable: false
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        contacts.value.length <= 1 && contact.value && !dialog.value ? (openBlock(), createBlock(_sfc_main$3, {
          key: 0,
          "candidate-id": props.candidateId,
          "model-value": contacts.value[0],
          errors: firstContactErrors.value,
          "onUpdate:modelValue": saveContact,
          "hide-bottom-space": ""
        }, null, 8, ["candidate-id", "model-value", "errors"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "page-title" }, "Datos del Contacto", -1)),
          createVNode(QTable, {
            bordered: "",
            flat: "",
            columns: columns.value,
            rows: contacts.value
          }, {
            "body-cell-actions": withCtx((props2) => [
              createVNode(QTd, { class: "text-right" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "edit",
                    onClick: ($event) => setContact(contacts.value[props2.rowIndex])
                  }, null, 8, ["onClick"]),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    icon: "delete",
                    onClick: ($event) => removeContact(contacts.value[props2.rowIndex])
                  }, null, 8, ["onClick"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows"])
        ], 64)),
        createVNode(QDialog, {
          modelValue: dialog.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialog.value = $event)
        }, {
          default: withCtx(() => [
            createVNode(QCard, null, {
              default: withCtx(() => [
                createVNode(QCardSection, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      "candidate-id": props.candidateId,
                      "model-value": contact.value,
                      "onUpdate:modelValue": saveContact
                    }, null, 8, ["candidate-id", "model-value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createBaseVNode("div", _hoisted_1$2, [
          createVNode(QBtn, {
            color: "primary",
            icon: "add",
            onClick: _cache[1] || (_cache[1] = ($event) => addContact())
          }, {
            default: withCtx(() => _cache[3] || (_cache[3] = [
              createTextVNode("Agregar nuevo contacto")
            ])),
            _: 1
          })
        ])
      ], 64);
    };
  }
};
const _hoisted_1$1 = { class: "form-section" };
const _hoisted_2$1 = { class: "flex justify-end" };
const _sfc_main$1 = {
  __name: "MedicationsPage",
  props: {
    errors: { type: Object, required: false, default: () => ({}) },
    candidateId: { type: Number, required: false, default: null },
    modelValue: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const loading = ref(false);
    const localMedications = ref([...props.modelValue]);
    watch(() => props.modelValue, (newValue) => {
      localMedications.value = newValue;
    }, { deep: true });
    watch(() => localMedications.value, (newValue) => {
      emits("update:modelValue", newValue);
    }, { deep: true });
    const medication = reactive({
      name: "",
      dose: "",
      frequency: "",
      duration: ""
    });
    function addMedication() {
      medication.name = "";
      medication.dose = "";
      medication.frequency = "";
      medication.duration = "";
      medication.observations = "";
      localMedications.value.push({ ...medication });
    }
    async function saveMedication(med) {
      try {
        loading.value = true;
        let route = med.id ? `/medications/${med.id}` : "medications";
        let data = { ...med, _method: med.id ? "PUT" : "POST", candidate_id: props.candidateId };
        let response = (await api.post(route, data)).data.data;
        localMedications.value.splice(localMedications.value.indexOf(med), 1, response);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    async function deleteMedication(med) {
      if (!med.id) {
        localMedications.value.splice(localMedications.value.indexOf(med, 1), 1);
        return;
      }
      try {
        loading.value = true;
        await api.post(`medications/${med.id}`, { "_method": "DELETE" });
        localMedications.value.splice(localMedications.value.indexOf(med), 1);
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    }
    const columns = ref([
      {
        name: "name",
        field: "name",
        label: "Nombre del medication",
        align: "left"
      },
      { name: "dosis", field: "dose", label: "Dosis", align: "left" },
      {
        name: "frecuencia",
        field: "frequency",
        label: "Frecuencia",
        align: "left"
      },
      {
        name: "tiempo",
        field: "duration",
        label: "Tiempo de tomarlo",
        align: "left"
      },
      {
        name: "observaciones",
        field: () => "Lörem ipsum orade kövis då antivaxxare. Sanys infrafede de stenosamma plagen. ",
        label: "Observaciones",
        align: "left"
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right"
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "page-title" }, "Tabla de Medicamentos", -1)),
        createVNode(QTable, {
          class: "q-mb-lg",
          "hide-bottom": "",
          "wrap-cells": "",
          flat: "",
          bordered: "",
          columns: columns.value,
          rows: localMedications.value,
          pagination: { rowsPerPage: 0 }
        }, {
          body: withCtx((props2) => [
            createVNode(QTr, { props: props2 }, {
              default: withCtx(() => [
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: Paracetamol",
                      modelValue: props2.row.name,
                      "onUpdate:modelValue": ($event) => props2.row.name = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.name`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.name`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 500 mg",
                      modelValue: props2.row.dose,
                      "onUpdate:modelValue": ($event) => props2.row.dose = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.dose`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.dose`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 2 Veces al dia",
                      modelValue: props2.row.frequency,
                      "onUpdate:modelValue": ($event) => props2.row.frequency = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.frequency`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.frequency`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      outlined: "",
                      placeholder: "Ej: 1 Semana",
                      modelValue: props2.row.duration,
                      "onUpdate:modelValue": ($event) => props2.row.duration = $event,
                      error: !!__props.errors[`medications.${props2.rowIndex}.duration`],
                      "error-message": __props.errors[`medications.${props2.rowIndex}.duration`]
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "error-message"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QInput, {
                      type: "textarea",
                      outlined: "",
                      modelValue: props2.row.observations,
                      "onUpdate:modelValue": ($event) => props2.row.observations = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1024),
                createVNode(QTd, null, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      icon: "delete",
                      onClick: ($event) => deleteMedication(props2.row)
                    }, null, 8, ["onClick"]),
                    __props.candidateId ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      flat: "",
                      round: "",
                      icon: "save",
                      onClick: ($event) => saveMedication(props2.row)
                    }, null, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["props"])
          ]),
          _: 1
        }, 8, ["columns", "rows"]),
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(QBtn, {
            color: "primary",
            icon: "add",
            onClick: addMedication
          }, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode(" Agregar Medicamento ")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "form-section" };
const _hoisted_2 = { class: "row q-col-gutter-lg" };
const _hoisted_3 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_4 = { class: "col-12 col-md-6 q-gutter-y-lg" };
const _hoisted_5 = { class: "form-section" };
const _hoisted_6 = { class: "row" };
const _hoisted_7 = { class: "col-12 col-md-7" };
const _hoisted_8 = { class: "flex" };
const _hoisted_9 = { class: "form-section" };
const _hoisted_10 = { class: "form-section" };
const _hoisted_11 = { class: "row q-col-gutter-lg q-mb-md" };
const _hoisted_12 = { class: "col-12 col-md-4" };
const _hoisted_13 = { class: "col-12 col-md-2" };
const _hoisted_14 = { class: "row items-center justify-end" };
const _hoisted_15 = { class: "col-12 col-md-2" };
const _hoisted_16 = { class: "row items-center justify-end" };
const _hoisted_17 = { class: "q-pl-md q-mt-none" };
const _hoisted_18 = { style: { "font-family": "monospace", "margin-right": "1rem" } };
const _hoisted_19 = { style: { "font-family": "monospace" } };
const _hoisted_20 = { class: "form-section" };
const _hoisted_21 = { class: "flex q-gutter-x-md q-mb-lg" };
const _hoisted_22 = { class: "flex q-gutter-x-md" };
const _hoisted_23 = { class: "form-section" };
const _hoisted_24 = { class: "row" };
const _hoisted_25 = { class: "col-12 col-md-4" };
const _hoisted_26 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "CandidateForm",
  props: ["candidateId"],
  setup(__props) {
    const router = useRouter();
    const props = __props;
    onMounted(async () => {
      evaluators.value = (await api.get("evaluators")).data.data;
      if (props.candidateId) {
        candidate.value = (await api.get(`candidates/${props.candidateId}`)).data.data;
        medications.value = candidate.value.medications;
        evaluation_schedule.value = candidate.value.evaluation_schedule ? candidate.value.evaluation_schedule : evaluation_schedule.value;
        evaluation_schedules.value = candidate.value.evaluation_schedules ? candidate.value.evaluation_schedules : [];
      }
      let datetime = DateTime.fromFormat(evaluation_schedule.value.date, "yyyy-MM-dd HH:mm:ss");
      evaluationDate.value = datetime.toFormat("dd/MM/yyyy");
      evaluationTime.value = datetime.toFormat("HH:mm");
    });
    function loadData() {
      let foreignColumns = ["first_name", "middle_name", "last_name", "birth_date", "info_channel", "diagnosis", "sheet"];
      let formdata = new FormData();
      if (candidate.value.id) {
        formdata.append("_method", "PUT");
      }
      Object.keys(candidate.value).forEach((attr) => {
        if (foreignColumns.includes(attr)) {
          formdata.append(`candidate[${attr}]`, candidate.value[attr]);
        }
      });
      evaluation_schedule.value.date = fulldatetime.value;
      Object.keys(evaluation_schedule.value).forEach((attr) => {
        let value = evaluation_schedule.value[attr] === null ? "" : evaluation_schedule.value[attr];
        formdata.append(`evaluation_schedule[${attr}]`, value);
      });
      contacts.value.forEach((contact, i) => {
        Object.keys(contact).forEach((contactAttr) => {
          formdata.append(`contacts[${i}][${contactAttr}]`, contacts.value[i][contactAttr] ? contacts.value[i][contactAttr] : "");
        });
      });
      medications.value.forEach((med, i) => {
        Object.keys(med).forEach((medKey) => {
          formdata.append(`medications[${i}][${medKey}]`, medications.value[i][medKey]);
        });
      });
      formdata.append("picture", picture.value);
      return formdata;
    }
    async function storeCandidate() {
      loading.value = true;
      errors.value = {};
      try {
        let endpoint = candidate.value.id ? `candidates/${candidate.value.id}` : "candidates";
        await api.post(endpoint, loadData());
        Notify.create({ caption: "Guardado con exito", icon: "sym_o_check_circle", iconColor: "positive", timeout: 3e3, progress: true });
        setTimeout(() => router.push("/candidatos"), 3e3);
      } catch (error) {
        errors.value = error.status == 422 ? error.formatted : {};
        Notify.create({ caption: "Por favor, valide la informacion", icon: "sym_o_info", iconColor: "negative" });
        nextTick(() => scrollToFirstError());
      }
      loading.value = false;
    }
    const loading = ref(false);
    const errors = ref({});
    const evaluationDate = ref(null);
    const evaluationTime = ref(null);
    const fulldatetime = computed(() => {
      let newDate = DateTime.fromFormat(evaluationDate.value + " " + evaluationTime.value, "dd/MM/yyyy HH:mm");
      return newDate.toFormat("yyyy-MM-dd HH:mm:ss");
    });
    const infoChannels = ref(["Publicidad impresa", "Publicidad en radio", "Recomendacion de escuela", "Recomendacion de personal medico", "Recomendacion de otra persona", "Otro"]);
    const evaluation_schedules = ref([]);
    const candidate = ref({ id: null, first_name: "", middle_name: "", last_name: "", birth_date: null, age: null, chronological_age: null, diagnosis: "", info_channel: infoChannels.value[infoChannels.value.length - 1], sheet: 1 });
    const contacts = ref([]);
    const medications = ref([]);
    const evaluators = ref([]);
    const evaluation_schedule = ref({ evaluator_id: null, date: DateTime.now().toFormat("yyyy-MM-dd HH:mm:ss") });
    const picture = ref(null);
    const recepient = ref({ name: "", phone: "" });
    const age = computed(() => {
      if (!candidate.value.birth_date) {
        return null;
      }
      let birth_date = DateTime.fromISO(candidate.value.birth_date);
      let now = DateTime.now();
      let diff = now.diff(birth_date, ["years", "months", "days"]);
      let dateString = diff.years ? `${diff.years} años` : "";
      dateString += diff.months ? ` ${Math.floor(diff.months)} meses` : "";
      dateString += diff.days ? ` ${Math.floor(diff.days)} días` : "";
      return dateString;
    });
    const chronological_age = computed(() => {
      if (!candidate.value.birth_date) {
        return null;
      }
      let birth_date = DateTime.fromISO(candidate.value.birth_date);
      let now = DateTime.now();
      let diff = now.diff(birth_date, "months");
      return `${Math.floor(diff.months)} meses`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _cache[20] || (_cache[20] = createBaseVNode("div", { class: "page-title" }, "Datos del Candidato", -1)),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Nombre (s)",
                  modelValue: candidate.value.first_name,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => candidate.value.first_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.first_name"],
                  "error-message": errors.value["candidate.first_name"]
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Apellido Paterno",
                  modelValue: candidate.value.last_name,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => candidate.value.last_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.last_name"],
                  "error-message": errors.value["candidate.last_name"]
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Apellido Materno",
                  modelValue: candidate.value.middle_name,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => candidate.value.middle_name = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.middle_name"],
                  "error-message": errors.value["candidate.middle_name"]
                }, null, 8, ["modelValue", "error", "error-message"])
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Fecha de Nacimiento",
                  modelValue: candidate.value.birth_date,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => candidate.value.birth_date = $event),
                  class: "q-field--required",
                  error: !!errors.value["candidate.birth_date"],
                  "error-message": errors.value["candidate.birth_date"],
                  type: "date"
                }, null, 8, ["modelValue", "error", "error-message"]),
                createVNode(QInput, {
                  readonly: "",
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Edad",
                  modelValue: age.value,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => age.value = $event),
                  modelModifiers: { number: true }
                }, null, 8, ["modelValue"]),
                createVNode(QInput, {
                  readonly: "",
                  outlined: "",
                  "stack-label": "",
                  "hide-bottom-space": "",
                  label: "Edad Cronológica*",
                  modelValue: chronological_age.value,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => chronological_age.value = $event)
                }, null, 8, ["modelValue"])
              ])
            ])
          ]),
          createVNode(_sfc_main$2, {
            candidateId: __props.candidateId,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = (newContacts) => contacts.value = [...newContacts]),
            errors: errors.value
          }, null, 8, ["candidateId", "errors"]),
          createBaseVNode("div", _hoisted_5, [
            _cache[21] || (_cache[21] = createBaseVNode("div", { class: "page-title" }, "¿Dónde obtuvo la información del Instituto?", -1)),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(infoChannels.value, (channel) => {
                    return openBlock(), createBlock(QRadio, {
                      key: channel,
                      label: channel,
                      val: channel,
                      modelValue: candidate.value.info_channel,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => candidate.value.info_channel = $event)
                    }, null, 8, ["label", "val", "modelValue"]);
                  }), 128))
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            _cache[22] || (_cache[22] = createBaseVNode("div", { class: "page-title" }, "Información Médica del Candidato", -1)),
            createVNode(QInput, {
              type: "textarea",
              outlined: "",
              "stack-label": "",
              "hide-bottom-space": "",
              label: "Diagnostico Médico / Síntomas *",
              modelValue: candidate.value.diagnosis,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => candidate.value.diagnosis = $event),
              error: !!errors.value["candidate.diagnosis"],
              "error-message": errors.value["candidate.diagnosis"]
            }, null, 8, ["modelValue", "error", "error-message"])
          ]),
          createVNode(_sfc_main$1, {
            modelValue: medications.value,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => medications.value = $event),
            candidateId: candidate.value.id,
            errors: errors.value
          }, null, 8, ["modelValue", "candidateId", "errors"]),
          createBaseVNode("div", _hoisted_10, [
            _cache[23] || (_cache[23] = createBaseVNode("div", { class: "page-title" }, "Programar Evaluación", -1)),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(QSelect, {
                  outlined: "",
                  "stack-label": "",
                  label: "Seleccione Evaluador",
                  options: evaluators.value,
                  modelValue: evaluation_schedule.value.evaluator_id,
                  "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => evaluation_schedule.value.evaluator_id = $event),
                  "emit-value": "",
                  "option-label": "name",
                  "option-value": "id",
                  "map-options": "",
                  error: !!errors.value["evaluation_schedule.evaluator_id"],
                  "error-message": errors.value["evaluation_schedule.evaluator_id"]
                }, null, 8, ["options", "modelValue", "error", "error-message"])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  modelValue: evaluationDate.value,
                  "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => evaluationDate.value = $event),
                  class: "q-field--required",
                  label: "Seleccione fecha"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "event",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(QPopupProxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(QDate, {
                              modelValue: evaluationDate.value,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => evaluationDate.value = $event),
                              mask: "DD/MM/YYYY"
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_14, [
                                  withDirectives(createVNode(QBtn, {
                                    label: "Cerrar",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createVNode(QInput, {
                  outlined: "",
                  "stack-label": "",
                  modelValue: evaluationTime.value,
                  "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => evaluationTime.value = $event),
                  class: "q-field--required",
                  label: "Horario"
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, {
                      name: "access_time",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx(() => [
                        createVNode(QPopupProxy, {
                          cover: "",
                          "transition-show": "scale",
                          "transition-hide": "scale"
                        }, {
                          default: withCtx(() => [
                            createVNode(QTime, {
                              modelValue: evaluationTime.value,
                              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => evaluationTime.value = $event)
                            }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_16, [
                                  withDirectives(createVNode(QBtn, {
                                    label: "Cerrar",
                                    color: "primary",
                                    flat: ""
                                  }, null, 512), [
                                    [ClosePopup]
                                  ])
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ]),
            _cache[24] || (_cache[24] = createBaseVNode("div", { class: "subtitle" }, "Historial de Evaluaciones Re-programadas", -1)),
            createBaseVNode("ul", _hoisted_17, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(evaluation_schedules.value, (schedule) => {
                return openBlock(), createElementBlock("li", {
                  class: "q-py-md",
                  key: schedule.id
                }, [
                  createBaseVNode("span", _hoisted_18, toDisplayString(schedule.date), 1),
                  createBaseVNode("span", _hoisted_19, toDisplayString(schedule.evaluator.name), 1)
                ]);
              }), 128))
            ])
          ]),
          createBaseVNode("div", _hoisted_20, [
            _cache[27] || (_cache[27] = createBaseVNode("div", { class: "page-title" }, "Herramientas Adicionales", -1)),
            _cache[28] || (_cache[28] = createBaseVNode("div", { class: "subtitle q-my-md" }, "Envio de Formato Inicial por WhatsApp", -1)),
            createBaseVNode("div", _hoisted_21, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre de la persona",
                type: "text",
                modelValue: recepient.value.name,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => recepient.value.name = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Celular",
                type: "tel",
                mask: "##########",
                modelValue: recepient.value.phone,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => recepient.value.phone = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                style: { "width": "100px", "height": "48px", "align-self": "flex-end" },
                color: "primary"
              }, {
                default: withCtx(() => _cache[25] || (_cache[25] = [
                  createTextVNode("Enviar")
                ])),
                _: 1
              })
            ]),
            _cache[29] || (_cache[29] = createBaseVNode("div", { class: "subtitle q-my-md" }, "Envio de Encuesta de Satisfaccion", -1)),
            createBaseVNode("div", _hoisted_22, [
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Nombre de la persona",
                type: "text",
                modelValue: recepient.value.name,
                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => recepient.value.name = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Celular",
                type: "tel",
                mask: "##########",
                modelValue: recepient.value.phone,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => recepient.value.phone = $event)
              }, null, 8, ["modelValue"]),
              createVNode(QBtn, {
                style: { "width": "100px", "height": "48px", "align-self": "flex-end" },
                color: "primary"
              }, {
                default: withCtx(() => _cache[26] || (_cache[26] = [
                  createTextVNode("Enviar")
                ])),
                _: 1
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_23, [
            _cache[30] || (_cache[30] = createBaseVNode("div", { class: "subtitle q-mb-md" }, "Foto del candidato", -1)),
            createBaseVNode("div", _hoisted_24, [
              candidate.value.picture ? (openBlock(), createBlock(QAvatar, {
                key: 0,
                size: "64px",
                rounded: "",
                class: "q-mr-sm"
              }, {
                default: withCtx(() => [
                  createVNode(QImg, {
                    src: candidate.value.picture
                  }, null, 8, ["src"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_25, [
                createVNode(QFile, {
                  outlined: "",
                  "stack-label": "",
                  label: "Adjuntar archivo",
                  icon: "attach",
                  modelValue: picture.value,
                  "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => picture.value = $event)
                }, {
                  append: withCtx(() => [
                    createVNode(QIcon, { name: "attachment" })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_26, [
            createVNode(QBtn, {
              loading: loading.value,
              color: "primary",
              onClick: storeCandidate
            }, {
              default: withCtx(() => _cache[31] || (_cache[31] = [
                createTextVNode(" Guardar ")
              ])),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
