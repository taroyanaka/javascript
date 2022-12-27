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


function get_all2(){
const foo = db.prepare(`
SELECT
simple_io_for_server_side_main.id AS ID,
simple_io_for_server_side_main.main AS MAIN,
simple_io_for_server_side_comment.id AS COMMENT_ID,
simple_io_for_server_side_comment.comment AS COMMENT,
simple_io_for_server_side_comment.main_id AS MAIN_ID
FROM simple_io_for_server_side_main
LEFT JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_main.id
    = simple_io_for_server_side_comment.main_id;
`).all();

const bar = db.prepare(`
SELECT tag.id AS TAG_ID, tag.tag AS TAG
FROM tag
JOIN main_tag ON tag.id = main_tag.tag_id
JOIN simple_io_for_server_side_main ON main_tag.main_id = simple_io_for_server_side_main.id;
`).all();
const buz = db.prepare(`
SELECT tag.id AS TAG_ID, tag.tag AS TAG
FROM tag
JOIN comment_tag ON tag.id = comment_tag.tag_id
JOIN simple_io_for_server_side_comment ON comment_tag.comment_id = simple_io_for_server_side_comment.id;
`).all();
// const bar = db.prepare(`
// SELECT *
// FROM tag
// JOIN main_tag ON tag.id = main_tag.tag_id
// JOIN simple_io_for_server_side_main ON main_tag.main_id = simple_io_for_server_side_main.id;
// `).all();
// const buz = db.prepare(`
// SELECT *
// FROM tag
// JOIN comment_tag ON tag.id = comment_tag.tag_id
// JOIN simple_io_for_server_side_comment ON comment_tag.comment_id = simple_io_for_server_side_comment.id;
// `).all();


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

const DB_RESULT2 = DB_RESULT.map(V=> [V, bar.filter(VAL=>VAL['main_id'] === V['MAIN_ID'])]  );

    const main_only = DB_RESULT.map(V=>{const obj = {"main": {"ID": V.ID, "MAIN": V.MAIN} } 
    return obj;
});
    const uniq_main_only = R.uniq(main_only);
    const comment_only = DB_RESULT.filter(V=>V.COMMENT_ID !== null).map(V=>{
const obj = {"COMMENT_ID": V.COMMENT_ID, "MAIN_ID": V.MAIN_ID, "COMMENT": V.COMMENT}
return obj;
});

const with_comment = uniq_main_only.map(V=>comment_only.map(VAL=>{ if( VAL["MAIN_ID"] === V["main"]["ID"] )return VAL }));

const res3 = R.zip(
                uniq_main_only,
                uniq_main_only.map(V=>comment_only.map(VAL=>{ if( VAL["MAIN_ID"] === V["main"]["ID"] )return VAL })),
                DB_RESULT2
                )
            .map(V=>[V[0], R.without([undefined], V[1]), V[2]])
            .map(V=>{const obj = {"comment": V[1]};
                    return Object.assign(V[0], obj)
                    });

main_tag = bar;comment_tag = buz;

main_tag.forEach((V,IDX)=>{
    res3.forEach((res_of_one,IDX)=>{
        if(res_of_one['main']['ID'] === V['TAG_ID']){Object.assign(res_of_one, {'main_tag': V})}
    })
});

comment_tag.forEach((COMMENT_TAG,IDX)=>{
        res3.forEach((res_of_one,IDX)=>{
            res_of_one['comment'].forEach((COM)=>{
                    if(COM['COMMENT_ID'] === COMMENT_TAG['TAG_ID']){Object.assign(COM, {'comment_tag': COMMENT_TAG})}
            })
        })
});


    return res3;
};









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

    const main_only = DB_RESULT.map(V=>{const obj = {"main": {"ID": V.ID, "MAIN": V.MAIN} } 
    return obj;
});
    const uniq_main_only = R.uniq(main_only);
    const comment_only = DB_RESULT.filter(V=>V.COMMENT_ID !== null).map(V=>{
const obj = {"COMMENT_ID": V.COMMENT_ID, "MAIN_ID": V.MAIN_ID, "COMMENT": V.COMMENT}
return obj;
});

    const res2 = R.zip(
                uniq_main_only,
                uniq_main_only.map(V=>comment_only.map(VAL=>{ if( VAL["MAIN_ID"] === V["main"]["ID"] )return VAL })),
                )
            .map(V=>[V[0], R.without([undefined], V[1]), V[2]])
            .map(V=>{const obj = {"comment": V[1]};
                    return Object.assign(V[0], obj)
                    });
const res3 = R.zip(
                uniq_main_only,
                uniq_main_only.map(V=>comment_only.map(VAL=>{ if( VAL["MAIN_ID"] === V["main"]["ID"] )return VAL })),
                )
            .map(V=>[V[0], R.without([undefined], V[1]), V[2]])
            .map(V=>{const obj = {"comment": V[1]};
                    return Object.assign(V[0], obj)
                    });
    return res3;
};

app.get('/', (req, res) => {
    res.json(get_all());
});
app.get('/fetch_all2', (req, res) => {
    res.json(get_all2());
});

app.get('/insert_comment', (req, res) => {
    if(
        validator.isLength(req.query.COMMENT, {min:1, max: 20}) === false
        &&
        validator.isNumeric(req.query.MAIN_ID, {no_symbols: true}) === false
    ) {return};
    db.prepare(`INSERT INTO simple_io_for_server_side_comment (comment, main_id) VALUES (?, ?)`).run(req.query.COMMENT, req.query.MAIN_ID);
    res.json(get_all());
});

app.get('/insert_main', (req, res) => {
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
app.get('/delete_comment', (req, res) => {
    if(validator.isNumeric(req.query.ID, {no_symbols: true}) === false){return};
    db.prepare(`DELETE FROM simple_io_for_server_side_comment
WHERE simple_io_for_server_side_comment.id = ?;`
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