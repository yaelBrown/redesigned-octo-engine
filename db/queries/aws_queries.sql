show databases;

create database blog_db;

use blog_db;

CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) UNIQUE,
  `summary` varchar(255) DEFAULT NULL,
  `author` varchar(100),
  `content` text
) ENGINE=InnoDB AUTO_INCREMENT=3306 DEFAULT CHARSET=utf8mb4;

show tables;

show create table posts;


drop database blog_db;


select * from posts;

alter table posts add column post_type ENUM('money', 'crypto', 'finEd') default 'money';