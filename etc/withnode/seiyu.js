const wgxpath = require('./wgxpath.install-node.js');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// var jsdom = require("jsdom/lib/api.js");
require("jsdom").env({
    url: 'https://www.w3.org/TR/xpath/',
    done: (err, window) => {
        wgxpath.install(window, true);
        console.log(window.document.evaluate('.//title', window.document.documentElement,
            null, window.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.textContent);
    }
});




function* range(from, to) { while (from <= to) yield from++ };
document.xpath = (expression) => {
    ret = document.evaluate(expression, document, null, XPathResult.ANY_TYPE, null);
    switch (ret.resultType) {
        case 1: return ret.numberValue;
        case 2: return ret.stringValue;
        case 3: return ret.booleanValue;
        case 4:
        case 5:
            a = [];
            while (e = ret.iterateNext()) { a.push(e); };
            return a;
        default: return ret;
    }
}

let ary = []
for (let num of range(1, 50)) {
    ary.push([
        document.xpath(`//*[@id="item-list"]/div[${num}]/div[3]/div/div[2]/div/div[1]/div/div/p/text()`)[0].data
        ,
        document.xpath(`//*[@id="item-list"]/div[${num}]/div[3]/div/div[1]/p/a/span/text()`)[0].data.replace(/\n/, "").trim()
    ])
}

let uniqLink = [];
Array.from(document.querySelectorAll('a[href]')).filter(v => { return v.href.match(/200/) }).forEach(v => { uniqLink.push(v.href.replace(/\&sort=1/, "")) })
let uniqLink2 = [...(new Set(uniqLink))];

if (Array.from(document.querySelectorAll('#container > div.lyt-contents > div.lyt-side-wrap > div.lyt-side-pattern01-main > div.paging.mt0 > p.paging-next-page > a'))[0] == undefined) { console.log("no tag") }