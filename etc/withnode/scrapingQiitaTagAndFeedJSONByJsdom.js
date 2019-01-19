// query sample is
// https://area-region-bar-baz.cloudfunctions.net/scrapingQiitaTagAndFeedJSONByJsdom?tag=Python

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const R = require("ramda");

exports.scrapingQiitaTagAndFeedJSONByJsdom = (req, res) => {
    // res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Origin', "http://localhost:5500");
    res.header('Access-Control-Allow-Origin', "https://taroyanaka.github.io");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // const tag = "Python";
    const tag = req.query['tag'].toString();
    JSDOM.fromURL(`https://qiita.com/tags/${tag}`).then(dom => {
        // result return [[title, URL][title, URL][title, URL]...]
        let result = [];
        const getTitleAndArticle = x => {
            result.push(
                [dom.window.document.querySelector(`body > div.allWrapper > div.p-tagShow > div > div.p-tagShow_main > div.p-tagShow_mainBottom > section > div.tsf-ArticleList_view > article:nth-child(${(x + 1).toString()}) > div.tsf-ArticleBody > a`).textContent
                 ,
                 dom.window.document.querySelector(`body > div.allWrapper > div.p-tagShow > div > div.p-tagShow_main > div.p-tagShow_mainBottom > section > div.tsf-ArticleList_view > article:nth-child(${(x + 1).toString()}) > div.tsf-ArticleBody > a`).href]
            )
        };
        R.forEach(getTitleAndArticle, R.times(R.identity, 20));
        return result;
    })
    .then(result => {
        res.send(JSON.stringify(result))
        // console.log(JSON.stringify(result))
    });
};
