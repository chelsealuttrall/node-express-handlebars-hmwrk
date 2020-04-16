DROP DATABASE if exists fourteeners_db;
CREATE DATABASE fourteeners_db;
USE fourteeners_db;

CREATE TABLE fourteeners
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(15) NOT NULL,
	climbed BOOLEAN DEFAULT false,
   
	PRIMARY KEY (id)
);
