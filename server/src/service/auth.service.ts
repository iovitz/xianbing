import { App, Inject, Provide } from '@midwayjs/core';
import { customAlphabet } from 'nanoid';
import * as uuid from 'uuid';
import { Application } from '@midwayjs/koa';
import { EncryptService } from './encrypt.service';
import { InjectRepository } from '@midwayjs/sequelize';
import { Session } from '../mysql/session';
import { User } from '../mysql/user';
import { Repository } from 'sequelize-typescript';
import { FindAttributeOptions, WhereOptions } from 'sequelize';
import { UserProfile } from '../mysql/user-profile';
import * as UAParser from 'ua-parser-js';

@Provide()
export class AuthService {
  @App()
  app: Application;

  @InjectRepository(Session)
  private sessionModel: Repository<Session>;

  @InjectRepository(User)
  private User: Repository<User>;

  @InjectRepository(UserProfile)
  private UserProfile: Repository<UserProfile>;

  @Inject()
  private encrypt: EncryptService;

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10
  );

  private uaParser = new UAParser();

  findUserBy(where: WhereOptions<User>, attributes: FindAttributeOptions) {
    return this.User.findOne({
      where,
      attributes,
    });
  }

  getUAParser(useragent: string) {
    this.uaParser.setUA(useragent);
    return this.uaParser.getResult();
  }

  genUserId() {
    const id = this.encrypt.genRandomId('u');
    return id;
  }

  async createUser(email: string, password: string) {
    const id = this.genUserId();
    const transaction = await this.User.sequelize.transaction();
    try {
      await this.User.create(
        {
          id,
          email,
          password: this.encrypt.md5(password),
        },
        { transaction }
      );
      // 其他操作...
      const userProfile = await this.UserProfile.create(
        {
          id,
          nickname: `用户${id.substring(0, 5)}`,
        },
        { transaction, raw: true }
      );

      await transaction.commit(); // 提交事务
      return userProfile;
    } catch (error) {
      await transaction.rollback(); // 回滚事务
      throw error;
    }
  }

  async createSession(userId: string, useragent?: string) {
    const sessionId = uuid.v4();
    const uaDetail = this.getUAParser(useragent);
    await this.sessionModel.create({
      sessionId,
      userId,
      os: uaDetail.os.name,
      osVersion: uaDetail.os.version,
      engine: uaDetail.engine.name,
      browser: uaDetail.browser.name,
      browserVersion: uaDetail.browser.version,
      deviceModel: uaDetail.device.model,
      deviceVendor: uaDetail.device.vendor,
      useragent,
    });
    return sessionId;
  }
}
