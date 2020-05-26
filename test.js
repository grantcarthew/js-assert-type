import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";
import {
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
} from "./index.js";

const { test } = Deno;
const gen = function* () {};

function typeTest(fn) {
  const flags = [];
  fn(undefined) === true && flags.push("undefined");
  fn(null) === true && flags.push("null");
  fn(1) === true && flags.push("Number");
  fn(1n) === true && flags.push("BigInt");
  fn(Infinity) === true && flags.push("Infinity");
  fn(Number.NaN) === true && flags.push("NaN");
  fn("String") === true && flags.push("String");
  fn(/^[0-9]/i) === true && flags.push("RegExp");
  fn({ key: "value" }) === true && flags.push("Object");
  fn(Symbol("Symbol")) === true && flags.push("Symbol");
  fn(true) === true && flags.push("true");
  fn(false) === true && flags.push("false");
  fn(() => {}) === true && flags.push("Function");
  fn(async () => {}) === true && flags.push("AsyncFunction");
  fn(gen) === true && flags.push("GeneratorFunction");
  fn(gen()) === true && flags.push("Generator");
  fn(new Date()) === true && flags.push("Date");
  fn(["Array"]) === true && flags.push("Array");
  fn(new Int8Array()) === true && flags.push("Int8Array");
  fn(new Uint8Array()) === true && flags.push("Uint8Array");
  fn(new Uint8ClampedArray()) === true && flags.push("Uint8ClampedArray");
  fn(new Int16Array()) === true && flags.push("Int16Array");
  fn(new Uint16Array()) === true && flags.push("Uint16Array");
  fn(new Int32Array()) === true && flags.push("Int32Array");
  fn(new Uint32Array()) === true && flags.push("Uint32Array");
  fn(new Float32Array()) === true && flags.push("Float32Array");
  fn(new Float64Array()) === true && flags.push("Float64Array");
  fn(new BigInt64Array()) === true && flags.push("BigInt64Array");
  fn(new BigUint64Array()) === true && flags.push("BigUint64Array");
  fn(new ArrayBuffer()) === true && flags.push("ArrayBuffer");
  fn(new SharedArrayBuffer()) === true && flags.push("SharedArrayBuffer");
  fn(new Map()) === true && flags.push("Map");
  fn(new WeakMap()) === true && flags.push("WeakMap");
  fn(new Set()) === true && flags.push("Set");
  fn(new WeakSet()) === true && flags.push("WeakSet");
  fn(new Error()) === true && flags.push("Error");
  fn(new DataView(new ArrayBuffer())) === true && flags.push("DataView");
  fn(Promise.resolve()) === true && flags.push("Promise");
  return flags;
}

test("isUndefined", () => {
  const flags = typeTest(isUndefined);
  assertEquals(flags, ["undefined"]);
});

test("isNull", () => {
  const flags = typeTest(isNull);
  assertEquals(flags, ["null"]);
});

test("isObject", () => {
  const flags = typeTest(isObject);
  assertEquals(flags, ["Object"]);
});

test("isObjectOrArray", () => {
  const flags = typeTest(isObjectOrArray);
  assertEquals(flags, ["Object", "Array"]);
});

test("isFunction", () => {
  const flags = typeTest(isFunction);
  assertEquals(flags, ["Function"]);
});

test("isAsyncFunction", () => {
  const flags = typeTest(isAsyncFunction);
  assertEquals(flags, ["AsyncFunction"]);
});

test("isString", () => {
  const flags = typeTest(isString);
  assertEquals(flags, ["String"]);
});

test("isNan", () => {
  const flags = typeTest(isNan);
  assertEquals(flags, ["NaN"]);
});

test("isNumber", () => {
  const flags = typeTest(isNumber);
  assertEquals(flags, ["Number", "Infinity"]);
});

test("isInteger", () => {
  const flags = typeTest(isInteger);
  assertEquals(flags, ["Number"]);
  assert(isInteger(0.5) === false);
  assert(isInteger(-1.5) === false);
});

test("isBigInt", () => {
  const flags = typeTest(isBigInt);
  assertEquals(flags, ["BigInt"]);
});

test("isInfinity", () => {
  const flags = typeTest(isInfinity);
  assertEquals(flags, ["Infinity"]);
});

test("isBoolean", () => {
  const flags = typeTest(isBoolean);
  assertEquals(flags, ["true", "false"]);
});

test("isTrue", () => {
  const flags = typeTest(isTrue);
  assertEquals(flags, ["true"]);
});

test("isFalse", () => {
  const flags = typeTest(isFalse);
  assertEquals(flags, ["false"]);
});

test("isDate", () => {
  const flags = typeTest(isDate);
  assertEquals(flags, ["Date"]);
  assert(!isDate("2020-01-01"));
});

test("isDateObject", () => {
  const flags = typeTest(isDateObject);
  assertEquals(flags, ["Date"]);
  assert(!isDateObject("2020-01-01"));
});

test("isDateString", () => {
  const flags = typeTest(isDateString);
  assertEquals(flags, []);
  assert(isDateString("2020-01-01"));
});

test("isUuid", () => {
  const flags = typeTest(isUuid);
  assertEquals(flags, []);
  assert(isUuid(uuid.generate()));
});

test("isError", () => {
  const flags = typeTest(isError);
  assertEquals(flags, ["Error"]);
});

test("isArray", () => {
  const flags = typeTest(isArray);
  assertEquals(flags, ["Array"]);
});

test("isInt8Array", () => {
  const flags = typeTest(isInt8Array);
  assertEquals(flags, ["Int8Array"]);
});

test("isUint8Array", () => {
  const flags = typeTest(isUint8Array);
  assertEquals(flags, ["Uint8Array"]);
});

test("isUint8ClampedArray", () => {
  const flags = typeTest(isUint8ClampedArray);
  assertEquals(flags, ["Uint8ClampedArray"]);
});

test("isInt16Array", () => {
  const flags = typeTest(isInt16Array);
  assertEquals(flags, ["Int16Array"]);
});

test("isUint16Array", () => {
  const flags = typeTest(isUint16Array);
  assertEquals(flags, ["Uint16Array"]);
});

test("isInt32Array", () => {
  const flags = typeTest(isInt32Array);
  assertEquals(flags, ["Int32Array"]);
});

test("isUint32Array", () => {
  const flags = typeTest(isUint32Array);
  assertEquals(flags, ["Uint32Array"]);
});

test("isFloat32Array", () => {
  const flags = typeTest(isFloat32Array);
  assertEquals(flags, ["Float32Array"]);
});

test("isFloat64Array", () => {
  const flags = typeTest(isFloat64Array);
  assertEquals(flags, ["Float64Array"]);
});

test("isBigInt64Array", () => {
  const flags = typeTest(isBigInt64Array);
  assertEquals(flags, ["BigInt64Array"]);
});

test("isBigUint64Array", () => {
  const flags = typeTest(isBigUint64Array);
  assertEquals(flags, ["BigUint64Array"]);
});

test("isArrayBuffer", () => {
  const flags = typeTest(isArrayBuffer);
  assertEquals(flags, ["ArrayBuffer"]);
});

test("isSharedArrayBuffer", () => {
  const flags = typeTest(isSharedArrayBuffer);
  assertEquals(flags, ["SharedArrayBuffer"]);
});

test("isRegExp", () => {
  const flags = typeTest(isRegExp);
  assertEquals(flags, ["RegExp"]);
});

test("isSymbol", () => {
  const flags = typeTest(isSymbol);
  assertEquals(flags, ["Symbol"]);
});

test("isGeneratorFunction", () => {
  const flags = typeTest(isGeneratorFunction);
  assertEquals(flags, ["GeneratorFunction"]);
});

test("isGenerator", () => {
  const flags = typeTest(isGenerator);
  assertEquals(flags, ["Generator"]);
});

test("isMap", () => {
  const flags = typeTest(isMap);
  assertEquals(flags, ["Map"]);
});

test("isWeakMap", () => {
  const flags = typeTest(isWeakMap);
  assertEquals(flags, ["WeakMap"]);
});

test("isSet", () => {
  const flags = typeTest(isSet);
  assertEquals(flags, ["Set"]);
});

test("isWeakSet", () => {
  const flags = typeTest(isWeakSet);
  assertEquals(flags, ["WeakSet"]);
});

test("isDataView", () => {
  const flags = typeTest(isDataView);
  assertEquals(flags, ["DataView"]);
});

test("isPromise", () => {
  const flags = typeTest(isPromise);
  assertEquals(flags, ["Promise"]);
});
