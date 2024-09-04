import { App, Inject, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { customAlphabet } from 'nanoid';
import { MysqlService } from '../db/mysql/mysql.service';
import { EncryptService } from './encrypt.service';
import { IdService } from './id.service';
import { UserService } from './user.service';
import * as uuid from 'uuid';

@Provide()
export class AuthService {
  @App()
  app: Application;

  @Inject()
  mysql: MysqlService;

  @Inject()
  id: IdService;

  @Inject()
  encrypt: EncryptService;

  @Inject()
  user: UserService;

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10
  );

  async findUserByEmail(email: string) {
    return this.mysql.User.findOne({
      where: {
        email,
      },
    });
  }
  createUser({ email, password, nickname }) {
    const id = this.id.genId('u');
    return this.mysql.sequelize.transaction(async t => {
      return Promise.all([
        // 用户账户数据
        this.mysql.User.create(
          {
            id,
            email,
            password: await this.encrypt.encryptPassword(password),
          },
          { transaction: t }
        ),

        // 用户信息表数据
        await this.mysql.UserProfile.create(
          {
            id,
            nickname,
            avatar: `https://api.multiavatar.com/${this.avatarGenerator()}.png?apikey=${'token'}`,
          },
          {
            transaction: t,
          }
        ),
      ]);
    });
  }

  async createSession(userId) {
    const sessionId = uuid.v4();
    await this.mysql.Session.create({
      userId,
      sessionId,
    });
    return sessionId;
  }
}
