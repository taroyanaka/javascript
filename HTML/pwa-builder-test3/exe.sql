-- $ sqlite3 .data/tmp3.sqlite3
-- sqlite> .read ./exe.sql

DROP TABLE IF EXISTS uuid;
CREATE TABLE IF NOT EXISTS uuid (
    uuid TEXT NOT NULL
);

DROP TABLE IF EXISTS lorem;
CREATE TABLE IF NOT EXISTS lorem (
    info TEXT NOT NULL,
    uuid_rowid NUMBER NOT NULL
);

INSERT INTO uuid (uuid) values("foo");
INSERT INTO uuid (uuid) values("bar");
INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT1", 1);
INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT1", 2);
INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT10", 1);
INSERT INTO lorem (info, uuid_rowid) values("FOOBARTEXT10", 2);

INSERT INTO lorem (info, uuid_rowid)
    VALUES(
        "A two dimensional square appears that duplicates a section of the ice pattern.", 
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "bar") -- => 2
    );
INSERT INTO lorem (info, uuid_rowid)
    VALUES(
        "The circle bulges outward... separating from the cube.", 
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo") -- => 1
    );

UPDATE lorem
SET info = "filling the frame."
WHERE
    lorem.rowid = 1
    -- lorem.rowid = (SELECT lorem.rowid FROM lorem WHERE lorem.info = "FOOBARTEXT1" AND lorem.uuid_rowid = 2);
    AND
    lorem.uuid_rowid =
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo");

-- SELECT
--     lorem.rowid,
--     info,
--     uuid.uuid
-- FROM 
--     lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid;









DELETE
FROM lorem
WHERE
    lorem.rowid = 4
    AND
    lorem.uuid_rowid =
        (SELECT uuid.rowid FROM uuid WHERE uuid.uuid = "foo");

-- SELECT
--     lorem.rowid,
--     info,
--     uuid.uuid
-- FROM 
--     lorem
-- JOIN uuid
--     ON uuid_rowid = uuid.rowid;

SELECT
    lorem.rowid,
    info,
    uuid.uuid
FROM 
    lorem
JOIN uuid
    ON uuid_rowid = uuid.rowid
WHERE uuid.uuid = "bar";




BEGIN TRANSACTION;

ALTER TABLE lorem RENAME TO tbl_temp;
DROP TABLE lorem;
CREATE TABLE lorem(id INTEGER PRIMARY KEY, info TEXT, uid_id INTEGER);
INSERT INTO lorem(info, uid_id) SELECT info, uid_rowid FROM tbl_temp;
DROP TABLE tbl_temp;

COMMIT;


BEGIN TRANSACTION;

ALTER TABLE uid RENAME TO tbl_temp;
DROP TABLE uid;
CREATE TABLE uid(id INTEGER PRIMARY KEY, uid TEXT);
INSERT INTO uid(uid) SELECT uid FROM tbl_temp;
DROP TABLE tbl_temp;

COMMIT;

-- SELECT * FROM uid;
-- SELECT * FROM lorem;

INSERT INTO lorem (info, uid_id) values("FOOBARTEXT1", 1);
INSERT INTO lorem (info, uid_id) values("FOOBARTEXT1", 2);
INSERT INTO lorem (info, uid_id) values("FOOBARTEXT10", 1);
INSERT INTO lorem (info, uid_id) values("FOOBARTEXT10", 2);
















-- CREATE TABLE IF NOT EXISTS simple_io_for_server_side_main (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- main TEXT NOT NULL,
-- simple_io_for_server_side_comment_id INTEGER NOT NULL
-- )


-- CREATE TABLE IF NOT EXISTS simple_io_for_server_side_comment (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- comment TEXT NOT NULL
-- )


-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 1_1', 1);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 1_2', 10);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 2_1', 2);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 2_2', 20);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 3_1', 3);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 3_2', 30);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 4_1', 4);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 4_2', 40);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 5_1', 5);
-- insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 5_2', 50);

-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 1');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 2');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 3');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 4');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 5');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 6');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 7');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 8');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 9');
-- insert into simple_io_for_server_side_comment (comment) values ('sample comment 10');


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

-- SELECT *
-- FROM simple_io_for_server_side_main
-- JOIN simple_io_for_server_side_comment
-- ON
-- simple_io_for_server_side_main.simple_io_for_server_side_comment_id
--  = simple_io_for_server_side_comment.id
-- ;
