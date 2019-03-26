
"__": {
    "prefix": "__",
    "body": "const greet = R.replace('{name}', R.__, 'Hello, {name}!');\ngreet('Alice'); //=> 'Hello, Alice!'",
},
"add": {
    "prefix": "add",
    "body": "R.add(2, 3);       //=>  5\nR.add(7)(10);      //=> 17",
},
"addIndex": {
    "prefix": "addIndex",
    "body": "const mapIndexed = R.addIndex(R.map);\nmapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);\n//=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']",
},
"adjust": {
    "prefix": "adjust",
    "body": "R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']\nR.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']",
},
"all": {
    "prefix": "all",
    "body": "const equals3 = R.equals(3);\nR.all(equals3)([3, 3, 3, 3]); //=> true\nR.all(equals3)([3, 3, 1, 3]); //=> false",
},
"allPass": {
    "prefix": "allPass",
    "body": "const isQueen = R.propEq('rank', 'Q');\nconst isSpade = R.propEq('suit', '♠︎');\nconst isQueenOfSpades = R.allPass([isQueen, isSpade]);\n\nisQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false\nisQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true",
},
"always": {
    "prefix": "always",
    "body": "const t = R.always('Tee');\nt(); //=> 'Tee'",
},
"and": {
    "prefix": "and",
    "body": "R.and(true, true); //=> true\nR.and(true, false); //=> false\nR.and(false, true); //=> false\nR.and(false, false); //=> false",
},
"any": {
    "prefix": "any",
    "body": "const lessThan0 = R.flip(R.lt)(0);\nconst lessThan2 = R.flip(R.lt)(2);\nR.any(lessThan0)([1, 2]); //=> false\nR.any(lessThan2)([1, 2]); //=> true",
},
"anyPass": {
    "prefix": "anyPass",
    "body": "const isClub = R.propEq('suit', '♣');\nconst isSpade = R.propEq('suit', '♠');\nconst isBlackCard = R.anyPass([isClub, isSpade]);\n\nisBlackCard({rank: '10', suit: '♣'}); //=> true\nisBlackCard({rank: 'Q', suit: '♠'}); //=> true\nisBlackCard({rank: 'Q', suit: '♦'}); //=> false",
},
"ap": {
    "prefix": "ap",
    "body": "R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]\nR.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]\n\n// R.ap can also be used as S combinator\n// when only two functions are passed\nR.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'",
},
"aperture": {
    "prefix": "aperture",
    "body": "R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]\nR.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]\nR.aperture(7, [1, 2, 3, 4, 5]); //=> []",
},
"append": {
    "prefix": "append",
    "body": "R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']\nR.append('tests', []); //=> ['tests']\nR.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]",
},
"apply": {
    "prefix": "apply",
    "body": "const nums = [1, 2, 3, -99, 42, 6, 7];\nR.apply(Math.max, nums); //=> 42",
},
"applySpec": {
    "prefix": "applySpec",
    "body": "const getMetrics = R.applySpec({\n  sum: R.add,\n  nested: { mul: R.multiply }\n});\ngetMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }",
},
"applyTo": {
    "prefix": "applyTo",
    "body": "const t42 = R.applyTo(42);\nt42(R.identity); //=> 42\nt42(R.add(1)); //=> 43",
},
"ascend": {
    "prefix": "ascend",
    "body": "const byAge = R.ascend(R.prop('age'));\nconst people = [\n  { name: 'Emma', age: 70 },\n  { name: 'Peter', age: 78 },\n  { name: 'Mikhail', age: 62 },\n];\nconst peopleByYoungestFirst = R.sort(byAge, people);\n  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]",
},
"assoc": {
    "prefix": "assoc",
    "body": "R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}",
},
"assocPath": {
    "prefix": "assocPath",
    "body": "R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}\n\n// Any missing or non-object keys in path will be overridden\nR.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}",
},
"binary": {
    "prefix": "binary",
    "body": "const takesThreeArgs = function(a, b, c) {\n  return [a, b, c];\n};\ntakesThreeArgs.length; //=> 3\ntakesThreeArgs(1, 2, 3); //=> [1, 2, 3]\n\nconst takesTwoArgs = R.binary(takesThreeArgs);\ntakesTwoArgs.length; //=> 2\n// Only 2 arguments are passed to the wrapped function\ntakesTwoArgs(1, 2, 3); //=> [1, 2, undefined]",
},
"bind": {
    "prefix": "bind",
    "body": "const log = R.bind(console.log, console);\nR.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}\n// logs {a: 2}",
},
"both": {
    "prefix": "both",
    "body": "const gt10 = R.gt(R.__, 10)\nconst lt20 = R.lt(R.__, 20)\nconst f = R.both(gt10, lt20);\nf(15); //=> true\nf(30); //=> false\n\nR.both(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(false)\nR.both([false, false, 'a'], [11]); //=> [false, false, 11]",
},
"call": {
    "prefix": "call",
    "body": "R.call(R.add, 1, 2); //=> 3\n\nconst indentN = R.pipe(R.repeat(' '),\n                     R.join(''),\n                     R.replace(/^(?!$)/gm));\n\nconst format = R.converge(R.call, [\n                            R.pipe(R.prop('indent'), indentN),\n                            R.prop('value')\n                        ]);\n\nformat({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'",
},
"chain": {
    "prefix": "chain",
    "body": "const duplicate = n => [n, n];\nR.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]\n\nR.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]",
},
"clamp": {
    "prefix": "clamp",
    "body": "R.clamp(1, 10, -5) // => 1\nR.clamp(1, 10, 15) // => 10\nR.clamp(1, 10, 4)  // => 4",
},
"clone": {
    "prefix": "clone",
    "body": "const objects = [{}, {}, {}];\nconst objectsClone = R.clone(objects);\nobjects === objectsClone; //=> false\nobjects[0] === objectsClone[0]; //=> false",
},
"comparator": {
    "prefix": "comparator",
    "body": "const byAge = R.comparator((a, b) => a.age < b.age);\nconst people = [\n  { name: 'Emma', age: 70 },\n  { name: 'Peter', age: 78 },\n  { name: 'Mikhail', age: 62 },\n];\nconst peopleByIncreasingAge = R.sort(byAge, people);\n  //=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]",
},
"complement": {
    "prefix": "complement",
    "body": "const isNotNil = R.complement(R.isNil);\nisNil(null); //=> true\nisNotNil(null); //=> false\nisNil(7); //=> false\nisNotNil(7); //=> true",
},
"compose": {
    "prefix": "compose",
    "body": "const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName\nconst yellGreeting = R.compose(R.toUpper, classyGreeting);\nyellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"\n\nR.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7",
},
"composeK": {
    "prefix": "composeK",
    "body": "//  get :: String -> Object -> Maybe *\n const get = R.curry((propName, obj) => Maybe(obj[propName]))\n\n //  getStateCode :: Maybe String -> Maybe String\n const getStateCode = R.composeK(\n   R.compose(Maybe.of, R.toUpper),\n   get('state'),\n   get('address'),\n   get('user'),\n );\n getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")\n getStateCode({}); //=> Maybe.Nothing()",
},
"composeP": {
    "prefix": "composeP",
    "body": "const db = {\n  users: {\n    JOE: {\n      name: 'Joe',\n      followers: ['STEVE', 'SUZY']\n    }\n  }\n}\n\n// We'll pretend to do a db lookup which returns a promise\nconst lookupUser = (userId) => Promise.resolve(db.users[userId])\nconst lookupFollowers = (user) => Promise.resolve(user.followers)\nlookupUser('JOE').then(lookupFollowers)\n\n//  followersForUser :: String -> Promise [UserId]\nconst followersForUser = R.composeP(lookupFollowers, lookupUser);\nfollowersForUser('JOE').then(followers => console.log('Followers:', followers))\n// Followers: ["STEVE","SUZY"]",
},
"composeWith": {
    "prefix": "composeWith",
    "body": "const composeWhileNotNil = R.composeWith((f, res) => R.isNil(res) ? res : f(res));\n\ncomposeWhileNotNil([R.inc, R.prop('age')])({age: 1}) //=> 2\ncomposeWhileNotNil([R.inc, R.prop('age')])({}) //=> undefined",
},
"concat": {
    "prefix": "concat",
    "body": "R.concat('ABC', 'DEF'); // 'ABCDEF'\nR.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\nR.concat([], []); //=> []",
},
"cond": {
    "prefix": "cond",
    "body": "const fn = R.cond([\n  [R.equals(0),   R.always('water freezes at 0°C')],\n  [R.equals(100), R.always('water boils at 100°C')],\n  [R.T,           temp => 'nothing special happens at ' + temp + '°C']\n]);\nfn(0); //=> 'water freezes at 0°C'\nfn(50); //=> 'nothing special happens at 50°C'\nfn(100); //=> 'water boils at 100°C'",
},
"construct": {
    "prefix": "construct",
    "body": "// Constructor function\nfunction Animal(kind) {\n  this.kind = kind;\n};\nAnimal.prototype.sighting = function() {\n  return "It's a " + this.kind + "!";\n}\n\nconst AnimalConstructor = R.construct(Animal)\n\n// Notice we no longer need the 'new' keyword:\nAnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};\n\nconst animalTypes = ["Lion", "Tiger", "Bear"];\nconst animalSighting = R.invoker(0, 'sighting');\nconst sightNewAnimal = R.compose(animalSighting, AnimalConstructor);\nR.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]",
},
"constructN": {
    "prefix": "constructN",
    "body": "// Variadic Constructor function\nfunction Salad() {\n  this.ingredients = arguments;\n}\n\nSalad.prototype.recipe = function() {\n  const instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);\n  return R.join('\n', instructions);\n};\n\nconst ThreeLayerSalad = R.constructN(3, Salad);\n\n// Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.\nconst salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');\n\nconsole.log(salad.recipe());\n// Add a dollop of Mayonnaise\n// Add a dollop of Potato Chips\n// Add a dollop of Ketchup",
},
"contains": {
    "prefix": "contains",
    "body": "R.contains(3, [1, 2, 3]); //=> true\nR.contains(4, [1, 2, 3]); //=> false\nR.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true\nR.contains([42], [[42]]); //=> true\nR.contains('ba', 'banana'); //=>true",
},
"converge": {
    "prefix": "converge",
    "body": "const average = R.converge(R.divide, [R.sum, R.length])\naverage([1, 2, 3, 4, 5, 6, 7]) //=> 4\n\nconst strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])\nstrangeConcat("Yodel") //=> "YODELyodel"",
},
"countBy": {
    "prefix": "countBy",
    "body": "const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];\nR.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}\n\nconst letters = ['a', 'b', 'A', 'a', 'B', 'c'];\nR.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}",
},
"curry": {
    "prefix": "curry",
    "body": "const addFourNumbers = (a, b, c, d) => a + b + c + d;\n\nconst curriedAddFourNumbers = R.curry(addFourNumbers);\nconst f = curriedAddFourNumbers(1, 2);\nconst g = f(3);\ng(4); //=> 10",
},
"curryN": {
    "prefix": "curryN",
    "body": "const sumArgs = (...args) => R.sum(args);\n\nconst curriedAddFourNumbers = R.curryN(4, sumArgs);\nconst f = curriedAddFourNumbers(1, 2);\nconst g = f(3);\ng(4); //=> 10",
},
"dec": {
    "prefix": "dec",
    "body": "R.dec(42); //=> 41",
},
"defaultTo": {
    "prefix": "defaultTo",
    "body": "const defaultTo42 = R.defaultTo(42);\n\ndefaultTo42(null);  //=> 42\ndefaultTo42(undefined);  //=> 42\ndefaultTo42(false);  //=> false\ndefaultTo42('Ramda');  //=> 'Ramda'\n// parseInt('string') results in NaN\ndefaultTo42(parseInt('string')); //=> 42",
},
"descend": {
    "prefix": "descend",
    "body": "const byAge = R.descend(R.prop('age'));\nconst people = [\n  { name: 'Emma', age: 70 },\n  { name: 'Peter', age: 78 },\n  { name: 'Mikhail', age: 62 },\n];\nconst peopleByOldestFirst = R.sort(byAge, people);\n  //=> [{ name: 'Peter', age: 78 }, { name: 'Emma', age: 70 }, { name: 'Mikhail', age: 62 }]",
},
"difference": {
    "prefix": "difference",
    "body": "R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]\nR.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]\nR.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]",
},
"differenceWith": {
    "prefix": "differenceWith",
    "body": "const cmp = (x, y) => x.a === y.a;\nconst l1 = [{a: 1}, {a: 2}, {a: 3}];\nconst l2 = [{a: 3}, {a: 4}];\nR.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]",
},
"dissoc": {
    "prefix": "dissoc",
    "body": "R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}",
},
"dissocPath": {
    "prefix": "dissocPath",
    "body": "R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}",
},
"divide": {
    "prefix": "divide",
    "body": "R.divide(71, 100); //=> 0.71\n\nconst half = R.divide(R.__, 2);\nhalf(42); //=> 21\n\nconst reciprocal = R.divide(1);\nreciprocal(4);   //=> 0.25",
},
"drop": {
    "prefix": "drop",
    "body": "R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\nR.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']\nR.drop(3, ['foo', 'bar', 'baz']); //=> []\nR.drop(4, ['foo', 'bar', 'baz']); //=> []\nR.drop(3, 'ramda');               //=> 'da'",
},
"dropLast": {
    "prefix": "dropLast",
    "body": "R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\nR.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']\nR.dropLast(3, ['foo', 'bar', 'baz']); //=> []\nR.dropLast(4, ['foo', 'bar', 'baz']); //=> []\nR.dropLast(3, 'ramda');               //=> 'ra'",
},
"dropLastWhile": {
    "prefix": "dropLastWhile",
    "body": "const lteThree = x => x <= 3;\n\nR.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]\n\nR.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'",
},
"dropRepeats": {
    "prefix": "dropRepeats",
    "body": "R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]",
},
"dropRepeatsWith": {
    "prefix": "dropRepeatsWith",
    "body": "const l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];\nR.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]",
},
"dropWhile": {
    "prefix": "dropWhile",
    "body": "const lteTwo = x => x <= 2;\n\nR.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]\n\nR.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'",
},
"either": {
    "prefix": "either",
    "body": "const gt10 = x => x > 10;\nconst even = x => x % 2 === 0;\nconst f = R.either(gt10, even);\nf(101); //=> true\nf(8); //=> true\n\nR.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)\nR.either([false, false, 'a'], [11]) // => [11, 11, "a"]",
},
"empty": {
    "prefix": "empty",
    "body": "R.empty(Just(42));      //=> Nothing()\nR.empty([1, 2, 3]);     //=> []\nR.empty('unicorns');    //=> ''\nR.empty({x: 1, y: 2});  //=> {}",
},
"endsWith": {
    "prefix": "endsWith",
    "body": "R.endsWith('c', 'abc')                //=> true\nR.endsWith('b', 'abc')                //=> false\nR.endsWith(['c'], ['a', 'b', 'c'])    //=> true\nR.endsWith(['b'], ['a', 'b', 'c'])    //=> false",
},
"eqBy": {
    "prefix": "eqBy",
    "body": "R.eqBy(Math.abs, 5, -5); //=> true",
},
"eqProps": {
    "prefix": "eqProps",
    "body": "const o1 = { a: 1, b: 2, c: 3, d: 4 };\nconst o2 = { a: 10, b: 20, c: 3, d: 40 };\nR.eqProps('a', o1, o2); //=> false\nR.eqProps('c', o1, o2); //=> true",
},
"equals": {
    "prefix": "equals",
    "body": "R.equals(1, 1); //=> true\nR.equals(1, '1'); //=> false\nR.equals([1, 2, 3], [1, 2, 3]); //=> true\n\nconst a = {}; a.v = a;\nconst b = {}; b.v = b;\nR.equals(a, b); //=> true",
},
"evolve": {
    "prefix": "evolve",
    "body": "const tomato = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};\nconst transformations = {\n  firstName: R.trim,\n  lastName: R.trim, // Will not get invoked.\n  data: {elapsed: R.add(1), remaining: R.add(-1)}\n};\nR.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}",
},
"F": {
    "prefix": "F",
    "body": "R.F(); //=> false",
},
"filter": {
    "prefix": "filter",
    "body": "const isEven = n => n % 2 === 0;\n\nR.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]\n\nR.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}",
},
"find": {
    "prefix": "find",
    "body": "const xs = [{a: 1}, {a: 2}, {a: 3}];\nR.find(R.propEq('a', 2))(xs); //=> {a: 2}\nR.find(R.propEq('a', 4))(xs); //=> undefined",
},
"findIndex": {
    "prefix": "findIndex",
    "body": "const xs = [{a: 1}, {a: 2}, {a: 3}];\nR.findIndex(R.propEq('a', 2))(xs); //=> 1\nR.findIndex(R.propEq('a', 4))(xs); //=> -1",
},
"findLast": {
    "prefix": "findLast",
    "body": "const xs = [{a: 1, b: 0}, {a:1, b: 1}];\nR.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}\nR.findLast(R.propEq('a', 4))(xs); //=> undefined",
},
"findLastIndex": {
    "prefix": "findLastIndex",
    "body": "const xs = [{a: 1, b: 0}, {a:1, b: 1}];\nR.findLastIndex(R.propEq('a', 1))(xs); //=> 1\nR.findLastIndex(R.propEq('a', 4))(xs); //=> -1",
},
"flatten": {
    "prefix": "flatten",
    "body": "R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);\n//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]",
},
"flip": {
    "prefix": "flip",
    "body": "const mergeThree = (a, b, c) => [].concat(a, b, c);\n\nmergeThree(1, 2, 3); //=> [1, 2, 3]\n\nR.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]",
},
"forEach": {
    "prefix": "forEach",
    "body": "const printXPlusFive = x => console.log(x + 5);\nR.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]\n// logs 6\n// logs 7\n// logs 8",
},
"forEachObjIndexed": {
    "prefix": "forEachObjIndexed",
    "body": "const printKeyConcatValue = (value, key) => console.log(key + ':' + value);\nR.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}\n// logs x:1\n// logs y:2",
},
"fromPairs": {
    "prefix": "fromPairs",
    "body": "R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}",
},
"groupBy": {
    "prefix": "groupBy",
    "body": "const byGrade = R.groupBy(function(student) {\n  const score = student.score;\n  return score < 65 ? 'F' :\n         score < 70 ? 'D' :\n         score < 80 ? 'C' :\n         score < 90 ? 'B' : 'A';\n});\nconst students = [{name: 'Abby', score: 84},\n                {name: 'Eddy', score: 58},\n                // ...\n                {name: 'Jack', score: 69}];\nbyGrade(students);\n// {\n//   'A': [{name: 'Dianne', score: 99}],\n//   'B': [{name: 'Abby', score: 84}]\n//   // ...,\n//   'F': [{name: 'Eddy', score: 58}]\n// }",
},
"groupWith": {
    "prefix": "groupWith",
    "body": "R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n//=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]\n\nR.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n//=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]\n\nR.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n//=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]\n\nR.groupWith(R.eqBy(isVowel), 'aestiou')\n//=> ['ae', 'st', 'iou']",
},
"gt": {
    "prefix": "gt",
    "body": "R.gt(2, 1); //=> true\nR.gt(2, 2); //=> false\nR.gt(2, 3); //=> false\nR.gt('a', 'z'); //=> false\nR.gt('z', 'a'); //=> true",
},
"gte": {
    "prefix": "gte",
    "body": "R.gte(2, 1); //=> true\nR.gte(2, 2); //=> true\nR.gte(2, 3); //=> false\nR.gte('a', 'z'); //=> false\nR.gte('z', 'a'); //=> true",
},
"has": {
    "prefix": "has",
    "body": "const hasName = R.has('name');\nhasName({name: 'alice'});   //=> true\nhasName({name: 'bob'});     //=> true\nhasName({});                //=> false\n\nconst point = {x: 0, y: 0};\nconst pointHas = R.has(R.__, point);\npointHas('x');  //=> true\npointHas('y');  //=> true\npointHas('z');  //=> false",
},
"hasIn": {
    "prefix": "hasIn",
    "body": "function Rectangle(width, height) {\n  this.width = width;\n  this.height = height;\n}\nRectangle.prototype.area = function() {\n  return this.width * this.height;\n};\n\nconst square = new Rectangle(2, 2);\nR.hasIn('width', square);  //=> true\nR.hasIn('area', square);  //=> true",
},
"hasPath": {
    "prefix": "hasPath",
    "body": "R.hasPath(['a', 'b'], {a: {b: 2}});         // => true\nR.hasPath(['a', 'b'], {a: {b: undefined}}); // => true\nR.hasPath(['a', 'b'], {a: {c: 2}});         // => false\nR.hasPath(['a', 'b'], {});                  // => false",
},
"head": {
    "prefix": "head",
    "body": "R.head(['fi', 'fo', 'fum']); //=> 'fi'\nR.head([]); //=> undefined\n\nR.head('abc'); //=> 'a'\nR.head(''); //=> ''",
},
"identical": {
    "prefix": "identical",
    "body": "const o = {};\nR.identical(o, o); //=> true\nR.identical(1, 1); //=> true\nR.identical(1, '1'); //=> false\nR.identical([], []); //=> false\nR.identical(0, -0); //=> false\nR.identical(NaN, NaN); //=> true",
},
"identity": {
    "prefix": "identity",
    "body": "R.identity(1); //=> 1\n\nconst obj = {};\nR.identity(obj) === obj; //=> true",
},
"ifElse": {
    "prefix": "ifElse",
    "body": "const incCount = R.ifElse(\n  R.has('count'),\n  R.over(R.lensProp('count'), R.inc),\n  R.assoc('count', 1)\n);\nincCount({});           //=> { count: 1 }\nincCount({ count: 1 }); //=> { count: 2 }",
},
"inc": {
    "prefix": "inc",
    "body": "R.inc(42); //=> 43",
},
"includes": {
    "prefix": "includes",
    "body": "R.includes(3, [1, 2, 3]); //=> true\nR.includes(4, [1, 2, 3]); //=> false\nR.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true\nR.includes([42], [[42]]); //=> true\nR.includes('ba', 'banana'); //=>true",
},
"indexBy": {
    "prefix": "indexBy",
    "body": "const list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];\nR.indexBy(R.prop('id'), list);\n//=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}",
},
"indexOf": {
    "prefix": "indexOf",
    "body": "R.indexOf(3, [1,2,3,4]); //=> 2\nR.indexOf(10, [1,2,3,4]); //=> -1",
},
"init": {
    "prefix": "init",
    "body": "R.init([1, 2, 3]);  //=> [1, 2]\nR.init([1, 2]);     //=> [1]\nR.init([1]);        //=> []\nR.init([]);         //=> []\n\nR.init('abc');  //=> 'ab'\nR.init('ab');   //=> 'a'\nR.init('a');    //=> ''\nR.init('');     //=> ''",
},
"innerJoin": {
    "prefix": "innerJoin",
    "body": "R.innerJoin(\n  (record, id) => record.id === id,\n  [{id: 824, name: 'Richie Furay'},\n   {id: 956, name: 'Dewey Martin'},\n   {id: 313, name: 'Bruce Palmer'},\n   {id: 456, name: 'Stephen Stills'},\n   {id: 177, name: 'Neil Young'}],\n  [177, 456, 999]\n);\n//=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]",
},
"insert": {
    "prefix": "insert",
    "body": "R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]",
},
"insertAll": {
    "prefix": "insertAll",
    "body": "R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]",
},
"intersection": {
    "prefix": "intersection",
    "body": "R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]",
},
"intersperse": {
    "prefix": "intersperse",
    "body": "R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']",
},
"into": {
    "prefix": "into",
    "body": "const numbers = [1, 2, 3, 4];\nconst transducer = R.compose(R.map(R.add(1)), R.take(2));\n\nR.into([], transducer, numbers); //=> [2, 3]\n\nconst intoArray = R.into([]);\nintoArray(transducer, numbers); //=> [2, 3]",
},
"invert": {
    "prefix": "invert",
    "body": "const raceResultsByFirstName = {\n  first: 'alice',\n  second: 'jake',\n  third: 'alice',\n};\nR.invert(raceResultsByFirstName);\n//=> { 'alice': ['first', 'third'], 'jake':['second'] }",
},
"invertObj": {
    "prefix": "invertObj",
    "body": "const raceResults = {\n  first: 'alice',\n  second: 'jake'\n};\nR.invertObj(raceResults);\n//=> { 'alice': 'first', 'jake':'second' }\n\n// Alternatively:\nconst raceResults = ['alice', 'jake'];\nR.invertObj(raceResults);\n//=> { 'alice': '0', 'jake':'1' }",
},
"invoker": {
    "prefix": "invoker",
    "body": "const sliceFrom = R.invoker(1, 'slice');\nsliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'\nconst sliceFrom6 = R.invoker(2, 'slice')(6);\nsliceFrom6(8, 'abcdefghijklm'); //=> 'gh'",
},
"is": {
    "prefix": "is",
    "body": "R.is(Object, {}); //=> true\nR.is(Number, 1); //=> true\nR.is(Object, 1); //=> false\nR.is(String, 's'); //=> true\nR.is(String, new String('')); //=> true\nR.is(Object, new String('')); //=> true\nR.is(Object, 's'); //=> false\nR.is(Number, {}); //=> false",
},
"isEmpty": {
    "prefix": "isEmpty",
    "body": "R.isEmpty([1, 2, 3]);   //=> false\nR.isEmpty([]);          //=> true\nR.isEmpty('');          //=> true\nR.isEmpty(null);        //=> false\nR.isEmpty({});          //=> true\nR.isEmpty({length: 0}); //=> false",
},
"isNil": {
    "prefix": "isNil",
    "body": "R.isNil(null); //=> true\nR.isNil(undefined); //=> true\nR.isNil(0); //=> false\nR.isNil([]); //=> false",
},
"join": {
    "prefix": "join",
    "body": "const spacer = R.join(' ');\nspacer(['a', 2, 3.4]);   //=> 'a 2 3.4'\nR.join('|', [1, 2, 3]);    //=> '1|2|3'",
},
"juxt": {
    "prefix": "juxt",
    "body": "const getRange = R.juxt([Math.min, Math.max]);\ngetRange(3, 4, 9, -3); //=> [-3, 9]",
},
"keys": {
    "prefix": "keys",
    "body": "R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']",
},
"keysIn": {
    "prefix": "keysIn",
    "body": "const F = function() { this.x = 'X'; };\nF.prototype.y = 'Y';\nconst f = new F();\nR.keysIn(f); //=> ['x', 'y']",
},
"last": {
    "prefix": "last",
    "body": "R.last(['fi', 'fo', 'fum']); //=> 'fum'\nR.last([]); //=> undefined\n\nR.last('abc'); //=> 'c'\nR.last(''); //=> ''",
},
"lastIndexOf": {
    "prefix": "lastIndexOf",
    "body": "R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6\nR.lastIndexOf(10, [1,2,3,4]); //=> -1",
},
"length": {
    "prefix": "length",
    "body": "R.length([]); //=> 0\nR.length([1, 2, 3]); //=> 3",
},
"lens": {
    "prefix": "lens",
    "body": "const xLens = R.lens(R.prop('x'), R.assoc('x'));\n\nR.view(xLens, {x: 1, y: 2});            //=> 1\nR.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\nR.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}",
},
"lensIndex": {
    "prefix": "lensIndex",
    "body": "const headLens = R.lensIndex(0);\n\nR.view(headLens, ['a', 'b', 'c']);            //=> 'a'\nR.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']\nR.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']",
},
"lensPath": {
    "prefix": "lensPath",
    "body": "const xHeadYLens = R.lensPath(['x', 0, 'y']);\n\nR.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n//=> 2\nR.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}\nR.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});\n//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}",
},
"lensProp": {
    "prefix": "lensProp",
    "body": "const xLens = R.lensProp('x');\n\nR.view(xLens, {x: 1, y: 2});            //=> 1\nR.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\nR.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}",
},
"lift": {
    "prefix": "lift",
    "body": "const madd3 = R.lift((a, b, c) => a + b + c);\n\nmadd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n\nconst madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);\n\nmadd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]",
},
"liftN": {
    "prefix": "liftN",
    "body": "const madd3 = R.liftN(3, (...args) => R.sum(args));\nmadd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]",
},
"lt": {
    "prefix": "lt",
    "body": "R.lt(2, 1); //=> false\nR.lt(2, 2); //=> false\nR.lt(2, 3); //=> true\nR.lt('a', 'z'); //=> true\nR.lt('z', 'a'); //=> false",
},
"lte": {
    "prefix": "lte",
    "body": "R.lte(2, 1); //=> false\nR.lte(2, 2); //=> true\nR.lte(2, 3); //=> true\nR.lte('a', 'z'); //=> true\nR.lte('z', 'a'); //=> false",
},
"map": {
    "prefix": "map",
    "body": "const double = x => x * 2;\n\nR.map(double, [1, 2, 3]); //=> [2, 4, 6]\n\nR.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}",
},
"mapAccum": {
    "prefix": "mapAccum",
    "body": "const digits = ['1', '2', '3', '4'];\nconst appender = (a, b) => [a + b, a + b];\n\nR.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]",
},
"mapAccumRight": {
    "prefix": "mapAccumRight",
    "body": "const digits = ['1', '2', '3', '4'];\nconst appender = (a, b) => [b + a, b + a];\n\nR.mapAccumRight(appender, 5, digits); //=> ['12345', ['12345', '2345', '345', '45']]",
},
"mapObjIndexed": {
    "prefix": "mapObjIndexed",
    "body": "const xyz = { x: 1, y: 2, z: 3 };\nconst prependKeyAndDouble = (num, key, obj) => key + (num * 2);\n\nR.mapObjIndexed(prependKeyAndDouble, xyz); //=> { x: 'x2', y: 'y4', z: 'z6' }",
},
"match": {
    "prefix": "match",
    "body": "R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']\nR.match(/a/, 'b'); //=> []\nR.match(/a/, null); //=> TypeError: null does not have a method named "match"",
},
"mathMod": {
    "prefix": "mathMod",
    "body": "R.mathMod(-17, 5);  //=> 3\nR.mathMod(17, 5);   //=> 2\nR.mathMod(17, -5);  //=> NaN\nR.mathMod(17, 0);   //=> NaN\nR.mathMod(17.2, 5); //=> NaN\nR.mathMod(17, 5.3); //=> NaN\n\nconst clock = R.mathMod(R.__, 12);\nclock(15); //=> 3\nclock(24); //=> 0\n\nconst seventeenMod = R.mathMod(17);\nseventeenMod(3);  //=> 2\nseventeenMod(4);  //=> 1\nseventeenMod(10); //=> 7",
},
"max": {
    "prefix": "max",
    "body": "R.max(789, 123); //=> 789\nR.max('a', 'b'); //=> 'b'",
},
"maxBy": {
    "prefix": "maxBy",
    "body": "//  square :: Number -> Number\nconst square = n => n * n;\n\nR.maxBy(square, -3, 2); //=> -3\n\nR.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5\nR.reduce(R.maxBy(square), 0, []); //=> 0",
},
"mean": {
    "prefix": "mean",
    "body": "R.mean([2, 7, 9]); //=> 6\nR.mean([]); //=> NaN",
},
"median": {
    "prefix": "median",
    "body": "R.median([2, 9, 7]); //=> 7\nR.median([7, 2, 10, 9]); //=> 8\nR.median([]); //=> NaN",
},
"memoizeWith": {
    "prefix": "memoizeWith",
    "body": "let count = 0;\nconst factorial = R.memoizeWith(R.identity, n => {\n  count += 1;\n  return R.product(R.range(1, n + 1));\n});\nfactorial(5); //=> 120\nfactorial(5); //=> 120\nfactorial(5); //=> 120\ncount; //=> 1",
},
"merge": {
    "prefix": "merge",
    "body": "R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });\n//=> { 'name': 'fred', 'age': 40 }\n\nconst withDefaults = R.merge({x: 0, y: 0});\nwithDefaults({y: 2}); //=> {x: 0, y: 2}",
},
"mergeAll": {
    "prefix": "mergeAll",
    "body": "R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}\nR.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}",
},
"mergeDeepLeft": {
    "prefix": "mergeDeepLeft",
    "body": "R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},\n                { age: 40, contact: { email: 'baa@example.com' }});\n//=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}",
},
"mergeDeepRight": {
    "prefix": "mergeDeepRight",
    "body": "R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},\n                 { age: 40, contact: { email: 'baa@example.com' }});\n//=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}",
},
"mergeDeepWith": {
    "prefix": "mergeDeepWith",
    "body": "R.mergeDeepWith(R.concat,\n                { a: true, c: { values: [10, 20] }},\n                { b: true, c: { values: [15, 35] }});\n//=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}",
},
"mergeDeepWithKey": {
    "prefix": "mergeDeepWithKey",
    "body": "let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r\nR.mergeDeepWithKey(concatValues,\n                   { a: true, c: { thing: 'foo', values: [10, 20] }},\n                   { b: true, c: { thing: 'bar', values: [15, 35] }});\n//=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}",
},
"mergeLeft": {
    "prefix": "mergeLeft",
    "body": "R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });\n//=> { 'name': 'fred', 'age': 40 }\n\nconst resetToDefault = R.mergeLeft({x: 0});\nresetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}",
},
"mergeRight": {
    "prefix": "mergeRight",
    "body": "R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });\n//=> { 'name': 'fred', 'age': 40 }\n\nconst withDefaults = R.mergeRight({x: 0, y: 0});\nwithDefaults({y: 2}); //=> {x: 0, y: 2}",
},
"mergeWith": {
    "prefix": "mergeWith",
    "body": "R.mergeWith(R.concat,\n            { a: true, values: [10, 20] },\n            { b: true, values: [15, 35] });\n//=> { a: true, b: true, values: [10, 20, 15, 35] }",
},
"mergeWithKey": {
    "prefix": "mergeWithKey",
    "body": "let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r\nR.mergeWithKey(concatValues,\n               { a: true, thing: 'foo', values: [10, 20] },\n               { b: true, thing: 'bar', values: [15, 35] });\n//=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }",
},
"min": {
    "prefix": "min",
    "body": "R.min(789, 123); //=> 123\nR.min('a', 'b'); //=> 'a'",
},
"minBy": {
    "prefix": "minBy",
    "body": "//  square :: Number -> Number\nconst square = n => n * n;\n\nR.minBy(square, -3, 2); //=> 2\n\nR.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1\nR.reduce(R.minBy(square), Infinity, []); //=> Infinity",
},
"modulo": {
    "prefix": "modulo",
    "body": "R.modulo(17, 3); //=> 2\n// JS behavior:\nR.modulo(-17, 3); //=> -2\nR.modulo(17, -3); //=> 2\n\nconst isOdd = R.modulo(R.__, 2);\nisOdd(42); //=> 0\nisOdd(21); //=> 1",
},
"move": {
    "prefix": "move",
    "body": "R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']\nR.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation",
},
"multiply": {
    "prefix": "multiply",
    "body": "const double = R.multiply(2);\nconst triple = R.multiply(3);\ndouble(3);       //=>  6\ntriple(4);       //=> 12\nR.multiply(2, 5);  //=> 10",
},
"nAry": {
    "prefix": "nAry",
    "body": "const takesTwoArgs = (a, b) => [a, b];\n\ntakesTwoArgs.length; //=> 2\ntakesTwoArgs(1, 2); //=> [1, 2]\n\nconst takesOneArg = R.nAry(1, takesTwoArgs);\ntakesOneArg.length; //=> 1\n// Only `n` arguments are passed to the wrapped function\ntakesOneArg(1, 2); //=> [1, undefined]",
},
"negate": {
    "prefix": "negate",
    "body": "R.negate(42); //=> -42",
},
"none": {
    "prefix": "none",
    "body": "const isEven = n => n % 2 === 0;\nconst isOdd = n => n % 2 === 1;\n\nR.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true\nR.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false",
},
"not": {
    "prefix": "not",
    "body": "R.not(true); //=> false\nR.not(false); //=> true\nR.not(0); //=> true\nR.not(1); //=> false",
},
"nth": {
    "prefix": "nth",
    "body": "const list = ['foo', 'bar', 'baz', 'quux'];\nR.nth(1, list); //=> 'bar'\nR.nth(-1, list); //=> 'quux'\nR.nth(-99, list); //=> undefined\n\nR.nth(2, 'abc'); //=> 'c'\nR.nth(3, 'abc'); //=> ''",
},
"nthArg": {
    "prefix": "nthArg",
    "body": "R.nthArg(1)('a', 'b', 'c'); //=> 'b'\nR.nthArg(-1)('a', 'b', 'c'); //=> 'c'",
},
"o": {
    "prefix": "o",
    "body": "const classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last\nconst yellGreeting = R.o(R.toUpper, classyGreeting);\nyellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"\n\nR.o(R.multiply(10), R.add(10))(-4) //=> 60",
},
"objOf": {
    "prefix": "objOf",
    "body": "const matchPhrases = R.compose(\n  R.objOf('must'),\n  R.map(R.objOf('match_phrase'))\n);\nmatchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}",
},
"of ": {
    "prefix": "of ",
    "body": "R.of(null); //=> [null]\nR.of([42]); //=> [[42]]",
},
"omit": {
    "prefix": "omit",
    "body": "R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}",
},
"once": {
    "prefix": "once",
    "body": "const addOneOnce = R.once(x => x + 1);\naddOneOnce(10); //=> 11\naddOneOnce(addOneOnce(50)); //=> 11",
},
"or": {
    "prefix": "or",
    "body": "R.or(true, true); //=> true\nR.or(true, false); //=> true\nR.or(false, true); //=> true\nR.or(false, false); //=> false",
},
"otherwise": {
    "prefix": "otherwise",
    "body": "var failedFetch = (id) => Promise.reject('bad ID');\nvar useDefault = () => ({ firstName: 'Bob', lastName: 'Loblaw' })\n\n//recoverFromFailure :: String -> Promise ({firstName, lastName})\nvar recoverFromFailure = R.pipe(\n  failedFetch,\n  R.otherwise(useDefault),\n  R.then(R.pick(['firstName', 'lastName'])),\n);\nrecoverFromFailure(12345).then(console.log)",
},
"over": {
    "prefix": "over",
    "body": "const headLens = R.lensIndex(0);\n\nR.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']",
},
"pair": {
    "prefix": "pair",
    "body": "R.pair('foo', 'bar'); //=> ['foo', 'bar']",
},
"partial": {
    "prefix": "partial",
    "body": "const multiply2 = (a, b) => a * b;\nconst double = R.partial(multiply2, [2]);\ndouble(2); //=> 4\n\nconst greet = (salutation, title, firstName, lastName) =>\n  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n\nconst sayHello = R.partial(greet, ['Hello']);\nconst sayHelloToMs = R.partial(sayHello, ['Ms.']);\nsayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'",
},
"partialRight": {
    "prefix": "partialRight",
    "body": "const greet = (salutation, title, firstName, lastName) =>\n  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n\nconst greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);\n\ngreetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'",
},
"partition": {
    "prefix": "partition",
    "body": "R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']);\n// => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]\n\nR.partition(R.includes('s'), { a: 'sss', b: 'ttt', foo: 'bars' });\n// => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]",
},
"path": {
    "prefix": "path",
    "body": "R.path(['a', 'b'], {a: {b: 2}}); //=> 2\nR.path(['a', 'b'], {c: {b: 2}}); //=> undefined",
},
"pathEq": {
    "prefix": "pathEq",
    "body": "const user1 = { address: { zipCode: 90210 } };\nconst user2 = { address: { zipCode: 55555 } };\nconst user3 = { name: 'Bob' };\nconst users = [ user1, user2, user3 ];\nconst isFamous = R.pathEq(['address', 'zipCode'], 90210);\nR.filter(isFamous, users); //=> [ user1 ]",
},
"pathOr": {
    "prefix": "pathOr",
    "body": "R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2\nR.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"",
},
"pathSatisfies": {
    "prefix": "pathSatisfies",
    "body": "R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true",
},
"pick": {
    "prefix": "pick",
    "body": "R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\nR.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}",
},
"pickAll": {
    "prefix": "pickAll",
    "body": "R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\nR.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}",
},
"pickBy": {
    "prefix": "pickBy",
    "body": "const isUpperCase = (val, key) => key.toUpperCase() === key;\nR.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}",
},
"pipe": {
    "prefix": "pipe",
    "body": "const f = R.pipe(Math.pow, R.negate, R.inc);\n\nf(3, 4); // -(3^4) + 1",
},
"pipeK": {
    "prefix": "pipeK",
    "body": "//  parseJson :: String -> Maybe *\n//  get :: String -> Object -> Maybe *\n\n//  getStateCode :: Maybe String -> Maybe String\nconst getStateCode = R.pipeK(\n  parseJson,\n  get('user'),\n  get('address'),\n  get('state'),\n  R.compose(Maybe.of, R.toUpper)\n);\n\ngetStateCode('{"user":{"address":{"state":"ny"}}}');\n//=> Just('NY')\ngetStateCode('[Invalid JSON]');\n//=> Nothing()",
},
"pipeP": {
    "prefix": "pipeP",
    "body": "//  followersForUser :: String -> Promise [User]\nconst followersForUser = R.pipeP(db.getUserById, db.getFollowers);",
},
"pipeWith": {
    "prefix": "pipeWith",
    "body": "const pipeWhileNotNil = R.pipeWith((f, res) => R.isNil(res) ? res : f(res));\nconst f = pipeWhileNotNil([Math.pow, R.negate, R.inc])\n\nf(3, 4); // -(3^4) + 1",
},
"pluck": {
    "prefix": "pluck",
    "body": "var getAges = R.pluck('age');\ngetAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); //=> [29, 27]\n\nR.pluck(0, [[1, 2], [3, 4]]);               //=> [1, 3]\nR.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}",
},
"prepend": {
    "prefix": "prepend",
    "body": "R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']",
},
"product": {
    "prefix": "product",
    "body": "R.product([2,4,6,8,100,1]); //=> 38400",
},
"project": {
    "prefix": "project",
    "body": "const abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};\nconst fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};\nconst kids = [abby, fred];\nR.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]",
},
"prop": {
    "prefix": "prop",
    "body": "R.prop('x', {x: 100}); //=> 100\nR.prop('x', {}); //=> undefined\nR.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4",
},
"propEq": {
    "prefix": "propEq",
    "body": "const abby = {name: 'Abby', age: 7, hair: 'blond'};\nconst fred = {name: 'Fred', age: 12, hair: 'brown'};\nconst rusty = {name: 'Rusty', age: 10, hair: 'brown'};\nconst alois = {name: 'Alois', age: 15, disposition: 'surly'};\nconst kids = [abby, fred, rusty, alois];\nconst hasBrownHair = R.propEq('hair', 'brown');\nR.filter(hasBrownHair, kids); //=> [fred, rusty]",
},
"propIs": {
    "prefix": "propIs",
    "body": "R.propIs(Number, 'x', {x: 1, y: 2});  //=> true\nR.propIs(Number, 'x', {x: 'foo'});    //=> false\nR.propIs(Number, 'x', {});            //=> false",
},
"propOr": {
    "prefix": "propOr",
    "body": "const alice = {\n  name: 'ALICE',\n  age: 101\n};\nconst favorite = R.prop('favoriteLibrary');\nconst favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');\n\nfavorite(alice);  //=> undefined\nfavoriteWithDefault(alice);  //=> 'Ramda'",
},
"props": {
    "prefix": "props",
    "body": "R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]\nR.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]\n\nconst fullName = R.compose(R.join(' '), R.props(['first', 'last']));\nfullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'",
},
"propSatisfies": {
    "prefix": "propSatisfies",
    "body": "R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true",
},
"range": {
    "prefix": "range",
    "body": "R.range(1, 5);    //=> [1, 2, 3, 4]\nR.range(50, 53);  //=> [50, 51, 52]",
},
"reduce": {
    "prefix": "reduce",
    "body": "R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10\n//          -               -10\n//         / \              / \\n//        -   4           -6   4\n//       / \              / \\n//      -   3   ==>     -3   3\n//     / \              / \\n//    -   2           -1   2\n//   / \              / \\n//  0   1            0   1",
},
"reduceBy": {
    "prefix": "reduceBy",
    "body": "const groupNames = (acc, {name}) => acc.concat(name)\nconst toGrade = ({score}) =>\n  score < 65 ? 'F' :\n  score < 70 ? 'D' :\n  score < 80 ? 'C' :\n  score < 90 ? 'B' : 'A'\n\nvar students = [\n  {name: 'Abby', score: 83},\n  {name: 'Bart', score: 62},\n  {name: 'Curt', score: 88},\n  {name: 'Dora', score: 92},\n]\n\nreduceBy(groupNames, [], toGrade, students)\n//=> {"A": ["Dora"], "B": ["Abby", "Curt"], "F": ["Bart"]}",
},
"reduced": {
    "prefix": "reduced",
    "body": "R.reduce(\n (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),\n [],\n [1, 2, 3, 4, 5]) // [1, 2, 3]",
},
"reduceRight": {
    "prefix": "reduceRight",
    "body": "R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2\n//    -               -2\n//   / \              / \\n//  1   -            1   3\n//     / \              / \\n//    2   -     ==>    2  -1\n//       / \              / \\n//      3   -            3   4\n//         / \              / \\n//        4   0            4   0",
},
"reduceWhile": {
    "prefix": "reduceWhile",
    "body": "const isOdd = (acc, x) => x % 2 === 1;\nconst xs = [1, 3, 5, 60, 777, 800];\nR.reduceWhile(isOdd, R.add, 0, xs); //=> 9\n\nconst ys = [2, 4, 6]\nR.reduceWhile(isOdd, R.add, 111, ys); //=> 111",
},
"reject": {
    "prefix": "reject",
    "body": "const isOdd = (n) => n % 2 === 1;\n\nR.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]\n\nR.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}",
},
"remove": {
    "prefix": "remove",
    "body": "R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]",
},
"repeat": {
    "prefix": "repeat",
    "body": "R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']\n\nconst obj = {};\nconst repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]\nrepeatedObjs[0] === repeatedObjs[1]; //=> true",
},
"replace": {
    "prefix": "replace",
    "body": "R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'\nR.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'\n\n// Use the "g" (global) flag to replace all occurrences:\nR.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'",
},
"reverse": {
    "prefix": "reverse",
    "body": "R.reverse([1, 2, 3]);  //=> [3, 2, 1]\nR.reverse([1, 2]);     //=> [2, 1]\nR.reverse([1]);        //=> [1]\nR.reverse([]);         //=> []\n\nR.reverse('abc');      //=> 'cba'\nR.reverse('ab');       //=> 'ba'\nR.reverse('a');        //=> 'a'\nR.reverse('');         //=> ''",
},
"scan": {
    "prefix": "scan",
    "body": "const numbers = [1, 2, 3, 4];\nconst factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]",
},
"sequence": {
    "prefix": "sequence",
    "body": "R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])\nR.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()\n\nR.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]\nR.sequence(R.of, Nothing());       //=> [Nothing()]",
},
"set": {
    "prefix": "set",
    "body": "const xLens = R.lensProp('x');\n\nR.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}\nR.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}",
},
"slice": {
    "prefix": "slice",
    "body": "R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\nR.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\nR.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\nR.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\nR.slice(0, 3, 'ramda');                     //=> 'ram'",
},
"sort": {
    "prefix": "sort",
    "body": "const diff = function(a, b) { return a - b; };\nR.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]",
},
"sortBy": {
    "prefix": "sortBy",
    "body": "const sortByFirstItem = R.sortBy(R.prop(0));\nconst pairs = [[-1, 1], [-2, 2], [-3, 3]];\nsortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]\n\nconst sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));\nconst alice = {\n  name: 'ALICE',\n  age: 101\n};\nconst bob = {\n  name: 'Bob',\n  age: -10\n};\nconst clara = {\n  name: 'clara',\n  age: 314.159\n};\nconst people = [clara, bob, alice];\nsortByNameCaseInsensitive(people); //=> [alice, bob, clara]",
},
"sortWith": {
    "prefix": "sortWith",
    "body": "const alice = {\n  name: 'alice',\n  age: 40\n};\nconst bob = {\n  name: 'bob',\n  age: 30\n};\nconst clara = {\n  name: 'clara',\n  age: 40\n};\nconst people = [clara, bob, alice];\nconst ageNameSort = R.sortWith([\n  R.descend(R.prop('age')),\n  R.ascend(R.prop('name'))\n]);\nageNameSort(people); //=> [alice, clara, bob]",
},
"split": {
    "prefix": "split",
    "body": "const pathComponents = R.split('/');\nR.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']\n\nR.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']",
},
"splitAt": {
    "prefix": "splitAt",
    "body": "R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]\nR.splitAt(5, 'hello world');      //=> ['hello', ' world']\nR.splitAt(-1, 'foobar');          //=> ['fooba', 'r']",
},
"splitEvery": {
    "prefix": "splitEvery",
    "body": "R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]\nR.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']",
},
"splitWhen": {
    "prefix": "splitWhen",
    "body": "R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]",
},
"startsWith": {
    "prefix": "startsWith",
    "body": "R.startsWith('a', 'abc')                //=> true\nR.startsWith('b', 'abc')                //=> false\nR.startsWith(['a'], ['a', 'b', 'c'])    //=> true\nR.startsWith(['b'], ['a', 'b', 'c'])    //=> false",
},
"subtract": {
    "prefix": "subtract",
    "body": "R.subtract(10, 8); //=> 2\n\nconst minus5 = R.subtract(R.__, 5);\nminus5(17); //=> 12\n\nconst complementaryAngle = R.subtract(90);\ncomplementaryAngle(30); //=> 60\ncomplementaryAngle(72); //=> 18",
},
"sum": {
    "prefix": "sum",
    "body": "R.sum([2,4,6,8,100,1]); //=> 121",
},
"symmetricDifference": {
    "prefix": "symmetricDifference",
    "body": "R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]\nR.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]",
},
"symmetricDifferenceWith": {
    "prefix": "symmetricDifferenceWith",
    "body": "const eqA = R.eqBy(R.prop('a'));\nconst l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];\nconst l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];\nR.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]",
},
"T": {
    "prefix": "T",
    "body": "R.T(); //=> true",
},
"tail": {
    "prefix": "tail",
    "body": "R.tail([1, 2, 3]);  //=> [2, 3]\nR.tail([1, 2]);     //=> [2]\nR.tail([1]);        //=> []\nR.tail([]);         //=> []\n\nR.tail('abc');  //=> 'bc'\nR.tail('ab');   //=> 'b'\nR.tail('a');    //=> ''\nR.tail('');     //=> ''",
},
"take": {
    "prefix": "take",
    "body": "R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']\nR.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\nR.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\nR.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\nR.take(3, 'ramda');               //=> 'ram'\n\nconst personnel = [\n  'Dave Brubeck',\n  'Paul Desmond',\n  'Eugene Wright',\n  'Joe Morello',\n  'Gerry Mulligan',\n  'Bob Bates',\n  'Joe Dodge',\n  'Ron Crotty'\n];\n\nconst takeFive = R.take(5);\ntakeFive(personnel);\n//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']",
},
"takeLast": {
    "prefix": "takeLast",
    "body": "R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']\nR.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\nR.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\nR.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\nR.takeLast(3, 'ramda');               //=> 'mda'",
},
"takeLastWhile": {
    "prefix": "takeLastWhile",
    "body": "const isNotOne = x => x !== 1;\n\nR.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]\n\nR.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'",
},
"takeWhile": {
    "prefix": "takeWhile",
    "body": "const isNotFour = x => x !== 4;\n\nR.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]\n\nR.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'",
},
"tap": {
    "prefix": "tap",
    "body": "const sayX = x => console.log('x is ' + x);\nR.tap(sayX, 100); //=> 100\n// logs 'x is 100'",
},
"test": {
    "prefix": "test",
    "body": "R.test(/^x/, 'xyz'); //=> true\nR.test(/^y/, 'xyz'); //=> false",
},
"then": {
    "prefix": "then",
    "body": "var makeQuery = (email) => ({ query: { email }});\n\n//getMemberName :: String -> Promise ({firstName, lastName})\nvar getMemberName = R.pipe(\n  makeQuery,\n  fetchMember,\n  R.then(R.pick(['firstName', 'lastName']))\n);",
},
"thunkify": {
    "prefix": "thunkify",
    "body": "R.thunkify(R.identity)(42)(); //=> 42\nR.thunkify((a, b) => a + b)(25, 17)(); //=> 42",
},
"times": {
    "prefix": "times",
    "body": "R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]",
},
"toLower": {
    "prefix": "toLower",
    "body": "R.toLower('XYZ'); //=> 'xyz'",
},
"toPairs": {
    "prefix": "toPairs",
    "body": "R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]",
},
"toPairsIn": {
    "prefix": "toPairsIn",
    "body": "const F = function() { this.x = 'X'; };\nF.prototype.y = 'Y';\nconst f = new F();\nR.toPairsIn(f); //=> [['x','X'], ['y','Y']]",
},
"toString": {
    "prefix": "toString",
    "body": "R.toString(42); //=> '42'\nR.toString('abc'); //=> '"abc"'\nR.toString([1, 2, 3]); //=> '[1, 2, 3]'\nR.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'\nR.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'",
},
"toUpper": {
    "prefix": "toUpper",
    "body": "R.toUpper('abc'); //=> 'ABC'",
},
"transduce": {
    "prefix": "transduce",
    "body": "const numbers = [1, 2, 3, 4];\nconst transducer = R.compose(R.map(R.add(1)), R.take(2));\nR.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]\n\nconst isOdd = (x) => x % 2 === 1;\nconst firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));\nR.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]",
},
"transpose": {
    "prefix": "transpose",
    "body": "R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]\nR.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]\n\n// If some of the rows are shorter than the following rows, their elements are skipped:\nR.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]",
},
"traverse": {
    "prefix": "traverse",
    "body": "// Returns `Maybe.Nothing` if the given divisor is `0`\nconst safeDiv = n => d => d === 0 ? Maybe.Nothing() : Maybe.Just(n / d)\n\nR.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Maybe.Just([5, 2.5, 2])\nR.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Maybe.Nothing",
},
"trim": {
    "prefix": "trim",
    "body": "R.trim('   xyz  '); //=> 'xyz'\nR.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']",
},
"tryCatch": {
    "prefix": "tryCatch",
    "body": "R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true\nR.tryCatch(() => { throw 'foo'}, R.always('catched'))('bar') // => 'catched'\nR.tryCatch(R.times(R.identity), R.always([]))('s') // => []\n ``",
},
"type": {
    "prefix": "type",
    "body": "R.type({}); //=> "Object"\nR.type(1); //=> "Number"\nR.type(false); //=> "Boolean"\nR.type('s'); //=> "String"\nR.type(null); //=> "Null"\nR.type([]); //=> "Array"\nR.type(/[A-z]/); //=> "RegExp"\nR.type(() => {}); //=> "Function"\nR.type(undefined); //=> "Undefined"",
},
"unapply": {
    "prefix": "unapply",
    "body": "R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'",
},
"unary": {
    "prefix": "unary",
    "body": "const takesTwoArgs = function(a, b) {\n  return [a, b];\n};\ntakesTwoArgs.length; //=> 2\ntakesTwoArgs(1, 2); //=> [1, 2]\n\nconst takesOneArg = R.unary(takesTwoArgs);\ntakesOneArg.length; //=> 1\n// Only 1 argument is passed to the wrapped function\ntakesOneArg(1, 2); //=> [1, undefined]",
},
"uncurryN": {
    "prefix": "uncurryN",
    "body": "const addFour = a => b => c => d => a + b + c + d;\n\nconst uncurriedAddFour = R.uncurryN(4, addFour);\nuncurriedAddFour(1, 2, 3, 4); //=> 10",
},
"unfold": {
    "prefix": "unfold",
    "body": "const f = n => n > 50 ? false : [-n, n + 10];\nR.unfold(f, 10); //=> [-10, -20, -30, -40, -50]",
},
"union": {
    "prefix": "union",
    "body": "R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]",
},
"unionWith": {
    "prefix": "unionWith",
    "body": "const l1 = [{a: 1}, {a: 2}];\nconst l2 = [{a: 1}, {a: 4}];\nR.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]",
},
"uniq": {
    "prefix": "uniq",
    "body": "R.uniq([1, 1, 2, 1]); //=> [1, 2]\nR.uniq([1, '1']);     //=> [1, '1']\nR.uniq([[42], [42]]); //=> [[42]]",
},
"uniqBy": {
    "prefix": "uniqBy",
    "body": "R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]",
},
"uniqWith": {
    "prefix": "uniqWith",
    "body": "const strEq = R.eqBy(String);\nR.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]\nR.uniqWith(strEq)([{}, {}]);       //=> [{}]\nR.uniqWith(strEq)([1, '1', 1]);    //=> [1]\nR.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']",
},
"unless": {
    "prefix": "unless",
    "body": "let safeInc = R.unless(R.isNil, R.inc);\nsafeInc(null); //=> null\nsafeInc(1); //=> 2",
},
"unnest": {
    "prefix": "unnest",
    "body": "R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]\nR.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]",
},
"until": {
    "prefix": "until",
    "body": "R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128",
},
"update": {
    "prefix": "update",
    "body": "R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']\nR.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']",
},
"useWith": {
    "prefix": "useWith",
    "body": "R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81\nR.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81\nR.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32\nR.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32",
},
"values": {
    "prefix": "values",
    "body": "R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]",
},
"valuesIn": {
    "prefix": "valuesIn",
    "body": "const F = function() { this.x = 'X'; };\nF.prototype.y = 'Y';\nconst f = new F();\nR.valuesIn(f); //=> ['X', 'Y']",
},
"view": {
    "prefix": "view",
    "body": "const xLens = R.lensProp('x');\n\nR.view(xLens, {x: 1, y: 2});  //=> 1\nR.view(xLens, {x: 4, y: 2});  //=> 4",
},
"when": {
    "prefix": "when",
    "body": "// truncate :: String -> String\nconst truncate = R.when(\n  R.propSatisfies(R.gt(R.__, 10), 'length'),\n  R.pipe(R.take(10), R.append('…'), R.join(''))\n);\ntruncate('12345');         //=> '12345'\ntruncate('0123456789ABC'); //=> '0123456789…'",
},
"where": {
    "prefix": "where",
    "body": "// pred :: Object -> Boolean\nconst pred = R.where({\n  a: R.equals('foo'),\n  b: R.complement(R.equals('bar')),\n  x: R.gt(R.__, 10),\n  y: R.lt(R.__, 20)\n});\n\npred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true\npred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false\npred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false\npred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false\npred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false",
},
"whereEq": {
    "prefix": "whereEq",
    "body": "// pred :: Object -> Boolean\nconst pred = R.whereEq({a: 1, b: 2});\n\npred({a: 1});              //=> false\npred({a: 1, b: 2});        //=> true\npred({a: 1, b: 2, c: 3});  //=> true\npred({a: 1, b: 1});        //=> false",
},
"without": {
    "prefix": "without",
    "body": "R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]",
},
"xprod": {
    "prefix": "xprod",
    "body": "R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]",
},
"zip": {
    "prefix": "zip",
    "body": "R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]",
},
"zipObj": {
    "prefix": "zipObj",
    "body": "R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}",
},
"zipWith": {
    "prefix": "zipWith",
    "body": "const f = (x, y) => {\n  // ...\n};\nR.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);\n//=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]",
},
