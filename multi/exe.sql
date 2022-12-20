-- $ cp ~/Desktop/npm_package/better-sqlite3/exe.sql ./;cp ~/Desktop/npm_package/better-sqlite3/.data/tmp3.sqlite3 ./

-- $ sqlite3 .data/tmp3.sqlite3
-- sqlite> .read ./exe.sql

-- DROP TABLE IF EXISTS uuid;
-- CREATE TABLE IF NOT EXISTS uuid (
--     uuid TEXT NOT NULL
-- );

-- DROP TABLE IF EXISTS lorem;
-- CREATE TABLE IF NOT EXISTS lorem (
--     info TEXT NOT NULL,
--     uuid_rowid NUMBER NOT NULL
-- );

-- INSERT INTO uuid (uuid) values("foo");
-- INSERT INTO uuid (uuid) values("bar");
-- INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT1", 1);
-- INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT1", 2);
-- INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT10", 1);
-- INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT10", 2);

-- INSERT INTO lorem (info, uuid_rowid)
--     VALUES(
--         "A two dimensional square appears that duplicates a section of the ice pattern.", 
--         (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "bar")
--     );
-- INSERT INTO lorem (info, uuid_rowid)
--     VALUES(
--         "The circle bulges outward... separating from the cube.", 
--         (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo")
--     );

-- UPDATE lorem
-- SET info = "filling the frame."
-- WHERE
--     lorem.rowid = 1
--     AND
--     lorem.uuid_rowid =
--         (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo");

-- DELETE
-- FROM lorem
-- WHERE
--     lorem.rowid = 4
--     AND
--     lorem.uuid_rowid =
--         (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo");

-- SELECT
--     lorem.rowid,
--     info,
--     uuid.uuid
-- FROM lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid
-- WHERE uuid.uuid = "bar";

-- SELECT
--     lorem.rowid,
--     info
-- FROM lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid
-- WHERE uuid.uuid = "foo";

-- SELECT
--     lorem.rowid,
--     info,
--     (SELECT uuid.uuid FROM uuid WHERE uuid.rowid = lorem.uuid_rowid) AS uuid
-- FROM lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid;

-- SELECT
--     lorem.rowid,
--     info,
--     uuid.uuid
-- FROM 
--     lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid;

-- SELECT
--     lorem.rowid,
--     info,
--     uuid.uuid
-- FROM 
--     lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid;













PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS simple_io_for_server_side_comment;
CREATE TABLE IF NOT EXISTS simple_io_for_server_side_comment (
id INTEGER PRIMARY KEY AUTOINCREMENT,
comment TEXT NOT NULL,
main_id INTEGER,
    FOREIGN KEY (main_id) REFERENCES simple_io_for_server_side_main(id)
);


DROP TABLE IF EXISTS simple_io_for_server_side_main;
CREATE TABLE IF NOT EXISTS simple_io_for_server_side_main (
id INTEGER PRIMARY KEY AUTOINCREMENT,
main TEXT NOT NULL
);



DROP TABLE IF EXISTS tag;
CREATE TABLE IF NOT EXISTS tag (
id INTEGER PRIMARY KEY AUTOINCREMENT,
tag TEXT NOT NULL
);

DROP TABLE IF EXISTS main_tag;
CREATE TABLE IF NOT EXISTS main_tag (
id INTEGER PRIMARY KEY AUTOINCREMENT,
main_id INTEGER NOT NULL,
tag_id INTEGER NOT NULL
);

DROP TABLE IF EXISTS comment_tag;
CREATE TABLE IF NOT EXISTS comment_tag (
id INTEGER PRIMARY KEY AUTOINCREMENT,
comment_id INTEGER NOT NULL,
tag_id INTEGER NOT NULL
);

insert into main_tag (main_id, tag_id) values (1,1);
insert into main_tag (main_id, tag_id) values (1,2);
insert into main_tag (main_id, tag_id) values (1,3);
insert into comment_tag (comment_id, tag_id) values (1,4);
insert into comment_tag (comment_id, tag_id) values (1,5);
insert into comment_tag (comment_id, tag_id) values (1,6);

insert into tag (tag) values ('TAG TEXT 1');
insert into tag (tag) values ('TAG TEXT 2');
insert into tag (tag) values ('TAG TEXT 3');
insert into tag (tag) values ('TAG TEXT 4');
insert into tag (tag) values ('TAG TEXT 5');
insert into tag (tag) values ('TAG TEXT 6');

insert into simple_io_for_server_side_main (main) values ('sample main 1_1');
insert into simple_io_for_server_side_main (main) values ('sample main 1_2');
insert into simple_io_for_server_side_main (main) values ('sample main 2_1');
insert into simple_io_for_server_side_main (main) values ('sample main 2_2');
insert into simple_io_for_server_side_main (main) values ('sample main 3_1');
insert into simple_io_for_server_side_main (main) values ('sample main 3_2');
insert into simple_io_for_server_side_main (main) values ('sample main 4_1');
insert into simple_io_for_server_side_main (main) values ('sample main 4_2');
insert into simple_io_for_server_side_main (main) values ('sample main 5_1');
insert into simple_io_for_server_side_main (main) values ('sample main 5_2');

insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 1', 1);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 2', 1);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 3', 1);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 4', 1);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 5', 1);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 6', 2);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 7', 2);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 8', 2);
insert into simple_io_for_server_side_comment (comment, main_id) values ('sample comment 9', 2);


-- UPDATE simple_io_for_server_side_main
-- SET simple_io_for_server_side_main.main = 'BARBARBAR'
-- WHERE
--     simple_io_for_server_side_main.id = 2
--     AND
--     simple_io_for_server_side_main.simple_io_for_server_side_comment_id =
--         (SELECT simple_io_for_server_side_comment.id
--          FROM simple_io_for_server_side_comment
--          WHERE simple_io_for_server_side_comment.comment = 'foo')
-- ;

-- UPDATE simple_io_for_server_side_comment
-- SET comment = 'BAR'
-- WHERE
--     simple_io_for_server_side_comment.id =
--         (SELECT simple_io_for_server_side_main.simple_io_for_server_side_comment_ID
--          FROM simple_io_for_server_side_main
--          WHERE simple_io_for_server_side_main.simple_io_for_server_side_comment_ID = 3)
-- ;

-- DELETE FROM simple_io_for_server_side_main
    -- WHERE simple_io_for_server_side_main.id = 2;
-- DELETE FROM simple_io_for_server_side_comment
    -- WHERE simple_io_for_server_side_comment.id = 11;

SELECT * FROM simple_io_for_server_side_main;
SELECT * FROM simple_io_for_server_side_comment;

SELECT *
FROM tag
JOIN main_tag ON tag.id = main_tag.tag_id
JOIN simple_io_for_server_side_main ON main_tag.main_id = simple_io_for_server_side_main.id;

SELECT *
FROM tag
JOIN comment_tag ON tag.id = comment_tag.tag_id
JOIN simple_io_for_server_side_comment ON comment_tag.comment_id = simple_io_for_server_side_comment.id;

-- SELECT *
-- FROM TABLE_A
-- LEFT JOIN cross_table ON TABLE_A.id = cross_table.TABLE_A_id
-- LEFT JOIN TABLE_B ON cross_table.TABLE_B_id = TABLE_B.id;


-- select * from sqlite_master;

