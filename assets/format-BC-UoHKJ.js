const units = ["B", "KB", "MB", "GB", "TB", "PB"];
function humanStorageSize(bytes, decimals = 1) {
  let u = 0;
  while (parseInt(bytes, 10) >= 1024 && u < units.length - 1) {
    bytes /= 1024;
    ++u;
  }
  return `${bytes.toFixed(decimals)}${units[u]}`;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }
  const size = max - min + 1;
  let index = min + (v - min) % size;
  if (index < min) {
    index = size + index;
  }
  return index === 0 ? 0 : index;
}
function pad(v, length = 2, char = "0") {
  if (v === void 0 || v === null) {
    return v;
  }
  const val = "" + v;
  return val.length >= length ? val : new Array(length - val.length + 1).join(char) + val;
}
export {
  capitalize as c,
  humanStorageSize as h,
  normalizeToInterval as n,
  pad as p
};
