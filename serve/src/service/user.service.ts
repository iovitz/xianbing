import { App, Inject, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { MysqlService } from '../db/mysql/mysql.service';
import { IUserOptions } from '../interface';

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
}
