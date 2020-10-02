CREATE DATEBASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(30) NOT NULL,
    devour BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)