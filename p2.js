/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
// https://qiita.com/howdy39/items/2f355fea8340a35aa5da

exports.helloWorld = (req, res) => {
    const puppeteer = require('puppeteer');

    /**
     * メインロジック.
     */
    (async () => {
        // Puppeteerの起動.
        //    const browser = await puppeteer.launch({
        //      headless: true, // Headlessモードで起動するかどうか.
        //      slowMo: 50, // 指定のミリ秒スローモーションで実行する.
        //    });
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

        // 新しい空のページを開く.
        const page = await browser.newPage();

        // view portの設定.
        await page.setViewport({
            width: 1200,
            height: 800,
        });

        // 秀和システムのページへ遷移.
        await page.goto('http://www.shuwasystem.co.jp/');

        // id="newbook" の要素の表示を待つ.
        await page.waitForSelector('#newbook');

        // 要素の取得.
        const newBook = await page.evaluate((selector) => {
            // evaluateメソッドに渡す第1引数のfunctionは、第2引数として渡したパラメータをselectorに引き継いでブラウザ内で実行する。
            return document.querySelector(selector).innerHTML;
        }, '#newbook');

        // console.log(newBook);

        res.set('Content-Type', 'application/json');
        res.send(newBook);


        // ブラウザの終了.
        await browser.close();
    })();

};