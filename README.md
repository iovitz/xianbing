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

* Egg.JS
  * [egg](https://eggjs.github.io/zh/guide/)
  * [egg-cors](https://www.npmjs.com/package/egg-cors)
  * [egg-router-plus](https://www.npmjs.com/package/egg-router-plus)
  * [egg-scripts](https://www.npmjs.com/package/egg-scripts)
  * [egg-sequelize](https://www.npmjs.com/package/egg-sequelize)
  * [egg-socket.io](https://www.npmjs.com/package/egg-socket.io)
  * [egg-validate](https://www.npmjs.com/package/egg-validate)
  * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* 数据库
  * [sqlite3](https://doc.yonyoucloud.com/doc/wiki/project/sqlite/sqlite-intro.html)
  * [sequelize模型基础](https://sequelize.org/docs/v6/core-concepts/model-basics/)
  * [sequelize模型实例](https://sequelize.org/docs/v6/core-concepts/model-instances/)
  * [sequelize模型查找基础](https://bytedance.larkoffice.com/base/CXdZbP45Oa48XdsFA0OcT7UMnff?table=tblHRFovMdEBWfPX&view=vewGfISRsr)
  * [sequelize模型查找器](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/)
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

单条日志尽量不要分多行打印，不利于日志查看排查

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
