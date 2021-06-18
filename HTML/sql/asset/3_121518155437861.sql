SELECT * FROM actor LEFT JOIN film_actor ON film_actor.actor_id = actor.actor_id LEFT JOIN film ON film.film_id = film_actor.film_id;

SELECT * FROM film LEFT JOIN film_actor ON film_actor.film_id = film.film_id LEFT JOIN actor ON actor.actor_id = film_actor.actor_id where film.film_id = 100;

select film.film_title, count(*) from film join film_actor on film.film_id = film_actor.film_id group by film.film_title order by count(*) desc;

SELECT * FROM (SELECT * FROM actor where actor_id <= 5 union SELECT * FROM actor where actor_id >= 500) ORDER BY actor_id ASC;

SELECT * FROM actor where actor_id > SELECT AVG(actor_id);

SELECT * FROM (SELECT * FROM actor where actor_id <= 5
union SELECT * FROM actor where actor_id >= 500) ORDER BY actor_id ASC;