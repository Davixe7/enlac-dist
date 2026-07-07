import { aj as defineComponent, r as ref, D as reactive, w as watch, a as computed, g as getCurrentInstance, ak as onBeforeUpdate, x as onMounted, al as nextTick, o as onBeforeUnmount, K as withDirectives, h, am as Transition, O as createElementBlock, Z as createBaseVNode, J as createVNode, S as toDisplayString, I as withCtx, N as unref, P as Fragment, R as renderList, aa as QDialog, a4 as api, H as openBlock, U as QBtn, $ as normalizeStyle, M as createTextVNode, L as createCommentVNode, G as createBlock, a5 as QCard, a6 as QCardSection, Q as QIcon } from "./index-D8dGxR_o.js";
import { Q as QBadge } from "./QBadge-Bw-0E5yr.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
/*!
* @quasar/quasar-ui-qcalendar v5.0.0-rc.3
* (c) 2026 Jeff Galbraith <jeff@quasar.dev>
* Released under the MIT License.
*/
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
  let target = {};
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
  __defProp(target, Symbol.toStringTag, { value: "Module" });
  return target;
};
const PARSE_DATETIME = /^(\d{4})-(\d{1,2})(?:-(\d{1,2}))?(?:[Tt\s]+(\d{1,2})(?::(\d{1,2}))?(?::(\d{1,2})(?:\.(\d{1,3}))?)?)?(?:\s*(Z|[+-]\d{2}:?\d{2}))?$/;
const PARSE_TIME = /^(\d\d?)(?::(\d\d?))?(?::(\d\d?))?(?:\.(\d{1,3}))?$/;
const DAYS_IN_MONTH = [
  0,
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
const DAYS_IN_MONTH_LEAP = [
  0,
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
const TIME_CONSTANTS = {
  MILLISECONDS_IN: {
    SECOND: 1e3
  },
  SECONDS_IN: {
    MINUTE: 60
  },
  MINUTES_IN: {
    HOUR: 60
  },
  DAYS_IN: { WEEK: 7 }
};
freezeTimestamp({
  date: "",
  hasDay: false,
  year: 0,
  month: 0,
  day: 0,
  hasTime: false,
  hour: 0,
  minute: 0,
  weekday: 0,
  doy: 0,
  workweek: 0,
  past: false,
  current: false,
  future: false,
  disabled: false
});
function freezeTimestamp(timestamp) {
  return Object.freeze({ ...timestamp });
}
function cloneTimestamp(timestamp) {
  return { ...timestamp };
}
function parseMillisecond(value) {
  return value === void 0 ? void 0 : parseInt(value.padEnd(3, "0"), 10);
}
function validateTimestamp(input) {
  if (typeof input !== "string") return false;
  return PARSE_DATETIME.test(input);
}
function parsed(input) {
  if (typeof input !== "string") return null;
  const parts = PARSE_DATETIME.exec(input);
  if (!parts || !parts[1] || !parts[2]) return null;
  const year = parseInt(parts[1], 10);
  const month = parseInt(parts[2], 10);
  const day = parseInt(parts[3] || "1", 10);
  const hour = parseInt(parts[4] || "0", 10);
  const minute = parseInt(parts[5] || "0", 10);
  const second = parts[6] === void 0 ? void 0 : parseInt(parts[6], 10);
  const millisecond = parseMillisecond(parts[7]);
  const timestamp = {
    date: input,
    year,
    month,
    day,
    hour,
    minute,
    hasDay: !!parts[3],
    hasTime: true,
    past: false,
    current: false,
    future: false,
    disabled: false,
    weekday: 0,
    doy: 0,
    workweek: 0
  };
  if (second !== void 0) timestamp.second = second;
  if (millisecond !== void 0) timestamp.millisecond = millisecond;
  if (parts[8] !== void 0) timestamp.timezone = parts[8];
  timestamp.time = getTime(timestamp);
  return freezeTimestamp(timestamp);
}
function parseDateByMode(date, utc) {
  if (!(date instanceof Date)) return null;
  if (Number.isNaN(date.getTime())) return null;
  const UTC = "";
  const second = date[`get${UTC}Seconds`]();
  const millisecond = date[`get${UTC}Milliseconds`]();
  const timestamp = {
    date: padNumber(date[`get${UTC}FullYear`](), 4) + "-" + padNumber(date[`get${UTC}Month`]() + 1, 2) + "-" + padNumber(date[`get${UTC}Date`](), 2),
    time: padNumber(date[`get${UTC}Hours`]() || 0, 2) + ":" + padNumber(date[`get${UTC}Minutes`]() || 0, 2),
    year: date[`get${UTC}FullYear`](),
    month: date[`get${UTC}Month`]() + 1,
    day: date[`get${UTC}Date`](),
    hour: date[`get${UTC}Hours`](),
    minute: date[`get${UTC}Minutes`](),
    weekday: 0,
    doy: 0,
    workweek: 0,
    hasDay: true,
    hasTime: true,
    past: false,
    current: false,
    future: false,
    disabled: false
  };
  if (second !== 0) timestamp.second = second;
  if (millisecond !== 0) timestamp.millisecond = millisecond;
  return updateFormatted(timestamp);
}
function parseDate(date) {
  return parseDateByMode(date);
}
function padNumber(x, length) {
  let padded = String(x);
  while (padded.length < length) padded = "0" + padded;
  return padded;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
  return isLeapYear(year) ? DAYS_IN_MONTH_LEAP[month] : DAYS_IN_MONTH[month];
}
function nextDay(timestamp) {
  const date = new Date(timestamp.year, timestamp.month - 1, timestamp.day + 1);
  return updateFormatted(normalizeTimestamp({
    ...timestamp,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }));
}
function prevDay(timestamp) {
  const date = new Date(timestamp.year, timestamp.month - 1, timestamp.day - 1);
  return updateFormatted(normalizeTimestamp({
    ...timestamp,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  }));
}
function today() {
  const d = /* @__PURE__ */ new Date(), month = d.getMonth() + 1, day = d.getDate();
  return [
    d.getFullYear(),
    padNumber(month, 2),
    padNumber(day, 2)
  ].join("-");
}
function getStartOfWeek(timestamp, weekdays, today2) {
  let start = cloneTimestamp(timestamp);
  if (!weekdays) return freezeTimestamp(start);
  if (start.day === 1 || start.weekday === 0) while (!weekdays.includes(Number(start.weekday))) start = nextDay(start);
  start = findWeekday(start, weekdays[0], prevDay);
  start = updateFormatted(start);
  if (today2) start = updateRelative(start, today2, start.hasTime);
  return start;
}
function getEndOfWeek(timestamp, weekdays, today2) {
  let end = cloneTimestamp(timestamp);
  if (!weekdays || !Array.isArray(weekdays)) return freezeTimestamp(end);
  if (daysInMonth(end.year, end.month) === end.day || end.weekday === weekdays[weekdays.length - 1]) while (!weekdays.includes(Number(end.weekday))) end = prevDay(end);
  end = findWeekday(end, weekdays[weekdays.length - 1], nextDay);
  end = updateFormatted(end);
  if (today2) end = updateRelative(end, today2, end.hasTime);
  return end;
}
function getStartOfMonth(timestamp) {
  let start = cloneTimestamp(timestamp);
  start.day = 1;
  start = updateFormatted(start);
  return start;
}
function getEndOfMonth(timestamp) {
  let end = cloneTimestamp(timestamp);
  end.day = daysInMonth(end.year, end.month);
  end = updateFormatted(end);
  return end;
}
function parseTime(input) {
  switch (Object.prototype.toString.call(input)) {
    case "[object Number]":
      return input;
    case "[object String]": {
      const parts = PARSE_TIME.exec(input);
      if (!parts) return false;
      return parseInt(parts[1], 10) * 60 + parseInt(parts[2] || "0", 10);
    }
    case "[object Object]":
      if (typeof input !== "object" || typeof input.hour !== "number" || typeof input.minute !== "number") return false;
      if (typeof input === "object" && "hour" in input && "minute" in input) return input.hour * 60 + input.minute;
      return false;
  }
  return false;
}
function parseTimestamp(input, now = null) {
  let timestamp = parsed(input);
  if (!timestamp) return null;
  timestamp = updateFormatted(timestamp);
  if (now) timestamp = updateRelative(timestamp, now, timestamp.hasTime);
  return timestamp;
}
function getDayIdentifier(timestamp) {
  return (timestamp.year ?? 0) * 1e8 + (timestamp.month ?? 0) * 1e6 + (timestamp.day ?? 0) * 1e4;
}
function getTimeIdentifier(timestamp) {
  return (timestamp.hour ?? 0) * 100 + (timestamp.minute ?? 0);
}
function getTimeComparisonValue(timestamp) {
  return (((timestamp.hour ?? 0) * TIME_CONSTANTS.MINUTES_IN.HOUR + (timestamp.minute ?? 0)) * TIME_CONSTANTS.SECONDS_IN.MINUTE + (timestamp.second ?? 0)) * TIME_CONSTANTS.MILLISECONDS_IN.SECOND + (timestamp.millisecond ?? 0);
}
function getDayTimeIdentifier(timestamp) {
  return getDayIdentifier(timestamp) + getTimeIdentifier(timestamp);
}
function updateRelative(timestamp, now, time = false) {
  const ts = cloneTimestamp(timestamp);
  let a = getDayIdentifier(now);
  let b = getDayIdentifier(ts);
  let current = a === b;
  if (ts.hasTime && time && current) {
    a = getTimeComparisonValue(now);
    b = getTimeComparisonValue(ts);
    current = a === b;
  }
  ts.past = b < a;
  ts.current = current;
  ts.future = b > a;
  ts.currentWeekday = ts.weekday === now.weekday;
  return freezeTimestamp(ts);
}
function updateMinutes(timestamp, minutes, now = null) {
  let ts = cloneTimestamp(timestamp);
  ts.hasTime = true;
  ts.hour = Math.floor(minutes / TIME_CONSTANTS.MINUTES_IN.HOUR);
  ts.minute = minutes % TIME_CONSTANTS.MINUTES_IN.HOUR;
  delete ts.second;
  delete ts.millisecond;
  ts.time = getTime(ts);
  if (now) return updateRelative(ts, now, true);
  return freezeTimestamp(ts);
}
function updateWeekday(timestamp) {
  const ts = cloneTimestamp(timestamp);
  ts.weekday = getWeekday(ts);
  return freezeTimestamp(ts);
}
function updateDayOfYear(timestamp) {
  const ts = cloneTimestamp(timestamp);
  ts.doy = getDayOfYear(ts) || 0;
  return freezeTimestamp(ts);
}
function isDisabledDayConfig(value) {
  return typeof value === "object" && value !== null && Array.isArray(value) === false;
}
function applyDisabledDayConfig(timestamp, config) {
  timestamp.disabled = true;
  if (config !== void 0) {
    timestamp.disabledColor = config.color;
    timestamp.disabledTextColor = config.textColor;
    timestamp.disabledClass = config.class;
    timestamp.disabledStyle = config.style;
    timestamp.disabledLabel = config.label;
  }
  return timestamp;
}
function isTimestampInDisabledDay(timestamp, day) {
  const target = getDayIdentifier(timestamp);
  if (Array.isArray(day) === true) {
    if (day.length === 2 && day[0] && day[1]) {
      const start = parsed(day[0]);
      const end = parsed(day[1]);
      return start !== null && end !== null && isBetweenDates(timestamp, start, end);
    }
    return day.some((date) => {
      const disabledDay2 = parseTimestamp(date);
      return disabledDay2 !== null && getDayIdentifier(disabledDay2) === target;
    });
  }
  if (isDisabledDayConfig(day) === true) {
    const date = day.date;
    const startDate = day.from ?? day.start;
    const endDate = day.to ?? day.end;
    if (date !== void 0) {
      const disabledDay2 = parseTimestamp(date);
      return disabledDay2 !== null && getDayIdentifier(disabledDay2) === target;
    }
    if (startDate !== void 0 && endDate !== void 0) {
      const start = parsed(startDate);
      const end = parsed(endDate);
      return start !== null && end !== null && isBetweenDates(timestamp, start, end);
    }
    return false;
  }
  const disabledDay = parseTimestamp(day);
  return disabledDay !== null && getDayIdentifier(disabledDay) === target;
}
function updateDisabled(timestamp, disabledBefore, disabledAfter, disabledWeekdays, disabledDays) {
  let ts = cloneTimestamp(timestamp);
  const t = getDayIdentifier(ts);
  if (disabledBefore !== void 0) {
    const disabledDay = parsed(disabledBefore);
    if (disabledDay) {
      if (t <= getDayIdentifier(disabledDay)) ts.disabled = true;
    }
  }
  if (ts.disabled !== true && disabledAfter !== void 0) {
    const disabledDay = parsed(disabledAfter);
    if (disabledDay) {
      if (t >= getDayIdentifier(disabledDay)) ts.disabled = true;
    }
  }
  if (ts.disabled !== true && Array.isArray(disabledWeekdays) && disabledWeekdays.length > 0) {
    for (const weekday in disabledWeekdays) if (disabledWeekdays[weekday] === ts.weekday) {
      ts.disabled = true;
      break;
    }
  }
  if (ts.disabled !== true && Array.isArray(disabledDays) && disabledDays.length > 0) {
    for (const day of disabledDays) if (isTimestampInDisabledDay(ts, day) === true) {
      ts = applyDisabledDayConfig(ts, isDisabledDayConfig(day) === true ? day : void 0);
      break;
    }
  }
  return freezeTimestamp(ts);
}
function updateFormatted(timestamp) {
  const ts = cloneTimestamp(timestamp);
  ts.hasTime = true;
  ts.time = getTime(ts);
  ts.date = getDate(ts);
  ts.weekday = getWeekday(ts);
  ts.doy = getDayOfYear(ts) || 0;
  ts.workweek = getWorkWeek(ts);
  return freezeTimestamp(ts);
}
function getDayOfYear(timestamp) {
  if (timestamp.year === 0) return;
  return (Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day) - Date.UTC(timestamp.year, 0, 0)) / 24 / 60 / 60 / 1e3;
}
function getWorkWeek(timestamp) {
  let ts = timestamp;
  if (ts.year === 0) {
    const parsedToday = parseTimestamp(today());
    if (parsedToday) ts = parsedToday;
  }
  const weekday = new Date(Date.UTC(ts.year, ts.month - 1, ts.day));
  const dayAdjustment = 4;
  weekday.setUTCDate(weekday.getUTCDate() - (weekday.getUTCDay() + 6) % 7 + dayAdjustment);
  weekday.setUTCDate(weekday.getUTCDate() + dayAdjustment - (weekday.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(weekday.getUTCFullYear(), 0, 1));
  return Math.ceil(((weekday.valueOf() - yearStart.valueOf()) / 864e5 + 1) / 7);
}
function getWeekday(timestamp) {
  let weekday = timestamp.weekday;
  if (timestamp.hasDay) {
    const floor = Math.floor;
    const day = timestamp.day;
    const month = (timestamp.month + 9) % 12 + 1;
    const century = floor(timestamp.year / 100);
    const year = timestamp.year % 100 - (timestamp.month <= 2 ? 1 : 0);
    weekday = ((day + floor(2.6 * month - 0.2) - 2 * century + year + floor(year / 4) + floor(century / 4)) % 7 + 7) % 7;
  }
  return weekday ?? 0;
}
function copyTimestamp(timestamp) {
  return freezeTimestamp(timestamp);
}
function getDate(timestamp) {
  let str = `${padNumber(timestamp.year, 4)}-${padNumber(timestamp.month, 2)}`;
  if (timestamp.hasDay) str += `-${padNumber(timestamp.day, 2)}`;
  return str;
}
function getTime(timestamp) {
  if (!timestamp.hasTime) return "";
  let time = `${padNumber(timestamp.hour, 2)}:${padNumber(timestamp.minute, 2)}`;
  if (timestamp.second !== void 0 || timestamp.millisecond !== void 0) time += `:${padNumber(timestamp.second ?? 0, 2)}`;
  if (timestamp.millisecond !== void 0) time += `.${padNumber(timestamp.millisecond, 3)}`;
  return time;
}
function getDateTime(timestamp) {
  return getDate(timestamp) + " " + (timestamp.hasTime ? getTime(timestamp) : "00:00");
}
function moveRelativeDays(timestamp, mover = nextDay, days = 1, allowedWeekdays = [
  0,
  1,
  2,
  3,
  4,
  5,
  6
]) {
  return relativeDays(timestamp, mover, days, allowedWeekdays);
}
function relativeDays(timestamp, mover = nextDay, days = 1, allowedWeekdays = [
  0,
  1,
  2,
  3,
  4,
  5,
  6
]) {
  let ts = copyTimestamp(timestamp);
  if (!allowedWeekdays.includes(Number(ts.weekday)) && ts.weekday === 0 && mover === nextDay) ++days;
  while (--days >= 0) {
    ts = mover(ts);
    if (allowedWeekdays.length < 7 && !allowedWeekdays.includes(Number(ts.weekday))) ++days;
  }
  return ts;
}
function findWeekday(timestamp, weekday, mover = nextDay, maxDays = 6) {
  let ts = copyTimestamp(timestamp);
  while (ts.weekday !== weekday && --maxDays >= 0) ts = mover(ts);
  return ts;
}
function createDayList(start, end, now, weekdays = [
  0,
  1,
  2,
  3,
  4,
  5,
  6
], disabledBefore = void 0, disabledAfter = void 0, disabledWeekdays = [], disabledDays = [], max = 42, min = 0) {
  const begin = getDayIdentifier(start);
  const stop = getDayIdentifier(end);
  const days = [];
  let current = copyTimestamp(start);
  let currentIdentifier = 0;
  let stopped = currentIdentifier === stop;
  if (stop < begin) return days;
  while ((!stopped || days.length < min) && days.length < max) {
    currentIdentifier = getDayIdentifier(current);
    stopped = stopped || currentIdentifier > stop && days.length >= min;
    if (stopped) break;
    if (!weekdays.includes(Number(current.weekday))) {
      current = relativeDays(current, nextDay);
      continue;
    }
    let day = copyTimestamp(current);
    day = updateFormatted(day);
    day = updateRelative(day, now);
    day = updateDisabled(day, disabledBefore, disabledAfter, disabledWeekdays, disabledDays);
    days.push(day);
    current = relativeDays(current, nextDay);
  }
  return days;
}
function createIntervalList(timestamp, first, minutes, count, now) {
  const intervals = [];
  for (let i = 0; i < count; ++i) {
    const mins = (first + i) * minutes;
    intervals.push(updateMinutes(timestamp, mins, now));
  }
  return intervals;
}
function createNativeLocaleFormatterByMode(locale, cb, toDate) {
  const emptyFormatter = () => "";
  if (typeof Intl === "undefined" || typeof Intl.DateTimeFormat === "undefined") return emptyFormatter;
  return (timestamp, short) => {
    try {
      return new Intl.DateTimeFormat(locale || void 0, cb(timestamp, short)).format(toDate(timestamp));
    } catch (e) {
      console.error(`Intl.DateTimeFormat: ${e.message} -> ${getDateTime(timestamp)}`);
      return "";
    }
  };
}
function createNativeLocaleFormatterUTC(locale, cb) {
  return createNativeLocaleFormatterByMode(locale, cb, makeDateTimeUTC);
}
function makeDateTimeUTC(timestamp) {
  return new Date(Date.UTC(timestamp.year, timestamp.month - 1, timestamp.day, timestamp.hour, timestamp.minute, timestamp.second ?? 0, timestamp.millisecond ?? 0));
}
function validateNumber(input) {
  return isFinite(Number(input));
}
function isBetweenDates(timestamp, startTimestamp, endTimestamp, useTime = false) {
  const cd = getDayIdentifier(timestamp) + (useTime === true ? getTimeIdentifier(timestamp) : 0);
  const sd = getDayIdentifier(startTimestamp) + (useTime === true ? getTimeIdentifier(startTimestamp) : 0);
  const ed = getDayIdentifier(endTimestamp) + (useTime === true ? getTimeIdentifier(endTimestamp) : 0);
  return cd >= sd && cd <= ed;
}
function addToDate(timestamp, options) {
  const ts = cloneTimestamp(timestamp);
  if (options.year) ts.year += options.year;
  if (options.month) ts.month += options.month;
  if (options.day) ts.day += options.day;
  if (options.hour) ts.hour += options.hour;
  if (options.minute) ts.minute += options.minute;
  if (options.second) ts.second = (ts.second ?? 0) + options.second;
  if (options.millisecond) ts.millisecond = (ts.millisecond ?? 0) + options.millisecond;
  return updateFormatted(normalizeTimestamp(ts));
}
function normalizeTimestamp(ts) {
  const date = new Date(ts.year, ts.month - 1, ts.day, ts.hour, ts.minute, ts.second ?? 0, ts.millisecond ?? 0);
  const timestamp = {
    ...ts,
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };
  if (ts.second !== void 0 || date.getSeconds() !== 0) timestamp.second = date.getSeconds();
  if (ts.millisecond !== void 0 || date.getMilliseconds() !== 0) timestamp.millisecond = date.getMilliseconds();
  return freezeTimestamp(timestamp);
}
var helpers_exports = /* @__PURE__ */ __exportAll({
  convertToUnit: () => convertToUnit,
  default: () => helpers_default,
  indexOf: () => indexOf,
  minCharWidth: () => minCharWidth
});
function convertToUnit(input, unit = "px") {
  if (!input) return;
  else if (isNaN(input)) return String(input);
  else if (input === "auto") return input;
  else return `${Number(input)}${unit}`;
}
function indexOf(array, cb) {
  for (let i = 0; i < array.length; i++) if (cb(array[i], i) === true) return i;
  return -1;
}
function minCharWidth(str, count) {
  if (count === 0) return str;
  return str.slice(0, count);
}
var helpers_default = {
  convertToUnit,
  indexOf,
  minCharWidth
};
const ResizeObserverDirective = {
  mounted(el, binding) {
    if (typeof binding.value !== "function") return;
    const data = {
      callback: binding.value,
      size: {
        width: 0,
        height: 0
      },
      observer: new ResizeObserver((entries) => {
        if (entries && Array.isArray(entries) && entries.length > 0) {
          const rect = entries[0].contentRect;
          if (rect.width !== data.size.width || rect.height !== data.size.height) {
            data.size.width = rect.width;
            data.size.height = rect.height;
            if (data.debounceTimeout) clearTimeout(data.debounceTimeout);
            data.debounceTimeout = setTimeout(() => {
              data.callback(data.size);
              clearTimeout(data.debounceTimeout);
            }, 100);
          }
        }
      })
    };
    data.observer.observe(el);
    el.__onResizeObserver = data;
  },
  beforeUnmount(el) {
    if (!el.__onResizeObserver) return;
    const { observer, debounceTimeout } = el.__onResizeObserver;
    if (debounceTimeout) clearTimeout(debounceTimeout);
    observer.unobserve(el);
    delete el.__onResizeObserver;
  }
};
function useCalendar(props, renderFunc, { scrollArea, pane, keyboardActive }) {
  if (!renderFunc) {
    const msg = "[error: renderCalendar] no renderFunc has been supplied to useCalendar";
    console.error(msg);
    throw new Error(msg);
  }
  const size = reactive({
    width: 0,
    height: 0
  }), rootRef = ref(null);
  function __onResize({ width, height }) {
    size.width = width;
    size.height = height;
  }
  const scrollWidth = computed(() => {
    return props.noScroll !== true ? scrollArea.value && pane.value && size.height ? scrollArea.value.offsetWidth - pane.value.offsetWidth : 0 : 0;
  });
  function __initCalendar() {
  }
  function __renderCalendar() {
    return withDirectives(h("div", {
      ref: rootRef,
      role: "complementary",
      lang: props.locale,
      class: {
        "q-calendar": true,
        "q-calendar--dark": props.dark === true,
        "q-calendar__bordered": props.bordered === true,
        "q-calendar--keyboard-active": keyboardActive?.value === true
      }
    }, [renderFunc()]), [[ResizeObserverDirective, __onResize]]);
  }
  return {
    rootRef,
    scrollWidth,
    __initCalendar,
    __renderCalendar
  };
}
const isValidFocusType = (v) => v.every((type) => [
  "day",
  "date",
  "weekday",
  "interval",
  "time",
  "resource",
  "task"
].includes(type));
const isValidWeekdays = (v) => Array.isArray(v) === true && v.length > 0 && new Set(v).size === v.length && v.every((weekday) => Number.isInteger(weekday) && weekday >= 0 && weekday <= 6);
const useCommonProps = {
  modelValue: {
    type: String,
    default: today(),
    validator: (v) => v === "" || validateTimestamp(v)
  },
  weekdays: {
    type: Array,
    default: () => [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    validator: isValidWeekdays
  },
  dateType: {
    type: String,
    default: "round",
    validator: (v) => [
      "round",
      "rounded",
      "square"
    ].includes(v)
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (v) => [
      "left",
      "center",
      "right"
    ].includes(v)
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (v) => [
      "left",
      "center",
      "right"
    ].includes(v)
  },
  bordered: Boolean,
  dark: Boolean,
  noAria: Boolean,
  noActiveDate: Boolean,
  noHeader: Boolean,
  noScroll: Boolean,
  shortWeekdayLabel: Boolean,
  noDefaultHeaderText: Boolean,
  noDefaultHeaderBtn: Boolean,
  minWeekdayLabel: {
    type: [Number, String],
    default: 1
  },
  weekdayBreakpoints: {
    type: Array,
    default: () => [75, 35],
    validator: (v) => v.length === 2
  },
  locale: {
    type: String,
    default: "en-US"
  },
  animated: Boolean,
  transitionPrev: {
    type: String,
    default: "slide-right"
  },
  transitionNext: {
    type: String,
    default: "slide-left"
  },
  disabledDays: Array,
  disabledBefore: String,
  disabledAfter: String,
  disabledWeekdays: {
    type: Array,
    default: () => []
  },
  dragEnterFunc: Function,
  dragOverFunc: Function,
  dragLeaveFunc: Function,
  dropFunc: Function,
  selectedDates: {
    type: [Array, Set],
    default: () => []
  },
  selectedStartEndDates: {
    type: Array,
    default: () => []
  },
  hoverable: Boolean,
  focusable: Boolean,
  focusType: {
    type: Array,
    default: () => ["date"],
    validator: isValidFocusType
  }
};
function useCommon(props, { startDate, endDate, times }) {
  const parsedStart = computed(() => parseTimestamp(startDate.value));
  const parsedEnd = computed(() => {
    if (endDate.value === "0000-00-00") return getEndOfWeek(parsedStart.value, props.weekdays, times.today);
    return parseTimestamp(endDate.value) || parsedStart.value;
  });
  const dayFormatter = computed(() => createNativeLocaleFormatterUTC(props.locale, () => ({
    timeZone: "UTC",
    day: "numeric"
  })));
  const weekdayFormatter = computed(() => createNativeLocaleFormatterUTC(props.locale, (_tms, short) => ({
    timeZone: "UTC",
    weekday: short ? "short" : "long"
  })));
  const ariaDateFormatter = computed(() => createNativeLocaleFormatterUTC(props.locale, () => ({
    timeZone: "UTC",
    dateStyle: "full"
  })));
  function arrayHasDate(arr, timestamp) {
    return arr && arr.length > 0 && arr.includes(timestamp.date);
  }
  function checkDays(arr, timestamp) {
    const days = {
      firstDay: false,
      betweenDays: false,
      lastDay: false
    };
    if (arr.length === 2) {
      const current = getDayIdentifier(timestamp);
      const first = getDayIdentifier(parsed(arr[0]));
      const last = getDayIdentifier(parsed(arr[1]));
      days.firstDay = first === current;
      days.lastDay = last === current;
      days.betweenDays = first < current && last > current;
    }
    return days;
  }
  function getRelativeClasses(timestamp, outside = false, selectedDays = [], startEndDays = [], hover = false) {
    const isSelected = arrayHasDate(selectedDays, timestamp);
    const { firstDay, lastDay, betweenDays } = checkDays(startEndDays, timestamp);
    return {
      "q-past-day": !firstDay && !betweenDays && !lastDay && !isSelected && !outside && !!timestamp.past,
      "q-future-day": !firstDay && !betweenDays && !lastDay && !isSelected && !outside && !!timestamp.future,
      "q-outside": outside,
      "q-current-day": !!timestamp.current,
      "q-selected": isSelected,
      "q-range-first": firstDay,
      "q-range": betweenDays,
      "q-range-last": lastDay,
      "q-range-hover": hover && (firstDay || lastDay || betweenDays),
      "q-disabled-day disabled": timestamp.disabled === true,
      ...normalizeClass(timestamp.disabledClass)
    };
  }
  function startOfWeek(timestamp) {
    return getStartOfWeek(timestamp, props.weekdays, times.today);
  }
  function endOfWeek(timestamp) {
    return getEndOfWeek(timestamp, props.weekdays, times.today);
  }
  function dayStyleDefault({ scope }) {
    return scope.timestamp !== void 0 ? getDisabledStyle(scope.timestamp) : {};
  }
  function normalizeClass(className) {
    if (typeof className === "string") return { [className]: true };
    if (Array.isArray(className) === true) return className.reduce((classes, name) => {
      classes[name] = true;
      return classes;
    }, {});
    return className ?? {};
  }
  function getDisabledStyle(timestamp) {
    const style = { ...timestamp.disabledStyle };
    if (timestamp.disabledColor !== void 0) {
      style["--calendar-disabled-date-background"] = timestamp.disabledColor;
      style["--calendar-disabled-date-background-dark"] = timestamp.disabledColor;
    }
    if (timestamp.disabledTextColor !== void 0) {
      style["--calendar-disabled-date-color"] = timestamp.disabledTextColor;
      style["--calendar-disabled-date-color-dark"] = timestamp.disabledTextColor;
    }
    return style;
  }
  return {
    parsedStart,
    parsedEnd,
    dayFormatter,
    weekdayFormatter,
    ariaDateFormatter,
    arrayHasDate,
    checkDays,
    getRelativeClasses,
    startOfWeek,
    endOfWeek,
    dayStyleDefault,
    getDisabledStyle
  };
}
function scrollTo(el, position) {
  if (el instanceof Window) el.scrollTo({
    top: position,
    behavior: "instant"
  });
  else el.scrollTop = position;
}
function getVerticalScrollPosition(scrollTarget) {
  return scrollTarget instanceof Window ? scrollTarget.scrollY : scrollTarget.scrollTop;
}
function animVerticalScrollTo(el, to, duration = 500, startTime = performance.now(), startPos = getVerticalScrollPosition(el)) {
  if (duration <= 0 || startPos === to) {
    scrollTo(el, to);
    return;
  }
  requestAnimationFrame((nowTime) => {
    const timeElapsed = nowTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    scrollTo(el, startPos + (to - startPos) * ease(progress));
    if (progress < 1) animVerticalScrollTo(el, to, duration, startTime, startPos);
  });
}
function animHorizontalScrollTo(element, targetScrollLeft, duration = 500) {
  const startScrollLeft = element.scrollLeft;
  const distance = targetScrollLeft - startScrollLeft;
  let startTime = null;
  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    element.scrollLeft = startScrollLeft + distance * ease(progress);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  }
  requestAnimationFrame(animateScroll);
}
const useIntervalProps = {
  view: {
    type: String,
    validator: (v) => [
      "day",
      "week",
      "month",
      "month-interval"
    ].includes(v),
    default: "day"
  },
  shortIntervalLabel: Boolean,
  intervalHeight: {
    type: [Number, String],
    default: 40,
    validator: validateNumber
  },
  intervalMinutes: {
    type: [Number, String],
    default: 60,
    validator: validateNumber
  },
  intervalStart: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  intervalCount: {
    type: [Number, String],
    default: 24,
    validator: validateNumber
  },
  intervalStyle: {
    type: Function,
    default: null
  },
  intervalClass: {
    type: Function,
    default: null
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  showIntervalLabel: {
    type: Function,
    default: null
  },
  hour24Format: Boolean,
  timeClicksClamped: Boolean,
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => [
      "stacked",
      "inline",
      "inverted"
    ].includes(v)
  }
};
const useSchedulerProps = {
  view: {
    type: String,
    validator: (v) => [
      "day",
      "week",
      "month",
      "month-interval"
    ].includes(v),
    default: "day"
  },
  modelResources: { type: Array },
  resourceKey: {
    type: String,
    default: "id"
  },
  resourceLabel: {
    type: String,
    default: "label"
  },
  resourceHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  resourceMinHeight: {
    type: [Number, String],
    default: 70,
    validator: validateNumber
  },
  resourceStyle: {
    type: Function,
    default: null
  },
  resourceClass: {
    type: Function,
    default: null
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => [
      "stacked",
      "inline",
      "inverted"
    ].includes(v)
  }
};
const useAgendaProps = {
  view: {
    type: String,
    validator: (v) => [
      "day",
      "week",
      "month",
      "month-interval"
    ].includes(v),
    default: "day"
  },
  leftColumnOptions: { type: Array },
  rightColumnOptions: { type: Array },
  columnOptionsId: { type: String },
  columnOptionsLabel: { type: String },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => [
      "stacked",
      "inline",
      "inverted"
    ].includes(v)
  },
  dayHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  dayMinHeight: {
    type: [Number, String],
    default: 40,
    validator: validateNumber
  }
};
const useResourceProps = {
  modelResources: { type: Array },
  resourceKey: {
    type: String,
    default: "id"
  },
  resourceLabel: {
    type: String,
    default: "label"
  },
  resourceHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  resourceMinHeight: {
    type: [Number, String],
    default: 70,
    validator: validateNumber
  },
  resourceStyle: {
    type: Function,
    default: null
  },
  resourceClass: {
    type: Function,
    default: null
  },
  cellWidth: {
    type: [Number, String],
    default: 100
  },
  intervalHeaderHeight: {
    type: [Number, String],
    default: 20,
    validator: validateNumber
  },
  noSticky: Boolean
};
function useInterval(props, { times, scrollArea, parsedStart, parsedEnd, maxDays, size, headerColumnRef }) {
  const parsedIntervalStart = computed(() => parseInt(String(props.intervalStart), 10));
  const parsedIntervalMinutes = computed(() => parseInt(String(props.intervalMinutes), 10));
  const parsedIntervalCount = computed(() => parseInt(String(props.intervalCount), 10));
  const parsedIntervalHeight = computed(() => parseFloat(String(props.intervalHeight)));
  const parsedCellWidth = computed(() => {
    let width = 0;
    const columnCount = Number(props.columnCount);
    if (props.cellWidth) width = Number(props.cellWidth);
    else if (size.width > 0 && headerColumnRef.value) width = headerColumnRef.value.offsetWidth / (columnCount > 1 ? columnCount : maxDays.value);
    return width;
  });
  const parsedStartMinute = computed(() => parsedIntervalStart.value * parsedIntervalMinutes.value);
  const bodyHeight = computed(() => parsedIntervalCount.value * parsedIntervalHeight.value);
  const bodyWidth = computed(() => parsedIntervalCount.value * parsedCellWidth.value);
  const parsedWeekStart = computed(() => startOfWeek(parsedStart.value));
  const parsedWeekEnd = computed(() => endOfWeek(parsedEnd.value));
  const days = computed(() => {
    return createDayList(parsedStart.value, parsedEnd.value, times.today, props.weekdays, props.disabledBefore, props.disabledAfter, props.disabledWeekdays, props.disabledDays, maxDays.value);
  });
  const intervals = computed(() => {
    return days.value.map((day) => createIntervalList(day, parsedIntervalStart.value, parsedIntervalMinutes.value, parsedIntervalCount.value, times.now));
  });
  function startOfWeek(timestamp) {
    return getStartOfWeek(timestamp, props.weekdays, times.today);
  }
  function endOfWeek(timestamp) {
    return getEndOfWeek(timestamp, props.weekdays, times.today);
  }
  function arrayHasDateTime(arr, timestamp) {
    return arr && arr.length > 0 && arr.includes(getDateTime(timestamp));
  }
  function checkIntervals(arr, timestamp) {
    const days2 = {
      firstDay: false,
      betweenDays: false,
      lastDay: false
    };
    if (arr && arr.length === 2) {
      const current = getDayTimeIdentifier(timestamp);
      const first = getDayTimeIdentifier(parsed(arr[0]));
      const last = getDayTimeIdentifier(parsed(arr[1]));
      days2.firstDay = first === current;
      days2.lastDay = last === current;
      days2.betweenDays = first < current && last > current;
    }
    return days2;
  }
  function getIntervalClasses(interval, selectedDays = [], startEndDays = []) {
    const isSelected = arrayHasDateTime(selectedDays, interval);
    const { firstDay, lastDay, betweenDays } = checkIntervals(startEndDays, interval);
    return {
      "q-selected": isSelected,
      "q-range-first": firstDay === true,
      "q-range": betweenDays === true,
      "q-range-last": lastDay === true,
      "q-disabled-interval disabled": interval.disabled === true
    };
  }
  function getResourceClasses(_interval, _selectedDays, _startEndDays) {
    return [];
  }
  const intervalFormatter = computed(() => {
    const longOptions = {
      timeZone: "UTC",
      hour12: !props.hour24Format,
      hour: "2-digit",
      minute: "2-digit"
    };
    const shortOptions = {
      timeZone: "UTC",
      hour12: !props.hour24Format,
      hour: "numeric",
      minute: "2-digit"
    };
    const shortHourOptions = {
      timeZone: "UTC",
      hour12: !props.hour24Format,
      hour: "numeric"
    };
    return createNativeLocaleFormatterUTC(props.locale, (tms, short) => short ? tms.minute === 0 ? shortHourOptions : shortOptions : longOptions);
  });
  const ariaDateTimeFormatter = computed(() => {
    const longOptions = {
      timeZone: "UTC",
      dateStyle: "full",
      timeStyle: "short"
    };
    return createNativeLocaleFormatterUTC(props.locale, () => longOptions);
  });
  function showIntervalLabelDefault(interval) {
    const first = intervals.value[0][0];
    return !(first.hour === interval.hour && first.minute === interval.minute) && interval.minute === 0;
  }
  function showResourceLabelDefault(_resource) {
  }
  function styleDefault(_scope) {
    return {};
  }
  function getTimestampAtEventInterval(e, day, clamp = false, now) {
    let timestamp = copyTimestamp(day);
    if (!e.currentTarget) return timestamp;
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const addIntervals = ((touches && touches[0] ? touches[0].clientY : mouseEvent.clientY) - bounds.top) / parsedIntervalHeight.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) timestamp = addToDate(timestamp, { minute: addMinutes });
    if (now) timestamp = updateRelative(timestamp, now, true);
    return timestamp;
  }
  function getTimestampAtEvent(e, day, clamp = false, now) {
    let timestamp = copyTimestamp(day);
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const addIntervals = ((touches && touches[0] ? touches[0].clientY : mouseEvent.clientY) - bounds.top) / parsedIntervalHeight.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) timestamp = addToDate(timestamp, { minute: addMinutes });
    if (now) timestamp = updateRelative(timestamp, now, true);
    return timestamp;
  }
  function getTimestampAtEventX(e, day, clamp = false, now) {
    let timestamp = copyTimestamp(day);
    if (!e.currentTarget) return timestamp;
    const bounds = e.currentTarget.getBoundingClientRect();
    const touchEvent = e;
    const mouseEvent = e;
    const touches = touchEvent.changedTouches || touchEvent.touches;
    const addIntervals = ((touches && touches[0] ? touches[0].clientX : mouseEvent.clientX) - bounds.left) / parsedCellWidth.value;
    const addMinutes = Math.floor((clamp ? Math.floor(addIntervals) : addIntervals) * parsedIntervalMinutes.value);
    if (addMinutes !== 0) timestamp = addToDate(timestamp, { minute: addMinutes });
    if (now) timestamp = updateRelative(timestamp, now, true);
    return timestamp;
  }
  function getScopeForSlot(timestamp, columnIndex) {
    const scope = {
      timestamp,
      timeStartPos,
      timeDurationHeight
    };
    if (columnIndex !== void 0) scope.columnIndex = columnIndex;
    return scope;
  }
  function getScopeForSlotX(timestamp, index) {
    const scope = {
      timestamp: copyTimestamp(timestamp),
      timeStartPosX,
      timeDurationWidth
    };
    if (index !== void 0) scope.index = index;
    return scope;
  }
  function scrollToTime(time, duration = 0) {
    const y = timeStartPos(time);
    if (y === false || !scrollArea.value) return false;
    animVerticalScrollTo(scrollArea.value, y, duration);
    return true;
  }
  function scrollToTimeX(time, duration = 0) {
    const x = timeStartPosX(time);
    if (x === false || !scrollArea.value) return false;
    animHorizontalScrollTo(scrollArea.value, x, duration);
    return true;
  }
  function timeDurationHeight(minutes) {
    return minutes / parsedIntervalMinutes.value * parsedIntervalHeight.value;
  }
  function timeDurationWidth(minutes) {
    return minutes / parsedIntervalMinutes.value * parsedCellWidth.value;
  }
  function heightToMinutes(height) {
    return height * parsedIntervalMinutes.value / parsedIntervalHeight.value;
  }
  function widthToMinutes(width) {
    return width * parsedIntervalMinutes.value / parsedCellWidth.value;
  }
  function timeStartPos(time, clamp = true) {
    const minutes = parseTime(time);
    if (minutes === false) return false;
    const min = parsedStartMinute.value;
    const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
    let y = (minutes - min) / gap * bodyHeight.value;
    if (clamp) {
      if (y < 0) y = 0;
      if (y > bodyHeight.value) y = bodyHeight.value;
    }
    return y;
  }
  function timeStartPosX(time, clamp = true) {
    const minutes = parseTime(time);
    if (minutes === false) return false;
    const min = parsedStartMinute.value;
    const gap = parsedIntervalCount.value * parsedIntervalMinutes.value;
    let x = (minutes - min) / gap * bodyWidth.value;
    if (clamp) {
      if (x < 0) x = 0;
      if (x > bodyWidth.value) x = bodyWidth.value;
    }
    return x;
  }
  return {
    parsedIntervalStart,
    parsedIntervalMinutes,
    parsedIntervalCount,
    parsedIntervalHeight,
    parsedCellWidth,
    parsedStartMinute,
    bodyHeight,
    bodyWidth,
    parsedWeekStart,
    parsedWeekEnd,
    days,
    intervals,
    intervalFormatter,
    ariaDateTimeFormatter,
    arrayHasDateTime,
    checkIntervals,
    getIntervalClasses,
    getResourceClasses,
    showIntervalLabelDefault,
    showResourceLabelDefault,
    styleDefault,
    getTimestampAtEventInterval,
    getTimestampAtEvent,
    getTimestampAtEventX,
    getScopeForSlot,
    getScopeForSlotX,
    scrollToTime,
    scrollToTimeX,
    timeDurationHeight,
    timeDurationWidth,
    heightToMinutes,
    widthToMinutes,
    timeStartPos,
    timeStartPosX
  };
}
const useColumnProps = {
  columnCount: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  columnIndexStart: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  }
};
const useMaxDaysProps = { maxDays: {
  type: Number,
  default: 1
} };
const useTimesProps = { now: {
  type: String,
  validator: (v) => v === "" || validateTimestamp(v),
  default: ""
} };
function useTimes(props) {
  const times = reactive({
    now: parseTimestamp("0000-00-00 00:00"),
    today: parseTimestamp("0000-00-00")
  });
  const parsedNow = computed(() => props.now ? parseTimestamp(props.now) : getNow());
  watch(parsedNow, () => updateCurrent());
  function setCurrent() {
    if (times.now && times.today) {
      times.now = copyTimestamp({
        ...times.now,
        current: true,
        past: false,
        future: false
      });
      times.today = copyTimestamp({
        ...times.today,
        current: true,
        past: false,
        future: false
      });
    }
  }
  function updateCurrent() {
    const now = parsedNow.value || getNow();
    times.now = updateTime(now, updateDay(now, times.now));
    times.today = updateDay(now, times.today);
  }
  function getNow() {
    return parseDate(/* @__PURE__ */ new Date());
  }
  function updateDay(now, target) {
    if (now.date !== target.date) return copyTimestamp({
      ...target,
      year: now.year,
      month: now.month,
      day: now.day,
      weekday: now.weekday,
      date: now.date
    });
    return target;
  }
  function updateTime(now, target) {
    if (now.time !== target.time) return copyTimestamp({
      ...target,
      hour: now.hour,
      minute: now.minute,
      second: now.second,
      millisecond: now.millisecond,
      time: now.time
    });
    return target;
  }
  return {
    times,
    parsedNow,
    setCurrent,
    updateCurrent,
    getNow,
    updateDay,
    updateTime
  };
}
function useRenderValues(props, { parsedView, parsedValue, times }) {
  return { renderValues: computed(() => {
    const around = parsedValue.value;
    let maxDays = props.maxDays;
    let start = around;
    let end = around;
    switch (parsedView.value) {
      case "month":
        start = getStartOfMonth(around);
        end = getEndOfMonth(around);
        maxDays = daysInMonth(start.year, start.month);
        break;
      case "week":
      case "week-agenda":
      case "week-scheduler":
        start = getStartOfWeek(around, props.weekdays, times.today);
        end = getEndOfWeek(start, props.weekdays, times.today);
        maxDays = props.weekdays.length;
        break;
      case "day":
      case "scheduler":
      case "agenda":
        end = moveRelativeDays(copyTimestamp(end), nextDay, maxDays > 1 ? maxDays - 1 : maxDays, props.weekdays);
        end = updateFormatted(end);
        break;
      case "month-interval":
      case "month-scheduler":
      case "month-agenda":
        start = getStartOfMonth(around);
        end = getEndOfMonth(around);
        end = updateFormatted(end);
        maxDays = daysInMonth(start.year, start.month);
        break;
      case "resource":
        maxDays = 1;
        end = moveRelativeDays(copyTimestamp(end), nextDay, maxDays, props.weekdays);
        end = updateFormatted(end);
        break;
    }
    return {
      start,
      end,
      maxDays
    };
  }) };
}
const queuedMouseEmits = /* @__PURE__ */ new WeakMap();
const toCamelCase = (str) => str.replace(/(-\w)/g, (m) => m[1].toUpperCase());
function requestFrame$1(callback) {
  return typeof globalThis.requestAnimationFrame === "function" ? globalThis.requestAnimationFrame(callback) : void 0;
}
function cancelFrame$1(frame) {
  if (typeof globalThis.cancelAnimationFrame === "function") globalThis.cancelAnimationFrame(frame);
}
function shouldCoalesceEmit(event) {
  return event === "mousemove" || event === "touchmove";
}
function emitMouseEvent(emit, eventName, event, getEvent) {
  emit(eventName, getEvent(event, eventName));
}
function queueMouseEmit(emit, eventName, event, getEvent) {
  let queuedForEmit = queuedMouseEmits.get(emit);
  if (queuedForEmit === void 0) {
    queuedForEmit = /* @__PURE__ */ new Map();
    queuedMouseEmits.set(emit, queuedForEmit);
  }
  const queued = queuedForEmit.get(eventName);
  if (queued !== void 0) {
    queued.event = event;
    queued.getEvent = getEvent;
    return;
  }
  const frame = requestFrame$1(() => {
    const queuedForEmit2 = queuedMouseEmits.get(emit);
    const queued2 = queuedForEmit2?.get(eventName);
    if (queued2 === void 0) return;
    queuedForEmit2.delete(eventName);
    if (queuedForEmit2.size === 0) queuedMouseEmits.delete(emit);
    emitMouseEvent(emit, queued2.eventName, queued2.event, queued2.getEvent);
  });
  if (frame === void 0) {
    emitMouseEvent(emit, eventName, event, getEvent);
    return;
  }
  queuedForEmit.set(eventName, {
    event,
    eventName,
    frame,
    getEvent
  });
}
function cancelQueuedMouseEmits(emit) {
  const queuedForEmit = queuedMouseEmits.get(emit);
  if (queuedForEmit === void 0) return;
  for (const queued of queuedForEmit.values()) cancelFrame$1(queued.frame);
  queuedMouseEmits.delete(emit);
}
function getMouseEventHandlers(emit, listeners, events, getEvent) {
  const on = {};
  for (const eventName in events) {
    const eventOptions = events[eventName];
    if (!eventOptions) continue;
    const eventKey = toCamelCase("on-" + eventName);
    if (!listeners.value) {
      console.warn("$listeners has not been set up");
      return {};
    }
    if (listeners.value[eventKey] === void 0) continue;
    const key = "on" + eventOptions.event.charAt(0).toUpperCase() + eventOptions.event.slice(1);
    const handler = (event) => {
      if (eventOptions.button === void 0 || "buttons" in event && event.buttons > 0 && event.button === eventOptions.button) {
        if (eventOptions.prevent) event.preventDefault();
        if (eventOptions.stop) event.stopPropagation();
        if (shouldCoalesceEmit(eventOptions.event)) queueMouseEmit(emit, eventName, event, getEvent);
        else emitMouseEvent(emit, eventName, event, getEvent);
      }
      return eventOptions.result;
    };
    if (key in on) if (Array.isArray(on[key])) on[key].push(handler);
    else on[key] = [on[key], handler];
    else on[key] = handler;
  }
  return on;
}
function getDefaultMouseEventHandlers(emit, listeners, suffix, getEvent) {
  return getMouseEventHandlers(emit, listeners, getMouseEventName(suffix), getEvent);
}
function getMouseEventName(suffix) {
  return {
    ["click" + suffix]: { event: "click" },
    ["contextmenu" + suffix]: {
      event: "contextmenu",
      prevent: true,
      result: false
    },
    ["mousedown" + suffix]: { event: "mousedown" },
    ["mousemove" + suffix]: { event: "mousemove" },
    ["mouseup" + suffix]: { event: "mouseup" },
    ["mouseenter" + suffix]: { event: "mouseenter" },
    ["mouseleave" + suffix]: { event: "mouseleave" },
    ["touchstart" + suffix]: { event: "touchstart" },
    ["touchmove" + suffix]: { event: "touchmove" },
    ["touchend" + suffix]: { event: "touchend" }
  };
}
function getRawMouseEvents(suffix) {
  return Object.keys(getMouseEventName(suffix));
}
function useMouseEvents(emit, listeners) {
  if (getCurrentInstance() !== null) onBeforeUnmount(() => {
    cancelQueuedMouseEmits(emit);
  });
  return {
    getMouseEventHandlers: (events, getEvent) => getMouseEventHandlers(emit, listeners, events, getEvent),
    getDefaultMouseEventHandlers: (suffix, getEvent) => getDefaultMouseEventHandlers(emit, listeners, suffix, getEvent),
    getMouseEventName,
    getRawMouseEvents
  };
}
const useMoveEmits = ["moved"];
function useMove(props, { parsedView, parsedValue, direction, maxDays, times, emittedValue, emit }) {
  function withDay(timestamp, day) {
    return copyTimestamp({
      ...timestamp,
      day
    });
  }
  function isAllowedWeekday(timestamp) {
    return props.weekdays.length === 0 || props.weekdays.includes(Number(timestamp.weekday));
  }
  function moveToAllowedWeekday(timestamp, forward) {
    let moved = timestamp;
    for (let i = 0; i < 7 && !isAllowedWeekday(moved); i += 1) moved = addToDate(moved, { day: forward ? 1 : -1 });
    return moved;
  }
  function move(amount = 1) {
    if (amount === 0) {
      let moved2 = parsed(today());
      moved2 = updateWeekday(moved2);
      moved2 = updateFormatted(moved2);
      moved2 = updateDayOfYear(moved2);
      moved2 = updateRelative(moved2, times.now);
      emittedValue.value = moved2.date;
      emit("moved", moved2);
      return;
    }
    let moved = copyTimestamp(parsedValue.value);
    const lastDayOfMonth = getEndOfMonth(moved);
    const forward = amount > 0;
    const mover = forward ? nextDay : prevDay;
    const limit = forward ? lastDayOfMonth.day : 1;
    let count = forward ? amount : -amount;
    direction.value = forward ? "next" : "prev";
    const dayCount = props.weekdays.length;
    while (--count >= 0) switch (parsedView.value) {
      case "month":
        moved = withDay(moved, limit);
        moved = mover(moved);
        moved = updateWeekday(moved);
        moved = moveToAllowedWeekday(moved, forward);
        break;
      case "week":
      case "week-agenda":
      case "week-scheduler":
        moved = moveRelativeDays(moved, mover, dayCount, props.weekdays);
        break;
      case "day":
      case "scheduler":
      case "agenda":
        moved = moveRelativeDays(moved, mover, maxDays.value, props.weekdays);
        break;
      case "month-interval":
      case "month-agenda":
      case "month-scheduler":
        moved = withDay(moved, limit);
        moved = mover(moved);
        break;
      case "resource":
        moved = moveRelativeDays(moved, mover, maxDays.value, props.weekdays);
        break;
    }
    moved = updateWeekday(moved);
    moved = updateFormatted(moved);
    moved = updateDayOfYear(moved);
    moved = updateRelative(moved, times.now);
    emittedValue.value = moved.date;
    emit("moved", moved);
  }
  return { move };
}
const listenerRE = /^on[A-Z]/;
function useEmitListeners(vm = getCurrentInstance()) {
  return { emitListeners: computed(() => {
    const listeners = {};
    if (vm?.vnode?.props) Object.keys(vm.vnode.props).forEach((key) => {
      if (listenerRE.test(key)) listeners[key] = true;
    });
    return listeners;
  }) };
}
function useFocusHelper() {
  return [h("span", {
    "aria-hidden": "true",
    class: "q-calendar__focus-helper"
  })];
}
function useButton() {
  function renderButton2({ focusable, focusType }, data, slotData) {
    const isFocusable = focusable && focusType.includes("date");
    return h("button", {
      ...data,
      tabindex: isFocusable ? 0 : -1
    }, [slotData, isFocusable && useFocusHelper()]);
  }
  return { renderButton: renderButton2 };
}
const useCellWidthProps = { cellWidth: [Number, String] };
function useCellWidth(props) {
  return { isSticky: computed(() => props.cellWidth !== void 0) };
}
const useCheckChangeEmits = ["change"];
function useCheckChange(emit, { days, lastStart, lastEnd }) {
  function checkChange() {
    const dayList = days.value;
    if (dayList.length === 0) return false;
    const start = dayList[0].date;
    const end = dayList[dayList.length - 1].date;
    if (!lastStart.value || !lastEnd.value || start !== lastStart.value || end !== lastEnd.value) {
      lastStart.value = start;
      lastEnd.value = end;
      emit("change", {
        start,
        end,
        days: dayList
      });
      return true;
    }
    return false;
  }
  return { checkChange };
}
function useEventUtils() {
  function isKeyCode2(evt, keyCodes) {
    return (Array.isArray(keyCodes) ? keyCodes : [keyCodes]).includes(evt.keyCode);
  }
  return { isKeyCode: isKeyCode2 };
}
const { isKeyCode } = useEventUtils();
const navigationInstances = /* @__PURE__ */ new Set();
let activeNavigationInstance = null;
let documentListenersAttached = false;
function getDocument() {
  return typeof document !== "undefined" ? document : void 0;
}
function getWindow() {
  return typeof window !== "undefined" ? window : void 0;
}
function setActiveNavigationInstance(instance) {
  if (activeNavigationInstance === instance) return;
  if (activeNavigationInstance?.keyboardActive) activeNavigationInstance.keyboardActive.value = false;
  activeNavigationInstance = instance;
  if (activeNavigationInstance?.keyboardActive) activeNavigationInstance.keyboardActive.value = true;
}
function findNavigationInstance(target) {
  if (typeof Node !== "undefined" && target instanceof Node) {
    for (const instance of navigationInstances) if (instance.rootRef.value?.contains(target)) return instance;
  }
  return null;
}
function refreshActiveNavigationInstance() {
  setActiveNavigationInstance(findNavigationInstance(getDocument()?.activeElement ?? null));
}
function onGlobalFocusIn(event) {
  setActiveNavigationInstance(findNavigationInstance(event.target));
}
function onGlobalKeyDown(event) {
  refreshActiveNavigationInstance();
  activeNavigationInstance?.onKeyDown(event);
}
function onGlobalKeyUp(event) {
  refreshActiveNavigationInstance();
  activeNavigationInstance?.onKeyUp(event);
}
function attachDocumentListeners() {
  const documentRef = getDocument();
  if (documentRef === void 0 || documentListenersAttached === true) return;
  documentRef.addEventListener("focusin", onGlobalFocusIn);
  documentRef.addEventListener("keydown", onGlobalKeyDown);
  documentRef.addEventListener("keyup", onGlobalKeyUp);
  documentListenersAttached = true;
}
function detachDocumentListeners() {
  const documentRef = getDocument();
  if (documentRef === void 0 || documentListenersAttached !== true) return;
  documentRef.removeEventListener("focusin", onGlobalFocusIn);
  documentRef.removeEventListener("keydown", onGlobalKeyDown);
  documentRef.removeEventListener("keyup", onGlobalKeyUp);
  documentListenersAttached = false;
}
function registerNavigationInstance(instance) {
  navigationInstances.add(instance);
  attachDocumentListeners();
  refreshActiveNavigationInstance();
}
function unregisterNavigationInstance(instance) {
  navigationInstances.delete(instance);
  if (activeNavigationInstance === instance) {
    setActiveNavigationInstance(null);
    refreshActiveNavigationInstance();
  } else if (instance.keyboardActive) instance.keyboardActive.value = false;
  if (navigationInstances.size === 0) detachDocumentListeners();
}
const useNavigationProps = { useNavigation: Boolean };
function useNavigation(props, { rootRef, keyboardActive, focusRef, focusValue, datesRef, parsedView, emittedValue, direction, times }) {
  let initialized = false;
  let focusRetryHandle = null;
  let focusRetryToken = 0;
  const navigationInstance = {
    rootRef,
    keyboardActive,
    onKeyDown,
    onKeyUp
  };
  onBeforeUnmount(() => {
    cancelFocusRetry();
    endNavigation();
  });
  watch(() => props.useNavigation, (val) => {
    if (val === true) startNavigation();
    else endNavigation();
  });
  if (props.useNavigation === true) startNavigation();
  function startNavigation() {
    if (initialized) return;
    if (getDocument() !== void 0) {
      initialized = true;
      registerNavigationInstance(navigationInstance);
    }
  }
  function endNavigation() {
    if (getDocument() !== void 0) {
      unregisterNavigationInstance(navigationInstance);
      initialized = false;
    }
  }
  function canNavigate(e) {
    if (!e) return false;
    const documentRef = getDocument();
    if (documentRef) {
      const el = documentRef.activeElement;
      if (el !== documentRef.body && rootRef.value?.contains(el)) return true;
    }
    return false;
  }
  function tryFocus(value = focusRef.value) {
    cancelFocusRetry();
    let count = 0;
    const token = ++focusRetryToken;
    const focus = () => {
      focusRetryHandle = null;
      if (token !== focusRetryToken) return;
      count += 1;
      const focusElement = getFocusElement(value);
      if (focusElement) {
        focusRef.value = value;
        focusElement.focus();
        if (count === 50 || getDocument()?.activeElement === focusElement) {
          cancelFocusRetry();
          return;
        }
      }
      if (count < 50) scheduleFocusRetry(focus);
    };
    nextTick(focus);
  }
  function scheduleFocusRetry(callback) {
    const windowRef = getWindow();
    focusRetryHandle = windowRef?.requestAnimationFrame !== void 0 ? windowRef.requestAnimationFrame(callback) : Number(setTimeout(callback, 16));
  }
  function cancelFocusRetry() {
    focusRetryToken += 1;
    if (focusRetryHandle === null) return;
    const windowRef = getWindow();
    if (windowRef?.cancelAnimationFrame !== void 0) windowRef.cancelAnimationFrame(focusRetryHandle);
    else clearTimeout(focusRetryHandle);
    focusRetryHandle = null;
  }
  function getFocusDate(value) {
    return value.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
  }
  function getFocusTime(value) {
    return value.match(/^\d{4}-\d{2}-\d{2} (\d{2}:\d{2})/)?.[1];
  }
  function applyFocusTime(timestamp, value) {
    const time = getFocusTime(value);
    if (!time) return timestamp;
    const [hour, minute] = time.split(":").map(Number);
    return {
      ...timestamp,
      time,
      hour,
      minute,
      hasTime: true
    };
  }
  function getFocusElement(value = focusRef.value) {
    const directFocusElement = datesRef.value[value];
    if (directFocusElement) return directFocusElement;
    const focusDate = getFocusDate(value);
    if (!focusDate) return;
    const prefixes = value.slice(focusDate.length).startsWith(" ") ? [`${focusDate} `, `${focusDate}-`] : [`${focusDate}-`, `${focusDate} `];
    for (const prefix of prefixes) {
      const key = Object.keys(datesRef.value).find((dateRef) => dateRef.startsWith(prefix));
      if (key) return datesRef.value[key];
    }
  }
  function getFocusableTimestamp() {
    const focusTimestamp = parseFocusTimestamp(focusRef.value);
    if (focusTimestamp) return applyFocusTime(focusTimestamp, focusRef.value);
    const refDate = getFocusDate(focusRef.value);
    if (refDate) {
      const timestamp = parseFocusTimestamp(refDate);
      if (timestamp) return applyFocusTime(timestamp, focusRef.value);
    }
    if (isValidTimestamp(focusValue.value)) return copyTimestamp(focusValue.value);
    return copyTimestamp(times.today);
  }
  function parseFocusTimestamp(value) {
    const timestamp = parseTimestamp(value);
    return timestamp ? copyTimestamp(timestamp) : null;
  }
  function isValidTimestamp(timestamp) {
    return timestamp !== null && timestamp !== void 0 && typeof timestamp.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(timestamp.date) && Number.isFinite(timestamp.year) && Number.isFinite(timestamp.month) && Number.isFinite(timestamp.day);
  }
  function getFocusKey(timestamp) {
    const currentDate = getFocusDate(focusRef.value);
    const suffix = currentDate ? focusRef.value.slice(currentDate.length) : "";
    if (suffix.startsWith(" ") && timestamp.time) return `${timestamp.date} ${timestamp.time}`;
    return suffix ? timestamp.date + suffix : timestamp.date;
  }
  function setFocusTimestamp(timestamp) {
    const candidate = getFocusKey(timestamp);
    const focusKey = datesRef.value[candidate] !== void 0 || candidate.includes(" ") ? candidate : timestamp.date;
    focusRef.value = focusKey;
    nextTick(() => {
      const focusElement = getFocusElement(focusKey);
      if (focusElement) {
        focusRef.value = focusKey;
        focusElement.focus();
      } else tryFocus(focusKey);
    });
  }
  function isEnabledWeekday(timestamp) {
    return props.weekdays.length === 0 || props.weekdays.includes(Number(timestamp.weekday));
  }
  function moveToEnabledWeekday(timestamp, amount) {
    let tm = timestamp;
    for (let i = 0; i < 7 && !isEnabledWeekday(tm); i += 1) tm = addToDate(tm, { day: amount });
    return tm;
  }
  function isWeekView() {
    return [
      "week",
      "week-agenda",
      "week-scheduler"
    ].includes(parsedView.value);
  }
  function updateWeekBoundaryModelValue(from, to) {
    if (!isWeekView()) return;
    const start = getStartOfWeek(from, props.weekdays || [], times.today);
    const end = getEndOfWeek(from, props.weekdays || [], times.today);
    if (to.date < start.date || to.date > end.date) emittedValue.value = to.date;
  }
  function updateModelValueWhenFocusIsOutsideRenderedDates(timestamp) {
    if (getFocusElement(getFocusKey(timestamp)) === void 0) emittedValue.value = timestamp.date;
  }
  function onKeyDown(e) {
    if (canNavigate(e) && isKeyCode(e, [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ])) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function onKeyUp(e) {
    if (canNavigate(e) && isKeyCode(e, [
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ])) ({
      33: onPgUp,
      34: onPgDown,
      35: onEnd,
      36: onHome,
      37: onLeftArrow,
      38: onUpArrow,
      39: onRightArrow,
      40: onDownArrow
    })[e.keyCode]?.();
  }
  function onUpArrow() {
    const current = getFocusableTimestamp();
    let tm = current;
    if (parsedView.value === "month") {
      const month = tm.month;
      tm = addToDate(tm, { day: -7 });
      if (month !== tm.month) {
        direction.value = "prev";
        emittedValue.value = tm.date;
        setFocusTimestamp(tm);
        return;
      }
    } else {
      tm = addToDate(tm, { minute: -Number(props.intervalMinutes) });
      if (tm.date !== current.date) tm = moveToEnabledWeekday(tm, -1);
    }
    direction.value = "prev";
    updateWeekBoundaryModelValue(current, tm);
    updateModelValueWhenFocusIsOutsideRenderedDates(tm);
    setFocusTimestamp(tm);
  }
  function onDownArrow() {
    const current = getFocusableTimestamp();
    let tm = current;
    if (parsedView.value === "month") {
      const month = tm.month;
      tm = addToDate(tm, { day: 7 });
      if (month !== tm.month) {
        direction.value = "next";
        emittedValue.value = tm.date;
        setFocusTimestamp(tm);
        return;
      }
    } else {
      tm = addToDate(tm, { minute: Number(props.intervalMinutes) });
      if (tm.date !== current.date) tm = moveToEnabledWeekday(tm, 1);
    }
    direction.value = "next";
    updateWeekBoundaryModelValue(current, tm);
    updateModelValueWhenFocusIsOutsideRenderedDates(tm);
    setFocusTimestamp(tm);
  }
  function onLeftArrow() {
    const current = getFocusableTimestamp();
    let tm = current;
    direction.value = "prev";
    tm = moveToEnabledWeekday(addToDate(tm, { day: -1 }), -1);
    updateWeekBoundaryModelValue(current, tm);
    updateModelValueWhenFocusIsOutsideRenderedDates(tm);
    setFocusTimestamp(tm);
  }
  function onRightArrow() {
    const current = getFocusableTimestamp();
    let tm = current;
    direction.value = "next";
    tm = moveToEnabledWeekday(addToDate(tm, { day: 1 }), 1);
    updateWeekBoundaryModelValue(current, tm);
    updateModelValueWhenFocusIsOutsideRenderedDates(tm);
    setFocusTimestamp(tm);
  }
  function onPgUp() {
    let tm = getFocusableTimestamp();
    tm = parsedView.value === "month" ? addToDate(tm, { month: -1 }) : addToDate(tm, { day: -7 });
    direction.value = "prev";
    setFocusTimestamp(tm);
  }
  function onPgDown() {
    let tm = getFocusableTimestamp();
    tm = parsedView.value === "month" ? addToDate(tm, { month: 1 }) : addToDate(tm, { day: 7 });
    direction.value = "next";
    setFocusTimestamp(tm);
  }
  function onHome() {
    let tm = getFocusableTimestamp();
    tm = parsedView.value === "month" ? getStartOfMonth(tm) : getStartOfWeek(tm, props.weekdays || [], times.today);
    tm = moveToEnabledWeekday(tm, 1);
    setFocusTimestamp(tm);
  }
  function onEnd() {
    let tm = getFocusableTimestamp();
    tm = parsedView.value === "month" ? getEndOfMonth(tm) : getEndOfWeek(tm, props.weekdays || [], times.today);
    tm = moveToEnabledWeekday(tm, -1);
    setFocusTimestamp(tm);
  }
  return {
    startNavigation,
    endNavigation,
    tryFocus
  };
}
const queuedDragTargets = /* @__PURE__ */ new WeakMap();
function requestFrame(callback) {
  return typeof globalThis.requestAnimationFrame === "function" ? globalThis.requestAnimationFrame(callback) : void 0;
}
function cancelFrame(frame) {
  if (typeof globalThis.cancelAnimationFrame === "function") globalThis.cancelAnimationFrame(frame);
}
function updateDragTarget(targetRef, value) {
  if (!Object.is(targetRef.value, value)) targetRef.value = value;
}
function cancelQueuedDragTarget(targetRef) {
  const queued = queuedDragTargets.get(targetRef);
  if (queued !== void 0) {
    cancelFrame(queued.frame);
    queuedDragTargets.delete(targetRef);
  }
}
function queueDragTargetUpdate(targetRef, value) {
  const queued = queuedDragTargets.get(targetRef);
  if (queued !== void 0) {
    queued.value = value;
    return;
  }
  const frame = requestFrame(() => {
    const queued2 = queuedDragTargets.get(targetRef);
    if (queued2 !== void 0) {
      queuedDragTargets.delete(targetRef);
      updateDragTarget(targetRef, queued2.value);
    }
  });
  if (frame === void 0) {
    updateDragTarget(targetRef, value);
    return;
  }
  queuedDragTargets.set(targetRef, {
    frame,
    value
  });
}
function runDragCallback(callback, event, { targetRef, value, resetValue, type, scope }, immediate = false) {
  if (immediate === true) cancelQueuedDragTarget(targetRef);
  if (typeof callback !== "function") return;
  const nextValue = callback(event, type, { scope }) === true ? value : resetValue;
  if (immediate === true) updateDragTarget(targetRef, nextValue);
  else queueDragTargetUpdate(targetRef, nextValue);
}
function getDragEventHandlers(props, options) {
  return {
    onDragenter: (event) => {
      runDragCallback(props.dragEnterFunc, event, options);
    },
    onDragover: (event) => {
      runDragCallback(props.dragOverFunc, event, options);
    },
    onDragleave: (event) => {
      runDragCallback(props.dragLeaveFunc, event, options);
    },
    onDrop: (event) => {
      runDragCallback(props.dropFunc, event, options, true);
    }
  };
}
const { renderButton: renderButton$4 } = useButton();
defineComponent({
  name: "QCalendarAgenda",
  directives: { ResizeObserver: ResizeObserverDirective },
  slots: Object,
  props: {
    ...useCommonProps,
    ...useAgendaProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), headDayEventsParentRef = ref(), headDayEventsChildRef = ref(), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(""), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") return "month-interval";
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { isSticky } = useCellWidth(props);
    watch(isSticky, () => {
    });
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, parsedEnd, dayFormatter, weekdayFormatter, ariaDateFormatter, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const { rootRef, scrollWidth, __renderCalendar } = useCalendar(props, __renderAgenda, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, parsedCellWidth, getScopeForSlot } = useInterval(props, {
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      const columnCount = parseInt(String(props.columnCount), 10);
      const visibleDayCount = days.value.length === 1 && columnCount > 0 ? columnCount : days.value.length;
      const leftColumnCount = isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.length : 0;
      const rightColumnCount = isRightColumnOptionsValid.value === true ? props.rightColumnOptions.length : 0;
      return Math.max(visibleDayCount + leftColumnCount + rightColumnCount, 1);
    });
    const isLeftColumnOptionsValid = computed(() => {
      return props.leftColumnOptions !== void 0 && Array.isArray(props.leftColumnOptions);
    });
    const isRightColumnOptionsValid = computed(() => {
      return props.rightColumnOptions !== void 0 && Array.isArray(props.rightColumnOptions);
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && parsedColumnCount.value) return (width - scrollWidth.value) / parsedColumnCount.value + "px";
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) focusValue.value = parseTimestamp(val);
    });
    watch(focusValue, () => {
      if (focusRef.value && datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
    });
    onMounted(() => {
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHeadColumn(column, index) {
      const slot = slots["head-column"];
      const scope = {
        column,
        index,
        days: days.value
      };
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const id = props.columnOptionsId !== void 0 ? column[props.columnOptionsId] : "id";
      const style = {
        maxWidth: width,
        width
      };
      return h("div", {
        key: id,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__head--day": true,
          "q-column-day": true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: id,
          resetValue: "",
          type: "head-column",
          scope
        }),
        ...getDefaultMouseEventHandlers2("-head-column", (event) => {
          return {
            scope: {
              column,
              index
            },
            event
          };
        })
      }, [
        props.noDefaultHeaderText !== true && __renderHeadColumnLabel(column),
        slot && slot(scope),
        useFocusHelper()
      ]);
    }
    function __renderHeadColumnLabel(column) {
      const slot = slots["head-column-label"];
      const scope = { column };
      const label = props.columnOptionsLabel !== void 0 ? column[props.columnOptionsLabel] : column.label;
      const vNode = h("div", {
        class: {
          "q-calendar-agenda__head--weekday": true,
          ["q-calendar__" + props.weekdayAlign]: true,
          ellipsis: true
        },
        style: { alignSelf: "center" }
      }, [slot && slot({ scope }), !slot && h("span", { class: "ellipsis" }, label)]);
      return props.dateHeader === "stacked" ? vNode : h("div", {
        class: "q-calendar__header--inline",
        style: { height: "100%" }
      }, [vNode]);
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-agenda__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: { marginRight: scrollWidth.value + "px" }
      }, [__renderHeadDaysColumn()]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: { "q-calendar-agenda__head--days__column": true }
      }, [__renderHeadDaysRow(), __renderHeadDaysEventsRow()]);
    }
    function __renderHeadDaysRow() {
      return h("div", { class: { "q-calendar-agenda__head--days__weekdays": true } }, __renderHeadDays());
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      nextTick(() => {
        if (headDayEventsChildRef.value && props.columnCount === 0 && window) try {
          const styles = window.getComputedStyle(headDayEventsChildRef.value);
          if (headDayEventsParentRef.value && headDayEventsParentRef.value.parentElement) {
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          }
        } catch {
        }
      });
      return h("div", { class: { "q-calendar-agenda__head--days__event": true } }, [slot && h("div", {
        ref: headDayEventsParentRef,
        class: "q-calendar__head-days-event-slot"
      }, [slot({ scope: {
        days: days.value,
        ref: headDayEventsChildRef
      } })]), ...__renderHeadDaysEvents()]);
    }
    function __renderHeadDays() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return [
        isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.map((column, index) => __renderHeadColumn(column, index)) : [],
        ...Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex)),
        isRightColumnOptionsValid.value === true ? props.rightColumnOptions.map((column, index) => __renderHeadColumn(column, index)) : []
      ].flat();
      else return [
        isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.map((column, index) => __renderHeadColumn(column, index)) : [],
        ...days.value.map((day) => __renderHeadDay(day)),
        isRightColumnOptionsValid.value === true ? props.rightColumnOptions.map((column, index) => __renderHeadColumn(column, index)) : []
      ].flat();
    }
    function __renderHeadDaysEvents() {
      const columnCount = parseInt(String(props.columnCount), 10);
      if (days.value.length === 1 && columnCount > 0) return [...Array.apply(null, new Array(parseInt(String(props.columnCount), 10))).map((_, i) => i + columnCount).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex))];
      else return days.value.map((day) => __renderHeadDayEvent(day, 0));
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex ?? 0);
      scope.activeDate = activeDate;
      scope.droppable = dragOverHeadDayRef.value === day.date;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        ...(props.weekdayStyle || dayStyleDefault)({ scope }),
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        ref: (el) => {
          datesRef.value[day.date] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: day.date,
          resetValue: "",
          type: "head-day",
          scope
        }),
        onFocus: () => {
          if (isFocusable === true) focusRef.value = day.date;
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return {
            scope,
            event
          };
        })
      }, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") return [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)].filter((v) => v !== false);
      else if (props.dateHeader === "inline") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.dateHeader === "inverted") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-agenda__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [headDayEventSlot && headDayEventSlot({ scope })]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const scope = getScopeForSlot(day, 0);
      scope.shortWeekdayLabel = props.shortWeekdayLabel;
      return h("div", { class: {
        "q-calendar-agenda__head--weekday": true,
        ["q-calendar__" + props.weekdayAlign]: true,
        "q-calendar__ellipsis": true
      } }, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, props.shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", { class: "q-calendar__ellipsis" }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, Number(props.minWeekdayLabel)) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      return h("div", { class: {
        "q-calendar-agenda__head--date": true,
        ["q-calendar__" + props.dateAlign]: true
      } }, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const data = {
        class: {
          "q-calendar-agenda__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) emit("click-date", { scope });
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") event.preventDefault();
          }
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : renderButton$4(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-agenda__body" }, [__renderScrollArea()]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-agenda__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderDayContainer()]);
      else if (props.noScroll === true) return __renderPane();
      else return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-agenda__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderPane()]);
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-agenda__pane"
      }, [__renderDayContainer()]);
    }
    function __renderDayContainer() {
      const slot = slots["day-container"];
      return h("div", { class: "q-calendar-agenda__day-container" }, [
        isSticky.value === true && props.noHeader !== true && __renderHead(),
        h("div", { style: {
          display: "flex",
          flexDirection: "row",
          height: "100%"
        } }, [...__renderDays() || []].flat()),
        slot && slot({ scope: { days: days.value } })
      ]);
    }
    function __renderDays() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return [
        isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.map((column, index) => __renderColumn(column, index)) : [],
        ...Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((i) => __renderDay(days.value[0], 0, i)),
        isRightColumnOptionsValid.value === true ? props.rightColumnOptions.map((column, index) => __renderColumn(column, index)) : []
      ].flat();
      else return [
        isLeftColumnOptionsValid.value === true ? props.leftColumnOptions.map((column, index) => __renderColumn(column, index)) : [],
        ...days.value.map((day, index) => __renderDay(day, index, 0)),
        isRightColumnOptionsValid.value === true ? props.rightColumnOptions.map((column, index) => __renderColumn(column, index)) : []
      ].flat();
    }
    function __renderColumn(column, index) {
      const slot = slots.column;
      const scope = {
        column,
        days: days.value,
        index
      };
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const isFocusable = props.focusable === true && props.focusType.includes("day");
      const id = props.columnOptionsId !== void 0 ? column[props.columnOptionsId] : void 0;
      return h("div", {
        key: id,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-agenda__day": true,
          "q-column-day": true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          maxWidth: width,
          width
        },
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: id,
          resetValue: "",
          type: "column",
          scope
        }),
        ...getDefaultMouseEventHandlers2("-column", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope })]);
    }
    function __renderDay(day, _dayIndex, columnIndex) {
      const dayHeight = parseInt(String(props.dayHeight), 10);
      const dayMinHeight = parseInt(String(props.dayMinHeight), 10);
      const slot = slots.day;
      const scope = getScopeForSlot(day, columnIndex);
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      style.height = dayHeight > 0 ? convertToUnit(dayHeight) : "auto";
      if (dayMinHeight > 0) style.minHeight = convertToUnit(dayMinHeight);
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        class: {
          "q-calendar-agenda__day": true,
          ...getRelativeClasses(day)
        },
        style
      }, [slot && slot({ scope })]);
    }
    function __renderAgenda() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const agenda = withDirectives(h("div", {
        class: "q-calendar-agenda",
        key: startDate.value
      }, [hasWidth === true && isSticky.value !== true && props.noHeader !== true && __renderHead(), hasWidth === true && __renderBody()]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => agenda);
      return agenda;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
const { renderButton: renderButton$3 } = useButton();
var QCalendarDay_default = defineComponent({
  name: "QCalendarDay",
  directives: { ResizeObserver: ResizeObserverDirective },
  slots: Object,
  props: {
    ...useCommonProps,
    ...useIntervalProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-interval"),
    ...getRawMouseEvents("-head-intervals"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), headDayEventsParentRef = ref(), headDayEventsChildRef = ref(), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue || today()), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(""), dragOverInterval = ref(0), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") return "month-interval";
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { isSticky } = useCellWidth(props);
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, parsedEnd, dayFormatter, weekdayFormatter, ariaDateFormatter, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    function getFocusDate(value) {
      return value.match(/^\d{4}-\d{2}-\d{2}/)?.[0];
    }
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const { rootRef, scrollWidth, __renderCalendar } = useCalendar(props, __renderDaily, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, intervals, intervalFormatter, ariaDateTimeFormatter, parsedCellWidth, getIntervalClasses, showIntervalLabelDefault, styleDefault, getTimestampAtEventInterval, getTimestampAtEvent, getScopeForSlot, scrollToTime, heightToMinutes, timeDurationHeight, timeStartPos } = useInterval(props, {
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      const columnCount = parseInt(String(props.columnCount), 10);
      if (parsedView.value === "day" && columnCount > 1) return columnCount;
      else if (parsedView.value === "day" && props.maxDays && props.maxDays > 1) return props.maxDays;
      return days.value.length;
    });
    const intervalsWidth = computed(() => {
      if (rootRef.value) return parseInt(window.getComputedStyle(rootRef.value).getPropertyValue("--calendar-intervals-width"), 10);
      return 0;
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && intervalsWidth.value && parsedColumnCount.value) return (width - scrollWidth.value - intervalsWidth.value) / parsedColumnCount.value + "px";
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      if (getFocusDate(focusRef.value) !== val) focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) focusValue.value = parseTimestamp(val);
    });
    watch(focusValue, () => {
      if (focusRef.value && datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      headDayEventsParentRef.value = void 0;
      headDayEventsChildRef.value = void 0;
    });
    onMounted(() => {
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-day__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: { marginRight: scrollWidth.value + "px" }
      }, [__renderHeadIntervals(), __renderHeadDaysColumn()]);
    }
    function __renderHeadIntervals() {
      const slot = slots["head-intervals"];
      const scope = {
        timestamps: days.value,
        days: days.value,
        date: props.modelValue
      };
      return h("div", {
        class: {
          "q-calendar-day__head--intervals": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-head-intervals", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope })]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: { "q-calendar-day__head--days__column": true }
      }, [__renderHeadDaysRow(), __renderHeadDaysEventsRow()]);
    }
    function __renderHeadDaysRow() {
      return h("div", { class: { "q-calendar-day__head--days__weekdays": true } }, [...__renderHeadDays()]);
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      const columnCount = parseInt(String(props.columnCount), 10);
      nextTick(() => {
        if (headDayEventsChildRef.value && columnCount === 0 && window) try {
          const styles = window.getComputedStyle(headDayEventsChildRef.value);
          if (headDayEventsParentRef.value && headDayEventsParentRef.value.parentElement) {
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          }
        } catch {
        }
      });
      return h("div", { class: { "q-calendar-day__head--days__event": true } }, [slot && h("div", {
        ref: headDayEventsParentRef,
        class: "q-calendar__head-days-event-slot"
      }, [slot({ scope: {
        days: days.value,
        ref: headDayEventsChildRef
      } })]), ...__renderHeadDaysEvents()]);
    }
    function __renderHeadDays() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex));
      else return days.value.map((day) => __renderHeadDay(day, 0));
    }
    function __renderHeadDaysEvents() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex)).filter((node) => node !== void 0);
      else return days.value.map((day) => __renderHeadDayEvent(day, 0)).filter((node) => node !== void 0);
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.droppable = dragOverHeadDayRef.value === day.date;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false;
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...(props.weekdayStyle || dayStyleDefault)({ scope }),
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const key = day.date + (columnIndex !== void 0 ? "-" + columnIndex : "");
      return h("div", {
        key,
        ref: (el) => {
          datesRef.value[key] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-day__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onFocus: () => {
          if (isFocusable === true) focusRef.value = key;
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) emittedValue.value = day.date;
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return {
            scope,
            event
          };
        }),
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: day.date,
          resetValue: "",
          type: "head-day",
          scope
        })
      }, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderBefore(day, columnIndex),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderAfter(day, columnIndex),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") return [props.noDefaultHeaderText !== true ? __renderHeadWeekday(day) : [], props.noDefaultHeaderBtn !== true ? __renderHeadDayDate(day) : []].filter((node) => node !== void 0);
      else if (props.dateHeader === "inline") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.dateHeader === "inverted") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = getScopeForSlot(day, columnIndex);
      scope.activeDate = activeDate;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false;
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-day__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [headDayEventSlot && headDayEventSlot({ scope })]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const shortWeekdayLabel = props.shortWeekdayLabel === true;
      const scope = getScopeForSlot(day, 0);
      scope.shortWeekdayLabel = props.shortWeekdayLabel;
      scope.disabled = props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false;
      return h("div", { class: {
        "q-calendar-day__head--weekday": true,
        ["q-calendar__" + props.weekdayAlign]: true,
        "q-calendar__ellipsis": true
      } }, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", { class: "q-calendar-day__head--weekday-label q-calendar__ellipsis" }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, Number(props.minWeekdayLabel)) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      return h("div", { class: {
        "q-calendar-day__head--date": true,
        ["q-calendar__" + props.dateAlign]: true
      } }, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const data = {
        class: {
          "q-calendar-day__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) emit("click-date", { scope });
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") event.preventDefault();
          }
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : renderButton$3(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderColumnHeaderBefore(day, columnIndex) {
      const slot = slots["column-header-before"];
      if (slot) return h("div", { class: "q-calendar-day__column-header--before" }, [slot({ scope: {
        timestamp: day,
        columnIndex
      } })]);
    }
    function __renderColumnHeaderAfter(day, columnIndex) {
      const slot = slots["column-header-after"];
      if (slot) return h("div", { class: "q-calendar-day__column-header--after" }, [slot({ scope: {
        timestamp: day,
        columnIndex
      } })]);
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-day__body" }, [__renderScrollArea()]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-day__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [isSticky.value !== true && __renderBodyIntervals(), __renderDayContainer()]);
      else if (props.noScroll === true) return __renderPane();
      else return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-day__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderPane()]);
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-day__pane"
      }, [__renderBodyIntervals(), __renderDayContainer()]);
    }
    function __renderDayContainer() {
      const slot = slots["day-container"];
      return h("div", { class: "q-calendar-day__day-container" }, [
        isSticky.value === true && props.noHeader !== true && __renderHead(),
        h("div", { style: {
          display: "flex",
          flexDirection: "row"
        } }, [isSticky.value === true && __renderBodyIntervals(), ...__renderDays()]),
        slot && slot({ scope: { days: days.value } })
      ]);
    }
    function __renderDays() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((i) => __renderDay(days.value[0], 0, i));
      else return days.value.map((day, index) => __renderDay(day, index, 0));
    }
    function __renderDay(day, dayIndex, columnIndex) {
      const slot = slots["day-body"];
      const scope = getScopeForSlot(day, columnIndex);
      const width = isSticky.value === true ? props.cellWidth : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        class: {
          "q-calendar-day__day": true,
          ...getRelativeClasses(day)
        },
        style
      }, [...__renderDayIntervals(dayIndex, columnIndex), slot && slot({ scope })]);
    }
    function __renderDayIntervals(index, columnIndex) {
      return intervals.value[index].map((interval) => __renderDayInterval(interval, columnIndex));
    }
    function __renderDayInterval(interval, columnIndex) {
      const height = convertToUnit(props.intervalHeight);
      const styler = props.intervalStyle || styleDefault;
      const slotDayInterval = slots["day-interval"];
      const scope = getScopeForSlot(interval, columnIndex);
      scope.droppable = dragOverInterval.value === getDayTimeIdentifier(interval);
      const intervalClass = typeof props.intervalClass === "function" ? props.intervalClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("interval");
      const dateTime = getDateTime(interval);
      const style = {
        height,
        ...styler({ scope })
      };
      const data = {
        key: dateTime,
        ref: (el) => {
          datesRef.value[dateTime] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-day__day-interval": interval.minute === 0,
          "q-calendar-day__day-interval--section": interval.minute !== 0,
          ...intervalClass,
          ...getIntervalClasses(interval, Array.from(props.selectedDates), props.selectedStartEndDates),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverInterval,
          value: getDayTimeIdentifier(interval),
          resetValue: 0,
          type: "interval",
          scope
        }),
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onFocus: () => {
          if (isFocusable === true) focusRef.value = dateTime;
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            const scope2 = getScopeForSlot(interval, columnIndex);
            emittedValue.value = scope2.timestamp.date;
            if (emitListeners.value.onClickTime !== void 0) emit("click-time", {
              scope: scope2,
              event
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-time", (event) => {
          return {
            scope: getScopeForSlot(getTimestampAtEventInterval(event, interval, props.timeClicksClamped, times.now), columnIndex),
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateTimeFormatter.value(interval, false);
      return h("div", data, [slotDayInterval ? slotDayInterval({ scope }) : void 0, useFocusHelper()]);
    }
    function __renderBodyIntervals() {
      return h("div", {
        ariaHidden: "true",
        class: {
          "q-calendar-day__intervals-column": true,
          "q-calendar__ellipsis": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-interval", (event) => {
          return {
            scope: { timestamp: getTimestampAtEvent(event, parsedStart.value, props.timeClicksClamped, times.now) },
            event
          };
        })
      }, __renderIntervalLabels());
    }
    function __renderIntervalLabels() {
      return intervals.value[0].map((interval) => __renderIntervalLabel(interval));
    }
    function __renderIntervalLabel(interval) {
      const slotIntervalLabel = slots["interval-label"];
      const height = convertToUnit(props.intervalHeight);
      const short = props.shortIntervalLabel ?? false;
      const label = (props.showIntervalLabel || showIntervalLabelDefault)(interval) ? intervalFormatter.value(interval, short) : void 0;
      return h("div", {
        key: interval.time,
        class: {
          "q-calendar-day__interval": interval.minute === 0,
          "q-calendar-day__interval--section": interval.minute !== 0
        },
        style: { height }
      }, [h("div", { class: "q-calendar-day__interval--text q-calendar__overflow-wrap" }, [slotIntervalLabel ? slotIntervalLabel({ scope: {
        timestamp: interval,
        label
      } }) : label])]);
    }
    function __renderDaily() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const daily = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-day"
      }, [hasWidth === true && isSticky.value !== true && props.noHeader !== true && __renderHead(), hasWidth && __renderBody()]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => daily);
      return daily;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent,
      timeStartPos,
      timeDurationHeight,
      heightToMinutes,
      scrollToTime
    });
    return () => __renderCalendar();
  }
});
const useMonthProps = {
  dayHeight: {
    type: [Number, String],
    default: 0,
    validator: (v) => validateNumber(v)
  },
  dayMinHeight: {
    type: [Number, String],
    default: 0,
    validator: (v) => validateNumber(v)
  },
  dayStyle: Function,
  dayClass: Function,
  weekdayStyle: Function,
  weekdayClass: Function,
  dayPadding: String,
  minWeeks: {
    type: [Number, String],
    default: 1,
    validator: (v) => validateNumber(v)
  },
  shortMonthLabel: Boolean,
  showWorkWeeks: Boolean,
  showMonthLabel: {
    type: Boolean,
    default: true
  },
  showDayOfYearLabel: Boolean,
  enableOutsideDays: Boolean,
  noOutsideDays: Boolean,
  hover: Boolean,
  miniMode: {
    type: [Boolean, String],
    validator: (v) => [
      true,
      false,
      "auto"
    ].includes(v)
  },
  breakpoint: {
    type: [Number, String],
    default: "md",
    validator: (v) => [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ].includes(v) || validateNumber(v)
  },
  monthLabelSize: {
    type: String,
    default: "sm",
    validator: (v) => [
      "xxs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "xxl"
    ].includes(v) || !!v && v.length > 0
  }
};
function useMonth(props, emit, { times, parsedStart, parsedEnd, size, headerColumnRef }) {
  const parsedMinWeeks = computed(() => parseInt(props.minWeeks, 10));
  const parsedMinDays = computed(() => parsedMinWeeks.value * props.weekdays.length);
  const parsedMonthStart = computed(() => __getStartOfWeek(__getStartOfMonth(parsedStart.value)));
  const parsedMonthEnd = computed(() => __getEndOfWeek(__getEndOfMonth(parsedEnd.value)));
  const parsedCellWidth = computed(() => {
    let width = 0;
    if (props.cellWidth) width = Number(props.cellWidth);
    else if (size.width > 0 && headerColumnRef.value) width = headerColumnRef.value.offsetWidth / props.weekdays.length;
    return width;
  });
  const days = computed(() => createDayList(parsedMonthStart.value, parsedMonthEnd.value, times.today, props.weekdays, props.disabledBefore, props.disabledAfter, props.disabledWeekdays, props.disabledDays, Number.MAX_SAFE_INTEGER, parsedMinDays.value));
  const todayWeek = computed(() => {
    const day = times.today;
    return createDayList(__getStartOfWeek(day), __getEndOfWeek(day), day, props.weekdays, props.disabledBefore, props.disabledAfter, props.disabledWeekdays, props.disabledDays, props.weekdays.length, props.weekdays.length);
  });
  const monthFormatter = computed(() => createNativeLocaleFormatterUTC(props.locale, (_tms, short) => ({
    timeZone: "UTC",
    month: short ? "short" : "long"
  })));
  const parsedBreakpoint = computed(() => {
    switch (props.breakpoint) {
      case "xs":
        return 300;
      case "sm":
        return 350;
      case "md":
        return 400;
      case "lg":
        return 450;
      case "xl":
        return 500;
      default:
        return parseInt(props.breakpoint, 10);
    }
  });
  const parsedMonthLabelSize = computed(() => {
    switch (props.monthLabelSize) {
      case "xxs":
        return ".4em";
      case "xs":
        return ".6em";
      case "sm":
        return ".8em";
      case "md":
        return "1.0em";
      case "lg":
        return "1.2em";
      case "xl":
        return "1.4em";
      case "xxl":
        return "1.6em";
      default:
        return props.monthLabelSize;
    }
  });
  let firstTime = true;
  const isMiniMode = computed(() => {
    const val = props.miniMode === true || props.miniMode === "auto" && props.breakpoint !== void 0 && size.width < parsedBreakpoint.value;
    if (firstTime) {
      firstTime = false;
      emit("mini-mode", val);
    }
    return val;
  });
  watch(isMiniMode, (val) => {
    emit("mini-mode", val);
  });
  function __getStartOfWeek(day) {
    return getStartOfWeek(day, props.weekdays, times.today);
  }
  function __getEndOfWeek(day) {
    return getEndOfWeek(day, props.weekdays, times.today);
  }
  function __getStartOfMonth(day) {
    return getStartOfMonth(day);
  }
  function __getEndOfMonth(day) {
    return getEndOfMonth(day);
  }
  function isOutside(day) {
    const dayIdentifier = getDayIdentifier(day);
    return dayIdentifier < getDayIdentifier(parsedStart.value) || dayIdentifier > getDayIdentifier(parsedEnd.value);
  }
  return {
    parsedCellWidth,
    parsedMinWeeks,
    parsedMinDays,
    parsedMonthStart,
    parsedMonthEnd,
    parsedBreakpoint,
    parsedMonthLabelSize,
    days,
    todayWeek,
    isMiniMode,
    monthFormatter,
    isOutside
  };
}
function shouldAdjustWeekEventHeight(wrapperHeight, weekEventHeight, margin) {
  return weekEventHeight + margin > wrapperHeight;
}
const { renderButton: renderButton$2 } = useButton();
defineComponent({
  name: "QCalendarMonth",
  directives: { ResizeObserver: ResizeObserverDirective },
  slots: Object,
  props: {
    ...useCommonProps,
    ...useMonthProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    "mini-mode",
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day"),
    ...getRawMouseEvents("-head-workweek"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-workweek")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), weekEventRef = ref([]), weekRef = ref([]), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(), dragOverDayRef = ref(""), lastStart = ref(null), lastEnd = ref(null);
    const parsedView = computed(() => {
      return "month";
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { isSticky } = useCellWidth(props);
    watch(isSticky, () => {
    });
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, parsedEnd, dayFormatter, weekdayFormatter, ariaDateFormatter, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const computedStyles = computed(() => {
      const style = {};
      if (props.dayPadding !== void 0) style.padding = props.dayPadding;
      style.minWidth = computedWidth.value;
      style.maxWidth = computedWidth.value;
      style.width = computedWidth.value;
      return style;
    });
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const { rootRef, __renderCalendar } = useCalendar(props, __renderMonth, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, todayWeek, isMiniMode, parsedCellWidth, parsedMonthLabelSize, isOutside, monthFormatter } = useMonth(props, emit, {
      times,
      parsedStart,
      parsedEnd,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const workweekWidth = computed(() => {
      if (rootRef.value) return props.showWorkWeeks === true ? parseInt(window.getComputedStyle(rootRef.value).getPropertyValue(isMiniMode.value === true ? "--calendar-mini-work-week-width" : "--calendar-work-week-width"), 10) : 0;
      return 0;
    });
    const parsedColumnCount = computed(() => {
      return props.weekdays.length;
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && parsedColumnCount.value) return (width - workweekWidth.value) / parsedColumnCount.value + "px";
      }
      return 100 / parsedColumnCount.value + "%";
    });
    const isDayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("day") && isMiniMode.value !== true;
    });
    const isDateFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("date") && isDayFocusable.value !== true;
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) {
        focusValue.value = parseTimestamp(val);
        if (emittedValue.value !== val) emittedValue.value = val;
      }
    });
    watch(focusValue, () => {
      if (datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      weekEventRef.value = [];
      weekRef.value = [];
      nextTick(() => {
        __adjustForWeekEvents();
      });
    });
    onMounted(() => {
      __adjustForWeekEvents();
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function isCurrentWeek(week) {
      for (let i = 0; i < week.length; ++i) if (week[i].current === true) return { timestamp: week[i] };
      return { timestamp: false };
    }
    function __adjustForWeekEvents() {
      if (isMiniMode.value === true) return;
      if (props.dayHeight !== 0) return;
      if (slots.week === void 0) return;
      if (window) for (const row in weekEventRef.value) {
        const weekEvent = weekEventRef.value[row];
        if (weekEvent === void 0) continue;
        const wrapper = weekRef.value[row];
        if (wrapper === void 0) continue;
        const styles = window.getComputedStyle(weekEvent);
        const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        if (shouldAdjustWeekEventHeight(wrapper.clientHeight, weekEvent.clientHeight, margin)) wrapper.style.height = weekEvent.clientHeight + margin + "px";
      }
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-month__body" }, [...__renderWeeks()]);
    }
    function __renderHead() {
      return h("div", {
        role: "presentation",
        class: "q-calendar-month__head"
      }, [props.showWorkWeeks === true && __renderWorkWeekHead(), h("div", { class: "q-calendar-month__head--wrapper" }, [__renderHeadDaysRow()])]);
    }
    function __renderHeadDaysRow() {
      return h("div", {
        ref: headerColumnRef,
        class: { "q-calendar-month__head--weekdays": true }
      }, [...__renderHeadDays()]);
    }
    function __renderWorkWeekHead() {
      const slot = slots["head-workweek"];
      const scope = {
        start: parsedStart.value,
        end: parsedEnd.value,
        miniMode: isMiniMode.value
      };
      return h("div", {
        class: "q-calendar-month__head--workweek",
        ...getDefaultMouseEventHandlers2("-head-workweek", (event) => {
          return {
            scope,
            event
          };
        })
      }, slot ? slot({ scope }) : "#");
    }
    function __renderHeadDays() {
      return todayWeek.value.map((day, index) => __renderHeadDay(day, index));
    }
    function __renderHeadDay(day, index) {
      const headDaySlot = slots["head-day"];
      const filteredDays = days.value.filter((day2) => day2.weekday === day.weekday);
      const weekday = filteredDays[0].weekday;
      const scope = {
        activeDate: props.noActiveDate !== true && __isActiveDate(day),
        weekday,
        timestamp: day,
        days: filteredDays,
        index,
        miniMode: isMiniMode.value,
        droppable: dragOverHeadDayRef.value === Number(day.weekday),
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const width = computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...(props.weekdayStyle || dayStyleDefault)({ scope })
      };
      const data = {
        key: day.date + (index !== void 0 ? "-" + index : ""),
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-month__head--weekday": true,
          ...weekdayClass,
          "q-disabled-day disabled": scope.disabled === true,
          ["q-calendar__" + props.weekdayAlign]: true,
          "q-calendar__ellipsis": true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: Number(day.weekday),
          resetValue: -1,
          type: "head-day",
          scope
        }),
        onFocus: () => {
          if (isFocusable === true) focusRef.value = day.date;
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = weekdayFormatter.value(day, false);
      return h("div", data, [
        headDaySlot === void 0 && __renderHeadWeekdayLabel(day, props.shortWeekdayLabel || isMiniMode.value),
        headDaySlot !== void 0 && headDaySlot({ scope }),
        __renderHeadDayEvent(day, index),
        isFocusable === true && useFocusHelper()
      ]);
    }
    function __renderHeadDayEvent(day, index) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const filteredDays = days.value.filter((day2) => day2.weekday === day.weekday);
      const scope = {
        weekday: filteredDays[0].weekday,
        timestamp: day,
        days: filteredDays,
        index,
        miniMode: isMiniMode.value,
        activeDate,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const width = computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...(props.weekdayStyle || dayStyleDefault)({ scope })
      };
      return h("div", {
        key: "event-" + day.date + (index !== void 0 ? "-" + index : ""),
        class: { "q-calendar-month__head--event": true },
        style
      }, [headDayEventSlot !== void 0 && headDayEventSlot({ scope })]);
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", { class: "q-calendar__ellipsis" }, isMiniMode.value === true && props.shortWeekdayLabel === true || props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, Number(props.minWeekdayLabel)) : weekdayLabel);
    }
    function __renderWeeks() {
      const weekDays = props.weekdays.length;
      const weeks = [];
      for (let i = 0; i < days.value.length; i += weekDays) weeks.push(__renderWeek(days.value.slice(i, i + weekDays), i / weekDays));
      return weeks;
    }
    function __renderWeek(week, weekNum) {
      const slotWeek = slots.week;
      const scope = {
        week,
        weekdays: props.weekdays,
        miniMode: isMiniMode.value
      };
      const style = {};
      const dayHeight = parseInt(String(props.dayHeight), 10);
      const dayMinHeight = parseInt(String(props.dayMinHeight), 10);
      style.height = dayHeight > 0 && isMiniMode.value !== true ? convertToUnit(dayHeight) : "auto";
      if (dayMinHeight > 0 && isMiniMode.value !== true) style.minHeight = convertToUnit(dayMinHeight);
      const useAutoHeight = dayHeight === 0 && dayMinHeight === 0;
      return h("div", {
        key: week[0].date,
        ref: (el) => {
          weekRef.value[weekNum] = el;
        },
        class: {
          "q-calendar-month__week--wrapper": true,
          "q-calendar-month__week--auto-height": useAutoHeight
        },
        style
      }, [props.showWorkWeeks === true ? __renderWorkWeekGutter(week) : void 0, h("div", { class: "q-calendar-month__week" }, [h("div", { class: "q-calendar-month__week--days" }, week.map((day) => __renderDay(day))), isMiniMode.value !== true && slotWeek !== void 0 ? h("div", {
        ref: (el) => {
          weekEventRef.value[weekNum] = el;
        },
        class: "q-calendar-month__week--events"
      }, slotWeek({ scope })) : void 0])]);
    }
    function __renderWorkWeekGutter(week) {
      const slot = slots.workweek;
      const day = week.length > 2 ? week[2] : week[0];
      const { timestamp } = isCurrentWeek(week);
      const workweekLabel = Number(day.workweek).toLocaleString(props.locale);
      const scope = {
        workweekLabel,
        week,
        miniMode: isMiniMode.value
      };
      return h("div", {
        key: day.workweek,
        class: {
          "q-calendar-month__workweek": true,
          ...getRelativeClasses(timestamp !== false ? timestamp : day, false)
        },
        ...getDefaultMouseEventHandlers2("-workweek", (event) => {
          return {
            scope,
            event
          };
        })
      }, slot ? slot({ scope }) : workweekLabel);
    }
    function __renderDay(day) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const outside = isOutside(day);
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const hasMonth = outside === false && props.showMonthLabel === true && days.value.find((d) => d.month === day.month)?.day === day.day;
      const scope = {
        outside,
        timestamp: day,
        miniMode: isMiniMode.value,
        activeDate,
        hasMonth,
        droppable: dragOverDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const style = Object.assign({ ...computedStyles.value }, styler({ scope }), getDisabledStyle(day));
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const data = {
        key: day.date,
        ref: (el) => {
          if (isDayFocusable.value === true) datesRef.value[day.date] = el;
        },
        tabindex: isDayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-month__day": true,
          ...dayClass,
          ...getRelativeClasses(day, outside, Array.from(props.selectedDates), props.selectedStartEndDates, props.hover),
          "q-active-date": activeDate === true,
          disabled: props.enableOutsideDays !== true && outside === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style,
        onFocus: () => {
          if (isDayFocusable.value === true) focusRef.value = day.date;
        },
        onKeydown: (e) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
            if (emitListeners.value.onClickDay !== void 0 && isMiniMode.value !== true) emit("click-day", {
              scope,
              e
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-day", (event) => {
          return {
            scope,
            event
          };
        })
      };
      const dragAndDrop = getDragEventHandlers(props, {
        targetRef: dragOverDayRef,
        value: day.date,
        resetValue: "",
        type: "day",
        scope
      });
      if (outside !== true) Object.assign(data, dragAndDrop);
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return h("div", data, [
        __renderDayLabelContainer(day, outside, hasMonth),
        h("div", { class: { "q-calendar-month__day--content": true } }, slot ? slot({ scope }) : void 0),
        isDayFocusable.value === true && useFocusHelper()
      ]);
    }
    function __renderDayLabelContainer(day, outside, hasMonth) {
      let dayOfYearLabel, monthLabel;
      const children = [__renderDayLabel(day, outside)];
      if (isMiniMode.value !== true && hasMonth === true && size.width > 340) monthLabel = __renderDayMonth(day, outside);
      if (isMiniMode.value !== true && props.showDayOfYearLabel === true && monthLabel === void 0 && size.width > 300) dayOfYearLabel = __renderDayOfYearLabel(day, outside);
      if (props.dateAlign === "left") {
        dayOfYearLabel !== void 0 && children.push(dayOfYearLabel);
        monthLabel !== void 0 && children.push(monthLabel);
      } else if (props.dateAlign === "right") {
        dayOfYearLabel !== void 0 && children.unshift(dayOfYearLabel);
        monthLabel !== void 0 && children.unshift(monthLabel);
      } else {
        dayOfYearLabel = void 0;
        monthLabel = void 0;
      }
      return h("div", { class: {
        "q-calendar-month__day--label__wrapper": true,
        "q-calendar__ellipsis": true,
        ["q-calendar__" + props.dateAlign]: dayOfYearLabel === void 0 && monthLabel === void 0,
        "q-calendar__justify": dayOfYearLabel !== void 0 || monthLabel !== void 0
      } }, children);
    }
    function __renderDayLabel(day, outside) {
      if (outside === true && props.noOutsideDays === true) return;
      const dayLabel = dayFormatter.value(day, false);
      const dayLabelSlot = slots["head-day-label"];
      const dayBtnSlot = slots["head-day-button"];
      const selectedDate = props.selectedDates && Array.from(props.selectedDates).length > 0 && Array.from(props.selectedDates).includes(day.date);
      const scope = {
        dayLabel,
        timestamp: day,
        outside,
        activeDate: props.noActiveDate !== true && __isActiveDate(day),
        selectedDate,
        miniMode: isMiniMode.value,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const data = {
        key: day.date,
        ref: (el) => {
          if (isDateFocusable.value === true) datesRef.value[day.date] = el;
        },
        tabindex: isDateFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-month__day--label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDateFocusable.value === true
        },
        disabled: day.disabled === true || props.enableOutsideDays !== true && outside === true,
        onFocus: () => {
          if (isDateFocusable.value === true) focusRef.value = day.date;
        },
        onKeydown: (e) => {
          if (outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (isDateFocusable.value === true && outside !== true && day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) emit("click-date", {
              scope,
              event: e
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          event.stopPropagation();
          if (eventName === "click-date" || eventName === "contextmenu-date") emittedValue.value = day.date;
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return [dayBtnSlot ? dayBtnSlot({ scope }) : renderButton$2(props, data, dayLabelSlot ? dayLabelSlot({ scope }) : dayLabel), isDateFocusable.value === true && useFocusHelper()].filter((v) => v !== false);
    }
    function __renderDayOfYearLabel(day, outside) {
      if (outside === true && props.noOutsideDays === true) return;
      const slot = slots["day-of-year"];
      return h("span", { class: {
        "q-calendar-month__day--day-of-year": true,
        "q-calendar__ellipsis": true
      } }, slot ? slot({ scope: { timestamp: day } }) : day.doy);
    }
    function __renderDayMonth(day, outside) {
      if (outside === true && props.noOutsideDays === true) return;
      const slot = slots["month-label"];
      const monthLabel = monthFormatter.value(day, props.shortMonthLabel || size.width < 500);
      const scope = {
        monthLabel,
        timestamp: day,
        miniMode: isMiniMode.value
      };
      const style = {};
      if (isMiniMode.value !== true && parsedMonthLabelSize.value !== void 0) style.fontSize = parsedMonthLabelSize.value;
      return h("span", {
        class: "q-calendar-month__day--month q-calendar__ellipsis",
        style
      }, [slot ? slot({ scope }) : isMiniMode.value !== true ? monthLabel : void 0]);
    }
    function __renderMonth() {
      const { start, end } = renderValues.value;
      startDate.value = start.date;
      endDate.value = end.date;
      const hasWidth = size.width > 0;
      const weekly = withDirectives(h("div", {
        class: {
          "q-calendar-mini": isMiniMode.value === true,
          "q-calendar-month": true
        },
        key: startDate.value
      }, [hasWidth === true && props.noHeader !== true && __renderHead(), hasWidth === true && __renderBody()]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => weekly);
      return weekly;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
defineComponent({
  name: "QCalendarResource",
  slots: Object,
  props: {
    ...useCommonProps,
    ...useResourceProps,
    ...useIntervalProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    "update:model-resources",
    "resource-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-interval"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-time"),
    ...getRawMouseEvents("-head-resources"),
    ...getRawMouseEvents("-resource")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerRef = ref(null), headerColumnRef = ref(null), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), resourcesRef = ref({}), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(""), dragOverResource = ref(""), dragOverResourceInterval = ref(""), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") return "month-interval";
      return props.view;
    });
    const parsedCellWidth = computed(() => {
      return parseInt(String(props.cellWidth), 10);
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, parsedEnd, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const { rootRef, __renderCalendar } = useCalendar(props, __renderResource, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, intervals, intervalFormatter, styleDefault, scrollToTimeX, timeDurationWidth, timeStartPosX, widthToMinutes } = useInterval(props, {
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const parsedResourceHeight = computed(() => {
      const height = parseInt(String(props.resourceHeight), 10);
      if (height === 0) return "auto";
      return height;
    });
    const parsedResourceMinHeight = computed(() => {
      return parseInt(String(props.resourceMinHeight), 10);
    });
    const parsedIntervalHeaderHeight = computed(() => {
      return parseInt(String(props.intervalHeaderHeight), 10);
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) focusValue.value = parseTimestamp(val);
    });
    watch(focusValue, () => {
      if (datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      resourcesRef.value = {};
    });
    onMounted(() => {
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      const style = { height: convertToUnit(parsedIntervalHeaderHeight.value) };
      return h("div", {
        ref: headerRef,
        roll: "presentation",
        class: {
          "q-calendar-resource__head": true,
          "q-calendar__sticky": props.noSticky !== true
        },
        style
      }, [__renderHeadResource(), __renderHeadIntervals()]);
    }
    function __renderHeadResource() {
      const slot = slots["head-resources"];
      const height = convertToUnit(parsedIntervalHeaderHeight.value);
      const scope = {
        timestamps: intervals,
        date: props.modelValue,
        resources: props.modelResources
      };
      return h("div", {
        class: {
          "q-calendar-resource__head--resources": true,
          "q-calendar__sticky": props.noSticky !== true
        },
        style: { height },
        ...getDefaultMouseEventHandlers2("-head-resources", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope })]);
    }
    function __renderHeadIntervals() {
      return h("div", {
        ref: headerColumnRef,
        class: { "q-calendar-resource__head--intervals": true }
      }, [intervals.value.map((intervals2) => intervals2.map((interval, index) => __renderHeadInterval(interval, index)))]);
    }
    function __renderHeadInterval(interval, index) {
      const slot = slots["interval-label"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(interval);
      const width = convertToUnit(parsedCellWidth.value);
      const height = convertToUnit(parsedIntervalHeaderHeight.value);
      const short = props.shortIntervalLabel;
      const label = intervalFormatter.value(interval, short);
      const scope = {
        timestamp: interval,
        index,
        label,
        droppable: dragOverHeadDayRef.value === label
      };
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        height,
        ...(props.intervalStyle || dayStyleDefault)({ scope }),
        ...getDisabledStyle(interval)
      };
      const intervalClass = typeof props.intervalClass === "function" ? props.intervalClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("interval");
      return h("div", {
        key: label,
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__head--interval": true,
          ...getRelativeClasses(interval),
          ...intervalClass,
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: label,
          resetValue: "",
          type: "interval",
          scope
        }),
        onFocus: () => {
          if (isFocusable === true) focusRef.value = label;
        },
        ...getDefaultMouseEventHandlers2("-interval", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot ? slot({ scope }) : label, useFocusHelper()]);
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-resource__body" }, [__renderScrollArea()]);
    }
    function __renderScrollArea() {
      return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-resource__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderDayContainer()]);
    }
    function __renderResourcesError() {
      return h("div", {}, "No resources have been defined");
    }
    function __renderDayContainer() {
      return h("div", { class: "q-calendar-resource__day--container" }, [
        __renderHead(),
        props.modelResources === void 0 && __renderResourcesError(),
        props.modelResources !== void 0 && __renderBodyResources()
      ]);
    }
    function __renderBodyResources() {
      return h("div", { class: "q-calendar-resource__resources--body" }, __renderResources());
    }
    function __renderResources(resources = void 0, indentLevel = 0, expanded = true) {
      if (resources === void 0) resources = props.modelResources;
      return resources.map((resource, resourceIndex) => {
        return __renderResourceRow(resource, resourceIndex, indentLevel, resource.children !== void 0 ? resource.expanded : expanded);
      }).filter((v) => !!v);
    }
    function __renderResourceRow(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceRow = slots["resource-row"];
      const style = {};
      style.height = parsedResourceHeight.value === "auto" ? parsedResourceHeight.value : convertToUnit(parsedResourceHeight.value);
      if (parsedResourceMinHeight.value > 0) style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      const scope = {
        resource,
        resourceIndex,
        indentLevel,
        expanded
      };
      const resourceRow = h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        class: { "q-calendar-resource__resource--row": true },
        style
      }, [__renderResourceLabel(resource, resourceIndex, indentLevel, expanded), __renderResourceIntervals(resource, resourceIndex)]);
      if (resource.children !== void 0) return [resourceRow, h("div", { class: {
        "q-calendar__child": true,
        "q-calendar__child--expanded": expanded === true,
        "q-calendar__child--collapsed": expanded !== true
      } }, [__renderResources(resource.children, indentLevel + 1, expanded === false ? expanded : resource.expanded)])];
      return slotResourceRow ? slotResourceRow({ scope }).flat() : [resourceRow];
    }
    function __renderResourceLabel(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceLabel = slots["resource-label"];
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parsedResourceMinHeight.value > 0) style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      const styler = props.resourceStyle || styleDefault;
      const label = resource[props.resourceLabel];
      const isFocusable = props.focusable === true && props.focusType.includes("resource") && expanded === true;
      const dragValue = resource[props.resourceKey];
      const scope = {
        resource,
        timestamps: intervals,
        resourceIndex,
        indentLevel,
        label,
        droppable: dragOverResource.value === dragValue
      };
      const resourceClass = typeof props.resourceClass === "function" ? props.resourceClass({ scope }) : {};
      return h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        ref: (el) => {
          if (el instanceof HTMLElement) resourcesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__resource": indentLevel === 0,
          "q-calendar-resource__resource--section": indentLevel !== 0,
          ...resourceClass,
          "q-calendar__sticky": props.noSticky !== true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          ...style,
          ...styler({ scope })
        },
        ...getDragEventHandlers(props, {
          targetRef: dragOverResource,
          value: dragValue,
          resetValue: "",
          type: "resource",
          scope
        }),
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (isKeyCode2(e, [13, 32])) {
            if (emitListeners.value.onClickResource !== void 0) emit("click-resource", {
              scope,
              event: e
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-resource", (event) => {
          return {
            scope,
            event
          };
        })
      }, [[
        h("div", {
          class: {
            "q-calendar__parent": resource.children !== void 0,
            "q-calendar__parent--expanded": resource.children !== void 0 && resource.expanded === true,
            "q-calendar__parent--collapsed": resource.children !== void 0 && resource.expanded !== true
          },
          onClick: (e) => {
            e.stopPropagation();
            resource.expanded = !resource.expanded;
            emit("resource-expanded", {
              expanded: resource.expanded,
              scope
            });
          }
        }),
        h("div", {
          class: {
            "q-calendar-resource__resource--text": true,
            "q-calendar__ellipsis": true
          },
          style: { paddingLeft: 10 * indentLevel + 2 + "px" }
        }, [slotResourceLabel ? slotResourceLabel({ scope }) : label]),
        useFocusHelper()
      ]]);
    }
    function __renderResourceIntervals(resource, resourceIndex) {
      const slot = slots["resource-intervals"];
      const scope = {
        resource,
        timestamps: intervals,
        resourceIndex,
        timeStartPosX,
        timeDurationWidth
      };
      return h("div", { class: "q-calendar-resource__resource--intervals" }, [intervals.value.map((intervals2) => intervals2.map((interval) => __renderResourceInterval(resource, interval, resourceIndex))), slot && slot({ scope })]);
    }
    function __renderResourceInterval(resource, interval, resourceIndex) {
      const slot = slots["resource-interval"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(interval);
      const resourceKey = resource[props.resourceKey];
      const dragValue = interval.time + "-" + resourceKey;
      const isFocusable = props.focusable === true && props.focusType.includes("time");
      const scope = {
        activeDate,
        resource,
        timestamp: interval,
        resourceIndex,
        droppable: dragOverResourceInterval.value === dragValue
      };
      const styler = props.intervalStyle || dayStyleDefault;
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...styler({ scope }),
        ...getDisabledStyle(interval)
      };
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value === "auto" ? parsedResourceHeight.value : convertToUnit(parsedResourceHeight.value);
      if (parsedResourceMinHeight.value > 0) style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      return h("div", {
        key: dragValue,
        ref: (el) => {
          if (el instanceof HTMLElement) datesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-resource__resource--interval": true,
          ...getRelativeClasses(interval),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverResourceInterval,
          value: dragValue,
          resetValue: "",
          type: "time",
          scope
        }),
        onFocus: () => {
          if (isFocusable === true) focusRef.value = dragValue;
        },
        ...getDefaultMouseEventHandlers2("-time", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope }), useFocusHelper()]);
    }
    function __renderResource() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const resource = withDirectives(h("div", {
        class: "q-calendar-resource",
        key: startDate.value
      }, [hasWidth === true && __renderBody()]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => resource);
      return resource;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent,
      timeStartPosX,
      timeDurationWidth,
      widthToMinutes,
      scrollToTimeX
    });
    return () => __renderCalendar();
  }
});
const { renderButton: renderButton$1 } = useButton();
defineComponent({
  name: "QCalendarScheduler",
  directives: { ResizeObserver: ResizeObserverDirective },
  slots: Object,
  props: {
    ...useCommonProps,
    ...useSchedulerProps,
    ...useColumnProps,
    ...useMaxDaysProps,
    ...useTimesProps,
    ...useCellWidthProps,
    ...useNavigationProps
  },
  emits: [
    "update:model-value",
    "update:model-resources",
    "resource-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day-resource"),
    ...getRawMouseEvents("-head-resources"),
    ...getRawMouseEvents("-head-day"),
    ...getRawMouseEvents("-resource")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), headerColumnRef = ref(null), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), resourcesRef = ref({}), headDayEventsParentRef = ref(), headDayEventsChildRef = ref(), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(""), dragOverResource = ref(""), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") return "month-interval";
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { isSticky } = useCellWidth(props);
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, parsedEnd, dayFormatter, weekdayFormatter, ariaDateFormatter, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      parsedValue,
      times
    });
    const { rootRef, scrollWidth, __renderCalendar } = useCalendar(props, __renderScheduler, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, parsedCellWidth, styleDefault } = useInterval(props, {
      times,
      scrollArea,
      parsedStart,
      parsedEnd,
      maxDays: maxDaysRendered,
      size,
      headerColumnRef
    });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const parsedColumnCount = computed(() => {
      const columnCount = parseInt(String(props.columnCount), 10);
      if (parsedView.value === "day" && columnCount > 1) return columnCount;
      else if (parsedView.value === "day" && props.maxDays && props.maxDays > 1) return props.maxDays;
      return days.value.length;
    });
    const resourcesWidth = computed(() => {
      if (rootRef.value) return parseInt(window.getComputedStyle(rootRef.value).getPropertyValue("--calendar-resources-width"), 10);
      return 0;
    });
    const parsedResourceHeight = computed(() => {
      const height = parseInt(String(props.resourceHeight), 10);
      if (height === 0) return "auto";
      return height;
    });
    const parsedResourceMinHeight = computed(() => {
      return parseInt(String(props.resourceMinHeight), 10);
    });
    const computedWidth = computed(() => {
      if (rootRef.value) {
        const width = size.width || rootRef.value.getBoundingClientRect().width;
        if (width && resourcesWidth.value && parsedColumnCount.value) return (width - scrollWidth.value - resourcesWidth.value) / parsedColumnCount.value + "px";
      }
      return 100 / parsedColumnCount.value + "%";
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) focusValue.value = parseTimestamp(val);
    });
    watch(focusValue, () => {
      if (datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    watch(() => props.maxDays, (val) => {
      maxDaysRendered.value = val;
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
      headDayEventsParentRef.value = void 0;
      headDayEventsChildRef.value = void 0;
      resourcesRef.value = {};
    });
    onMounted(() => {
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-scheduler__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: { marginRight: scrollWidth.value + "px" }
      }, [__renderHeadResources(), __renderHeadDaysColumn()]);
    }
    function __renderHeadResources() {
      const slot = slots["head-resources"];
      const scope = {
        days: days.value,
        timestamps: days.value,
        date: props.modelValue,
        resources: props.modelResources
      };
      return h("div", {
        class: {
          "q-calendar-scheduler__head--resources": true,
          "q-calendar__sticky": isSticky.value === true
        },
        ...getDefaultMouseEventHandlers2("-head-resources", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope })]);
    }
    function __renderHeadDaysColumn() {
      return h("div", {
        ref: headerColumnRef,
        class: { "q-calendar-scheduler__head--days__column": true }
      }, [__renderHeadDaysRow(), __renderHeadDaysEventsRow()]);
    }
    function __renderHeadDaysRow() {
      return h("div", { class: { "q-calendar-scheduler__head--days__weekdays": true } }, [...__renderHeadDays()]);
    }
    function __renderHeadDaysEventsRow() {
      const slot = slots["head-days-events"];
      nextTick(() => {
        if (headDayEventsChildRef.value && parseInt(String(props.columnCount), 10) === 0 && window) try {
          const styles = window.getComputedStyle(headDayEventsChildRef.value);
          if (headDayEventsParentRef.value && headDayEventsParentRef.value.parentElement) {
            headDayEventsParentRef.value.parentElement.style.height = styles.height;
            headDayEventsParentRef.value.style.height = styles.height;
          }
        } catch {
        }
      });
      return h("div", { class: { "q-calendar-scheduler__head--days__event": true } }, [slot && h("div", {
        ref: headDayEventsParentRef,
        class: "q-calendar__head-days-event-slot"
      }, [slot({ scope: {
        timestamps: days.value,
        days: days.value,
        ref: headDayEventsChildRef
      } })]), ...__renderHeadDaysEvents()]);
    }
    function __renderHeadDays() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((columnIndex) => __renderHeadDay(days.value[0], columnIndex));
      else return days.value.map((day) => __renderHeadDay(day, 0));
    }
    function __renderHeadDaysEvents() {
      const columnCount = parseInt(String(props.columnCount), 10);
      const columnIndexStart = parseInt(String(props.columnIndexStart), 10);
      if (days.value.length === 1 && columnCount > 0) return Array.apply(null, new Array(columnCount)).map((_, i) => i + columnIndexStart).map((columnIndex) => __renderHeadDayEvent(days.value[0], columnIndex));
      else return days.value.map((day) => __renderHeadDayEvent(day, 0));
    }
    function __renderHeadDay(day, columnIndex) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: dragOverHeadDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false,
        columnIndex: columnIndex ?? 0
      };
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...(props.weekdayStyle || dayStyleDefault)({ scope }),
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("weekday");
      const key = day.date + (columnIndex !== void 0 ? "-" + columnIndex : "");
      return h("div", {
        key,
        ref: (el) => {
          if (el !== null) datesRef.value[key] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        onFocus: () => {
          if (isFocusable === true) focusRef.value = key;
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) emittedValue.value = day.date;
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return {
            scope,
            event
          };
        }),
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: day.date,
          resetValue: "",
          type: "head-day",
          scope
        })
      }, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderBefore(day, columnIndex),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        headDaySlot === void 0 && __renderColumnHeaderAfter(day, columnIndex),
        useFocusHelper()
      ]);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") return [props.noDefaultHeaderText !== true ? __renderHeadWeekday(day) : [], props.noDefaultHeaderBtn !== true ? __renderHeadDayDate(day) : []].flat();
      else if (props.dateHeader === "inline") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.dateHeader === "inverted") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
    }
    function __renderHeadDayEvent(day, columnIndex) {
      const headDayEventSlot = slots["head-day-event"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: dragOverHeadDayRef.value === day.date,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false,
        columnIndex: columnIndex ?? 0
      };
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        minWidth: width,
        ...getDisabledStyle(day)
      };
      if (isSticky.value === true) style.minWidth = width;
      return h("div", {
        key: "event-" + day.date + (columnIndex !== void 0 ? "-" + columnIndex : ""),
        class: {
          "q-calendar-scheduler__head--day__event": true,
          ...getRelativeClasses(day),
          "q-active-date": activeDate
        },
        style
      }, [headDayEventSlot && headDayEventSlot({ scope })]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const shortWeekdayLabel = props.shortWeekdayLabel === true;
      const scope = {
        timestamp: day,
        shortWeekdayLabel
      };
      return h("div", { class: {
        "q-calendar-scheduler__head--weekday": true,
        ["q-calendar__" + props.weekdayAlign]: true,
        "q-calendar__ellipsis": true
      } }, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", { class: "q-calendar-scheduler__head--weekday-label q-calendar__ellipsis" }, props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, Number(props.minWeekdayLabel)) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      return h("div", { class: {
        "q-calendar-scheduler__head--date": true,
        ["q-calendar__" + props.dateAlign]: true
      } }, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate
      };
      const data = {
        class: {
          "q-calendar-scheduler__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__focusable": true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) emit("click-date", { scope });
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") event.preventDefault();
          }
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return headDayButtonSlot ? h("div", [headDayButtonSlot({ scope })]) : renderButton$1(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderColumnHeaderBefore(day, columnIndex) {
      const slot = slots["column-header-before"];
      if (slot) return h("div", { class: "q-calendar-scheduler__column-header--before" }, [slot({ scope: {
        timestamp: day,
        columnIndex
      } })]);
    }
    function __renderColumnHeaderAfter(day, columnIndex) {
      const slot = slots["column-header-after"];
      if (slot) return h("div", { class: "q-calendar-scheduler__column-header--after" }, [slot({ scope: {
        timestamp: day,
        columnIndex
      } })]);
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-scheduler__body" }, [__renderScrollArea()]);
    }
    function __renderScrollArea() {
      if (isSticky.value === true) return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-scheduler__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [isSticky.value !== true && __renderDayResources(), __renderDayContainer()]);
      else if (props.noScroll === true) return __renderPane();
      else return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-scheduler__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderPane()]);
    }
    function __renderPane() {
      return h("div", {
        ref: pane,
        class: "q-calendar-scheduler__pane"
      }, [__renderDayContainer()]);
    }
    function __renderDayContainer() {
      return h("div", { class: "q-calendar-scheduler__day--container" }, [isSticky.value === true && props.noHeader !== true && __renderHead(), __renderResources()]);
    }
    function __renderResources(resources = void 0, indentLevel = 0, expanded = true) {
      if (resources === void 0) resources = props.modelResources;
      return resources.map((resource, resourceIndex) => {
        return __renderResourceRow(resource, resourceIndex, indentLevel, resource.children !== void 0 ? resource.expanded : expanded);
      }).flat();
    }
    function __renderResourceRow(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceRow = slots["resource-row"];
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (parsedResourceMinHeight.value > 0) style.minHeight = convertToUnit(parsedResourceMinHeight.value);
      const scope = {
        resource,
        resourceIndex,
        indentLevel,
        expanded
      };
      const resourceRow = h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        class: { "q-calendar-scheduler__resource--row": true },
        style
      }, [__renderResource(resource, resourceIndex, indentLevel, expanded), __renderDayResources(resource, resourceIndex, indentLevel, expanded)]);
      if (resource.children !== void 0) return [resourceRow, h("div", { class: {
        "q-calendar__child": true,
        "q-calendar__child--expanded": expanded === true,
        "q-calendar__child--collapsed": expanded !== true
      } }, [__renderResources(resource.children, indentLevel + 1, expanded === false ? expanded : resource.expanded)])];
      return slotResourceRow ? slotResourceRow({ scope }).flat() : [resourceRow];
    }
    function __renderResource(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slotResourceLabel = slots["resource-label"];
      const resourceMinHeight = parseInt(String(props.resourceMinHeight), 10);
      const style = {};
      style.height = resource.height !== void 0 ? convertToUnit(parseInt(resource.height, 10)) : parsedResourceHeight.value ? convertToUnit(parsedResourceHeight.value) : "auto";
      if (resourceMinHeight > 0) style.minHeight = convertToUnit(resourceMinHeight);
      const styler = props.resourceStyle || styleDefault;
      const label = resource[props.resourceLabel];
      const isFocusable = props.focusable === true && props.focusType.includes("resource") && expanded === true;
      const dragValue = resource[props.resourceKey];
      const scope = {
        resource,
        timestamps: days.value,
        days: days.value,
        resourceIndex,
        indentLevel,
        label,
        droppable: dragOverResource.value === dragValue
      };
      const resourceClass = typeof props.resourceClass === "function" ? props.resourceClass({ scope }) : {};
      return h("div", {
        key: resource[props.resourceKey] + "-" + resourceIndex,
        ref: (el) => {
          if (el !== null) resourcesRef.value[resource[props.resourceKey]] = el;
        },
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__resource": indentLevel === 0,
          "q-calendar-scheduler__resource--section": indentLevel !== 0,
          ...resourceClass,
          "q-calendar__sticky": isSticky.value === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style: {
          ...style,
          ...styler({ scope })
        },
        ...getDragEventHandlers(props, {
          targetRef: dragOverResource,
          value: dragValue,
          resetValue: "",
          type: "resource",
          scope
        }),
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            if (emitListeners.value.onClickResource !== void 0) emit("click-resource", {
              scope,
              event
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-resource", (event) => {
          return {
            scope,
            event
          };
        })
      }, [[
        h("div", {
          class: {
            "q-calendar__parent": resource.children !== void 0,
            "q-calendar__parent--expanded": resource.children !== void 0 && resource.expanded === true,
            "q-calendar__parent--collapsed": resource.children !== void 0 && resource.expanded !== true
          },
          onClick: (e) => {
            e.stopPropagation();
            resource.expanded = !resource.expanded;
            emit("resource-expanded", {
              expanded: resource.expanded,
              scope
            });
          }
        }),
        h("div", {
          class: {
            "q-calendar-scheduler__resource--text": true,
            "q-calendar__ellipsis": true
          },
          style: { paddingLeft: 10 * indentLevel + 2 + "px" }
        }, [slotResourceLabel ? slotResourceLabel({ scope }) : label]),
        useFocusHelper()
      ]]);
    }
    function __renderDayResources(resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slot = slots["resource-days"];
      const scope = {
        resource,
        resourceIndex,
        indentLevel,
        expanded,
        cellWidth: isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value,
        timestamps: days.value,
        days: days.value
      };
      const style = {};
      style.height = parseInt(String(props.resourceHeight), 10) > 0 ? convertToUnit(parseInt(String(props.resourceHeight), 10)) : "auto";
      if (parseInt(String(props.resourceMinHeight), 10) > 0) style.minHeight = convertToUnit(parseInt(String(props.resourceMinHeight), 10));
      return h("div", {
        class: "q-calendar-scheduler__resource--days",
        style
      }, [...__renderDays(resource, resourceIndex, indentLevel, expanded), slot && slot({ scope })]);
    }
    function __renderDays(resource, resourceIndex, indentLevel = 0, expanded = true) {
      if (days.value.length === 1 && parseInt(String(props.columnCount), 10) > 0) return Array.apply(null, new Array(parseInt(String(props.columnCount), 10))).map((_, i) => i + parseInt(String(props.columnIndexStart), 10)).map((columnIndex) => __renderDay(days.value[0], columnIndex, resource, resourceIndex, indentLevel, expanded));
      else return days.value.map((day) => __renderDay(day, 0, resource, resourceIndex, indentLevel, expanded));
    }
    function __renderDay(day, columnIndex, resource, resourceIndex, indentLevel = 0, expanded = true) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const dragValue = day.date + ":" + resource[props.resourceKey] + (columnIndex !== void 0 ? ":" + columnIndex : "");
      const scope = {
        timestamp: day,
        columnIndex,
        resource,
        resourceIndex,
        indentLevel,
        activeDate,
        droppable: dragOverResource.value === dragValue
      };
      const width = isSticky.value === true ? convertToUnit(parsedCellWidth.value) : computedWidth.value;
      const style = {
        width,
        maxWidth: width,
        ...styler({ scope }),
        ...getDisabledStyle(day)
      };
      style.height = parseInt(String(props.resourceHeight), 10) > 0 ? convertToUnit(parseInt(String(props.resourceHeight), 10)) : "auto";
      if (parseInt(String(props.resourceMinHeight), 10) > 0) style.minHeight = convertToUnit(parseInt(String(props.resourceMinHeight), 10));
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("day") && expanded === true;
      return h("div", {
        key: day.date + (columnIndex !== void 0 ? ":" + columnIndex : ""),
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-scheduler__day": indentLevel === 0,
          "q-calendar-scheduler__day--section": indentLevel !== 0,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverResource,
          value: dragValue,
          resetValue: "",
          type: "day",
          scope
        }),
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            emittedValue.value = scope.timestamp.date;
            if (emitListeners.value.onClickResource !== void 0) emit("click-resource", {
              scope,
              event
            });
          }
        },
        ...getDefaultMouseEventHandlers2("-day-resource", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope }), useFocusHelper()]);
    }
    function __renderResourcesError() {
      return h("div", {}, "No resources have been defined");
    }
    function __renderScheduler() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const hasResources = props.modelResources && props.modelResources.length > 0;
      const scheduler = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-scheduler"
      }, [
        hasWidth === true && hasResources === true && isSticky.value !== true && props.noHeader !== true && __renderHead(),
        hasWidth === true && hasResources === true && __renderBody(),
        hasResources === false && __renderResourcesError()
      ]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => scheduler);
      return scheduler;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
const useTaskProps = {
  modelValue: {
    type: String,
    default: today(),
    validator: (v) => v === "" || validateTimestamp(v)
  },
  modelTasks: {
    type: Array,
    default: () => []
  },
  modelTitle: {
    type: Array,
    default: () => []
  },
  modelFooter: {
    type: Array,
    default: () => []
  },
  taskKey: {
    type: [String, Number],
    default: "id"
  },
  weekdays: {
    type: Array,
    default: () => [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    validator: isValidWeekdays
  },
  dateType: {
    type: String,
    default: "round",
    validator: (v) => [
      "round",
      "rounded",
      "square"
    ].includes(v)
  },
  dateHeader: {
    type: String,
    default: "stacked",
    validator: (v) => [
      "stacked",
      "inline",
      "inverted"
    ].includes(v)
  },
  weekdayAlign: {
    type: String,
    default: "center",
    validator: (v) => [
      "left",
      "center",
      "right"
    ].includes(v)
  },
  dateAlign: {
    type: String,
    default: "center",
    validator: (v) => [
      "left",
      "center",
      "right"
    ].includes(v)
  },
  dayHeight: {
    type: [Number, String],
    default: 0,
    validator: validateNumber
  },
  dayMinHeight: {
    type: [Number, String],
    default: 40,
    validator: validateNumber
  },
  weekdayStyle: {
    type: Function,
    default: null
  },
  weekdayClass: {
    type: Function,
    default: null
  },
  dayStyle: {
    type: Function,
    default: null
  },
  dayClass: {
    type: Function,
    default: null
  },
  footerDayClass: {
    type: Function,
    default: null
  },
  view: {
    type: String,
    validator: (v) => [
      "day",
      "week",
      "month"
    ].includes(v)
  },
  viewCount: {
    type: Number,
    default: 1,
    validator: (v) => validateNumber(v) && v > 0
  },
  taskWidth: {
    type: Number,
    default: 200,
    validator: (v) => validateNumber(v) && v > 0
  }
};
function useTask(props, emit, { times }) {
  const parsedStartDate = computed(() => {
    if (!props.modelValue) throw new Error(`QCalendarTask: no modelValue provided`);
    if (props.view === "day") return parseTimestamp(props.modelValue);
    else if (props.view === "week") return getStartOfWeek(parseTimestamp(props.modelValue), props.weekdays, times.today);
    else if (props.view === "month") return getStartOfMonth(parseTimestamp(props.modelValue));
    else throw new Error(`QCalendarTask: unknown 'view' type (${props.view})`);
  });
  const parsedEndDate = computed(() => {
    if (!props.modelValue) throw new Error(`QCalendarTask: no modelValue provided`);
    if (props.view === "day") {
      if (props.viewCount === 1) return parsedStartDate.value;
      let end = copyTimestamp(parsedStartDate.value);
      end = addToDate(end, { day: props.viewCount - 1 });
      return end;
    } else if (props.view === "week") if (props.viewCount === 1) return getEndOfWeek(parseTimestamp(props.modelValue), props.weekdays, times.today);
    else {
      let end = copyTimestamp(parsedStartDate.value);
      end = addToDate(end, { day: (props.viewCount - 1) * TIME_CONSTANTS.DAYS_IN.WEEK });
      return getEndOfWeek(end, props.weekdays, times.today);
    }
    else if (props.view === "month") if (props.viewCount === 1) return getEndOfMonth(parseTimestamp(props.modelValue));
    else {
      let end = copyTimestamp(parsedStartDate.value);
      end = addToDate(end, { month: props.viewCount - 1 });
      return getEndOfMonth(end);
    }
    else throw new Error(`QCalendarTask: unknown 'view' type (${props.view})`);
  });
  return {
    days: computed(() => {
      return createDayList(parsedStartDate.value, parsedEndDate.value, times.today, props.weekdays, props.disabledBefore, props.disabledAfter, props.disabledWeekdays || [], props.disabledDays || [], Number.MAX_SAFE_INTEGER);
    }),
    parsedStartDate,
    parsedEndDate
  };
}
function isTaskHeadDayDroppable(dragOverHeadDay, day) {
  return dragOverHeadDay === day.date;
}
const { renderButton } = useButton();
defineComponent({
  name: "QCalendarTask",
  directives: { ResizeObserver: ResizeObserverDirective },
  slots: Object,
  props: {
    ...useTimesProps,
    ...useNavigationProps,
    ...useCellWidthProps,
    ...useMaxDaysProps,
    ...useCommonProps,
    ...useTaskProps
  },
  emits: [
    "update:model-value",
    "update:model-tasks",
    "update:model-title",
    "update:model-footer",
    "task-expanded",
    ...useCheckChangeEmits,
    ...useMoveEmits,
    ...getRawMouseEvents("-head-tasks"),
    ...getRawMouseEvents("-task"),
    ...getRawMouseEvents("-date"),
    ...getRawMouseEvents("-day"),
    ...getRawMouseEvents("-head-day")
  ],
  setup(props, { slots, emit, expose }) {
    const scrollArea = ref(null), pane = ref(null), direction = ref("next"), startDate = ref(props.modelValue || today()), endDate = ref("0000-00-00"), maxDaysRendered = ref(0), emittedValue = ref(props.modelValue), focusRef = ref(props.modelValue || today()), focusValue = ref(parsed(props.modelValue || today())), datesRef = ref({}), keyboardActive = ref(false), size = reactive({
      width: 0,
      height: 0
    }), dragOverHeadDayRef = ref(""), dragOverTask = ref(""), dragOverResource = ref(""), lastStart = ref(null), lastEnd = ref(null);
    watch(() => props.view, () => {
      maxDaysRendered.value = 0;
    });
    const parsedView = computed(() => {
      if (props.view === "month") return "month-interval";
      return props.view;
    });
    const vm = getCurrentInstance();
    if (vm === null) throw new Error("current instance is null");
    const { emitListeners } = useEmitListeners(vm);
    const { times, setCurrent, updateCurrent } = useTimes(props);
    updateCurrent();
    setCurrent();
    const { parsedStart, dayFormatter, weekdayFormatter, ariaDateFormatter, dayStyleDefault, getDisabledStyle, getRelativeClasses } = useCommon(props, {
      startDate,
      endDate,
      times
    });
    const parsedValue = computed(() => {
      return parseTimestamp(props.modelValue, times.now) || parsedStart.value || times.today;
    });
    focusValue.value = parsedValue.value;
    focusRef.value = parsedValue.value.date;
    const { renderValues } = useRenderValues(props, {
      parsedView,
      times,
      parsedValue
    });
    const { rootRef, __renderCalendar } = useCalendar(props, __renderTask, {
      scrollArea,
      pane,
      keyboardActive
    });
    const { days, parsedStartDate, parsedEndDate } = useTask(props, emit, { times });
    const { move } = useMove(props, {
      parsedView,
      parsedValue,
      direction,
      maxDays: maxDaysRendered,
      times,
      emittedValue,
      emit
    });
    const { getDefaultMouseEventHandlers: getDefaultMouseEventHandlers2 } = useMouseEvents(emit, emitListeners);
    const { checkChange } = useCheckChange(emit, {
      days,
      lastStart,
      lastEnd
    });
    const { isKeyCode: isKeyCode2 } = useEventUtils();
    const { tryFocus } = useNavigation(props, {
      rootRef,
      keyboardActive,
      focusRef,
      focusValue,
      datesRef,
      parsedView,
      emittedValue,
      direction,
      times
    });
    const isSticky = ref(true);
    const parsedCellWidth = computed(() => {
      if (props.cellWidth !== void 0) return parseInt(String(props.cellWidth), 10);
      return 150;
    });
    const isDayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("day");
    });
    const isDateFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("date") && isDayFocusable.value !== true;
    });
    const isWeekdayFocusable = computed(() => {
      return props.focusable === true && props.focusType.includes("weekday");
    });
    const parsedHeight = computed(() => {
      return parseInt(String(props.dayHeight), 10);
    });
    const parsedMinHeight = computed(() => {
      return parseInt(String(props.dayMinHeight), 10);
    });
    watch([days], checkChange, {
      deep: true,
      immediate: true
    });
    watch(() => props.modelValue, (val, oldVal) => {
      if (emittedValue.value !== val) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emittedValue.value = val;
      }
      focusRef.value = val;
    });
    watch(emittedValue, (val, oldVal) => {
      if (emittedValue.value !== props.modelValue) {
        if (props.animated === true) direction.value = getDayIdentifier(parsed(val)) >= getDayIdentifier(parsed(oldVal)) ? "next" : "prev";
        emit("update:model-value", val);
      }
    });
    watch(focusRef, (val) => {
      if (val) focusValue.value = parseTimestamp(val);
    });
    watch(focusValue, () => {
      if (focusRef.value && datesRef.value && datesRef.value[focusRef.value]) datesRef.value[focusRef.value].focus();
      else tryFocus();
    });
    onBeforeUpdate(() => {
      datesRef.value = {};
    });
    onMounted(() => {
    });
    function moveToToday() {
      move(0);
    }
    function next(amount = 1) {
      move(amount);
    }
    function prev(amount = 1) {
      move(-amount);
    }
    function __onResize({ width, height }) {
      size.width = width;
      size.height = height;
    }
    function __isActiveDate(day) {
      return day.date === emittedValue.value;
    }
    function __renderTaskDay(day, task, taskIndex) {
      const slot = slots.day;
      const styler = props.dayStyle || dayStyleDefault;
      const activeDate = props.noActiveDate !== true && parsedValue.value.date === day.date;
      const dragValue = task[props.taskKey];
      const scope = {
        timestamp: day,
        task,
        taskIndex,
        activeDate,
        droppable: dragOverResource.value === dragValue
      };
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width,
        ...styler({ scope }),
        ...getDisabledStyle(day)
      };
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      return h("div", {
        tabindex: isDayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__task--day": true,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style,
        onFocus: () => {
          if (isDayFocusable.value === true) ;
        },
        ...getDefaultMouseEventHandlers2("-day", (event) => {
          return {
            scope,
            event
          };
        }),
        ...getDragEventHandlers(props, {
          targetRef: dragOverResource,
          value: dragValue,
          resetValue: "",
          type: "day",
          scope
        })
      }, [slot && slot({ scope }), useFocusHelper()]);
    }
    function __renderTaskDays(task, taskIndex) {
      return days.value.map((day) => __renderTaskDay(day, task, taskIndex));
    }
    function __renderTaskDaysRow(task, taskIndex) {
      const slot = slots.days;
      const scope = {
        timestamps: days.value,
        days: days.value,
        task,
        taskIndex,
        cellWidth: parsedCellWidth.value
      };
      return h("div", { class: "q-calendar-task__task--days-row" }, [__renderTaskDays(task, taskIndex), slot && slot({ scope })]);
    }
    function __renderTaskItem(task, taskIndex, indentLevel = 0, expanded = true) {
      const slot = indentLevel === 0 ? slots.task : slots.subtask;
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        task,
        taskIndex,
        indentLevel,
        expanded,
        droppable: dragOverTask.value === task[props.taskKey]
      };
      const width = convertToUnit(props.taskWidth);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const isFocusable = props.focusable === true && props.focusType.includes("task");
      return h("div", {
        tabindex: isFocusable === true ? 0 : -1,
        class: {
          "q-calendar-task__task--item": true,
          "q-calendar__sticky": isSticky.value === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style,
        ...getDragEventHandlers(props, {
          targetRef: dragOverTask,
          value: task[props.taskKey],
          resetValue: "",
          type: "task",
          scope
        }),
        onKeydown: (event) => {
          if (isKeyCode2(event, [13, 32])) {
            event.stopPropagation();
            event.preventDefault();
          }
        },
        onKeyup: (event) => {
          if (isKeyCode2(event, [13, 32]) && emitListeners.value.onClickTask !== void 0) emit("click-task", {
            scope,
            event
          });
        },
        ...getDefaultMouseEventHandlers2("-task", (event) => {
          return {
            scope,
            event
          };
        })
      }, [
        h("div", { style: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 10 + 10 * indentLevel + "px"
        } }, [h("div", {
          class: {
            "q-calendar__parent": task.children !== void 0,
            "q-calendar__parent--expanded": task.children !== void 0 && task.expanded === true,
            "q-calendar__parent--collapsed": task.children !== void 0 && task.expanded !== true
          },
          onClick: (e) => {
            e.stopPropagation();
            task.expanded = !task.expanded;
            emit("task-expanded", {
              expanded: task.expanded,
              scope
            });
          }
        })]),
        slot && slot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderTaskRow(task, taskIndex, indentLevel = 0, expanded = true) {
      const height = task.height !== void 0 ? convertToUnit(parseInt(task.height, 10)) : parsedHeight.value > 0 ? convertToUnit(parsedHeight.value) : "auto";
      const minHeight = parsedMinHeight.value > 0 ? convertToUnit(parsedMinHeight.value) : void 0;
      const style = { height };
      if (minHeight !== void 0) style.minHeight = minHeight;
      const taskRow = h("div", {
        key: task[props.taskKey] + "-" + taskIndex,
        class: {
          "q-calendar-task__task": indentLevel === 0,
          "q-calendar-task__task--section": indentLevel !== 0
        },
        style
      }, [__renderTaskItem(task, taskIndex, indentLevel, expanded), __renderTaskDaysRow(task, taskIndex)]);
      if (task.children !== void 0) return [taskRow, h("div", { class: {
        "q-calendar__child": true,
        "q-calendar__child--expanded": expanded === true,
        "q-calendar__child--collapsed": expanded !== true
      } }, [__renderTasks(task.children, indentLevel + 1, expanded === false ? expanded : task.expanded)])];
      return [taskRow];
    }
    function __renderTasks(tasks = void 0, indentLevel = 0, expanded = true) {
      if (tasks === void 0) tasks = props.modelTasks;
      return tasks.map((task, taskIndex) => {
        return __renderTaskRow(task, taskIndex, indentLevel, task.children !== void 0 ? task.expanded : expanded);
      }).flat();
    }
    function __renderTasksContainer() {
      return h("div", { class: {
        "q-calendar-task__task--container": true,
        "q-calendar__sticky": isSticky.value === true
      } }, [__renderTasks()]);
    }
    function __renderFooterTask(task, index) {
      const slot = slots["footer-task"];
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        footer: task,
        index
      };
      const width = convertToUnit(props.taskWidth);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      return h("div", {
        class: {
          "q-calendar-task__footer--task": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style
      }, [slot && slot({ scope })]);
    }
    function __renderFooterDay(day, task, index) {
      const slot = slots["footer-day"];
      const scope = {
        timestamp: day,
        footer: task,
        index
      };
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      return h("div", {
        class: {
          "q-calendar-task__footer--day": true,
          ...typeof props.footerDayClass === "function" ? props.footerDayClass({ scope }) : {},
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDayFocusable.value === true
        },
        style
      }, [slot && slot({ scope })]);
    }
    function __renderFooterDays(task, index) {
      return h("div", { class: "q-calendar-task__footer--day-wrapper" }, [days.value.map((day) => __renderFooterDay(day, task, index))]);
    }
    function __renderFooterRows() {
      const isFocusable = props.focusable === true && props.focusType.includes("task");
      return props.modelFooter.map((task, index) => {
        return h("div", { class: {
          "q-calendar-task__footer--wrapper": true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        } }, { default: () => [__renderFooterTask(task, index), __renderFooterDays(task, index)] });
      });
    }
    function __renderFooter() {
      return h("div", { class: {
        "q-calendar-task__footer": true,
        "q-calendar__sticky": isSticky.value === true
      } }, __renderFooterRows());
    }
    function __renderContainer() {
      return h("div", { class: { "q-calendar-task__container": true } }, [
        props.noHeader !== true && __renderHead(),
        __renderTasksContainer(),
        __renderFooter()
      ]);
    }
    function __renderHeadTask() {
      const slot = slots["head-tasks"];
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value
      };
      const width = convertToUnit(parseInt(String(props.taskWidth), 10));
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      return h("div", {
        class: {
          "q-calendar-task__head--tasks": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style,
        ...getDefaultMouseEventHandlers2("-head-tasks", (event) => {
          return {
            scope,
            event
          };
        })
      }, [slot && slot({ scope })]);
    }
    function __renderTitleTask(title, index) {
      const slot = slots["title-task"];
      const width = convertToUnit(parseInt(String(props.taskWidth), 10));
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const scope = {
        start: parsedStartDate.value,
        end: parsedEndDate.value,
        cellWidth: width,
        title,
        index
      };
      return h("div", {
        class: {
          "q-calendar-task__title--task": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style
      }, [slot && slot({ scope })]);
    }
    function __renderHeadWeekday(day) {
      const slot = slots["head-weekday-label"];
      const scope = {
        activeDate: props.noActiveDate !== true && __isActiveDate(day),
        timestamp: day,
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      return h("div", { class: {
        "q-calendar-task__head--weekday": true,
        ["q-calendar__" + props.weekdayAlign]: true,
        "q-calendar__ellipsis": true
      } }, slot && slot({ scope }) || __renderHeadWeekdayLabel(day, props.shortWeekdayLabel));
    }
    function __renderHeadWeekdayLabel(day, shortWeekdayLabel) {
      const weekdayLabel = weekdayFormatter.value(day, shortWeekdayLabel || props.weekdayBreakpoints[0] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[0]);
      return h("span", { class: "q-calendar__ellipsis" }, props.weekdayBreakpoints && Array.isArray(props.weekdayBreakpoints) && props.weekdayBreakpoints.length > 1 && props.weekdayBreakpoints[1] && props.weekdayBreakpoints[1] > 0 && parsedCellWidth.value <= props.weekdayBreakpoints[1] ? minCharWidth(weekdayLabel, Number(props.minWeekdayLabel)) : weekdayLabel);
    }
    function __renderHeadDayDate(day) {
      return h("div", { class: {
        "q-calendar-task__head--date": true,
        ["q-calendar__" + props.dateAlign]: true
      } }, __renderHeadDayBtn(day));
    }
    function __renderHeadDayBtn(day) {
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const dayLabel = dayFormatter.value(day, false);
      const headDayLabelSlot = slots["head-day-label"];
      const headDayButtonSlot = slots["head-day-button"];
      const scope = {
        dayLabel,
        timestamp: day,
        activeDate
      };
      const data = {
        key: day.date,
        tabindex: isDateFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__head--day__label": true,
          "q-calendar__button": true,
          "q-calendar__button--round": props.dateType === "round",
          "q-calendar__button--rounded": props.dateType === "rounded",
          "q-calendar__button--bordered": day.current === true,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isDateFocusable.value === true
        },
        disabled: day.disabled,
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            emittedValue.value = day.date;
            if (emitListeners.value.onClickDate !== void 0) emit("click-date", { scope });
          }
        },
        ...getDefaultMouseEventHandlers2("-date", (event, eventName) => {
          if (eventName === "click-date" || eventName === "contextmenu-date") {
            emittedValue.value = day.date;
            if (eventName === "click-date") event.preventDefault();
          }
          return {
            scope,
            event
          };
        })
      };
      if (props.noAria !== true) data.ariaLabel = ariaDateFormatter.value(day, false);
      return headDayButtonSlot ? headDayButtonSlot({ scope }) : renderButton(props, data, headDayLabelSlot ? headDayLabelSlot({ scope }) : dayLabel);
    }
    function __renderDateHeader(day) {
      if (props.dateHeader === "stacked") return [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)].filter((v) => v !== false);
      else if (props.dateHeader === "inline") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderText !== true && __renderHeadWeekday(day), props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day)]);
      else if (props.dateHeader === "inverted") if (props.weekdayAlign === "left" && props.dateAlign === "right") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else if (props.weekdayAlign === "right" && props.dateAlign === "left") return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
      else return h("div", { class: "q-calendar__header--inline" }, [props.noDefaultHeaderBtn !== true && __renderHeadDayDate(day), props.noDefaultHeaderText !== true && __renderHeadWeekday(day)]);
    }
    function __renderTitleDay(day, title, index) {
      const slot = slots["title-day"];
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width
      };
      const scope = {
        timestamp: day,
        title,
        index,
        cellWidth: parsedCellWidth.value
      };
      const dayClass = typeof props.dayClass === "function" ? props.dayClass({ scope }) : {};
      const isFocusable = props.focusable === true && props.focusType.includes("day");
      return h("div", {
        class: {
          "q-calendar-task__title--day": true,
          ...dayClass,
          ...getRelativeClasses(day),
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isFocusable === true
        },
        style
      }, [slot && slot({ scope }), useFocusHelper()]);
    }
    function __renderHeadDay(day) {
      const headDaySlot = slots["head-day"];
      const headDateSlot = slots["head-date"];
      const activeDate = props.noActiveDate !== true && __isActiveDate(day);
      const scope = {
        timestamp: day,
        activeDate,
        droppable: isTaskHeadDayDroppable(dragOverHeadDayRef.value, day),
        disabled: props.disabledWeekdays ? props.disabledWeekdays.includes(Number(day.weekday)) : false
      };
      const styler = props.weekdayStyle || dayStyleDefault;
      const weekdayClass = typeof props.weekdayClass === "function" ? props.weekdayClass({ scope }) : {};
      const width = convertToUnit(parsedCellWidth.value);
      const style = {
        width,
        minWidth: width,
        maxWidth: width,
        ...styler({ scope }),
        ...getDisabledStyle(day)
      };
      const key = day.date;
      return h("div", {
        key,
        ref: (el) => {
          datesRef.value[key] = el;
        },
        tabindex: isWeekdayFocusable.value === true ? 0 : -1,
        class: {
          "q-calendar-task__head--day": true,
          ...weekdayClass,
          ...getRelativeClasses(day),
          "q-active-date": activeDate,
          "q-calendar__hoverable": props.hoverable === true,
          "q-calendar__focusable": isWeekdayFocusable.value === true
        },
        style,
        onFocus: () => {
          if (isWeekdayFocusable.value === true) focusRef.value = key;
        },
        onKeydown: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) {
            e.stopPropagation();
            e.preventDefault();
          }
        },
        onKeyup: (e) => {
          if (day.disabled !== true && isKeyCode2(e, [13, 32])) emittedValue.value = day.date;
        },
        ...getDefaultMouseEventHandlers2("-head-day", (event) => {
          return {
            scope,
            event
          };
        }),
        ...getDragEventHandlers(props, {
          targetRef: dragOverHeadDayRef,
          value: day.date,
          resetValue: "",
          type: "head-day",
          scope
        })
      }, [
        headDaySlot !== void 0 && headDaySlot({ scope }),
        headDaySlot === void 0 && __renderDateHeader(day),
        headDaySlot === void 0 && headDateSlot && headDateSlot({ scope }),
        useFocusHelper()
      ]);
    }
    function __renderHeadDays() {
      return days.value.map((day) => __renderHeadDay(day));
    }
    function __renderTitleDays(title, index) {
      return days.value.map((day) => __renderTitleDay(day, title, index));
    }
    function __renderHeadDaysRow() {
      return h("div", { class: { "q-calendar-task__head--days": true } }, [...__renderHeadDays()]);
    }
    function __renderTitleDaysRow(title, index) {
      return h("div", { class: { "q-calendar-task__title--days": true } }, [...__renderTitleDays(title, index)]);
    }
    function __renderHead() {
      return h("div", {
        roll: "presentation",
        class: {
          "q-calendar-task__head": true,
          "q-calendar__sticky": isSticky.value === true
        },
        style: {}
      }, [h("div", { style: {
        position: "relative",
        display: "flex"
      } }, [__renderHeadTask(), __renderHeadDaysRow()]), props.modelTitle.map((title, index) => h("div", {
        class: "q-calendar-task__title",
        style: {
          position: "relative",
          display: "flex"
        }
      }, [__renderTitleTask(title, index), __renderTitleDaysRow(title, index)]))]);
    }
    function __renderBody() {
      return h("div", { class: "q-calendar-task__body" }, [__renderScrollArea()]);
    }
    function __renderScrollArea() {
      return h("div", {
        ref: scrollArea,
        class: {
          "q-calendar-task__scroll-area": true,
          "q-calendar__scroll": true
        }
      }, [__renderContainer()]);
    }
    function __renderTask() {
      const { start, end, maxDays } = renderValues.value;
      if (startDate.value !== start.date || endDate.value !== end.date || maxDaysRendered.value !== maxDays) {
        startDate.value = start.date;
        endDate.value = end.date;
        maxDaysRendered.value = maxDays;
      }
      const hasWidth = size.width > 0;
      const weekly = withDirectives(h("div", {
        key: startDate.value,
        class: "q-calendar-task"
      }, [hasWidth === true && __renderBody()]), [[ResizeObserverDirective, __onResize]]);
      if (props.animated === true) return h(Transition, {
        name: "q-calendar--" + (direction.value === "prev" ? props.transitionPrev : props.transitionNext),
        appear: true
      }, () => weekly);
      return weekly;
    }
    expose({
      prev,
      next,
      move,
      moveToToday,
      updateCurrent
    });
    return () => __renderCalendar();
  }
});
const QCalendarDay = QCalendarDay_default;
({
  ...helpers_exports
});
const _hoisted_1 = ["loading"];
const _hoisted_2 = { class: "col-12" };
const _hoisted_3 = {
  class: "calendar-nav",
  style: { "display": "flex", "gap": "1rem", "align-items": "center" }
};
const _hoisted_4 = { style: { "font-size": "1.5rem" } };
const _hoisted_5 = { class: "col-9" };
const _hoisted_6 = { class: "subcontent" };
const _hoisted_7 = { class: "row justify-center" };
const _hoisted_8 = { style: { "display": "flex", "width": "100%", "height": "500px" } };
const _hoisted_9 = { class: "col-3" };
const _hoisted_10 = { class: "calendar-sidebar" };
const _hoisted_11 = { class: "sidebar-list" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = {
  key: 0,
  class: "sidebar-event-date"
};
const _hoisted_14 = {
  key: 1,
  class: "sidebar-event-time"
};
const _hoisted_15 = { class: "page-title q-mb-none flex items-center text-primary" };
const _hoisted_16 = { style: { "font-size": "1.2rem", "font-weight": "400", "margin-bottom": "30px" } };
const _hoisted_17 = { style: { "display": "flex", "gap": "16px", "justify-content": "center", "margin-bottom": "32px" } };
const _sfc_main = {
  __name: "CalendarPage",
  setup(__props) {
    var loading = ref(true);
    const dialog = ref(false);
    const selectedEvent = ref(null);
    function openEventDialog(event) {
      selectedEvent.value = event;
      dialog.value = true;
    }
    const selectedDate = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
    const nowDate = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
    const events = ref([
      {
        id: null,
        candidate_id: null,
        title: "",
        details: "",
        start: "",
        date: "",
        color: "orange",
        status: "",
        appointment_type: null
      }
    ]);
    function getMonthYear(dateStr) {
      const date = new Date(dateStr);
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ];
      return `${meses[date.getMonth()]} ${date.getFullYear()}`;
    }
    function addDays(dateStr, days) {
      const date = new Date(dateStr);
      date.setDate(date.getDate() + days);
      return date.toISOString().slice(0, 10);
    }
    function prevWeek() {
      selectedDate.value = addDays(selectedDate.value, -7);
    }
    async function fetchEvents() {
      try {
        loading.value = true;
        events.value = (await api.get("events")).data.data;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }
    function nextWeek() {
      selectedDate.value = addDays(selectedDate.value, 7);
    }
    const onChange = (event) => {
      console.log("Value changed!", event);
    };
    const onMoved = (event) => {
      console.log("View moved!", event);
    };
    const onClickDate = (event) => {
      console.log("Clicked date!", event);
    };
    const onClickTime = (event) => {
      console.log("Clicked time!", event);
    };
    const onClickInterval = (event) => {
      console.log("Clicked interval!", event);
    };
    const onClickHeadIntervals = (event) => {
      console.log("Clicked head intervals!", event);
    };
    const onClickHeadDay = (event) => {
      console.log("Clicked head day!", event);
    };
    function getEventStyle(event) {
      const start = event.start.split(" ")[1];
      const [h2, m] = start.split(":").map(Number);
      const hourStart = 0;
      const hourEnd = 24;
      const totalHours = hourEnd - hourStart;
      const minutesFromStart = (h2 - hourStart) * 60 + m;
      const top = Math.max(0, minutesFromStart / (totalHours * 60) * 100);
      const height = 6;
      return {
        top: `calc(${top}% - ${height / 2}px)`
      };
    }
    const getEvents = (date) => {
      return events.value.filter((event) => {
        return event.start.split(" ")[0] === date;
      });
    };
    onMounted(async () => {
      await fetchEvents();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "calendar-page row q-col-gutter-md",
        loading: unref(loading)
      }, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(QBtn, {
              color: "primary",
              label: "<",
              onClick: prevWeek
            }),
            createVNode(QBtn, {
              color: "primary",
              label: ">",
              onClick: nextWeek
            }),
            createBaseVNode("span", _hoisted_4, toDisplayString(getMonthYear(selectedDate.value)), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                createVNode(unref(QCalendarDay), {
                  ref: "calendar",
                  modelValue: selectedDate.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedDate.value = $event),
                  view: "week",
                  locale: "es-ES",
                  now: nowDate.value,
                  loading: unref(loading),
                  animated: "",
                  bordered: "",
                  "transition-next": "slide-left",
                  "transition-prev": "slide-right",
                  onChange,
                  onMoved,
                  onClickDate,
                  onClickTime,
                  onClickInterval,
                  onClickHeadIntervals,
                  onClickHeadDay
                }, {
                  "day-body": withCtx(({ scope }) => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(getEvents(scope.timestamp.date), (event) => {
                      return openBlock(), createElementBlock("div", {
                        key: event.id,
                        class: "calendar-event-badge",
                        style: normalizeStyle(getEventStyle(event))
                      }, [
                        createVNode(QBadge, {
                          color: event.color,
                          class: "q-mb-xs q-mr-xs"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(event.title) + " " + toDisplayString(event.type_id == 1 ? " (Médica)" : event.type_id == 2 ? " (Psicología)" : event.type_id == 3 ? " (Nutrición)" : " (Otra)"), 1)
                          ]),
                          _: 2
                        }, 1032, ["color"])
                      ], 4);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "now", "loading"])
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9, [
          createBaseVNode("div", _hoisted_10, [
            _cache[6] || (_cache[6] = createBaseVNode("h4", { class: "sidebar-title" }, "Próximas Citas", -1)),
            createBaseVNode("ul", _hoisted_11, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (event) => {
                return openBlock(), createElementBlock("li", {
                  key: event.id,
                  class: "sidebar-list-item",
                  onClick: ($event) => openEventDialog(event),
                  style: { "cursor": "pointer" }
                }, [
                  event.status == "pending" ? (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(event.date), 1)) : createCommentVNode("", true),
                  event.status == "pending" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    createTextVNode(toDisplayString(event.title), 1),
                    _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
                    createBaseVNode("span", null, toDisplayString(event.details), 1),
                    createTextVNode(toDisplayString(event.type_id == 1 ? " (Área: Médica)" : event.type_id == 2 ? " (Área: Psicología)" : event.type_id == 3 ? " (Área: Nutrición)" : " (Otra)"), 1)
                  ])) : createCommentVNode("", true)
                ], 8, _hoisted_12);
              }), 128)),
              createVNode(QDialog, {
                modelValue: dialog.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dialog.value = $event)
              }, {
                default: withCtx(() => [
                  selectedEvent.value ? (openBlock(), createBlock(QCard, {
                    key: 0,
                    style: { "min-width": "350px", "max-width": "420px", "text-align": "center" }
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, { style: { "border-bottom": "1px solid #d9d9d9" } }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_15, [
                            createVNode(QIcon, {
                              name: "calendar_today",
                              class: "q-mr-md"
                            }),
                            _cache[3] || (_cache[3] = createTextVNode(" Cita "))
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(QCardSection, { class: "q-gutter-y-md" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_16, toDisplayString(selectedEvent.value.title || "Nombre Completo del Beneficiario"), 1),
                          createBaseVNode("div", _hoisted_17, [
                            selectedEvent.value.appointment_type == 2 || selectedEvent.value.appointment_type == 0 ? (openBlock(), createBlock(QBtn, {
                              key: 0,
                              class: "q-mr-sm",
                              unelevated: "",
                              outline: "",
                              color: "primary",
                              to: {
                                path: `/historia-clinica/${selectedEvent.value.candidate_id}`,
                                query: {
                                  type_id: `${selectedEvent.value.type_id}`,
                                  //Work area id
                                  id: `${selectedEvent.value.id}`,
                                  appointment_type: 0,
                                  // 0 = Cita, 1 = Seguimiento
                                  ro: 0
                                }
                              }
                            }, {
                              default: withCtx(() => _cache[4] || (_cache[4] = [
                                createTextVNode("Historia Clínica General")
                              ])),
                              _: 1
                            }, 8, ["to"])) : createCommentVNode("", true),
                            selectedEvent.value.appointment_type == 2 || selectedEvent.value.appointment_type == 1 ? (openBlock(), createBlock(QBtn, {
                              key: 1,
                              class: "q-mr-sm",
                              unelevated: "",
                              outline: "",
                              color: "primary",
                              to: {
                                path: `/soap/${selectedEvent.value.candidate_id}`,
                                query: {
                                  type_id: `${selectedEvent.value.type_id}`,
                                  //Work area id
                                  id: `${selectedEvent.value.id}`,
                                  appointment_type: 1,
                                  // 0 = Cita, 1 = Seguimiento
                                  ro: 0
                                }
                              }
                            }, {
                              default: withCtx(() => _cache[5] || (_cache[5] = [
                                createTextVNode("Seguimiento")
                              ])),
                              _: 1
                            }, 8, ["to"])) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])
        ])
      ], 8, _hoisted_1);
    };
  }
};
const CalendarPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-138b930b"]]);
export {
  CalendarPage as default
};
