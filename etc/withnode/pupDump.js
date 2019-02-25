const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const DIRPATH = '/Users/yanakataro/Desktop/javascript/etc/withnode';
const FILENAME = 'docBody.html';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(
        'https://www.youtube.com/channel/UCX1xppLvuj03ubLio8jslyA/videos'
        // 'https://ja.wikipedia.org/wiki/%E9%9B%86%E8%8B%B1%E7%A4%BE%E3%81%AE%E6%BC%AB%E7%94%BB%E3%83%AC%E3%83%BC%E3%83%99%E3%83%AB'
    );
    await page._client.send(
        'Input.synthesizeScrollGesture',
        {
            x: 0,
            y: 0,
            xDistance: 0,
            yDistance: -5000,
            repeatCount: 1,
            repeatDelayMs: 200

        }
    );

    // await page.setContent((await response.buffer()).toString('utf8'));
    
    let datas = await page.evaluate(() => {
        // return document.getElementsByTagName('body')[0].innerHTML;
        // return document.getElementsByTagName('html')[0].innerHTML;
        return document.documentElement.outerHTML;
        // return document.getElementsByTagName('html')[1].innerHTML;
        // return document.getElementsByTagName('*')[].innerHTML;
        // await page.setContent((await response.buffer()).toString('utf8'));

    });

        // console.log(await page.$eval('div.text > a[href]', el => el.innerText) );


    await fs.writeFile(path.join(DIRPATH, FILENAME), datas, (error) => {
        console.log(error);
        if (error) {
            console.log('ファイル書き込みエラーです.');
        } else {
            console.log('ファイルに書き込みました.');
        }
    });

    // const ary1 = await page.evaluate(() => {
    //     ary1 = []
    //     for (let i = 0; i < document.querySelectorAll('a#video-title').length; i++) {
    //         ary1.push([
    //             "'" + document.querySelectorAll('a#video-title').item(i).getAttribute("href").replace(/\/watch\?v=/, "") + "'",
    //             "'" + document.querySelectorAll('a#video-title').item(i).getAttribute("aria-label").split("作成者")[0] + "'"
    //         ])
    //     }
    //     return ary1
    // });

    // const ary2 = await page.evaluate(() => {
    //     ary2 = []
    //     for (let i = 0; i < document.querySelectorAll('#metadata-container').length; i++) {
    //         let elems = document.querySelectorAll('#metadata-container').item(i).textContent.trim().split("\n")
    //         elems = elems[elems.length - 1].split("回視聴"); elems = elems.map(v => v.trim());
    //         ary2.push([
    //             "'" + elems[0] + "'",
    //             "'" + elems[1] + "'"
    //         ])
    //     }
    //     return ary2
    // });

    // const datas = await page.evaluate(() => {
    //     const zip = xs => ys =>
    //         (xs.length < ys.length) ? xs.map((e, i) => [e, ys[i]])
    //             : ys.map((e, i) => [xs[i], e]);
    //     data = zip(ary1)(ary2);
    //     return "var data = [" + data + "]"
    // });

    // await fs.writeFile(path.join(DIRPATH, FILENAME), datas, (error) => {
    //     console.log(error);
    //     if (error) {
    //         console.log('ファイル書き込みエラーです.');
    //     } else {
    //         console.log('ファイルに書き込みました.');
    //     }
    // });

    await browser.close();
})();