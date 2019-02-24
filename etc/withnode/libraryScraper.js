const fileNameAry = [
"三重県の図書館一覧",
"京都府の図書館一覧",
"佐賀県の図書館一覧",
"兵庫県の図書館一覧",
"北海道の図書館一覧",
"千葉県の図書館一覧",
"埼玉県の図書館一覧",
"大分県の図書館一覧",
"大阪府の図書館一覧",
"奈良県の図書館一覧",
"宮城県の図書館一覧",
"宮崎県の図書館一覧",
"富山県の図書館一覧",
"山口県の図書館一覧",
"山形県の図書館一覧",
"山梨県の図書館一覧",
"岐阜県の図書館一覧",
"岡山県の図書館一覧",
"岩手県の図書館一覧",
"島根県の図書館一覧",
"広島県の図書館一覧",
"徳島県の図書館一覧",
"愛媛県の図書館一覧",
"愛知県の図書館一覧",
"新潟県の図書館一覧",
"東京都の図書館一覧",
"栃木県の図書館一覧",
"沖縄県の図書館一覧",
"滋賀県の図書館一覧",
"熊本県の図書館一覧",
"石川県の図書館一覧",
"福井県の図書館一覧",
"福岡県の図書館一覧",
"福島県の図書館一覧",
"秋田県の図書館一覧",
"群馬県の図書館一覧",
"茨城県の図書館一覧",
"長崎県の図書館一覧",
"長野県の図書館一覧",
"青森県の図書館一覧",
"静岡県の図書館一覧",
"香川県の図書館一覧",
"高知県の図書館一覧",
"鳥取県の図書館一覧",
"和歌山県の図書館一覧",
"神奈川県の図書館一覧",
"鹿児島県の図書館一覧"
]

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const R = require("ramda");
const fs = require("fs");


let result = [];
const scrape = (fileName) =>{
    return new Promise(resolve => {
        JSDOM.fromFile(`./ja.wikipedia.org/wiki/${fileName}`).then(dom => {
            resolve(
                Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
            )
        })
    })
}

    // (async () => {
    //     let all = []
    //     await fileNameAry.map(fileName=>{
    //         all.push(await scrape(fileName));
    //     })
    //     // let all = await scrape(fileName);
    //     // for(hoge of all){console.log(hoge)}
    //     // let hoge = await R.flatten(all);
    //     // console.dir(hoge);
    //     console.dir(all);
    // })();

(async () => {
  let all = [];
  for(let fileName of fileNameAry) {
   await all.push(await scrape(fileName))
  }
  let ary = await R.flatten(all).filter(V=>/図書館/.test(V))//.filter(V=>/!template|!Template|!プロジェクト|!一覧/.test(V));
  let txt = await ary.join("','");
//   console.log(txt);
//   await fs.writeFileSync('hogehogehoge.txt', txt);
  await require('fs').writeFileSync('./hogehogehoge.txt', txt);
//   await console.log( R.flatten(all).filter(V=>/図書館/.test(V)) );
})();

// [1,2,3].join("")
// async foo = (V) => {
//     let hoge = await one(V);
//     all.push(hoge);
// })
// (async () => {
//     fileNameAry.map(V=>{
//         foo(V);
//     })
// })();
        // return result;
    // })
    // console.log(hoge);
    // }
    
// }

// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });

// (async () => {
//     let hoge = await one();
//     await two();
// })();

    // for(let name of fileNameAry){
    //     // let result=[];
    //     // for(let i;i<fileNameAry.length;i++){
    //         JSDOM.fromFile(`./ja.wikipedia.org/wiki/${name}`).then(dom => {
    //             console.log(
    //             // result.push(
    //                 Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
    //             // )
    //             )
    //         })
    //     }
    // })


// const one = () =>{
//     return new Promise(resolve => {
//     // for(let name of fileNameAry){
//         let result=[];
//         for(let i;i<fileNameAry.length;i++){
//             JSDOM.fromFile(`./ja.wikipedia.org/wiki/${name}`).then(dom => {
//                 result.push(
//                     Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
//                 )
//             })
//         if(i===fileNameAry.length-1){resolve(result)}
//         }
//     })
// }
// const two = () =>{
//     console.log(result);
// }
// (async () => {
//     let hoge = await one();
//     await two();
// })();
// const fs = require('fs');

// const scrape = () => {
    // let result=[];
    // return new Promise((resolve, reject) => {
        // for(let name of fileNameAry){
    // hoge = await one();

    // await (()=>{
        // console.log(hoge)
    // })
// })();
// const fs = require('fs');

// const scrape = () => {
    // let result=[];
    // return new Promise((resolve, reject) => {
        // for(let name of fileNameAry){

        //     JSDOM.fromFile(`./ja.wikipedia.org/wiki/${name}`).then(dom => {
        //             // result.push(
        //                 // Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
        //             console.log(
        //                 Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
        //                 );
        //             // )
        //                 // console.log(result);

        //     })
        // }
    // resolve(result);
    // })
// }
// scrape();
// scrape().then(res => {
//     return res;
// }).then(result => {
//     console.log(result)
// });

// for(let name of fileNameAry){
//     fs.readFileSync(`./ja.wikipedia.org/wiki/${name}`, 'utf-8', (err, data) => {
//     // 例外処理
//     if (err) { throw err; }

//     msg = data;
//     console.log(msg);
//     });
// }

// function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield i;
//     }
// }
// console.log(input);
// for (let page of range(1, 3)) {
    // JSDOM.fromFile(`https://teratail.com/tags?page=${page}`).then(dom => {
//     JSDOM.fromFile(`./ja.wikipedia.org/wiki/三重県の図書館一覧`).then(dom => {
//     // JSDOM.fromFile(`${input}`).then(dom => {
//         let result = [];
//         // for (let num of range(1, 40)) {
//             result.push(
//                 // [dom.window.document.querySelector(`#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dt > a > span`).textContent
//                     // ,
//                 // dom.window.document.querySelector(`#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dd.txtNumber`).textContent.replace(/,/, "").replace(/ 投稿/, "")]
//                 // dom.window.
//                 Array.from(dom.window.document.querySelectorAll("li > a")).filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
//                 // dom.window.document.querySelectorAll("li > a").filter(V=>/図書館/.test(V.title)).map(V=>V.textContent)
//             )
//         // }
//         return result;
//     })
//         .then(result => {
//             console.log(result)
//         });
// // }
