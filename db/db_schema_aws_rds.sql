DROP TABLE IF EXISTS blog_db;

CREATE TABLE `posts` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT UNIQUE,
  `summary` varchar(255) DEFAULT NULL,
  `author` varchar(100) DEFAULT,
  `content` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=3306 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;