//package.json

// {
//     "dependencies": {
//         "csvtojson": "^2.0.8"
//     }
// }

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */


// need to set process.env.PROXYIDPASS and process.env.PROXYHOST

const csv = require("csvtojson")

exports.getQiitaArticle = (req, res) => {
    const SCRIPT = `
     curl -U ${process.env.PROXYIDPASS} -x ${process.env.PROXYHOST} https://www.xvideos.com/best/${year}-${month}|awk '/href="\\/video[0-9]+/{gsub(/>/," ");print $10}'|awk '{gsub(/href="\\//,"https://www.xvideos.com/");gsub(/best-2018-08\\/0\\//,"");gsub(/"/,"");print}'
    `;

//      res.header('Access-Control-Allow-Origin', "*");
  var whitelist = ['https://taroyanaka.github.io/javascript/etc/io.html']
  whitelist.forEach(function(val, key){
    if (host.indexOf(val) > -1){
      res.setHeader('Access-Control-Allow-Origin', val);
    }
  })
    
      res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  
  const value = require('child_process').execSync(SCRIPT).toString().split('\n').toString();
   
  csv({
      noheader: true,
      output: "csv"
  })
      .fromString(value)
      .then((jsonObj) => {
          res.send(jsonObj);
      })
  
  // from browser
  // fetch('https://jp-foo-bar-baz.cloudfunctions.net/bestXvideos?year=2017&month=1').then(v=>{return v.text()}).then(v=>{console.log(v)})
};