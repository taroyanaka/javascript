CREATE TABLE IF NOT EXISTS any (
txt TEXT NOT NULL,
service TEXT NOT NULL,
created_at DATETIME DEFAULT (datetime('now', 'localtime'))
);