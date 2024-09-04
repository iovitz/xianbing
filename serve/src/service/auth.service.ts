import { App, Inject, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { customAlphabet } from 'nanoid';
import { EncryptService } from './encrypt.service';
import { IdService } from './id.service';
import { UserService } from './user.service';
import * as uuid from 'uuid';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserProfile } from '../entity/user-profile.entity';
import {
  FindOptionsSelectByString,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from '../entity/user.entity';
import { Session } from '../entity/session.entity';

@Provide()
export class AuthService {
  @App()
  app: Application;

  @Inject()
  id: IdService;

  @Inject()
  encrypt: EncryptService;

  @Inject()
  user: UserService;

  @InjectEntityModel(UserProfile)
  userProfileModel: Repository<UserProfile>;

  @InjectEntityModel(Session)
  sessionModel: Repository<Session>;

  @InjectEntityModel(User)
  userModel: Repository<User>;

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10
  );

  findUserBy(
    where: FindOptionsWhere<User>,
    select: FindOptionsSelectByString<User>
  ) {
    return this.userModel.findOne({
      where,
      select,
    });
  }

  createUser() {
    const id = this.id.genId('u');
    return id;
  }

  async createSession(userId) {
    const sessionId = uuid.v4();
    return sessionId;
  }
}
