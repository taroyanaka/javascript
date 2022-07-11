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

SELECT
    info,
    uuid.uuid
FROM 
    lorem
JOIN uuid
    ON uuid_rowid = uuid.rowid;


