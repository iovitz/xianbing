import { App, Inject, Provide } from '@midwayjs/core';
import { customAlphabet } from 'nanoid';
import * as uuid from 'uuid';
import { Application } from '@midwayjs/koa';
import { EncryptService } from './encrypt.service';
import * as UAParser from 'ua-parser-js';
import { Session } from '../models/session.sqlite';
import { InjectDataSource, InjectEntityModel } from '@midwayjs/typeorm';
import {
  DataSource,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from '../models/user.sqlite';
import { UserProfile } from '../models/user-profile.sqlite';

@Provide()
export class AuthService {
  @App()
  app: Application;

  @InjectDataSource()
  defaultDataSource: DataSource;

  @InjectEntityModel(Session)
  private sessionModel: Repository<Session>;

  @InjectEntityModel(User)
  private User: Repository<User>;

  @Inject()
  private encrypt: EncryptService;

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10
  );

  private uaParser = new UAParser();

  findUserBy(where: FindOptionsWhere<User>, select: FindOptionsSelect<User>) {
    return this.User.findOne({
      where,
      select,
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
    return this.defaultDataSource.transaction(async entityManager => {
      const user = new User();
      const userProfile = new UserProfile();

      user.userId = userProfile.uid = id;

      userProfile.nickname = `用户${id.substring(0, 5)}`;
      user.email = email;
      user.password = await this.encrypt.encryptPassword(password);

      await entityManager.save(user);

      const profile = await entityManager.save(userProfile);
      return profile;
    });
  }

  async createSession(userId: string, useragent?: string) {
    const sessionId = uuid.v4();
    await this.sessionModel.create({
      sessionId,
      userId,
      useragent: useragent,
    });
    return sessionId;
  }
}
