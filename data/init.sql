-- 删除表
DROP TABLE IF EXISTS book;
DROP TABLE IF EXISTS author;
DROP TABLE IF EXISTS c2;
DROP TABLE IF EXISTS c1;
DROP TABLE IF EXISTS user;
-- 创建作者表
CREATE TABLE author (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(100) NOT NULL,
  `state` tinyint NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间'
) CHARACTER SET = utf8mb4;
-- 创建一级分类表
CREATE TABLE c1 (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(10) NOT NULL,
  `state` tinyint NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间'
) CHARACTER SET = utf8mb4;
-- 创建二级分类表
CREATE TABLE c2 (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(20) NOT NULL,
  `c1` int UNSIGNED NOT NULL,
  `state` tinyint UNSIGNED NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  CONSTRAINT `c2_fk_c1` FOREIGN KEY (`c1`) REFERENCES c1 (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) CHARACTER SET = utf8mb4;
-- 创建图书表
CREATE TABLE book (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(200) NOT NULL,
  `c1` int UNSIGNED NOT NULL,
  `c2` int UNSIGNED NOT NULL,
  `author` int UNSIGNED NOT NULL,
  `poster` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `state` tinyint UNSIGNED NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  CONSTRAINT `book_fk_c1` FOREIGN KEY (`c1`) REFERENCES c1 (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `book_fk_c2` FOREIGN KEY (`c2`) REFERENCES c2 (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `book_fk_author` FOREIGN KEY (`author`) REFERENCES author (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) CHARACTER SET = utf8mb4;
-- 创建用户表
CREATE TABLE user(
  `id` int UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '自增主键id',
  `name` varchar(20) NOT NULL COMMENT '昵称',
  `pwd` char(60) NOT NULL COMMENT 'Bcrypt加密的密码',
  `address` varchar(100) COMMENT '居住地',
  `state` tinyint COMMENT '是否可用',
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY(`id`)
) CHARACTER SET = utf8mb4 COMMENT = '用户表'