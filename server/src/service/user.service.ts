import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import { pick } from 'lodash';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { UserProfile } from '../models/user-profile.sqlite';
import {
  FindOneOptions,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(UserProfile)
  userProfileModel: Repository<UserProfile>;

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
    select: FindOptionsSelect<UserProfile> = {},
    relations: FindOneOptions<UserProfile>['relations'] = []
  ) {
    return this.userProfileModel.findOne({
      where,
      select,
      relations,
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
