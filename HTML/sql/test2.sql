-- https://dba.stackexchange.com/questions/106001/are-junction-tables-a-good-practice

CREATE TABLE  `user` (
`id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
);

CREATE TABLE `user_location` (
  `user_id` int(11) NOT NULL,
  `location_id` int(11) NOT NULL
);

CREATE TABLE `location` (
`id` int(11) NOT NULL,
  `location` varchar(45),
);

SELECT * FROM users 
LEFT JOIN user_location 
ON user_location.user_id = user.id 
LEFT JOIN location
ON location.id = user_location.location_id;


SELECT * FROM actor
LEFT JOIN film_actor
ON film_actor.actor_id = actor.actor_id
LEFT JOIN film
ON film.film_id = film_actor.film_id;

SELECT * FROM film 
LEFT JOIN film_actor 
ON film_actor.film_id = film.film_id
LEFT JOIN actor
ON actor.actor_id = film_actor.actor_id;


SELECT * FROM actor;
SELECT * FROM film;
SELECT * FROM film_actor;


SELECT * FROM film LEFT JOIN film_actor ON film_actor.film_id = film.film_id LEFT JOIN actor ON actor.actor_id = film_actor.actor_id;

SELECT * FROM actor LEFT JOIN film_actor ON film_actor.actor_id = actor.actor_id LEFT JOIN film ON film.film_id = film_actor.film_id;