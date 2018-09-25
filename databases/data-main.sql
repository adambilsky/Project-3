DROP DATABASE IF EXISTS main_dataDB;

CREATE DATABASE main_dataDB;

USE main_dataDB;

CREATE TABLE studentsMain (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    emailDefault VARCHAR(30) NOT NULL,
    emailSecondary VARCHAR(30),
    school1 VARCHAR(40) NOT NULL,
    school1Program VARCHAR(40),
    degree1 VARCHAR(6),
    degree2 VARCHAR(6),
    degree3 VARCHAR(6),
    roleDirector BOOLEAN,
    roleProducer BOOLEAN,
    roleWriter BOOLEAN,
    roleActor BOOLEAN,
    roleDirPhoto BOOLEAN,
    roleCinematographer BOOLEAN,
    -- continue filling with data from Dan
    --


    PRIMARY KEY (id)
)

CREATE TABLE schoolsMain (
    id INT NOT NULL AUTO_INCREMENT,
    schoolName VARCHAR(40) NOT NULL,
    schoolContactFirst
    -- continue filling with data from Dan
    --

)

CREATE TABLE facultyMain (
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(40) NOT NULL,
    emailDefault VARCHAR(30) NOT NULL,
    emailSecondary VARCHAR(30),
)