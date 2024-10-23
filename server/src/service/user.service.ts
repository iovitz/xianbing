import { Provide } from '@midwayjs/core';
import { IUserOptions } from '../interface';
import { pick } from 'lodash';
import {
  FindOneOptions,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { User } from '../models/user.sqlite';
import { InjectEntityModel } from '@midwayjs/typeorm';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  private User: Repository<User>;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  getUserProfileBy(
    where: FindOptionsWhere<User>,
    select: FindOptionsSelect<User> = {},
    relations: FindOneOptions<User>['relations'] = []
  ) {
    return this.User.findOne({
      where,
      select,
      relations,
    });
  }

  getUserProfileInfo(userModel: unknown) {
    return {
      ...pick(userModel, [
        'id',
        'avatar',
        'nickname',
        'fansNumber',
        'voiceNumber',
      ]),
    };
  }
}
