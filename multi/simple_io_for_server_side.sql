-- DROP TABLE simple_io_for_server_side_main;


-- CREATE TABLE IF NOT EXISTS simple_io_for_server_side_main (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- main TEXT NOT NULL,
-- simple_io_for_server_side_comment_id INTEGER NOT NULL
-- );

-- DROP TABLE simple_io_for_server_side_comment;

-- CREATE TABLE IF NOT EXISTS simple_io_for_server_side_comment (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- comment TEXT NOT NULL
-- );


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


-- UPDATE simple_io_for_server_side_comment
-- SET comment = 'BAR'
-- WHERE
--     simple_io_for_server_side_comment.id =
--         (SELECT simple_io_for_server_side_main.simple_io_for_server_side_comment_ID
--          FROM simple_io_for_server_side_main
--          WHERE simple_io_for_server_side_main.simple_io_for_server_side_comment_ID = 1);


-- UPDATE simple_io_for_server_side_main
-- SET main = 'THISISDATASTRING'
-- WHERE
--     simple_io_for_server_side_main.simple_io_for_server_side_comment_id =
--         (SELECT simple_io_for_server_side_comment.id
--          FROM simple_io_for_server_side_comment
--          WHERE simple_io_for_server_side_comment.comment = 'sample comment 4');


-- DELETE FROM simple_io_for_server_side_comment
-- WHERE
--     simple_io_for_server_side_comment_id.id =
--     (SELECT simple_io_for_server_side_main.simple_io_for_server_side_comment_id
--         FROM simple_io_for_server_side_main
--         WHERE simple_io_for_server_side_main.id = ?);

-- DELETE FROM simple_io_for_server_side_main
-- WHERE simple_io_for_server_side_main.id = ?;


-- ALTER TABLE simple_io_for_server_side_main RENAME TO simple_io_for_server_side_main_temp_temp;
-- CREATE TABLE IF NOT EXISTS simple_io_for_server_side_main (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- main TEXT NOT NULL,
-- simple_io_for_server_side_comment_id INTEGER
-- );
-- INSERT INTO simple_io_for_server_side_main(
-- id,
-- main,
-- simple_io_for_server_side_comment_id
-- ) SELECT
-- id,
-- main,
-- simple_io_for_server_side_comment_id
-- FROM simple_io_for_server_side_main_temp_temp;
-- DROP TABLE simple_io_for_server_side_main_temp_temp;

-- select * from sqlite_master;


SELECT *
FROM simple_io_for_server_side_main
JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_main.simple_io_for_server_side_comment_id = simple_io_for_server_side_comment.id;