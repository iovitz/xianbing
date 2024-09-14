import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import { pick } from 'lodash';
import { InjectRepository } from '@midwayjs/sequelize';
import { UserProfile } from '../mysql/user-profile';
import { Repository } from 'sequelize-typescript';
import { FindOptions } from 'sequelize';

@Provide()
export class UserService {
  @InjectRepository(UserProfile)
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
    where: FindOptions<UserProfile>['where'],
    attributes: FindOptions<UserProfile>['attributes'],
    include: FindOptions<UserProfile>['include'] = []
  ) {
    return this.userProfileModel.findOne({
      where,
      attributes,
      include,
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
