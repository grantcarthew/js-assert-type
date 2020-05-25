export {
  isUndefined,
  isNull,
  isObject,
  isObjectOrArray,
  isFunction,
  isAsyncFunction,
  isString,
  isNan,
  isNumber,
  isInteger,
  isBigInt,
  isInfinity,
  isBoolean,
  isTrue,
  isFalse,
  isDate,
  isDateObject,
  isDateString,
  isUuid,
  isArray,
  isError,
};

const uuidRegExp =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isUndefined(value) {
  return Object.prototype.toString.call(value) === "[object Undefined]";
}

function isNull(value) {
  return value === null
}

function isObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

function isObjectOrArray(value) {
  return isObject(value) || Array.isArray(value);
}

function isFunction(value) {
  return Object.prototype.toString.call(value) === "[object Function]";
}

function isAsyncFunction(value) {
  return Object.prototype.toString.call(value) === "[object AsyncFunction]";
}

function isString(value) {
  return typeof value === "string";
}

function isNan(value) {
  return Number.isNaN(value);
}

function isNumber(value) {
  return Object.prototype.toString.call(value) === "[object Number]" &&
    !Number.isNaN(value);
}

function isInteger(value) {
  return isNumber(value) && value % 1 === 0;
}

function isBigInt(value) {
  return Object.prototype.toString.call(value) === "[object BigInt]" &&
    !Number.isNaN(value);
}

function isInfinity(value) {
  return value === Infinity
}

function isBoolean(value) {
  return Object.prototype.toString.call(value) === "[object Boolean]";
}

function isTrue(value) {
  return isBoolean(value) && value === true;
}

function isFalse(value) {
  return isBoolean(value) && value === false;
}

function isDate(value) {
  return value instanceof Date ||
    Object.prototype.toString.call(value) === "[object Date]";
}

function isDateObject(value) {
  return isDate(value);
}

function isDateString(value) {
  if (value == null || !isString(value)) return false;
  return !isNaN(Date.parse(value));
}

function isUuid(value) {
  if (!isString(value)) return false;
  return uuidRegExp.test(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function isError(value) {
  return value instanceof Error;
}
