// cat library.txt |xargs -n1 wget

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


(async () => {
  let all = [];
  for(let fileName of fileNameAry) {
   await all.push(await scrape(fileName))
  }
  let ary = await R.flatten(all).filter(V=>/図書館/.test(V))//.filter(V=>/!template|!Template|!プロジェクト|!一覧/.test(V));
  let txt = await ary.join("','");
  await require('fs').writeFileSync('./result.txt', txt);
})();

// cat result.txt|sort|uniq > result2.txt
// cat result2.txt|while read LINE;do wget "https://www.geocoding.jp/api/?v=1.1&q="$LINE;sleep 10;done;
// ls www.geocoding.jp/api/