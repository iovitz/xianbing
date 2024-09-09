import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';
import { CheckRegisterDTO } from '../dto/auth.dto';
import { UserService } from '../service/user.service';

@ApiTags('User用户数据')
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/info')
  async getInfo(@Query() query: CheckRegisterDTO) {
    return query;
  }
}
