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

db = new Database('./simple_io_for_server_side.sqlite3');


function get_all(){
    const DB_RESULT = db.prepare(`SELECT
simple_io_for_server_side_main.id AS ID,
simple_io_for_server_side_main.main AS MAIN,
simple_io_for_server_side_comment.id AS COMMENT_ID,
simple_io_for_server_side_comment.comment AS COMMENT,
simple_io_for_server_side_comment.main_id AS MAIN_ID
FROM simple_io_for_server_side_main
LEFT JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_main.id
    = simple_io_for_server_side_comment.main_id;`
    ).all();
    const main_only = DB_RESULT.map(V=>[V.ID, V.MAIN]);
    const uniq_main_only = R.uniq(main_only);
    const comment_only = DB_RESULT.filter(V=>V.COMMENT_ID !== null).map(V=>[V.COMMENT_ID, V.MAIN_ID, V.COMMENT]);
    return R.zip(
                uniq_main_only, 
                uniq_main_only.map(V=>comment_only.map(VAL=>{if(VAL[1] === V[0]){return VAL} }))
            .map(V=>R.without([undefined], V)));
};

app.get('/', (req, res) => {
    res.json(get_all());
});

app.get('/insert_record', (req, res) => {
    if(validator.isLength(req.query.MAIN, {min:1, max: 20}) === false){return};
    db.prepare(`INSERT INTO simple_io_for_server_side_main (main) VALUES (?)`).run(req.query.MAIN);
    res.json(get_all());
});

app.get('/delete_record', (req, res) => {
    if(validator.isNumeric(req.query.ID, {no_symbols: true}) === false){return};
    db.prepare(`DELETE FROM simple_io_for_server_side_comment
WHERE simple_io_for_server_side_comment.main_id = ?;`
    ).run(req.query.ID);
    db.prepare(`DELETE FROM simple_io_for_server_side_main
    WHERE simple_io_for_server_side_main.id = ?;`
    ).run(req.query.ID);
    res.json(get_all());
});

app.get('/update_main', (req, res) => {
    if(
        validator.isNumeric(req.query.ID, {no_symbols: true}) === false
        &&
        validator.isLength(req.query.MAIN, {min:1, max: 20}) === false
    ) {return};
    db.prepare(`UPDATE simple_io_for_server_side_main
SET main = ?
WHERE
    simple_io_for_server_side_main.id = ?`
    ).run(req.query.MAIN, req.query.ID);
    res.json(get_all());
});

app.get('/update', (req, res) => {
    if(
        validator.isNumeric(req.query.ID, {no_symbols: true}) === false
        &&
        validator.isLength(req.query.COMMENT, {min:1, max: 10}) === false
    ) {return res.json("ERROR")}
    db.prepare(`UPDATE simple_io_for_server_side_comment
SET comment = ?
WHERE
    simple_io_for_server_side_comment.id =
        (SELECT simple_io_for_server_side_main.simple_io_for_server_side_comment_ID
         FROM simple_io_for_server_side_main
         WHERE simple_io_for_server_side_main.simple_io_for_server_side_comment_ID = ?);`
    ).run(req.query.COMMENT, req.query.ID);
    res.json(get_all());
// app.get('/update', (req, res) => {
//     if(
//         validator.isNumeric(req.query.ID, {no_symbols: true}) === false
//         &&
//         validator.isLength(req.query.COMMENT, {min:1, max: 10}) === false
//     ) {return res.json("ERROR")}
//     db.prepare(`UPDATE simple_io_for_server_side_comment
// SET comment = ?
// WHERE
//     simple_io_for_server_side_comment.id =
//         (SELECT simple_io_for_server_side_main.simple_io_for_server_side_comment_ID
//          FROM simple_io_for_server_side_main
//          WHERE simple_io_for_server_side_main.simple_io_for_server_side_comment_ID = ?);`
//     ).run(req.query.COMMENT, req.query.ID);
//     res.json(
//         db.prepare(`SELECT *
// FROM simple_io_for_server_side_main
// JOIN simple_io_for_server_side_comment
// ON simple_io_for_server_side_main.simple_io_for_server_side_comment_id = simple_io_for_server_side_comment.id;`
//         ).all()
//     );
});

