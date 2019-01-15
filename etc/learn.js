const fetch = require("node-fetch");
const simpleCrawler = (url = "https://www.yahoo.co.jp/") => {
    let target = [];
    fetch(url)
        .then(res => res.text())
        .then(text => new DOMParser().parseFromString(text, "text/html"))
        .then(doc => {
            doc.querySelectorAll('a')
                .forEach(aElm => { target.push([aElm.innerText, aElm.href]) })
        });
        return target
}

simpleCrawler();