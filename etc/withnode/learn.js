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



const request = require('request');
//const HTMLParser = require('fast-html-parser');
const HTMLParser = require('htmlparser2');
request('https://www.yahoo.co.jp/', (error, response, body) => { 'body:', 
        HTMLParser.parse(body)
        .querySelectorAll('a')
//        .forEach(aElm => { console.log(aElm.textContent) })
});
[1, 2, 3].forEach(v => { console.log(v) });


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



const csvStr = '1,2,3\n3,4,5\n7,8,9'
const value = ["https://www.xvideos.com/video25717629/best-2017-01/0/aya_kawasaki", "https://www.xvideos.com/video25718969/best-2017-01/0/asian_schoolgirl", "https://www.xvideos.com/video26134121/best-2017-01/0/loped_mature_asian"].toString();

const csv = require("csvtojson")
csv({
    noheader: true,
    output: "csv"
})
    .fromString(value)
    .then((jsonObj) => {
        console.log(jsonObj) // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
    })


