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



const request = require('request');
//const HTMLParser = require('fast-html-parser');
const HTMLParser = require('htmlparser2');
request('https://www.yahoo.co.jp/', (error, response, body) => { 'body:', 
        HTMLParser.parse(body)
        .querySelectorAll('a')
//        .forEach(aElm => { console.log(aElm.textContent) })
});
[1, 2, 3].forEach(v => { console.log(v) });


const request = require('request'); let foo = [];
const HTMLParser = require('fast-html-parser');
request('https://www.yahoo.co.jp/', (error, response, body) => {
    'body:',
    foo = HTMLParser.parse(body)
        .querySelectorAll('a')
});

Array.from(foo).forEach(v => { console.log(v) });

// const bar = Array.from(foo);
// bar.forEach(v => { console.log(v) });






const request = require('request');
const HTMLParser = require('fast-html-parser');

const req = () => {
    return new Promise((resolve, reject) => {
        request('https://www.yahoo.co.jp/', (error, response, body) => {
            resolve(HTMLParser.parse(body).querySelectorAll('a'));
            }
        );
    });
}

req()
.then(res =>(
    res.forEach(v => {
        console.log(v.rawAttrs)
    })
));










const crawler = async () => {
    return new Promise(resolve => {
        let target = [];

        resolve(target);
    })
    // return target;
}

crawler().then(res => (console.log(res)));