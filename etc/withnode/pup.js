const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const DIRPATH = '/Users/yanakataro/Desktop/javascript/etc/withnode/YT/data';
// const FILENAME = 'data.js';
let id = 'UC3LAEwEhZ0Yn3l4-WatZo2Q';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(
        `https://www.youtube.com/channel/${id}/videos`
    );
    await page._client.send(
        'Input.synthesizeScrollGesture',
        {
            x: 0,
            y: 0,
            xDistance: 0,
            yDistance: -5000,
            repeatCount: 2,
            repeatDelayMs: 200

        }
    );

    const ary1 = await page.evaluate(() => {
        ary1 = []
        for (let i = 0; i < document.querySelectorAll('a#video-title').length; i++) {
            ary1.push([
                "'" + document.querySelectorAll('a#video-title').item(i).getAttribute("href").replace(/\/watch\?v=/, "") + "'",
                "'" + document.querySelectorAll('a#video-title').item(i).getAttribute("aria-label").split("作成者")[0] + "'"
            ])
        }
        return ary1
    });

    const ary2 = await page.evaluate(() => {
        ary2 = []
        for (let i = 0; i < document.querySelectorAll('#metadata-container').length; i++) {
            let elems = document.querySelectorAll('#metadata-container').item(i).textContent.trim().split("\n")
            elems = elems[elems.length - 1].split("回視聴"); elems = elems.map(v => v.trim());
            ary2.push([
                "'" + elems[0] + "'",
                "'" + elems[1] + "'"
            ])
        }
        return ary2
    });

    const datas = await page.evaluate(() => {
        const zip = xs => ys =>
            (xs.length < ys.length) ? xs.map((e, i) => [e, ys[i]])
                : ys.map((e, i) => [xs[i], e]);
        data = zip(ary1)(ary2);
        // return "var data = [" + data + "]"
        return data;
    });

    await require('fs').writeFileSync(`./${id}.js`, `var ${id} = [${datas}]`);

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