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