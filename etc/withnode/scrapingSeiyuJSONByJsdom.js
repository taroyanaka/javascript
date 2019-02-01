// // query sample is
// // https://area-region-bar-baz.cloudfunctions.net/scrapingQiitaTagAndFeedJSONByJsdom?tag=Python

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// const R = require("ramda");

// // exports.scrapingQiitaTagAndFeedJSONByJsdom = (req, res) => {
// // res.header('Access-Control-Allow-Origin', "*");
// // res.header('Access-Control-Allow-Origin', "http://localhost:5500");
// // res.header('Access-Control-Allow-Origin', "https://taroyanaka.github.io");
// // res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

// // let page = '1';
// // const tag = req.query['tag'].toString();

// const resourceLoader = new jsdom.ResourceLoader({
//     proxy: "http://ID:PASS@HOST:PORT"
// });

// const paging = (page) => {
//     return new Promise((resolve, reject) => {
//         // JSDOM.fromURL(`https://sm.rakuten.co.jp/search/200069?l-id=_leftnavi_200069&sort=2&page=${(page + 1)}`).then(dom => {
//         // JSDOM.fromURL(`https://sm.rakuten.co.jp/search/200025?l-id=_leftnavi_200025&sort=2&page=${(page)}`, { resources: resourceLoader } ).then(dom => {
//         JSDOM.fromFile(`choco${page}.html`).then(dom => {
//             // result return [[title, URL][title, URL][title, URL]...]
//             let name = [];
//             let price = [];
//             dom.window.document.querySelectorAll('.product-item-info-name').forEach(v => { name.push(v.textContent.trim()) });
//             dom.window.document.querySelectorAll('div.product-item-info-price-area > div > div > p').forEach(v => { price.push(v.textContent.trim()) });
//             // dom.window.document.querySelectorAll('p.paging-next-page > a')[0].textContent.trim() == "次のページ"
//             // if (dom.window.document.querySelectorAll('p.paging-next-page > a')[0].textContent.trim() !== "次のページ") { exit }
//             // Array.from(document.querySelectorAll('p.paging-next-page > a'))
//             // if (dom.window.document.querySelectorAll('p.paging-next-page > a')[0] !== undefined) { return };
//             // if (dom.window.document.querySelectorAll('.product-item-info-name')[0] == undefined) { console.log("hoge") }
//             // return console.dir(R.zip(name, price));
//             // if(name){
//             // resolve(R.zip(name, price))
//             // return R.zip(name, price)
//             // } else {
//             // reject("ERROR")
//             // }

//             // })
//             // })
//             // if (result[0] !== undefined) { return console.dir(result) };
//             return R.zip(name, price)
//         }).then(result => {
//             return resolve(result);
//             // res.send(JSON.stringify(result))
//             // console.log(JSON.stringify(result))
//             // if (result[0] !== null) { return result }
//             // return console.dir(result);
//             // }).then(result => {
//             //     if (result[0] !== undefined) { return console.dir(result) };
//         }).catch(error => {
//             // return error
//             return
//         });
//     })

//     // for (let i = 1; i <= 10; i++) {
//     //     paging(i);
//     // }

//     function* range(start, end) {
//         for (let i = start; i <= end; i++) {
//             yield i;
//         }
//     }

//     // for (let page of range(1, 2)) {
//     // paging(page).then(res => { console.log(res) })
//     // }
//     (async () => {
//         for (let page of range(1, 10)) {
//             let resulut = await paging(page);
//             // let resulut = paging(page);
//             await console.log(resulut);
//             // console.log(resulut);
//             // await paging(1);
//             // await paging(2);
//         }
//     })();
// // R.forEach(paging, R.times(R.identity, 5));

// // for (let i = 0; i <= 10; i++) { if (dom.window.document.querySelectorAll('p.paging-next-page > a')[0].textContent.trim() == "次のページ"){break}console.log(i) }






const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const R = require("ramda");

const paging = (page) => {
    return new Promise((resolve, reject) => {
        JSDOM.fromURL(`https://sm.rakuten.co.jp/search/200069?l-id=_leftnavi_200069&sort=2&page=${page}`).then(dom => {
        // JSDOM.fromFile(`choco${page}.html`).then(dom => {
            let name = [];
            let price = [];
            dom.window.document.querySelectorAll('.product-item-info-name').forEach(v => { name.push(v.textContent.trim()) });
            dom.window.document.querySelectorAll('div.product-item-info-price-area > div > div > p').forEach(v => { price.push(v.textContent.trim()) });
            return R.zip(name, price)
        }).then(result => {
            if (result.length != 0) {
                return resolve(console.log(result))
            } else {
                process.on("exit", function () {
                    process.exit(1);
                });
                console.log("ここを通るの1回だけでちゃんとイテレーションが中止できているか確認")
            }
        }).catch(error => {
            return
        });
    })
}


function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

(async () => {
    for (let page of range(1, 10)) {
        await paging(page);
    }
})();