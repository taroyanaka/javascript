-- sqlite3で全てのテーブルとそのデータを削除するクエリ
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS user_permission;
DROP TABLE IF EXISTS dups;

-- ユーザーのテーブル。カラムはIDはと名前とパスワードと作成日と更新日を持つ。IDは自動的に増加する
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  role_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);
-- ユーザーの権限のテーブル。カラムはIDはと名前と作成日と更新日を持つ。IDは自動的に増加する
-- カラムの中には、一般ユーザー、ゲストユーザーがある
-- ゲストユーザーはreadだけできる。一般ユーザーはread,write,deleteができる
CREATE TABLE user_permission (
  id INTEGER PRIMARY KEY,

  permission TEXT NOT NULL,
  readable INTEGER NOT NULL,
  writable INTEGER NOT NULL,
  deletable INTEGER NOT NULL, 

  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

-- dups_parentというテーブル1つに対して1つ以上のdupsテーブルを持つ
CREATE TABLE dups_parent (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- dupというブログのようなサービスのテーブル。contentと作成日と更新日を持つ。IDは自動的に増加する。usersのIDを外部キーとして持つ
CREATE TABLE dups (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dups_parent_id INTEGER NOT NULL,
  content_1 TEXT NOT NULL,
  content_2 TEXT NOT NULL,
  content_3 TEXT NOT NULL,
    FOREIGN KEY (dups_parent_id) REFERENCES dups_parent(id)
);


-- usersにデータを3レコード挿入する
INSERT INTO users (name, password, created_at, updated_at) VALUES ('name1', 'password1', DATETIME('now'), DATETIME('now'));
INSERT INTO users (name, password, created_at, updated_at) VALUES ('name2', 'password2', DATETIME('now'), DATETIME('now'));
-- user_permissionにデータを2レコード挿入する
INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (1, 'guest', 1, 0, 0, DATETIME('now'), DATETIME('now'));
INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (2, 'user', 1, 1, 1, DATETIME('now'), DATETIME('now'));
