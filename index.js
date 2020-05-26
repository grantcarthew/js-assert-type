export {
  isUndefined,
  isNull,
  isObject,
  isObjectOrArray,
  isFunction,
  isAsyncFunction,
  isGeneratorFunction,
  isGenerator,
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
  isInt8Array,
  isUint8Array,
  isUint8ClampedArray,
  isInt16Array,
  isUint16Array,
  isInt32Array,
  isUint32Array,
  isFloat32Array,
  isFloat64Array,
  isBigInt64Array,
  isBigUint64Array,
  isArrayBuffer,
  isSharedArrayBuffer,
  isError,
  isRegExp,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isDataView,
  isPromise,
};

const uuidRegExp =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isUndefined(value) {
  return Object.prototype.toString.call(value) === "[object Undefined]";
}

function isNull(value) {
  return value === null;
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

function isGeneratorFunction(value) {
  return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}

function isGenerator(value) {
  return Object.prototype.toString.call(value) === "[object Generator]";
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
  return value === Infinity;
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

function isInt8Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Int8Array]";
}

function isUint8Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Uint8Array]";
}

function isUint8ClampedArray(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Uint8ClampedArray]";
}

function isInt16Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Int16Array]";
}

function isUint16Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Uint16Array]";
}

function isInt32Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Int32Array]";
}

function isUint32Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Uint32Array]";
}

function isFloat32Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Float32Array]";
}

function isFloat64Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object Float64Array]";
}

function isBigInt64Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object BigInt64Array]";
}

function isBigUint64Array(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object BigUint64Array]";
}

function isArrayBuffer(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object ArrayBuffer]";
}

function isSharedArrayBuffer(value) {
  return Array.isArray &&
    Object.prototype.toString.call(value) === "[object SharedArrayBuffer]";
}

function isError(value) {
  return value instanceof Error;
}

function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}

function isSymbol(value) {
  return Object.prototype.toString.call(value) === "[object Symbol]";
}

function isMap(value) {
  return Object.prototype.toString.call(value) === "[object Map]";
}

function isWeakMap(value) {
  return Object.prototype.toString.call(value) === "[object WeakMap]";
}

function isSet(value) {
  return Object.prototype.toString.call(value) === "[object Set]";
}

function isWeakSet(value) {
  return Object.prototype.toString.call(value) === "[object WeakSet]";
}

function isDataView(value) {
  return Object.prototype.toString.call(value) === "[object DataView]";
}

function isPromise(value) {
  return Object.prototype.toString.call(value) === "[object Promise]";
}
