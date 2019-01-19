// query sample is
// https://asia-northeast1-taro-fe94c.cloudfunctions.net/scrapingQiitaTagAndFeedJSON?tag=Python

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const csv = require("csvtojson")

exports.scrapingQiitaTagAndFeedJSON = (req, res) => {
    //        res.header('Access-Control-Allow-Origin', "*");
    // res.header('Access-Control-Allow-Origin', "http://localhost:5500");
    res.header('Access-Control-Allow-Origin', "https://taroyanaka.github.io");
    res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");

    // const tag = "Python";
    const tag = req.query['tag'].toString();

    const SCRIPT = `
    curl -U ${process.env.PROXYIDPASS} -x ${process.env.PROXYHOST} -L https://qiita.com/tags/${tag}|
    awk '{gsub(/href/,"\\n");print}'|awk '/items\\//{gsub(/>.*/,"");print}'|awk '! /tags|items"/{gsub(/^="\\//,"");gsub(/"$/,"");print}' 
    `;

    const value = require('child_process').execSync(SCRIPT).toString().split('\n').toString();

    csv({
        noheader: true,
        output: "csv"
    })
        .fromString(value)
        .then((jsonObj) => {
            // console.log(jsonObj);
            res.send(jsonObj);
        })
};
