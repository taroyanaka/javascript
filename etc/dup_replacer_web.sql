-- sqlite3で全てのテーブルとそのデータを削除するクエリ
DROP TABLE IF EXISTS user_permission;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS dups_parent;
DROP TABLE IF EXISTS dups;

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

-- ユーザーのテーブル。カラムはIDはと名前とパスワードと作成日と更新日を持つ。IDは自動的に増加する
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_permission_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  FOREIGN KEY (user_permission_id) REFERENCES user_permission(id)
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
  content TEXT NOT NULL,
  FOREIGN KEY (dups_parent_id) REFERENCES dups_parent(id)
);
-- user_permissionにデータを2レコード挿入する
INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (1, 'guest', 1, 0, 0, DATETIME('now'), DATETIME('now'));
INSERT INTO user_permission (id, permission, readable, writable, deletable, created_at, updated_at) VALUES (2, 'user', 1, 1, 1, DATETIME('now'), DATETIME('now'));

-- usersにデータを3レコード挿入する
INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (1, 'GUEST', 'GUEST_PASS', DATETIME('now'), DATETIME('now'));
INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (2, 'name1', 'password1', DATETIME('now'), DATETIME('now'));
INSERT INTO users (user_permission_id, name, password, created_at, updated_at) VALUES (2, 'name2', 'password2', DATETIME('now'), DATETIME('now'));
