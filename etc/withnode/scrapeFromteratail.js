// % node scrapeFromteratail.js|pbcopy

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let page of range(1, 3)) {
    JSDOM.fromURL(`https://teratail.com/tags?page=${page}`).then(dom => {
        let result = [];
        for (let num of range(1, 40)) {
            result.push(
                [dom.window.document.querySelector(`#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dt > a > span`).textContent
                    ,
                dom.window.document.querySelector(`#container > section.boxTagList.data-tag.clearFix > ul > li:nth-child(${num}) > dl > dd.txtNumber`).textContent.replace(/,/, "").replace(/ 投稿/, "")]
            )
        }
        return result;
    })
        .then(result => {
            console.log(result)
        });
}
