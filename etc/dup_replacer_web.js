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


