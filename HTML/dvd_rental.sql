-- https://raw.githubusercontent.com/Shrsh/DVD_Rental-Database/master/dvd_rental.sql
create table actor
(
actor_id smallint(5) unsigned not null,
first_name varchar(50),
last_name varchar(50),
lastupdate timestamp,
primary key(actor_id)
);

create table language
(
language_id tinyint(3) not null auto_increment,
name varchar(50),
last_update timestamp not null,
primary key(language_id, name)
);

create table film
(
film_id smallint(5) not null auto_increment,
title varchar(255) not null, 
description TEXT default null,
release_year year default null, 
language_id tinyint(3) not null, 
original_language_id tinyint(3) not null, 
rental_duration tinyint(3) not null, 
rental_rate decimal(4,2) not null, 
length smallint(5),
replacement_cost decimal(5,2) not null, 
rating enum('U', 'UA', 'A') default null, 
special_features set('trailers','commentaries', 'deleted scenes', 'behind the scenes'),
last_update timestamp,
primary key(film_id),
foreign key(language_id) references language(language_id),
foreign key(original_language_id) references language(language_id)
);

create table film_actor
(
actor_id smallint(5) unsigned not null , 
film_id smallint(5) not null ,
last_update timestamp, 
primary key(actor_id, film_id),
foreign key(actor_id) references actor(actor_id),
foreign key(film_id) references film(film_id)
);

create table category(
category_id tinyint(3) not null auto_increment, 
name varchar(25) not null, 
last_update timestamp not null, 
primary key(category_id)
);

create table film_category
(
film_id smallint(5) not null, 
category_id tinyint(3) not null, 
last_update timestamp, 
primary key(film_id, category_id), 
foreign key(category_id) references category(category_id),
foreign key(film_id) references film(film_id)
);

create table film_text
(
film_id smallint(6),
title varchar(25),
description TEXT,
primary key(film_id)
);

create table country
(
country_id smallint(5) not null auto_increment,
country varchar(50) not null, 
last_update timestamp,
primary key(country_id)
);

create table city
(
city_id smallint(5) not null auto_increment,
city varchar(50) not null, 
country_id smallint(5), 
last_update timestamp,
primary key(city_id), 
foreign key(country_id) references country(country_id)
);

create table address
(
address_id smallint(5) not null auto_increment,
address varchar(50) not null , 
address2 varchar(50),
district varchar(20), 
city_id smallint(5), 
postal_code varchar(20), 
phone varchar(20) not null, 
last_update timestamp not null, 
primary key(address_id) ,
foreign key(city_id) references city(city_id)
);

create table store
(
store_id tinyint(3) not null auto_increment,
manager_staff_id tinyint(3),
address_id smallint(5),
last_update timestamp,
primary key(store_id)
-- foreign key(manager_staff_id) references staff(staff_id),
-- foreign key(address_id) references address(address_id)
);

create table staff
(
staff_id tinyint(3) auto_increment, 
first_name varchar(45) not null, 
last_name varchar(45) not null, 
address_id smallint(5), 
picture blob, 
email varchar(50), 
store_id tinyint(3), 
active tinyint(3) not null,
username varchar(16) not null, 
password varchar(40), 
last_update timestamp, 
primary key(staff_id)
-- foreign key(store_id) references store(store_id),
-- foreign key(address_id) references address(address_id)
);

create table inventory
(
inventory_id mediumint(4) not null auto_increment, 
film_id smallint(5) not null, 
store_id tinyint(3) not null, 
last_update timestamp,
primary key(inventory_id)
-- foreign key(store_id) references store(store_id),
-- foreign key(film_id) references film(film_id)
);

create table customer
(
customer_id smallint(5) not null auto_increment,
store_id tinyint(3) not null,
first_name varchar(45) not null, 
last_name varchar(45) not null , 
email varchar(50),
address_id smallint(5) not null, 
active tinyint(1) not null,
create_date datetime not null, 
last_update timestamp,
primary key(customer_id),
foreign key(address_id) references address(address_id),
foreign key(store_id) references store(store_id) 
);

create table rental
(
rental_id int(11) not null auto_increment, 
rental_date datetime,
inventory_id mediumint(8) not null,
customer_id smallint(5) not null,
return_date datetime,
staff_id tinyint(3), 
last_update timestamp,
primary key(rental_id)
-- foreign key(inventory_id) references inventory(inventory_id),
-- foreign key(customer_id) references customer(customer_id),
-- foreign key(staff_id) references staff(staff_id)
);

create table payment
(
payment_id smallint(5) not null auto_increment,
customer_id smallint(5) not null,
staff_id tinyint(3) not null, 
rental_id int(11) not null,
amount decimal(5,2),
payment_date datetime, 
last_update timestamp,
primary key(payment_id),
foreign key(rental_id) references rental(rental_id),
foreign key(customer_id) references customer(customer_id),
foreign key(staff_id) references staff(staff_id)
);

alter table store add foreign key(manager_staff_id) references staff(staff_id);
alter table store add foreign key(address_id) references address(address_id);
alter table staff add foreign key(store_id) references store(store_id);
alter table staff add foreign key(address_id) references address(address_id);
alter table inventory add foreign key(store_id) references store(store_id);
alter table inventory add foreign key(film_id) references film(film_id);
alter table rental add  foreign key(inventory_id) references inventory(inventory_id);
alter table rental add foreign key(customer_id) references customer(customer_id);
alter table rental add foreign key(staff_id) references staff(staff_id);