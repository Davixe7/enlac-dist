import { q as computed, ab as Plugin, ac as defaultLang, c as createComponent, g as getCurrentInstance, r as ref, ad as isObject, z as watch, n as nextTick, h, T as Transition, d as hSlot, Q as QBtn, ae as injectProp, $ as createDirective, a0 as cleanEvt, a1 as client, a2 as preventDraggable, E as noop, a3 as addEvt, a4 as position, af as prevent, ag as stop, a5 as leftClick, s as stopAndPrevent, v as vmIsDestroyed, A as withDirectives, b as onMounted, U as createBlock, i as openBlock, w as withCtx, k as createVNode, j as createBaseVNode, m as createTextVNode, C as QIcon, ah as Notify } from "./index-CZkFWdkm.js";
import { Q as QTable, a as QTd } from "./QTable-BStGU22a.js";
import { p as pad, l as useAnchorProps, m as useAnchor, n as QDialog, j as QMenu, i as QSelect } from "./QList-vfoOGRjD.js";
import { Q as QPage } from "./QPage-BswmJoxf.js";
import { api } from "./axios-8Xgxg1Su.js";
import { a as QCardSection, Q as QCard } from "./QCard-DIGRXogV.js";
import { u as useDarkProps, a as useDark } from "./use-dark-CEqs_S-x.js";
import { u as useRenderCache, g as getModifierDirections, s as shouldStart } from "./use-render-cache-BA_W40LL.js";
import { c as useFormProps, d as useFormAttrs, e as useFormInject } from "./use-key-composition-D21ScK9P.js";
import { Q as QInput } from "./QCheckbox-zqFzncTP.js";
import { c as clearSelection } from "./selection-E0CMqir6.js";
import { C as ClosePopup } from "./ClosePopup-D-CK-aFv.js";
import { D as DateTime } from "./datetime-Dvln09A7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./QSeparator-BN1tKhAq.js";
const breaks = [
  -61,
  9,
  38,
  199,
  426,
  686,
  756,
  818,
  1111,
  1181,
  1210,
  1635,
  2060,
  2097,
  2192,
  2262,
  2324,
  2394,
  2456,
  3178
];
function toJalaali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === "[object Date]") {
    gd = gy.getDate();
    gm = gy.getMonth() + 1;
    gy = gy.getFullYear();
  }
  return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
  return d2g(j2d(jy, jm, jd));
}
function isLeapJalaaliYear(jy) {
  return jalCalLeap(jy) === 0;
}
function jalaaliMonthLength(jy, jm) {
  if (jm <= 6) return 31;
  if (jm <= 11) return 30;
  if (isLeapJalaaliYear(jy)) return 30;
  return 29;
}
function jalCalLeap(jy) {
  const bl = breaks.length;
  let jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    jp = jm;
  }
  n = jy - jp;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return leap;
}
function jalCal(jy, withoutLeap) {
  const bl = breaks.length, gy = jy + 621;
  let leapJ = -14, jp = breaks[0], jm, jump, leap, n, i;
  if (jy < jp || jy >= breaks[bl - 1]) {
    throw new Error("Invalid Jalaali year " + jy);
  }
  for (i = 1; i < bl; i += 1) {
    jm = breaks[i];
    jump = jm - jp;
    if (jy < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  n = jy - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (!withoutLeap) {
    if (jump - n < 6) {
      n = n - jump + div(jump + 4, 33) * 33;
    }
    leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) {
      leap = 4;
    }
  }
  return {
    leap,
    gy,
    march
  };
}
function j2d(jy, jm, jd) {
  const r = jalCal(jy, true);
  return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
function d2j(jdn) {
  const gy = d2g(jdn).gy;
  let jy = gy - 621, jd, jm, k;
  const r = jalCal(jy, false), jdn1f = g2d(gy, 3, r.march);
  k = jdn - jdn1f;
  if (k >= 0) {
    if (k <= 185) {
      jm = 1 + div(k, 31);
      jd = mod(k, 31) + 1;
      return {
        jy,
        jm,
        jd
      };
    } else {
      k -= 186;
    }
  } else {
    jy -= 1;
    k += 179;
    if (r.leap === 1) {
      k += 1;
    }
  }
  jm = 7 + div(k, 30);
  jd = mod(k, 30) + 1;
  return {
    jy,
    jm,
    jd
  };
}
function g2d(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function d2g(jdn) {
  let j = 4 * jdn + 139361631;
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308, gd = div(mod(i, 153), 5) + 1, gm = mod(div(i, 153), 12) + 1, gy = div(j, 1461) - 100100 + div(8 - gm, 6);
  return {
    gy,
    gm,
    gd
  };
}
function div(a, b) {
  return ~~(a / b);
}
function mod(a, b) {
  return a - ~~(a / b) * b;
}
const calendars = ["gregorian", "persian"];
const useDatetimeProps = {
  // should define modelValue in the target component
  mask: {
    type: String
  },
  locale: Object,
  calendar: {
    type: String,
    validator: (v) => calendars.includes(v),
    default: "gregorian"
  },
  landscape: Boolean,
  color: String,
  textColor: String,
  square: Boolean,
  flat: Boolean,
  bordered: Boolean,
  readonly: Boolean,
  disable: Boolean
};
const useDatetimeEmits = ["update:modelValue"];
function getDayHash(date) {
  return date.year + "/" + pad(date.month) + "/" + pad(date.day);
}
function useDatetime(props, $q) {
  const editable = computed(() => {
    return props.disable !== true && props.readonly !== true;
  });
  const tabindex = computed(() => {
    return editable.value === true ? 0 : -1;
  });
  const headerClass = computed(() => {
    const cls = [];
    props.color !== void 0 && cls.push(`bg-${props.color}`);
    props.textColor !== void 0 && cls.push(`text-${props.textColor}`);
    return cls.join(" ");
  });
  function getLocale() {
    return props.locale !== void 0 ? { ...$q.lang.date, ...props.locale } : $q.lang.date;
  }
  function getCurrentDate(dateOnly) {
    const d = /* @__PURE__ */ new Date();
    const timeFill = dateOnly === true ? null : 0;
    if (props.calendar === "persian") {
      const jDate = toJalaali(d);
      return {
        year: jDate.jy,
        month: jDate.jm,
        day: jDate.jd
      };
    }
    return {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: timeFill,
      minute: timeFill,
      second: timeFill,
      millisecond: timeFill
    };
  }
  return {
    editable,
    tabindex,
    headerClass,
    getLocale,
    getCurrentDate
  };
}
const MILLISECONDS_IN_DAY = 864e5, MILLISECONDS_IN_HOUR = 36e5, MILLISECONDS_IN_MINUTE = 6e4, defaultMask = "YYYY-MM-DDTHH:mm:ss.SSSZ", token = /\[((?:[^\]\\]|\\]|\\)*)\]|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g, reverseToken = /(\[[^\]]*\])|do|d{1,4}|Mo|M{1,4}|m{1,2}|wo|w{1,2}|Qo|Do|DDDo|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g, regexStore = {};
function getRegexData(mask, dateLocale) {
  const days = "(" + dateLocale.days.join("|") + ")", key = mask + days;
  if (regexStore[key] !== void 0) {
    return regexStore[key];
  }
  const daysShort = "(" + dateLocale.daysShort.join("|") + ")", months = "(" + dateLocale.months.join("|") + ")", monthsShort = "(" + dateLocale.monthsShort.join("|") + ")";
  const map = {};
  let index = 0;
  const regexText = mask.replace(reverseToken, (match) => {
    index++;
    switch (match) {
      case "YY":
        map.YY = index;
        return "(-?\\d{1,2})";
      case "YYYY":
        map.YYYY = index;
        return "(-?\\d{1,4})";
      case "M":
        map.M = index;
        return "(\\d{1,2})";
      case "Mo":
        map.M = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "MM":
        map.M = index;
        return "(\\d{2})";
      case "MMM":
        map.MMM = index;
        return monthsShort;
      case "MMMM":
        map.MMMM = index;
        return months;
      case "D":
        map.D = index;
        return "(\\d{1,2})";
      case "Do":
        map.D = index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        map.D = index;
        return "(\\d{2})";
      case "H":
        map.H = index;
        return "(\\d{1,2})";
      case "HH":
        map.H = index;
        return "(\\d{2})";
      case "h":
        map.h = index;
        return "(\\d{1,2})";
      case "hh":
        map.h = index;
        return "(\\d{2})";
      case "m":
        map.m = index;
        return "(\\d{1,2})";
      case "mm":
        map.m = index;
        return "(\\d{2})";
      case "s":
        map.s = index;
        return "(\\d{1,2})";
      case "ss":
        map.s = index;
        return "(\\d{2})";
      case "S":
        map.S = index;
        return "(\\d{1})";
      case "SS":
        map.S = index;
        return "(\\d{2})";
      case "SSS":
        map.S = index;
        return "(\\d{3})";
      case "A":
        map.A = index;
        return "(AM|PM)";
      case "a":
        map.a = index;
        return "(am|pm)";
      case "aa":
        map.aa = index;
        return "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return daysShort;
      case "dddd":
        return days;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "do":
        index++;
        return "(\\d{1}(st|nd|rd|th))";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "DDDo":
        index++;
        return "(\\d{1,3}(st|nd|rd|th))";
      case "w":
        return "(\\d{1,2})";
      case "wo":
        index++;
        return "(\\d{1,2}(st|nd|rd|th))";
      case "ww":
        return "(\\d{2})";
      case "Z":
        map.Z = index;
        return "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        map.ZZ = index;
        return "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        map.X = index;
        return "(-?\\d+)";
      case "x":
        map.x = index;
        return "(-?\\d{4,})";
      default:
        index--;
        if (match[0] === "[") {
          match = match.substring(1, match.length - 1);
        }
        return match.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  });
  const res = { map, regex: new RegExp("^" + regexText) };
  regexStore[key] = res;
  return res;
}
function getDateLocale(paramDateLocale, langProps) {
  return paramDateLocale !== void 0 ? paramDateLocale : langProps !== void 0 ? langProps.date : defaultLang.date;
}
function formatTimezone(offset, delimeter = "") {
  const sign = offset > 0 ? "-" : "+", absOffset = Math.abs(offset), hours = Math.floor(absOffset / 60), minutes = absOffset % 60;
  return sign + pad(hours) + delimeter + pad(minutes);
}
function __splitDate(str, mask, dateLocale, calendar, defaultModel) {
  const date = {
    year: null,
    month: null,
    day: null,
    hour: null,
    minute: null,
    second: null,
    millisecond: null,
    timezoneOffset: null,
    dateHash: null,
    timeHash: null
  };
  defaultModel !== void 0 && Object.assign(date, defaultModel);
  if (str === void 0 || str === null || str === "" || typeof str !== "string") {
    return date;
  }
  if (mask === void 0) {
    mask = defaultMask;
  }
  const langOpts = getDateLocale(dateLocale, Plugin.props), months = langOpts.months, monthsShort = langOpts.monthsShort;
  const { regex, map } = getRegexData(mask, langOpts);
  const match = str.match(regex);
  if (match === null) {
    return date;
  }
  let tzString = "";
  if (map.X !== void 0 || map.x !== void 0) {
    const stamp = parseInt(match[map.X !== void 0 ? map.X : map.x], 10);
    if (isNaN(stamp) === true || stamp < 0) {
      return date;
    }
    const d = new Date(stamp * (map.X !== void 0 ? 1e3 : 1));
    date.year = d.getFullYear();
    date.month = d.getMonth() + 1;
    date.day = d.getDate();
    date.hour = d.getHours();
    date.minute = d.getMinutes();
    date.second = d.getSeconds();
    date.millisecond = d.getMilliseconds();
  } else {
    if (map.YYYY !== void 0) {
      date.year = parseInt(match[map.YYYY], 10);
    } else if (map.YY !== void 0) {
      const y = parseInt(match[map.YY], 10);
      date.year = y < 0 ? y : 2e3 + y;
    }
    if (map.M !== void 0) {
      date.month = parseInt(match[map.M], 10);
      if (date.month < 1 || date.month > 12) {
        return date;
      }
    } else if (map.MMM !== void 0) {
      date.month = monthsShort.indexOf(match[map.MMM]) + 1;
    } else if (map.MMMM !== void 0) {
      date.month = months.indexOf(match[map.MMMM]) + 1;
    }
    if (map.D !== void 0) {
      date.day = parseInt(match[map.D], 10);
      if (date.year === null || date.month === null || date.day < 1) {
        return date;
      }
      const maxDay = calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
      if (date.day > maxDay) {
        return date;
      }
    }
    if (map.H !== void 0) {
      date.hour = parseInt(match[map.H], 10) % 24;
    } else if (map.h !== void 0) {
      date.hour = parseInt(match[map.h], 10) % 12;
      if (map.A && match[map.A] === "PM" || map.a && match[map.a] === "pm" || map.aa && match[map.aa] === "p.m.") {
        date.hour += 12;
      }
      date.hour = date.hour % 24;
    }
    if (map.m !== void 0) {
      date.minute = parseInt(match[map.m], 10) % 60;
    }
    if (map.s !== void 0) {
      date.second = parseInt(match[map.s], 10) % 60;
    }
    if (map.S !== void 0) {
      date.millisecond = parseInt(match[map.S], 10) * 10 ** (3 - match[map.S].length);
    }
    if (map.Z !== void 0 || map.ZZ !== void 0) {
      tzString = map.Z !== void 0 ? match[map.Z].replace(":", "") : match[map.ZZ];
      date.timezoneOffset = (tzString[0] === "+" ? -1 : 1) * (60 * tzString.slice(1, 3) + 1 * tzString.slice(3, 5));
    }
  }
  date.dateHash = pad(date.year, 6) + "/" + pad(date.month) + "/" + pad(date.day);
  date.timeHash = pad(date.hour) + ":" + pad(date.minute) + ":" + pad(date.second) + tzString;
  return date;
}
function getWeekOfYear(date) {
  const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  thursday.setDate(thursday.getDate() - (thursday.getDay() + 6) % 7 + 3);
  const firstThursday = new Date(thursday.getFullYear(), 0, 4);
  firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
  const ds = thursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  thursday.setHours(thursday.getHours() - ds);
  const weekDiff = (thursday - firstThursday) / (MILLISECONDS_IN_DAY * 7);
  return 1 + Math.floor(weekDiff);
}
function startOfDate(date, unit, utc) {
  const t = new Date(date), prefix = `set${utc === true ? "UTC" : ""}`;
  switch (unit) {
    case "year":
    case "years":
      t[`${prefix}Month`](0);
    case "month":
    case "months":
      t[`${prefix}Date`](1);
    case "day":
    case "days":
    case "date":
      t[`${prefix}Hours`](0);
    case "hour":
    case "hours":
      t[`${prefix}Minutes`](0);
    case "minute":
    case "minutes":
      t[`${prefix}Seconds`](0);
    case "second":
    case "seconds":
      t[`${prefix}Milliseconds`](0);
  }
  return t;
}
function getDiff(t, sub, interval) {
  return (t.getTime() - t.getTimezoneOffset() * MILLISECONDS_IN_MINUTE - (sub.getTime() - sub.getTimezoneOffset() * MILLISECONDS_IN_MINUTE)) / interval;
}
function getDateDiff(date, subtract, unit = "days") {
  const t = new Date(date), sub = new Date(subtract);
  switch (unit) {
    case "years":
    case "year":
      return t.getFullYear() - sub.getFullYear();
    case "months":
    case "month":
      return (t.getFullYear() - sub.getFullYear()) * 12 + t.getMonth() - sub.getMonth();
    case "days":
    case "day":
    case "date":
      return getDiff(startOfDate(t, "day"), startOfDate(sub, "day"), MILLISECONDS_IN_DAY);
    case "hours":
    case "hour":
      return getDiff(startOfDate(t, "hour"), startOfDate(sub, "hour"), MILLISECONDS_IN_HOUR);
    case "minutes":
    case "minute":
      return getDiff(startOfDate(t, "minute"), startOfDate(sub, "minute"), MILLISECONDS_IN_MINUTE);
    case "seconds":
    case "second":
      return getDiff(startOfDate(t, "second"), startOfDate(sub, "second"), 1e3);
  }
}
function getDayOfYear(date) {
  return getDateDiff(date, startOfDate(date, "year"), "days") + 1;
}
function getOrdinal(n) {
  if (n >= 11 && n <= 13) {
    return `${n}th`;
  }
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
  }
  return `${n}th`;
}
const formatter = {
  // Year: 00, 01, ..., 99
  YY(date, dateLocale, forcedYear) {
    const y = this.YYYY(date, dateLocale, forcedYear) % 100;
    return y >= 0 ? pad(y) : "-" + pad(Math.abs(y));
  },
  // Year: 1900, 1901, ..., 2099
  YYYY(date, _dateLocale, forcedYear) {
    return forcedYear !== void 0 && forcedYear !== null ? forcedYear : date.getFullYear();
  },
  // Month: 1, 2, ..., 12
  M(date) {
    return date.getMonth() + 1;
  },
  // Month: 1st, 2nd, ..., 12th
  Mo(date) {
    return getOrdinal(date.getMonth() + 1);
  },
  // Month: 01, 02, ..., 12
  MM(date) {
    return pad(date.getMonth() + 1);
  },
  // Month Short Name: Jan, Feb, ...
  MMM(date, dateLocale) {
    return dateLocale.monthsShort[date.getMonth()];
  },
  // Month Name: January, February, ...
  MMMM(date, dateLocale) {
    return dateLocale.months[date.getMonth()];
  },
  // Quarter: 1, 2, 3, 4
  Q(date) {
    return Math.ceil((date.getMonth() + 1) / 3);
  },
  // Quarter: 1st, 2nd, 3rd, 4th
  Qo(date) {
    return getOrdinal(this.Q(date));
  },
  // Day of month: 1, 2, ..., 31
  D(date) {
    return date.getDate();
  },
  // Day of month: 1st, 2nd, ..., 31st
  Do(date) {
    return getOrdinal(date.getDate());
  },
  // Day of month: 01, 02, ..., 31
  DD(date) {
    return pad(date.getDate());
  },
  // Day of year: 1, 2, ..., 366
  DDD(date) {
    return getDayOfYear(date);
  },
  // Day of year: 1st, 2nd, ..., 366th
  DDDo(date) {
    return getOrdinal(getDayOfYear(date));
  },
  // Day of year: 001, 002, ..., 366
  DDDD(date) {
    return pad(getDayOfYear(date), 3);
  },
  // Day of week: 0, 1, ..., 6
  d(date) {
    return date.getDay();
  },
  // Day of week: 0th, 1st, ..., 6th
  do(date) {
    return getOrdinal(date.getDay());
  },
  // Day of week: Su, Mo, ...
  dd(date, dateLocale) {
    return dateLocale.days[date.getDay()].slice(0, 2);
  },
  // Day of week: Sun, Mon, ...
  ddd(date, dateLocale) {
    return dateLocale.daysShort[date.getDay()];
  },
  // Day of week: Sunday, Monday, ...
  dddd(date, dateLocale) {
    return dateLocale.days[date.getDay()];
  },
  // Day of ISO week: 1, 2, ..., 7
  E(date) {
    return date.getDay() || 7;
  },
  // Week of Year: 1 2 ... 52 53
  w(date) {
    return getWeekOfYear(date);
  },
  // Week of Year: 1st 2nd ... 52nd 53rd
  wo(date) {
    return getOrdinal(getWeekOfYear(date));
  },
  // Week of Year: 01 02 ... 52 53
  ww(date) {
    return pad(getWeekOfYear(date));
  },
  // Hour: 0, 1, ... 23
  H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH(date) {
    return pad(date.getHours());
  },
  // Hour: 1, 2, ..., 12
  h(date) {
    const hours = date.getHours();
    return hours === 0 ? 12 : hours > 12 ? hours % 12 : hours;
  },
  // Hour: 01, 02, ..., 12
  hh(date) {
    return pad(this.h(date));
  },
  // Minute: 0, 1, ..., 59
  m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm(date) {
    return pad(date.getMinutes());
  },
  // Second: 0, 1, ..., 59
  s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss(date) {
    return pad(date.getSeconds());
  },
  // 1/10 of second: 0, 1, ..., 9
  S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10));
  },
  // Millisecond: 000, 001, ..., 999
  SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Meridiem: AM, PM
  A(date) {
    return date.getHours() < 12 ? "AM" : "PM";
  },
  // Meridiem: am, pm
  a(date) {
    return date.getHours() < 12 ? "am" : "pm";
  },
  // Meridiem: a.m., p.m.
  aa(date) {
    return date.getHours() < 12 ? "a.m." : "p.m.";
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset, ":");
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ(date, _dateLocale, _forcedYear, forcedTimezoneOffset) {
    const tzOffset = forcedTimezoneOffset === void 0 || forcedTimezoneOffset === null ? date.getTimezoneOffset() : forcedTimezoneOffset;
    return formatTimezone(tzOffset);
  },
  // Seconds timestamp: 512969520
  X(date) {
    return Math.floor(date.getTime() / 1e3);
  },
  // Milliseconds timestamp: 512969520900
  x(date) {
    return date.getTime();
  }
};
function formatDate(val, mask, dateLocale, __forcedYear, __forcedTimezoneOffset) {
  if (val !== 0 && !val || val === Infinity || val === -Infinity) return;
  const date = new Date(val);
  if (isNaN(date)) return;
  if (mask === void 0) {
    mask = defaultMask;
  }
  const locale = getDateLocale(dateLocale, Plugin.props);
  return mask.replace(
    token,
    (match, text) => match in formatter ? formatter[match](date, locale, __forcedYear, __forcedTimezoneOffset) : text === void 0 ? match : text.split("\\]").join("]")
  );
}
const yearsInterval = 20;
const views = ["Calendar", "Years", "Months"];
const viewIsValid = (v) => views.includes(v);
const yearMonthValidator = (v) => /^-?[\d]+\/[0-1]\d$/.test(v);
const lineStr = " — ";
function getMonthHash(date) {
  return date.year + "/" + pad(date.month);
}
const QDate = createComponent({
  name: "QDate",
  props: {
    ...useDatetimeProps,
    ...useFormProps,
    ...useDarkProps,
    modelValue: {
      required: true,
      validator: (val) => typeof val === "string" || Array.isArray(val) === true || Object(val) === val || val === null
    },
    multiple: Boolean,
    range: Boolean,
    title: String,
    subtitle: String,
    mask: {
      ...useDatetimeProps.mask,
      // this mask is forced
      // when using persian calendar
      default: "YYYY/MM/DD"
    },
    defaultYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    yearsInMonthView: Boolean,
    events: [Array, Function],
    eventColor: [String, Function],
    emitImmediately: Boolean,
    options: [Array, Function],
    navigationMinYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    navigationMaxYearMonth: {
      type: String,
      validator: yearMonthValidator
    },
    noUnset: Boolean,
    firstDayOfWeek: [String, Number],
    todayBtn: Boolean,
    minimal: Boolean,
    defaultView: {
      type: String,
      default: "Calendar",
      validator: viewIsValid
    }
  },
  emits: [
    ...useDatetimeEmits,
    "rangeStart",
    "rangeEnd",
    "navigation"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const { getCache } = useRenderCache();
    const { tabindex, headerClass, getLocale, getCurrentDate } = useDatetime(props, $q);
    let lastEmitValue;
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    const blurTargetRef = ref(null);
    const innerMask = ref(getMask());
    const innerLocale = ref(getLocale());
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale());
    const today = computed(() => getCurrentDate());
    const viewModel = ref(getViewModel(innerMask.value, innerLocale.value));
    const view = ref(props.defaultView);
    const direction = computed(() => $q.lang.rtl === true ? "right" : "left");
    const monthDirection = ref(direction.value);
    const yearDirection = ref(direction.value);
    const year = viewModel.value.year;
    const startYear = ref(year - year % yearsInterval - (year < 0 ? yearsInterval : 0));
    const editRange = ref(null);
    const classes = computed(() => {
      const type = props.landscape === true ? "landscape" : "portrait";
      return `q-date q-date--${type} q-date--${type}-${props.minimal === true ? "minimal" : "standard"}` + (isDark.value === true ? " q-date--dark q-dark" : "") + (props.bordered === true ? " q-date--bordered" : "") + (props.square === true ? " q-date--square no-border-radius" : "") + (props.flat === true ? " q-date--flat no-shadow" : "") + (props.disable === true ? " disabled" : props.readonly === true ? " q-date--readonly" : "");
    });
    const computedColor = computed(() => {
      return props.color || "primary";
    });
    const computedTextColor = computed(() => {
      return props.textColor || "white";
    });
    const isImmediate = computed(
      () => props.emitImmediately === true && props.multiple !== true && props.range !== true
    );
    const normalizedModel = computed(() => Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue !== null && props.modelValue !== void 0 ? [props.modelValue] : []);
    const daysModel = computed(
      () => normalizedModel.value.filter((date) => typeof date === "string").map((date) => decodeString(date, innerMask.value, innerLocale.value)).filter(
        (date) => date.dateHash !== null && date.day !== null && date.month !== null && date.year !== null
      )
    );
    const rangeModel = computed(() => {
      const fn = (date) => decodeString(date, innerMask.value, innerLocale.value);
      return normalizedModel.value.filter((date) => isObject(date) === true && date.from !== void 0 && date.to !== void 0).map((range) => ({ from: fn(range.from), to: fn(range.to) })).filter((range) => range.from.dateHash !== null && range.to.dateHash !== null && range.from.dateHash < range.to.dateHash);
    });
    const getNativeDateFn = computed(() => props.calendar !== "persian" ? (model) => new Date(model.year, model.month - 1, model.day) : (model) => {
      const gDate = toGregorian(model.year, model.month, model.day);
      return new Date(gDate.gy, gDate.gm - 1, gDate.gd);
    });
    const encodeObjectFn = computed(() => props.calendar === "persian" ? getDayHash : (date, mask2, locale2) => formatDate(
      new Date(
        date.year,
        date.month - 1,
        date.day,
        date.hour,
        date.minute,
        date.second,
        date.millisecond
      ),
      mask2 === void 0 ? innerMask.value : mask2,
      locale2 === void 0 ? innerLocale.value : locale2,
      date.year,
      date.timezoneOffset
    ));
    const daysInModel = computed(
      () => daysModel.value.length + rangeModel.value.reduce(
        (acc, range) => acc + 1 + getDateDiff(
          getNativeDateFn.value(range.to),
          getNativeDateFn.value(range.from)
        ),
        0
      )
    );
    const headerTitle = computed(() => {
      if (props.title !== void 0 && props.title !== null && props.title.length !== 0) {
        return props.title;
      }
      if (editRange.value !== null) {
        const model2 = editRange.value.init;
        const date2 = getNativeDateFn.value(model2);
        return innerLocale.value.daysShort[date2.getDay()] + ", " + innerLocale.value.monthsShort[model2.month - 1] + " " + model2.day + lineStr + "?";
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        return `${daysInModel.value} ${innerLocale.value.pluralDay}`;
      }
      const model = daysModel.value[0];
      const date = getNativeDateFn.value(model);
      if (isNaN(date.valueOf()) === true) {
        return lineStr;
      }
      if (innerLocale.value.headerTitle !== void 0) {
        return innerLocale.value.headerTitle(date, model);
      }
      return innerLocale.value.daysShort[date.getDay()] + ", " + innerLocale.value.monthsShort[model.month - 1] + " " + model.day;
    });
    const minSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.from)).sort((a, b) => a.year - b.year || a.month - b.month);
      return model[0];
    });
    const maxSelectedModel = computed(() => {
      const model = daysModel.value.concat(rangeModel.value.map((range) => range.to)).sort((a, b) => b.year - a.year || b.month - a.month);
      return model[0];
    });
    const headerSubtitle = computed(() => {
      if (props.subtitle !== void 0 && props.subtitle !== null && props.subtitle.length !== 0) {
        return props.subtitle;
      }
      if (daysInModel.value === 0) {
        return lineStr;
      }
      if (daysInModel.value > 1) {
        const from = minSelectedModel.value;
        const to = maxSelectedModel.value;
        const month = innerLocale.value.monthsShort;
        return month[from.month - 1] + (from.year !== to.year ? " " + from.year + lineStr + month[to.month - 1] + " " : from.month !== to.month ? lineStr + month[to.month - 1] : "") + " " + to.year;
      }
      return daysModel.value[0].year;
    });
    const dateArrow = computed(() => {
      const val = [$q.iconSet.datetime.arrowLeft, $q.iconSet.datetime.arrowRight];
      return $q.lang.rtl === true ? val.reverse() : val;
    });
    const computedFirstDayOfWeek = computed(() => props.firstDayOfWeek !== void 0 ? Number(props.firstDayOfWeek) : innerLocale.value.firstDayOfWeek);
    const daysOfWeek = computed(() => {
      const days2 = innerLocale.value.daysShort, first = computedFirstDayOfWeek.value;
      return first > 0 ? days2.slice(first, 7).concat(days2.slice(0, first)) : days2;
    });
    const daysInMonth = computed(() => {
      const date = viewModel.value;
      return props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
    });
    const evtColor = computed(() => typeof props.eventColor === "function" ? props.eventColor : () => props.eventColor);
    const minNav = computed(() => {
      if (props.navigationMinYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMinYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const maxNav = computed(() => {
      if (props.navigationMaxYearMonth === void 0) {
        return null;
      }
      const data = props.navigationMaxYearMonth.split("/");
      return { year: parseInt(data[0], 10), month: parseInt(data[1], 10) };
    });
    const navBoundaries = computed(() => {
      const data = {
        month: { prev: true, next: true },
        year: { prev: true, next: true }
      };
      if (minNav.value !== null && minNav.value.year >= viewModel.value.year) {
        data.year.prev = false;
        if (minNav.value.year === viewModel.value.year && minNav.value.month >= viewModel.value.month) {
          data.month.prev = false;
        }
      }
      if (maxNav.value !== null && maxNav.value.year <= viewModel.value.year) {
        data.year.next = false;
        if (maxNav.value.year === viewModel.value.year && maxNav.value.month <= viewModel.value.month) {
          data.month.next = false;
        }
      }
      return data;
    });
    const daysMap = computed(() => {
      const map = {};
      daysModel.value.forEach((entry) => {
        const hash = getMonthHash(entry);
        if (map[hash] === void 0) {
          map[hash] = [];
        }
        map[hash].push(entry.day);
      });
      return map;
    });
    const rangeMap = computed(() => {
      const map = {};
      rangeModel.value.forEach((entry) => {
        const hashFrom = getMonthHash(entry.from);
        const hashTo = getMonthHash(entry.to);
        if (map[hashFrom] === void 0) {
          map[hashFrom] = [];
        }
        map[hashFrom].push({
          from: entry.from.day,
          to: hashFrom === hashTo ? entry.to.day : void 0,
          range: entry
        });
        if (hashFrom < hashTo) {
          let hash;
          const { year: year2, month } = entry.from;
          const cur = month < 12 ? { year: year2, month: month + 1 } : { year: year2 + 1, month: 1 };
          while ((hash = getMonthHash(cur)) <= hashTo) {
            if (map[hash] === void 0) {
              map[hash] = [];
            }
            map[hash].push({
              from: void 0,
              to: hash === hashTo ? entry.to.day : void 0,
              range: entry
            });
            cur.month++;
            if (cur.month > 12) {
              cur.year++;
              cur.month = 1;
            }
          }
        }
      });
      return map;
    });
    const rangeView = computed(() => {
      if (editRange.value === null) return;
      const { init, initHash, final, finalHash } = editRange.value;
      const [from, to] = initHash <= finalHash ? [init, final] : [final, init];
      const fromHash = getMonthHash(from);
      const toHash = getMonthHash(to);
      if (fromHash !== viewMonthHash.value && toHash !== viewMonthHash.value) return;
      const view2 = {};
      if (fromHash === viewMonthHash.value) {
        view2.from = from.day;
        view2.includeFrom = true;
      } else {
        view2.from = 1;
      }
      if (toHash === viewMonthHash.value) {
        view2.to = to.day;
        view2.includeTo = true;
      } else {
        view2.to = daysInMonth.value;
      }
      return view2;
    });
    const viewMonthHash = computed(() => getMonthHash(viewModel.value));
    const selectionDaysMap = computed(() => {
      const map = {};
      if (props.options === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = true;
        }
        return map;
      }
      const fn = typeof props.options === "function" ? props.options : (date) => props.options.includes(date);
      for (let i = 1; i <= daysInMonth.value; i++) {
        const dayHash = viewMonthHash.value + "/" + pad(i);
        map[i] = fn(dayHash);
      }
      return map;
    });
    const eventDaysMap = computed(() => {
      const map = {};
      if (props.events === void 0) {
        for (let i = 1; i <= daysInMonth.value; i++) {
          map[i] = false;
        }
      } else {
        const fn = typeof props.events === "function" ? props.events : (date) => props.events.includes(date);
        for (let i = 1; i <= daysInMonth.value; i++) {
          const dayHash = viewMonthHash.value + "/" + pad(i);
          map[i] = fn(dayHash) === true && evtColor.value(dayHash);
        }
      }
      return map;
    });
    const viewDays = computed(() => {
      let date, endDay;
      const { year: year2, month } = viewModel.value;
      if (props.calendar !== "persian") {
        date = new Date(year2, month - 1, 1);
        endDay = new Date(year2, month - 1, 0).getDate();
      } else {
        const gDate = toGregorian(year2, month, 1);
        date = new Date(gDate.gy, gDate.gm - 1, gDate.gd);
        let prevJM = month - 1;
        let prevJY = year2;
        if (prevJM === 0) {
          prevJM = 12;
          prevJY--;
        }
        endDay = jalaaliMonthLength(prevJY, prevJM);
      }
      return {
        days: date.getDay() - computedFirstDayOfWeek.value - 1,
        endDay
      };
    });
    const days = computed(() => {
      const res = [];
      const { days: days2, endDay } = viewDays.value;
      const len = days2 < 0 ? days2 + 7 : days2;
      if (len < 6) {
        for (let i = endDay - len; i <= endDay; i++) {
          res.push({ i, fill: true });
        }
      }
      const index = res.length;
      for (let i = 1; i <= daysInMonth.value; i++) {
        const day = { i, event: eventDaysMap.value[i], classes: [] };
        if (selectionDaysMap.value[i] === true) {
          day.in = true;
          day.flat = true;
        }
        res.push(day);
      }
      if (daysMap.value[viewMonthHash.value] !== void 0) {
        daysMap.value[viewMonthHash.value].forEach((day) => {
          const i = index + day - 1;
          Object.assign(res[i], {
            selected: true,
            unelevated: true,
            flat: false,
            color: computedColor.value,
            textColor: computedTextColor.value
          });
        });
      }
      if (rangeMap.value[viewMonthHash.value] !== void 0) {
        rangeMap.value[viewMonthHash.value].forEach((entry) => {
          if (entry.from !== void 0) {
            const from = index + entry.from - 1;
            const to = index + (entry.to || daysInMonth.value) - 1;
            for (let day = from; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[from], {
              rangeFrom: true,
              flat: false
            });
            entry.to !== void 0 && Object.assign(res[to], {
              rangeTo: true,
              flat: false
            });
          } else if (entry.to !== void 0) {
            const to = index + entry.to - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
            Object.assign(res[to], {
              flat: false,
              rangeTo: true
            });
          } else {
            const to = index + daysInMonth.value - 1;
            for (let day = index; day <= to; day++) {
              Object.assign(res[day], {
                range: entry.range,
                unelevated: true,
                color: computedColor.value,
                textColor: computedTextColor.value
              });
            }
          }
        });
      }
      if (rangeView.value !== void 0) {
        const from = index + rangeView.value.from - 1;
        const to = index + rangeView.value.to - 1;
        for (let day = from; day <= to; day++) {
          res[day].color = computedColor.value;
          res[day].editRange = true;
        }
        if (rangeView.value.includeFrom === true) {
          res[from].editRangeFrom = true;
        }
        if (rangeView.value.includeTo === true) {
          res[to].editRangeTo = true;
        }
      }
      if (viewModel.value.year === today.value.year && viewModel.value.month === today.value.month) {
        res[index + today.value.day - 1].today = true;
      }
      const left = res.length % 7;
      if (left > 0) {
        const afterDays = 7 - left;
        for (let i = 1; i <= afterDays; i++) {
          res.push({ i, fill: true });
        }
      }
      res.forEach((day) => {
        let cls = "q-date__calendar-item ";
        if (day.fill === true) {
          cls += "q-date__calendar-item--fill";
        } else {
          cls += `q-date__calendar-item--${day.in === true ? "in" : "out"}`;
          if (day.range !== void 0) {
            cls += ` q-date__range${day.rangeTo === true ? "-to" : day.rangeFrom === true ? "-from" : ""}`;
          }
          if (day.editRange === true) {
            cls += ` q-date__edit-range${day.editRangeFrom === true ? "-from" : ""}${day.editRangeTo === true ? "-to" : ""}`;
          }
          if (day.range !== void 0 || day.editRange === true) {
            cls += ` text-${day.color}`;
          }
        }
        day.classes = cls;
      });
      return res;
    });
    const attributes = computed(() => props.disable === true ? { "aria-disabled": "true" } : {});
    watch(() => props.modelValue, (v) => {
      if (lastEmitValue === JSON.stringify(v)) {
        lastEmitValue = 0;
      } else {
        const model = getViewModel(innerMask.value, innerLocale.value);
        updateViewModel(model.year, model.month, model);
      }
    });
    watch(view, () => {
      if (blurTargetRef.value !== null && proxy.$el.contains(document.activeElement) === true) {
        blurTargetRef.value.focus();
      }
    });
    watch(() => viewModel.value.year + "|" + viewModel.value.month, () => {
      emit("navigation", { year: viewModel.value.year, month: viewModel.value.month });
    });
    watch(mask, (val) => {
      updateValue(val, innerLocale.value, "mask");
      innerMask.value = val;
    });
    watch(locale, (val) => {
      updateValue(innerMask.value, val, "locale");
      innerLocale.value = val;
    });
    function setLastValue(v) {
      lastEmitValue = JSON.stringify(v);
    }
    function setToday() {
      const { year: year2, month, day } = today.value;
      const date = {
        // contains more props than needed (hour, minute, second, millisecond)
        // but those aren't used in the processing of this "date" variable
        ...viewModel.value,
        // overwriting with today's date
        year: year2,
        month,
        day
      };
      const monthMap = daysMap.value[getMonthHash(date)];
      if (monthMap === void 0 || monthMap.includes(date.day) === false) {
        addToModel(date);
      }
      setCalendarTo(date.year, date.month);
    }
    function setView(viewMode) {
      if (viewIsValid(viewMode) === true) {
        view.value = viewMode;
      }
    }
    function offsetCalendar(type, descending) {
      if (["month", "year"].includes(type)) {
        const fn = type === "month" ? goToMonth : goToYear;
        fn(descending === true ? -1 : 1);
      }
    }
    function setCalendarTo(year2, month) {
      view.value = "Calendar";
      updateViewModel(year2, month);
    }
    function setEditingRange(from, to) {
      if (props.range === false || !from) {
        editRange.value = null;
        return;
      }
      const init = Object.assign({ ...viewModel.value }, from);
      const final = to !== void 0 ? Object.assign({ ...viewModel.value }, to) : init;
      editRange.value = {
        init,
        initHash: getDayHash(init),
        final,
        finalHash: getDayHash(final)
      };
      setCalendarTo(init.year, init.month);
    }
    function getMask() {
      return props.calendar === "persian" ? "YYYY/MM/DD" : props.mask;
    }
    function decodeString(date, mask2, locale2) {
      return __splitDate(
        date,
        mask2,
        locale2,
        props.calendar,
        {
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0
        }
      );
    }
    function getViewModel(mask2, locale2) {
      const model = Array.isArray(props.modelValue) === true ? props.modelValue : props.modelValue ? [props.modelValue] : [];
      if (model.length === 0) {
        return getDefaultViewModel();
      }
      const target = model[model.length - 1];
      const decoded = decodeString(
        target.from !== void 0 ? target.from : target,
        mask2,
        locale2
      );
      return decoded.dateHash === null ? getDefaultViewModel() : decoded;
    }
    function getDefaultViewModel() {
      let year2, month;
      if (props.defaultYearMonth !== void 0) {
        const d = props.defaultYearMonth.split("/");
        year2 = parseInt(d[0], 10);
        month = parseInt(d[1], 10);
      } else {
        const d = today.value !== void 0 ? today.value : getCurrentDate();
        year2 = d.year;
        month = d.month;
      }
      return {
        year: year2,
        month,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        dateHash: year2 + "/" + pad(month) + "/01"
      };
    }
    function goToMonth(offset) {
      let year2 = viewModel.value.year;
      let month = Number(viewModel.value.month) + offset;
      if (month === 13) {
        month = 1;
        year2++;
      } else if (month === 0) {
        month = 12;
        year2--;
      }
      updateViewModel(year2, month);
      isImmediate.value === true && emitImmediately("month");
    }
    function goToYear(offset) {
      const year2 = Number(viewModel.value.year) + offset;
      updateViewModel(year2, viewModel.value.month);
      isImmediate.value === true && emitImmediately("year");
    }
    function setYear(year2) {
      updateViewModel(year2, viewModel.value.month);
      view.value = props.defaultView === "Years" ? "Months" : "Calendar";
      isImmediate.value === true && emitImmediately("year");
    }
    function setMonth(month) {
      updateViewModel(viewModel.value.year, month);
      view.value = "Calendar";
      isImmediate.value === true && emitImmediately("month");
    }
    function toggleDate(date, monthHash) {
      const month = daysMap.value[monthHash];
      const fn = month !== void 0 && month.includes(date.day) === true ? removeFromModel : addToModel;
      fn(date);
    }
    function getShortDate(date) {
      return { year: date.year, month: date.month, day: date.day };
    }
    function updateViewModel(year2, month, time) {
      if (minNav.value !== null && year2 <= minNav.value.year) {
        if (month < minNav.value.month || year2 < minNav.value.year) {
          month = minNav.value.month;
        }
        year2 = minNav.value.year;
      }
      if (maxNav.value !== null && year2 >= maxNav.value.year) {
        if (month > maxNav.value.month || year2 > maxNav.value.year) {
          month = maxNav.value.month;
        }
        year2 = maxNav.value.year;
      }
      if (time !== void 0) {
        const { hour, minute, second, millisecond, timezoneOffset, timeHash } = time;
        Object.assign(viewModel.value, { hour, minute, second, millisecond, timezoneOffset, timeHash });
      }
      const newHash = year2 + "/" + pad(month) + "/01";
      if (newHash !== viewModel.value.dateHash) {
        monthDirection.value = viewModel.value.dateHash < newHash === ($q.lang.rtl !== true) ? "left" : "right";
        if (year2 !== viewModel.value.year) {
          yearDirection.value = monthDirection.value;
        }
        nextTick(() => {
          startYear.value = year2 - year2 % yearsInterval - (year2 < 0 ? yearsInterval : 0);
          Object.assign(viewModel.value, {
            year: year2,
            month,
            day: 1,
            dateHash: newHash
          });
        });
      }
    }
    function emitValue(val, action, date) {
      const value2 = val !== null && val.length === 1 && props.multiple === false ? val[0] : val;
      const { reason, details } = getEmitParams(action, date);
      setLastValue(value2);
      emit("update:modelValue", value2, reason, details);
    }
    function emitImmediately(reason) {
      const date = daysModel.value[0] !== void 0 && daysModel.value[0].dateHash !== null ? { ...daysModel.value[0] } : { ...viewModel.value };
      nextTick(() => {
        date.year = viewModel.value.year;
        date.month = viewModel.value.month;
        const maxDay = props.calendar !== "persian" ? new Date(date.year, date.month, 0).getDate() : jalaaliMonthLength(date.year, date.month);
        date.day = Math.min(Math.max(1, date.day), maxDay);
        const value2 = encodeEntry(date);
        const { details } = getEmitParams("", date);
        setLastValue(value2);
        emit("update:modelValue", value2, reason, details);
      });
    }
    function getEmitParams(action, date) {
      return date.from !== void 0 ? {
        reason: `${action}-range`,
        details: {
          ...getShortDate(date.target),
          from: getShortDate(date.from),
          to: getShortDate(date.to)
        }
      } : {
        reason: `${action}-day`,
        details: getShortDate(date)
      };
    }
    function encodeEntry(date, mask2, locale2) {
      return date.from !== void 0 ? { from: encodeObjectFn.value(date.from, mask2, locale2), to: encodeObjectFn.value(date.to, mask2, locale2) } : encodeObjectFn.value(date, mask2, locale2);
    }
    function addToModel(date) {
      let value2;
      if (props.multiple === true) {
        if (date.from !== void 0) {
          const fromHash = getDayHash(date.from);
          const toHash = getDayHash(date.to);
          const days2 = daysModel.value.filter((day) => day.dateHash < fromHash || day.dateHash > toHash);
          const ranges = rangeModel.value.filter(({ from, to }) => to.dateHash < fromHash || from.dateHash > toHash);
          value2 = days2.concat(ranges).concat(date).map((entry) => encodeEntry(entry));
        } else {
          const model = normalizedModel.value.slice();
          model.push(encodeEntry(date));
          value2 = model;
        }
      } else {
        value2 = encodeEntry(date);
      }
      emitValue(value2, "add", date);
    }
    function removeFromModel(date) {
      if (props.noUnset === true) return;
      let model = null;
      if (props.multiple === true && Array.isArray(props.modelValue) === true) {
        const val = encodeEntry(date);
        if (date.from !== void 0) {
          model = props.modelValue.filter(
            (date2) => date2.from !== void 0 ? date2.from !== val.from && date2.to !== val.to : true
          );
        } else {
          model = props.modelValue.filter((date2) => date2 !== val);
        }
        if (model.length === 0) {
          model = null;
        }
      }
      emitValue(model, "remove", date);
    }
    function updateValue(mask2, locale2, reason) {
      const model = daysModel.value.concat(rangeModel.value).map((entry) => encodeEntry(entry, mask2, locale2)).filter((entry) => {
        return entry.from !== void 0 ? entry.from.dateHash !== null && entry.to.dateHash !== null : entry.dateHash !== null;
      });
      const value2 = (props.multiple === true ? model : model[0]) || null;
      setLastValue(value2);
      emit("update:modelValue", value2, reason);
    }
    function getHeader() {
      if (props.minimal === true) return;
      return h("div", {
        class: "q-date__header " + headerClass.value
      }, [
        h("div", {
          class: "relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, () => h("div", {
            key: "h-yr-" + headerSubtitle.value,
            class: "q-date__header-subtitle q-date__header-link " + (view.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            ...getCache("vY", {
              onClick() {
                view.value = "Years";
              },
              onKeyup(e) {
                e.keyCode === 13 && (view.value = "Years");
              }
            })
          }, [headerSubtitle.value]))
        ]),
        h("div", {
          class: "q-date__header-title relative-position flex no-wrap"
        }, [
          h("div", {
            class: "relative-position col"
          }, [
            h(Transition, {
              name: "q-transition--fade"
            }, () => h("div", {
              key: "h-sub" + headerTitle.value,
              class: "q-date__header-title-label q-date__header-link " + (view.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              ...getCache("vC", {
                onClick() {
                  view.value = "Calendar";
                },
                onKeyup(e) {
                  e.keyCode === 13 && (view.value = "Calendar");
                }
              })
            }, [headerTitle.value]))
          ]),
          props.todayBtn === true ? h(QBtn, {
            class: "q-date__header-today self-start",
            icon: $q.iconSet.datetime.today,
            flat: true,
            size: "sm",
            round: true,
            tabindex: tabindex.value,
            onClick: setToday
          }) : null
        ])
      ]);
    }
    function getNavigation({ label, type, key, dir, goTo, boundaries, cls }) {
      return [
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[0],
            tabindex: tabindex.value,
            disable: boundaries.prev === false,
            ...getCache("go-#" + type, { onClick() {
              goTo(-1);
            } })
          })
        ]),
        h("div", {
          class: "relative-position overflow-hidden flex flex-center" + cls
        }, [
          h(Transition, {
            name: "q-transition--jump-" + dir
          }, () => h("div", { key }, [
            h(QBtn, {
              flat: true,
              dense: true,
              noCaps: true,
              label,
              tabindex: tabindex.value,
              ...getCache("view#" + type, { onClick: () => {
                view.value = type;
              } })
            })
          ]))
        ]),
        h("div", {
          class: "row items-center q-date__arrow"
        }, [
          h(QBtn, {
            round: true,
            dense: true,
            size: "sm",
            flat: true,
            icon: dateArrow.value[1],
            tabindex: tabindex.value,
            disable: boundaries.next === false,
            ...getCache("go+#" + type, { onClick() {
              goTo(1);
            } })
          })
        ])
      ];
    }
    const renderViews = {
      Calendar: () => [
        h("div", {
          key: "calendar-view",
          class: "q-date__view q-date__calendar"
        }, [
          h("div", {
            class: "q-date__navigation row items-center no-wrap"
          }, getNavigation({
            label: innerLocale.value.months[viewModel.value.month - 1],
            type: "Months",
            key: viewModel.value.month,
            dir: monthDirection.value,
            goTo: goToMonth,
            boundaries: navBoundaries.value.month,
            cls: " col"
          }).concat(getNavigation({
            label: viewModel.value.year,
            type: "Years",
            key: viewModel.value.year,
            dir: yearDirection.value,
            goTo: goToYear,
            boundaries: navBoundaries.value.year,
            cls: ""
          }))),
          h("div", {
            class: "q-date__calendar-weekdays row items-center no-wrap"
          }, daysOfWeek.value.map((day) => h("div", { class: "q-date__calendar-item" }, [h("div", day)]))),
          h("div", {
            class: "q-date__calendar-days-container relative-position overflow-hidden"
          }, [
            h(Transition, {
              name: "q-transition--slide-" + monthDirection.value
            }, () => h("div", {
              key: viewMonthHash.value,
              class: "q-date__calendar-days fit"
            }, days.value.map((day) => h("div", { class: day.classes }, [
              day.in === true ? h(
                QBtn,
                {
                  class: day.today === true ? "q-date__today" : "",
                  dense: true,
                  flat: day.flat,
                  unelevated: day.unelevated,
                  color: day.color,
                  textColor: day.textColor,
                  label: day.i,
                  tabindex: tabindex.value,
                  ...getCache("day#" + day.i, {
                    onClick: () => {
                      onDayClick(day.i);
                    },
                    onMouseover: () => {
                      onDayMouseover(day.i);
                    }
                  })
                },
                day.event !== false ? () => h("div", { class: "q-date__event bg-" + day.event }) : null
              ) : h("div", "" + day.i)
            ]))))
          ])
        ])
      ],
      Months() {
        const currentYear = viewModel.value.year === today.value.year;
        const isDisabled = (month) => {
          return minNav.value !== null && viewModel.value.year === minNav.value.year && minNav.value.month > month || maxNav.value !== null && viewModel.value.year === maxNav.value.year && maxNav.value.month < month;
        };
        const content = innerLocale.value.monthsShort.map((month, i) => {
          const active = viewModel.value.month === i + 1;
          return h("div", {
            class: "q-date__months-item flex flex-center"
          }, [
            h(QBtn, {
              class: currentYear === true && today.value.month === i + 1 ? "q-date__today" : null,
              flat: active !== true,
              label: month,
              unelevated: active,
              color: active === true ? computedColor.value : null,
              textColor: active === true ? computedTextColor.value : null,
              tabindex: tabindex.value,
              disable: isDisabled(i + 1),
              ...getCache("month#" + i, { onClick: () => {
                setMonth(i + 1);
              } })
            })
          ]);
        });
        props.yearsInMonthView === true && content.unshift(
          h("div", { class: "row no-wrap full-width" }, [
            getNavigation({
              label: viewModel.value.year,
              type: "Years",
              key: viewModel.value.year,
              dir: yearDirection.value,
              goTo: goToYear,
              boundaries: navBoundaries.value.year,
              cls: " col"
            })
          ])
        );
        return h("div", {
          key: "months-view",
          class: "q-date__view q-date__months flex flex-center"
        }, content);
      },
      Years() {
        const start = startYear.value, stop2 = start + yearsInterval, years = [];
        const isDisabled = (year2) => {
          return minNav.value !== null && minNav.value.year > year2 || maxNav.value !== null && maxNav.value.year < year2;
        };
        for (let i = start; i <= stop2; i++) {
          const active = viewModel.value.year === i;
          years.push(
            h("div", {
              class: "q-date__years-item flex flex-center"
            }, [
              h(QBtn, {
                key: "yr" + i,
                class: today.value.year === i ? "q-date__today" : null,
                flat: !active,
                label: i,
                dense: true,
                unelevated: active,
                color: active === true ? computedColor.value : null,
                textColor: active === true ? computedTextColor.value : null,
                tabindex: tabindex.value,
                disable: isDisabled(i),
                ...getCache("yr#" + i, { onClick: () => {
                  setYear(i);
                } })
              })
            ])
          );
        }
        return h("div", {
          class: "q-date__view q-date__years flex flex-center"
        }, [
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[0],
              tabindex: tabindex.value,
              disable: isDisabled(start),
              ...getCache("y-", { onClick: () => {
                startYear.value -= yearsInterval;
              } })
            })
          ]),
          h("div", {
            class: "q-date__years-content col self-stretch row items-center"
          }, years),
          h("div", {
            class: "col-auto"
          }, [
            h(QBtn, {
              round: true,
              dense: true,
              flat: true,
              icon: dateArrow.value[1],
              tabindex: tabindex.value,
              disable: isDisabled(stop2),
              ...getCache("y+", { onClick: () => {
                startYear.value += yearsInterval;
              } })
            })
          ])
        ]);
      }
    };
    function onDayClick(dayIndex) {
      const day = { ...viewModel.value, day: dayIndex };
      if (props.range === false) {
        toggleDate(day, viewMonthHash.value);
        return;
      }
      if (editRange.value === null) {
        const dayProps = days.value.find((day2) => day2.fill !== true && day2.i === dayIndex);
        if (props.noUnset !== true && dayProps.range !== void 0) {
          removeFromModel({ target: day, from: dayProps.range.from, to: dayProps.range.to });
          return;
        }
        if (dayProps.selected === true) {
          removeFromModel(day);
          return;
        }
        const initHash = getDayHash(day);
        editRange.value = {
          init: day,
          initHash,
          final: day,
          finalHash: initHash
        };
        emit("rangeStart", getShortDate(day));
      } else {
        const initHash = editRange.value.initHash, finalHash = getDayHash(day), payload = initHash <= finalHash ? { from: editRange.value.init, to: day } : { from: day, to: editRange.value.init };
        editRange.value = null;
        addToModel(initHash === finalHash ? day : { target: day, ...payload });
        emit("rangeEnd", {
          from: getShortDate(payload.from),
          to: getShortDate(payload.to)
        });
      }
    }
    function onDayMouseover(dayIndex) {
      if (editRange.value !== null) {
        const final = { ...viewModel.value, day: dayIndex };
        Object.assign(editRange.value, {
          final,
          finalHash: getDayHash(final)
        });
      }
    }
    Object.assign(proxy, {
      setToday,
      setView,
      offsetCalendar,
      setCalendarTo,
      setEditingRange
    });
    return () => {
      const content = [
        h("div", {
          class: "q-date__content col relative-position"
        }, [
          h(Transition, {
            name: "q-transition--fade"
          }, renderViews[view.value])
        ])
      ];
      const def = hSlot(slots.default);
      def !== void 0 && content.push(
        h("div", { class: "q-date__actions" }, def)
      );
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(content, "push");
      }
      return h("div", {
        class: classes.value,
        ...attributes.value
      }, [
        getHeader(),
        h("div", {
          ref: blurTargetRef,
          class: "q-date__main col column",
          tabindex: -1
        }, content)
      ]);
    };
  }
});
const QPopupProxy = createComponent({
  name: "QPopupProxy",
  props: {
    ...useAnchorProps,
    breakpoint: {
      type: [String, Number],
      default: 450
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit, attrs }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const showing = ref(false);
    const popupRef = ref(null);
    const breakpoint = computed(() => parseInt(props.breakpoint, 10));
    const { canShow } = useAnchor({ showing });
    function getType() {
      return $q.screen.width < breakpoint.value || $q.screen.height < breakpoint.value ? "dialog" : "menu";
    }
    const type = ref(getType());
    const popupProps = computed(
      () => type.value === "menu" ? { maxHeight: "99vh" } : {}
    );
    watch(() => getType(), (val) => {
      if (showing.value !== true) {
        type.value = val;
      }
    });
    function onShow(evt) {
      showing.value = true;
      emit("show", evt);
    }
    function onHide(evt) {
      showing.value = false;
      type.value = getType();
      emit("hide", evt);
    }
    Object.assign(proxy, {
      show(evt) {
        canShow(evt) === true && popupRef.value.show(evt);
      },
      hide(evt) {
        popupRef.value.hide(evt);
      },
      toggle(evt) {
        popupRef.value.toggle(evt);
      }
    });
    injectProp(proxy, "currentComponent", () => ({
      type: type.value,
      ref: popupRef.value
    }));
    return () => {
      const data = {
        ref: popupRef,
        ...popupProps.value,
        ...attrs,
        onShow,
        onHide
      };
      let component;
      if (type.value === "dialog") {
        component = QDialog;
      } else {
        component = QMenu;
        Object.assign(data, {
          target: props.target,
          contextMenu: props.contextMenu,
          noParentEvent: true,
          separateClosePopup: true
        });
      }
      return h(component, data, slots.default);
    };
  }
});
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
let uid = 0;
const TouchPan = createDirective(
  {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) return;
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "passiveCapture"],
              [target, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
              const clone = evt.type.indexOf("mouse") !== -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone);
              evt.cancelBubble === true && stop(clone);
              Object.assign(clone, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) return;
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) return;
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) return;
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup !== void 0 && ctx.styleCleanup();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
        // cannot be passive (ex: iOS scroll)
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchpan;
      }
    }
  }
);
function getViewByModel(model, withSeconds) {
  if (model.hour !== null) {
    if (model.minute === null) {
      return "minute";
    }
  }
  return "hour";
}
function getCurrentTime() {
  const d = /* @__PURE__ */ new Date();
  return {
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    millisecond: d.getMilliseconds()
  };
}
const QTime = createComponent({
  name: "QTime",
  props: {
    ...useDarkProps,
    ...useFormProps,
    ...useDatetimeProps,
    modelValue: {
      required: true,
      validator: (val) => typeof val === "string" || val === null
    },
    mask: {
      ...useDatetimeProps.mask,
      default: null
    },
    format24h: {
      type: Boolean,
      default: null
    },
    defaultDate: {
      type: String,
      validator: (v) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(v)
    },
    options: Function,
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    withSeconds: Boolean,
    nowBtn: Boolean
  },
  emits: useDatetimeEmits,
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { $q } = vm.proxy;
    const isDark = useDark(props, $q);
    const { tabindex, headerClass, getLocale, getCurrentDate } = useDatetime(props, $q);
    const formAttrs = useFormAttrs(props);
    const injectFormInput = useFormInject(formAttrs);
    let draggingClockRect, dragCache;
    const clockRef = ref(null);
    const mask = computed(() => getMask());
    const locale = computed(() => getLocale());
    const defaultDateModel = computed(() => getDefaultDateModel());
    const model = __splitDate(
      props.modelValue,
      mask.value,
      // initial mask
      locale.value,
      // initial locale
      props.calendar,
      defaultDateModel.value
    );
    const view = ref(getViewByModel(model));
    const innerModel = ref(model);
    const isAM = ref(model.hour === null || model.hour < 12);
    const classes = computed(
      () => `q-time q-time--${props.landscape === true ? "landscape" : "portrait"}` + (isDark.value === true ? " q-time--dark q-dark" : "") + (props.disable === true ? " disabled" : props.readonly === true ? " q-time--readonly" : "") + (props.bordered === true ? " q-time--bordered" : "") + (props.square === true ? " q-time--square no-border-radius" : "") + (props.flat === true ? " q-time--flat no-shadow" : "")
    );
    const stringModel = computed(() => {
      const time = innerModel.value;
      return {
        hour: time.hour === null ? "--" : computedFormat24h.value === true ? pad(time.hour) : String(
          isAM.value === true ? time.hour === 0 ? 12 : time.hour : time.hour > 12 ? time.hour - 12 : time.hour
        ),
        minute: time.minute === null ? "--" : pad(time.minute),
        second: time.second === null ? "--" : pad(time.second)
      };
    });
    const computedFormat24h = computed(() => props.format24h !== null ? props.format24h : $q.lang.date.format24h);
    const pointerStyle = computed(() => {
      const forHour = view.value === "hour", divider = forHour === true ? 12 : 60, amount = innerModel.value[view.value], degrees = Math.round(amount * (360 / divider)) - 180;
      let transform = `rotate(${degrees}deg) translateX(-50%)`;
      if (forHour === true && computedFormat24h.value === true && innerModel.value.hour >= 12) {
        transform += " scale(.7)";
      }
      return { transform };
    });
    const minLink = computed(() => innerModel.value.hour !== null);
    const secLink = computed(() => minLink.value === true && innerModel.value.minute !== null);
    const hourInSelection = computed(() => props.hourOptions !== void 0 ? (val) => props.hourOptions.includes(val) : props.options !== void 0 ? (val) => props.options(val, null, null) : null);
    const minuteInSelection = computed(() => props.minuteOptions !== void 0 ? (val) => props.minuteOptions.includes(val) : props.options !== void 0 ? (val) => props.options(innerModel.value.hour, val, null) : null);
    const secondInSelection = computed(() => props.secondOptions !== void 0 ? (val) => props.secondOptions.includes(val) : props.options !== void 0 ? (val) => props.options(innerModel.value.hour, innerModel.value.minute, val) : null);
    const validHours = computed(() => {
      if (hourInSelection.value === null) {
        return null;
      }
      const am = getValidValues(0, 11, hourInSelection.value);
      const pm = getValidValues(12, 11, hourInSelection.value);
      return { am, pm, values: am.values.concat(pm.values) };
    });
    const validMinutes = computed(() => minuteInSelection.value !== null ? getValidValues(0, 59, minuteInSelection.value) : null);
    const validSeconds = computed(() => secondInSelection.value !== null ? getValidValues(0, 59, secondInSelection.value) : null);
    const viewValidOptions = computed(() => {
      switch (view.value) {
        case "hour":
          return validHours.value;
        case "minute":
          return validMinutes.value;
        case "second":
          return validSeconds.value;
      }
    });
    const positions = computed(() => {
      let start, end, offset = 0, step = 1;
      const values = viewValidOptions.value !== null ? viewValidOptions.value.values : void 0;
      if (view.value === "hour") {
        if (computedFormat24h.value === true) {
          start = 0;
          end = 23;
        } else {
          start = 0;
          end = 11;
          if (isAM.value === false) {
            offset = 12;
          }
        }
      } else {
        start = 0;
        end = 55;
        step = 5;
      }
      const pos = [];
      for (let val = start, index = start; val <= end; val += step, index++) {
        const actualVal = val + offset, disable = values !== void 0 && values.includes(actualVal) === false, label = view.value === "hour" && val === 0 ? computedFormat24h.value === true ? "00" : "12" : val;
        pos.push({ val: actualVal, index, disable, label });
      }
      return pos;
    });
    const clockDirectives = computed(() => {
      return [[
        TouchPan,
        onPan,
        void 0,
        {
          stop: true,
          prevent: true,
          mouse: true
        }
      ]];
    });
    watch(() => props.modelValue, (v) => {
      const model2 = __splitDate(
        v,
        mask.value,
        locale.value,
        props.calendar,
        defaultDateModel.value
      );
      if (model2.dateHash !== innerModel.value.dateHash || model2.timeHash !== innerModel.value.timeHash) {
        innerModel.value = model2;
        if (model2.hour === null) {
          view.value = "hour";
        } else {
          isAM.value = model2.hour < 12;
        }
      }
    });
    watch([mask, locale], () => {
      nextTick(() => {
        updateValue();
      });
    });
    function setNow() {
      const date = {
        ...getCurrentDate(),
        ...getCurrentTime()
      };
      updateValue(date);
      Object.assign(innerModel.value, date);
      view.value = "hour";
    }
    function getValidValues(start, count, testFn) {
      const values = Array.apply(null, { length: count + 1 }).map((_, index) => {
        const i = index + start;
        return {
          index: i,
          val: testFn(i) === true
          // force boolean
        };
      }).filter((v) => v.val === true).map((v) => v.index);
      return {
        min: values[0],
        max: values[values.length - 1],
        values,
        threshold: count + 1
      };
    }
    function getWheelDist(a, b, threshold) {
      const diff = Math.abs(a - b);
      return Math.min(diff, threshold - diff);
    }
    function getNormalizedClockValue(val, { min, max, values, threshold }) {
      if (val === min) {
        return min;
      }
      if (val < min || val > max) {
        return getWheelDist(val, min, threshold) <= getWheelDist(val, max, threshold) ? min : max;
      }
      const index = values.findIndex((v) => val <= v), before = values[index - 1], after = values[index];
      return val - before <= after - val ? before : after;
    }
    function getMask() {
      return props.calendar !== "persian" && props.mask !== null ? props.mask : `HH:mm${props.withSeconds === true ? ":ss" : ""}`;
    }
    function getDefaultDateModel() {
      if (typeof props.defaultDate !== "string") {
        const date = getCurrentDate(true);
        date.dateHash = getDayHash(date);
        return date;
      }
      return __splitDate(props.defaultDate, "YYYY/MM/DD", void 0, props.calendar);
    }
    function shouldAbortInteraction() {
      return vmIsDestroyed(vm) === true || viewValidOptions.value !== null && (viewValidOptions.value.values.length === 0 || view.value === "hour" && computedFormat24h.value !== true && validHours.value[isAM.value === true ? "am" : "pm"].values.length === 0);
    }
    function getClockRect() {
      const clock = clockRef.value, { top, left, width } = clock.getBoundingClientRect(), dist = width / 2;
      return {
        top: top + dist,
        left: left + dist,
        dist: dist * 0.7
      };
    }
    function onPan(event) {
      if (shouldAbortInteraction() === true) return;
      if (event.isFirst === true) {
        draggingClockRect = getClockRect();
        dragCache = updateClock(event.evt, draggingClockRect);
        return;
      }
      dragCache = updateClock(event.evt, draggingClockRect, dragCache);
      if (event.isFinal === true) {
        draggingClockRect = false;
        dragCache = null;
        goToNextView();
      }
    }
    function goToNextView() {
      if (view.value === "hour") {
        view.value = "minute";
      } else if (props.withSeconds && view.value === "minute") {
        view.value = "second";
      }
    }
    function updateClock(evt, clockRect, cacheVal) {
      const pos = position(evt), height = Math.abs(pos.top - clockRect.top), distance = Math.sqrt(
        Math.pow(Math.abs(pos.top - clockRect.top), 2) + Math.pow(Math.abs(pos.left - clockRect.left), 2)
      );
      let val, angle = Math.asin(height / distance) * (180 / Math.PI);
      if (pos.top < clockRect.top) {
        angle = clockRect.left < pos.left ? 90 - angle : 270 + angle;
      } else {
        angle = clockRect.left < pos.left ? angle + 90 : 270 - angle;
      }
      if (view.value === "hour") {
        val = angle / 30;
        if (validHours.value !== null) {
          const am = computedFormat24h.value !== true ? isAM.value === true : validHours.value.am.values.length !== 0 && validHours.value.pm.values.length !== 0 ? distance >= clockRect.dist : validHours.value.am.values.length !== 0;
          val = getNormalizedClockValue(
            val + (am === true ? 0 : 12),
            validHours.value[am === true ? "am" : "pm"]
          );
        } else {
          val = Math.round(val);
          if (computedFormat24h.value === true) {
            if (distance < clockRect.dist) {
              if (val < 12) {
                val += 12;
              }
            } else if (val === 12) {
              val = 0;
            }
          } else if (isAM.value === true && val === 12) {
            val = 0;
          } else if (isAM.value === false && val !== 12) {
            val += 12;
          }
        }
        if (computedFormat24h.value === true) {
          isAM.value = val < 12;
        }
      } else {
        val = Math.round(angle / 6) % 60;
        if (view.value === "minute" && validMinutes.value !== null) {
          val = getNormalizedClockValue(val, validMinutes.value);
        } else if (view.value === "second" && validSeconds.value !== null) {
          val = getNormalizedClockValue(val, validSeconds.value);
        }
      }
      if (cacheVal !== val) {
        setModel[view.value](val);
      }
      return val;
    }
    const setView = {
      hour() {
        view.value = "hour";
      },
      minute() {
        view.value = "minute";
      },
      second() {
        view.value = "second";
      }
    };
    function setAmOnKey(e) {
      e.keyCode === 13 && setAm();
    }
    function setPmOnKey(e) {
      e.keyCode === 13 && setPm();
    }
    function onClick(evt) {
      if (shouldAbortInteraction() !== true) {
        if ($q.platform.is.desktop !== true) {
          updateClock(evt, getClockRect());
        }
        goToNextView();
      }
    }
    function onMousedown(evt) {
      if (shouldAbortInteraction() !== true) {
        updateClock(evt, getClockRect());
      }
    }
    function onKeyupHour(e) {
      if (e.keyCode === 13) {
        view.value = "hour";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validHours.value !== null) {
          const values = computedFormat24h.value === true ? validHours.value.values : validHours.value[isAM.value === true ? "am" : "pm"].values;
          if (values.length === 0) return;
          if (innerModel.value.hour === null) {
            setHour(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.hour) + payload) % values.length;
            setHour(values[index]);
          }
        } else {
          const wrap = computedFormat24h.value === true ? 24 : 12, offset = computedFormat24h.value !== true && isAM.value === false ? 12 : 0, val = innerModel.value.hour === null ? -payload : innerModel.value.hour;
          setHour(offset + (24 + val + payload) % wrap);
        }
      }
    }
    function onKeyupMinute(e) {
      if (e.keyCode === 13) {
        view.value = "minute";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validMinutes.value !== null) {
          const values = validMinutes.value.values;
          if (values.length === 0) return;
          if (innerModel.value.minute === null) {
            setMinute(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.minute) + payload) % values.length;
            setMinute(values[index]);
          }
        } else {
          const val = innerModel.value.minute === null ? -payload : innerModel.value.minute;
          setMinute((60 + val + payload) % 60);
        }
      }
    }
    function onKeyupSecond(e) {
      if (e.keyCode === 13) {
        view.value = "second";
      } else if ([37, 39].includes(e.keyCode)) {
        const payload = e.keyCode === 37 ? -1 : 1;
        if (validSeconds.value !== null) {
          const values = validSeconds.value.values;
          if (values.length === 0) return;
          if (innerModel.value.seconds === null) {
            setSecond(values[0]);
          } else {
            const index = (values.length + values.indexOf(innerModel.value.second) + payload) % values.length;
            setSecond(values[index]);
          }
        } else {
          const val = innerModel.value.second === null ? -payload : innerModel.value.second;
          setSecond((60 + val + payload) % 60);
        }
      }
    }
    function setHour(hour) {
      if (innerModel.value.hour !== hour) {
        innerModel.value.hour = hour;
        verifyAndUpdate();
      }
    }
    function setMinute(minute) {
      if (innerModel.value.minute !== minute) {
        innerModel.value.minute = minute;
        verifyAndUpdate();
      }
    }
    function setSecond(second) {
      if (innerModel.value.second !== second) {
        innerModel.value.second = second;
        verifyAndUpdate();
      }
    }
    const setModel = {
      hour: setHour,
      minute: setMinute,
      second: setSecond
    };
    function setAm() {
      if (isAM.value === false) {
        isAM.value = true;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour -= 12;
          verifyAndUpdate();
        }
      }
    }
    function setPm() {
      if (isAM.value === true) {
        isAM.value = false;
        if (innerModel.value.hour !== null) {
          innerModel.value.hour += 12;
          verifyAndUpdate();
        }
      }
    }
    function goToViewWhenHasModel(newView) {
      const model2 = props.modelValue;
      if (view.value !== newView && model2 !== void 0 && model2 !== null && model2 !== "" && typeof model2 !== "string") {
        view.value = newView;
      }
    }
    function verifyAndUpdate() {
      if (hourInSelection.value !== null && hourInSelection.value(innerModel.value.hour) !== true) {
        innerModel.value = __splitDate();
        goToViewWhenHasModel("hour");
        return;
      }
      if (minuteInSelection.value !== null && minuteInSelection.value(innerModel.value.minute) !== true) {
        innerModel.value.minute = null;
        innerModel.value.second = null;
        goToViewWhenHasModel("minute");
        return;
      }
      if (props.withSeconds === true && secondInSelection.value !== null && secondInSelection.value(innerModel.value.second) !== true) {
        innerModel.value.second = null;
        goToViewWhenHasModel("second");
        return;
      }
      if (innerModel.value.hour === null || innerModel.value.minute === null || props.withSeconds === true && innerModel.value.second === null) return;
      updateValue();
    }
    function updateValue(obj) {
      const date = Object.assign({ ...innerModel.value }, obj);
      const val = props.calendar === "persian" ? pad(date.hour) + ":" + pad(date.minute) + (props.withSeconds === true ? ":" + pad(date.second) : "") : formatDate(
        new Date(
          date.year,
          date.month === null ? null : date.month - 1,
          date.day,
          date.hour,
          date.minute,
          date.second,
          date.millisecond
        ),
        mask.value,
        locale.value,
        date.year,
        date.timezoneOffset
      );
      date.changed = val !== props.modelValue;
      emit("update:modelValue", val, date);
    }
    function getHeader() {
      const label = [
        h("div", {
          class: "q-time__link " + (view.value === "hour" ? "q-time__link--active" : "cursor-pointer"),
          tabindex: tabindex.value,
          onClick: setView.hour,
          onKeyup: onKeyupHour
        }, stringModel.value.hour),
        h("div", ":"),
        h(
          "div",
          minLink.value === true ? {
            class: "q-time__link " + (view.value === "minute" ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onKeyup: onKeyupMinute,
            onClick: setView.minute
          } : { class: "q-time__link" },
          stringModel.value.minute
        )
      ];
      if (props.withSeconds === true) {
        label.push(
          h("div", ":"),
          h(
            "div",
            secLink.value === true ? {
              class: "q-time__link " + (view.value === "second" ? "q-time__link--active" : "cursor-pointer"),
              tabindex: tabindex.value,
              onKeyup: onKeyupSecond,
              onClick: setView.second
            } : { class: "q-time__link" },
            stringModel.value.second
          )
        );
      }
      const child = [
        h("div", {
          class: "q-time__header-label row items-center no-wrap",
          dir: "ltr"
        }, label)
      ];
      computedFormat24h.value === false && child.push(
        h("div", {
          class: "q-time__header-ampm column items-between no-wrap"
        }, [
          h("div", {
            class: "q-time__link " + (isAM.value === true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setAm,
            onKeyup: setAmOnKey
          }, "AM"),
          h("div", {
            class: "q-time__link " + (isAM.value !== true ? "q-time__link--active" : "cursor-pointer"),
            tabindex: tabindex.value,
            onClick: setPm,
            onKeyup: setPmOnKey
          }, "PM")
        ])
      );
      return h("div", {
        class: "q-time__header flex flex-center no-wrap " + headerClass.value
      }, child);
    }
    function getClock() {
      const current = innerModel.value[view.value];
      return h("div", {
        class: "q-time__content col relative-position"
      }, [
        h(Transition, {
          name: "q-transition--scale"
        }, () => h("div", {
          key: "clock" + view.value,
          class: "q-time__container-parent absolute-full"
        }, [
          h("div", {
            ref: clockRef,
            class: "q-time__container-child fit overflow-hidden"
          }, [
            withDirectives(
              h("div", {
                class: "q-time__clock cursor-pointer non-selectable",
                onClick,
                onMousedown
              }, [
                h("div", { class: "q-time__clock-circle fit" }, [
                  h("div", {
                    class: "q-time__clock-pointer" + (innerModel.value[view.value] === null ? " hidden" : props.color !== void 0 ? ` text-${props.color}` : ""),
                    style: pointerStyle.value
                  }),
                  positions.value.map((pos) => h("div", {
                    class: `q-time__clock-position row flex-center q-time__clock-pos-${pos.index}` + (pos.val === current ? " q-time__clock-position--active " + headerClass.value : pos.disable === true ? " q-time__clock-position--disable" : "")
                  }, [h("span", pos.label)]))
                ])
              ]),
              clockDirectives.value
            )
          ])
        ])),
        props.nowBtn === true ? h(QBtn, {
          class: "q-time__now-button absolute",
          icon: $q.iconSet.datetime.now,
          unelevated: true,
          size: "sm",
          round: true,
          color: props.color,
          textColor: props.textColor,
          tabindex: tabindex.value,
          onClick: setNow
        }) : null
      ]);
    }
    vm.proxy.setNow = setNow;
    return () => {
      const child = [getClock()];
      const def = hSlot(slots.default);
      def !== void 0 && child.push(
        h("div", { class: "q-time__actions" }, def)
      );
      if (props.name !== void 0 && props.disable !== true) {
        injectFormInput(child, "push");
      }
      return h("div", {
        class: classes.value,
        tabindex: -1
      }, [
        getHeader(),
        h("div", { class: "q-time__main col overflow-auto" }, child)
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "page-title page-title--no-margin flex items-center" };
const _hoisted_2$1 = { class: "row items-center justify-end" };
const _hoisted_3 = { class: "row items-center justify-end" };
const _sfc_main$1 = {
  __name: "AppointmentForm",
  props: ["candidates"],
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const loading = ref(false);
    const errors = ref({});
    const evaluators = ref([]);
    const appointment = ref({});
    onMounted(async () => {
      evaluators.value = (await api.get("evaluators")).data.data;
    });
    const fulldatetime = computed(() => {
      let newDate = DateTime.fromFormat(date.value + " " + time.value, "dd/MM/yyyy hh:mm");
      return newDate.toISO();
    });
    const date = ref(DateTime.now().toFormat("dd/MM/yyyy"));
    const time = ref(DateTime.now().toFormat("hh:mm"));
    async function storeAppointment() {
      loading.value = true;
      errors.value = {};
      try {
        await api.post("appointments", { ...appointment.value, date: fulldatetime.value });
        Notify.create({ caption: "Guardado con exito", icon: "sym_o_check_circle", iconColor: "positive" });
        emits("close");
      } catch (error) {
        console.log(error);
        errors.value = error.formatted ? error.formatted : {};
        Notify.create({ caption: "Por favor, valide la informacion", icon: "sym_o_info", iconColor: "negative" });
      }
      loading.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { style: { "width": "500px" } }, {
        default: withCtx(() => [
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$1, [
                createVNode(QIcon, {
                  name: "calendar_today",
                  class: "q-mr-sm"
                }),
                _cache[9] || (_cache[9] = createTextVNode(" Programar cita "))
              ])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "q-gutter-y-md" }, {
            default: withCtx(() => [
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                label: "Candidatos",
                options: __props.candidates,
                modelValue: appointment.value.candidate_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => appointment.value.candidate_id = $event),
                "emit-value": "",
                "option-label": "full_name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                label: "Tipo de cita",
                options: [{ name: "Unico tipo de cita", id: 1 }],
                modelValue: appointment.value.type_id,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => appointment.value.type_id = $event),
                "emit-value": "",
                "option-label": "name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["modelValue"]),
              createVNode(QSelect, {
                outlined: "",
                "stack-label": "",
                label: "Atendera",
                options: evaluators.value,
                modelValue: appointment.value.evaluator_id,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appointment.value.evaluator_id = $event),
                "emit-value": "",
                "option-label": "name",
                "option-value": "id",
                "map-options": ""
              }, null, 8, ["options", "modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: date.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => date.value = $event),
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
                            modelValue: date.value,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => date.value = $event),
                            mask: "DD/MM/YYYY"
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_2$1, [
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
              }, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                modelValue: time.value,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => time.value = $event),
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
                            modelValue: time.value,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => time.value = $event)
                          }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_3, [
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
              }, 8, ["modelValue"]),
              createVNode(QInput, {
                outlined: "",
                "stack-label": "",
                label: "Observaciones",
                modelValue: appointment.value.comments,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => appointment.value.comments = $event),
                type: "textarea"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          createVNode(QCardSection, { class: "flex justify-end" }, {
            default: withCtx(() => [
              createVNode(QBtn, {
                onClick: _cache[8] || (_cache[8] = ($event) => emits("close")),
                class: "q-mr-sm",
                unelevated: "",
                outline: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[10] || (_cache[10] = [
                  createTextVNode("Cerrar")
                ])),
                _: 1
              }),
              createVNode(QBtn, {
                onClick: storeAppointment,
                unelevated: "",
                color: "primary"
              }, {
                default: withCtx(() => _cache[11] || (_cache[11] = [
                  createTextVNode("Guardar")
                ])),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1 = { class: "flex q-mb-lg" };
const _hoisted_2 = { class: "flex justify-end" };
const _sfc_main = {
  __name: "CandidatosPage",
  setup(__props) {
    onMounted(() => fetchCandidates());
    async function fetchCandidates() {
      rows.value = (await api.get("candidates")).data.data;
    }
    const appointmentDialog = ref(false);
    const rows = ref([]);
    const columns = ref([
      {
        name: "name",
        label: "Nombre de Candidato",
        align: "left",
        field: "full_name",
        sortable: true
      },
      {
        name: "sheet",
        label: "Folio",
        align: "left",
        field: "sheet",
        sortable: true
      },
      {
        name: "date",
        label: "Fecha de Evaluación",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.date : "NO DISPONIBLE",
        sortable: true
      },
      {
        name: "evaluator",
        label: "Evaluador",
        align: "left",
        field: (row) => row.evaluation_schedule ? row.evaluation_schedule.evaluator.name : "No disponible",
        sortable: true
      },
      {
        name: "is_candidate",
        label: "Candidato",
        align: "left",
        field: (row) => row.is_candidate ? "Sí" : "No",
        sortable: true
      },
      {
        name: "notes",
        label: "Observaciones",
        align: "left",
        field: () => "Lörem ipsum orade kövis då antivaxxare.",
        sortable: true
      },
      {
        name: "actions",
        label: "Acciones",
        align: "right",
        sortable: false
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode("h1", { class: "page-title" }, "Candidatos y Evaluaciones", -1)),
          createBaseVNode("div", _hoisted_1, [
            createVNode(QBtn, {
              color: "primary",
              icon: "description",
              outline: "",
              class: "q-mr-md",
              to: "/candidatos/reportes"
            }, {
              default: withCtx(() => _cache[3] || (_cache[3] = [
                createTextVNode("Reporte de candidatos ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "calendar_today",
              outline: "",
              onClick: _cache[0] || (_cache[0] = ($event) => appointmentDialog.value = true)
            }, {
              default: withCtx(() => _cache[4] || (_cache[4] = [
                createTextVNode("Programar cita ")
              ])),
              _: 1
            }),
            createVNode(QBtn, {
              color: "primary",
              icon: "add",
              class: "q-ml-auto",
              unelevated: "",
              to: "/candidatos/registrar"
            }, {
              default: withCtx(() => _cache[5] || (_cache[5] = [
                createTextVNode(" Nuevo Candidato ")
              ])),
              _: 1
            })
          ]),
          createVNode(QTable, {
            "wrap-cells": "",
            columns: columns.value,
            rows: rows.value,
            pagination: { rowsPerPage: 0 }
          }, {
            "body-cell-actions": withCtx((props) => [
              createVNode(QTd, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2, [
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "edit",
                      to: `candidatos/${props.row.id}/editar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "chat",
                      to: `candidatos/${props.row.id}/entrevistar`
                    }, null, 8, ["to"]),
                    createVNode(QBtn, {
                      dense: "",
                      flat: "",
                      round: "",
                      icon: "list",
                      to: `candidatos/${props.row.id}/evaluar`
                    }, null, 8, ["to"])
                  ])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["columns", "rows"]),
          createVNode(QDialog, {
            modelValue: appointmentDialog.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => appointmentDialog.value = $event)
          }, {
            default: withCtx(() => [
              createVNode(_sfc_main$1, {
                candidates: rows.value,
                onClose: _cache[1] || (_cache[1] = ($event) => appointmentDialog.value = false)
              }, null, 8, ["candidates"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      });
    };
  }
};
const CandidatosPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7a048d8"]]);
export {
  CandidatosPage as default
};
