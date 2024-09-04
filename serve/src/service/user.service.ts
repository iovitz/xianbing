import { App, Inject, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { MysqlService } from '../db/mysql/mysql.service';
import { IUserOptions } from '../interface';
import { pick } from 'lodash';

type UserParams = Parameters<MysqlService['UserProfile']['findOne']>[0];

@Provide()
export class UserService {
  @Inject()
  mysql: MysqlService;

  @App()
  app: Application;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  getUserProfileBy(where: UserParams['where'], attributes: string[]) {
    return this.mysql.UserProfile.findOne({
      where,
      attributes,
    });
  }

  getUserProfileInfo(userProfileModel: unknown) {
    return {
      ...pick(userProfileModel, [
        'id',
        'avatar',
        'nickname',
        'fansNumber',
        'voiceNumber',
      ]),
    };
  }
}
