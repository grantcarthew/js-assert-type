# JavaScript Assert Type

A simple JavaScript type assertion or type testing module.

## Usage

```js
import * as assertType from "https://raw.githubusercontent.com/grantcarthew/js-assert-type/v1.0.0/index.js"

assertType.isDate(new Date()) // true
assertType.isDate([]) // false

console.log
```

## Functions

Following is the list of available assert functions:

* isUndefined
* isNull
* isObject
* isObjectOrArray
* isFunction
* isAsyncFunction
* isGeneratorFunction
* isGenerator
* isString
* isNan
* isNumber
* isInteger
* isBigInt
* isInfinity
* isBoolean
* isTrue
* isFalse
* isDate
* isDateObject
* isDateString
* isUuid
* isArray
* isInt8Array
* isUint8Array
* isUint8ClampedArray
* isInt16Array
* isUint16Array
* isInt32Array
* isUint32Array
* isFloat32Array
* isFloat64Array
* isBigInt64Array
* isBigUint64Array
* isArrayBuffer
* isSharedArrayBuffer
* isError
* isRegExp
* isSymbol
* isMap
* isWeakMap
* isSet
* isWeakSet
* isDataView
* isPromise

## Testing

Install [Deno](https://deno.land/) and then type the following command from
inside the code directory:

```js
deno test
```
