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
-- Table structure for labels
-- ----------------------------
DROP TABLE IF EXISTS `labels`;
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
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (1, '餐饮', 'food', 0, '2024-09-13 21:07:23.089808', '2024-09-13 21:07:23.089808', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (2, '服饰', 'clothes', 0, '2024-09-13 21:07:23.173990', '2024-09-13 21:07:23.173990', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (3, '交通', 'traffic', 0, '2024-09-13 21:07:23.175464', '2024-09-13 21:07:23.175464', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (4, '蔬菜', 'vegetables', 0, '2024-09-13 21:07:23.181027', '2024-09-13 21:07:23.181027', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (5, '零食', 'snacks', 0, '2024-09-13 21:07:23.182571', '2024-09-13 21:07:23.182571', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (6, '水果', 'fruits', 0, '2024-09-13 21:07:23.183630', '2024-09-13 21:07:23.183630', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (7, '通讯', 'communication', 0, '2024-09-13 21:07:23.191926', '2024-09-13 21:07:23.191926', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (8, '购物', 'shopping', 0, '2024-09-13 21:07:23.197717', '2024-09-13 21:07:23.197717', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (9, '日用', 'daily-necessities', 0, '2024-09-13 21:07:23.202993', '2024-09-13 21:07:23.202993', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (10, '运动', 'sport', 0, '2024-09-13 21:07:23.203406', '2024-09-13 21:07:23.203406', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (11, '娱乐', 'fun', 0, '2024-09-13 21:07:23.204025', '2024-09-13 21:07:23.204025', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (12, '美容', 'cosmetology', 0, '2024-09-13 21:07:23.238901', '2024-09-13 21:07:23.238901', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (13, '社交', 'social', 0, '2024-09-13 21:07:23.245597', '2024-09-13 21:07:23.245597', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (14, '家庭', 'housing', 0, '2024-09-13 21:07:23.247120', '2024-09-13 21:07:23.247120', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (15, '旅行', 'travel', 0, '2024-09-13 21:07:23.249941', '2024-09-13 21:07:23.249941', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (16, '数码', 'digital', 0, '2024-09-13 21:07:23.251010', '2024-09-13 21:07:23.251010', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (17, '汽车', 'car', 0, '2024-09-13 21:07:23.266284', '2024-09-13 21:07:23.266284', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (18, '书籍', 'book', 0, '2024-09-13 21:07:23.276599', '2024-09-13 21:07:23.276599', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (19, '学习', 'tuition', 0, '2024-09-13 21:07:23.278173', '2024-09-13 21:07:23.278173', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (20, '宠物', 'pets', 0, '2024-09-13 21:07:23.278609', '2024-09-13 21:07:23.278609', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (21, '礼金', 'cash-gift', 0, '2024-09-13 21:07:23.281612', '2024-09-13 21:07:23.281612', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (22, '办公', 'work', 0, '2024-09-13 21:07:23.307943', '2024-09-13 21:07:23.307943', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (23, '彩票', 'lottery', 0, '2024-09-13 21:07:23.310753', '2024-09-13 21:07:23.310753', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (24, '快递', 'express', 0, '2024-09-13 21:07:23.317215', '2024-09-13 21:07:23.317215', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (25, '设置', 'bonus', 0, '2024-09-13 21:07:23.319379', '2024-09-13 21:07:23.319379', NULL);
INSERT INTO `labels` (`id`, `name`, `icon`, `pid`, `updatedAt`, `createdAt`, `userId`) VALUES (26, '其他', 'bonus', 0, '2024-09-13 21:07:23.322764', '2024-09-13 21:07:23.322764', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
