// CREATE TABLE user_permission (
//   id INTEGER PRIMARY KEY,

//   permission TEXT NOT NULL,
//   readable INTEGER NOT NULL,
//   writable INTEGER NOT NULL,
//   deletable INTEGER NOT NULL, 

//   created_at DATETIME NOT NULL,
//   updated_at DATETIME NOT NULL
// );

// CREATE TABLE users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   user_permission_id INTEGER NOT NULL,
//   name TEXT NOT NULL,
//   password TEXT NOT NULL,
//   created_at DATETIME NOT NULL,
//   updated_at DATETIME NOT NULL,
//   FOREIGN KEY (user_permission_id) REFERENCES user_permission(id)
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
//   content TEXT NOT NULL,
//     FOREIGN KEY (dups_parent_id) REFERENCES dups_parent(id)
// );

// INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (1, 'guest', 1, 0, 0, DATETIME('now'), DATETIME('now'));
// INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (2, 'user', 1, 1, 1, DATETIME('now'), DATETIME('now'));

// INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (1, 'GUEST', 'GUEST_PASS', DATETIME('now'), DATETIME('now'));
// INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (2, 'name1', 'password1', DATETIME('now'), DATETIME('now'));
// INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (2, 'name2', 'password2', DATETIME('now'), DATETIME('now'));


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


const true_if_within_4000_characters_and_not_empty = (str) => str.length > 2 && str.length <= 4000 && typeof str === 'string' && str !== 'undefined' ? true : false && str !== 'null' ? true : false;

// '/read_dups_parent'というGETのリクエストを受け取るエンドポイントで、dups_parentとそれに付随するdupsとそれを紐づけるuserを取得する。
// それらの全てのidとcontent1とcontent2とcontent3を返すとcreated_atとupdated_atとuserのnameを返す
// 原因不明のエラーの場合は適当なエラーレスポンスを返す
app.get('/read_dups_parent', (req, res) => {
    try {
    const rows = db.prepare('SELECT dups_parent.id AS dups_parent_id, dups_parent.user_id AS user_id, dups_parent.created_at AS dups_parent_created_at, dups_parent.updated_at AS dups_parent_updated_at, dups.id AS dups_id, dups.content AS dups_content, users.name AS user_name FROM dups_parent LEFT JOIN dups ON dups_parent.id = dups.dups_parent_id LEFT JOIN users ON dups_parent.user_id = users.id').all();
    res.json(rows);
    } catch (error) {
        console.log(error);
        error_response(res, '原因不明のエラー' + error);
    }
});


// expressの一般的なエラーのレスポンス。引数としてエラー文字列を含めて呼び出す
const error_response = (res, error_message) => res.status(400).json({ error: error_message });

// '/insert_dup'というPOSTのリクエストを受け取るエンドポイントで、dups_parentとそれに付随するdupsを作成する。
app.post('/insert_dup', (req, res) => {
    try {
    // content_1, content_2, content_3はそれぞれがは配列で["abc", "def", "ghi"]のように入ってくる
    const { content_1, content_2, content_3, name, password } = JSON.parse(req.body);
    [content_1, content_2, content_3].forEach((content) => {
        content.forEach((str) => {
            true_if_within_4000_characters_and_not_empty(str) ? null : error_response(res, '4000文字以内で入力して');
        });
        true_if_within_4000_characters_and_not_empty(content.join("")) ? null : error_response(res, '4000文字以内で入力して');
    });
    const user_with_permission = db.prepare('SELECT users.id AS user_id, users.name AS user_name, user_permission.permission AS user_permission FROM users LEFT JOIN user_permission ON users.role_id = user_permission.id WHERE users.name = ? AND users.password = ?').get(req.body.name, req.body.password) ? null : error_response(res, 'ユーザーが存在しません');
    user_with_permission.writable === 1 ? null : error_response(res, '書き込み権限がありません');
    db.prepare('INSERT INTO dups_parent (user_id, created_at, updated_at) VALUES (?, DATETIME("now"), DATETIME("now"))').run(user_with_permission.id) ? null : error_response(res, 'dups_parentにuser_idを追加できませんでした');
    const dups_parent_id = db.prepare('SELECT id FROM dups_parent ORDER BY id DESC LIMIT 1').get().id ? null : error_response(res, 'dups_parent_idを取得できませんでした');
    [content_1, content_2, content_3].forEach((content) => {
        content.forEach((str) => {
            // db.prepare('INSERT INTO dups (dups_parent_id, content, created_at, updated_at) VALUES (?, ?, DATETIME("now"), DATETIME("now"))').run(dups_parent_id, str) ? null : error_response(res, 'dupsにcontentを追加できませんでした');
            db.prepare('INSERT INTO dups (dups_parent_id, content, created_at, updated_at) VALUES (?, ?, DATETIME("now"), DATETIME("now"))').run(dups_parent_id, str);
        });
    });
    res.json({message: 'success'});
    } catch (error) {
        console.log(error);
        error_response(res, '原因不明のエラー' + error);
    }
});

// '/delete_dup'というPOSTのリクエストを受け取るエンドポイントで、dups_parentとそれに付随するdupsを削除する。
// error_responseを使ってエラーを返すパターンとしては、
// 1. ユーザーが存在しません
// 2. 削除権限がありません
// 3. dupsを削除できませんでした
// 4. dups_parentを削除できませんでした
// 原因不明のエラーの場合は適当なエラーレスポンスを返す
app.post('/delete_dup', (req, res) => {
    try {
    const user_with_permission = db.prepare('SELECT users.id AS user_id, users.name AS user_name, user_permission.permission AS user_permission FROM users LEFT JOIN user_permission ON users.role_id = user_permission.id WHERE users.name = ? AND users.password = ?').get(req.body.name, req.body.password) ? null : error_response(res, 'ユーザーが存在しません');
    user_with_permission.deletable === 1 ? null : error_response(res, '削除権限がありません');
    db.prepare('DELETE FROM dups WHERE dups_parent_id = ?').run(req.body.dups_parent_id) ? null : error_response(res, 'dupsを削除できませんでした');
    db.prepare('DELETE FROM dups_parent WHERE id = ?').run(req.body.dups_parent_id) ? null : error_response(res, 'dups_parentを削除できませんでした');
    res.json({message: 'success'});

    } catch (error) {
        console.log(error);
        error_response(res, '原因不明のエラー' + error);
    }
});
