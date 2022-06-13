// https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave
// in vscode's settings.json

// "emeraldwalk.runonsave": {
//     "commands": [
//         {
//             "match": "node_express_cors_better-sqlite3_server.js",
//             "cmd": "cp /Users/yanakataro/Desktop/js/javascript/HTML/pwa-builder-test3/node_express_cors_better-sqlite3_server.js /Users/yanakataro/Desktop/npm_package/better-sqlite3/"
//         }
//     ]
// }

// on CLI
// nodemon /Users/yanakataro/Desktop/npm_package/better-sqlite3/node_express_cors_better-sqlite3_server.js

const express = require('express')
var cors = require('cors')
const app = express()
const port = 8800

const Database = require('better-sqlite3');
const db = new Database('.data/tmp2.sqlite3');

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
const table_name_key_value_1 = {article_lists_table: [
["id", 1],
["article", "foo1"],
["search_txt", "foo1"],
["sort_by", "foo1"],
["sort_asc_or_desc", true],
["editing", 0],
["star_count", 1],
["comment_count", 3],
["article_length", 3],
["match_score", 0],
]}

const table_name_key_value_2 = {no_filter_list_table: [
["id", 1],
["article", "foo0"],
["star_count", 3],
["comment_count", 1],
["article_length", 4],
["match_score", 0.1],
]}

const table_name_key_value_3 = {no_filter_list_table: [
["id", 2],
["article", "bar"],
["star_count", 0],
["comment_count", 1],
["article_length", 3],
["match_score", 0.2],
]}

const insert_initial_data = (table_name_key_value) => {
    const table_name = Object.keys(table_name_key_value)[0];
    const key_val = Object.values(table_name_key_value)[0];
    const KEY_VAL_PAIR = [key_val.map(V=>V[0]), key_val.map(V=>V[1])];
    const stmt = db.prepare(`
INSERT INTO ${table_name} (
${KEY_VAL_PAIR[0].join(" ")}
)VALUES (
    ${KEY_VAL_PAIR[1].map(V=>typeof V ==='string' ? "'" + V + "'" : V).map(V=> "?").join(" ")}
)`);
    stmt.run(KEY_VAL_PAIR[1].join(" "));
};

const setup = () => {
    create_query_exe(tag_create_table());
    create_query_exe(no_filter_list_table_tag_table_create_table());
    create_query_exe(comment_create_table());
    create_query_exe(no_filter_list_create_table());
    insert_initial_data(table_name_key_value_1);
    insert_initial_data(table_name_key_value_2);
    insert_initial_data(table_name_key_value_3);
};




const insertAny = () => {
    const stmt = db.prepare(`INSERT INTO any (txt, uid, service_id) VALUES (?, ?, ?)`);
    stmt.run(
        "txt1",
        "foo0",
        1);
    stmt.run(
        "txt2",
        "foo0",
        2);
    stmt.run(
        "txt3",
        "bar1",
        2);
    stmt.run(
        "txt4",
        "bar1",
        3);
    stmt.run(
        "txt5",
        "foo0",
        2);
    stmt.run(
        "txt6",
        "foo0",
        2);
};
const readAllanyWithserviceAll = () => {
    const stmt = db.prepare(`
SELECT *
FROM any
JOIN service
ON any.service_id = service.id`);
    try {
        const anyWithService = stmt.all();
        console.table(anyWithService);
    } catch (err) {
        console.table(err);
    }
};
const read0 = (service, uid) => {
    const stmt = db.prepare('SELECT rowid,* FROM any WHERE service = ? AND uid = ?');
    try {
        const any = stmt.all(service, uid);
        console.table(any);
    } catch (err) {
        console.table(err);
    }
};
const read1 = (service, uid) => {
    const stmt = db.prepare(`
SELECT txt,created_at
FROM any
JOIN service
ON any.service_id = service.id
WHERE service = ? AND uid = ?`);
    try {
        const anyWithService = stmt.all(service, uid);
        console.table(anyWithService);
    } catch (err) {
        console.table(err);
    }
};

const readAllservice = () => {
    const stmt = db.prepare('SELECT rowid,* FROM service');
    const service = stmt.all();
    console.table(service);
    return service;
};
const readAllany = () => {
    const stmt = db.prepare('SELECT rowid,* FROM any');
    const any = stmt.all();
    console.table(any);
};

const dropTableservice = () => {
    const result = db.prepare("DROP TABLE service").run();
    console.table(result);
};
const resetAUTOINCREMENTservice = () => {
    const result = db.prepare("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='service'").run();
    console.table(result);
};
const dropTableany = () => {
    const result = db.prepare("DROP TABLE any").run();
    console.table(result);
};
const reset = () => {
    dropTableany();
    dropTableservice();
    create();
    insertService();
    insertAny();
    readAllanyWithserviceAll();
    read1("service1", "foo0");
};

const insert = (txt, service, uid) => {
    try {
        const any = db.prepare(`
INSERT INTO any (txt, uid, service_id)
    SELECT ?, ?, service.id
    FROM service
    WHERE service.service = ?;
`).run(
        txt,
        uid,
        service);
        console.table(any);
    } catch (err) {
        console.table(err);
    }
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

app.use(cors())

app.get('/', (req, res) => {
//   res.send('Hello World!')
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'});
  res.send(readAllservice());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  readAllservice();
})