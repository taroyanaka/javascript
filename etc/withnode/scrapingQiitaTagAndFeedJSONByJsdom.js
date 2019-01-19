// query sample is

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

exports.scrapingQiitaTagAndFeedJSONByJsdom = (req, res) => {
    //        res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Origin', "http://localhost:5500");
    res.header('Access-Control-Allow-Origin', "https://taroyanaka.github.io");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // const tag = "Python";
    const tag = req.query['tag'].toString();

    let result = [];
    JSDOM.fromURL(`https://qiita.com/tags/${tag}`).then(dom => {
        for (let i = 1; i <= 20; i++) {
            result.push(
                [
                    dom.window.document.querySelector(`body > div.allWrapper > div.p-tagShow > div > div.p-tagShow_main > div.p-tagShow_mainBottom > section > div.tsf-ArticleList_view > article:nth-child(${i}) > div.tsf-ArticleBody > a`).textContent
                ,
                    dom.window.document.querySelector(`body > div.allWrapper > div.p-tagShow > div > div.p-tagShow_main > div.p-tagShow_mainBottom > section > div.tsf-ArticleList_view > article:nth-child(${i}) > div.tsf-ArticleBody > a`).href
                ]
            )
        }
    })
    .then(v => {
        res.send(JSON.stringify(result))
    });

};