SELECT * FROM table_name1;
SELECT DISTINCT column_name1;
SELECT column_name1, column_name2 FROM table_name1 WHERE condition1;
SELECT * FROM table_name1 WHERE condition1 AND condition2;
SELECT * FROM table_name1 WHERE condition1 OR condition2;
SELECT * FROM table_name1 WHERE NOT condition1;
SELECT * FROM table_name1 WHERE condition1 AND (condition2 OR condition13);
SELECT * FROM table_name1 WHERE EXISTS (SELECT column_name1 FROM table_name1 WHERE condition1);
SELECT * FROM table_name1 ORDER BY column_name1;
SELECT * FROM table_name1 ORDER BY column_name1 DESC;
SELECT * FROM table_name1 ORDER BY column_name1 ASC, column_name2 DESC;
SELECT TOP number columns_names FROM table_name1 WHERE condition1;
SELECT * FROM Products WHERE (column_name1 BETWEEN value1 AND value2) AND NOT column_name2 IN (value3, value4);
SELECT * FROM Products WHERE column_name1 BETWEEN value1 AND value2;
SELECT * FROM table_name1 WHERE column_name1 IS NULL;
SELECT * FROM table_name1 WHERE column_name1 IS NOT NULL;
SELECT column_name1 AS alias_name FROM table_name1;
SELECT column_name1 FROM table_name1 AS alias_name;
SELECT column_name1 AS alias_name1, column_name2 AS alias_name2;
SELECT column_name1, column_name2 + ', ' + column_name3 AS alias_name;
SELECT column_name1, COUNT(column_name2) FROM table_name1 WHERE condition1 GROUP BY column_name1 ORDER BY
COUNT(column_name2) DESC;
UPDATE table_name1 SET column_name1 = value1, column_name2 = value2 WHERE condition1;
UPDATE table_name1 SET column_name1 = value;
DELETE FROM table_name1 WHERE condition1;
DELETE * FROM table_name1;
SELECT COUNT (DISTINCT column_name1);
SELECT AVG (column_name1) FROM table_name1 WHERE condition1;
SELECT SUM (column_name1) FROM table_name1 WHERE condition1;
SELECT column_names FROM table_name1 WHERE column_name1 IN (value1, value2, …);
SELECT column_names FROM table_name1 WHERE column_name1 IN (SELECT STATEMENT);
SELECT column_names FROM table_name1 WHERE column_name1 BETWEEN value1 AND value2;
SELECT MIN (column_names) FROM table_name1 WHERE condition;
SELECT MAX (column_names) FROM table_name1 WHERE condition;
SELECT column_names FROM table_name1 INNER JOIN table_name2 ON table_name1.column_name1=table_name2.column_name1;
SELECT column_names FROM table_name1 LEFT JOIN table_name2 ON table_name1.column_name1=table_name2.column_name1;
SELECT column_names FROM table_name1 RIGHT JOIN table_name2 ON table_name1.column_name1=table_name2.column_name1;
SELECT column_names FROM table_name1 FULL OUTER JOIN table_name2 ON table_name1.column_name1=table_name2.column_name1;
SELECT column_names FROM table_name1 T1, table_name1 T2 WHERE condition;



SELECT table_name1.column_name1, table_name2.column_name2, table3.column_name3 FROM ((table_name1 INNER JOIN table_name2 ON relationship)
INNER JOIN table3 ON relationship);

CREATE VIEW view_name AS SELECT column_name1, column_name2 FROM table_name WHERE condition1;
SELECT * FROM view_name;



create view top_five_genres as
select cat.name category_name, sum( IFNULL(pay.amount, 0) ) revenue from category cat left join film_category flm_cat on
cat.category_id = flm_cat.category_id left join film fil on flm_cat.film_id = fil.film_id left join inventory inv on
fil.film_id = inv.film_id left join rental ren on inv.inventory_id = ren.inventory_id left join payment pay on
ren.rental_id = pay.rental_id group by cat.name order by revenue desc limit 5;
