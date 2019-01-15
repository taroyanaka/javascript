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

const req = (url = 'https://www.yahoo.co.jp/') => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            resolve(body);
        });
    });
}

req('https://qiita.com/murase/items/908cf31b6776448a5b1d')
    .then(body => (
        HTMLParser.parse(body)
            .querySelectorAll('a')
            .forEach(element => {
                console.log(element.rawAttrs)
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











const request = require('request');
const HTMLParser = require('fast-html-parser');
var ary = [];

const httpRequest = (url = 'https://www.yahoo.co.jp/') => {
    return new Promise((resolve, reject) => {
        let proxyUrl = process.env.PROXYURL
        let proxiedRequest = request.defaults({ 'proxy': proxyUrl });
        // request(url, (error, response, body) => {
        proxiedRequest.get(url, (error, response, body) => {
            resolve(body);
        });
    });
}

httpRequest('https://gihyo.jp/')
    .then(body => {
        HTMLParser.parse(body)
            .querySelectorAll('a')
            .forEach(element => {
                // console.log(element.rawAttrs)
                ary.push(element.rawAttrs)
            })
        // return ary;
    })
    .then(result => {
        console.log(ary)
    });