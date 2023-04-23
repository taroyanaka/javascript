// DROP TABLE IF EXISTS users;
// DROP TABLE IF EXISTS user_permission;
// DROP TABLE IF EXISTS dups;

// CREATE TABLE users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   role_id INTEGER NOT NULL,
//   name TEXT NOT NULL,
//   password TEXT NOT NULL,
//   created_at DATETIME NOT NULL,
//   updated_at DATETIME NOT NULL
// );
// CREATE TABLE user_permission (
//   id INTEGER PRIMARY KEY,

//   permission TEXT NOT NULL,
//   readable INTEGER NOT NULL,
//   writable INTEGER NOT NULL,
//   deletable INTEGER NOT NULL, 

//   created_at DATETIME NOT NULL,
//   updated_at DATETIME NOT NULL
// );

// CREATE TABLE dups_parent (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//     user_id INTEGER NOT NULL,
//   created_at DATETIME NOT NULL,
//   updated_at DATETIME NOT NULL,
//     FOREIGN KEY (user_id) REFERENCES users(id)
// );


// CREATE TABLE dups (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   dups_parent_id INTEGER NOT NULL,
//   content_1 TEXT NOT NULL,
//   content_2 TEXT NOT NULL,
//   content_3 TEXT NOT NULL,
//     FOREIGN KEY (dups_parent_id) REFERENCES dups_parent(id)
// );


// INSERT INTO users (name, password, created_at, updated_at) VALUES ('name1', 'password1', DATETIME('now'), DATETIME('now'));
// INSERT INTO users (name, password, created_at, updated_at) VALUES ('name2', 'password2', DATETIME('now'), DATETIME('now'));
// INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (1, 'guest', 1, 0, 0, DATETIME('now'), DATETIME('now'));
// INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (2, 'user', 1, 1, 1, DATETIME('now'), DATETIME('now'));


const express = require('express');
const sqlite = require('better-sqlite3');
const db = new sqlite('dup.sqlite3');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
const port = 8000;
app.listen(port, "0.0.0.0", () => console.log(`App listening!! at http://localhost:${port}`) );


const true_if_within_4000_characters_and_not_empty = (str) => str.length > 0 && str.length <= 4000 && typeof str === 'string';

// '/read_dups_parent'というGETのリクエストを受け取るエンドポイントで、dups_parentとそれに付随するdupsとそれを紐づけるuserを取得する。
// それらの全てのidとcontent1とcontent2とcontent3を返すとcreated_atとupdated_atとuserのnameを返す
app.get('/read_dups_parent', (req, res) => {
    const sql = db.prepare('SELECT dups_parent.id AS dups_parent_id, dups.id AS dups_id, dups.content_1 AS dups_content_1, dups.content_2 AS dups_content_2, dups.content_3 AS dups_content_3, dups.created_at AS dups_created_at, dups.updated_at AS dups_updated_at, users.name AS user_name FROM dups_parent LEFT JOIN dups ON dups_parent.id = dups.dups_parent_id LEFT JOIN users ON dups_parent.user_id = users.id');
    const rows = sql.all();
    res.json(rows);
});

const user_with_permission = (req) => {
    const sql = db.prepare('SELECT users.id AS user_id, users.name AS user_name, user_permission.permission AS user_permission FROM users LEFT JOIN user_permission ON users.role_id = user_permission.id WHERE users.name = ? AND users.password = ?');
    const user = sql.get(req.body.name, req.body.password);
    return user;
};

const error_response = (res, message) => {
    res.status(400);
    res.json({message: message});
};

const insert_dups_parent = (req, user) => {
    const sql = db.prepare('INSERT INTO dups_parent (user_id, created_at, updated_at) VALUES (?, DATETIME("now"), DATETIME("now"))');
    const info = sql.run(user.id);
    return info.lastInsertRowid;
};

const insert_dups = (req, dups_parent_id) => {
    const sql = db.prepare('INSERT INTO dups (dups_parent_id, content_1, content_2, content_3, created_at, updated_at) VALUES (?, ?, ?, ?, DATETIME("now"), DATETIME("now"))');
    const info = sql.run(dups_parent_id, req.body.content_1, req.body.content_2, req.body.content_3);
    return info.lastInsertRowid;
};



// これは'/insert_dup'というPOSTのリクエストを受け取るエンドポイントで、
// dups_parentにuser_idを追加し、そのdups_parent_idをdupsに追加する。
// dupsにcontent1とcontent2とcontent3を追加する。
app.post('/insert_dup', (req, res) => {
    true_if_within_4000_characters_and_not_empty(JSON.stringify(req.body.content_1)) ? null : error_response(res, '4000文字以内で入力して');
    true_if_within_4000_characters_and_not_empty(JSON.stringify(req.body.content_2)) ? null : error_response(res, '4000文字以内で入力して');
    true_if_within_4000_characters_and_not_empty(JSON.stringify(req.body.content_3)) ? null : error_response(res, '4000文字以内で入力して');
    true_if_within_4000_characters_and_not_empty(JSON.stringify(req.body.content_1 + req.body.content_2 + req.body.content_3)) ? null : error_response(res, '4000文字以内で入力して');
    const user = user_with_permission(req);
    user ? null : error_response(res, 'ユーザーが存在しません');
    user.writable === 1 ? null : error_response(res, '書き込み権限がありません');
    const dups_parent_id = insert_dups_parent(req, user);
    insert_dups(req, dups_parent_id);
    res.json({message: 'success'});
});
    