CREATE TABLE IF NOT EXISTS comment (
id  INTEGER PRIMARY KEY AUTOINCREMENT,
post_id  INTEGER NOT NULL,
comment TEXT NOT NULL,
FOREIGN KEY (post_id) REFERENCES post(id)
);


CREATE TABLE IF NOT EXISTS post (
id  INTEGER PRIMARY KEY AUTOINCREMENT,
txt TEXT NOT NULL
);


INSERT INTO post (txt) VALUES ("post1");
INSERT INTO post (txt) VALUES ("post2");
INSERT INTO post (txt) VALUES ("post3");
INSERT INTO post (txt) VALUES ("post4");
INSERT INTO post (txt) VALUES ("post5");
INSERT INTO post (txt) VALUES ("post10000000000000000000000");



INSERT INTO comment (post_id, comment) VALUES (1, 'baz');
INSERT INTO comment (post_id, comment) VALUES (3, 'bazbaz');
INSERT INTO comment (post_id, comment) VALUES (5, 'bazbazbaz');



SELECT * FROM post JOIN comment ON post.id = comment.id;




SELECT * FROM post;
