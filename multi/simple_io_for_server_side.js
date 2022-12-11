// https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
// in vscode's settings.json

// "emeraldwalk.runonsave": {
//     "commands": [
//         {
//             "match": "/Users/yanakataro/Desktop/js2/javascript/HTML/pwa-builder-test3/node_express_cors_better-sqlite3_server.js",
//             "cmd": "cp /Users/yanakataro/Desktop/js2/javascript/HTML/pwa-builder-test3/node_express_cors_better-sqlite3_server.js /Users/yanakataro/Desktop/npm_package/better-sqlite3/"
//         }
//     ]
// }

// on CLI
// nodemon /Users/yanakataro/Desktop/npm_package/better-sqlite3/node_express_cors_better-sqlite3_server.js


// https://stackoverflow.com/a/9756189
// $ ls -la  
// var d1 = new Date();
// d1.toUTCString();
// Math.floor(d1.getTime()/ 1000);


const sample_uid_array = [
"Fighter",
"Mage",
"Priest",
];

// https://github.com/blueimp/JavaScript-MD5
// https://unpkg.com/blueimp-md5@2.19.0/js/md5.js
// const MD5 = require('./md5.@2.19.0');
const MD5 = require('./blueimp-md5@2.19.0');
// var hash = MD5('value');
// console.log(hash);
 // "2063c1608d6e0baf80249c42e2be5804"

// https://stackoverflow.com/questions/11643611/execute-sqlite-script


// const uid_create_table = () => `CREATE TABLE IF NOT EXISTS uid (uid TEXT NOT NULL)`;





// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 8800;

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors());

function allowOrigin(res){
  // res.header("Access-Control-Allow-Origin", "https://taroyanaka.github.io");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
}


app.listen(3000);


const R = require('ramda');
const validator = require('validator');


const Database = require('better-sqlite3');
let db;

db = new Database('./tmp2.sqlite3');



app.get('/', (req, res) => {
    res.json(
    db.prepare(`SELECT *
FROM simple_io_for_server_side_main
JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_main.simple_io_for_server_side_comment_id = simple_io_for_server_side_comment.id;`
        ).all()
    );
    // return listurlpopup_db_query_select_all(STRING_ARRAY);
});

