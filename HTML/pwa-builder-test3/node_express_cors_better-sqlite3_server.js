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

const express = require('express')
const cors = require('cors')

const R = require('ramda')
const validator = require('validator')

const app = express()
const port = 8800

const Database = require('better-sqlite3');
const db = new Database('.data/tmp2.sqlite3');

const article_lists_create_table = () => `CREATE TABLE IF NOT EXISTS article_lists_table (
id INT,
article TEXT,
search_txt TEXT,
sort_by TEXT,
sort_asc_or_desc BOOLEAN,
editing INT,
star_count INT,
comment_count INT,
article_length INT,
match_score INT)`;
const tag_create_table = () => `CREATE TABLE IF NOT EXISTS tag_table (
id INT,
no_filter_list_table_tag_table_id INT,
tag TEXT)`;
const no_filter_list_table_tag_table_create_table = () => `CREATE TABLE IF NOT EXISTS no_filter_list_table_tag_table (
id INT,
no_filter_list_table_id INT,
tag_table_id INT)`;
const comment_create_table = () => `CREATE TABLE IF NOT EXISTS comment_table (
id INT,
no_filter_list_table_id INT,
comment TEXT)`;
const no_filter_list_create_table = () => `CREATE TABLE IF NOT EXISTS no_filter_list_table (
id INT,
article TEXT,
star_count INT,
comment_count INT,
article_length INT,
match_score NUMBER
)`;

// const create = async () => {
//     db.prepare(`CREATE TABLE IF NOT EXISTS service (
// id INTEGER PRIMARY KEY AUTOINCREMENT,
// service TEXT NOT NULL
// );`).run();
//     db.prepare(`CREATE TABLE IF NOT EXISTS any (
// txt TEXT NOT NULL,
// uid TEXT NOT NULL,
// created_at DATETIME DEFAULT (datetime('now', 'localtime')),
// service_id INTEGER NOT NULL,
// FOREIGN KEY (service_id) REFERENCES service(id)
// );`).run();
// };



const create_query_exe = async (STR) => db.prepare(STR).run();
const table_name_key_value_1 =
{article_lists_table: [
["id", 1],
["article", "foo1"],
["search_txt", "foo1"],
["sort_by", "foo1"],
// ["sort_asc_or_desc", true], => SQLite does not have a separate Boolean storage class. Instead, Boolean values are stored as integers 0 (false) and 1 (true).
["sort_asc_or_desc", 1],
["editing", 0],
["star_count", 1],
["comment_count", 3],
["article_length", 3],
["match_score", 0],
]}

const table_name_key_value_2 =
{no_filter_list_table: [
["id", 1],
["article", "foo0"],
["star_count", 3],
["comment_count", 1],
["article_length", 4],
["match_score", 0.1],
]}

const table_name_key_value_3 =
{no_filter_list_table: [
["id", 2],
["article", "bar"],
["star_count", 0],
["comment_count", 1],
["article_length", 3],
["match_score", 0.2],
]}

const table_name_key_value_4 ={no_filter_list_table_tag_table: [
["id", 1],
["no_filter_list_table_id", 1],
["tag_table_id", 1],
]}
const table_name_key_value_5 ={no_filter_list_table_tag_table: [
["id", 2],
["no_filter_list_table_id", 1],
["tag_table_id", 2],
]}
const table_name_key_value_6 ={no_filter_list_table_tag_table: [
["id", 3],
["no_filter_list_table_id", 1],
["tag_table_id", 3],
]}

const table_name_key_value_7 =
{tag_table: [
["id", 1],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO1'],
]}
const table_name_key_value_8 =
{tag_table: [
["id", 2],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO2'],
]}
const table_name_key_value_9 =
{tag_table: [
["id", 3],
["no_filter_list_table_tag_table_id", 1],
["tag", 'FOO3'],
]}

const table_name_key_value_10 =
{comment_table: [
["id", 1],
["no_filter_list_table_id", 1],
["comment", 'FOO IS BAR'],
]}
const table_name_key_value_11 =
{comment_table: [
["id", 2],
["no_filter_list_table_id", 1],
["comment", 'BAR IS BUZ'],
]}
const table_name_key_value_12 =
{comment_table: [
["id", 3],
["no_filter_list_table_id", 1],
["comment", 'BUZ IS QUX'],
]}

const insert_initial_data = (table_name_key_value) => {
    const table_name = Object.keys(table_name_key_value)[0];
    const key_val = Object.values(table_name_key_value)[0];
    const KEY_VAL_PAIR = [key_val.map(V=>V[0]), key_val.map(V=>V[1])];
    const stmt = db.prepare(`INSERT INTO ${table_name} ( ${KEY_VAL_PAIR[0].join(", ")} ) VALUES (${KEY_VAL_PAIR[1].map(V=> "?").join(", ")})`);
    stmt.run(...KEY_VAL_PAIR[1]);
};


const resetAUTOINCREMENTservice = () => {
    const result = db.prepare("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='service'").run();
    console.table(result);
};

const update = (txt, rowid, service, uid) => {
    try {
        const any = db.prepare(`UPDATE any
SET txt = ?
WHERE rowid = ? AND uid = ? AND service_id =
    (
        SELECT service.id
        FROM service
        WHERE service.service = ?
    )
`).run(
    txt,
    rowid,
    uid,
    service);
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};





// create();
// insertService();
// insertAny();
// readAllservice();
// readAllany();

// readAllanyWithserviceAll();
// read1("service1", "foo0");

// update();

// reset();

// deleteAllRowservice();

// insert("qux100", "service1", "foo0");
// update("qux300", 6, "service1", "foo0");
// readAllanyWithserviceAll();
// read1("service1", "foo0");















const setup = () => {
    create_query_exe(article_lists_create_table());
    create_query_exe(tag_create_table());
    create_query_exe(no_filter_list_table_tag_table_create_table());
    create_query_exe(comment_create_table());
    create_query_exe(no_filter_list_create_table());
    insert_initial_data(table_name_key_value_1);
    insert_initial_data(table_name_key_value_2);
    insert_initial_data(table_name_key_value_3);
    insert_initial_data(table_name_key_value_4);
    insert_initial_data(table_name_key_value_5);
    insert_initial_data(table_name_key_value_6);
    insert_initial_data(table_name_key_value_7);
    insert_initial_data(table_name_key_value_8);
    insert_initial_data(table_name_key_value_9);
    insert_initial_data(table_name_key_value_10);
    insert_initial_data(table_name_key_value_11);
    insert_initial_data(table_name_key_value_12);
};

const table_list = [
    "article_lists_table",
    "no_filter_list_table",
    "tag_table",
    "comment_table",
]
const dropTableList = (LIST) => {
    const result = LIST.reduce((A,V,IDX)=>{
        const res = db.prepare(`DROP TABLE ${V}`).run();A.push(res);
        return A;
    },A=[])
    // const result = db.prepare("DROP TABLE any").run();
    console.table(result);
};


const drop = () => {
    db.prepare("DROP TABLE any").run();
};



const read_TABLE_NAME = (TABLE_NAME) => {
    const stmt = db.prepare(`SELECT rowid,* FROM ${TABLE_NAME}`);
    // const stmt = db.prepare('SELECT rowid,* FROM any WHERE service = ? AND uid = ?');
    try {
        const any = stmt.all();
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};

// https://stackoverflow.com/a/832589
// SELECT *
// FROM A_TABLE
// JOIN CROSS_TABLE
//     ON
//         A_TABLE.id = CROSS_TABLE.A_TABLE_id
// JOIN B_TABLE
//     ON
//         CROSS_TABLE.B_TABLE_id = B_TABLE.id

// A_table no_filter_list_table
// B_table tag_table
// CROSS_table no_filter_list_table_tag_table
const read_cross_TABLE_NAME = (TABLE_NAME) => {
    const stmt = db.prepare(`SELECT *
FROM no_filter_list_table
JOIN no_filter_list_table_tag_table
    ON
        no_filter_list_table.id = no_filter_list_table_tag_table.no_filter_list_table_id
JOIN tag_table
    ON
        no_filter_list_table_tag_table.tag_table_id = tag_table.id
`);
    try {
        const any = stmt.all();
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};




// setup();
// table_list.forEach(V=>read_TABLE_NAME(V));
// read_cross_TABLE_NAME();
// dropTableList(table_list);

// console.log(validator.isIn("foo", ["foo", "bar"]))
// console.log(validator.isIn("buz", ["foo", "bar"]))

const make_table_name_with_column_name = (TABLE_AND_COLUMN_NAMES) => TABLE_AND_COLUMN_NAMES[1].map(VAL=>TABLE_AND_COLUMN_NAMES[0] + '.' + VAL);

const article_lists_table_and_column_name = [
    "article_lists_table",
    [
        "id",
        "article",
        "search_txt",
        "sort_by",
        "sort_asc_or_desc",
        "editing",
        "star_count",
        "comment_count",
        "article_length",
        "match_score",
    ]
];

console.log(make_table_name_with_column_name(article_lists_table_and_column_name));

console.log(validator.isIn("article_lists_table.search_txt", make_table_name_with_column_name(article_lists_table_and_column_name)))
console.log(validator.isIn("article_lists_table.uid", make_table_name_with_column_name(article_lists_table_and_column_name)))

// const escaped = validator.escape(`'Gifts'--'`)
// const unescaped = unsanitizer(escaped)
// const escaped2 = validator.escape(`SELECT * FROM no_filter_list_table`)
// const unescaped2 = unsanitizer(escaped2)
// console.log(escaped)
// console.log(unescaped)
// console.log(escaped2)
// console.log(unescaped2)


const update_TABLE_NAME = (TABLE_NAME, SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY, WHERE_COLUMN_NAMES_ARRAY) => {
    const SET_COLUMN_NAMES_ARRAY = SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY.map(V=>V[0]);
    const VALUES_ARRAY = SET_COLUMN_NAME_AND_VALUE_PAIR_ARRAY.map(V=>V[1]);
    // `txt = ?, you = ?, i = ?`
    const SET_query = SET_COLUMN_NAMES_ARRAY.map(V=> `${V} = ?`).join(", ");
    // rowid = ? AND uid = ? AND service_id = ?
    const WHERE_query = WHERE_COLUMN_NAMES_ARRAY.map(V=> `${V} = ?`).join(" AND ");
    try {
        const RESULT = db.prepare(`UPDATE ${TABLE_NAME}
SET ${SET_query}
WHERE ${WHERE_query}
`)
    .run(...VALUES_ARRAY);
        console.table(RESULT);
    } catch (err) {
        console.table(err);
    }
};

// for security about sqlite3
// https://www.sqlite.org/security.html
// https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/SQLite%20Injection.md














var HTTP_PORT = 8000
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
function allowOrigin(res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
}

// app.get('/', (req, res) => {
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'});
//   res.send(readAllservice());
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // res.json({data: "JSON RESPONSE"})
    //   readAllservice();
})

app.get('/', (req, res) => {
    res.json({ id: "Taro on test server" });
});

function CREATETABLE(){
    db.prepare(`CREATE TABLE IF NOT EXISTS lorem (
id INTEGER PRIMARY KEY AUTOINCREMENT,
info TEXT NOT NULL
)`).run();
}
function DROPTABLE(){
    db.prepare(`DROP TABLE lorem`).run();
}


const makeValidator = (STRING, TYPE, OPTION) => validator[TYPE](STRING, OPTION);
const validate_and_exe_or_no_exe = (STRING, TYPE, OPTION, ERROR_MESSAGE) =>{
    return R.tryCatch( 
        makeValidator(STRING, TYPE, OPTION) ? ()=>{throw null} : ()=>{throw ERROR_MESSAGE},
        (ERROR, FUNCTION)=>( FUNCTION(ERROR, STRING) )
    )
};
const exe_query_or_not = (query_function) => (ERROR, STR) => ERROR ? ERROR : query_function(STR);
const exe_query_or_not_with_id = (query_function) => (ERROR, STR, ID) => ERROR ? ERROR : query_function(STR, ID);
const make_id_info_from_array = (ID, INFO) => R.fromPairs([["id", ID], ["info", INFO]]);



const db_query_select = () => {
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_insert_and_select = (STRING) => {
    db.prepare('INSERT INTO lorem (info) values(?)').run(STRING);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_update_and_select = (STRING, NUM) => {
    db.prepare('UPDATE lorem SET info = ? WHERE id = ?').run(STRING, NUM);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};
const db_query_delete = (ID) => {
    db.prepare('DELETE FROM lorem WHERE id = (?)').run(ID);
    return {
        "message": "success",
        "data": db.prepare('SELECT * FROM lorem').all().map(DATA=>make_id_info_from_array(DATA.id, DATA.info))
    }
};



app.get("/insert", (req, res, next) => {
    allowOrigin(res); res.json(
        validate_and_exe_or_no_exe(req.query.info, "isLength", {min: 1, max: 30}, {"message": "error: isLength: {min: 1, max: 30}"})(exe_query_or_not((STRING)=>db_query_insert_and_select(STRING)))
    )
});
app.get("/update", (req, res, next) => {
    allowOrigin(res); res.json(
        validate_and_exe_or_no_exe(req.query.info, "isLength", {min: 1, max: 30}, {"message": "error: isLength: {min: 1, max: 30}"})(exe_query_or_not_with_id((STRING)=>db_query_update_and_select(STRING, req.query.id)))
    )
});
app.get("/readall", (req, res, next) => {
    allowOrigin(res); res.json(db_query_select());
});
app.get("/deleteid", (req, res, next) => {
    allowOrigin(res); res.json(db_query_delete(req.query.id));
});



const sample_uuid_array = [
"Fighter",
"Mage",
"Priest",
];
const md5 = require('./md5.@2.19.0');
var hash = md5('value');
// console.log(hash);
 // "2063c1608d6e0baf80249c42e2be5804"

// https://stackoverflow.com/questions/11643611/execute-sqlite-script


`DROP TABLE IF EXISTS hashed_uuid;`;
`CREATE TABLE IF NOT EXISTS hashed_uuid (
    hashed_uuid TEXT NOT NULL
);`;



`DROP TABLE IF EXISTS lorem;`;


`CREATE TABLE IF NOT EXISTS lorem (
    info TEXT NOT NULL,
    hashed_uuid_rowid NUMBER NOT NULL
);`;

`INSERT INTO hashed_uuid (hashed_uuid) values("foo");`;
`INSERT INTO hashed_uuid (hashed_uuid) values("bar");`;
`INSERT INTO lorem (info, hashed_uuid_rowid) values("FOOBARTEXT1", 1);`;
`INSERT INTO lorem (info, hashed_uuid_rowid) values("FOOBARTEXT1", 2);`;
`INSERT INTO lorem (info, hashed_uuid_rowid) values("FOOBARTEXT10", 1);`;
`INSERT INTO lorem (info, hashed_uuid_rowid) values("FOOBARTEXT10", 2);`;



`INSERT INTO lorem (info, hashed_uuid_rowid)
    VALUES(
        "A two dimensional square appears that duplicates a section of the ice pattern.", 
        (SELECT hashed_uuid.rowid FROM hashed_uuid WHERE hashed_uuid.hashed_uuid = "bar")
    );`;


`INSERT INTO lorem (info, hashed_uuid_rowid)
    VALUES(
        "The circle bulges outward... separating from the cube.", 
        (SELECT hashed_uuid.rowid FROM hashed_uuid WHERE hashed_uuid.hashed_uuid = "foo")
    );`;



`UPDATE lorem
SET info = "filling the frame."
WHERE
    lorem.rowid = 1
    AND
    lorem.hashed_uuid_rowid =
        (SELECT hashed_uuid.rowid FROM hashed_uuid WHERE hashed_uuid.hashed_uuid = "foo");`;



`DELETE
FROM lorem
WHERE
    lorem.rowid = 4
    AND
    lorem.hashed_uuid_rowid =
        (SELECT hashed_uuid.rowid FROM hashed_uuid WHERE hashed_uuid.hashed_uuid = "foo");`;



`SELECT
    lorem.rowid,
    info,
    hashed_uuid.hashed_uuid
FROM lorem
JOIN hashed_uuid
    ON hashed_uuid_rowid = hashed_uuid.rowid
WHERE hashed_uuid.hashed_uuid = "bar";`;


// You can also use named parameters. SQLite3 provides 3 different syntaxes for named parameters (@foo, :foo, and $foo), all of which are supported by better-sqlite3.
// The following are equivalent.
// const stmt = db.prepare('INSERT INTO people VALUES (@firstName, @lastName, @age)');
// const stmt = db.prepare('INSERT INTO people VALUES (:firstName, :lastName, :age)');
// const stmt = db.prepare('INSERT INTO people VALUES ($firstName, $lastName, $age)');
// const stmt = db.prepare('INSERT INTO people VALUES (@firstName, :lastName, $age)');
// stmt.run({
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 45
// });




const data_and_rule_list = [
    ["FOO", "isLength", {min: 1, max: 2}, "error: isLength: {min: 1, max: 2}"],
    ["BAR", "isLength", {min: 4, max: 6}, "error: isLength: {min: 4, max: 6}"],
    ["BUZ", "isLength", {min: 8, max: 10}, "error: isLength: {min: 8, max: 10}"],
]
const data_and_rule_list_2_0 = [
    ["FOO", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
    ["BARBAR", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
    ["BUZ", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
]
const data_and_rule_list_2_1 = [
    ["FOO", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
    ["BAR", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
    ["BUZ", "isLength", {min: 1, max: 3}, "error: isLength: {min: 1, max: 3}"],
]
const pre_separate_data_or_error_message = (data_and_rule_list) => data_and_rule_list.map(V=>makeValidator(V[0], V[1], V[2]) ? ["data", V[0]] : ["error", V[3]]);

// const exe_query_or_not = (query_function) => (ERROR, STR) => ERROR ? ERROR : query_function(STR);
// const exe_query_or_not_with_id = (query_function) => (ERROR, STR, ID) => ERROR ? ERROR : query_function(STR, ID);

const is_all_no_error = (data_and_rule_list) => pre_separate_data_or_error_message(data_and_rule_list).every(x=>x[0]==="data");
const only_data = (data_and_rule_list) => data_and_rule_list.map(V=>V[0]);
const only_error_message = (data_and_rule_list) => pre_separate_data_or_error_message(data_and_rule_list).filter(x=>x[0]==="error").map(V=>V[1]);
const separate_data_or_error_message = (data_and_rule_list) => is_all_no_error(data_and_rule_list) ? only_data(data_and_rule_list) : only_error_message(data_and_rule_list);

console.table(separate_data_or_error_message(data_and_rule_list_2_0));
console.table(separate_data_or_error_message(data_and_rule_list_2_1));