const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const DIRPATH = '/Users/yanakataro/Desktop/javascript/etc/withnode/YT/data';

// let ids = ['UC3LAEwEhZ0Yn3l4-WatZo2Q','UCaminwG9MTO4sLYeC3s6udA']
// let ids = ['UC3LAEwEhZ0Yn3l4-WatZo2Q']//,'UCaminwG9MTO4sLYeC3s6udA']
let ids = `UC8XBizOfQBLUrUcv_9DHCog
UCNqbJ7zpxAxC2BxPx-xmx6g
UCTFT5NbDl0Fa_fE9Cz_yOAA
UCXqoK3nPrsCnPIxyavw0jOw`.split("\n")
// UCoHvCDsrfF4I4-dGuyrH-3Q
// UCJxYlnZBZc7Ol4FZB9kwl4g
// UCrZUphkUSr0akC0oGui4QOA
// UC8i702PRk-GvL1bJu5_6dAQ
// UCsN0m1lwpEDOcMy4SoLI8Pw
// UC7RMi15o0aQacJhxOc6LLmw

for(let id of ids){
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
            repeatCount: 100,
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

    await require('fs').writeFileSync(`${DIRPATH}/${id}.js`, `var ${id} = [${datas}]`);

    await browser.close();
})();

}