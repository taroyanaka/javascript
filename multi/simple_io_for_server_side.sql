CREATE TABLE IF NOT EXISTS simple_io_for_server_side_main (
id INTEGER PRIMARY KEY AUTOINCREMENT,
main TEXT NOT NULL,
simple_io_for_server_side_comment_id INTEGER NOT NULL
)


CREATE TABLE IF NOT EXISTS simple_io_for_server_side_comment (
id INTEGER PRIMARY KEY AUTOINCREMENT,
comment TEXT NOT NULL
)


insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 1_1', 1);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 1_2', 10);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 2_1', 2);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 2_2', 20);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 3_1', 3);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 3_2', 30);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 4_1', 4);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 4_2', 40);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 5_1', 5);
insert into simple_io_for_server_side_main (main, simple_io_for_server_side_comment_id) values ('sample main 5_2', 50);

insert into table2 (comment) values ('sample comment 1');
insert into table2 (comment) values ('sample comment 2');
insert into table2 (comment) values ('sample comment 3');
insert into table2 (comment) values ('sample comment 4');
insert into table2 (comment) values ('sample comment 5');
insert into table2 (comment) values ('sample comment 6');
insert into table2 (comment) values ('sample comment 7');
insert into table2 (comment) values ('sample comment 8');

SELECT *
FROM simple_io_for_server_side_main
JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_comment.simple_io_for_server_side_comment_id = simple_io_for_server_side_comment.id;

UPDATE simple_io_for_server_side_main
INNER JOIN simple_io_for_server_side_comment
ON simple_io_for_server_side_main.simple_io_for_server_side_comment_id = simple_io_for_server_side_comment.id
SET simple_io_for_server_side_main.main = 'foo';
-- , simple_io_for_server_side_main.text2 = table2.text2;

-- DROP TABLE simple_io_for_server_side_main
-- DROP TABLE simple_io_for_server_side_comment