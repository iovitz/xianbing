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
    const key = this.app.getConfig('multiAvatar.key');
    const user = new User();

    user.userId = id;

    user.nickname = `用户${id.substring(0, 5)}`;
    user.email = email;
    user.password = await this.encrypt.encryptPassword(password);
    user.avatar = `https://api.multiavatar.com/Starcrasher.png?apikey=${key}`;

    await this.User.save(user);
    return user;
  }

  async createSession(userId: string, useragent?: string) {
    const sessionId = uuid.v4();
    const session = this.sessionModel.create({
      sessionId,
      userId,
      useragent: useragent,
    });
    this.sessionModel.save(session);
    return sessionId;
  }
}
