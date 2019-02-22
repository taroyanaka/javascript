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

function hoge(foo = "bar") {
    return foo
}

// VS codeのAdd jsdoc commentsというpluginでJSDocを生成
// const namedArgumentFunc = ... =>{...} の形式で関数定義するとAdd jsdoc comments不可(対応してほしい...)
/**
 * @param  {string} {foo='bar'
 * @param  {string} baz=200
 * @param  {boolean} qux=false}={}
 * @returns {string} `a=${foo}, b=${baz}, c=${qux}`
 * @example
     *
     namedArgumentFunc({
         qux: false,
         foo: 'content.html',
     });
 * // returns {string} `a=content.html b=200 c=false`
 */
function namedArgumentFunc({
    foo = 'bar',
    baz = 200,
    qux = false
} = {}) {
    return `a=${foo}, b=${baz}, c=${qux}`;
}






namedArgumentFunc({
    qux: false,
    foo: 'content.html',
    // 引数の順序関係無し&必要な引数だけを指定できる
});
// 関数定義引数末尾に={}を付けたので引数無しで関数を実行できる
// namedArgumentFunc();



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