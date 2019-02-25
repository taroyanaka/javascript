const fileNameAry = ["docbody.html"]

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const R = require("ramda");
const fs = require("fs");


let result = [];
const scrape = (fileName) =>{
    return new Promise(resolve => {
        JSDOM.fromFile(`./${fileName}`).then(dom => {
            resolve(
                Array.from(dom.window.document.querySelectorAll('a'))[0].textContent
                // Array.from(dom.window.document.querySelectorAll("a"))[10].textContent
            )
        })
    })
}


(async () => {
  let all = [];
  for(let fileName of fileNameAry) {
   await all.push(await scrape(fileName))
  }
  await console.log(all);
//   let ary = await R.flatten(all).filter(V=>/図書館/.test(V))//.filter(V=>/!template|!Template|!プロジェクト|!一覧/.test(V));
//   let txt = await ary.join("','");
//   await require('fs').writeFileSync('./hogehogehoge.txt', txt);
})();

