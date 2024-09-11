import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import { ApiTags } from '@midwayjs/swagger';
import { CheckRegisterDTO } from './auth.dto';
import { UserService } from '../service/user.service';

@ApiTags('Setting客户端配置')
@Controller('/api/settings')
export class SettingController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/info')
  async getInfo(@Query() query: CheckRegisterDTO) {
    return query;
  }
}
