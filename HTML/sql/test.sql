CREATE TABLE actor (
actor_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
actor_name TEXT NOT NULL,
PRIMARY KEY (actor_id)
);

CREATE TABLE film (
film_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
film_title TEXT NOT NULL,
PRIMARY KEY (film_id)
);

CREATE TABLE film_actor (
actor_id INT UNSIGNED NOT NULL,
film_id INT UNSIGNED NOT NULL,
PRIMARY KEY (actor_id, film_id),
FOREIGN KEY (actor_id) REFERENCES actor (actor_id),
FOREIGN KEY (film_id) REFERENCES film (film_id)
);

