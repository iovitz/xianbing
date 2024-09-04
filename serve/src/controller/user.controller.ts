import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { CheckRegisterDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('/api/user')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/check-register')
  async checkRegister(@Query() query: CheckRegisterDTO) {
    return query;
  }
}
