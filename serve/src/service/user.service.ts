import { App, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { IUserOptions } from '../interface';
import { pick } from 'lodash';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserProfile } from '../entity/user-profile.entity';
import { FindOptionsSelect, FindOptionsWhere, Repository } from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(UserProfile)
  userProfileModel: Repository<UserProfile>;

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

  getUserProfileBy(
    where: FindOptionsWhere<UserProfile>,
    select: FindOptionsSelect<UserProfile>
  ) {
    return this.userProfileModel.findOne({
      where,
      select,
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
