import { q as computed } from "./index-CAST7tag.js";
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
export {
  useDark as a,
  useDarkProps as u
};
