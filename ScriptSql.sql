create database dashboard;
use dashboard;
create table User(
	IdUser int NOT NULL auto_increment,
    Nick varchar(100),
    Password varchar(100),
    FirstName varchar(100),
    LastName varchar(100),
    PRIMARY KEY (IdUser)
);


INSERT INTO User (Nick, Password, FirstName, LastName) VALUES
('usuario1', 'contrasena1', 'John', 'Doe'),
('usuario2', 'contrasena2', 'Alice', 'Smith'),
('usuario3', 'contrasena3', 'Michael', 'Johnson'),
('usuario4', 'contrasena4', 'Emily', 'Davis'),
('usuario5', 'contrasena5', 'Daniel', 'Wilson');

select * from User;