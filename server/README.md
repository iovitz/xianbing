# 项目文档

[TOC]

## 开发启动

STEP 1：安装pnpm，项目使用pnpm管理依赖包，需要先安装pnpm

```shell
npm i pnpm -g
```

STEP 2：使用pnpm安装依赖

```shell
pnpm install
```

STEP 3：准备数据文件

STEP 4：运行项目

```shell
pnpm dev
```

## 技术选型

* MidwayJS
  * [midwayjs](https://midwayjs.org/docs/intro)
  * [@midwayjs/swagger](https://midwayjs.org/docs/decorator_index#midwayjsswagger)
  * [@midwayjs/typeorm](https://midwayjs.org/docs/extensions/orm)
  * [typeorm](https://typeorm.io/)
  * [@midwayjs/validate](https://midwayjs.org/docs/hooks/validate)
  * [zod](https://zod.dev/)
  * [@midwayjs/socketio](https://midwayjs.org/docs/extensions/socketio)
  * [socket.io](https://socket.io/docs/v4/)
* 其他
  * [lodash工具库](https://www.npmjs.com/package/lodash)
  * [nanoid生成唯一ID](https://www.npmjs.com/package/nanoid)
  * [svg-captcha生成验证码](https://www.npmjs.com/package/svg-captcha)
  * [crypto-js字符串加密](https://www.npmjs.com/package/crypto-js)
  * [bcryptjs密码加密](https://www.npmjs.com/package/bcryptjs)
  * [octokit](https://www.npmjs.com/package/octokit)

## 项目规范

### 代码规范

---

### 日志

打印日志时避免日志中出现换行符号，不利于日志查看

### 数据库定义规范

思考数据量的大小

### 依赖规范

所有的依赖必须指定版本

### Git规范

#### 分支模型

##### 开发分支develop

主要代码分支

##### 线上分支release-XX

线上代码分支

##### 需求分支feat-xx

##### BUG修复分支fix-xx

##### 重构分支refactor-xx

#### 提交信息规范

> [提交信息规范文档](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

### 发版规范
