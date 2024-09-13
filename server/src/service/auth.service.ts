import { App, Inject, Provide } from '@midwayjs/core';
import { customAlphabet } from 'nanoid';
import * as uuid from 'uuid';
import { InjectDataSource, InjectEntityModel } from '@midwayjs/typeorm';
import {
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
  DataSource,
} from 'typeorm';
import { User } from '../entity/user.mysql';
import { Session } from '../entity/session.mysql';
import { UserProfile } from '../entity/user-profile.mysql';
import { Application } from '@midwayjs/koa';
import { EncryptService } from './encrypt.service';

@Provide()
export class AuthService {
  @App()
  app: Application;

  @InjectEntityModel(Session)
  private sessionModel: Repository<Session>;

  @InjectEntityModel(User)
  private userModel: Repository<User>;

  @InjectDataSource()
  private dataSource: DataSource;

  @Inject()
  private encrypt: EncryptService;

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10
  );

  findUserBy(where: FindOptionsWhere<User>, select: FindOptionsSelect<User>) {
    return this.userModel.findOne({
      where,
      select,
    });
  }

  genUserId() {
    const id = this.encrypt.genRandomId('u');
    return id;
  }

  async createUser(email: string, password: string) {
    const id = this.genUserId();
    const profile = await this.dataSource.transaction(async entityManager => {
      const user = await entityManager.create(User, {
        id,
        email,
        password: this.encrypt.md5(password),
      });
      await entityManager.save(user);

      const profile = await entityManager.create(UserProfile, {
        user,
        nickname: `用户${id}`,
        avatar: `https://api.multiavatar.com/Starcrasher.svg?apikey=${this.app.getConfig(
          'multiAvatar.key'
        )}`,
      });
      await entityManager.save(profile);
      return profile;
    });
    const session = await this.createSession(profile.user);
    return {
      nickname: profile.nickname,
      email: profile.nickname,
      id: profile.user.id,
      session,
    };
  }

  async createSession(user: User) {
    const sessionId = uuid.v4();
    await this.sessionModel.insert({
      sessionId,
      user,
    });
    return sessionId;
  }
}
