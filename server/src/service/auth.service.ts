import { Inject, Provide } from '@midwayjs/core';
import { customAlphabet } from 'nanoid';
import { IdService } from './id.service';
import * as uuid from 'uuid';
import { InjectEntityModel } from '@midwayjs/typeorm';
import {
  FindOptionsSelectByString,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from '../entity/user.entity';
import { Session } from '../entity/session.entity';

@Provide()
export class AuthService {
  @Inject()
  private id: IdService;

  @InjectEntityModel(Session)
  private sessionModel: Repository<Session>;

  @InjectEntityModel(User)
  private userModel: Repository<User>;

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

  async createSession(userId: string) {
    const sessionId = uuid.v4();
    await this.sessionModel.insert({
      userId,
      sessionId,
    });
    return sessionId;
  }
}
