import { App, Inject, Provide } from '@midwayjs/core';
import { Application } from '@midwayjs/koa';
import { MysqlService } from '../db/mysql/mysql.service';

@Provide()
export class AuthService {
  @Inject()
  mysql: MysqlService;

  @App()
  app: Application;

  async findUserByEmail(email: string) {
    return this.mysql.User.findOne({
      where: {
        email,
      },
    });
  }
}
