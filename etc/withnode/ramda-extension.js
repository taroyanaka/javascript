
//  Ramda-extension v0.7.1
//  https://github.com/tommmyy/ramda-extension
//  (c) 2016-2019
//  Ramda-extension may be freely distributed under the Apache-2.0 license.

(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
(factory((global.R_ = {}),global.R));
}(this, (function (exports,ramda) { 'use strict';

/**
 * Returns true if argument equals to 1.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is 0
 *
 * @example
 *
 *        R_.equalsToZero(3)	// false
 *        R_.equalsToZero(1)	// true
 *        R_.equalsToZero(-3)	// false
 *
 * @sig a -> Boolean
 */

var equalsToZero =
/*#__PURE__*/
ramda.equals(0);

var emptyString = '';
var emptyArray = [];
var emptyObject = {};

/**
 * Testing if argument equals to ''
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty string
 *
 * @example
 *
 *        R_.equalsToEmptyString('')	// true
 *        R_.equalsToEmptyString('hi')	// false
 *
 * @sig a -> Boolean
 */

var equalsToEmptyString =
/*#__PURE__*/
ramda.equals(emptyString);

/**
 * Returns true if argument is neither null or undefined.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNil(null)		// false
 *        R_.isNotNil(undefined)	// false
 *        R_.isNotNil('')		// true
 *        R_.isNotNil(false)	// true
 *        R_.isNotNil(0)		// true
 *        R_.isNotNil([])		// true
 *        R_.isNotNil({})		// true
 *
 * @sig a -> Boolean
 */

var isNotNil =
/*#__PURE__*/
ramda.complement(ramda.isNil);

/**
 * Alias for `isNotNil`
 *
 * @deprecated
 * @func
 * @category Logic
 * @see isNotNil
 *
 * @example
 *
 *        R_.notNil(null)		// false
 *        R_.notNil(undefined)	// false
 *        R_.notNil('')		// true
 *        R_.notNil(false)	// true
 *        R_.notNil(0)		// true
 *        R_.notNil([])		// true
 *        R_.notNil({})		// true
 *
 * @sig a -> Boolean
 */

var notNil = isNotNil;

/**
 * Returns true if the given value is not its type's empty value
 *
 * @func
 * @category Logic
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.isNotEmpty([1, 2, 3]);   // true
 *        R_.isNotEmpty([]);          // false
 *        R_.isNotEmpty('');          // false
 *        R_.isNotEmpty(null);        // true
 *        R_.isNotEmpty({});          // false
 *        R_.isNotEmpty({length: 0}); // true
 *
 */

var isNotEmpty =
/*#__PURE__*/
ramda.complement(ramda.isEmpty);

/**
 * Alias for `isNotEmpty`
 *
 * @deprecated
 * @func
 * @category Logic
 * @see isNotEmpty
 *
 * @example
 *
 *        R_.notEmpty([1, 2, 3]);   // true
 *        R_.notEmpty([]);          // false
 *        R_.notEmpty('');          // false
 *        R_.notEmpty(null);        // true
 *        R_.notEmpty({});          // false
 *        R_.notEmpty({length: 0}); // true
 *
 * @sig a -> Boolean
 */

var notEmpty = isNotEmpty;

/* eslint-disable max-len */

/**
 * Return negation of native isNaN function.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNaN(0)            // true
 *        R_.isNotNaN('')           // true
 *        R_.isNotNaN([])           // true
 *        R_.isNotNaN(null)         // true
 *        R_.isNotNaN({})           // false
 *        R_.isNotNaN(NaN)          // false
 *        R_.isNotNaN(undefined)    // false
 *
 * @see http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
 *
 * @sig a -> Boolean
 */

var isNotNaN =
/*#__PURE__*/
ramda.complement(isNaN);
/* eslint-enable max-len */

/**
 * Alias for `isNotNaN`.
 *
 * @deprecated [description]
 * @func
 * @category Logic
 * @see isNotNaN
 *
 * @example
 *
 *        R_.notNaN(0)            // true
 *        R_.notNaN('')           // true
 *        R_.notNaN([])           // true
 *        R_.notNaN(null)         // true
 *        R_.notNaN({})           // false
 *        R_.notNaN(NaN)          // false
 *        R_.notNaN(undefined)    // false
 *
 * @sig a -> Boolean
 */

var notNaN = isNotNaN;

/**
 * Returns true if argument is finite numeric value.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNumeric(-1)	// true
 *    R_.isNumeric(0)		// true
 *        R_.isNumeric(1)		// true
 *        R_.isNumeric(1.1)	// true
 *        R_.isNumeric(Infinity)	// false
 *        R_.isNumeric(NaN)	// false
 *        R_.isNumeric('')	// false
 *        R_.isNumeric(() => {})	// false
 *        R_.isNumeric(false)	// false
 *        R_.isNumeric(null)	// false
 *        R_.isNumeric(undefined)	// false
 *        R_.isNumeric({})	// false
 *        R_.isNumeric([])	// false
 *
 * @sig a -> Boolean
 *
 */

var isNumeric =
/*#__PURE__*/
ramda.allPass([
/*#__PURE__*/
ramda.o(notNaN, parseFloat), isFinite]);

/**
 * Returns true if argument is not finite numeric value.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNumeric(-1)	// false
 *        R_.isNotNumeric(0)	// false
 *        R_.isNotNumeric(1)	// false
 *        R_.isNotNumeric(1.1)	// false
 *        R_.isNotNumeric(Infinity)	// true
 *        R_.isNotNumeric(NaN)	// true
 *        R_.isNotNumeric('')	// true
 *        R_.isNotNumeric(() => {})	// true
 *        R_.isNotNumeric(false)	// true
 *        R_.isNotNumeric(null)	// true
 *        R_.isNotNumeric(undefined)// true
 *        R_.isNotNumeric({})	// true
 *        R_.isNotNumeric([])	// true
 *
 * @sig a -> Boolean
 *
 */

var isNotNumeric =
/*#__PURE__*/
ramda.complement(isNumeric);

/**
 * Alias for `isNotNumeric`.
 *
 * @deprecated
 * @func
 * @category Logic
 * @see  isNotNumeric
 *
 * @example
 *
 *        R_.notNumeric(-1)	// false
 *        R_.notNumeric(0)	// false
 *        R_.notNumeric(1)	// false
 *        R_.notNumeric(1.1)	// false
 *        R_.notNumeric(Infinity)	// true
 *        R_.notNumeric(NaN)	// true
 *        R_.notNumeric('')	// true
 *        R_.notNumeric(() => {})	// true
 *        R_.notNumeric(false)	// true
 *        R_.notNumeric(null)	// true
 *        R_.notNumeric(undefined)// true
 *        R_.notNumeric({})	// true
 *        R_.notNumeric([])	// true
 *
 * @sig a -> Boolean
 *
 */

var notNumeric = isNotNumeric;

/**
 * Always returns null.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysNull() // null
 *
 * @sig a -> Object
 */

var alwaysNull =
/*#__PURE__*/
ramda.always(null);

/**
 * Always returns empty string.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysEmptyString() // ''
 *
 * @sig a -> String
 */

var alwaysEmptyString =
/*#__PURE__*/
ramda.always(emptyString);

/**
 * Returns a function that creates new instances of whatever argument
 * is passed in each time it's called.
 *
 * @func
 * @private
 * @example
 *
 *  const alwaysNewArray = alwaysNew([]);
 *  const a = alwaysNewArray();
 *  const b = alwaysNewArray();
 *  // a !== b
 *
 */

var alwaysNew =
/*#__PURE__*/
ramda.thunkify(ramda.clone);

/**
 * Always returns a new empty array.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysEmptyArray() // []
 *
 * @sig a -> Array
 */

var alwaysEmptyArray =
/*#__PURE__*/
alwaysNew(emptyArray);

/**
 * Always returns zero.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysZero() // 0
 *
 * @sig * -> Number
 */

var alwaysZero =
/*#__PURE__*/
ramda.always(0);

/**
 * Always returns number one.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysOne() // 1
 *
 * @sig * -> Number
 */

var alwaysOne =
/*#__PURE__*/
ramda.always(1);

/**
 * Always returns a new empty object.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.alwaysEmptyObject() // {}
 *
 * @sig a -> Object
 */

var alwaysEmptyObject =
/*#__PURE__*/
alwaysNew(emptyObject);

/**
 * Applies composition by a list of functions.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.applyCompose([multiply(2), add(1)])(3) // 8
 *
 * @sig [(a -> b)] -> a -> b
 */

var applyCompose =
/*#__PURE__*/
ramda.apply(ramda.compose);

/**
 * Applies pipe by to a list of functions.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.applyPipe([multiply(2), add(1)])(3) // 7
 *
 * @sig [(a -> b)] -> a -> b
 */

var applyPipe =
/*#__PURE__*/
ramda.apply(ramda.pipe);

/**
 * See if an number (`val`) is within an array of two numbers ('list').
 *
 * @func
 * @category Type
 * @param {Number} a Starting value
 * @param {Number} b Ending value
 * @param {Number} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R_.between(1, 5, 4); //=> true
 *      R_.between(3, 8, 2.1); //=> false
 *      R_.between(100.1, 102, 100.1); //=> true


 */

var between =
/*#__PURE__*/
ramda.curry(function (min, max, val) {
  if (val >= min && val <= max) {
    return true;
  }

  return false;
});

/**
 * Returns true if argument is type of Array.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isArray([]) // true
 *        R_.isArray('') // false

 * @sig a -> Boolean
 */

var isArray =
/*#__PURE__*/
ramda.is(Array);

/**
 * Returns true if argument is type of Function.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isFunction(() => {})	// true
 *        R_.isFunction({})	// false
 *        R_.isFunction([])	// false
 *        R_.isFunction('')	// false
 *        R_.isFunction(0)	// false
 *
 * @sig a -> Boolean
 *
 */

var isFunction =
/*#__PURE__*/
ramda.is(Function);

/**
 * Returns true if argument is type of Object.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isObject({}) // true
 *        R_.isObject([]) // true
 *        R_.isObject('') // false

 * @sig a -> Boolean
 */

var isObject =
/*#__PURE__*/
ramda.is(Object);

/**
 * Returns true if argument is lower than 0.
 *
 * @func
 * @category Math
 *
 * @example
 *
 *        R_.isNegative(3)	// false
 *        R_.isNegative(0)	// false
 *        R_.isNegative(-3)	// true
 *
 * @sig Number -> Boolean
 */

var isNegative =
/*#__PURE__*/
ramda.gt(0);

/**
 * Alias for `equalsToEmptyString`.
 *
 * @deprecated
 * @func
 * @category String
 * @example
 *
 *        R_.equalsEmptyString('')	// true
 *        R_.equalsEmptyString('hi')	// false
 *
 * @see equalsToEmptyString
 * @sig a -> Boolean
 */

var equalsEmptyString = equalsToEmptyString;

/**
 * Returns true if argument is null, undefined or ''.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNilOrEmptyString(null)	// true
 *        R_.isNilOrEmptyString(undefined)// true
 *        R_.isNilOrEmptyString('')	// true
 *        R_.isNilOrEmptyString(false)	// false
 *        R_.isNilOrEmptyString(0)	// false
 *        R_.isNilOrEmptyString([])	// false
 *        R_.isNilOrEmptyString({})	// false
 *
 * @sig a -> Boolean
 */

var isNilOrEmptyString =
/*#__PURE__*/
ramda.anyPass([ramda.isNil, equalsEmptyString]);

/**
 * Returns true if argument is not nil object.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.isNotNilObject({})		// true
 *        R_.isNotNilObject([])		// true
 *        R_.isNotNilObject(() => {})	// true
 *        R_.isNotNilObject(null)		// false
 *        R_.isNotNilObject()		// false
 *        R_.isNotNilObject(1)		// false
 *        R_.isNotNilObject("")		// false
 *
 * @sig a -> Boolean
 *
 */

var isNotNilObject =
/*#__PURE__*/
ramda.allPass([notNil, isObject]);

/**
 * Returns true if argument is RegExp.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *     R_.isRegExp(/foo/) // true
 *     R_.isRegExp(0) // false
 *
 * @sig a -> Boolean
 *
 */

var isRegExp =
/*#__PURE__*/
ramda.is(RegExp);

/**
 * Returns true if argument is not RegExp.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *     R_.isNotRegExp(/foo/) // false
 *     R_.isNotRegExp(0) // true
 *
 * @sig a -> Boolean
 *
 */

var isNotRegExp =
/*#__PURE__*/
ramda.complement(isRegExp);

/**
 * Returns true if argument is greater than 0.
 *
 * @func
 * @category Math
 *
 * @example
 *
 *        R_.isPositive(3)	// true
 *        R_.isPositive(0)	// false
 *        R_.isPositive(-3)	// false
 *
 * @sig Number -> Boolean
 */

var isPositive =
/*#__PURE__*/
ramda.lt(0);

/**
 * Returns true if argument is Promise.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isPromise(Promise.resolve()) // true
 *    R_.isPromise(0) // false
 *
 * @sig a -> Boolean
 *
 */

var isPromise =
/*#__PURE__*/
ramda.allPass([isObject,
/*#__PURE__*/
ramda.o(isFunction,
/*#__PURE__*/
ramda.prop('then'))]);

/**
 * Returns true if argument is type of String.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isString({}) // false
 *        R_.isString([]) // false
 *        R_.isString('') // true
 *
 * @sig a -> Boolean
 */

var isString =
/*#__PURE__*/
ramda.is(String);

/**
 * Alias for Boolean constructor. Returns 'true' for truthy values.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean} `true` if `input` is truthy
 *
 * @example
 *
 *        R_.isTruthy(true) // true
 *        R_.isTruthy({}) // true
 *        R_.isTruthy([]) // true
 *        R_.isTruthy(1) // true
 *        R_.isTruthy("hello") // true
 *        R_.isTruthy(false) // false
 *        R_.isTruthy(0) // false
 *        R_.isTruthy("") // false
 *
 * @sig a -> Boolean
 */
var isTruthy = Boolean;

/**
 * Returns `true` for falsy values. Complement of `R_.falsy`.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean} `true` if `input` is falsy
 *
 * @example
 *
 *        R_.isFalsy(true) // false
 *        R_.isFalsy({}) // false
 *        R_.isFalsy([]) // false
 *        R_.isFalsy(1) // false
 *        R_.isFalsy("hello") // false
 *        R_.isFalsy(false) // true
 *        R_.isFalsy(0) // true
 *        R_.isFalsy("") // true
 *
 * @sig a -> Boolean
 */

var isFalsy =
/*#__PURE__*/
ramda.complement(isTruthy);

/**
 * Returns true if the argument is an instance of Error.
 *
 * @func
 * @category Type
 *
 * @example
 *
 *        R_.isError(new Error())	// true
 *        R_.isError(null)	// false
 *
 * @sig a -> Boolean
 *
 */

var isError =
/*#__PURE__*/
ramda.is(Error);

/**
 * Function with side-effect. Logs input to console and returns that input. Should be used only in development.
 *
 * @func
 * @category Debugging
 *
 * @example
 *
 *        R_.log('hello') // logs 'hello'
 *        compose(R_.log, R.sum)([1, 3]) // logs 4
 *
 * @sig a -> a
 *
 */

var log =
/*#__PURE__*/
ramda.tap(function (x) {
  return console.log(x);
});

/**
 * Function with side-effect. Logs input to console and returns that input.
 * Similar to "log" but allows to label logged value. Should be used only in development.
 *
 * @func
 * @category Debugging
 *
 * @sig a -> b -> b
 *
 * @example
 *
 *        compose(calculation2, R_.trace('Page A'), calculation1); // logs "Page A" and result of calculation1
 *
 */

var trace =
/*#__PURE__*/
ramda.useWith(ramda.tap, [
/*#__PURE__*/
ramda.curryN(2, console.log), ramda.identity]);

/**
 * Call function passed as first argument with arguments determined by second parameter in order.
 *
 * @func
 * @category Function
 *
 * @sig (a → ... → b) → [a, ..., b] → c
 *
 * @example
 *
 *        const f = (a) => (b) => a + b
 *
 *        R_.reduceCallable(f, [1, 2]) // 3
 *
 */

var reduceCallable =
/*#__PURE__*/
ramda.reduce(ramda.call);

/**
 * Takes first argument from the arguments
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.headArg('a', 'b', 'c') // a
 *
 *
 */

var headArg =
/*#__PURE__*/
ramda.nthArg(0);

/**
 * Extends the reduce functionality by adding the original accumulator value
 * as a third argument and the original list as a fourth argument to the
 * iterator function.
 *
 * @func
 * @category List
 *
 * @param {Function} fn The iterator function. Receives four arguments, the
 *        accumulator, the current element, the source accumulator and the
 *        source list.
 * @param {*} acc The initial accumulator value and value passed as the source
 *        accumulator value in the iterator function.
 * @param {Array} list The list to iterator over and value passed as the source
 *        list in the iterator function.
 * @return {*} The reduced result.
 *
 * @example
 *        R_.reduceSource((acc, v, sAcc) => v + acc + sAcc, 1, [1, 2, 3]); // 10
 *        R_.reduceSource(R.pipe(R.unapply(R.flatten), R.sum), 0, [1, 2]); // 9
 *
 * @sig ((a, b, a, [b]) -> a) -> a -> [b] -> a
 */

var reduceSource =
/*#__PURE__*/
ramda.converge(ramda.reduce, [
/*#__PURE__*/
ramda.converge(ramda.partialRight, [headArg,
/*#__PURE__*/
// iteratorFn
ramda.unapply(ramda.tail)]),
/*#__PURE__*/
ramda.nthArg(1),
/*#__PURE__*/
// accumulator
ramda.nthArg(2)]);

/**
 * Returns first not nil value
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.findNotNil([null, undefined, 0, true]) // 0
 *
 * @sig [a] -> a
 *
 */

var findNotNil =
/*#__PURE__*/
ramda.find(notNil);

/**
 * Creates pairs from value and list of values.
 * Value is always prepended to the pair.
 *
 * @func
 * @category List
 * @see xPairsRight
 *
 * @example
 *
 *        R_.xPairs(1, [2, 3]) // [[1, 2], [1, 3]]
 *
 * @sig a -> [b] -> [[a, b]]
 */

var xPairs =
/*#__PURE__*/
ramda.useWith(ramda.xprod, [ramda.of, ramda.identity]);

var getPredicates =
/*#__PURE__*/
ramda.compose(
/*#__PURE__*/
ramda.map(
/*#__PURE__*/
ramda.juxt([applyCompose, ramda.last])), xPairs);
/**
 * Returns first result from evaluation of functions in the list, that satisfies predicate.
 * Returns `undefined` otherwise.
 *
 * @func
 * @category Function
 * @see dispatch
 *
 * @param {function} predicate Predicate that is applied to result of calling fn from `listFns` with `values`
 * @param {array} listFns List of functions
 * @param {*} values Values applied to functions from `listFns`
 * @return {any} Returns first result of calling fn from `listFns` with `values` that satisfies `predicate`.
 *
 * @example
 *
 *        const firstTruthy = R_.dispatchWith(Boolean)([
 *           prop("foo"),
 *           prop("bar"),
 *        ])
 *
 *        firstTruthy({foo: "foo", bar: false}) // "foo"
 *        firstTruthy({foo: false, bar: "bar" }) // "bar"
 *
 * @sig [a] -> b|undefined
 */

var dispatchWith =
/*#__PURE__*/
ramda.converge(
/*#__PURE__*/
ramda.call(ramda.cond), [getPredicates]);

/**
 * Returns first not nil result from evaluation of functions in the list.
 * Returns `undefined` otherwise.
 *
 * @func
 * @category Function
 * @see dispatchWith
 *
 * @param {array} listFns List of functions
 * @param {*} values Values applied to functions from `listFns`
 * @return {any} Returns first not nil result of calling fn from `listFns` with `values`.
 *
 * @example
 *
 *        const validateName = R_.dispatch([
 *           ifElse(Boolean, R_.noop, always('Name is required.')),
 *           ifElse(R_.isString, R_.noop, always('Name must be valid.')),
 *        ]);
 *
 *        validateName("") // 'Name is required.'
 *        validateName(111) // 'Name must be valid.'
 *        validateName("Valid name") // undefined
 *
 * @sig [a] -> b|undefined
 */

var dispatch =
/*#__PURE__*/
dispatchWith(notNil);

/**
 * Alias for `alwaysNull`
 *
 * @func
 * @category Function
 *
 * @sig a -> Object
 *
 * @example
 *
 *        R_.noop() // null
 *
 */

var noop = alwaysNull;

/**
 * Constructs RegExp.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        test(R_.constructRegExp('end$', 'gi'), 'in the end') // true
 *
 */

var constructRegExp =
/*#__PURE__*/
ramda.constructN(2, RegExp);

var getRegExp_ =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.flip(constructRegExp)('gi'), [
/*#__PURE__*/
ramda.concat('^')]);
/**
 * Testing string if starts with some prefix.
 *
 * @func
 * @category String
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean} True if `x` starts with `prefix`
 *
 * @example
 *
 *        R_.startsWithPrefix('h', 'hello')	// true
 *        R_.startsWithPrefix('hell', 'hello')	// true
 *        R_.startsWithPrefix('h', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */

var startsWithPrefix =
/*#__PURE__*/
ramda.useWith(ramda.test, [getRegExp_, ramda.identity]);

/**
 * Testing string if starts with some prefix ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} prefix
 * @param  {string} x
 * @return {boolean} True if `x` starts with `prefix` ignore case
 *
 * @example
 *
 *        R_.startsWithPrefixIgnoreCase('h', 'HELLO')	// true
 *        R_.startsWithPrefixIgnoreCase('HELL', 'hello')	// true
 *        R_.startsWithPrefixIgnoreCase('hello', 'hello')	// true
 *        R_.startsWithPrefixIgnoreCase('h', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */

var startsWithPrefixIgnoreCase =
/*#__PURE__*/
ramda.useWith(ramda.startsWith, [ramda.toUpper, ramda.toUpper]);

var getRegExp_$1 =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.flip(constructRegExp)('gi'), [
/*#__PURE__*/
ramda.flip(ramda.concat)('$')]);
/**
 * Testing string if ends with some suffix.
 *
 * @func
 * @category String
 *
 * @param  {string} suffix
 * @param  {string} x
 * @return {boolean}          True if `x` ends with `suffix`
 *
 * @example
 *
 *        R_.endsWithSuffix('o', 'hello')		// true
 *        R_.endsWithSuffix('ello', 'hello')	// true
 *        R_.endsWithSuffix('y', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */

var endsWithSuffix =
/*#__PURE__*/
ramda.useWith(ramda.test, [getRegExp_$1, ramda.identity]);

/**
 * Testing string if ends with some suffix ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} suffix
 * @param  {string} x
 * @return {boolean} True if `x` ends with `suffix` ignore case
 *
 * @example
 *
 *        R_.endsWithSuffixIgnoreCase('o', 'HELLO')	// true
 *        R_.endsWithSuffixIgnoreCase('ELLO', 'hello')	// true
 *        R_.endsWithSuffixIgnoreCase('hello', 'hello')	// true
 *        R_.endsWithSuffixIgnoreCase('o', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */

var endsWithSuffixIgnoreCase =
/*#__PURE__*/
ramda.useWith(ramda.endsWith, [ramda.toUpper, ramda.toUpper]);

/**
 * Converts arguments to list.
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R.compose(R.sum, R_.argumentsToList)(1, 2, 3) // 6
 *
 * @sig (a, b, c, ...) → ([a, b, c, ...])
 */

var argumentsToList =
/*#__PURE__*/
ramda.unapply(ramda.identity);

/**
 * Resolves to true if all elements in first list are found within the second list
 *
 * @func
 * @category List
 *
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If all items from first array are in the second array.
 *
 * @example
 *
 *    R_.containsAll(['a', 'b'], ['a', 'b', 'c']) // true
 *    R_.containsAll(['a', 'b', 'd'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */

var containsAll =
/*#__PURE__*/
ramda.curry(
/*#__PURE__*/
ramda.compose(ramda.isEmpty, ramda.difference));

/**
 * Returns `true` if any of the items from first array are in the second array.
 *
 * @func
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array are in the second array.
 *
 * @example
 *
 *    R_.containsAny(['a', 'e'], ['a', 'b', 'c']) // true
 *    R_.containsAny(['e', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 *
 */

var containsAny =
/*#__PURE__*/
ramda.curry(
/*#__PURE__*/
ramda.compose(ramda.not, ramda.isEmpty, ramda.intersection));

/**
 * Returns `true` if any of the items from first array is not the second array.
 *
 * @func
 * @category List
 *
 * @param {Array} List
 * @param {Array} List
 * @return {Boolean} If any of the items from first array is not in the second array.
 *
 * @example
 *
 *    R_.containsNone(['e', 'f'], ['a', 'b', 'c']) // true
 *    R_.containsNone(['a', 'f'], ['a', 'b', 'c']) // false
 *
 * @sig [a] -> [a] -> Boolean
 */

var containsNone =
/*#__PURE__*/
ramda.curry(
/*#__PURE__*/
ramda.compose(ramda.isEmpty, ramda.intersection));

/**
 * Splits string by dot into list.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.splitByDot('a.b.c') // ['a', 'b', 'c']
 *
 * @sig String -> [String]
 */

var splitByDot =
/*#__PURE__*/
ramda.split('.');

/**
 * Unfolds input object by dot delimetered path inside its keys.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *        R_.unfoldObjectDots({'a.b.c': 1, 'd.e.f': 2, 'g': 3})
 *        // {a: {b: {c: 1}}, d: {e: {f: 2}}, g: 3}
 *
 * @sig Object -> Object
 */

var unfoldObjectDots =
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.o(ramda.mergeAll, ramda.values),
/*#__PURE__*/
ramda.mapObjIndexed(
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.flip(ramda.call), [ramda.identity,
/*#__PURE__*/
ramda.compose(applyCompose,
/*#__PURE__*/
ramda.map(ramda.objOf), splitByDot)])));

/**
 * Capitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toUpperFirst('hello world') // 'Hello world'
 *
 * @sig String -> String
 */

var toUpperFirst =
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.join(''),
/*#__PURE__*/
ramda.adjust(0, ramda.toUpper));

/**
 * Decapitalize first letter.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toLowerFirst('HELLO WORLD') // 'hELLO WORLD'
 *
 * @sig String -> String
 */

var toLowerFirst =
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.join(''),
/*#__PURE__*/
ramda.adjust(0, ramda.toLower));

/**
 * @private
 */

var nonAlphaNumericRegExp =
/*#__PURE__*/
constructRegExp('[^a-zA-Z0-9]+', 'g');

/**
 * Splits string into list. Delimiter is every sequence of non-alphanumerical values.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.splitByNonAlphaNumeric('Hello    world/1'); // ['Hello', 'world', '1']
 *
 * @sig String -> [String]
 *
 */

var splitByNonAlphaNumeric =
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.reject(
/*#__PURE__*/
ramda.equals(emptyString)),
/*#__PURE__*/
ramda.split(nonAlphaNumericRegExp));

/**
 * Converts list of strings to string.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.listToString(['h', 'e', 'l', 'l', 'o']) // 'hello'
 *
 * @sig [String] -> String
 *
 */

var listToString =
/*#__PURE__*/
ramda.join(emptyString);

/**
 * Converts string into PascalCase.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toPascalCase('hello-world')		// 'HelloWorld'
 *        R_.toPascalCase('hello- world')		// 'HelloWorld'
 *        R_.toPascalCase('  hello-/ world/ ')	// 'HelloWorld'
 *
 * @sig String -> String
 */

var toPascalCase =
/*#__PURE__*/
ramda.o(listToString,
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.map(toUpperFirst), splitByNonAlphaNumeric));

/**
 * Converts string into camelCase.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toCamelCase('hello-world')		// 'helloWorld'
 *        R_.toCamelCase('hello- world')		// 'helloWorld'
 *        R_.toCamelCase('  hello-/ world/ ')	// 'helloWorld'
 *
 * @sig String -> String
 *
 */

var toCamelCase =
/*#__PURE__*/
ramda.o(toLowerFirst, toPascalCase);

/**
 * Joins array of string with underscore determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithUnderscore(['a', 'b', 'c']) // 'a_b_c'
 *
 * @sig [String] -> String
 */

var joinWithUnderscore =
/*#__PURE__*/
ramda.join('_');

/**
 * Converts string into snake_case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toSnakeCase('hello-world')		// 'hello_world'
 *        R_.toSnakeCase('hello- world')		// 'hello_world'
 *        R_.toSnakeCase('  hello-/ world/ ')	// 'hello_world'
 *
 * @sig String -> String
 */

var toSnakeCase =
/*#__PURE__*/
ramda.o(joinWithUnderscore,
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.map(ramda.toLower), splitByNonAlphaNumeric));

/**
 * Joins array of string with dash (hyphen) determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithDash(['a', 'b', 'c']) // 'a-b-c'
 *
 * @sig [String] -> String
 */

var joinWithDash =
/*#__PURE__*/
ramda.join('-');

/**
 * Converts string into kebab-case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toKebabCase('hello-world')		// 'hello-world'
 *        R_.toKebabCase('hello- world')		// 'hello-world'
 *        R_.toKebabCase('  hello-/ world/ ')	// 'hello-world'
 *
 * @sig String -> String
 */

var toKebabCase =
/*#__PURE__*/
ramda.o(joinWithDash,
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.map(ramda.toLower), splitByNonAlphaNumeric));

/**
 * Joins array of string with dot determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithDot(['a', 'b', 'c']) // 'a.b.c'
 *
 * @sig [String] -> String
 */

var joinWithDot =
/*#__PURE__*/
ramda.join('.');

/**
 * Converts string into dot.case.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toDotCase('hello-world')		// 'hello.world'
 *        R_.toDotCase('hello/*? world')		// 'hello.world'
 *        R_.toDotCase('  hello -/ world/ ')	// 'hello.world'
 *
 * @sig String -> String
 */

var toDotCase =
/*#__PURE__*/
ramda.o(joinWithDot,
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.map(ramda.toLower), splitByNonAlphaNumeric));

/**
 * Converts string into SCREAMING_SNAKE_CASE.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.toScreamingSnakeCase('hello-world')		// 'HELLO_WORLD'
 *        R_.toScreamingSnakeCase('hello- world')		// 'HELLO_WORLD'
 *        R_.toScreamingSnakeCase('  hello-/ world/ ')	// 'HELLO_WORLD'
 *
 * @sig String -> String
 */

var toScreamingSnakeCase =
/*#__PURE__*/
ramda.o(joinWithUnderscore,
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.map(ramda.toUpper), splitByNonAlphaNumeric));

/**
 * Filters out every nil value in a list.
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.rejectNil([null, undefined, '']); // ['']
 *
 * @sig [a] -> [a]
 *
 */

var rejectNil =
/*#__PURE__*/
ramda.reject(ramda.isNil);

/**
 * Filters out every value in a list that equals to first argument.
 *
 * @func
 * @category List
 *
 * @example
 *
 * 		R_.rejectEq('foo', ['foo', 'bar', 'foo', 'bar']); // ['bar', 'bar']
 *
 * @sig a -> [b] -> [c]
 *
 */

var rejectEq =
/*#__PURE__*/
ramda.useWith(ramda.reject, [ramda.equals, ramda.identity]);

/**
 * Joins array of string with space determiner.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.joinWithSpace(['a', 'b', 'c']) // 'a b c'
 *
 * @sig [String] -> String
 */

var joinWithSpace =
/*#__PURE__*/
ramda.join(' ');

/**
 * Returns an over lens to the first index of list.
 *
 * @func
 * @category List
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.overHead(R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 *
 */

var overHead =
/*#__PURE__*/
ramda.over(
/*#__PURE__*/
ramda.lensIndex(0));

/**
 * Makes a shallow clone of an object, omitting the property at the given dot path.
 * Note that this copies and flattens
 * prototype properties onto the new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @category Object
 *
 * @param {String} path The dot path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @example
 *
 *      R_.dissocDotPath('a.b.c', {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */

var dissocDotPath =
/*#__PURE__*/
ramda.curryN(2,
/*#__PURE__*/
ramda.compose(
/*#__PURE__*/
ramda.apply(ramda.dissocPath),
/*#__PURE__*/
overHead(splitByDot), argumentsToList));

/**
 * Retrieve the value at a given dot path.
 *
 * @func
 * @category Object
 * @param {String} path The dot path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 *
 * @example
 *
 *      R_.dotPath('a.b', {a: {b: 2}}); //=> 2
 *      R_.dotPath('a.b', {c: {b: 2}}); //=> undefined
 *
 */

var dotPath =
/*#__PURE__*/
ramda.useWith(ramda.path, [splitByDot, ramda.identity]);

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path.
 *
 * @func
 * @category Object
 * @param {String} path the dot path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @example
 *
 *      R_.assocDotPath('a.b.c', 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R_.assocDotPath('a.b.c', 42, {a: 5}); //=> {a: {b: {c: 42}}}
 *
 * @sig String -> a -> b
 */

var assocDotPath =
/*#__PURE__*/
ramda.curryN(2,
/*#__PURE__*/
ramda.compose(
/*#__PURE__*/
ramda.apply(ramda.assocPath),
/*#__PURE__*/
overHead(splitByDot), argumentsToList));

/**
 * Takes first argument from the arguments
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        R_.lastArg('a', 'b', 'c') // c
 *
 *
 */

var lastArg =
/*#__PURE__*/
ramda.nthArg(-1);

/**
 * Merge data in object using custom merge fn.
 *
 * @func
 * @category Object
 *
 * @param {String} path The dot path to the value
 * @param {Function} mergeFn The merging function
 * @param {*} value Value to merge
 * @param {Object} obj The object to clone
 * @return {Object} A new object with merge data
 * @example
 *
 *      R_.mergeWithDotPath('a.b', R.merge, { d: 30 }, {a: {b: { c: 20 }}}); //=> {a: {b: { c: 20, d: 30 }}}
 */

var resolveDotPath =
/*#__PURE__*/
ramda.converge(dotPath, [headArg, lastArg]);
var performMerge =
/*#__PURE__*/
ramda.converge(ramda.call, [
/*#__PURE__*/
ramda.nthArg(1), resolveDotPath,
/*#__PURE__*/
ramda.nthArg(2)]);
var mergeWithDotPath =
/*#__PURE__*/
ramda.converge(assocDotPath, [headArg, performMerge, lastArg]);

/**
 * Always returns null.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *        R_.mapKeysAndValues(([a, b]) => [b, a], { foo: "bar", baz: "boo" })
 *        // { bar: "foo", boo: "baz" }
 *
 * @sig ([a] -> [b]) -> Object -> Object
 */

var mapKeysAndValues =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.compose(ramda.fromPairs, ramda.map), [ramda.identity, ramda.toPairs]);

/**
 * Use map function over the keys of the given object
 *
 * @func
 * @category Object
 * @param {Function} fn The function to be called on every key of the input object.
 * @param {Array} obj The object to be iterated over.
 * @return {Array} The new object with mapped keys.
 *
 * @example
 *
 *      R_.mapKeys(R_.toUpperFirst, {x: 1, y: 2, z: 3}); //=> {X: 2, Y: 4, Z: 6}
 *
 */

var mapKeys =
/*#__PURE__*/
ramda.useWith(mapKeysAndValues, [overHead, ramda.identity]);

/**
 * Call apply on function if the function is defined. Otherwise do nothing and return null.
 *
 * @func
 * @category Function
 *
 * @param {Function} fn The function which will be called with `args` when defined
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)` or null
 * @example
 *
 *        const nums = [1, 2, 3];
 *        R_.applyIfNotNil(R.sum, nums) // 6
 *        R_.applyIfNotNil(undefined, nums) // null
 *
 * @sig (*... -> a) -> [*] -> a
 */

var applyIfNotNil =
/*#__PURE__*/
ramda.ifElse(notNil, ramda.apply, alwaysNull);

/**
 * @private
 */

var compareLength =
/*#__PURE__*/
ramda.useWith(ramda.__, [ramda.identity, ramda.length]);

/**
 * Returns true if length of array equals first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthEqualsOne = R_.equalsLength(1)
 *        lengthEqualsOne([{}])	// true
 *        lengthEqualsOne([])	// false
 *
 * @sig Number -> [a] -> Boolean
 */

var equalsLength =
/*#__PURE__*/
compareLength(ramda.equals);

/**
 * Testing string if equals ignoring case.
 *
 * @func
 * @category String
 *
 * @param  {string} x
 * @param  {string} y
 * @return {boolean} True if `x` equals `y` ignore case
 *
 * @example
 *
 *        R_.equalsStringIgnoreCase('hello', 'HELLO')	// true
 *        R_.equalsStringIgnoreCase('HELLO', 'hello')	// true
 *        R_.equalsStringIgnoreCase('hello', 'hello')	// true
 *        R_.equalsStringIgnoreCase('hello', 'good bye')	// false
 *
 * @sig a -> b -> Boolean
 */

var equalsStringIgnoreCase =
/*#__PURE__*/
ramda.useWith(ramda.equals, [ramda.toLower, ramda.toLower]);

/**
 * Returns true if length of array is smaller or equals than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthSmallerThanEqualsOne = R_.gteThanLength(1)
 *        lengthSmallerThanEqualsTwo([{},{}])	// false
 *        lengthSmallerThanEqualsTwo([{}])	// true
 *        lengthSmallerThanEqualsTwo([])		// true
 *
 * @sig Number -> [a] -> Boolean
 */

var gteThanLength =
/*#__PURE__*/
compareLength(ramda.gte);

/**
 * Returns true if length of array is smaller than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthSmallerThanTwo = R_.gtThanLength(2)
 *        lengthSmallerThanTwo([{}])	// true
 *        lengthSmallerThanTwo([{},{}])	// false
 *
 * @sig Number -> [a] -> Boolean
 */

var gtThanLength =
/*#__PURE__*/
compareLength(ramda.gt);

/**
 * Returns true if length of array is bigger or equals than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthBiggerThanEqualsOne = R_.lteThanLength(1)
 *        lengthBiggerThanEqualsOne([{},{}])	// true
 *        lengthBiggerThanEqualsOne([{}])		// true
 *        lengthBiggerThanEqualsOne([])		// false
 *
 * @sig Number -> [a] -> Boolean
 */

var lteThanLength =
/*#__PURE__*/
compareLength(ramda.lte);

/**
 * Returns true if length of array is bigger than first argument
 *
 * @func
 * @category List
 *
 * @example
 *
 *        const lengthBiggerThanZero = R_.ltThanLength(0)
 *        lengthBiggerThanZero([{}])	// true
 *        lengthBiggerThanZero([])	// false
 *
 * @sig Number -> [a] -> Boolean
 */

var ltThanLength =
/*#__PURE__*/
compareLength(ramda.lt);

/**
 * Applies custom view function on the given lens
 *
 * @func
 * @category Object
 * @param {Lens} lens
 * @param {*} v view function
 * @param {*} x
 * @return {*}
 * @example
 *
 * 		R_.viewWith(R.lensIndex(0), R.pathEq(['foo'], 'boo'), [{ foo: 'boo' }]); //=> true
 *   	R_.viewWith(R.lensIndex(0), R.divide(R.__, 2), [4]) //=> 2
 *
 */

var viewWith =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.flip(ramda.o), [ramda.view, ramda.identity, ramda.identity]);

/**
 * Returns true if the given lens equals to given value
 *
 * @func
 * @category Object
 * @param {Lens} lens
 * @param {*} v value to equal
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R_.viewEq(R.lensIndex(0), 'foo', ['foo', 'bar', 'baz']); //=> true
 */

var viewEq =
/*#__PURE__*/
ramda.useWith(viewWith, [ramda.identity, ramda.equals, ramda.identity]);

/**
 * Applies flatten on array of arguments
 *
 * @func
 * @category List
 *
 * @return {Array} flatten array
 *
 * @example
 *
 *    R_.flattenArgs('e', 'f', 'a')		// ['e', 'f', 'a']
 *        R_.flattenArgs('e', ['f', 'a'])		// ['e', 'f', 'a']
 *        R_.flattenArgs('e', ['f', ['a']])	// ['e', 'f', 'a']
 *
 * @sig (a, [b, c]...) -> [a, b, c]
 */

var flattenArgs =
/*#__PURE__*/
ramda.compose(ramda.flatten, argumentsToList);

/**
 * Returns true if value is type of Number.
 *
 * @func
 * @category Type
 *
 * @param {any} x Value to test
 * @return {any} True, if value is type of Number
 *
 * @example
 *
 *        R_.isNumber(NaN) // true
 *        R_.isNumber(Infinite) // true
 *        R_.isNumber(1) // true
 *        R_.isNumber(false) // false
 *        R_.isNumber({}) // false
 *        R_.isNumber("1") // false
 *
 * @sig a -> Boolean
 */

var isNumber =
/*#__PURE__*/
ramda.is(Number);

var filterFalsy =
/*#__PURE__*/
ramda.filter(ramda.identity);
var keepObjectStringNumber =
/*#__PURE__*/
ramda.filter(
/*#__PURE__*/
ramda.anyPass([isObject, isString, isNumber]));
var keepKeyIfValueIsTruthy =
/*#__PURE__*/
ramda.mapObjIndexed(function (v, k) {
  return v && k;
});
var destructObject =
/*#__PURE__*/
ramda.compose(filterFalsy, ramda.values, keepKeyIfValueIsTruthy);
var transduceArgs =
/*#__PURE__*/
ramda.into([],
/*#__PURE__*/
ramda.compose(
/*#__PURE__*/
ramda.map(
/*#__PURE__*/
ramda.when(isObject, destructObject)), keepObjectStringNumber, filterFalsy));
/**
 * Conditionally joining classNames together.
 *
 * The cx function takes any number of arguments which can be a string, object
 * even nested arrays of strings and objects.
 *
 * The argument 'foo' is short for { foo: true }.
 *
 * If the value associated with a given key is falsy, that key won't be included in the output.
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.cx('Table', ['MagicTable'], {'Table--active': true })	// 'Table MagicTable Table--active'
 *        R_.cx('Table', ['MagicTable'], {'Table--active': false })	// 'Table MagicTable'
 *        R_.cx(['Table', ['MagicTable']])				// 'Table MagicTable'
 *
 * @sig String | [String] | Object -> String
 */

var cx =
/*#__PURE__*/
ramda.compose(joinWithSpace, ramda.flatten, transduceArgs, flattenArgs);

/**
 * Returns true if property of object literal does not equals the given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.propNotEq('a', 1, { a: 1 })	// false
 *        R_.propNotEq('a', 1, { a: 2 })	// true
 *        R_.propNotEq('a', 1, {})	// true
 *
 * @sig String → a → Object → Boolean
 */

var propNotEq =
/*#__PURE__*/
ramda.complement(ramda.propEq);

/**
 * Returns true if nested path of object literal does not contains given value.
 *
 * @func
 * @category Relation
 *
 * @example
 *
 *        R_.pathNotEq(['a', 'b'], 1, { a: { b: 1 } })	// false
 *        R_.pathNotEq(['a', 'b'], 1, { a: { b: 2 } })	// true
 *        R_.pathNotEq(['a', 'b'], 1, {}) 		// true
 *        R_.pathNotEq(['a', 'b'], 1, { a: {} }) 		// true
 *
 * @sig [String | Int] → a → {a} → Boolean
 */

var pathNotEq =
/*#__PURE__*/
ramda.complement(ramda.pathEq);

/**
 * Creates list of length `n`. Every item in list equals to `input` parameter.
 *
 * @param {Number} n How many times replicate `input`
 * @param {a} input Value for replication
 *
 * @return List List of length `n`. Every item in list equals to `input` parameter
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.replicate(1, 6) // [6]
 *        R_.replicate(2, 6) // [6, 6]
 *        R_.replicate(3, 6) // [6, 6, 6]
 *
 * @sig Number -> a -> [a]
 */

var replicate =
/*#__PURE__*/
ramda.flip(ramda.repeat);

/**
 * Creates pair. Every item of pair equals to input parameter.
 *
 * @param {a} input Value for duplication
 *
 * @return List Pair in which every item equals to `input` parameter
 *
 * @func
 * @category List
 *
 * @example
 *
 *        R_.duplicate(1) // [1, 1]
 *
 * @sig a -> [a]
 */

var duplicate =
/*#__PURE__*/
replicate(2);

/**
 * Copies keys of object to appropriate values.
 *
 * @func
 * @category Object
 *
 *
 * @param {Object} Object where should be keys copied as values.
 *
 * @return {Object}
 *
 * @example
 *
 *    const actionTypes = R_.keyMirror({
 *        ITEM_REQUEST: null,
 *        ITEM_SUCCESS: null,
 *        ITEM_ERROR: null,
 *    });
 *
 *    const action = { type: actionTypes.ITEM_REQUEST };
 *
 *    action.type === actionTypes.ITEM_REQUEST // true
 *
 *
 * @sig Object -> Object
 *
 */

var keyMirror =
/*#__PURE__*/
ramda.mapObjIndexed(
/*#__PURE__*/
ramda.nthArg(1));

/**
 * Creates object mirror from list of keys.
 *
 * @func
 * @category Object
 *
 *
 * @param {Array} keyList List of values representing the keys and values of resulting object.
 *
 * @return {Object} Object, where keys and appropriate values equals to value in `keyList`.
 *
 * @example
 *
 *    const actionTypes = R_.valueMirror([
 *        'ITEM_REQUEST',
 *        'ITEM_SUCCESS',
 *        'ITEM_ERROR',
 *    ]);
 *
 *        const action = { type: actionTypes.ITEM_REQUEST };
 *
 *        action.type === actionTypes.ITEM_REQUEST // true
 *        actionTypes.ITEM_SUCCESS // "ITEM_SUCCESS"
 *
 * @sig [String] -> Object
 *
 */

var valueMirror =
/*#__PURE__*/
ramda.o(ramda.fromPairs,
/*#__PURE__*/
ramda.map(duplicate));

var wrapMapping =
/*#__PURE__*/
ramda.compose(ramda.juxt,
/*#__PURE__*/
ramda.flip(ramda.prepend)([ramda.last]), ramda.apply);
/**
 * Map object keys. Mapping functions have both key and value as arguments.
 *
 * @func
 * @category Object
 *
 * @example
 *
 *      R_.mapKeysWithValue((key, value) => value)({ foo: "bar" }) // { bar: "bar" }
 *
 * @sig ((String, a) -> b) -> Object -> Object
 */

var mapKeysWithValue =
/*#__PURE__*/
ramda.useWith(mapKeysAndValues, [wrapMapping, ramda.identity]);

// prettier-ignore

var camelizeObj =
/*#__PURE__*/
mapKeysAndValues(
/*#__PURE__*/
ramda.juxt([
/*#__PURE__*/
ramda.o(toCamelCase, ramda.head),
/*#__PURE__*/
ramda.o(function (x) {
  return camelizeKeys(x);
}, ramda.last)]));
var camelizeArray =
/*#__PURE__*/
ramda.map(function (x) {
  return camelizeKeys(x);
});
/**
 * Recursively camelize all keys within an object or array
 *
 * @func
 * @category Object
 *
 * @param {any} x Object to transform
 * @return {any}
 * @example
 *
 *      camelizeKeys({
 *          'co-obj': { co_string: 'foo' },
 *          'co-array': [0, null, { 'f-f': 'ff' }],
 *          'co-number': 1,
 *          'co-string': '1',
 *          'co-fn': head,
 *      });
 *
 *      // {
 *      //     coArray: [
 *      //         0,
 *      //         null,
 *      //         {
 *      //             fF: 'ff'
 *      //         }
 *      //     ],
 *      //     coFn: [Function],
 *      //     coNumber: 1,
 *      //     coObj: {
 *      //         coString: 'foo'
 *      //     },
 *      //     coString: '1'
 *      // }
 *
 */
// prettier-ignore

var camelizeKeys =
/*#__PURE__*/
ramda.cond([[isArray, camelizeArray], [isFunction, ramda.identity], [isNotNilObject, camelizeObj], [ramda.T, ramda.identity]]);

/**
 * Returns `true` if `list` includes `item`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `true` if `list` includes `item`.
 *
 * @example
 *
 *    R_.flipIncludes(['e', 'f'], 'e') // true
 *    R_.flipIncludes(['a', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */

var flipIncludes =
/*#__PURE__*/
ramda.flip(ramda.includes);

/**
 * Returns `true` if if `list` includes `item`.
 *
 * Deprecated due to breaking change in Ramda. Use `R_.flipIncludes` instead.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `true` if `list` includes `item`.
 * @deprecated
 *
 * @example
 *
 *    R_.includes(['e', 'f'], 'e') // true
 *    R_.includes(['a', 'f'], 'a') // false
 *
 * @sig [a] -> b -> Boolean
 */

var includes = flipIncludes;

/**
 * Returns `false` if any of the items from `list` includes `item`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `false` if `list` includes `item`.
 *
 * @example
 *
 *    R_.notFlipInclude(['e', 'f'], 'e') // false
 *    R_.notFlipInclude(['a', 'f'], 'a') // true
 *
 * @sig [a] -> b -> Boolean
 */

var notFlipInclude =
/*#__PURE__*/
ramda.complement(flipIncludes);

/**
 * Returns `false` if any of the items from `list` flipIncludes `item`.
 *
 * Deprecated due to breaking change in Ramda. Use `R_.notFlipInclude`.
 *
 * @func
 * @category List
 *
 * @param {Array} list
 * @param {any} item
 * @return {Boolean} Returns `false` if `list` flipIncludes `item`.
 * @deprecated
 *
 * @example
 *
 *    R_.notInclude(['e', 'f'], 'e') // false
 *    R_.notInclude(['a', 'f'], 'a') // true
 *
 * @sig [a] -> b -> Boolean
 */

var notInclude = notFlipInclude;

/**
 * Creates curried pipe. The leftmost function determines the arity of curry.
 *
 * @func
 * @category Function
 *
 * @example
 *
 * const appendAndRejectNil = R_.pipeC(R.append, R.rejectNil);
 * const appendCAndRejectNil = appendAndRejectNil('c');
 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
 *
 */

var pipeC =
/*#__PURE__*/
ramda.converge(ramda.curry, [ramda.pipe]);

/**
 * Creates curried compose. The rightmost function determines the arity of curry.
 *
 * @func
 * @category Function
 *
 * @example
 *
 * const appendAndRejectNil = R_.composeC(R.rejectNil, R.append);
 * const appendCAndRejectNil = appendAndRejectNil('c');
 * appendCAndRejectNil(['a', null]) // ['a', 'c'];
 *
 */

var composeC =
/*#__PURE__*/
ramda.converge(ramda.curry, [ramda.compose]);

/**
 * Takes a predicate, string `padString` and initial value. `padString` is contacted to the output string
 * everytime `pred` returns falsy value.
 *
 * @param {fn} pred Called after every contactation of `padString`
 * @param {string} padString String that is added everytime the `pred` returns falsy value
 * @param {string} init Intitial value
 *
 * @return String
 * @see padLeft, padRight, padRightUntil
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padLeftUntil((x) => x.length === 10, '0')('1') // '0000000001'
 *
 * @sig (a -> Boolean) -> a -> a
 */

var padLeftUntil =
/*#__PURE__*/
ramda.useWith(ramda.until, [ramda.identity, ramda.concat, ramda.identity]);

/**
 * Length of the output string, `padString` and initial value.
 * `padString` is repeatedly concated to `init` until the length of the string is equal to `lengthString`.
 *
 * @param {number} lengthString Length of the output string.
 * @param {string} padString
 * @param {string} init Intitial value
 * @see padRight, padLeftUntil, padRightUntil
 *
 * @return String
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padLeft(10, '0')('1') // '00000000001'
 *        R_.padLeft(-9, '0')('1') // '1'
 *        R_.padLeft(1, '0')('1') // '1'
 *
 * @sig Number -> a -> a
 */

var padLeft =
/*#__PURE__*/
ramda.useWith(padLeftUntil, [lteThanLength, ramda.identity, ramda.identity]);

/**
 * Takes a predicate, string `padString` and initial value. `padString` is append to the output string
 * everytime `pred` returns falsy value.
 *
 * @param {fn} pred Called after every append of `padString`.
 * @param {string} padString String that is added everytime the `pred` returns falsy value
 * @param {string} init Intitial value
 *
 * @return String
 * @see padLeft, padRight, padLeftUntil
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padRightUntil((x) => x.length === 10, '0')('1') // '1000000000'
 *
 * @sig (a -> Boolean) -> a -> a
 */

var padRightUntil =
/*#__PURE__*/
ramda.useWith(ramda.until, [ramda.identity,
/*#__PURE__*/
ramda.flip(ramda.concat), ramda.identity]);

/**
 * Length of the output string, `padString` and initial value.
 * `padString` is repeatedly appended to the `init` until the length of the string is equal to `lengthString`.
 *
 * @param {number} lengthString Length of the output string.
 * @param {string} padString
 * @param {string} init Intitial value
 * @see padLeft, padRightUntil, padRightUntil
 *
 * @return String
 *
 * @func
 * @category String
 *
 * @example
 *
 *        R_.padRight(10, '0')('1') // '10000000000'
 *        R_.padRight(-9, '0')('1') // '1'
 *        R_.padRight(1, '0')('1') // '1'
 *
 * @sig Number -> a -> a
 */

var padRight =
/*#__PURE__*/
ramda.useWith(padRightUntil, [lteThanLength, ramda.identity, ramda.identity]);

/**
 * Creates pairs from value and list of values.
 * Value is always appended as the last item to the pair.
 *
 * @func
 * @category List
 * @see xPairs
 *
 * @example
 *
 *        R_.xPairsRight(1, [2, 3]) // [[2, 1], [3, 1]]
 *
 * @sig a -> [b] -> [[b, a]]
 */

var xPairsRight =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.flip(ramda.xprod), [ramda.of, ramda.identity]);

/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument will not result in an additional
 * call to `fn`; instead, the cached result for that argument will be returned
 *
 * @func
 * @category Function
 *
 * @example
 *
 *        let count = 0;
 *        const factorial = R_.memoizeWithIdentity(n => {
 *          count += 1;
 *          return R.product(R.range(1, n + 1));
 *        });
 *        factorial(5); // 120
 *        factorial(5); // 120
 *        factorial(5); // 120
 *        count; // 1
 *
 */

var memoizeWithIdentity =
/*#__PURE__*/
ramda.memoizeWith(ramda.identity);

/**
 * Firstly applies transformation on input data structure according to provided "lens".
 * Returning value is made by the "setting" the portion
 * of the result focused by the given `lens`.
 *
 * @func
 * @category Object
 *
 *
 * @param {Object} lens Lens
 * @param {function} tranformation Transformation function
 * @param {any} input
 * @returns {Object} Firstly applies transformation on `input` according to `lens` (`R.over`)
 * and than returning value is made by the "setting" (`R.set`) the portion
 * of previous result focused by the given `lens`.
 *
 * @example
 *
 *        R_.objOfOver(
 *          R.lensPath(['a', 'b']),
 *          (x) => "Hello " + x,
 *          {
 *            a: { b: 'foo' },
 *            c: 'bar',
 *          }
 *        )
 *        // { a: { b: "Hello foo" } }
 *
 */

var objOfOver =
/*#__PURE__*/
ramda.converge(ramda.set, [headArg, viewWith, alwaysEmptyObject]);

/**
 * Returns deeply merged object by merging all objects in a passed list. Merging is applied from the left.
 * See mergeDeepLeft from Ramda.
 *
 * @func
 * @category Object
 * @see mergeDeepLeftAll, mergeDeepAllWith, mergeDeepAllWithKey
 *
 * @param {array} list Array of objects
 * @returns {object} Merged object
 *
 * @example
 *
 * 		const a = { fooA: { bar: 'a' }, shared: { baz: 1 } };
 * 		const b = { fooB: { bar: 'b' }, shared: { baz: 2 } };
 * 		const c = { fooC: { bar: 'c' }, shared: { baz: 3 } };
 *
 * 		R_.mergeDeepLeftAll([a, b, c])
 * 		// {
 * 	 	// 	fooA: { bar: 'a' },
 * 		// 	fooB: { bar: 'b' },
 * 		// 	fooC: { bar: 'c' },
 * 		// 	shared: { baz: 1 },
 * 		// }
 *
 * @sig [{a}] -> {a}
 */

var mergeDeepLeftAll =
/*#__PURE__*/
ramda.reduce(ramda.mergeDeepLeft, {});

/**
 * Returns deeply merged object by merging all objects in a passed list. Merging is applied from the right.
 * See mergeDeepRight from Ramda.
 *
 * @func
 * @category Object
 *
 * @see mergeDeepLeftAll, mergeDeepAllWith, mergeDeepAllWithKey
 * @param {array} list Array of objects
 * @returns {object} Merged object
 *
 * @example
 *
 * 		const a = { fooA: { bar: 'a' }, shared: { baz: 1 } };
 * 		const b = { fooB: { bar: 'b' }, shared: { baz: 2 } };
 * 		const c = { fooC: { bar: 'c' }, shared: { baz: 3 } };
 *
 * 		R_.mergeDeepRightAll([a, b, c])
 * 		// {
 * 	 	// 	fooA: { bar: 'a' },
 * 		// 	fooB: { bar: 'b' },
 * 		// 	fooC: { bar: 'c' },
 * 		// 	shared: { baz: 3 },
 * 		// }
 *
 * @sig [{a}] -> {a}
 */

var mergeDeepRightAll =
/*#__PURE__*/
ramda.reduce(ramda.mergeDeepRight, {});

/**
 * Creates a new object with the own properties of the list of provided objects.
 * List of objects is reduced from first object to the last.
 * If a key exists in both compared objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @category Object
 *
 * @see mergeDeepLeftAll, mergeDeepRightAll, mergeDeepAllWithKey
 *
 * @param {Function} reducer - Function that resolves merging between two same keys
 * @param {Array} objects - Array of objects to be merged with
 * @return {Object} Returns merged object
 *
 * @example
 * 		R_.mergeDeepAllWith(R.concat, [
 * 			{ a: { b: [1] } },
 * 			{ a: { b: [2] } },
 * 			{ a: { b: [3] } },
 * 		])
 * 		// { a: { b: [1, 2, 3] } }
 *
 * @sig ((a, a) -> a) -> [{a}] -> {a}
 */

var mergeDeepAllWith =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.reduce(ramda.__, {}), [ramda.mergeDeepWith, ramda.identity]);

/**
 * Creates a new object with the own properties of the list of provided objects.
 * List of objects is reduced from first object to the last.
 * If a key exists in both compared objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 * using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key of the resulting object.
 *
 * @func
 * @category Object
 *
 * @see mergeDeepLeftAll, mergeDeepRightAll, mergeDeepAllWith
 *
 * @param {Function} reducer - Function that resolves merging between two same keys
 * @param {Array} objects - Array of objects to be merged with
 * @return {Object} Returns merged object
 *
 * @example
 * 		R_.mergeDeepAllWith((key, l, r) => key === "b" ? R.concat(l, r) : r, [
 * 			{ a: { b: [1], c: [1] } },
 * 			{ a: { b: [2], c: [2] } },
 * 			{ a: { b: [3], c: [3] } },
 * 		])
 * 		// { a: { b: [1, 2, 3], c: [3] } }
 *
 * @sig ((String, a, a) -> a) -> [{a}] -> {a}
 */

var mergeDeepAllWithKey =
/*#__PURE__*/
ramda.useWith(
/*#__PURE__*/
ramda.reduce(ramda.__, {}), [ramda.mergeDeepWithKey, ramda.identity]);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty array is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyArray(null);  //=> []
 *        R_.defaultToEmptyArray(undefined);  //=> []
 *        R_.defaultToEmptyArray('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyArray(parseInt('string')); //=> []
 *
 * @sig a -> a | Array
 */

var defaultToEmptyArray =
/*#__PURE__*/
ramda.defaultTo(emptyArray);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty object is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyObject(null);  //=> {}
 *        R_.defaultToEmptyObject(undefined);  //=> {}
 *        R_.defaultToEmptyObject('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyObject(parseInt('string')); //=> {}
 *
 * @sig a -> a | Object
 */

var defaultToEmptyObject =
/*#__PURE__*/
ramda.defaultTo(emptyObject);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the empty string is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToEmptyString(null);  //=> ""
 *        R_.defaultToEmptyString(undefined);  //=> ""
 *        R_.defaultToEmptyString('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToEmptyString(parseInt('string')); //=> ""
 *
 * @sig a -> a | String
 */

var defaultToEmptyString =
/*#__PURE__*/
ramda.defaultTo(emptyString);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise the false is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToFalse(null);  //=> false
 *        R_.defaultToFalse(undefined);  //=> false
 *        R_.defaultToFalse('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToFalse(parseInt('string')); //=> false
 *
 * @sig a -> a | Boolean
 */

var defaultToFalse =
/*#__PURE__*/
ramda.defaultTo(false);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise number one is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToOne(null);  //=> 1
 *        R_.defaultToOne(undefined);  //=> 1
 *        R_.defaultToOne('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToOne(parseInt('string')); //=> 1
 *
 * @sig a -> a | Number
 */

var defaultToOne =
/*#__PURE__*/
ramda.defaultTo(1);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise true is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToTrue(null);  //=> true
 *        R_.defaultToTrue(undefined);  //=> true
 *        R_.defaultToTrue('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToTrue(parseInt('string')); //=> true
 *
 * @sig a -> a | Boolean
 */

var defaultToTrue =
/*#__PURE__*/
ramda.defaultTo(true);

/**
 * Returns the argument if it is not null, undefined or NaN; otherwise zero is returned.
 *
 * @func
 * @category Logic
 *
 * @example
 *
 *        R_.defaultToZero(null);  //=> 0
 *        R_.defaultToZero(undefined);  //=> 0
 *        R_.defaultToZero('Ramda');  //=> 'Ramda'
 *        // parseInt('string') results in NaN
 *        R_.defaultToZero(parseInt('string')); //=> 0
 *
 * @sig a -> a | Number
 */

var defaultToZero =
/*#__PURE__*/
ramda.defaultTo(0);

/**
 * Testing if argument equals to empty array.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty array.
 *
 * @example
 *
 *        R_.equalsToEmptyArray([])	// true
 *        R_.equalsToEmptyArray([''])	// false
 *
 * @sig a -> Boolean
 */

var equalsToEmptyArray =
/*#__PURE__*/
ramda.equals(emptyArray);

/**
 * Testing if argument equals to empty object.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is empty object.
 *
 * @example
 *
 *        R_.equalsToEmptyObject({})	// true
 *        R_.equalsToEmptyObject('')	// false
 *
 * @sig a -> Boolean
 */

var equalsToEmptyObject =
/*#__PURE__*/
ramda.equals(emptyObject);

/**
 * Testing if argument equals to false
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is false
 *
 * @example
 *
 *        R_.equalsToFalse(false)	// true
 *        R_.equalsToFalse(null)	// false
 *
 * @sig a -> Boolean
 */

var equalsToFalse =
/*#__PURE__*/
ramda.equals(false);

/**
 * Returns true if argument equals to 0.
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is 1
 *
 * @example
 *
 *        R_.equalsToOne(3)	// false
 *        R_.equalsToOne(0)	// true
 *        R_.equalsToOne(-3)	// false
 *
 * @sig a -> Boolean
 */

var equalsToOne =
/*#__PURE__*/
ramda.equals(1);

/**
 * Testing if argument equals to null
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is null
 *
 * @example
 *
 *        R_.equalsToNull(null)	// true
 *        R_.equalsToNull(undefined)	// false
 *
 * @sig a -> Boolean
 */

var equalsToNull =
/*#__PURE__*/
ramda.equals(null);

/**
 * Testing if argument equals to true
 *
 * @func
 * @category Relation
 *
 * @param  {any} value
 * @return {boolean} True if `value` is true
 *
 * @example
 *
 *        R_.equalsToTrue(true)	// true
 *        R_.equalsToTrue(false)	// false
 *
 * @sig a -> Boolean
 */

var equalsToTrue =
/*#__PURE__*/
ramda.equals(true);

/**
 * Returns true if the arguments are not equal
 *
 * @func
 * @category Logic
 *
 * @sig a -> b -> Boolean
 *
 * @example
 *
 *        R_.notEqual(1, 2);   // true
 *        R_.notEqual(1, 1);   // false
 *
 *
 */

var notEqual =
/*#__PURE__*/
ramda.complement(ramda.equals);

/**
 * Returns true if value is not equal to empty array.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty array.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyArray([]);   // false
 *        R_.notEqualToEmptyArray([{ ramda: true }]);   // true
 *
 */

var notEqualToEmptyArray =
/*#__PURE__*/
ramda.complement(equalsToEmptyArray);

/**
 * Returns true if value is not equal to empty object.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty object.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyObject({});   // false
 *        R_.notEqualToEmptyObject({ ramda: true });   // true
 *
 */

var notEqualToEmptyObject =
/*#__PURE__*/
ramda.complement(equalsToEmptyObject);

/**
 * Returns true if value is not equal to empty string.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not an empty string.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToEmptyString("");   // false
 *        R_.notEqualToEmptyString("Ramda");   // true
 *
 */

var notEqualToEmptyString =
/*#__PURE__*/
ramda.complement(equalsToEmptyString);

/**
 * Returns true if value is not equal to false.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not false.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToFalse(false);   // false
 *        R_.notEqualToFalse(true);   // true
 *
 */

var notEqualToFalse =
/*#__PURE__*/
ramda.complement(equalsToFalse);

/**
 * Returns true if value is not equal to null.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not null.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToNull(null);   // false
 *        R_.notEqualToNull(false);   // true
 *
 */

var notEqualToNull =
/*#__PURE__*/
ramda.complement(equalsToNull);

/**
 * Returns true if value is not equal to number one.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not number one.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToOne(1);   // false
 *        R_.notEqualToOne(0);   // true
 *
 */

var notEqualToOne =
/*#__PURE__*/
ramda.complement(equalsToOne);

/**
 * Returns true if value is not equal to true.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not true.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToTrue(true);   // false
 *        R_.notEqualToTrue(false);   // true
 *
 */

var notEqualToTrue =
/*#__PURE__*/
ramda.complement(equalsToTrue);

/**
 * Returns true if value is not equal to zero.
 *
 * @func
 * @category Relation
 * @param {any} value
 * @returns {Boolean} Returns `true` if `value` is not zero.
 *
 * @sig a -> Boolean
 *
 * @example
 *
 *        R_.notEqualToZero(0);   // false
 *        R_.notEqualToZero(1);   // true
 *
 */

var notEqualToZero =
/*#__PURE__*/
ramda.complement(equalsToZero);

var equalsAndAlways =
/*#__PURE__*/
ramda.useWith(argumentsToList, [ramda.equals, ramda.always]);
/**
 * Returns the opposite value comparing against a given set of two values.
 *
 * @func
 * @category Function
 *
 * @param {Array} options - must be array of two items
 * @param {*} val
 * @return {*} opposite of options
 * @example
 *
 *      R_.toggle('on', 'off')('on'); //  'off'
 *      R_.toggle('active', 'inactive')('inactive'); // 'active'
 *      R_.toggle(10, 100)(10); // 100
 *      R_.toggle('on', 'off')('other'); // 'other'
 */

var toggle =
/*#__PURE__*/
ramda.compose(ramda.cond,
/*#__PURE__*/
ramda.juxt([equalsAndAlways,
/*#__PURE__*/
ramda.flip(equalsAndAlways),
/*#__PURE__*/
ramda.always([ramda.T, ramda.identity])]));

/**
 * Determines whether a dot path on an object has a specific value
 * in `R.equals` terms.
 *
 * @func
 * @category Object
 * @param {String} path The dot path to use.
 * @param {any} eq Value for `R.equals`.
 * @param {Object} obj The object to retrieve the nested property from and compare with `eq`.
 * @return {*} True if value on dot path equals to `eq`.
 *
 * @example
 *
 *      R_.dotPathEq('a.b', 2, {a: {b: 2}}); //=> true
 *      R_.dotPathEq('a.b', 2, {c: {b: 2}}); //=> false
 *
 * @sig String -> a -> {a} -> Boolean
 *
 */

var dotPathEq =
/*#__PURE__*/
ramda.useWith(ramda.pathEq, [splitByDot, ramda.identity, ramda.identity]);

/**
 * Determines whether a dot path on an object has a specific value
 * in `R_.notEqual` terms.
 *
 * @func
 * @category Object
 * @param {String} path The dot path to use.
 * @param {any} eq Value for `R_.notEqual`.
 * @param {Object} obj The object to retrieve the nested property from and compare with `eq`.
 * @return {*} True if value on dot path equals to `eq`.
 *
 * @example
 *
 *      R_.dotPathNotEq('a.b', 2, {a: {b: 2}}); //=> false
 *      R_.dotPathNotEq('a.b', 2, {c: {b: 2}}); //=> true
 *
 * @sig String -> a -> {a} -> Boolean
 *
 */

var dotPathNotEq =
/*#__PURE__*/
ramda.complement(dotPathEq);

/**
 * If the given, non-null object has a value at the given dot path,
 * returns the value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @category Object
 *
 * @param {any} default Default value if `path` does not exist.
 * @param {String} path The dot path to use.
 * @param {Object} obj
 *
 * @return {*}  The data at `path` of the supplied object or the default value.
 *
 * @example
 *
 *		R_.dotPathOr('N/A', 'a.b', { a: { b: 1 } }); // 1
 *		R_.dotPathOr('N/A', 'a.b', { a: { c: 1 } }); // "N/A"
 *
 * @sig a → String → {a} → a
 *
 */

var dotPathOr =
/*#__PURE__*/
ramda.useWith(ramda.pathOr, [ramda.identity, splitByDot, ramda.identity]);

/**
 * Returns `true` if the specified object property at given dot path satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} path The dot path to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { b: 1 } }); // true
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { b: -1 } }); // false
 *		R_.dotPathSatisfies((y) => y > 0, 'a.b', { a: { c: 1 } }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */

var dotPathSatisfies =
/*#__PURE__*/
ramda.useWith(ramda.pathSatisfies, [ramda.identity, splitByDot, ramda.identity]);

/**
 * Returns `true` if the specified object property at given dot path not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} path The dot path to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { b: 1 } }); // false
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { b: -1 } }); // true
 *		R_.dotPathNotSatisfies((y) => y > 0, 'a.b', { a: { c: 1 } }); // true
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */

var dotPathNotSatisfies =
/*#__PURE__*/
ramda.complement(dotPathSatisfies);

/**
 * Returns `true` if the specified object property at given prop not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} prop The prop to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 * 		const positive = x => x > 0;
 *
 *		R_.propNotSatisfies(positive, 'a', { }); // true
 *		R_.propNotSatisfies(positive, 'a', { a: -1 }); // true
 *		R_.propNotSatisfies(positive, 'a', { a: 3 }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */

var propNotSatisfies =
/*#__PURE__*/
ramda.complement(ramda.propSatisfies);

/**
 * Returns `true` if the specified object property at given path not satisfies the given predicate; false otherwise.
 *
 * @func
 * @category Object
 *
 * @param {Function} predicate
 * @param {String} path The path to use.
 * @param {Object} obj
 *
 * @return {Boolean}
 *
 * @example
 *
 * 		const positive = x => x > 0;
 *
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { }); // true
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { a: { b: -1 } }); // true
 *		R_.pathNotSatisfies(positive, ['a', 'b'], { a: { b: 3 } }); // false
 *
 * @sig (a -> Boolean) → String → {a} → Boolean
 *
 */

var pathNotSatisfies =
/*#__PURE__*/
ramda.complement(ramda.pathSatisfies);

/**
 * Map using function that is provided with each value of the list and its index in the list.
 *
 * @func
 * @category Object
 *
 * @param {Function} fn The function to be called on every element of the `list` and its index.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 *
 * @example
 *
 *        R_.mapIndexed((value, index) => `${value}-${index}`)([1, 2, 3])
 *        // ['1-0', '2-1', '3-2']
 *
 * @sig (a -> Number -> a) -> [a] -> a
 */

var mapIndexed =
/*#__PURE__*/
ramda.addIndex(ramda.map);

/**
 * Returns true if input is empty or nil.
 *
 * @func
 * @category Logic
 *
 * @param {any} input
 * @return {Boolean}
 *
 * @example
 *
 *        R_.isNilOrEmpty(null) // true
 *        R_.isNilOrEmpty({}) // true
 *        R_.isNilOrEmpty(false) // false
 *        R_.isNilOrEmpty(0) // false
 *
 * @sig a -> Boolean
 */

var isNilOrEmpty =
/*#__PURE__*/
ramda.anyPass([ramda.isNil, ramda.isEmpty]);

/**
 * Returns true if the argument is a plain object.
 *
 * @func
 * @category Type
 *
 * @param {any} x value to test
 * @return {boolean} whether the argument is a plain object
 *
 * @example
 *
 *        R_.isPlainObject({}) // true
 *        R_.isPlainObject([]) // false
 *        R_.isPlainObject(null) // false
 *
 * @sig a -> Boolean
 */

var isPlainObject =
/*#__PURE__*/
ramda.allPass([
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.equals('Object'), ramda.type), isNotNil,
/*#__PURE__*/
ramda.either(
/*#__PURE__*/
ramda.o(
/*#__PURE__*/
ramda.equals(Object.prototype), Object.getPrototypeOf),
/*#__PURE__*/
// NOTE: prototype is null if created using Object.create(null)
ramda.o(ramda.isNil, Object.getPrototypeOf))]);

/**
 * If the first argument is a function then we apply the function with args that are passed as the second argument.
 * If the first argument is not a function then we return it as it is.
 *
 * @func
 * @category Function
 *
 * @param {any} x 	Function or value
 * @param {array} args 	Array of arguments
 * @returns {any}
 *
 * @example
 * 		const ref = { current: null };
 * 		const getRef = always(ref);
 * 		const createRef = (current) => ({ current });
 *
 * 		R_.applyIfFunction(ref, []); // { current: null }
 * 		R_.applyIfFunction(getRef, []); // { current: null }
 * 		R_.applyIfFunction(createRef, [document.body]); // {"current": [object HTMLBodyElement]}
 *
 * @sig a|(*... -> a) -> [*] -> a
 */

var applyIfFunction =
/*#__PURE__*/
ramda.ifElse(isFunction, ramda.apply, headArg);

/**
 * If the first argument `x` is a function then we return the result of calling `x` with the remaining arguments.
 * If `x` is not a function then we return it as it is.
 *
 * @func
 * @category Function
 *
 * @param {any} x 	Function or value
 * @param {*} args 	Any number of positional arguments.
 * @returns {any}
 *
 * @example
 * 		const ref = { current: null };
 * 		const getRef = always(ref);
 * 		const createRef = (current) => ({ current });
 *
 * 		R_.callIfFunction(ref); // { current: null }
 * 		R_.callIfFunction(getRef); // { current: null }
 * 		R_.callIfFunction(createRef, document.body); // {"current": [object HTMLBodyElement]}
 *
 * @sig (a|(*... -> a),*...) -> a
 */

var callIfFunction =
/*#__PURE__*/
ramda.ifElse(isFunction, ramda.call, headArg);

/* generated by plop */

exports.equalsZero = equalsToZero;
exports.equalsEmptyString = equalsToEmptyString;
exports.notNil = notNil;
exports.notEmpty = notEmpty;
exports.notNaN = notNaN;
exports.notNumeric = notNumeric;
exports.alwaysNull = alwaysNull;
exports.alwaysEmptyString = alwaysEmptyString;
exports.alwaysEmptyArray = alwaysEmptyArray;
exports.alwaysZero = alwaysZero;
exports.alwaysOne = alwaysOne;
exports.alwaysEmptyObject = alwaysEmptyObject;
exports.applyCompose = applyCompose;
exports.applyPipe = applyPipe;
exports.between = between;
exports.isArray = isArray;
exports.isFunction = isFunction;
exports.isObject = isObject;
exports.isNegative = isNegative;
exports.isNilOrEmptyString = isNilOrEmptyString;
exports.isNotEmpty = isNotEmpty;
exports.isNotNaN = isNotNaN;
exports.isNotNil = isNotNil;
exports.isNotNilObject = isNotNilObject;
exports.isNotNumeric = isNotNumeric;
exports.isNotRegExp = isNotRegExp;
exports.isNumeric = isNumeric;
exports.isPositive = isPositive;
exports.isPromise = isPromise;
exports.isString = isString;
exports.isRegExp = isRegExp;
exports.isTruthy = isTruthy;
exports.isFalsy = isFalsy;
exports.isError = isError;
exports.log = log;
exports.trace = trace;
exports.reduceCallable = reduceCallable;
exports.reduceSource = reduceSource;
exports.findNotNil = findNotNil;
exports.dispatch = dispatch;
exports.dispatchWith = dispatchWith;
exports.noop = noop;
exports.startsWithPrefix = startsWithPrefix;
exports.startsWithPrefixIgnoreCase = startsWithPrefixIgnoreCase;
exports.endsWithSuffix = endsWithSuffix;
exports.endsWithSuffixIgnoreCase = endsWithSuffixIgnoreCase;
exports.argumentsToList = argumentsToList;
exports.containsAll = containsAll;
exports.containsAny = containsAny;
exports.containsNone = containsNone;
exports.unfoldObjectDots = unfoldObjectDots;
exports.toUpperFirst = toUpperFirst;
exports.toLowerFirst = toLowerFirst;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
exports.toKebabCase = toKebabCase;
exports.toDotCase = toDotCase;
exports.toScreamingSnakeCase = toScreamingSnakeCase;
exports.listToString = listToString;
exports.splitByNonAlphaNumeric = splitByNonAlphaNumeric;
exports.constructRegExp = constructRegExp;
exports.rejectNil = rejectNil;
exports.rejectEq = rejectEq;
exports.splitByDot = splitByDot;
exports.joinWithDot = joinWithDot;
exports.joinWithSpace = joinWithSpace;
exports.joinWithUnderscore = joinWithUnderscore;
exports.joinWithDash = joinWithDash;
exports.dissocDotPath = dissocDotPath;
exports.overHead = overHead;
exports.dotPath = dotPath;
exports.assocDotPath = assocDotPath;
exports.mergeWithDotPath = mergeWithDotPath;
exports.mapKeys = mapKeys;
exports.applyIfNotNil = applyIfNotNil;
exports.equalsLength = equalsLength;
exports.equalsStringIgnoreCase = equalsStringIgnoreCase;
exports.gteThanLength = gteThanLength;
exports.gtThanLength = gtThanLength;
exports.lteThanLength = lteThanLength;
exports.ltThanLength = ltThanLength;
exports.viewEq = viewEq;
exports.viewWith = viewWith;
exports.flattenArgs = flattenArgs;
exports.cx = cx;
exports.propNotEq = propNotEq;
exports.pathNotEq = pathNotEq;
exports.duplicate = duplicate;
exports.replicate = replicate;
exports.keyMirror = keyMirror;
exports.valueMirror = valueMirror;
exports.headArg = headArg;
exports.lastArg = lastArg;
exports.mapKeysWithValue = mapKeysWithValue;
exports.camelizeKeys = camelizeKeys;
exports.includes = includes;
exports.notInclude = notInclude;
exports.pipeC = pipeC;
exports.composeC = composeC;
exports.padLeftUntil = padLeftUntil;
exports.padLeft = padLeft;
exports.padRightUntil = padRightUntil;
exports.padRight = padRight;
exports.xPairs = xPairs;
exports.xPairsRight = xPairsRight;
exports.memoizeWithIdentity = memoizeWithIdentity;
exports.objOfOver = objOfOver;
exports.mapKeysAndValues = mapKeysAndValues;
exports.mergeDeepLeftAll = mergeDeepLeftAll;
exports.mergeDeepRightAll = mergeDeepRightAll;
exports.mergeDeepAllWith = mergeDeepAllWith;
exports.mergeDeepAllWithKey = mergeDeepAllWithKey;
exports.defaultToEmptyArray = defaultToEmptyArray;
exports.defaultToEmptyObject = defaultToEmptyObject;
exports.defaultToEmptyString = defaultToEmptyString;
exports.defaultToFalse = defaultToFalse;
exports.defaultToOne = defaultToOne;
exports.defaultToTrue = defaultToTrue;
exports.defaultToZero = defaultToZero;
exports.equalsToEmptyArray = equalsToEmptyArray;
exports.equalsToEmptyObject = equalsToEmptyObject;
exports.equalsToEmptyString = equalsToEmptyString;
exports.equalsToFalse = equalsToFalse;
exports.equalsToOne = equalsToOne;
exports.equalsToNull = equalsToNull;
exports.equalsToTrue = equalsToTrue;
exports.equalsToZero = equalsToZero;
exports.notEqual = notEqual;
exports.notEqualToEmptyArray = notEqualToEmptyArray;
exports.notEqualToEmptyObject = notEqualToEmptyObject;
exports.notEqualToEmptyString = notEqualToEmptyString;
exports.notEqualToFalse = notEqualToFalse;
exports.notEqualToNull = notEqualToNull;
exports.notEqualToOne = notEqualToOne;
exports.notEqualToTrue = notEqualToTrue;
exports.notEqualToZero = notEqualToZero;
exports.toggle = toggle;
exports.dotPathEq = dotPathEq;
exports.dotPathNotEq = dotPathNotEq;
exports.dotPathOr = dotPathOr;
exports.dotPathSatisfies = dotPathSatisfies;
exports.dotPathNotSatisfies = dotPathNotSatisfies;
exports.propNotSatisfies = propNotSatisfies;
exports.pathNotSatisfies = pathNotSatisfies;
exports.mapIndexed = mapIndexed;
exports.isNilOrEmpty = isNilOrEmpty;
exports.isNumber = isNumber;
exports.isPlainObject = isPlainObject;
exports.applyIfFunction = applyIfFunction;
exports.callIfFunction = callIfFunction;
exports.flipIncludes = flipIncludes;
exports.notFlipInclude = notFlipInclude;

Object.defineProperty(exports, '__esModule', { value: true });

})));
