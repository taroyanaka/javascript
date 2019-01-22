// query sample is
// https://asia-northeast1-taro-fe94c.cloudfunctions.net/scrapingTeratailTagAndFeedJSONByJsdom?tag=Python
// cliand side query is
// fetch('https://asia-northeast1-taro-fe94c.cloudfunctions.net/scrapingTeratailTagAndFeedJSONByJsdom?tag=Python').then(v=>{return v.text()}).then(v=>{console.log(JSON.parse(v)[10][1])})

// package.json

// {
//     "dependencies": {
//         "jsdom": "^13.1.0"
//     }
// }

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const R = require("ramda");

exports.scrapingTeratailTagAndFeedJSONByJsdom = (req, res) => {
    res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Origin', "http://localhost:5500");
    // res.header('Access-Control-Allow-Origin', "https://taroyanaka.github.io");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }
    // const tag = "Python";
    const tag = req.query['tag'].toString();
    JSDOM.fromURL(`https://teratail.com/tags/${tag}`).then(dom => {
        let result = [];
        const getTitleAndArticle = x => {
            for (let num of range(1, 20)) {
                Array.from(dom.window.document.querySelectorAll(`#mainContainer > div.boxContentWrap.j-feedContentsWrapper.btnActive > ul > li:nth-child(${num}) > div.boxItemContent > h2 > a`))
                    .forEach(v => {
                        // result return [[title, URL][title, URL][title, URL]...]
                        result.push([
                            v.textContent,
                            v.href
                        ])
                    })
            }
        };
        getTitleAndArticle();
        return result;
    })
        .then(result => {
            res.send(JSON.stringify(result))
            // console.log(JSON.stringify(result))
        });
};
