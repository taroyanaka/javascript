const R = require('ramda');

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


// var foo = 123;
// console.log(foo);

// const sample = () => {
//   foo = 100;
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







// ramda.js samples
let foo;
foo = R.sortBy(R.prop(1))([
  [10, 1],
  [5, 2],
  [2.5, 3]
]);
console.dir(foo);
foo = R.pipe(R.sortBy(R.prop(1)), R.reverse)([
  [10, 1],
  [5, 2],
  [2.5, 3]
]);
console.dir(foo);

foo = R.sortBy(R.prop('name'))([{
  name: "Taro",
  age: 28
}, {
  name: "Blue",
  age: 30
}, {
  name: "Aka",
  age: 24
}]);
console.dir(foo);
foo = R.sortBy(R.prop('age'))([{
  name: "Taro",
  age: 28
}, {
  name: "Blue",
  age: 30
}, {
  name: "Aka",
  age: 24
}]);
console.dir(foo);

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
foo = R.groupBy(R.prop('genre'))(albums);
console.dir(foo);
foo = R.countBy(R.prop('genre'))(albums);
console.dir(foo);
var nums = [
  [1, 2],
  [3, 4],
  [5, 6]
];
foo = R.reduce(R.concat, [], [
  [1, 2],
  [3, 4],
  [5, 6]
]);
console.dir(foo);

foo = R.pluck(0)([
  [1, 2],
  [3, 4]
]);
console.dir(foo);
foo = R.pluck('title')(albums);
console.dir(foo);
foo = R.keys(dub);
console.dir(foo);
foo = R.values(dub);
console.dir(foo);
foo = R.map([
  ['name', 'number'],
  ['Taro', 32]
]);
console.dir(foo);
foo = R.invert({
  first: 'alice',
  second: 'jake',
  third: 'alice',
});
console.dir(foo);

const pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
});
console.dir(foo);

pred({
  a: 'foo',
  b: 'xxx',
  x: 11,
  y: 19
});
console.dir(foo) //=> true;
//pred({a: 'xxx', b: 'xxx', x: 11, y: 19});console.dir(foo) //=> false;
//pred({a: 'foo', b: 'bar', x: 11, y: 19});console.dir(foo) //=> false;
//pred({a: 'foo', b: 'xxx', x: 10, y: 19});console.dir(foo) //=> false;
//pred({a: 'foo', b: 'xxx', x: 11, y: 20});console.dir(foo) //=> false;
//R.zipObj()

//R.reduce(R.concat, [], [[1, 2], [3, 4], [5, 6]]);console.dir(foo);


let obj = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
}
foo = R.keys(R.invert(obj))

foo = R.omit(['a', 'c'], {
  a: 1,
  b: 2,
  c: 3
})
//R.invertObj([1,2])

const isNotNil = R.complement(R.isNil);
console.dir(foo);
foo = R.isNil(null);
console.dir(foo) //=> true;
isNotNil(null);
console.dir(foo) //=> false;


foo = R.where({
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
console.dir(foo);
foo = R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({
  a: 1
});
console.dir(foo);


foo = R.assoc('a', 3, {
  a: 1,
  b: 2
});
console.dir(foo) //=> {a: 1, b: 2, c: 3};
foo = R.pick(['a', 'b', 'e', 'f'], {
  a: 1,
  b: 2,
  c: 3,
  d: 4
});
console.dir(foo) //=> {"a": 1, "b": 2};
foo = R.pluck('a', {
  a: 1,
  b: 2,
  c: 3,
  d: 4
});
console.dir(foo) //=> {"a": 1, "b": 2};
foo = R.pluck('val', {
  a: {
    val: 3
  },
  b: {
    val: 5
  }
});
console.dir(foo);
foo = R.pluck('name', [{
  name: 'fred',
  age: 29
}, {
  name: 'wilma',
  age: 27
}]);
console.dir(foo);
// alias R.pluck('',[]) is R.map(R.prop())([])
foo = R.map(R.prop('name'))([{
  name: 'fred',
  age: 29,
  sex: 'male',
}, {
  name: 'wilma',
  age: 27,
  sex: 'female',
}]);
console.dir(foo);


foo = R.map(((x) => x * 2))([1, 2]);
console.dir(foo);


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
console.dir(foo);

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


// foo = "map with reduce and map and map".split(" ").map(V => {
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


// const request = require('request'); let foo = [];
// const HTMLParser = require('fast-html-parser');
// request('https://www.yahoo.co.jp/', (error, response, body) => {
//     'body:',
//     foo = HTMLParser.parse(body)
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

// function hoge(foo = "bar") {
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
//     foo = 'bar',
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

// const foo = (bar) => {
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
//  *     foo = 'bar',
//  *     baz = 200,
//  *     qux = false
//  * }={}]
//  * @returns
//  */
// function namedArgumentFunc2({
//     foo = 'bar',
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

// let foo = new XMLHttpRequest();
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
// const foo = new Promise(resolve =>{
//     request({ url: `https://www.yahoo.co.jp/` }, function (error, response, body) {
//         resolve(body);
//         // reject(error);
//     })
// })


// let foo = new Promise(function (resolve, reject) {
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