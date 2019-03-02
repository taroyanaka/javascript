const R = require('ramda');
const _ = require('underscore');

function showAZ() {
  console.log("a: ");
  console.dir(a);
  console.log("b: ");
  console.dir(b);
  console.log("c: ");
  console.dir(c);
  console.log("d: ");
  console.dir(d);
  console.log("e: ");
  console.dir(e);
  console.log("f: ");
  console.dir(f);
  console.log("g: ");
  console.dir(g);
  console.log("h: ");
  console.dir(h);
  console.log("i: ");
  console.dir(i);
  console.log("j: ");
  console.dir(j);
  console.log("k: ");
  console.dir(k);
  console.log("l: ");
  console.dir(l);
  console.log("m: ");
  console.dir(m);
  console.log("n: ");
  console.dir(n);
  console.log("o: ");
  console.dir(o);
  console.log("p: ");
  console.dir(p);
  console.log("q: ");
  console.dir(q);
  console.log("r: ");
  console.dir(r);
  console.log("s: ");
  console.dir(s);
  console.log("t: ");
  console.dir(t);
  console.log("u: ");
  console.dir(u);
  console.log("v: ");
  console.dir(v);
  console.log("w: ");
  console.dir(w);
  console.log("x: ");
  console.dir(x);
  console.log("y: ");
  console.dir(y);
  console.log("z: ");
  console.dir(z);
}
// let chars = "abc";
// const toUpperCaseFirstChar = str => {
//   let remainChars = "";
//   for (let i = 1; i < str.length; i++) {
//     // remainChars = remainChars += str[i];
//     remainChars += str[i];
//   }
//   return str[0].toUpperCase() + remainChars
// }
// console.log(toUpperCaseFirstChar(chars)); // => "Abc"


// var 123;
// console.log(foo);

// const sample = () => {
//   100;
//   console.log(foo);
// }
// sample();


// let bar = 456;
// const sample2 = () => {
//   console.log(bar);
//   bar = 789;
// }
// sample2();
// console.log(bar);

let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

// ramda.js samples

a = R.sortBy(R.prop(1))([
  [10, 1],
  [5, 2],
  [2.5, 3],
]);

b = R.pipe(R.sortBy(R.prop(1)), R.reverse)([
  [10, 1],
  [5, 2],
  [2.5, 3]
]);

c = R.sortBy(R.prop(1))([
  [10, 1],
  [5, 2],
  [2.5, 3]
]);

d = R.sortBy(R.prop('name'))([{
  name: "Taro",
  age: 28
}, {
  name: "Blue",
  age: 30
}, {
  name: "Aka",
  age: 24
}]);

// e = R.sortBy(R.prop('age'))([{
e = R.pipe(R.sortBy(R.prop('age'), R.__), R.reverse)([{
  name: "Taro",
  age: 28
}, {
  name: "Blue",
  age: 30
}, {
  name: "Aka",
  age: 24
}]);


var albums = [{
    title: "Sabbath Bloody Sabbath",
    genre: "Metal"
  },
  {
    title: "Scientist",
    genre: "Dub"
  },
  {
    title: "Undertow",
    genre: "Metal"
  }
];
var dub = {
  title: "Scientist",
  genre: "Dub"
}
f = R.groupBy(R.prop('genre'))(albums);

g = R.countBy(R.prop('genre'))(albums);

var nums = [
  [1, 2],
  [3, 4],
  [5, 6]
];
h = R.reduce(R.concat, [], [
  [1, 2],
  [3, 4],
  [5, 6]
]);


i = R.pluck(0)([
  [1, 2],
  [3, 4]
]);

j = R.pluck('title')(albums);

k = R.keys(dub);

l = R.values(dub);

m = R.map([
  ['name', 'number'],
  ['Taro', 32]
]);

n = R.invert({
  first: 'alice',
  second: 'jake',
  third: 'alice',
});


const pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
});


o = pred({
  a: 'foo',
  b: 'xxx',
  x: 11,
  y: 19
});
//=> true;
//pred({a: 'xxx', b: 'xxx', x: 11, y: 19});//=> false;
//pred({a: 'foo', b: 'bar', x: 11, y: 19});//=> false;
//pred({a: 'foo', b: 'xxx', x: 10, y: 19});//=> false;
//pred({a: 'foo', b: 'xxx', x: 11, y: 20});//=> false;
//R.zipObj()

//R.reduce(R.concat, [], [[1, 2], [3, 4], [5, 6]]);


let obj = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
}
p = R.keys(R.invert(obj))

q = R.omit(['a', 'c'], {
  a: 1,
  b: 2,
  c: 3
});
//R.invertObj([1,2])

const isNotNil = R.complement(R.isNil);

r = R.isNil(null);
//=> true;
s = isNotNil(null);
//=> false;


t = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
}, R.__)({
  a: 'foo',
  b: 'xxx',
  x: 11,
  y: 19
})

const log = R.bind(console.log, console);

// R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({
//   a: 1
// });



u = R.assoc('a', 3, {
  a: 1,
  b: 2
});
//=> {a: 3, b: 2}
v = R.pick(['a', 'b', 'e', 'f'], {
  a: 1,
  b: 2,
  c: 3,
  d: 4
});
//=> {"a": 1, "b": 2};
w = R.pluck('a', {
  a: 1,
  b: 2,
  c: 3,
  d: 4
});
//=> {"a": 1, "b": 2};
x = R.pluck('val', {
  a: {
    val: 3
  },
  b: {
    val: 5
  }
});

y = R.pluck('name', [{
  name: 'fred',
  age: 29
}, {
  name: 'wilma',
  age: 27
}]);

// alias R.pluck('',[]) is R.map(R.prop())([])
z = R.map(R.prop('name'))([{
  name: 'fred',
  age: 29,
  sex: 'male',
}, {
  name: 'wilma',
  age: 27,
  sex: 'female',
}]);



foo = R.map(((x) => x * 2))([1, 2]);



foo = R.map(R.pick(['a', 'b', 'e']))([{
  a: 1,
  b: 2,
  c: 3,
  d: 4
}, {
  a: 3,
  b: 4,
  c: 5,
  d: 6
}])
foo;

// map with reduce and map and map
// ary = [
//     ["foo", 1, ["bar", 2, 3]],
//     ["foo2", 10, ["bar2", 20, 30]],
// ]
// let mapWithReduce = ary.map(V => {
//     let V2 = V[2].reduce((all, one) => {
//         return all + " and " + one.toString();
//     })
//     return `${V[0]} and ${V[1].toString()}, ${V2}`
// })
// console.log(mapWithReduce);

// ary = [
//     ["foo", 1, [
//         [2, 3],
//         [4, 5],
//         [6, 7]
//     ]],
//     ["foo2", 10, [
//         [2, 3],
//         [4, 5],
//         [6, 7]
//     ]],
// ]
// let mapWithMap = ary.map(V => {
//     let V2 = V[2].map(V2 => {
//         return V2[0] + V2[1]
//     })
//     return `${V[0]} and ${V[1].toString()}, ${V2.join("-").toString()}`
// })
// console.log(mapWithMap);


// "map with reduce and map and map".split(" ").map(V => {
//     let chars = V.split()
//     let head = chars.splice(0, 1)[0]
//     // head = head.toUpperCase();
//     h = head.toUpperCase();
//     chars.splice(0, 0, h);
//     return chars.join(",")
// }) //.join();
// console.log(foo);



// console.log([1, 2, 3].concat([4, 5, 6])); // => [ 1, 2, 3, 4, 5, 6 ]

// ary1 = [1, 2, 3, 4, 5, 6];
// ary1.splice(ary1.length, 0, ["foo", "bar"]);
// console.log(ary1); // => [ 1, 2, 3, 4, 5, 6, [ 'foo', 'bar' ] ]
// ary1.splice(-1, 1);
// console.log(ary1);

// ary1 = [1, 2, 3, 4, 5, 6, ["foo", "bar"]];
// ary2 = []
// while (ary1.length !== 0) {
//     ary2.splice(ary2.length, 0, ary1.splice(0, 2))
// }
// console.log(ary1);
// console.log(ary2);

// ary1 = [1, 2, 3, 4, 5, 6, ["foo", "bar"]].reverse();
// ary2 = []
// while (ary1.length !== 0) {
//     ary2.splice(ary2.length, 0, ary1.splice(0, 2))
// }
// console.log(ary1);
// console.log(ary2); // => [ [ [ 'foo', 'bar' ], 6 ], [ 5, 4 ], [ 3, 2 ], [ 1 ] ]

// ary1 = [1, 2, 3, 4, 5, 6, ["foo", "bar"]].reverse();
// ary2 = []
// while (ary1.length !== 0) {
//     ary2.splice(0, 0, ary1.splice(0, 2))
// }
// console.log(ary1);
// console.log(ary2); // => [ [ 1 ], [ 3, 2 ], [ 5, 4 ], [ [ 'foo', 'bar' ], 6 ] ]
// console.log(ary2); // => [ [ 1 ], [ 3, 2 ], [ 5, 4 ], [ [ 'foo', 'bar' ], 6 ] ]
// console.log(require('ramda').flatten(ary2));


// flat and fullflat a.k.a flatten function
// reference from https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#reduce_%E3%81%A8_concat
// unFlattenAry = [1, 2, [3, 4, [5, 6]]];

// const flat = (array) => {
//     return array.reduce((acc, val) => acc.concat(val), [])
// };

// console.log(flat(unFlattenAry)); // => [ 1, 2, 3, 4, [ 5, 6 ] ]

// const fullFlat = ary => {
//     while (ary.some(V => Array.isArray(V))) {
//         ary = flat(ary)
//     }
//     return ary;
// }
// console.log(fullFlat(unFlattenAry)); // => [ 1, 2, 3, 4, 5, 6 ]


// console.log([1, 2, ["foo", "bar"], 3].some(V => Array.isArray(V)));


// console.log([1, 2, ["foo", "bar"], 3].some(V => Array.isArray(V)));


// Map does not replace filter
// console.log([1, 2, 3].filter(V => V == 2)); // => [ 2 ]
// console.log([1, 2, 3].map(V => {
//     if (V == 2) {
//         return V
//     }
// })); // => [ undefined, 2, undefined ]




// use map dont use forEach
// longer
// ary1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// ary2 = []
// ary1.forEach(V => {
//     ary2.splice(ary2.length, 0, [V[0], V[1] * 2])
// })
// console.log(ary2) // => [ [ 1, 4 ], [ 3, 8 ], [ 5, 12 ] ]

// // shorter
// ary1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// ary2 = ary1.map(V => {
//     return [V[0], V[1] * 2]
// });
// console.log(ary2) // => [ [ 1, 4 ], [ 3, 8 ], [ 5, 12 ] ]


// // forEach is same with map in console.log
// ary1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// ary1.forEach(V => {
//     console.log(V); // => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// })
// ary1.map(V => {
//     console.log(V); // => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// })

// console.log("------");

// // forEach is not same with map in return
// ary1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// ary2 = ary1.forEach(V => {
//     return V
// })
// console.log(ary2); // => undefined
// ary2 = ary1.map(V => {
//     return V
// })
// console.log(ary2); // => [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]






// console.log([1, 2, 3].map(V => { if (V == 2) { V } })



// https://qiita.com/jkr_2255/items/62b3ee3361315d55078a
// const testFunc = async () => {
//   for(let item of arr) await sleptLog(item);
//   console.log('done!')
// };
// const testFunc = async () => {
//   await Promise.all(arr.map(async item => await sleptLog(item)))
//   console.log('done!')
// };


// const fetch = require("node-fetch");
// const simpleCrawler = (url = "https://www.yahoo.co.jp/") => {
//     let target = [];
//     fetch(url)
//         .then(res => res.text())
//         .then(text => new DOMParser().parseFromString(text, "text/html"))
//         .then(doc => {
//             doc.querySelectorAll('a')
//                 .forEach(aElm => { target.push([aElm.innerText, aElm.href]) })
//         });
//         return target
// }

// simpleCrawler();



// const request = require('request');
// //const HTMLParser = require('fast-html-parser');
// const HTMLParser = require('htmlparser2');
// request('https://www.yahoo.co.jp/', (error, response, body) => { 'body:', 
//         HTMLParser.parse(body)
//         .querySelectorAll('a')
// //        .forEach(aElm => { console.log(aElm.textContent) })
// });
// [1, 2, 3].forEach(v => { console.log(v) });


// const request = require('request'); let [];
// const HTMLParser = require('fast-html-parser');
// request('https://www.yahoo.co.jp/', (error, response, body) => {
//     'body:',
//     HTMLParser.parse(body)
//         .querySelectorAll('a')
// });

// Array.from(foo).forEach(v => { console.log(v) });

// // const bar = Array.from(foo);
// // bar.forEach(v => { console.log(v) });















// const request = require('request');
// const HTMLParser = require('fast-html-parser');

// const req = (url = 'https://www.yahoo.co.jp/') => {
//     return new Promise((resolve, reject) => {
//         request(url, (error, response, body) => {
//             resolve(body);
//         });
//     });
// }


// function foo(bar) {
//     bar += 1
//     return bar
// }

// function hoge("bar") {
//     return foo
// }

// // VS codeのAdd jsdoc commentsというpluginでJSDocを生成
// // const namedArgumentFunc = ... =>{...} の形式で関数定義するとAdd jsdoc comments不可(対応してほしい...)
// /**
//  * @param  {string} {foo='bar' random.number
//  * @param  {string} baz=200 random.word
//  * @param  {boolean} qux=false}={} random.boolean
//  * @returns {string} `a=${foo}, b=${baz}, c=${qux}`
//  * @example
//      namedArgumentFunc({
//          qux: false,
//          foo: 'content.html',
//      })
//  * // returns {string} 'a=content.html, b=200, c=false'
//  */
// function namedArgumentFunc({
//     'bar',
//     baz = 200,
//     qux = false
// } = {}) {
//     return `a=${foo}, b=${baz}, c=${qux}`;
// }

// require("assert").equal(
//     namedArgumentFunc({
//         qux: false,
//         foo: 'content.html',
//     }), 'a=content.html, b=200, c=false'
// )

// for (let i = 0; i <= 100; i++) {
//     arg0 = require("faker").random.number();
//     arg1 = require('faker').random.word();
//     arg2 = require('faker').random.boolean();
//     res = `a=${arg0}, b=${arg1}, c=${arg2}`

//     require('assert').equal(
//         namedArgumentFunc({
//             foo: arg0,
//             baz: arg1,
//             qux: arg2,
//         }),
//         res,
//         console.log("ok!")
//     )
// }


// require("assert").equal(
//     namedArgumentFunc({
//         qux: false,
//         foo: 'content.html',
//     }), 'a=content.html, b=200, c=false'
// )

// const (bar) => {
//     return "bar"
// }

// require('assert').equal(
//     foo("bar"),
//     "bar",
//     console.log(`test is clear`)
// )

// const assert = require('assert').strict;
// assert.ok(true);

// console.log(require("ramda").add(2, 3));


// // const assert = require('assert');

// require('assert').ok(/^hello/.test('hello world!'));




// var http = require('http'),
//     vm = require('vm'),
//     concat = require('concat-stream'); // this is just a helper to receive the
// // http payload in a single callback
// // see https://www.npmjs.com/package/concat-stream

// http.get({
//         host: "https://rawgit.com",
//         port: 80,
//         path: '/Marak/faker.js/master/examples/browser/js/faker.js'
//     },
//     function (res) {
//         res.setEncoding('utf8');
//         res.pipe(concat({
//             encoding: 'string'
//         }, function (remoteSrc) {
//             vm.runInThisContext(remoteSrc, 'remote_modules/faker.js');
//         }));
//     });


// email regexp https://qiita.com/sakuro/items/1eaa307609ceaaf51123
// node.js assert http://sucrose.hatenablog.com/entry/20120304/p1
// faker.js https://github.com/Marak/faker.js/tree/master/build/build
// require('assert').ok(
//     // check true
//     /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//     .test(
//         require("faker").internet.email()
//     ),
//     console.log(`test is clear`)
// );

// [1, 2, 3].forEach(currentItem => {
//     console.log(currentItem);
// });
// console.log()



// var regex1 = RegExp('foo*');
// var regex2 = RegExp('foo*', 'g');
// var str1 = 'table football';

// console.log(/^hello/.test('hello world!'))
// // expected output: true




// namedArgumentFunc({
//     qux: false,
//     foo: 'content.html',
//     // 引数の順序関係無し&必要な引数だけを指定できる
// });
// // 関数定義引数末尾に={}を付けたので引数無しで関数を実行できる
// // namedArgumentFunc();




// /**
//  *
//  *
//  * @param {*} [{
//  *     'bar',
//  *     baz = 200,
//  *     qux = false
//  * }={}]
//  * @returns
//  */
// function namedArgumentFunc2({
//     'bar',
//     baz = 200,
//     qux = false
// } = {}) {
//     return `a=${foo}, b=${baz}, c=${qux}`;
// }


// function showPanel(
//     path = 'content.html',
//     height = 200,
//     modeless = false
// ) {
//     console.log(`a=${path}`, `b=${height}`, `c=${modeless}`);
// }

// showPanel(
//     modeless: false,
//     //全ての引数を指定しないとerrorになる
//     path: 'content.html',
// );





// req('https://qiita.com/murase/items/908cf31b6776448a5b1d')
//     .then(body => (
//         HTMLParser.parse(body)
//             .querySelectorAll('a')
//             .forEach(element => {
//                 console.log(element.rawAttrs)
//             })
//     ));








// const crawler = async () => {
//     return new Promise(resolve => {
//         let target = [];

//         resolve(target);
//     })
//     // return target;
// }

// crawler().then(res => (console.log(res)));











// const request = require('request');
// const HTMLParser = require('fast-html-parser');
// var ary = [];

// const httpRequest = (url = 'https://www.yahoo.co.jp/') => {
//     return new Promise((resolve, reject) => {
//         let proxyUrl = process.env.PROXYURL
//         let proxiedRequest = request.defaults({ 'proxy': proxyUrl });
//         // request(url, (error, response, body) => {
//         proxiedRequest.get(url, (error, response, body) => {
//             resolve(body);
//         });
//     });
// }

// httpRequest('https://gihyo.jp/')
//     .then(body => {
//         HTMLParser.parse(body)
//             .querySelectorAll('a')
//             .forEach(element => {
//                 // console.log(element.rawAttrs)
//                 ary.push(element.rawAttrs)
//             })
//         // return ary;
//     })
//     .then(result => {
//         console.log(ary)
//     });







// // package.json
// // {
// //     "dependencies": {
// //         "request": "^2.88.0",
// //             "fast-html-parser": "^1.0.1"
// //     }
// // }



// /**
// * Responds to any HTTP request.
// *
// * @param {!express:Request} req HTTP request context.
// * @param {!express:Response} res HTTP response context.
// */

// // using proxy, using environment variable "PROXYURL"
// // reference with https://stackoverflow.com/a/23856484/9740478

// const request = require('request');
// const HTMLParser = require('fast-html-parser');

// exports.nodeSimpleCrawlerFromJP = (req, res) => {
//     const httpRequest = (url = 'https://www.yahoo.co.jp/') => {
//         return new Promise((resolve, reject) => {
//             let proxyUrl = process.env.PROXYURL
//             let proxiedRequest = request.defaults({ 'proxy': proxyUrl });
//             // request(url, (error, response, body) => {
//             proxiedRequest.get(url, (error, response, body) => {
//                 resolve(body);
//             });
//         });
//     }

//     var ary = [];

//     httpRequest('https://gihyo.jp/')
//         .then(body => {
//             HTMLParser.parse(body)
//                 .querySelectorAll('a')
//                 .forEach(element => {
//                     ary.push(element.rawAttrs)
//                 })
//         })
//         .then(result => {
//             res.status(200).send(ary);
//         });
// };


// function parseXML(response) {
//     return response.text().then((stringContainingXMLSource) => {
//         const parser = new DOMParser();
//         return parser.parseFromString(stringContainingXMLSource, "text/xml");
//     });
// }

// let new XMLHttpRequest();
// foo.open('GET', 'https://ja.wikipedia.org/w/api.php?format=xml&action=query&prop=links&titles=%E3%82%A8%E3%83%9E%E3%83%BB%E3%83%AF%E3%83%88%E3%82%BD%E3%83%B3')
// foo.send(null)
// let bar = foo.responseXML
// bar.querySelectorAll('*')
// // => NodeList(16)[api, continue, query, pages, page, links, pl, pl, pl, pl, pl, pl, pl, pl, pl, pl]



// const csvStr = '1,2,3\n3,4,5\n7,8,9'
// const value = ["https://www.xvideos.com/video25717629/best-2017-01/0/aya_kawasaki", "https://www.xvideos.com/video25718969/best-2017-01/0/asian_schoolgirl", "https://www.xvideos.com/video26134121/best-2017-01/0/loped_mature_asian"].toString();

// const csv = require("csvtojson")
// csv({
//     noheader: true,
//     output: "csv"
// })
//     .fromString(value)
//     .then((jsonObj) => {
//         console.log(jsonObj) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
//     })


// for (let num of range(1, 3)) {
//     Array.from(
//         document.querySelectorAll(`#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dt > a > span,#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dd.txtNumber`))
//         .forEach(v => {
//             ary.push([v.textContent.replace(/,/, "").replace(/ 投稿/, "").split('\n')])
//         })
// }



// node wc.js|cat|sort|uniq|sort -n





// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// JSDOM.fromURL(`https://www.aozora.gr.jp/cards/001850/files/57353_57270.html`).then(dom => {
//     return dom.window.document.querySelectorAll('body > div.main_text')[0].textContent.split('');
// }).then(myCurrentArray => {
//     let counts = {};
//     for (let i = 0; i < myCurrentArray.length; i++) {
//         let key = myCurrentArray[i];
//         counts[key] = (counts[key]) ? counts[key] + 1 : 1;
//     }
//     return counts
// }).then( counts =>{
//     for(let key in counts) {
//         console.log(counts[key]+" "+key);
//     }
// }).catch( error => {
//     console.log(error);
// });



// let globalTunnel = require('global-tunnel-ng');


// globalTunnel.initialize({
//     host: '*************.com',
//     port: ****,
//     proxyAuth: 'id:pas'
// });
//requestをrequire
//ヘッダーを定義


//オプションを定義
// var options = {
//     // url: `https://www.aozora.gr.jp/cards/001850/files/57353_57270.html`    // headers: headers,
//     url: `https://www.yahoo.co.jp/`    // headers: headers,
//     // json: true,
//     // form: { "hoge": "fuga" }
// }
// npm config set https - proxy http://id:pass@host:port



// //リクエスト送信
// // const bar = options => {
// const new Promise(resolve =>{
//     request({ url: `https://www.yahoo.co.jp/` }, function (error, response, body) {
//         resolve(body);
//         // reject(error);
//     })
// })


// let new Promise(function (resolve, reject) {
//     resolve('foo');
// });

// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
// const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// bar.then(body => { console.log(body) });

// foo.then(body => {
// JSDOM.fromURL(`https://www.aozora.gr.jp/cards/001850/files/57353_57270.html`).then(dom => {
// console.log(
//     dom.window.document.querySelector(`body > div.main_text`).textContent
// )
//     // return dom;
//     // console.log(dom.window.document.querySelectorAll('#topicsfb > div.topicsindex > ul.emphasis > li:nth-child(1) > a').textContent);
//         // console.log(dom.window.document.querySelectorAll('body')[0].textContent );
//     // console.log(dom.window.document.querySelectorAll('*'));
// })
//     .then(myCurrentArray => {
//     let counts = {};
//     for (let i = 0; i < myCurrentArray.length; i++) {
//         let key = myCurrentArray[i];
//         counts[key] = (counts[key]) ? counts[key] + 1 : 1;
//     }
//     return counts
// }).then( counts =>{
//     for(let key in counts) {
//         console.log(counts[key]+" "+key);
//     }
// }).catch( error => {
//     console.log(error);
// });

// var request = require('request');
// const { JSDOM } = require('jsdom')
// const jsdom = require("jsdom");

// const resourceLoader = new jsdom.ResourceLoader({
//     proxy: "id:pass@host:port"
// });


// JSDOM.fromURL(`https://www.aozora.gr.jp/cards/001850/files/57353_57270.html`, { resources: resourceLoader }).then(dom => {
//     console.log(
//         dom.window.document.querySelector(`body > div.main_text`).textContent
//     )
//     // return dom;
//     // console.log(dom.window.document.querySelectorAll('#topicsfb > div.topicsindex > ul.emphasis > li:nth-child(1) > a').textContent);
//     // console.log(dom.window.document.querySelectorAll('body')[0].textContent );
//     // console.log(dom.window.document.querySelectorAll('*'));
// })


// request({ url: `https://www.yahoo.co.jp/` }, function (error, response, body) {
//         console.log(body)
//         // resolve(body);
//         // reject(error);
//     })



// const dom = new JSDOM(``, { resources: resourceLoader });





















// _.all(list, [iterator], [context])
// _.every のエイリアス。 list のすべての値が iterator 関数の真偽テストで true を返した場合に true を返す。 iterator が渡されない場合は要素の値自体で真偽 を 判 定 す る。(JavaScript は false、 undefined、 null、 NaN、 0、 - 0、 ''
//   の 場 合 に false と判定し、 その他はすべて true と判定する。)
// _.any(list, [iterator], [context])
// _.some のエイリアス。 list のいずれかの値が iterator 関数の真偽テストで true を返した場合に true を返す。 iterator が渡されない場合は要素の値自体で真偽 を判定する(JavaScript は false、 undefined、 null、 NaN、 0、 - 0、 空の文字列('') の場合に false と判定し、 その他はすべて true と判定する。)
// _.bind(function, object, [ * arguments])

// function を object にバインドした関数を返す。 返された関数は、 どのコン
// 説明付きの Underscore のソースコードは、 http: //underscorejs.org/docs/underscore.html で参照でき ます(説明は英語)。
//   テクストで呼ばれても this の値として object を参照した状態で実行する。
// _.bindAll(object, * methodNames)
// methodNames で指定されたメソッドを、 常に object にバインドし、 どこで実行し てもそれを this として実行するようにする。
// _.chain(obj)
// _.chain(obj).sortBy(...).first().value() のようにチェーン記法で連続処理を行 う。 チェーン内のそれぞれの関数は obj を処理した結果をラッパーオブジェク トに格納して、 チェーン上の次のメソッドに渡す。 チェーン内のメソッドには ラッパーオブジェクトが渡され、 メソッドの 1 つ目のパラメータ(list、 array、 object) は省略される。 push や reverse など、 ネイティブ Array のプロトタイプ メソッドもチェーン可能。 最後に value() をチェーンすることで、 ラッパーオブ ジェクトから obj の処理結果を抽出して返す。
// _.clone(object)
// オブジェクト object を「 浅くコピー」 したものを返す。 入れ子になっているオ ブジェクトや配列は参照がコピーされ、 それらの実体は複製されない。
// _.compose( * functions)
// functions に渡された複数の関数を合成して返す。 右側の関数から順に処理を行 い、 次の関数は右側の関数の戻り値を引数として実行する。
// _.contains(list, value)
// value が list 内に存在する場合に true を返す。 list が配列の場合は、 内部的に indexOf で処理する。
// _.countBy(list, iterator, [context])
// iterator 関数の戻り値をキーとして list の要素をカウントし、 それぞれの要素 とその出現回数をキー値として格納したオブジェクトを返す。 元の list は変更 されない。
// _.defaults(object, * defaults)
// defaults オブジェクトに定義されているプロパティが object に存在しない場合、 もしくは値が undefined の場合、 defaults で与えられたプロパティを挿入する。
// _.each(list, iterator, [context])
// list を走査して、 それぞれの要素を iterator 関数に与えて実行する。 context を
// 渡している場合には iterator は context にバインドされる。 list が配列の場合、 iterator には要素、 インデックス、 配列の 3 つの引数が渡される。 list がオブ ジェクトの場合には、 値、 キー、 オブジェクトの 3 つが渡される。
// _.every(list, [iterator], [context])
// list のすべての値が iterator の真偽テストで true を返した場合に true を返す。 iterator が渡されない場合は要素の値自体で真偽を判定する。(JavaScript は false、 undefined、 null、 NaN、 0、 - 0、 ''
//   の場合に false と判定し、 その他はすべ て true と判定する。)
// _.extend(destination, * sources)
// sources に渡されたオブジェクトのプロパティを destination オブジェクトに追加 する。 その際、 destination オブジェクト自身が変更対象となり、 キーが重複す る場合は新しい値で上書きされる。 sources に渡した順番に上書きするため、 最 後に渡されたオブジェクトが優先される。
// _.filter(list, iterator, [context])
// list の要素をそれぞれ iterator 関数に渡して実行し、 true が返されるすべての 要素を配列に格納して返す。 true が返される要素がない場合は空の配列を返す。
// _.find(list, iterator, [context])
// list の要素をそれぞれ iterator 関数に渡して実行し、 true が返される最初の要 素を返す。 true が返される要素がない場合は undefined を返す。
// _.findWhere(list, properties)
// list のそれぞれの値を走査して、 properties に渡されたオブジェクトのすべての プロパティのキーと値の両方を持っている最初のオブジェクトを返す。
// _.first(array, [n])
// 配列 array の最初の要素を返します。 数値 n を指定すると、 最初の n 個の要素を 返す。
// _.flatten(array, [shallow])
// 配列 array にネストされている配列があれば、 ネストを解いて平坦な新しい配列 に変換して返す。 shallow に true を渡すと、 1 レベルだけ平坦にする。
// _.groupBy(list, iterator, [context])
// iterator 関数の戻り値をキーとして、 list 内の対応する要素の配列をそのフィー
// _.has(object, key)
// object に key というキーが存在する場合に true を返す(プロトタイプで定義 されているキーには false を返す)。 object.hasOwnProperty(key) と同じだが、 hasOwnProperty 関数への安全な参照を使うことによって、 object から参照する hasOwnProperty メソッドがオーバーライドされても問題なく動作させるようにし ている。
// _.identity(value)
// value をそのまま返す。
// _.invert(object)
// object のプロパティのキーと値が入れ替えられたオブジェクトを返す。 元の object は変更されない。 格納されている値は一意で、 文字列に変換できるもので ある必要がある。
// _.isArguments(object)
// object が引数オブジェクト(arguments) の場合に true を返し、 それ以外の場 合に false を返す。
// _.isArray(object)
// object が配列である場合に true を返し、 それ以外の場合に false を返す。
// _.isBoolean(object)
// object が true もしくは false である場合に true を返し、 それ以外の場合に false を返す。
// _.isDate(object)
// object が Date オブジェクトである場合に true を返し、 それ以外の場合に false を返す。
// _.isEmpty(object)
// object に何も格納されていない場合に true を返し、 何かが格納されている場合 は false を返す。
// _.isEqual(object, other)
// object と other の 2 つのオブジェクトの深い比較を行う。
// _.isFinite(object)
// object が有限数である場合に true を返し、 それ以外の場合に false を返す。
// _.isFunction(object)
// object が関数である場合に true を返し、 それ以外の場合に false を返す。
// _.isNaN(object)
// object が NaN の場合に true を返し、 それ以外の場合に false を返す。 object が undefined の場合、 JavaScript ネイティブの isNaN 関数は true を返すが、 この関 数は false を返す。
// _.isNull(object)
// object が null の場合に true を返し、 それ以外の場合に false を返す。
// _.isNumber(object)
// object が数値型(NaN を含む) の場合に true を返し、 それ以外の場合に false を 返す。
// _.isObject(value)
// value が object 型である場合に true を返し、 それ以外の場合に false を返す。
// _.isRegExp(object)
// object が RegExp オブジェクトである場合に true を返し、 それ以外の場合に false を返す。
// _.isString(object)
// object が文字列型である場合に true を返し、 それ以外の場合に false を返す。
// _.isUndefined(value)
// value が undefined である場合に true を返し、 それ以外の場合に false を返す。
// _.keys(object)
// object 自身が持つすべてのプロパティ名を配列に格納して返します。
// _.last(array, [n])
// 配列 array の最後の要素を返す。 数値 n を渡した場合は、 最後の n 個の要素を配 列に格納して返す。 文字列でも動作する。 要素を持たない配列や、 配列・ 文字列 以外が array に渡された場合は undefined を返す。
// _.map(list, iterator, [context])
// list に格納されているそれぞれの要素を iterator 関数に渡して実行した結果を 格納した新たな配列を生成する。 list がオブジェクト型であっても、 戻り値は配 列となる。 JavaScript ネイティブの map 関数が存在する場合はネイティブ関数が 優先される。
// _.max(list, [iterator], [context])
// list 内で一番大きな値を返す。 iterator 関数が引数に渡されている場合は、 各要 素においてこの関数が返す値により値の順序付けが行われる。
// _.object(list, [values])[key, value] のような配列が格納された入れ子配列をlistに渡すか、 もしくは キーの配列を list に、 値の配列を values に渡すことによって、 それらをオブ ジェクトに変換する。
// _.omit(object, * keys)
// keys に与えられたプロパティを object から除去して新しいオブジェクトに格納 して返す。
// _.pairs(object)
// objectの各プロパティを[key, value] の配列に変換し、 それらを格納した配列を 返す。
// _.partial(function, [ * arguments])[ * arguments] に与えられた任意の数の引数を

// function に部分適用する。
// _.pick(object, * keys)
// keys に与えられたプロパティを object から抽出して新しいオブジェクトに格納 して返す。
// _.pluck(list, propertyName)
// _.map の一番一般的とおもわれるユースケースを実現するための便利関数。 オブ ジェクトの配列 list から、 propertyName のキーを持った値を抽出して、 配列に格 納して返す。
// _.range([start], stop, [step])
// 連続した数値を格納した配列を生成する。 start から stop までの間、 数値 step ごとの連続した数値を配列に格納して返す。 start と step が省略された場合はそ
// れぞれが 0 と 1 とみなされ、 stop の個数分の自然数を格納した配列を返す。
// _.reduce(list, iterator, [memo], [context])
// list に格納されているそれぞれの要素を左から順番に iterator 関数に渡して実 行し、 その結果を結合することで単一の値まで「 煮詰める」。 memo(累積変数) は最終的に返す値の初期状態で、 省略された場合は list の最初の値が初期状態 となる。 list が配列の場合、 memo と配列の要素が iterator に引数として渡され る。 list がオブジェクトの場合の引数は memo、 値、 キーの順となる。
// _.reduceRight(list, iterator, memo, [context]) _.reduce と同様の動作を右側から実行する。
// _.reject(list, iterator, [context])
// _.filter と逆の動作を行う。 つまり、 list の要素をそれぞれ iterator 関数に渡 して実行し、 true が返されないすべての要素を配列に格納して返す。 true が返さ れない要素がない場合は空の配列を返す。
// _.rest(array, [index])
// _.rest(array, [index\]) 配列 array から最初の要素を取り除いた配列を返す。 index を指定した場合は index とそれ以降の要素を含んだ配列を返す。
// _.size(list)
// list の要素の数を返す。 list が配列の場合は length、 オブジェクトの場合はキー の数を返す。
// _.some(list, [iterator], [context])
// list のいずれかの値が iterator の真偽テストで true を返した場合に true を返 す。 iterator が渡されない場合は要素の値自体で真偽を判定する(JavaScript は false、 undefined、 null、 NaN、 0、 - 0、 ''
//   の場合に false と判定し、 その他はすべ て true と判定する。)
// _.sortBy(list, iterator, [context])
// list の要素を iterator 関数の結果によってソートした結果のリストを返す。 元 の list は変更されない。
// _.tap(object, interceptor)
// object をターゲットオブジェクトとして interceptor 関数を呼び出し、 そして、 object をそのまま返す。 このメソッドの主な利用方法は _.chain によるメソッド
// _.take(array, [n])
// _.first のエイリアス。 配列 array の最初の要素を返す。 数値 n を指定すると、 最初の n 個の要素を返す。
// _.times(n, iterator, [context])
// iterator に渡された関数を n 回実行する。 それぞれの iterator 関数の実行時には インデックス番号が引数として渡される。 実行結果が配列に格納されて返される。
// _.toArray(list)
// イテレート可能なデータ型 list を Array 型に変換する。 arguments オブジェクト を Array 型に変換する際に便利。 list がオブジェクトの場合は、 それぞれの値が 配列の要素となる。
// _.uniq(array, [isSorted], [iterator])
// 配列 array から重複要素を取り除いた新しい配列を返す。 重複要素の判定は同値 演算子( === ) で行われる。 配列がすでにソートされていることが判明している 場合は、 isSorted に true を渡すことで、 動作の早いアルゴリズムを使用できる。 iterator に関数を渡しておくと、 これを使って _.map であらかじめ処理を行っ てから重複要素を取り除く。 isSorted の位置に関数が渡された場合は、 それが iterator として認識される。
// _.values(object)
// object のすべてのプロパティの値だけを配列に格納して返す。
// _.where(list, properties)
// list のそれぞれの値を走査して、 properties に渡されたオブジェクトのすべての プロパティのキーと値の両方を持っているオブジェクトをすべて抽出し、 その配 列を返す。
// _.without(array, [ * values])
// array から values に渡された値を除いた新たな配列を生成して返す。
// _.zip( * arrays)
// 渡されたそれぞれの配列の同じインデックスにある要素を新たな配列の要素 としてまとめて、 それぞれの配列を要素に持った配列を返す。 _.zip([1, 2, 3\], ['a', 'b', 'c'\]) の実行結果は[[1, 'a'\], [2, 'b'\], [3, 'c'\]\] となる。



let A, B, C, D; //, E, F, G, H, I, J, K, L, M, N, O, P, Q, S, T, U, V, W, X, Y, Z;
// A = R.pipe(
// R.all(R.match(/(\d)./g), )([3, 3, 3, 3]);
// B = R.any(R.equals(2))([1, 2]);

const multiplyXY = ary => {
  let [x, y] = ary;
  return x + y
}



A = R.pipe(
  R.take(50),
  R.reject(((n) => n % 2 === 1)), // except odd
  R.filter(((n) => n % 3 === 0)), // only 3 multiples
  R.toPairs(),
  R.sortBy(R.prop(0)),
  R.reverse(),
  R.pluck(1), //  R.pluck('', []) is alias R.map(R.prop())([])
  R.zip((R.times(R.identity, 10))),
  R.map(multiplyXY),
  R.groupBy(num => {
    return num < 10 ? 'A' :
      num < 20 ? 'B' :
      num < 30 ? 'C' :
      num < 40 ? 'D' : 'E';
  }),
  R.omit(['D', 'F']),
  R.toPairs(),
  R.sort(R.descend(R.prop(0))), //Z→A 10→1 is descend
  // R.sort(R.ascend(R.prop(0))), //A→Z 1→10 is ascend

  // R.reduce(R.subtract, 0, [1, 2, 3, 4]),
  // R.all(R.test(/\d/), R.__),
)(R.times(R.identity, 100));

// let multiplyXY = (x, y) => x * y;

// _.all(list, [iterator], [context])
// _.any(list, [iterator], [context])
// _.bind(function, object, [ * arguments])
// _.bindAll(object, * methodNames)
// _.chain(obj)
// _.clone(object)
// _.compose( * functions)
// _.contains(list, value)
// _.countBy(list, iterator, [context])
// _.defaults(object, * defaults)
// _.each(list, iterator, [context])
// _.every(list, [iterator], [context])
// _.extend(destination, * sources)
//  _.filter(list, iterator, [context])
// _.find(list, iterator, [context])
// _.findWhere(list, properties)
// _.first(array, [n])
// _.flatten(array, [shallow])
//  _.groupBy(list, iterator, [context])
// _.has(object, key)
//  _.identity(value)
// _.invert(object)
// _.keys(object)
// _.last(array, [n])
// _.map(list, iterator, [context])
// _.max(list, [iterator], [context])
// _.object(list, [values])
//  _.omit(object, * keys)
//  _.pairs(object)
// _.partial(function, [ * arguments])
// _.pick(object, * keys)
//  _.pluck(list, propertyName)
//  _.range([start], stop, [step])
// _.reduce(list, iterator, [memo], [context])
// _.reduceRight(list, iterator, memo, [context])
//  _.reject(list, iterator, [context])
// _.rest(array, [index])
// _.size(list)
// _.some(list, [iterator], [context])
//  _.sortBy(list, iterator, [context])
// _.tap(object, interceptor)
//  _.take(array, [n])
//  _.times(n, iterator, [context])
// _.toArray(list)
// _.uniq(array, [isSorted], [iterator])
// _.values(object)
// _.where(list, properties)
// _.without(array, [ * values])
//  _.zip( * arrays)





// _.isArguments(object)
// _.isArray(object)
// _.isBoolean(object)
// _.isDate(object)
// _.isEmpty(object)
// _.isEqual(object, other)
// _.isFinite(object)
// _.isFunction(object)
// _.isNaN(object)
// _.isNull(object)
// _.isNumber(object)
// _.isObject(value)
// _.isRegExp(object)
// _.isString(object)
// _.isUndefined(value)

console.dir(A);
console.dir(B);
console.dir(C);
console.dir(D);
console.dir(E);
console.dir(F);
console.dir(G);
console.dir(H);
console.dir(I);
console.dir(J);
console.dir(K);
console.dir(L);
console.dir(M);
console.dir(N);
console.dir(O);
console.dir(P);
console.dir(Q);
console.dir(R);
console.dir(S);
console.dir(T);
console.dir(U);
console.dir(V);
console.dir(W);
console.dir(X);
console.dir(Y);
console.dir(Z);