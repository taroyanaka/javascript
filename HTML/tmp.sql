create table tableA
(
tableA_id tinyint(3) not null auto_increment,
last_update timestamp not null,
primary key(tableA_id)
);


create table tableB
(
tableB_id tinyint(3) not null auto_increment,
tableA_id tinyint(3),
last_update timestamp, 
primary key(tableB_id),
foreign key(tableA_id) references tableA(tableA_id)
);


INSERT INTO tableA VALUES (1,'2006-02-15 04:34:33'),(2,'2006-02-15 04:34:33'),(3,'2006-02-15 04:34:33'),(4,'2006-02-15 04:34:33'),(5,'2006-02-15 04:34:33');
INSERT INTO tableB VALUES (1,1,'2006-02-15 04:34:33'),(2,1,'2006-02-15 04:34:33'),(3,1,'2006-02-15 04:34:33'),(4,4,'2006-02-15 04:34:33'),(5,1,'2006-02-15 04:34:33'),(6,5,'2006-02-15 04:34:33');
SELECT * FROM tableA JOIN tableB ON tableB.tableA_id=tableA.tableA_id;


-- select * from tableA;
-- show tables
-- SHOW COLUMNS FROM tableB;