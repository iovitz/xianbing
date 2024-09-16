/*
 Navicat Premium Dump SQL

 Source Server         : 开发
 Source Server Type    : MySQL
 Source Server Version : 80037 (8.0.37)
 Source Host           : mysql.sqlpub.com:3306
 Source Schema         : duuk_server

 Target Server Type    : MySQL
 Target Server Version : 80037 (8.0.37)
 File Encoding         : 65001

 Date: 13/09/2024 21:10:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure forlabel
-- ----------------------------
DROP TABLE IF EXISTS `label`;
CREATE TABLE `labels` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `name` varchar(255) NOT NULL COMMENT '标签名称',
  `icon` varchar(255) DEFAULT NULL COMMENT '标签图标',
  `pid` int NOT NULL DEFAULT '0' COMMENT '父级标签ID',
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` varchar(10) DEFAULT NULL COMMENT '雪花ID',
  PRIMARY KEY (`id`),
  KEY `FK_f31f88025417e09223ea9a66b0b` (`userId`),
  CONSTRAINT `FK_f31f88025417e09223ea9a66b0b` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of labels
-- ----------------------------
BEGIN;
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (1, '餐饮', 'food', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (2, '服饰', 'clothes', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (3, '交通', 'traffic', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (4, '蔬菜', 'vegetables', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (5, '零食', 'snacks', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (6, '水果', 'fruits', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (7, '通讯', 'communication', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (8, '购物', 'shopping', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (9, '日用', 'daily-necessities', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (10, '运动', 'sport', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (11, '娱乐', 'fun', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (12, '美容', 'cosmetology', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (13, '社交', 'social', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (14, '家庭', 'housing', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (15, '旅行', 'travel', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (16, '数码', 'digital', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (17, '汽车', 'car', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (18, '书籍', 'book', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (19, '学习', 'tuition', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (20, '宠物', 'pets', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (21, '礼金', 'cash-gift', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (22, '办公', 'work', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (23, '彩票', 'lottery', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (24, '快递', 'express', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (25, '设置', 'bonus', 0);
INSERT INTO `label` (`id`, `name`, `icon`, `pid`) VALUES (26, '其他', 'bonus', 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
