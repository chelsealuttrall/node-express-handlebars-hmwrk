CREATE DATABASE fourteeners_db;
USE fourteeners_db;

CREATE TABLE fourteeners
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(15) NOT NULL,
	climbed BOOLEAN DEFAULT false,
    climber varchar(20),
	PRIMARY KEY (id)
);
