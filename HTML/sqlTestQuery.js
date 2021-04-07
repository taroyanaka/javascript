// https://paiza.io/en/projects/new?language=mysql
// browser console

const sqlTestQuery = `SELECT * FROM table_name;
SELECT DISTINCT column_name;
SELECT column1, column2 FROM table_name WHERE condition;
SELECT * FROM table_name WHERE condition1 AND condition2;
SELECT * FROM table_name WHERE condition1 OR condition2;
SELECT * FROM table_name WHERE NOT condition;
SELECT * FROM table_name WHERE condition1 AND (condition2 OR condition3);
SELECT * FROM table_name WHERE EXISTS (SELECT column_name FROM table_name WHERE condition);
SELECT * FROM table_name ORDER BY column;
SELECT * FROM table_name ORDER BY column DESC;
SELECT * FROM table_name ORDER BY column1 ASC, column2 DESC;
SELECT TOP number columns_names FROM table_name WHERE condition;
SELECT TOP percent columns_names FROM table_name WHERE condition;
Not all database systems support SELECT TOP. The MySQL equivalent is the LIMIT clause
SELECT column_names FROM table_name LIMIT offset, count;
% (percent sign) is a wildcard character that represents zero, one, or multiple characters
_ (underscore) is a wildcard character that represents a single character
SELECT column_names FROM table_name WHERE column_name LIKE pattern;
LIKE 'a%' (find any values that start with "a")
LIKE '%a' (find any values that end with "a")
LIKE '%or%' (find any values that have "or" in any position)
LIKE '_r%' (find any values that have "r" in the second position)
LIKE 'a_%_%' (find any values that start with "a" and are at least 3 characters in length)
LIKE '[a-c]%' (find any values starting with "a", "b", or "c"
essentially the IN operator is shorthand for multiple OR conditions
SELECT column_names FROM table_name WHERE column_name IN (value1, value2, …);
SELECT column_names FROM table_name WHERE column_name IN (SELECT STATEMENT);
SELECT column_names FROM table_name WHERE column_name BETWEEN value1 AND value2;
SELECT * FROM Products WHERE (column_name BETWEEN value1 AND value2) AND NOT column_name2 IN (value3, value4);
SELECT * FROM Products WHERE column_name BETWEEN #01/07/1999# AND #03/12/1999#;
SELECT * FROM table_name WHERE column_name IS NULL;
SELECT * FROM table_name WHERE column_name IS NOT NULL;
SELECT column_name AS alias_name FROM table_name;
SELECT column_name FROM table_name AS alias_name;
SELECT column_name AS alias_name1, column_name2 AS alias_name2;
SELECT column_name1, column_name2 + ', ' + column_name3 AS alias_name;
Each SELECT statement within UNION must have the same number of columns
The columns must have similar data types
The columns in each SELECT statement must also be in the same order
SELECT columns_names FROM table1 UNION SELECT column_name FROM table2;
UNION operator only selects distinct values, UNION ALL will allow duplicates
Generally used the same way as UNION above
SELECT columns_names FROM table1 INTERSECT SELECT column_name FROM table2;
Generally used the same way as UNION above
SELECT columns_names FROM table1 EXCEPT SELECT column_name FROM table2;
The ANY operator returns true if any subquery values meet the condition
The ALL operator returns true if all subquery values meet the condition
SELECT columns_names FROM table1 WHERE column_name operator (ANY|ALL) (SELECT column_name FROM table_name WHERE condition);
SELECT column_name1, COUNT(column_name2) FROM table_name WHERE condition GROUP BY column_name1 ORDER BY COUNT(column_name2) DESC;
SELECT COUNT(column_name1), column_name2 FROM table GROUP BY column_name2 HAVING COUNT(column_name1) > 5;
WITH RECURSIVE cte AS (
  SELECT c0.* FROM categories AS c0 WHERE id = 1 # Starting point
  UNION ALL
  SELECT c1.* FROM categories AS c1 JOIN cte ON c1.parent_category_id = cte.id
)
SELECT *
FROM cte
INSERT INTO table_name (column1, column2) VALUES (value1, value2);
INSERT INTO table_name VALUES (value1, value2 …);
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
UPDATE table_name SET column_name = value;
DELETE FROM table_name WHERE condition;
DELETE * FROM table_name;
SELECT COUNT (DISTINCT column_name);
SELECT MIN (column_names) FROM table_name WHERE condition;
SELECT MAX (column_names) FROM table_name WHERE condition;
SELECT AVG (column_name) FROM table_name WHERE condition;
SELECT SUM (column_name) FROM table_name WHERE condition;
SELECT column_names FROM table1 INNER JOIN table2 ON table1.column_name=table2.column_name;
SELECT table1.column_name1, table2.column_name2, table3.column_name3 FROM ((table1 INNER JOIN table2 ON relationship) INNER JOIN table3 ON relationship);
SELECT column_names FROM table1 LEFT JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_names FROM table1 RIGHT JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_names FROM table1 FULL OUTER JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_names FROM table1 T1, table1 T2 WHERE condition;
CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;
SELECT * FROM view_name;
DROP VIEW view_name;
ALTER TABLE table_name ADD column_name column_definition;
ALTER TABLE table_name MODIFY column_name column_type;
ALTER TABLE table_name DROP COLUMN column_name;
CREATE TABLE table_name ( 
column1 datatype, 
column2 datatype, 
column3 datatype, 
column4 datatype, 
);`