DROP TABLE IF EXISTS blog_db;

CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) UNIQUE,
  `summary` varchar(255) DEFAULT NULL,
  `author` varchar(100),
  `content` text
) ENGINE=InnoDB AUTO_INCREMENT=3306 DEFAULT CHARSET=utf8mb4;